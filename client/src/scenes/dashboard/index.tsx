import DashboardBox from '@/components/DashboardBox';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import Row1 from './Row1';
import Row2 from './Row2';
import Row3 from './Row3';

const gridTemplateLargeScreens = `
    "a b c"
    "a b c"
    "a b c"
    "a b f"
    "d e f"
    "d e f"
    "d h i"
    "g h i"
    "g h j"
    "g h j"
`
const gridTemplateSmallScreens = `
    "a"
    "a"
    "a"
    "a"
    "b"
    "b"
    "b"
    "b"
    "c"
    "c"
    "c"
    "d"
    "d"
    "d"
    "e"
    "e"
    "f"
    "f"
    "f"
    "g"
    "g"
    "g"
    "h"
    "h"
    "h"
    "i"
    "i"
    "j"
    "j"
`

const Dashboard = () => {
    const {palette} = useTheme();
    const isAboveMediumScreens = useMediaQuery("(min-width: 1200px)")
  return (
    <>
    {/* Grid */}
    <Box width="100%" 
        height={"100%"} 
        display={"grid"} 
        gap={"1.5rem"}
        // m={"0.5rem 0.5rem 0.5rem 0rem"}
        sx={
            isAboveMediumScreens ? {
            gridTemplateColumns: "repeat(3, minmax(370px, 1fr))",
            gridTemplateRows: "repeat(10, minmax(60px, 1fr))",
            gridTemplateAreas: gridTemplateLargeScreens,
            } : {
                gridAutoColumns: "1fr",
                gridAutoRows: "80px",
                gridTemplateAreas: gridTemplateSmallScreens,
            }}> 
    
        {/* Grid Elements */}
        <Row1 />
        <Row2 />
        <Row3 />
        <Box height={'0.2rem'} ></Box>
    </Box>
    </>
  );
};

export default Dashboard