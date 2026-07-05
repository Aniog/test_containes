import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from '@/context/CartContext'
import Layout from '@/Layout'
import Home from '@/pages/Home'
import Shop from '@/pages/Shop'
import ProductDetail from '@/pages/ProductDetail'

function About() {
  return (
    <main className="pt-20 md:pt-24">
      <div className="max-w-3xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3 font-sans">
          About Velmora
        </p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-foreground leading-tight mb-8">
          Our Story
        </h1>
        <div className="space-y-5 text-muted-foreground leading-relaxed">
          <p>
            Velmora was born from a simple belief: that fine jewelry should be accessible,
            wearable, and deeply personal. We set out to create pieces that bridge the gap
            between everyday elegance and heirloom quality.
          </p>
          <p>
            Every design begins with a sketch and a story. Our artisans bring these visions
            to life using 18K gold-plated metals, ethically sourced crystals, and a dedication
            to craftsmanship that honors the traditions of fine jewelry-making.
          </p>
          <p>
            We believe in jewelry that moves with you — from the boardroom to dinner parties,
            from quiet mornings to unforgettable nights. Pieces that collect memories and
            become part of your story.
          </p>
        </div>
      </div>
    </main>
  )
}

function Journal() {
  return (
    <main className="pt-20 md:pt-24">
      <div className="max-w-3xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-foreground leading-tight mb-8">
          Journal
        </h1>
        <p className="text-muted-foreground">Coming soon.</p>
      </div>
    </main>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/journal" element={<Journal />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}
