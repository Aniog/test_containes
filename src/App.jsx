import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import Gallery, { GalleryDetailPage } from './pages/Gallery'
import DataSheets from './pages/DataSheets'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="gallery/:id" element={<GalleryDetailPage />} />
          <Route path="data" element={<DataSheets />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

