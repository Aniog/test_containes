import React from 'react'
import { Link } from 'react-router-dom'
import { Star } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

const Home = () => {
  const bestsellers = products.slice(0, 5)
  
  const ugcImages = [
    { id: 1, caption: "Morning light", img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80" },
    { id: 2, caption: "Golden hour", img: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=400&q=80" },
    { id: 3, caption: "Effortless", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80" },
    { id: 4, caption: "Timeless", img: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80" },
    { id: 5, caption: "Everyday", img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80" },
  ]

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. I've worn my huggies every day for six months and they still look brand new." },
    { name: "Sofia R.", text: "Bought the Royal Heirloom Set as a gift for my sister. She hasn't taken it off since." },
    { name: "Isabella T.", text: "Finally found jewelry that doesn't irritate my sensitive skin. The packaging is beautiful too." }
  ]

  return (
    <div>
      {/* 1. Sticky Nav - handled in Navbar component */}

      {/* 2. Full-bleed Hero */}
      <section className="relative h-[100dvh] min-h-[700px] flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-[#2C2522]">
          <img 
            src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=2000&q=90" 
            alt="Velmora Fine Jewelry"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="font-serif text-6xl md:text-7xl text-white tracking-[0.08em] mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-white/90 text-lg mb-10 tracking-wide">
            Demi-fine jewelry for the modern woman
          </p>
          <Link to="/shop" className="btn btn-gold inline-block">
            Shop the Collection
          </Link>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-px h-12 bg-white/40" />
        </div>
      </section>

      {/* 3. Trust Bar */}
      <div className="trust-bar bg-white py-4 border-b border-[#E5DFD3]">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-wrap justify-center gap-x-8 gap-y-2 text-center text-[#6B635E]">
          <span>Free Worldwide Shipping</span>
          <span className="hidden md:inline">·</span>
          <span>30-Day Returns</span>
          <span className="hidden md:inline">·</span>
          <span>18K Gold Plated</span>
          <span className="hidden md:inline">·</span>
          <span>Hypoallergenic</span>
        </div>
      </div>

      {/* 4. Bestsellers */}
      <section className="max-w-[1400px] mx-auto px-6 pt-20 pb-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs tracking-[0.15em] text-[#8B7355] mb-2">DISCOVER</p>
            <h2 className="font-serif text-4xl tracking-[0.05em]">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm tracking-[0.08em] hover:text-[#8B7355] hidden md:block">
            View All →
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bestsellers.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 5. UGC Reel Row */}
      <section className="bg-[#F0EBE3] py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <p className="text-center text-xs tracking-[0.15em] text-[#8B7355] mb-8">AS SEEN ON YOU</p>
          
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {ugcImages.map((item, idx) => (
              <div key={idx} className="ugc-card flex-shrink-0 w-[180px] md:w-[200px] snap-start">
                <div className="relative aspect-[9/16] overflow-hidden bg-[#2C2522]">
                  <img 
                    src={item.img} 
                    alt={item.caption}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/70 to-transparent">
                    <p className="font-serif text-white text-sm tracking-[0.1em]">{item.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Shop by Category */}
      <section className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.15em] text-[#8B7355] mb-2">EXPLORE</p>
          <h2 className="font-serif text-4xl tracking-[0.05em]">Shop by Category</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {[
            { label: "Earrings", path: "/shop?category=earrings", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80" },
            { label: "Necklaces", path: "/shop?category=necklaces", img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80" },
            { label: "Huggies", path: "/shop?category=huggies", img: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80" }
          ].map((cat, idx) => (
            <Link key={idx} to={cat.path} className="category-tile group block aspect-[16/10] overflow-hidden">
              <img src={cat.img} alt={cat.label} className="w-full h-full object-cover" />
              <div className="category-label">
                <span className="font-serif text-3xl text-white tracking-[0.1em]">{cat.label}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 7. Brand Story */}
      <section className="max-w-[1400px] mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/3] bg-[#F0EBE3] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1000&q=80" 
              alt="Our atelier"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-w-md">
            <p className="text-xs tracking-[0.15em] text-[#8B7355] mb-3">EST. 2018</p>
            <h2 className="font-serif text-4xl tracking-[0.05em] mb-6">Our Story</h2>
            <p className="text-[#6B635E] leading-relaxed mb-8">
              Velmora was born from a desire to create jewelry that feels as precious as the moments it marks. 
              Each piece is thoughtfully designed in our atelier and crafted with the finest materials—never mass-produced, 
              always intentional.
            </p>
            <Link to="/about" className="btn btn-outline inline-block">Learn More</Link>
          </div>
        </div>
      </section>

      {/* 8. Testimonials */}
      <section className="bg-white py-16 border-y border-[#E5DFD3]">
        <div className="max-w-[1100px] mx-auto px-6">
          <p className="text-center text-xs tracking-[0.15em] text-[#8B7355] mb-10">LOVED BY OUR COMMUNITY</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="text-center">
                <div className="flex justify-center gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="#C5A46E" className="text-[#C5A46E]" />
                  ))}
                </div>
                <p className="text-[#6B635E] italic mb-4">"{t.text}"</p>
                <p className="text-sm tracking-[0.05em]">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Newsletter */}
      <section className="max-w-[600px] mx-auto px-6 py-20 text-center">
        <h2 className="font-serif text-3xl tracking-[0.08em] mb-3">Join for 10% off</h2>
        <p className="text-[#6B635E] mb-8">Be the first to know about new arrivals and exclusive offers.</p>
        
        <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing!'); }}>
          <input 
            type="email" 
            placeholder="Your email address" 
            className="newsletter-input flex-1"
            required 
          />
          <button type="submit" className="btn btn-primary whitespace-nowrap">Subscribe</button>
        </form>
      </section>
    </div>
  )
}

export default Home