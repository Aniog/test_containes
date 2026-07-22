import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, Truck, RotateCcw, Shield } from 'lucide-react'
import { products, testimonials, ugcItems, categories } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { Button } from '@/components/ui/button'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const Home = () => {
  const { addItem, setCartOpen } = useCart()
  const bestsellers = products.filter(p => p.bestseller)
  const containerRef = useRef(null)

  const handleAddToCart = (product) => {
    addItem(product, 'gold')
    setCartOpen(true)
  }

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div className="min-h-screen" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div
          id="hero-bg"
          data-strk-bg-id="hero-bg-8f2a9c"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1814]/40 via-[#1a1814]/50 to-[#1a1814]/60" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h1 id="hero-title" className="font-['Cormorant_Garamond'] text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-wide mb-6 leading-tight">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="text-base md:text-lg text-white/90 mb-10 max-w-xl mx-auto leading-relaxed">
            Demi-fine jewelry designed for the modern woman. Timeless pieces that transition seamlessly from day to evening.
          </p>
          <Link to="/shop">
            <Button variant="accent" size="lg" className="text-sm tracking-[0.1em] uppercase">
              Shop the Collection
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-[#f7f4ef] border-b border-[#e7e5e4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4">
            {[
              { icon: Truck, text: 'Free Worldwide Shipping' },
              { icon: RotateCcw, text: '30-Day Returns' },
              { icon: Shield, text: '18K Gold Plated' },
              { icon: Shield, text: 'Hypoallergenic' }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-center gap-2 text-xs tracking-wide text-[#57534e]">
                <item.icon className="w-4 h-4 text-[#c9a96e]" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bestsellers */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl font-medium text-[#1a1814] tracking-wide mb-4">
              Bestsellers
            </h2>
            <p className="text-[#78716c] max-w-md mx-auto">
              Our most-loved pieces, chosen by women who appreciate quiet luxury.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
            {bestsellers.map((product) => (
              <div key={product.id} className="group">
                <Link to={`/product/${product.id}`} className="block">
                  <div className="relative aspect-[3/4] bg-[#f7f4ef] rounded-lg overflow-hidden mb-4">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xs text-[#a8a29e]">Product Image</span>
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                    <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button 
                        size="sm" 
                        className="w-full"
                        onClick={(e) => {
                          e.preventDefault()
                          handleAddToCart(product)
                        }}
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                  <h3 className="text-xs md:text-sm font-medium text-[#1a1814] tracking-wide uppercase mb-1">
                    {product.name}
                  </h3>
                  <p className="text-sm text-[#57534e]">${product.price}</p>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/shop">
              <Button variant="outline" size="lg">
                View All Products
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* UGC Reel Row */}
      <section className="py-16 bg-[#f7f4ef] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <h2 className="font-['Cormorant_Garamond'] text-2xl md:text-3xl font-medium text-[#1a1814] tracking-wide text-center">
            As Seen On
          </h2>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4 px-4 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {ugcItems.map((item) => (
            <div key={item.id} className="flex-shrink-0 w-40 md:w-48 relative group">
              <div className="aspect-[9/16] bg-[#e7e5e4] rounded-lg overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs text-[#a8a29e]">Reel</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-white text-xs font-medium truncate">{item.title}</p>
                  <p className="text-white/70 text-[10px]">{item.handle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl font-medium text-[#1a1814] tracking-wide mb-4">
              Shop by Category
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.slice(0, 3).map((category) => (
              <Link 
                key={category.id} 
                to={`/shop?category=${category.id}`}
                className="group relative aspect-[4/5] bg-[#f7f4ef] rounded-lg overflow-hidden"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm text-[#a8a29e]">Category Image</span>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <h3 className="font-['Cormorant_Garamond'] text-2xl md:text-3xl font-medium text-white tracking-wide mb-2">
                    {category.name}
                  </h3>
                  <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {category.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 md:py-28 bg-[#f7f4ef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="aspect-[4/5] bg-[#e7e5e4] rounded-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-sm text-[#a8a29e]">Brand Story Image</span>
              </div>
            </div>
            <div>
              <h2 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl font-medium text-[#1a1814] tracking-wide mb-6">
                Our Story
              </h2>
              <p className="text-[#57534e] leading-relaxed mb-6">
                Velmora was born from a simple belief: that fine jewelry should be accessible, meaningful, and designed to be worn every day. Each piece is thoughtfully crafted from 18K gold-plated materials, with attention to detail that ensures lasting beauty.
              </p>
              <p className="text-[#57534e] leading-relaxed mb-8">
                We work with skilled artisans who share our commitment to quality and sustainability. From our studio in California to your jewelry box, every Velmora piece carries the promise of quiet luxury.
              </p>
              <Link to="/about">
                <Button variant="outline">
                  Read Our Story
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl font-medium text-[#1a1814] tracking-wide mb-4">
              What Our Customers Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="text-center px-4">
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#c9a96e] text-[#c9a96e]" />
                  ))}
                </div>
                <p className="text-[#57534e] leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>
                <p className="text-sm font-medium text-[#1a1814] tracking-wide">
                  {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 md:py-28 bg-[#1a1814]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl font-medium text-white tracking-wide mb-4">
            Join for 10% off your first order
          </h2>
          <p className="text-[#a8a29e] mb-8">
            Be the first to know about new collections, exclusive offers, and styling inspiration.
          </p>
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 h-12 px-6 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-[#c9a96e] transition-colors"
            />
            <Button variant="accent" size="lg" className="rounded-full">
              Subscribe
            </Button>
          </form>
          <p className="text-xs text-[#78716c] mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Home
