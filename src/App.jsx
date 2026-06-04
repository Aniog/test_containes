import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import MicroForest from './pages/MicroForest'
import Outlook from './pages/Outlook'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="micro-forest" element={<MicroForest />} />
          <Route path="outlook" element={<Outlook />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
