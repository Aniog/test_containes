import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './Layout.jsx'
import HomePage from './pages/HomePage.jsx'
import ProductPage from './pages/ProductPage.jsx'
import ShopPage from './pages/ShopPage.jsx'
import './App.css'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/product/:slug" element={<ProductPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

export default App
