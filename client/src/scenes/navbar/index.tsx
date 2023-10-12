import { useState } from "react"
import { Link } from "react-router-dom"
import { Box, Palette, Typography, useTheme } from "@mui/material"
import FlexBetween from "@/components/FlexBetween"
import InsightsIcon from '@mui/icons-material/Insights';

type Props = {}

const Navbar = (props: Props) => {
    const {palette} = useTheme()
    const [selected, setSelected] = useState("dashboard")
  return (
    <FlexBetween mb="0.25rem" p="0.5rem 0rem" color={palette.grey[300]}>
        {/* Left */}
        <FlexBetween gap="0.75rem">
            <InsightsIcon sx={{fontSize:"28px"}} />
            <Typography variant="h4" fontSize={"16px"}>Insights</Typography>
        </FlexBetween>

        {/* Right */}
        <FlexBetween gap="2rem">
            {/* Home Page */}
            <Box sx={{"&:hover":{color:palette.primary[100]}}}>
                <Link 
                to="/" 
                onClick={()=>setSelected("dashboard")}
                style={{
                    color: selected==="dashboard" ? "inherit" : palette.grey[700],
                    textDecoration: "inherit",
                }}>
                    Dashboard
                </Link>
            </Box>

            {/* Predictions Page */}
            <Box sx={{"&:hover":{color:palette.primary[100]}}}>
                <Link 
                to="/predictions" 
                onClick={()=>setSelected("predictions")}
                style={{
                    color: selected==="predictions" ? "inherit" : palette.grey[700],
                    textDecoration: "inherit",
                }}>
                    Predictions
                </Link>
            </Box>
        </FlexBetween>
            
    </FlexBetween>
  )
}

export default Navbar