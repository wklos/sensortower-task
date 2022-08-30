import { UriBuilder } from './apiUtils.js';
import { DefaultSalesReportQueryParameters } from '../testData/salesReportQuery.js';
import 'dotenv/config';
import supertest from 'supertest';
import { expect } from 'chai';
import {
  AttributeName,
  ComparisonAttribute,
  Categories_IOS,
  OperatingSystem,
  Categories_Android,
  Measure,
} from '../enums/Attributes.js';

const BASE_URL = process.env.BASE_URL;
const ENDPOINT = 'sales_report_estimates_comparison_attributes';

export const getSalesReportEstimatesComparisonAttributes = async (
  salesReportQueryParameters = DefaultSalesReportQueryParameters,
  auth_token = process.env.AUTH_TOKEN
) => {
  const path = `v1/${salesReportQueryParameters.os}/${ENDPOINT}`;
  const queryParameters = { ...salesReportQueryParameters, auth_token };
  delete queryParameters['os'];
  const queryString = new URLSearchParams(queryParameters).toString();
  const url = new UriBuilder(BASE_URL, path)
    .setQueryString(queryString)
    .build();

  return await supertest(url.origin).get(`/${url.pathname}${url.search}`);
};

export const validateErrorMessageForReportQueryParameter = (
  parameter,
  expectedMessage,
  response
) => {
  if (![...Object.values(AttributeName)].includes(parameter)) {
    console.warn(`Unsupported parameter: ${parameter}`);
  }

  if (
    [AttributeName.COMPARISON_ATTRIBUTE, AttributeName.MEASURE].includes(
      parameter
    )
  ) {
    expect(response.text).to.equal(`${expectedMessage}`);
  }

  if ([AttributeName.CATEGORY].includes(parameter)) {
    const errors = response.body.errors.map((error) => error.title);
    expect(errors).to.contain(`${expectedMessage}`);
  }
};

export const validateSalesReportResults = (
  salesReportQueryParameters,
  response
) => {
  expect(response.body).to.not.be.empty;
  response.body.forEach((app) => {
    expect(app).to.not.be.empty;
    // TODO: it would be worth adding schema validation for each returned application data structure
    // FIXME: See README.md -> QA Notes
    // validatePrimaryCategory(
    //   app,
    //   salesReportQueryParameters.os,
    //   salesReportQueryParameters.category
    // );
  });
  validateAppOrder(salesReportQueryParameters, response);
};

export const validatePrimaryCategory = (app, os, expectedCategoryCode) => {
  const expectedCategoryString =
    os === OperatingSystem.IOS
      ? Categories_IOS[expectedCategoryCode]
      : Categories_Android[expectedCategoryCode];
  expect(app.custom_tags['Primary Category']).to.equal(expectedCategoryString);
};

export const validateAppOrder = (parameters, response) => {
  let apps = [];

  if (parameters.measure === Measure.REVENUE) {
    if (parameters.comparison_attribute === ComparisonAttribute.ABSOLUTE) {
      apps = response.body.map((app) => app.revenue_absolute);
    }
    if (parameters.comparison_attribute === ComparisonAttribute.DELTA) {
      apps = response.body.map((app) => app.revenue_delta);
    }
    if (
      parameters.comparison_attribute === ComparisonAttribute.TRANSFORMED_DELTA
    ) {
      apps = response.body.map((app) => app.revenue_transformed_delta);
    }
  }

  if (parameters.measure === Measure.UNITS) {
    if (parameters.comparison_attribute === ComparisonAttribute.ABSOLUTE) {
      apps = response.body.map((app) => app.units_absolute);
    }
    if (parameters.comparison_attribute === ComparisonAttribute.DELTA) {
      apps = response.body.map((app) => app.units_delta);
    }
    if (
      parameters.comparison_attribute === ComparisonAttribute.TRANSFORMED_DELTA
    ) {
      apps = response.body.map((app) => app.units_transformed_delta);
    }
  }

  expect(apps).to.not.be.empty;
  expect(isDescending(apps), `Apps are in incorrect order: [${apps}]`).to.be
    .true;
};

const isDescending = (array) => {
  return array.every((element, index) => {
    return index === 0 || element <= array[index - 1];
  });
};
