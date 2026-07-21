import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import { products } from './data/products'
import { useCart } from './hooks/useCart'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import ShopPage from './pages/ShopPage'

function App() {
  const cart = useCart()

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout cart={cart} />}>
          <Route index element={<HomePage products={products} onAddToCart={cart.addItem} />} />
          <Route path="shop" element={<ShopPage products={products} onAddToCart={cart.addItem} />} />
          <Route path="products/:slug" element={<ProductPage products={products} onAddToCart={cart.addItem} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
