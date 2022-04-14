import { useCallback, useMemo } from "react";
import { useAppSelector } from "store";
import { isTokensConsistMp } from "store/Dashboard";
import { useGetProductsQuery } from "store/Products";
import { useGetSalesDynamicsQuery } from "store/Sales";
import HelmetTitle from "../../UI/atoms/Helmet";
import BrandsTable from "../../UI/organisms/SalesDynamics/BrandsTable";
import TableWeek from "../../UI/organisms/SalesDynamics/TableWeek";
import AreaChartBrands from "../../UI/organisms/SalesDynamics/AreaChart";
import { IS_DEV } from "configuration/baseUrls";
import OnReconstructionPage from "UI/atoms/ServicePages/OnReconstructionPage";
import { Box, SxProps } from "@mui/material";

export const SalesDynamicsPage = () => {
  const { jhonWeekSelector, mpSelector, shopSelector } = useAppSelector(
    (st) => st.ui
  );
  const { d, dd } = jhonWeekSelector;
  console.log(d, dd);
  const isTokensOfMp = useAppSelector(isTokensConsistMp);
  const isConsistense = useCallback(
    (mp: supportedMarketTypes, tokens: string[]) => isTokensOfMp(mp, tokens),
    [isTokensOfMp]
  );
  const skip = useMemo(
    () =>
      mpSelector.length === 0 ||
      shopSelector.length === 0 ||
      !isConsistense(mpSelector[0], shopSelector),
    [isConsistense, mpSelector, shopSelector]
  );

  const { data: products, isFetching: isProductsLoading } = useGetProductsQuery(
    {
      d: "all",
      dd: 0,
      m: mpSelector[0],
      user_id: shopSelector,
    },
    { skip }
  );

  const productIds = useMemo(
    () =>
      Array.isArray(products)
        ? products
            .filter((pr) => !(pr.name === "Карточка удалена" || pr.name === ""))
            .map((pr) => pr.nm_id)
        : [],
    [products]
  );

  const skipSalesDynamics = useMemo(
    () => productIds.length === 0,
    [productIds.length]
  );

  const { data, isFetching } = useGetSalesDynamicsQuery(
    {
      d,
      dd,
      nm_id: productIds,
    },
    { skip: skipSalesDynamics }
  );
  console.log("tyt");

  console.log(isFetching);

  const isLoading = useMemo(
    () => isProductsLoading || isFetching,
    [isFetching, isProductsLoading]
  );
  const salesDynamicsData = useMemo(
    () => (data != null ? data : { brands: [], graph: [] }),
    [data]
  );

  console.log("tyt1");

  console.log(salesDynamicsData);

  return (
    <>
      <HelmetTitle title="salesDynamics" />
      {IS_DEV ? (
        <>
          <Box sx={styles.rootTable}>
            <AreaChartBrands
              isLoading={isLoading}
              salesDynamicsData={salesDynamicsData}
            />
            <TableWeek
              isLoading={isLoading}
              salesDynamicsData={salesDynamicsData}
            />
          </Box>
          <BrandsTable
            isLoading={isLoading}
            salesDynamicsData={salesDynamicsData}
          />
        </>
      ) : (
        <OnReconstructionPage />
      )}
    </>
  );
};

const styles: Record<string, SxProps> = {
  rootTable: {
    overflow: "auto",
    width: "100%",
  },
};

export default SalesDynamicsPage;
