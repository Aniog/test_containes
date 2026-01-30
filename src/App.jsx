import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import SolarEnergy from './pages/SolarEnergy'
import WindEnergy from './pages/WindEnergy'
import HydroelectricPower from './pages/HydroelectricPower'
import Statistics from './pages/Statistics'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="solar" element={<SolarEnergy />} />
          <Route path="wind" element={<WindEnergy />} />
          <Route path="hydro" element={<HydroelectricPower />} />
          <Route path="statistics" element={<Statistics />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
