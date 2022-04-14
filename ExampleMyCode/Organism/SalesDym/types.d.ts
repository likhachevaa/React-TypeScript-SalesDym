interface IBrandsTableProps {
  isLoading: boolean;
  salesDynamicsData: ISalesDynamicsTransformedRes;
  format?: (
    value: string | number,
    maxSum: string | number
  ) => JSX.Element | string | number;
}

interface ITableWeekColunms {
  id: keyof IHoursDataTransformed;
  title: string;
  format?: (
    value: string | number,
    maxSum: string | number
  ) => JSX.Element | string | number;
}

interface ITableBrandsColunms {
  id: keyof IBrandTableData;
  title: string;
  format?: (value: string | number) => JSX.Element | string | number;
}
