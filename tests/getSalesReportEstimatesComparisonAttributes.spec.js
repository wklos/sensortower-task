import { expect } from 'chai';
import {
  AttributeName,
  ComparisonAttribute,
  Measure,
} from '../enums/Attributes.js';
import { DefaultSalesReportQueryParameters } from '../testData/salesReportQuery.js';
import {
  getSalesReportEstimatesComparisonAttributes,
  validateErrorMessageForReportQueryParameter,
  validateSalesReportResults,
} from '../utils/storeIntelligenceApiUtils.js';

describe('GET /v1/{os}/sales_report_estimates_comparison_attributes', () => {
  describe('Positive cases', () => {
    [
      {
        [AttributeName.CATEGORY]: 6000,
        [AttributeName.COMPARISON_ATTRIBUTE]: ComparisonAttribute.ABSOLUTE,
        [AttributeName.MEASURE]: Measure.REVENUE,
      },
      {
        [AttributeName.CATEGORY]: 6000,
        [AttributeName.COMPARISON_ATTRIBUTE]: ComparisonAttribute.ABSOLUTE,
        [AttributeName.MEASURE]: Measure.UNITS,
      },
      {
        [AttributeName.CATEGORY]: 6000,
        [AttributeName.COMPARISON_ATTRIBUTE]: ComparisonAttribute.DELTA,
        [AttributeName.MEASURE]: Measure.REVENUE,
      },
      {
        [AttributeName.CATEGORY]: 6000,
        [AttributeName.COMPARISON_ATTRIBUTE]: ComparisonAttribute.DELTA,
        [AttributeName.MEASURE]: Measure.UNITS,
      },
      {
        [AttributeName.CATEGORY]: 6000,
        [AttributeName.COMPARISON_ATTRIBUTE]:
          ComparisonAttribute.TRANSFORMED_DELTA,
        [AttributeName.MEASURE]: Measure.REVENUE,
      },
      {
        [AttributeName.CATEGORY]: 6000,
        [AttributeName.COMPARISON_ATTRIBUTE]:
          ComparisonAttribute.TRANSFORMED_DELTA,
        [AttributeName.MEASURE]: Measure.UNITS,
      },
      {
        [AttributeName.CATEGORY]: 6001,
        [AttributeName.COMPARISON_ATTRIBUTE]: ComparisonAttribute.ABSOLUTE,
        [AttributeName.MEASURE]: Measure.REVENUE,
      },
      {
        [AttributeName.CATEGORY]: 6001,
        [AttributeName.COMPARISON_ATTRIBUTE]: ComparisonAttribute.ABSOLUTE,
        [AttributeName.MEASURE]: Measure.UNITS,
      },
      {
        [AttributeName.CATEGORY]: 6001,
        [AttributeName.COMPARISON_ATTRIBUTE]: ComparisonAttribute.DELTA,
        [AttributeName.MEASURE]: Measure.REVENUE,
      },
      {
        [AttributeName.CATEGORY]: 6001,
        [AttributeName.COMPARISON_ATTRIBUTE]: ComparisonAttribute.DELTA,
        [AttributeName.MEASURE]: Measure.UNITS,
      },
      {
        [AttributeName.CATEGORY]: 6001,
        [AttributeName.COMPARISON_ATTRIBUTE]:
          ComparisonAttribute.TRANSFORMED_DELTA,
        [AttributeName.MEASURE]: Measure.REVENUE,
      },
      {
        [AttributeName.CATEGORY]: 6001,
        [AttributeName.COMPARISON_ATTRIBUTE]:
          ComparisonAttribute.TRANSFORMED_DELTA,
        [AttributeName.MEASURE]: Measure.UNITS,
      },
    ].forEach((testData) => {
      it(`should return results for following parameters:\n\t${JSON.stringify(
        testData
      )}`, async () => {
        // Copy the object with default query parameters and update it with test data
        const salesReportQueryParameters = Object.assign(
          DefaultSalesReportQueryParameters,
          testData
        );

        // Send request
        const res = await getSalesReportEstimatesComparisonAttributes(
          salesReportQueryParameters
        );
        // Validate results
        expect(res.statusCode).to.equal(200);
        validateSalesReportResults(salesReportQueryParameters, res);
      });
    });
  });

  describe('Negative cases', () => {
    [
      {
        parameter: AttributeName.CATEGORY,
        expectedMessage: `Required parameter: ${AttributeName.CATEGORY} is missing`,
      },
      {
        parameter: AttributeName.COMPARISON_ATTRIBUTE,
        expectedMessage: 'Comparison attribute is not included in the list',
      },
      {
        parameter: AttributeName.MEASURE,
        expectedMessage: 'Measure is not included in the list',
      },
    ].forEach((testData) => {
      it(`should return error for missing default query parameter: ${testData.parameter}`, async () => {
        // Copy the object with default query parameters
        const salesReportQueryParameters = JSON.parse(
          JSON.stringify(DefaultSalesReportQueryParameters)
        );
        // Remove parameter from query
        delete salesReportQueryParameters[testData.parameter];
        // Send request
        const res = await getSalesReportEstimatesComparisonAttributes(
          salesReportQueryParameters
        );
        // Validate results
        expect(res.statusCode).to.equal(422);
        validateErrorMessageForReportQueryParameter(
          testData.parameter,
          testData.expectedMessage,
          res
        );
      });
    });

    [
      {
        parameter: AttributeName.CATEGORY,
        value: 'bogus',
        expectedMessage: `Invalid ${AttributeName.CATEGORY}`,
      },
      {
        parameter: AttributeName.COMPARISON_ATTRIBUTE,
        value: 'bogus',
        expectedMessage: 'Comparison attribute is not included in the list',
      },
      {
        parameter: AttributeName.MEASURE,
        value: 'bogus',
        expectedMessage: 'Measure is not included in the list',
      },
    ].forEach((testData) => {
      it(`should return error for query parameter "${testData.parameter}" with invalid value: ${testData.value}`, async () => {
        // Copy the object with default query parameters
        const salesReportQueryParameters = JSON.parse(
          JSON.stringify(DefaultSalesReportQueryParameters)
        );
        // Update parameter value
        salesReportQueryParameters[testData.parameter] = testData.value;
        // Send request
        const res = await getSalesReportEstimatesComparisonAttributes(
          salesReportQueryParameters
        );
        // Validate results
        expect(res.statusCode).to.equal(422);
        validateErrorMessageForReportQueryParameter(
          testData.parameter,
          testData.expectedMessage,
          res
        );
      });
    });

    [
      {
        auth_token: '',
        message: 'You need to sign in or sign up before continuing.',
      },
      {
        auth_token: 'bogus',
        message: 'Invalid authentication token.',
      },
    ].forEach((testData) => {
      it(`should return error for invalid auth_token: ${testData.auth_token}`, async () => {
        // Copy the object with default query parameters
        const salesReportQueryParameters = JSON.parse(
          JSON.stringify(DefaultSalesReportQueryParameters)
        );
        // Update auth_token value
        const auth_token = testData.auth_token;
        // Send request
        const res = await getSalesReportEstimatesComparisonAttributes(
          salesReportQueryParameters,
          auth_token
        );
        // Validate results
        expect(res.statusCode).to.equal(401);
        expect(res.body.error).to.equal(testData.message);
      });
    });
  });
});
