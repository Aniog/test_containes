import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { CartProvider } from './context/CartContext'
import Layout from './Layout'
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'
import JournalPage from './pages/JournalPage'
import NotFoundPage from './pages/NotFoundPage'
import ProductPage from './pages/ProductPage'
import ShopPage from './pages/ShopPage'

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/product/:slug" element={<ProductPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/journal" element={<JournalPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
