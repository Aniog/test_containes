import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import Species from './pages/Species'
import DustLight from './pages/DustLight'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="species" element={<Species />} />
          <Route path="dust-light" element={<DustLight />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
