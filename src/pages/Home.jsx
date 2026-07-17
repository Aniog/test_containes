import { Link } from 'react-router-dom'
import { Star } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import { products } from '../App'

const Home = () => {
  const bestsellers = products.slice(0, 5)
  
  const ugcItems = [
    { id: 1, caption: "Morning light", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80" },
    { id: 2, caption: "Everyday elegance", image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&q=80" },
    { id: 3, caption: "Golden hour", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80" },
    { id: 4, caption: "Effortless beauty", image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=400&q=80" },
    { id: 5, caption: "Timeless style", image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=80" },
  ]

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. My huggies have become my everyday staple." },
    { name: "Sofia R.", text: "Beautiful packaging and even more beautiful jewelry. A gift I treasure." },
    { name: "Maya K.", text: "Finally found pieces that don't irritate my sensitive skin. Thank you." },
  ]

  return (
    <div>
      {/* 1. Sticky Nav - handled in Navbar component */}

      {/* 2. Full-bleed Hero */}
      <section className="relative h-[100dvh] min-h-[700px] flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-[#2C2825]">
          <img 
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce45e?w=2000&q=80" 
            alt="Velmora Jewelry" 
            className="w-full h-full object-cover opacity-75"
          />
        </div>
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="font-serif text-[56px] md:text-[72px] leading-[1.05] tracking-[-0.02em] text-white mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-white/90 text-lg mb-10 tracking-wide">Demi-fine jewelry for the modern woman.</p>
          <Link to="/shop" className="btn-primary inline-block">Shop the Collection</Link>
        </div>
      </section>

      {/* 3. Trust Bar */}
      <div className="trust-bar bg-white border-b border-[#E5DFD3] py-4">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-wrap justify-center gap-x-8 gap-y-2 text-center text-[#6B665F]">
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
            <div className="text-xs tracking-[0.15em] uppercase text-[#6B665F] mb-2">Signature Pieces</div>
            <h2 className="font-serif text-4xl tracking-tight">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm tracking-[0.08em] hover:text-[#B8976E] transition-colors hidden md:block">View All →</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-10">
          {bestsellers.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 5. UGC Reel-style Row */}
      <section className="bg-[#F5F2EB] py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-xs tracking-[0.15em] uppercase text-[#6B665F] mb-8 text-center">As Seen On You</div>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {ugcItems.map(item => (
              <div key={item.id} className="ugc-card flex-shrink-0 w-[180px] md:w-[200px] aspect-[9/16] bg-[#2C2825] snap-start overflow-hidden">
                <img src={item.image} alt={item.caption} className="w-full h-full object-cover" />
                <div className="ugc-caption">
                  <span className="font-serif text-sm tracking-wide">{item.caption}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Shop by Category */}
      <section className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="text-xs tracking-[0.15em] uppercase text-[#6B665F] mb-8 text-center">Discover</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: 'Earrings', path: '/shop?category=Earrings', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80' },
            { label: 'Necklaces', path: '/shop?category=Necklaces', img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80' },
            { label: 'Huggies', path: '/shop?category=Huggies', img: 'https://images.unsplash.com/photo-1535632787350-7423ebd33c1f?w=800&q=80' },
          ].map(cat => (
            <Link key={cat.label} to={cat.path} className="category-tile aspect-[16/10] block overflow-hidden">
              <img src={cat.img} alt={cat.label} className="w-full h-full object-cover" />
              <span className="category-label font-serif tracking-[0.15em]">{cat.label}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* 7. Brand Story */}
      <section className="max-w-[1400px] mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="aspect-[4/3] bg-[#F5F2EB]">
            <img src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce45e?w=1000&q=80" alt="Our atelier" className="w-full h-full object-cover" />
          </div>
          <div className="max-w-lg">
            <div className="text-xs tracking-[0.15em] uppercase text-[#6B665F] mb-3">Since 2019</div>
            <h2 className="font-serif text-4xl tracking-tight mb-6">Our Story</h2>
            <p className="text-[#6B665F] leading-relaxed mb-8">
              Velmora was born from a desire to create jewelry that feels as beautiful as it looks. 
              Each piece is crafted with intention, using responsibly sourced materials and traditional techniques.
            </p>
            <Link to="/about" className="btn-outline inline-block">Learn More</Link>
          </div>
        </div>
      </section>

      {/* 8. Testimonials */}
      <section className="bg-white py-16 border-y border-[#E5DFD3]">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="text-xs tracking-[0.15em] uppercase text-[#6B665F] mb-10 text-center">Voices We Cherish</div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="text-center">
                <div className="stars flex justify-center mb-4">
                  {[...Array(5)].map((_, idx) => <Star key={idx} size={16} fill="currentColor" />)}
                </div>
                <p className="text-[#6B665F] italic mb-4">"{t.text}"</p>
                <div className="text-sm tracking-wider">— {t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Newsletter */}
      <section className="newsletter py-16">
        <div className="max-w-md mx-auto px-6 text-center">
          <div className="font-serif text-3xl tracking-tight mb-3">Join for 10% off</div>
          <p className="text-white/70 text-sm mb-8 tracking-wide">Be the first to know about new arrivals and stories.</p>
          <form className="flex" onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing!'); }}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-5 py-3.5 bg-white/10 border border-white/30 text-white placeholder:text-white/50 text-sm focus:outline-none focus:border-white/60" 
              required 
            />
            <button type="submit" className="btn-primary">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Home