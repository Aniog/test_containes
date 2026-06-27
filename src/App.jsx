import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CartProvider } from "@/context/CartContext"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import CartDrawer from "@/components/cart/CartDrawer"
import HomePage from "@/pages/HomePage"
import ProductPage from "@/pages/ProductPage"
import CollectionPage from "@/pages/CollectionPage"
import "./App.css"

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="min-h-screen bg-velmora-bg">
          <Navbar />
          <CartDrawer />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/collection" element={<CollectionPage />} />
              <Route path="/collections" element={<CollectionPage />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/journal" element={<JournalPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </CartProvider>
    </BrowserRouter>
  )
}

function AboutPage() {
  return (
    <div className="min-h-screen bg-velmora-bg pt-24 sm:pt-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-velmora-gold mb-4">
          About Velmora
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl text-velmora-text font-normal mb-8">
          Our Story
        </h1>
        <div className="space-y-6 text-velmora-text-secondary leading-relaxed">
          <p>
            Velmora was founded with a singular vision: to create jewelry that honors both the wearer and the world. We believe that luxury shouldn't come at the expense of ethics, and that beautiful design should be accessible to everyone.
          </p>
          <p>
            Our demi-fine collection bridges the gap between fast fashion and traditional fine jewelry. Each piece is crafted with 18K gold plating over recycled brass, using hypoallergenic materials that are gentle on sensitive skin and kind to the planet.
          </p>
          <p>
            We draw inspiration from nature's quiet moments — the curve of a petal at dawn, the warmth of golden hour light, the understated elegance of simplicity. Every design is intentional, every detail considered.
          </p>
          <p>
            From our studio to your jewelry box, we pour care into every step of the process. Because jewelry isn't just an accessory — it's a reflection of who you are, and a treasure to be worn for years to come.
          </p>
        </div>
      </div>
    </div>
  )
}

function JournalPage() {
  return (
    <div className="min-h-screen bg-velmora-bg pt-24 sm:pt-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-velmora-gold mb-4">
          The Journal
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl text-velmora-text font-normal mb-12">
          Stories & Styling
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {[
            {
              title: "How to Layer Necklaces Like a Pro",
              excerpt: "Master the art of necklace layering with our simple guide to mixing lengths, textures, and metals.",
              image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=400&fit=crop",
            },
            {
              title: "The Care Guide: Keeping Your Gold Looking New",
              excerpt: "Simple tips to maintain the luster of your 18K gold plated pieces for years to come.",
              image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=400&fit=crop",
            },
            {
              title: "Gift Guide: Jewelry for Every Occasion",
              excerpt: "From birthdays to anniversaries, find the perfect piece for the special women in your life.",
              image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&h=400&fit=crop",
            },
            {
              title: "Behind the Design: Our Creative Process",
              excerpt: "A peek into how our design team transforms inspiration into the pieces you love.",
              image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=600&h=400&fit=crop",
            },
          ].map((article, idx) => (
            <article key={idx} className="group cursor-pointer">
              <div className="aspect-[3/2] overflow-hidden mb-4">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h2 className="font-serif text-xl sm:text-2xl text-velmora-text group-hover:text-velmora-gold transition-colors">
                {article.title}
              </h2>
              <p className="text-sm text-velmora-text-secondary mt-2 leading-relaxed">
                {article.excerpt}
              </p>
              <span className="inline-block mt-3 text-xs text-velmora-gold tracking-wider uppercase border-b border-velmora-gold/30 pb-0.5 group-hover:border-velmora-gold transition-colors">
                Read More
              </span>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
