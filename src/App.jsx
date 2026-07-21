import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from '@/Layout'
import { CartProvider, useCart } from '@/context/CartContext'
import HomePage from '@/pages/HomePage'
import ProductPage from '@/pages/ProductPage'
import ShopPage from '@/pages/ShopPage'
import SimplePage from '@/pages/SimplePage'
import './App.css'

function AppRoutes() {
  const { addItem } = useCart()

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage onAddToCart={addItem} />} />
        <Route path="/shop" element={<ShopPage onAddToCart={addItem} />} />
        <Route path="/collections" element={<ShopPage onAddToCart={addItem} />} />
        <Route path="/product/:slug" element={<ProductPage onAddToCart={addItem} />} />
        <Route
          path="/about"
          element={
            <SimplePage
              eyebrow="About Velmora"
              title="Quiet luxury, thoughtfully made"
              description="Velmora Fine Jewelry is a demi-fine collection of warm gold essentials designed for modern rituals, meaningful gifting, and polished everyday styling."
            />
          }
        />
        <Route
          path="/journal"
          element={
            <SimplePage
              eyebrow="Journal"
              title="Stories, styling, and gift inspiration"
              description="A softly curated destination for care guidance, layering ideas, and seasonal edits — ready to expand into a full editorial journal whenever you are."
            />
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
