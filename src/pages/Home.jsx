import React from 'react'
import { Link } from 'react-router-dom'
import { Plus } from 'lucide-react'
import { SEED_PRODUCTS } from '../lib/data'
import { useStore } from '../store'
import { cn } from '../lib/utils'

export const Homepage = () => {
  const { addToCart } = useStore()
  const bestsellers = SEED_PRODUCTS.filter(p => p.isBestseller).slice(0, 5)
  const [email, setEmail] = React.useState('')
  const [subscribed, setSubscribed] = React.useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
    }
  }

  return (
    <div className="bg-background smooth-transition">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center"
            data-strk-bg-id="hero-bg"
            data-strk-bg="editorial close-up warm lighting gold jewelry model"
            data-strk-bg-ratio="16x9"
            style={{ backgroundColor: '#2a2622' }}
          />
          <div className="absolute inset-0 bg-black/30 mix-blend-multiply" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto space-y-8 mt-16">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium tracking-wide">
            Crafted to be Treasured
          </h1>
          <p className="text-lg md:text-xl font-sans font-light tracking-wide max-w-2xl mx-auto opacity-90">
            Demi-fine gold jewelry for the modern romantic. Quiet luxury designed for everyday elegance.
          </p>
          <div className="pt-4">
            <Link 
              to="/shop" 
              className="inline-block bg-white text-foreground px-10 py-4 text-sm uppercase tracking-widest hover:bg-white/90 transition-colors font-medium border border-white"
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-primary text-primary-foreground py-3 border-y border-primary/20">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center text-xs md:text-sm uppercase tracking-widest font-medium opacity-90 text-center gap-4">
          <span className="flex-1 min-w-[200px]">Free Worldwide Shipping</span>
          <span className="hidden md:inline-block w-px h-4 bg-primary-foreground/30" />
          <span className="flex-1 min-w-[200px]">30-Day Returns</span>
          <span className="hidden md:inline-block w-px h-4 bg-primary-foreground/30" />
          <span className="flex-1 min-w-[200px]">18K Gold Plated</span>
          <span className="hidden md:inline-block w-px h-4 bg-primary-foreground/30" />
          <span className="flex-1 min-w-[200px]">Hypoallergenic</span>
        </div>
      </div>

      {/* Bestsellers Grid */}
      <section className="py-24 container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl md:text-4xl font-serif">Bestsellers</h2>
          <Link to="/shop" className="text-sm uppercase tracking-widest border-b border-foreground pb-1 hover:text-primary hover:border-primary transition-colors">
            Shop All
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-10 md:gap-6">
          {bestsellers.map(product => (
            <div key={product.id} className="group cursor-pointer">
              <Link to={`/product/${product.id}`} className="block relative aspect-[4/5] bg-muted mb-4 overflow-hidden">
                <img 
                  data-strk-img-id={`bestseller-primary-${product.id}`}
                  data-strk-img={`[prod-name-${product.id}] jewelry light background`}
                  data-strk-img-ratio="4x5"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                />
                <img 
                  data-strk-img-id={`bestseller-hover-${product.id}`}
                  data-strk-img={`[prod-name-${product.id}] jewelry model worn`}
                  data-strk-img-ratio="4x5"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.hoverImageAlt}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    addToCart(product);
                  }}
                  className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm text-foreground py-3 text-xs uppercase tracking-widest font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"
                >
                  Quick Add
                </button>
              </Link>
              <div className="space-y-1 text-center">
                <h3 id={`prod-name-${product.id}`} className="font-serif text-lg">{product.name}</h3>
                <p className="text-sm opacity-70">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 pb-24 container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {[
            { title: 'Earrings', query: 'gold earrings close up editorial' },
            { title: 'Necklaces', query: 'gold layered necklaces model collarbone' },
            { title: 'Huggies', query: 'gold huggie earrings ear piercing' }
          ].map((cat, i) => (
            <Link to="/shop" key={i} className="group relative aspect-[3/4] md:aspect-square overflow-hidden bg-muted">
              <img 
                data-strk-img-id={`cat-${i}`}
                data-strk-img={cat.query}
                data-strk-img-ratio="3x4"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-white/95 text-foreground px-8 py-3 font-serif text-xl md:text-2xl tracking-wide w-auto text-center transform transition-transform duration-500 group-hover:-translate-y-2">
                  {cat.title}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24 bg-[#f4f2ee]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="aspect-[4/5] bg-muted relative overflow-hidden">
              <img 
                data-strk-img-id="brand-story-img"
                data-strk-img="jewelry artisan workshop warm lighting"
                data-strk-img-ratio="4x5"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Velmora Studio"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-8 max-w-lg">
              <h2 className="text-3xl md:text-5xl font-serif">Everyday heirlooms, thoughtfully crafted.</h2>
              <div className="space-y-6 text-foreground/80 leading-relaxed font-light">
                <p>
                  Velmora was founded on the belief that fine jewelry shouldn't be reserved for special occasions. We design pieces intended to be lived in, layered, and loved daily.
                </p>
                <p>
                  By partnering directly with expert jewelers and using high-quality 18K gold vermeil and solid gold, we create accessible luxury without the traditional retail markup.
                </p>
              </div>
              <div>
                <a href="#" className="inline-block mt-4 text-sm uppercase tracking-widest border-b border-foreground pb-1 hover:text-primary hover:border-primary transition-colors">
                  Read Our Story
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-32 bg-primary text-primary-foreground text-center px-4">
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-5xl font-serif">Join the Inner Circle</h2>
          <p className="text-primary-foreground/80 font-light text-lg">
            Sign up for 10% off your first order, plus early access to new collections and exclusive events.
          </p>
          
          {subscribed ? (
            <p className="font-serif text-xl italic pt-4">Welcome to Velmora. Check your inbox shortly.</p>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto pt-4 text-foreground">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address" 
                required
                className="flex-1 px-6 py-4 bg-white/95 focus:outline-none focus:ring-2 focus:ring-primary-foreground/50 border-0 rounded-none placeholder:text-foreground/50"
              />
              <button 
                type="submit" 
                className="bg-foreground text-background px-10 py-4 text-sm uppercase tracking-widest font-medium hover:bg-foreground/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>

    </div>
  )
}