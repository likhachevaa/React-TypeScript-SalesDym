import {
  SxProps,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableRow,
  Box,
} from "@mui/material";
import { memo, useMemo } from "react";
import { useTranslation } from "react-i18next";
import ErrorPage from "UI/atoms/ServicePages/ErrorPage";
import { WeekColumns } from "./TableWeekColumns";

const BrandsTable = ({ isLoading, salesDynamicsData }: IBrandsTableProps) => {
  const { t } = useTranslation(["products", "date", "common"]);

  const hours = useMemo(() => {
    const addZero = (n: number) => (n < 10 ? `0${n}` : n);
    const arr = [];
    for (let i = 0; i < 24; i++) {
      arr.push(`${addZero(i)}${t`date:h`}`);
    }
    return arr;
  }, [t]);

  const sumCountAll = salesDynamicsData.graph.map((el) => el["sum_count"]);

  const maxSum = useMemo(() => {
    return Math.max.apply(null, sumCountAll);
  }, [sumCountAll]);

  const failData = useMemo(
    () => sumCountAll.every((elem) => elem === 0),
    [sumCountAll]
  );

  return (
    <>
      {isLoading || failData === true ? (
        <Box sx={styles.errorStyles}>
          <ErrorPage
            title={isLoading ? t`products:loadGoogs` : t`products:failData`}
          />
        </Box>
      ) : (
        <TableContainer sx={styles.root}>
          {failData === false ? (
            <Table stickyHeader sx={styles.tableStyle}>
              <TableBody sx={styles.bodyTable}>
                {salesDynamicsData.graph.map((day, i) => (
                  <TableRow key={`row-${i}`}>
                    {WeekColumns.map((col, n) => {
                      const value = day[col.id];
                      return (
                        <TableCell
                          sx={styles.bodyTable}
                          id={`${i}-${n}`}
                          key={`cell-${i}-${n}`}
                        >
                          {col.format ? col.format(value, maxSum) : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                ))}
              </TableBody>

              <TableFooter>
                <TableRow sx={{ width: "max-content" }}>
                  <TableCell sx={{ width: "max-content" }}></TableCell>
                  {hours.map((hours, i) => (
                    <TableCell
                      sx={{
                        fontSize: "14px",
                        fontWeight: 700,
                        color: "#757575",
                        width: "36px !important",
                        height: "36px",
                      }}
                      key={i}
                    >
                      {hours}
                    </TableCell>
                  ))}
                </TableRow>
              </TableFooter>
            </Table>
          ) : null}
        </TableContainer>
      )}
    </>
  );
};

const styles: Record<string, SxProps> = {
  root: {
    bgcolor: "common.white",
    minWidth: { xs: "1600px", md: "1470px" },
    borderBottomLeftRadius: "12px",
    borderBottomRightRadius: "12px",
    overflow: "hidden",
    maxHeight: { xs: "calc(100vh - 280px)", sm: "calc(100vh - 238px)" },
    pl: "20px",

    "& td": {
      width: "36px",
    },
  },

  errorStyles: {
    width: { xs: "100%" },
    bgcolor: "common.white",
    borderRadius: "12px",
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
    border: "1px solid #2196F3",
    "& td": {
      textAlign: "center",
      p: 0,
    },
    "& td:first-of-type": {
      border: "none",
      maxWidth: "50px !important",
      minWidth: "20px",
    },
    "& td:last-of-type": {
      border: "none",
      textAlign: "end",
      width: "max-content",
    },
  },
};

export default memo(BrandsTable);
