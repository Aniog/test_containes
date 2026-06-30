import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import ShopPage from './components/shop/ShopPage'
import ProductDetail from './components/product/ProductDetail'

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="shop" element={<ShopPage />} />
            <Route path="product/:id" element={<ProductDetail />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="journal" element={<JournalPage />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

function AboutPage() {
  return (
    <div className="pt-20 md:pt-24 min-h-screen">
      <div className="container-padding py-16 max-w-3xl mx-auto text-center">
        <h1 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl mb-6">Our Story</h1>
        <div className="hairline mb-8 max-w-xs mx-auto" />
        <p className="text-[#6b6560] leading-relaxed mb-6">
          Velmora was founded on a simple idea: that beautiful jewelry should be part of your everyday life, not just reserved for special occasions.
        </p>
        <p className="text-[#6b6560] leading-relaxed mb-6">
          Each piece in our collection is thoughtfully designed to transition seamlessly from morning meetings to evening gatherings. We use 18K gold plating over quality base metals, ensuring our jewelry looks and feels luxurious while remaining accessible.
        </p>
        <p className="text-[#6b6560] leading-relaxed">
          Our commitment to hypoallergenic materials means you can wear your favorite pieces all day, every day — because jewelry that cares for your skin is jewelry you'll actually wear.
        </p>
      </div>
    </div>
  )
}

function JournalPage() {
  return (
    <div className="pt-20 md:pt-24 min-h-screen">
      <div className="container-padding py-16 max-w-3xl mx-auto text-center">
        <h1 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl mb-6">Journal</h1>
        <div className="hairline mb-8 max-w-xs mx-auto" />
        <p className="text-[#6b6560] leading-relaxed">
          Stories, styling tips, and behind-the-scenes looks at the world of Velmora. Coming soon.
        </p>
      </div>
    </div>
  )
}

export default App
