import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Star } from 'lucide-react'
import { useCartStore } from '@/lib/store'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const seedProducts = [
  { id: '1', name: 'VIVID AURA JEWELS', slug: 'vivid-aura-jewels', price: 42, type: 'Ear Cuff', imageId: 'vivid-aura-cuff-1a', descId: 'vivid-aura-desc' },
  { id: '2', name: 'MAJESTIC FLORA NECTAR', slug: 'majestic-flora-nectar', price: 68, type: 'Necklace', imageId: 'majestic-flora-neck-2b', descId: 'majestic-flora-desc' },
  { id: '3', name: 'GOLDEN SPHERE HUGGIES', slug: 'golden-sphere-huggies', price: 38, type: 'Huggies', imageId: 'golden-sphere-hug-3c', descId: 'golden-sphere-desc' },
  { id: '4', name: 'AMBER LACE EARRINGS', slug: 'amber-lace-earrings', price: 54, type: 'Earrings', imageId: 'amber-lace-ear-4d', descId: 'amber-lace-desc' },
  { id: '5', name: 'ROYAL HEIRLOOM SET', slug: 'royal-heirloom-set', price: 95, type: 'Gift Set', imageId: 'royal-heirloom-set-5e', descId: 'royal-heirloom-desc' }
]

const categories = [
  { id: 'cat-earrings', name: 'Earrings', link: '/collections/earrings', imageId: 'cat-earrings-img' },
  { id: 'cat-necklaces', name: 'Necklaces', link: '/collections/necklaces', imageId: 'cat-necklaces-img' },
  { id: 'cat-huggies', name: 'Huggies', link: '/collections/huggies', imageId: 'cat-huggies-img' },
]

