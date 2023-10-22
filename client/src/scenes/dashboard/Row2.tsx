import BoxHeader from '@/components/BoxHeader';
import DashboardBox from '@/components/DashboardBox'
import FlexBetween from '@/components/FlexBetween';
import { useGetKpisQuery, useGetProductsQuery } from '@/state/api'
import { Box, Typography, useTheme } from '@mui/material';
import React, { useMemo } from 'react'
import {
  ResponsiveContainer,
  CartesianGrid,
  AreaChart,
  BarChart,
  Bar,
  LineChart,
  XAxis,
  YAxis,
  Legend,
  Line,
  Tooltip,
  Area,
  PieChart,
  Pie,
  Cell,
  ScatterChart,
  Scatter,
  ZAxis,
} from "recharts";

const pieData = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
];

const Row2 = () => {
  
  const {palette} = useTheme();
  const pieColors = [palette.primary[800], palette.primary[300]]

  const {data: productData} = useGetProductsQuery();
  const {data:operationalData } = useGetKpisQuery();

  // console.log("data", data);

  const operationalExpenses = useMemo(()=>{
    return (
      operationalData &&
      operationalData[0].monthlyData.map(({month, operationalExpenses, nonOperationalExpenses})=>{
        return {
          name: month.substring(0, 3),
          "Operational Expenses": operationalExpenses,
          "Non Operational Expenses": nonOperationalExpenses,
        };
      })
    );
  }, [operationalData]);

  const productExpenseData = useMemo(()=>{
    return (
      productData &&
      productData.map(({_id, price, expense})=>{
        return {
          id: _id,
          price: price,
          expense: expense,
        };
      })
    );
  }, [productData]);

  return (
    <>
        <DashboardBox gridArea="d">
          <BoxHeader
              title='Operational vs. Non-Operational Expenses'
              sideText='+4%'/>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={operationalExpenses}
              margin={{
                top: 20,
                right: 0,
                left: -10,
                bottom: 55,
              }}
            >
              <CartesianGrid vertical={false} stroke={palette.grey[800]} />
              <XAxis 
                dataKey="name" 
                tickLine={false}
                style={{fontSize: "10px"}}
              />
              <YAxis 
                yAxisId={'left'}
                orientation={'left'}
                axisLine={false} 
                tickLine={false}
                style={{fontSize: "10px"}}
              />
              <YAxis 
                yAxisId={'right'}
                orientation='right'
                axisLine={false} 
                tickLine={false}
                style={{fontSize: "10px"}}
              />
              <Tooltip />
              <Line 
                yAxisId={'left'}
                type={'monotone'}
                dataKey={'Non Operational Expenses'}
                stroke={palette.tertiary[500]}
              />
              <Line 
                yAxisId={'left'}
                type={'monotone'}
                dataKey={'Operational Expenses'}
                stroke={palette.primary.main}
              />
            </LineChart>
          </ResponsiveContainer>
          </DashboardBox>

        <DashboardBox gridArea="e">
          <BoxHeader title='Campaigns and Targets' sideText='+4%'/>

          <FlexBetween mt={'0.25rem'} gap={'1.5rem'} pr={'1rem'}>
          <PieChart 
            width={110} 
            height={110}
            margin={{
              top: 0,
              right: -10,
              left: 10,
              bottom: 0,
            }} >
            <Pie
              stroke='none'
              data={pieData}
              innerRadius={18}
              outerRadius={38}
              paddingAngle={2}
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell 
                key={`cell-${index}`} 
                fill={pieColors[index]} />
              ))}
            </Pie>
          </PieChart>

          <Box ml={'-0.7rem'} flexBasis={'35%'} textAlign={'left'}>
            <Typography variant='h5'>Target Sales</Typography>
            <Typography variant='h5' m='0.3rem 0' color={palette.primary[300]}>83</Typography>
            <Typography variant='h6'>Financial Goals of the Campaing</Typography>
          </Box>

          <Box flexBasis={'35%'}>
            <Typography variant='h5'>Losses in Revenue</Typography>
            <Typography variant='h6'>Losses are down 25%</Typography>
            <Typography variant='h5' ml={'0.4rem'}>Profit Margins</Typography>
            <Typography variant='h6'>Margins are up by 30%</Typography>
          </Box>

          </FlexBetween>
        </DashboardBox>

        <DashboardBox gridArea="f" >
        <BoxHeader title='Product Prices' sideText='+4%'/>

        <ResponsiveContainer width="100%" height='100%'>
        <ScatterChart
          margin={{
            top: 20,
            right: 25,
            bottom: 40,
            left: -10,
          }}
        >
          <CartesianGrid stroke={palette.grey[800]} />
          <XAxis 
            type="number" 
            dataKey="price" 
            name="price" 
            axisLine={false}
            tickLine={false}
            style={{fontSize:'10px'}}
            tickFormatter={(v) => `$${v}`} />

          <YAxis 
            type="number" 
            dataKey="expense" 
            name="expense" 
            axisLine={false}
            tickLine={false}
            style={{fontSize:'10px'}}
            tickFormatter={(v) => `$${v}`} />

            <ZAxis type='number' range={[20]} />

          <Tooltip formatter={(v) => `$${v}`} />
          <Scatter name="Product Expense Ratio" 
          data={productExpenseData} 
          fill={palette.tertiary[500]} />
        </ScatterChart>
      </ResponsiveContainer>
        </DashboardBox>
    </>
  )
}

export default Row2