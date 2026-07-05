import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { CartProvider } from '@/context/CartContext'
import Navbar from '@/components/Navbar'
import CartDrawer from '@/components/CartDrawer'
import Footer from '@/components/Footer'
import HomePage from '@/pages/HomePage'
import ProductPage from '@/pages/ProductPage'
import ShopPage from '@/pages/ShopPage'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

function App() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchProducts() {
      try {
        const { data: response, error } = await client
          .from('Products')
          .select('*')
          .order('created_at', { ascending: false })

        if (error) throw error
        const list = response?.data?.list || []
        setProducts(list)
      } catch (err) {
        console.error('Failed to load products:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-vbg flex items-center justify-center">
        <p className="font-serif text-lg text-vmuted animate-pulse">
          Loading Velmora...
        </p>
      </div>
    )
  }

  return (
    <BrowserRouter>
      <CartProvider>
        <div className="min-h-screen bg-vbg flex flex-col">
          <Navbar />
          <CartDrawer />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage products={products} />} />
              <Route
                path="/shop"
                element={<ShopPage products={products} />}
              />
              <Route
                path="/product/:slug"
                element={<ProductPage products={products} />}
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