export default function Home() {
  const containerRef = useRef(null)
  const { addItem } = useCartStore()

  useEffect(() => {
    try {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    } catch (e) {
      console.log('Image setup skipped', e)
    }
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center -mt-[88px]">
        {/* Background Image using data-strk-bg */}
        <div 
          className="absolute inset-0 z-0 bg-secondary"
          data-strk-bg-id="hero-bg-12345"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 z-10 bg-black/40" />

        <div className="relative z-20 text-center text-white px-4 max-w-3xl mx-auto flex flex-col items-center mt-20">
          <h1 id="hero-title" className="font-serif text-5xl md:text-7xl mb-6">Crafted to be Treasured</h1>
          <p id="hero-subtitle" className="text-lg md:text-xl mb-10 max-w-xl font-light text-white/90">
            Demi-fine gold jewelry designed for everyday elegance and milestone moments.
          </p>
          <Link 
            to="/collections/all" 
            className="inline-flex items-center justify-center border border-white px-8 py-4 text-sm tracking-widest uppercase font-medium hover:bg-white hover:text-black transition-colors duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-primary text-primary-foreground py-3 border-y border-primary/20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs md:text-sm tracking-wide font-medium">
            <span>Free Worldwide Shipping</span>
            <span className="hidden md:inline">&middot;</span>
            <span>30-Day Returns</span>
            <span className="hidden md:inline">&middot;</span>
            <span>18K Gold Plated</span>
            <span className="hidden md:inline">&middot;</span>
            <span>Hypoallergenic</span>
          </div>
        </div>
      </section>

      {/* Bestsellers Grid */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <h2 id="bestsellers-title" className="font-serif text-3xl md:text-4xl text-foreground">Bestsellers</h2>
          <Link to="/collections/all" className="hidden md:flex items-center text-sm font-medium hover:text-primary transition-colors">
            View All <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {seedProducts.map(product => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative aspect-[3/4] bg-secondary mb-4 overflow-hidden">
                <img 
                  data-strk-img-id={product.imageId}
                  data-strk-img={`[${product.descId}] [product-title-${product.id}] [bestsellers-title]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Quick Add Button on Hover */}
                <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <button 
                    onClick={(e) => {
                      e.preventDefault()
                      addItem({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        slug: product.slug,
                        variant: 'Gold',
                        image: null
                      })
                    }}
                    className="w-full bg-white text-black border border-transparent py-3 text-xs uppercase tracking-widest font-medium shadow-sm hover:border-black transition-colors"
                  >
                    Quick Add
                  </button>
                </div>
              </div>
              
              <div className="text-center">
                <p id={`product-title-${product.id}`} className="font-serif text-sm tracking-wider uppercase mb-1">{product.name}</p>
                <p id={product.descId} className="hidden">{product.type}</p>
                <p className="text-secondary-foreground text-sm font-light">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reel-style UGC Row */}
      <section className="py-16 overflow-hidden bg-white">
        <div className="container mx-auto px-4 max-w-7xl mb-12 text-center">
          <h2 id="ugc-title" className="font-serif text-3xl md:text-4xl text-foreground">Spotted In Velmora</h2>
        </div>
        
        {/* Horizontal scroll container */}
        <div className="flex overflow-x-auto pb-8 gap-4 px-4 md:px-8 snap-x snap-mandatory style-hide-scrollbar">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="flex-shrink-0 w-64 md:w-72 aspect-[9/16] relative snap-center bg-secondary rounded-sm overflow-hidden group">
              <img 
                data-strk-img-id={`ugc-img-${i}`}
                data-strk-img={`[ugc-caption-${i}] [ugc-title]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Worn jewelry"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                <p id={`ugc-caption-${i}`} className="font-serif text-white text-lg">
                  {i % 2 === 0 ? "Perfect everyday stack." : "Golden hour glow."}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shop By Category */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link key={cat.id} to={cat.link} className="group relative aspect-[4/5] overflow-hidden bg-secondary">
              <img 
                data-strk-img-id={cat.imageId}
                data-strk-img={`[cat-name-${cat.id}] category`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span id={`cat-name-${cat.id}`} className="bg-white/90 backdrop-blur px-8 py-3 font-serif text-xl uppercase tracking-widest text-foreground">
                  {cat.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story Split */}
      <section className="py-16 md:py-32 bg-[#F8F6F0]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
            <div className="w-full md:w-1/2 aspect-[4/5] relative bg-secondary">
              <img 
                data-strk-img-id="story-img-1"
                data-strk-img="[story-title] [story-text]"
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Jewelry design process"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
              <h2 id="story-title" className="font-serif text-4xl mb-6">Designed to Last</h2>
              <p id="story-text" className="text-secondary-foreground text-lg font-light leading-relaxed mb-8 max-w-lg">
                We believe fine jewelry shouldn't be reserved for special occasions. 
                Our collections are thoughtfully designed with 18k gold vermeil and ethically sourced materials, 
                creating pieces that feel luxurious, yet accessible enough to wear every single day.
              </p>
              <Link to="/about" className="inline-flex pb-1 border-b border-primary text-primary font-medium tracking-wide hover:opacity-70 transition-opacity">
                Discover Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 bg-background border-b border-border">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="font-serif text-3xl mb-16">Loved by You</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: "Sarah M.", text: "Absolutely stunning. The quality is far beyond the price point. I rarely take my huggies off!" },
              { name: "Emily R.", text: "Beautiful packaging and the necklace is even more gorgeous in person. It has the perfect weight to it." },
              { name: "Jessica T.", text: "My new go-to for gifts. Ethical, beautiful, and the customer service is unmatched." }
            ].map((review, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="flex gap-1 mb-6 text-primary">
                  {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                </div>
                <p className="font-serif text-xl italic leading-relaxed mb-6 max-w-sm">"{review.text}"</p>
                <span className="text-sm tracking-widest text-secondary-foreground uppercase">— {review.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-primary text-primary-foreground py-24 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">Join the Inner Circle</h2>
          <p className="text-primary-foreground/80 mb-8 font-light max-w-md mx-auto">
            Subscribe to receive 10% off your first order, plus early access to new collections and exclusive events.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 bg-transparent border border-primary-foreground/30 px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground transition-colors rounded-none"
              required
            />
            <button 
              type="submit"
              className="bg-primary-foreground text-primary font-medium px-8 py-3 hover:bg-white transition-colors rounded-none"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
      
      {/* Utility style snippet for hiding scrollbar */}
      <style>{`
        .style-hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .style-hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  )
}
