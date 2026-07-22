import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Layout from '@/Layout'
import Home from '@/pages/Home'
import NotFound from '@/pages/NotFound'
import ProductDetail from '@/pages/ProductDetail'
import Shop from '@/pages/Shop'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:slug" element={<ProductDetail />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
