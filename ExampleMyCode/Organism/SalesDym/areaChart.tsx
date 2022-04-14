import { Box, SxProps } from "@mui/material";
import { Fragment, memo, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { useAppSelector } from "store";

const AreaChartBrands = ({
  isLoading,
  salesDynamicsData,
}: IBrandsTableProps) => {
  const { t } = useTranslation(["products", "date"]);
  const { darkMode } = useAppSelector((st) => st.ui);

  const resZero = useMemo(
    () => salesDynamicsData.graph.map((el) => el["0"]),
    [salesDynamicsData.graph]
  );

  const valueZero = useMemo(
    () => resZero.reduce((summ, prev) => summ + prev, 0),
    [resZero]
  );

  const resOne = useMemo(
    () => salesDynamicsData.graph.map((el) => el["1"]),
    [salesDynamicsData.graph]
  );
  const valueOne = useMemo(
    () => resOne.reduce((summ, prev) => summ + prev, 0),
    [resOne]
  );

  const resTwo = useMemo(
    () => salesDynamicsData.graph.map((el) => el["2"]),
    [salesDynamicsData.graph]
  );

  const valueTwo = useMemo(
    () => resTwo.reduce((summ, prev) => summ + prev, 0),
    [resTwo]
  );

  const resThree = useMemo(
    () => salesDynamicsData.graph.map((el) => el["3"]),
    [salesDynamicsData.graph]
  );

  const valueThree = useMemo(
    () => resThree.reduce((summ, prev) => summ + prev, 0),
    [resThree]
  );

  const resFour = useMemo(
    () => salesDynamicsData.graph.map((el) => el["4"]),
    [salesDynamicsData.graph]
  );

  const valueFour = useMemo(
    () => resFour.reduce((summ, prev) => summ + prev, 0),
    [resFour]
  );

  const resFive = useMemo(
    () => salesDynamicsData.graph.map((el) => el["5"]),
    [salesDynamicsData.graph]
  );

  const valueFive = useMemo(
    () => resFive.reduce((summ, prev) => summ + prev, 0),
    [resFive]
  );

  const resSix = useMemo(
    () => salesDynamicsData.graph.map((el) => el["6"]),
    [salesDynamicsData.graph]
  );

  const valueSix = useMemo(
    () => resSix.reduce((summ, prev) => summ + prev, 0),
    [resSix]
  );

  const resSeven = useMemo(
    () => salesDynamicsData.graph.map((el) => el["7"]),
    [salesDynamicsData.graph]
  );

  const valueSeven = useMemo(
    () => resSeven.reduce((summ, prev) => summ + prev, 0),
    [resSeven]
  );

  const resEight = useMemo(
    () => salesDynamicsData.graph.map((el) => el["8"]),
    [salesDynamicsData.graph]
  );

  const valueEight = useMemo(
    () => resEight.reduce((summ, prev) => summ + prev, 0),
    [resEight]
  );

  const resNine = useMemo(
    () => salesDynamicsData.graph.map((el) => el["9"]),
    [salesDynamicsData.graph]
  );

  const valueNine = useMemo(
    () => resNine.reduce((summ, prev) => summ + prev, 0),
    [resNine]
  );

  const resTen = useMemo(
    () => salesDynamicsData.graph.map((el) => el["10"]),
    [salesDynamicsData.graph]
  );

  const valueTen = useMemo(
    () => resTen.reduce((summ, prev) => summ + prev, 0),
    [resTen]
  );

  const resEleven = useMemo(
    () => salesDynamicsData.graph.map((el) => el["11"]),
    [salesDynamicsData.graph]
  );

  const valueEleven = useMemo(
    () => resEleven.reduce((summ, prev) => summ + prev, 0),
    [resEleven]
  );

  const resTwelve = useMemo(
    () => salesDynamicsData.graph.map((el) => el["12"]),
    [salesDynamicsData.graph]
  );

  const valueTwelve = useMemo(
    () => resTwelve.reduce((summ, prev) => summ + prev, 0),
    [resTwelve]
  );

  const resThirteen = useMemo(
    () => salesDynamicsData.graph.map((el) => el["13"]),
    [salesDynamicsData.graph]
  );

  const valueThirteen = useMemo(
    () => resThirteen.reduce((summ, prev) => summ + prev, 0),
    [resThirteen]
  );

  const resFourteen = useMemo(
    () => salesDynamicsData.graph.map((el) => el["14"]),
    [salesDynamicsData.graph]
  );

  const valueFourteen = useMemo(
    () => resFourteen.reduce((summ, prev) => summ + prev, 0),
    [resFourteen]
  );

  const resFiveteen = useMemo(
    () => salesDynamicsData.graph.map((el) => el["15"]),
    [salesDynamicsData.graph]
  );

  const valueFiveteen = useMemo(
    () => resFiveteen.reduce((summ, prev) => summ + prev, 0),
    [resFiveteen]
  );

  const resSixteen = useMemo(
    () => salesDynamicsData.graph.map((el) => el["16"]),
    [salesDynamicsData.graph]
  );

  const valueSixteen = useMemo(
    () => resSixteen.reduce((summ, prev) => summ + prev, 0),
    [resSixteen]
  );

  const resSeventeen = useMemo(
    () => salesDynamicsData.graph.map((el) => el["17"]),
    [salesDynamicsData.graph]
  );

  const valueSeventeen = useMemo(
    () => resSeventeen.reduce((summ, prev) => summ + prev, 0),
    [resSeventeen]
  );

  const resEighteen = useMemo(
    () => salesDynamicsData.graph.map((el) => el["18"]),
    [salesDynamicsData.graph]
  );

  const valueEighteen = useMemo(
    () => resEighteen.reduce((summ, prev) => summ + prev, 0),
    [resEighteen]
  );

  const resNineteen = useMemo(
    () => salesDynamicsData.graph.map((el) => el["19"]),
    [salesDynamicsData.graph]
  );

  const valueNineteen = useMemo(
    () => resNineteen.reduce((summ, prev) => summ + prev, 0),
    [resNineteen]
  );

  const resTwenty = useMemo(
    () => salesDynamicsData.graph.map((el) => el["20"]),
    [salesDynamicsData.graph]
  );

  const valueTwenty = useMemo(
    () => resTwenty.reduce((summ, prev) => summ + prev, 0),
    [resTwenty]
  );

  const resTwentyOne = useMemo(
    () => salesDynamicsData.graph.map((el) => el["21"]),
    [salesDynamicsData.graph]
  );

  const valueTwentyOne = useMemo(
    () => resTwentyOne.reduce((summ, prev) => summ + prev, 0),
    [resTwentyOne]
  );

  const resTwentyTwo = useMemo(
    () => salesDynamicsData.graph.map((el) => el["22"]),
    [salesDynamicsData.graph]
  );

  const valueTwentyTwo = useMemo(
    () => resTwentyTwo.reduce((summ, prev) => summ + prev, 0),
    [resTwentyTwo]
  );

  const resTwentyThree = useMemo(
    () => salesDynamicsData.graph.map((el) => el["23"]),
    [salesDynamicsData.graph]
  );

  const valueTwentyThree = useMemo(
    () => resTwentyThree.reduce((summ, prev) => summ + prev, 0),
    [resTwentyThree]
  );

  const data = [
    {
      name: `00 ${t`date:h`}`,
      value: valueZero,
    },
    {
      name: `01 ${t`date:h`}`,
      value: valueOne,
    },
    {
      name: `02 ${t`date:h`}`,
      value: valueTwo,
    },
    {
      name: `03 ${t`date:h`}`,
      value: valueThree,
    },
    {
      name: `04 ${t`date:h`}`,
      value: valueFour,
    },
    {
      name: `05 ${t`date:h`}`,
      value: valueFive,
    },
    {
      name: `06 ${t`date:h`}`,
      value: valueSix,
    },
    {
      name: `07 ${t`date:h`}`,
      value: valueSeven,
    },
    {
      name: `08 ${t`date:h`}`,
      value: valueEight,
    },
    {
      name: `09 ${t`date:h`}`,
      value: valueNine,
    },
    {
      name: `10 ${t`date:h`}`,
      value: valueTen,
    },
    {
      name: `11 ${t`date:h`}`,
      value: valueEleven,
    },
    {
      name: `12 ${t`date:h`}`,
      value: valueTwelve,
    },
    {
      name: `13 ${t`date:h`}`,
      value: valueThirteen,
    },
    {
      name: `14 ${t`date:h`}`,
      value: valueFourteen,
    },
    {
      name: `15 ${t`date:h`}`,
      value: valueFiveteen,
    },
    {
      name: `16 ${t`date:h`}`,
      value: valueSixteen,
    },
    {
      name: `17 ${t`date:h`}`,
      value: valueSeventeen,
    },
    {
      name: `18 ${t`date:h`}`,
      value: valueEighteen,
    },
    {
      name: `19 ${t`date:h`}`,
      value: valueNineteen,
    },
    {
      name: `20 ${t`date:h`}`,
      value: valueTwenty,
    },
    {
      name: `21 ${t`date:h`}`,
      value: valueTwentyOne,
    },
    {
      name: `22 ${t`date:h`}`,
      value: valueTwentyTwo,
    },
    {
      name: `23 ${t`date:h`}`,
      value: valueTwentyThree,
    },
  ];

  const tooltipLabel = useCallback(
    (label: string) => {
      const explain = label.indexOf("value") !== -1 ? t`pcs` : t`pcs`;
      return `${explain}`;
    },
    [t]
  );

  const valueAll = data.map((el) => el["value"]);

  const fail = useMemo(() => valueAll.every((elem) => elem === 0), [valueAll]);

  return (
    <>
      {isLoading || fail === true ? null : (
        <Box sx={styles.root}>
          <Box
            sx={{
              maxWidth: "1470px",
              maxHeight: "300px",
              minWidth: "1470px",
              height: "250px",
              width: "100%",
            }}
          >
            <ResponsiveContainer minWidth="1470px" width="100%" height="100%">
              <AreaChart
                data={data}
                width={500}
                height={300}
                margin={{ top: 10, right: 30, left: 60, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#90CAF9" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#90CAF9" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke={darkMode ? "#29314F" : "#fffff"} />
                <Tooltip
                  wrapperStyle={{ borderRadius: "12px", border: "none" }}
                  formatter={(val: number, name: string) => [
                    val,

                    tooltipLabel(name),
                  ]}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#2196F3"
                  fillOpacity={1}
                  fill="url(#colorValue)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </Box>
        </Box>
      )}
    </>
  );
};

const styles: Record<string, SxProps> = {
  root: {
    width: "100%",
    minWidth: { xs: "1600px", md: "1470px" },
    height: { xs: "251px", sm: "250px" },
    bgcolor: "common.white",
    borderTopLeftRadius: "12px",
    borderTopRightRadius: "12px",
  },

  dark: {
    bgcolor: "background.paper",
    "& .recharts-cartesian-axis-tick-value": {
      fill: "#fff",
    },
    "& .recharts-legend-item-text": {
      color: "#fff!important",
    },
    "& .recharts-tooltip-item": {
      color: "#fff!important",
    },
  },
  light: {
    bgcolor: "background.default",
    "& .recharts-cartesian-axis-tick-value": {
      fill: "#757575",
    },
    "& .recharts-legend-item-text": {
      color: "#212121!important",
    },
    "& .recharts-tooltip-item": {
      color: "#212121!important",
    },
  },
};

export default memo(AreaChartBrands);
