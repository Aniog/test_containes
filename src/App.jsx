import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import ScrollManager from './components/ScrollManager'
import { CartProvider } from './context/CartContext'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import ShopPage from './pages/ShopPage'
import './App.css'

function App() {
  return (
    <CartProvider>
      <ScrollManager />
      <Routes>
        <Route element={<Layout />} path="/">
          <Route element={<HomePage />} index />
          <Route element={<ShopPage />} path="shop" />
          <Route element={<ProductPage />} path="product/:slug" />
        </Route>
        <Route element={<Navigate replace to="/" />} path="*" />
      </Routes>
    </CartProvider>
  )
}

export default App
