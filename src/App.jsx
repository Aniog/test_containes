import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '@/components/layout/Layout'
import Dashboard from '@/pages/Dashboard'
import KingdomsPage from '@/pages/KingdomsPage'
import GovernmentPage from '@/pages/GovernmentPage'
import EconomyPage from '@/pages/EconomyPage'
import MilitaryPage from '@/pages/MilitaryPage'
import DiplomacyPage from '@/pages/DiplomacyPage'
import './App.css'

function App() {
  const [selectedKingdom, setSelectedKingdom] = useState(null)

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              selectedKingdom={selectedKingdom}
              onSelectKingdom={setSelectedKingdom}
            />
          }
        >
          <Route
            index
            element={
              <Dashboard
                selectedKingdom={selectedKingdom}
                onSelectKingdom={setSelectedKingdom}
              />
            }
          />
          <Route
            path="kingdoms"
            element={
              <KingdomsPage
                selectedKingdom={selectedKingdom}
                onSelectKingdom={setSelectedKingdom}
              />
            }
          />
          <Route
            path="government"
            element={<GovernmentPage selectedKingdom={selectedKingdom} />}
          />
          <Route
            path="economy"
            element={<EconomyPage selectedKingdom={selectedKingdom} />}
          />
          <Route
            path="military"
            element={<MilitaryPage selectedKingdom={selectedKingdom} />}
          />
          <Route
            path="diplomacy"
            element={<DiplomacyPage selectedKingdom={selectedKingdom} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
