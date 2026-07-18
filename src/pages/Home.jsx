import React from 'react'
import { Link } from 'react-router-dom'
import { Star } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

// UGC images - vertical 9:16 style jewelry shots
const ugcItems = [
  { id: 1, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80", caption: "My everyday staple" },
  { id: 2, image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80", caption: "Gifted myself this beauty" },
  { id: 3, image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80", caption: "Perfect for date night" },
  { id: 4, image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80", caption: "Obsessed with this set" },
  { id: 5, image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80", caption: "My new favorite" },
]

const testimonials = [
  { name: "Elena M.", text: "The quality is exceptional. I've worn my huggies every day for months and they still look brand new." },
  { name: "Sofia R.", text: "Bought the Royal Heirloom Set as a gift for my sister. She hasn't taken it off since." },
  { name: "Maya K.", text: "Finally found jewelry that doesn't irritate my sensitive skin. The gold is so warm and beautiful." },
]

function Home() {
  // Use first 5 products as bestsellers
  const bestsellers = products.slice(0, 5)

  return (
    <div className="pt-20">
      {/* 1. HERO */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-vel-deep">
          <img
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1600&q=80"
            alt="Velmora Fine Jewelry"
            className="absolute inset-0 w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="serif text-5xl md:text-6xl text-white mb-6 tracking-[-0.02em]">
            Crafted to be Treasured
          </h1>
          <p className="text-white/90 text-lg mb-8 max-w-md mx-auto">
            Demi-fine gold jewelry for the woman who values quiet luxury.
          </p>
          <Link to="/shop" className="btn btn-accent inline-block">
            Shop the Collection
          </Link>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-xs tracking-[0.2em]">
          SCROLL TO EXPLORE
        </div>
      </section>

      {/* 2. TRUST BAR */}
      <div className="trust-bar border-b border-vel-border py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-x-8 gap-y-2 text-center">
          <span>Free Worldwide Shipping</span>
          <span className="hidden md:inline">·</span>
          <span>30-Day Returns</span>
          <span className="hidden md:inline">·</span>
          <span>18K Gold Plated</span>
          <span className="hidden md:inline">·</span>
          <span>Hypoallergenic</span>
        </div>
      </div>

      {/* 3. BESTSELLERS */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="text-xs tracking-[0.15em] uppercase text-vel-gold mb-2">Discover</div>
            <h2 className="section-title">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm tracking-widest hover:text-vel-gold-dark hidden md:block">
            VIEW ALL →
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-8 md:hidden">
          <Link to="/shop" className="text-sm tracking-widest hover:text-vel-gold-dark">
            VIEW ALL →
          </Link>
        </div>
      </section>

      {/* 4. UGC REEL-STYLE ROW */}
      <section className="bg-vel-bg-alt py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10">
            <div className="text-xs tracking-[0.15em] uppercase text-vel-gold mb-2">As Seen On</div>
            <h2 className="section-title">Real Moments</h2>
          </div>
          
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {ugcItems.map((item) => (
              <div key={item.id} className="ugc-card snap-start">
                <img src={item.image} alt={item.caption} />
                <div className="ugc-caption">{item.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SHOP BY CATEGORY */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="mb-10">
          <div className="text-xs tracking-[0.15em] uppercase text-vel-gold mb-2">Browse</div>
          <h2 className="section-title">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { name: "Earrings", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80", link: "/shop?category=Earrings" },
            { name: "Necklaces", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80", link: "/shop?category=Necklaces" },
            { name: "Huggies", image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80", link: "/shop?category=Huggies" },
          ].map((cat) => (
            <Link key={cat.name} to={cat.link} className="category-tile group">
              <img src={cat.image} alt={cat.name} />
              <div className="category-tile-label">{cat.name}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. BRAND STORY */}
      <section className="bg-vel-surface border-y border-vel-border">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2">
          <div className="aspect-[4/3] md:aspect-auto bg-vel-bg-alt">
            <img
              src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1000&q=80"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-10 md:p-16 flex flex-col justify-center">
            <div className="text-xs tracking-[0.15em] uppercase text-vel-gold mb-3">Since 2019</div>
            <h2 className="serif text-3xl md:text-4xl mb-6 tracking-[-0.01em]">Our Story</h2>
            <p className="text-vel-muted leading-relaxed mb-8">
              Velmora was born from a simple belief: that beautiful jewelry shouldn't require compromise. 
              We create demi-fine pieces that feel as precious as fine jewelry, but designed for real life.
            </p>
            <Link to="/about" className="btn btn-outline self-start">Read Our Story</Link>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="mb-10 text-center">
          <div className="text-xs tracking-[0.15em] uppercase text-vel-gold mb-2">In Their Words</div>
          <h2 className="section-title">Loved by Our Community</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial">
              <div className="stars mb-4">★★★★★</div>
              <p className="text-sm leading-relaxed mb-6">"{t.text}"</p>
              <p className="text-xs tracking-widest text-vel-muted">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. NEWSLETTER */}
      <section className="newsletter py-16 md:py-20">
        <div className="max-w-md mx-auto px-6 text-center">
          <h2 className="serif text-2xl md:text-3xl text-white mb-3">Join for 10% off</h2>
          <p className="text-white/70 text-sm mb-8">Be the first to know about new arrivals and exclusive offers.</p>
          
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => {
            e.preventDefault()
            alert("Thank you! You've been subscribed (demo).")
          }}>
            <input
              type="email"
              placeholder="Your email address"
              className="input flex-1"
              required
            />
            <button type="submit" className="btn btn-accent whitespace-nowrap">
              Subscribe
            </button>
          </form>
          <p className="text-[10px] text-white/50 mt-4 tracking-widest">We respect your inbox. Unsubscribe anytime.</p>
        </div>
      </section>
    </div>
  )
}

export default Home