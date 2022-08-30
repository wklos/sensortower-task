import {
  ComparisonAttribute,
  DeviceType,
  Measure,
  OperatingSystem,
  TimeRange,
} from '../enums/Attributes.js';

export const DefaultSalesReportQueryParameters = {
  os: OperatingSystem.IOS,
  comparison_attribute: ComparisonAttribute.ABSOLUTE,
  time_range: TimeRange.MONTH,
  measure: Measure.REVENUE,
  category: 6000,
  date: '2021-01-04',
  device_type: DeviceType.TOTAL,
};
