import React from 'react'
import { Link } from 'react-router-dom'
import { Star } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import { products, ugcImages } from '../data/products'

function Home() {
  const bestsellers = products.slice(0, 5)
  const categories = [
    { name: "Earrings", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80" },
    { name: "Necklaces", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80" },
    { name: "Huggies", image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80" },
  ]
  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. I've worn my huggies every day for months and they still look brand new." },
    { name: "Sophia R.", text: "Bought the Royal Heirloom Set as a gift. The packaging alone made it feel so special." },
    { name: "Isabella T.", text: "Finally found jewelry that doesn't irritate my sensitive skin. The gold tone is beautiful." },
  ]

  return (
    <div>
      {/* 1. Sticky Nav - handled in Navbar component */}

      {/* 2. Full-bleed Hero */}
      <section className="relative h-[100dvh] min-h-[700px] flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-[#1A1816]">
          <img 
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=2000&q=90" 
            alt="Velmora Fine Jewelry"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="serif text-white text-6xl md:text-7xl tracking-[0.05em] mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-white/90 text-lg mb-10 tracking-wide">
            Demi-fine gold jewelry, made to last a lifetime.
          </p>
          <Link to="/shop" className="btn-primary inline-block">
            Shop the Collection
          </Link>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-px h-12 bg-white/40" />
        </div>
      </section>

      {/* 3. Trust Bar */}
      <div className="border-y border-[#E5E0D8] py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-2 text-xs tracking-[0.15em] text-[#6B665F] uppercase text-center">
            <span>Free Worldwide Shipping</span>
            <span>30-Day Returns</span>
            <span>18K Gold Plated</span>
            <span>Hypoallergenic</span>
          </div>
        </div>
      </div>

      {/* 4. Bestsellers */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-xs tracking-[0.2em] text-[#B8976E] uppercase">Signature Pieces</span>
            <h2 className="serif text-4xl mt-2">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm tracking-[0.1em] underline underline-offset-4 hover:text-[#B8976E]">
            View All
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {bestsellers.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 5. UGC Reel Row */}
      <section className="bg-[#1A1816] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-8">
            <span className="text-[#B8976E] text-xs tracking-[0.2em] uppercase">As Seen On You</span>
            <h3 className="serif text-white text-3xl mt-2">Moments in Gold</h3>
          </div>
          
          <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
            {ugcImages.map((ugc, idx) => (
              <div key={idx} className="ugc-card snap-start">
                <img src={ugc.image} alt={ugc.caption} />
                <div className="ugc-caption">{ugc.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Shop by Category */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <span className="text-xs tracking-[0.2em] text-[#B8976E] uppercase">Discover</span>
          <h2 className="serif text-4xl mt-2">Shop by Category</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-4">
          {categories.map((cat, idx) => (
            <Link 
              key={idx} 
              to="/shop" 
              className="category-tile group"
            >
              <img src={cat.image} alt={cat.name} />
              <div className="category-overlay">
                <span className="category-label group-hover:opacity-100">{cat.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 7. Brand Story */}
      <section id="about" className="border-t border-[#E5E0D8]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2">
          <div className="aspect-[4/3] md:aspect-auto bg-[#1A1816]">
            <img 
              src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=1200&q=80" 
              alt="Our atelier"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center px-8 md:px-16 py-16 md:py-0">
            <div>
              <span className="text-xs tracking-[0.2em] text-[#B8976E] uppercase">Since 2018</span>
              <h2 className="serif text-4xl mt-3 mb-6">Our Story</h2>
              <p className="text-[#6B665F] leading-relaxed mb-8 max-w-md">
                Velmora was born from a simple belief: beautiful jewelry shouldn't require compromise. 
                We craft demi-fine pieces that honor tradition while embracing modern life—timeless 
                enough to pass down, accessible enough to wear every day.
              </p>
              <Link to="/shop" className="btn-outline inline-block text-sm">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Testimonials */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <span className="text-xs tracking-[0.2em] text-[#B8976E] uppercase">In Their Words</span>
        <h2 className="serif text-4xl mt-2 mb-12">What Our Clients Say</h2>
        
        <div className="grid md:grid-cols-3 gap-8 text-left">
          {testimonials.map((t, idx) => (
            <div key={idx} className="p-8 border border-[#E5E0D8]">
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-[#B8976E] text-[#B8976E]" />
                ))}
              </div>
              <p className="text-[#6B665F] italic mb-6 leading-relaxed">"{t.text}"</p>
              <div className="text-sm tracking-[0.05em]">{t.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Newsletter */}
      <section className="bg-[#1A1816] py-16">
        <div className="max-w-md mx-auto px-6 text-center">
          <span className="text-[#B8976E] text-xs tracking-[0.2em] uppercase">Stay Close</span>
          <h3 className="serif text-white text-3xl mt-3 mb-3">Join for 10% off your first order</h3>
          <p className="text-white/60 text-sm mb-8">Receive stories, early access, and private releases.</p>
          
          <form className="flex" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address"
              className="flex-1 px-5 py-3.5 text-sm bg-white/95 placeholder:text-[#6B665F] focus:outline-none"
            />
            <button type="submit" className="btn-primary px-8">Join</button>
          </form>
        </div>
      </section>

      {/* 10. Footer */}
      <footer className="bg-[#F8F5F1] border-t border-[#E5E0D8] pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-y-12 mb-16">
            <div>
              <div className="serif text-2xl tracking-[0.2em] mb-4">VELMORA</div>
              <p className="text-xs text-[#6B665F]">Fine jewelry, thoughtfully made.</p>
            </div>
            
            <div>
              <div className="text-xs tracking-[0.15em] uppercase mb-4">Shop</div>
              <div className="space-y-2 text-sm text-[#6B665F]">
                <div><Link to="/shop">All Jewelry</Link></div>
                <div><Link to="/shop">Earrings</Link></div>
                <div><Link to="/shop">Necklaces</Link></div>
                <div><Link to="/shop">Huggies</Link></div>
              </div>
            </div>
            
            <div>
              <div className="text-xs tracking-[0.15em] uppercase mb-4">Help</div>
              <div className="space-y-2 text-sm text-[#6B665F]">
                <div>Shipping</div>
                <div>Returns</div>
                <div>Care Guide</div>
                <div>Contact</div>
              </div>
            </div>
            
            <div>
              <div className="text-xs tracking-[0.15em] uppercase mb-4">Company</div>
              <div className="space-y-2 text-sm text-[#6B665F]">
                <div>Our Story</div>
                <div>Journal</div>
                <div>Stockists</div>
                <div>Wholesale</div>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-[#E5E0D8] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#6B665F]">
            <div>© {new Date().getFullYear()} Velmora. All rights reserved.</div>
            <div className="flex gap-6">
              <span>Instagram</span>
              <span>Pinterest</span>
              <span>Visa</span>
              <span>Mastercard</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
