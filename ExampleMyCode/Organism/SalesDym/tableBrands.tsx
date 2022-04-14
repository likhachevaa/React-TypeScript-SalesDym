import {
  Box,
  LinearProgress,
  SxProps,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { memo, useMemo } from "react";
import { useTranslation } from "react-i18next";

const BrandsTable = ({ isLoading, salesDynamicsData }: IBrandsTableProps) => {
  const { t } = useTranslation(["products", "date", "common"]);
  console.log(salesDynamicsData);
  const head = useMemo(
    () =>
      salesDynamicsData != null &&
      Array.isArray(salesDynamicsData.brands) &&
      salesDynamicsData.brands.length > 0
        ? Object.values(salesDynamicsData.brands[0])[1]?.map(
            (b: IBrandData) => b.date
          )
        : [],
    [salesDynamicsData]
  );

  const allCount = useMemo(
    () =>
      salesDynamicsData != null &&
      Array.isArray(salesDynamicsData.brands) &&
      salesDynamicsData.brands.length > 0
        ? salesDynamicsData.brands.map((brand) =>
            Object.values(brand)[1]?.map((b: IBrandData) => b.all_count)
          )
        : [],
    [salesDynamicsData]
  );

  const allPrice = useMemo(
    () =>
      salesDynamicsData != null &&
      Array.isArray(salesDynamicsData.brands) &&
      salesDynamicsData.brands.length > 0
        ? salesDynamicsData.brands.map((brand) =>
            Object.values(brand)[1]?.map((b: IBrandData) => b.all_price)
          )
        : [],
    [salesDynamicsData]
  );

  const rows = useMemo(() => {
    if (salesDynamicsData != null && Array.isArray(salesDynamicsData.brands)) {
      const res = salesDynamicsData.brands?.map((b) => [
        b.brand,
        ...(b.graph?.map((g) => g.all_count) || []),
      ]);
      return res;
    } else {
      return [];
    }
  }, [salesDynamicsData]);

  const priceData = rows?.map((row, i) =>
    allPrice[i]?.reduce((prev: never, acc: never) => prev + acc, 0)
  );

  const maxPrice = useMemo(() => {
    return Math.max.apply(null, priceData);
  }, [priceData]);

  const fail = useMemo(
    () => priceData.every((elem) => elem === 0),
    [priceData]
  );

  return (
    <>
      <Box sx={styles.loading}>{isLoading && <LinearProgress />} </Box>

      <TableContainer sx={styles.root}>
        {fail !== true && head !== undefined ? (
          <Table stickyHeader>
            <TableHead sx={styles.headerTable}>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 400,
                  pt: "16px",
                  pl: "16px",
                }}
              >
                {t`products:brands`}
              </Typography>
              <TableRow>
                <TableCell
                  sx={styles.headerTable}
                >{t`products:brand`}</TableCell>

                {head?.map((date: string, n: number) => (
                  <TableCell sx={styles.headerTable} key={n}>
                    {date}
                  </TableCell>
                ))}
                <TableCell sx={styles.headerTable}>
                  {t`products:total`} {t`products:pcs`}{" "}
                </TableCell>
                <TableCell sx={styles.headerTable}>
                  {t`products:total`} ₽{" "}
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody sx={styles.bodyTable}>
              {rows.map((row, i) => {
                const valuePrice = allPrice[i]?.reduce(
                  (prev: never, acc: never) => prev + acc,
                  0
                );
                return (
                  <TableRow key={i}>
                    {row.map((cell, n) => (
                      <TableCell id={`${i}-${n}`} key={`${i}-${n}`}>
                        {cell}
                      </TableCell>
                    ))}

                    <TableCell>
                      {allCount[i]?.reduce(
                        (prev: never, acc: never) => prev + acc,
                        0
                      )}
                    </TableCell>
                    <TableCell>
                      <Box sx={{ maxWidth: "350px", minWidth: "40px" }}>
                        <Box
                          sx={{
                            bgcolor: "#90CAF9",
                            height: "51px",
                            minWidth: "60px",
                            paddingRight: "5px",
                            width: `${(+valuePrice * 100) / +maxPrice}%`,

                            paddingTop: "20px",
                          }}
                        >
                          {" "}
                          {valuePrice} ₽
                        </Box>
                      </Box>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        ) : null}
      </TableContainer>
    </>
  );
};

const styles: Record<string, SxProps> = {
  root: {
    bgcolor: "common.white",
    mt: "49px",
    borderRadius: "12px",
    textAlign: "end",
    "& td": {
      width: "75px",
    },
  },
  headerTable: {
    fontSize: "12px",
    fontWeight: 400,
    color: "#2196F3",
    "& th": {
      textAlign: "end",
    },
    "& th:first-of-type": {
      textAlign: "left",
    },
    "& p": {
      textAlign: "left",
      color: "common.black",
    },
    "& th:last-of-type": {
      border: "none",
      textAlign: "left",
    },
  },
  hours: {
    display: "flex",
    flexDirection: "row",
  },
  loading: {
    width: "100%",
    height: "4px",
    position: "sticky",
  },
  bodyTable: {
    "& td": {
      textAlign: "end",
      fontSize: "14px",
      fontWeight: 400,
      color: "#757575",
      width: "170px",
    },
    "& td:first-of-type": {
      textAlign: "left",
    },

    "& td:last-of-type": {
      border: "none",
      color: "common.white",
      p: "0 0 0 16px",
      width: "max-content",
    },
  },
};

export default memo(BrandsTable);
