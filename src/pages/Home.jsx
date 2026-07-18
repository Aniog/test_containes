import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'

const Home = () => {
  const { addToCart } = useCart()
  const [selectedVariant, setSelectedVariant] = useState({})

  // Bestsellers - first 5 products
  const bestsellers = products.slice(0, 5)

  // UGC mock data - vertical reel style
  const ugcItems = [
    { id: 1, caption: "My everyday staple", img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80" },
    { id: 2, caption: "Gifted to myself", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80" },
    { id: 3, caption: "Wedding day glow", img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=80" },
    { id: 4, caption: "Layered & loved", img: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&q=80" },
    { id: 5, caption: "Golden hour", img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=80" },
  ]

  // Testimonials
  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. I wear my huggies every day and they still look brand new.", rating: 5 },
    { name: "Sofia R.", text: "Bought the Royal Heirloom Set as a gift. The packaging alone made it feel so special.", rating: 5 },
    { name: "Maya K.", text: "Finally found jewelry that doesn't irritate my skin. The gold tone is so warm and beautiful.", rating: 5 },
  ]

  const handleAddToCart = (product) => {
    const variant = selectedVariant[product.id] || 'Gold'
    addToCart(product, variant, 1)
  }

  const handleVariantSelect = (productId, variant) => {
    setSelectedVariant(prev => ({ ...prev, [productId]: variant }))
  }

  return (
    <div className="pt-20">
      {/* 1. HERO */}
      <section className="relative h-[100dvh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#2C2825]">
          <img 
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=2000&q=90" 
            alt="Velmora Fine Jewelry - Warm lit gold jewelry on model"
            className="absolute inset-0 w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="headline-serif text-white text-5xl md:text-7xl tracking-[-0.02em] mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-10 max-w-md mx-auto">
            Demi-fine gold jewelry for the moments that matter.
          </p>
          <Link to="/shop">
            <Button size="lg" className="bg-white text-[#2C2825] hover:bg-[#F5F2ED] hover:text-[#2C2825]">
              SHOP THE COLLECTION
            </Button>
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-xs tracking-[0.2em]">
          SCROLL TO EXPLORE
        </div>
      </section>

      {/* 2. TRUST BAR */}
      <div className="trust-bar bg-white border-b border-[#EDE8E0] py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-x-8 gap-y-2 text-center text-[#5C5651]">
          <span>Free Worldwide Shipping</span>
          <span className="hidden sm:inline text-[#D4C9B9]">·</span>
          <span>30-Day Returns</span>
          <span className="hidden sm:inline text-[#D4C9B9]">·</span>
          <span>18K Gold Plated</span>
          <span className="hidden sm:inline text-[#D4C9B9]">·</span>
          <span>Hypoallergenic</span>
        </div>
      </div>

      {/* 3. BESTSELLERS */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs tracking-[0.2em] text-[#A68B5B] mb-2">DISCOVER</p>
            <h2 className="serif text-4xl tracking-[-0.01em]">Bestsellers</h2>
          </div>
          <Link to="/shop" className="hidden md:block text-sm tracking-[0.05em] hover:text-[#A68B5B] transition-colors">
            VIEW ALL →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <div key={product.id} className="product-card group bg-white">
              <Link to={`/product/${product.slug}`} className="block">
                <div className="product-image-container aspect-[4/3.5] bg-[#F5F2ED] relative overflow-hidden">
                  <img 
                    src={product.images[0]} 
                    alt={product.name}
                    className="product-image-primary absolute inset-0 w-full h-full object-cover"
                  />
                  <img 
                    src={product.images[1] || product.images[0]} 
                    alt={product.name}
                    className="product-image-secondary absolute inset-0 w-full h-full object-cover"
                  />
                  
                  {/* Quick Add */}
                  <button
                    onClick={(e) => { e.preventDefault(); handleAddToCart(product); }}
                    className="quick-add bg-white text-[#2C2825] px-6 py-2 text-xs tracking-[0.1em] shadow-md hover:bg-[#A68B5B] hover:text-white"
                  >
                    ADD TO CART
                  </button>
                </div>
              </Link>
              
              <div className="p-4">
                <Link to={`/product/${product.slug}`}>
                  <p className="product-name text-sm tracking-[0.15em] mb-1 pr-2">{product.name}</p>
                </Link>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#5C5651]">{formatPrice(product.price)}</span>
                  <div className="flex items-center gap-1 text-xs text-[#A68B5B]">
                    <Star size={12} fill="currentColor" />
                    <span>{product.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Link to="/shop" className="text-sm tracking-[0.05em] text-[#A68B5B]">VIEW ALL →</Link>
        </div>
      </section>

      {/* 4. UGC REEL-STYLE ROW */}
      <section className="bg-white py-16 border-y border-[#EDE8E0]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-xs tracking-[0.2em] text-[#A68B5B] mb-1">AS SEEN ON</p>
              <h3 className="serif text-3xl tracking-[-0.01em]">Real Moments</h3>
            </div>
          </div>
          
          <div className="ugc-scroll flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
            {ugcItems.map((item) => (
              <div key={item.id} className="flex-shrink-0 w-[160px] md:w-[180px] snap-start relative">
                <div className="aspect-[9/16] bg-[#2C2825] overflow-hidden relative">
                  <img 
                    src={item.img} 
                    alt={item.caption}
                    className="w-full h-full object-cover opacity-90"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="serif text-white text-sm tracking-wide">{item.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SHOP BY CATEGORY */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <p className="text-xs tracking-[0.2em] text-[#A68B5B] mb-2">EXPLORE</p>
          <h2 className="serif text-4xl tracking-[-0.01em]">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: 'Earrings', category: 'Earrings', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80' },
            { label: 'Necklaces', category: 'Necklaces', img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80' },
            { label: 'Huggies', category: 'Huggies', img: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80' },
          ].map((cat) => (
            <Link 
              key={cat.label} 
              to={`/shop?category=${cat.category}`}
              className="category-tile group block aspect-[16/10] md:aspect-[4/3] overflow-hidden bg-[#2C2825] relative"
            >
              <img 
                src={cat.img} 
                alt={cat.label}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
              <div className="category-label absolute bottom-0 left-0 right-0 bg-[#2C2825]/70 py-4 text-center">
                <span className="text-white text-sm tracking-[0.2em]">{cat.label.toUpperCase()}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. BRAND STORY */}
      <section className="bg-white border-y border-[#EDE8E0]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2">
          <div className="aspect-[4/3] md:aspect-auto bg-[#F5F2ED]">
            <img 
              src="https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=1200&q=80" 
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center px-8 md:px-16 py-14 md:py-0">
            <div className="max-w-md">
              <p className="text-xs tracking-[0.2em] text-[#A68B5B] mb-3">SINCE 2018</p>
              <h2 className="serif text-4xl tracking-[-0.01em] mb-6">Our Story</h2>
              <p className="text-[#5C5651] leading-relaxed mb-8">
                Velmora was born from a desire to create jewelry that feels both special and wearable. 
                Each piece is thoughtfully designed in our studio and crafted with the finest materials, 
                meant to be treasured for years to come.
              </p>
              <Link to="/about" className="inline-block text-sm tracking-[0.1em] border-b border-[#A68B5B] pb-0.5 hover:text-[#A68B5B]">
                READ MORE ABOUT US
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.2em] text-[#A68B5B] mb-2">LOVED BY MANY</p>
          <h2 className="serif text-3xl tracking-[-0.01em]">What Our Customers Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="text-center">
              <div className="flex justify-center gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} size={16} className="star" fill="currentColor" />
                ))}
              </div>
              <p className="text-[#5C5651] italic leading-relaxed mb-4">"{t.text}"</p>
              <p className="text-sm tracking-[0.05em] text-[#8A8178]">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. NEWSLETTER */}
      <section className="bg-[#2C2825] py-16">
        <div className="max-w-md mx-auto px-6 text-center">
          <h3 className="serif text-white text-3xl tracking-[-0.01em] mb-3">Join for 10% off</h3>
          <p className="text-[#D4C9B9] text-sm mb-8">Be the first to know about new arrivals and exclusive offers.</p>
          
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing!'); }}>
            <input 
              type="email" 
              placeholder="YOUR EMAIL" 
              required
              className="newsletter-input flex-1 h-11 px-4 text-sm placeholder:text-[#8A8178] text-[#2C2825]"
            />
            <Button type="submit" className="sm:w-auto">SUBSCRIBE</Button>
          </form>
          <p className="text-[10px] text-[#8A8178] mt-3 tracking-wide">We respect your inbox. Unsubscribe anytime.</p>
        </div>
      </section>
    </div>
  )
}

export default Home
