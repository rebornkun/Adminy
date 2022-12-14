import './App.css'
import { useState } from 'react'
import { ColorModeContext, useMode } from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import TopBar from './scenes/global/TopBar'
import SideBar from './scenes/global/SideBar'
import Dashboard from './scenes/dashboard'
import Team from './scenes/team'
import Invoices from './scenes/invoices'
import Contacts from './scenes/contacts'
// import Bar from './scenes/bar'
import Form from './scenes/form'
// import Line from './scenes/line'
// import Pie from './scenes/pie'
// import FAQ from './scenes/faq'
// import Geography from './scenes/geography'
import Calendar from './scenes/calendar'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [theme , colorMode] = useMode()

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SideBar />
          <main className='content'>
            <TopBar />
            <Routes>
              <Route path='/' element={<Dashboard />}/>
              <Route path='/team' element={<Team />}/>
              <Route path='/contacts' element={<Contacts />}/>
              <Route path='/invoices' element={<Invoices />}/>
              <Route path='/form' element={<Form />}/>
              <Route path='/calendar' element={<Calendar />}/>
              {/* <Route path='/bar' element={<Dashboard />}/>
              <Route path='/line' element={<Dashboard />}/>
              <Route path='/pie' element={<Dashboard />}/>
              <Route path='/faq' element={<Dashboard />}/>
              <Route path='/geography' element={<Dashboard />}/>
             */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
