import React from 'react'
import { Link } from 'react-router-dom'
import { Star } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

const Home = () => {
  const bestsellers = products.slice(0, 5)
  
  const ugcItems = [
    { id: 1, caption: "Everyday elegance", image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&q=80" },
    { id: 2, caption: "Golden hour glow", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80" },
    { id: 3, caption: "Timeless beauty", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80" },
    { id: 4, caption: "Effortless luxury", image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=600&q=80" },
    { id: 5, caption: "Modern heirloom", image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600&q=80" },
  ]

  const categories = [
    { name: "Earrings", path: "/shop?category=Earrings", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80" },
    { name: "Necklaces", path: "/shop?category=Necklaces", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80" },
    { name: "Huggies", path: "/shop?category=Huggies", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80" },
  ]

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. These pieces feel like they cost three times as much.", rating: 5 },
    { name: "Sophia R.", text: "Beautiful packaging and even more beautiful jewelry. My go-to for gifting.", rating: 5 },
    { name: "Isabella T.", text: "Finally found jewelry that doesn't irritate my sensitive skin. Love every piece.", rating: 5 },
  ]

  return (
    <div>
      {/* 1. Sticky Nav - handled in Layout */}

      {/* 2. Full-bleed Hero */}
      <section className="relative h-[100dvh] min-h-[700px] flex items-center justify-center bg-[#1C1917] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=2000&q=80')] bg-cover bg-center opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="serif text-[72px] md:text-[88px] leading-[0.95] tracking-[-0.02em] text-white mb-6">
            Crafted to be<br />Treasured
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-10 tracking-wide">
            Demi-fine jewelry for the modern woman
          </p>
          <Link to="/shop" className="btn-accent inline-block">
            Shop the Collection
          </Link>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70 text-xs tracking-[0.2em]">
          SCROLL TO EXPLORE
          <div className="w-px h-8 bg-white/30" />
        </div>
      </section>

      {/* 3. Trust Bar */}
      <div className="border-b border-[#E5DFD3] py-4">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-wrap justify-center md:justify-between gap-x-8 gap-y-2 text-xs tracking-[0.12em] text-[#6B665F] text-center">
            <span>Free Worldwide Shipping</span>
            <span>30-Day Returns</span>
            <span>18K Gold Plated</span>
            <span>Hypoallergenic</span>
          </div>
        </div>
      </div>

      {/* 4. Bestsellers */}
      <section className="max-w-[1400px] mx-auto px-6 pt-20 pb-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-xs tracking-[0.15em] text-[#8B7355]">DISCOVER</span>
            <h2 className="serif text-5xl tracking-[-0.01em]">Bestsellers</h2>
          </div>
          <Link to="/shop" className="hidden md:block text-sm tracking-[0.08em] hover:text-[#8B7355] transition-colors">View All →</Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {bestsellers.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Link to="/shop" className="text-sm tracking-[0.08em]">View All →</Link>
        </div>
      </section>

      {/* 5. UGC Reel Row */}
      <section className="bg-[#F8F5F1] py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="mb-8">
            <span className="text-xs tracking-[0.15em] text-[#8B7355]">AS SEEN ON</span>
            <h3 className="serif text-4xl tracking-[-0.01em]">Real Moments</h3>
          </div>
          
          <div className="ugc-scroll flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
            {ugcItems.map(item => (
              <div key={item.id} className="relative flex-shrink-0 w-[220px] aspect-[9/16] overflow-hidden snap-start bg-[#1C1917]">
                <img src={item.image} alt={item.caption} className="absolute inset-0 w-full h-full object-cover opacity-90" />
                <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/70 to-transparent">
                  <p className="serif text-white text-lg tracking-wide">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Shop by Category */}
      <section className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <span className="text-xs tracking-[0.15em] text-[#8B7355]">EXPLORE</span>
          <h2 className="serif text-5xl tracking-[-0.01em] mt-2">Shop by Category</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-5">
          {categories.map(cat => (
            <Link key={cat.name} to={cat.path} className="group relative aspect-[16/10] overflow-hidden bg-[#1C1917]">
              <img src={cat.image} alt={cat.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/60" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-3xl serif tracking-[0.1em] opacity-0 group-hover:opacity-100 transition-opacity duration-300">{cat.name}</span>
              </div>
              <div className="absolute bottom-6 left-6 text-white text-sm tracking-[0.15em] opacity-100 group-hover:opacity-0 transition-opacity">{cat.name.toUpperCase()}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* 7. Brand Story */}
      <section className="bg-[#1C1917] text-white">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2">
          <div className="aspect-[4/3] md:aspect-auto relative">
            <img src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1200&q=80" alt="Our atelier" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="px-8 md:pr-16 py-16 md:py-20 flex flex-col justify-center">
            <span className="text-xs tracking-[0.15em] text-[#C5A46E]">EST. 2019</span>
            <h2 className="serif text-6xl tracking-[-0.01em] mt-3 mb-8">Our Story</h2>
            <div className="max-w-md space-y-5 text-white/80 text-[15px] leading-relaxed">
              <p>Velmora was born from a simple belief: that beautiful, well-crafted jewelry should be accessible without compromise.</p>
              <p>Each piece is thoughtfully designed in our studio and brought to life by skilled artisans using traditional techniques paired with modern sensibilities.</p>
            </div>
            <Link to="/about" className="mt-8 inline-block text-sm tracking-[0.1em] border-b border-white/40 pb-0.5 hover:border-white transition-colors w-fit">Learn More About Us →</Link>
          </div>
        </div>
      </section>

      {/* 8. Testimonials */}
      <section className="max-w-[1100px] mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <span className="text-xs tracking-[0.15em] text-[#8B7355]">LOVED BY MANY</span>
          <h2 className="serif text-5xl tracking-[-0.01em] mt-2">What Our Clients Say</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="text-center px-4">
              <div className="flex justify-center gap-0.5 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={16} className="star fill-current" />
                ))}
              </div>
              <p className="text-[15px] leading-relaxed mb-6 text-[#2C2825]">"{t.text}"</p>
              <p className="text-sm tracking-[0.08em] text-[#6B665F]">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Newsletter */}
      <section className="bg-[#8B7355] py-16">
        <div className="max-w-md mx-auto px-6 text-center text-white">
          <h3 className="serif text-4xl tracking-[-0.01em] mb-3">Join the Circle</h3>
          <p className="text-white/90 mb-8">Receive 10% off your first order and be the first to discover new collections.</p>
          
          <form className="flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing!'); }}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="newsletter-input text-white placeholder:text-white/60 border-white/40" 
              required 
            />
            <button type="submit" className="btn-primary bg-white text-[#2C2825] hover:bg-white/90 mt-2">Subscribe</button>
          </form>
          <p className="text-[10px] tracking-widest mt-4 text-white/60">WE RESPECT YOUR INBOX</p>
        </div>
      </section>
    </div>
  )
}

export default Home