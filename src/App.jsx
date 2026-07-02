import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from '@/context/CartContext'
import Navbar from '@/components/layout/Navbar'
import CartDrawer from '@/components/layout/CartDrawer'
import Footer from '@/components/layout/Footer'
import HomePage from '@/components/home/HomePage'
import CollectionPage from '@/components/collection/CollectionPage'
import ProductDetailPage from '@/components/product/ProductDetailPage'

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <CartDrawer />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <CartProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<CollectionPage />} />
            <Route path="/collections" element={<CollectionPage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/journal" element={<JournalPage />} />
          </Routes>
        </Layout>
      </Router>
    </CartProvider>
  )
}

function AboutPage() {
  return (
    <main className="pt-24 md:pt-28">
      <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16 py-16">
        <p className="text-sm tracking-[0.3em] uppercase text-[#b8956a] mb-4 text-center">
          Our Story
        </p>
        <h1 className="serif-heading text-5xl md:text-6xl text-center mb-12">
          Where Elegance Meets Everyday
        </h1>
        <div className="h-px bg-[#e8e2d9] w-24 mx-auto mb-12" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="aspect-[3/4] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&h=1000&fit=crop"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-[#6b6560] leading-relaxed mb-6">
              Velmora was born from a simple belief: that beautiful jewelry
              shouldn't require a luxury budget. Founded in 2024, we set out to
              create demi-fine pieces that look and feel extraordinary without
              the extraordinary price tag.
            </p>
            <p className="text-[#6b6560] leading-relaxed mb-6">
              Each piece is thoughtfully designed in our studio and crafted with
              18K gold plating over premium brass. We source our materials
              responsibly and ensure every item meets our exacting quality
              standards.
            </p>
            <p className="text-[#6b6560] leading-relaxed">
              From our studio to your jewelry box, we pour care into every
              detail — because the pieces you wear every day deserve to be
              treasured.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-8 border border-[#e8e2d9]">
            <h3 className="serif-heading text-4xl text-[#b8956a] mb-2">18K</h3>
            <p className="text-sm tracking-widest uppercase">Gold Plated</p>
          </div>
          <div className="p-8 border border-[#e8e2d9]">
            <h3 className="serif-heading text-4xl text-[#b8956a] mb-2">100%</h3>
            <p className="text-sm tracking-widest uppercase">Hypoallergenic</p>
          </div>
          <div className="p-8 border border-[#e8e2d9]">
            <h3 className="serif-heading text-4xl text-[#b8956a] mb-2">30</h3>
            <p className="text-sm tracking-widest uppercase">Day Returns</p>
          </div>
        </div>
      </div>
    </main>
  )
}

function JournalPage() {
  const posts = [
    {
      id: 1,
      title: 'How to Layer Necklaces Like a Pro',
      excerpt: 'Master the art of necklace layering with our simple guide to mixing lengths, textures, and metals.',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=500&fit=crop',
      date: 'June 15, 2026',
    },
    {
      id: 2,
      title: 'The Care Guide: Keeping Your Gold Jewelry Beautiful',
      excerpt: 'Simple tips to maintain the luster of your 18K gold plated pieces for years to come.',
      image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&h=500&fit=crop',
      date: 'June 8, 2026',
    },
    {
      id: 3,
      title: 'Gift Guide: Jewelry for Every Occasion',
      excerpt: 'From birthdays to anniversaries, find the perfect piece for the special women in your life.',
      image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&h=500&fit=crop',
      date: 'June 1, 2026',
    },
  ]

  return (
    <main className="pt-24 md:pt-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16">
        <p className="text-sm tracking-[0.3em] uppercase text-[#b8956a] mb-4 text-center">
          The Journal
        </p>
        <h1 className="serif-heading text-5xl md:text-6xl text-center mb-12">
          Stories & Style
        </h1>
        <div className="h-px bg-[#e8e2d9] w-24 mx-auto mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="aspect-[16/10] overflow-hidden mb-4">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="text-xs text-[#6b6560] mb-2">{post.date}</p>
              <h2 className="serif-heading text-2xl mb-2 group-hover:text-[#b8956a] transition-colors">
                {post.title}
              </h2>
              <p className="text-sm text-[#6b6560] leading-relaxed">
                {post.excerpt}
              </p>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
