import { useMemo } from "react"
import { themeSettings } from "./theme"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import { Box, CssBaseline } from "@mui/material"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "@/scenes/navbar"

function App() {
  const theme = useMemo(() => createTheme(themeSettings), [])
  return (
    <BrowserRouter>
      <div className='app'>
        <ThemeProvider theme={theme}>
          <CssBaseline />
            <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
              <Navbar />
              <Routes>
                <Route path="/" element={<div>Home</div>} />
                <Route path="/predictions" element={<div>Preds</div>} />
              </Routes>
              
            </Box>
        </ThemeProvider>
      </div>
    </BrowserRouter>
  )
}

export default App
