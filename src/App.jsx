import { useState } from 'react'
import { ColorModeContext, useMode } from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import TopBar from './scenes/global/TopBar'
import './App.css'

function App() {
  const [theme , colorMode] = useMode()

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className='content'>
            <TopBar />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
