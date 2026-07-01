import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Layout from './components/Layout'
import Home from './pages/Home'
import Shop from './pages/Shop'
import ProductDetail from './pages/ProductDetail'

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="products/:slug" element={<ProductDetail />} />
            <Route
              path="about"
              element={
                <div className="bg-velmora-cream py-32 text-center font-serif text-2xl text-velmora-espresso">
                  About page coming soon.
                </div>
              }
            />
            <Route
              path="journal"
              element={
                <div className="bg-velmora-cream py-32 text-center font-serif text-2xl text-velmora-espresso">
                  Journal page coming soon.
                </div>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
