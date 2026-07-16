import React from 'react'
import { Link } from 'react-router-dom'
import { Star } from 'lucide-react'
import ProductCard from '../components/product/ProductCard'
import { products } from '../data/products'

const Home = () => {
  const bestsellers = products.slice(0, 5)
  const earrings = products.find(p => p.category === 'Earrings')
  const necklaces = products.find(p => p.category === 'Necklaces')
  const huggies = products.find(p => p.category === 'Huggies')

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. My huggies have become my everyday staple.", rating: 5 },
    { name: "Sofia R.", text: "Beautiful packaging and the necklace is even more stunning in person.", rating: 5 },
    { name: "Isabella T.", text: "I bought the set as a gift — my sister hasn't taken it off since.", rating: 5 },
  ]

  const ugcCaptions = [
    "Morning light on the Vivid Aura",
    "Layered with the Flora Nectar",
    "Golden Sphere for every day",
    "Amber Lace for date night",
    "The Heirloom Set — timeless",
  ]

  return (
    <div className="pt-20">
      {/* 1. Hero */}
      <section className="relative h-[100dvh] min-h-[700px] flex items-center justify-center bg-[#1C1814] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#3A3530_0.5px,transparent_1px)] bg-[length:4px_4px] opacity-40" />
        <img 
          src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=2000&q=90" 
          alt="Woman wearing elegant gold jewelry"
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="serif text-[72px] md:text-[88px] leading-[0.95] tracking-[-0.02em] text-white mb-6">
            Crafted to be<br />Treasured
          </h1>
          <p className="text-[#F8F5F1] text-lg tracking-[0.05em] mb-10 max-w-md mx-auto">
            Demi-fine gold jewelry, made with intention.
          </p>
          <Link to="/shop" className="btn btn-primary inline-block">
            Shop the Collection
          </Link>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#F8F5F1] text-xs tracking-[0.2em] flex flex-col items-center gap-2">
          SCROLL TO EXPLORE <div className="h-px w-8 bg-[#F8F5F1]/50" />
        </div>
      </section>

      {/* 2. Trust Bar */}
      <div className="border-b border-[#E5DFD3] py-4 text-center text-xs tracking-[0.15em] text-[#6B655F] flex flex-wrap justify-center gap-x-8 gap-y-1">
        <span>Free Worldwide Shipping</span>
        <span>30-Day Returns</span>
        <span>18K Gold Plated</span>
        <span>Hypoallergenic</span>
      </div>

      {/* 3. Bestsellers */}
      <section className="max-w-[1400px] mx-auto px-6 pt-20 pb-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="text-xs tracking-[0.2em] text-[#B8976E] mb-2">DISCOVER</div>
            <h2 className="serif text-5xl tracking-[-0.01em]">Bestsellers</h2>
          </div>
          <Link to="/shop" className="hidden md:block text-sm tracking-widest hover:text-[#B8976E] transition-colors">VIEW ALL →</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {bestsellers.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 4. UGC Reel */}
      <section className="bg-[#F5F2EC] py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-xs tracking-[0.2em] text-[#B8976E] mb-3">AS SEEN ON YOU</div>
          <h3 className="serif text-4xl mb-8 tracking-[-0.01em]">Moments in Gold</h3>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {[1,2,3,4,5].map((i, idx) => (
              <div key={i} className="ugc-card w-[180px] md:w-[200px] aspect-[9/16] bg-[#1C1814] snap-start">
                <img 
                  src={`https://images.unsplash.com/photo-${['1535632066927-ab7c9ab60908','1617038260897-41a1f14a8ca0','1506630448388-4e683c67ddb0','1588444837495-c6cfeb53f32d','1611085583191-a3b181a88401'][idx]}?w=600&q=90`}
                  alt="UGC"
                  className="w-full h-full object-cover"
                />
                <div className="ugc-caption">{ugcCaptions[idx]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Shop by Category */}
      <section className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <div className="text-xs tracking-[0.2em] text-[#B8976E] mb-2">EXPLORE</div>
          <h2 className="serif text-5xl tracking-[-0.01em]">Shop by Category</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { label: "Earrings", img: earrings?.image, link: "/shop?category=Earrings" },
            { label: "Necklaces", img: necklaces?.image, link: "/shop?category=Necklaces" },
            { label: "Huggies", img: huggies?.image, link: "/shop?category=Huggies" },
          ].map((cat, idx) => (
            <Link key={idx} to={cat.link} className="category-tile aspect-[16/10] block overflow-hidden bg-[#1C1814]">
              <img src={cat.img} alt={cat.label} className="w-full h-full object-cover" />
              <div className="category-label">{cat.label}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. Brand Story */}
      <section className="max-w-[1400px] mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/3] bg-[#F5F2EC]">
            <img 
              src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1200&q=90" 
              alt="Artisan crafting jewelry"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-w-lg">
            <div className="text-xs tracking-[0.2em] text-[#B8976E] mb-3">OUR PHILOSOPHY</div>
            <h2 className="serif text-5xl tracking-[-0.01em] leading-none mb-6">Jewelry that feels like an heirloom, not a trend.</h2>
            <p className="body-text text-[#6B655F] mb-8">
              Every piece is thoughtfully designed in our studio and crafted with the finest materials. 
              We believe in jewelry that lasts — pieces you'll reach for every day, and pass down for generations.
            </p>
            <Link to="/" className="btn btn-outline inline-block">Read Our Story</Link>
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="bg-[#1C1814] py-20 text-[#F8F5F1]">
        <div className="max-w-[1100px] mx-auto px-6 text-center">
          <div className="text-xs tracking-[0.2em] text-[#B8976E] mb-3">LOVED BY MANY</div>
          <h2 className="serif text-5xl tracking-[-0.01em] mb-14">What Our Community Says</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {testimonials.map((t, idx) => (
              <div key={idx} className="border-l-2 border-[#B8976E] pl-6">
                <div className="flex gap-0.5 mb-4 text-[#B8976E]">
                  {Array.from({ length: t.rating }).map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="body-text mb-4">"{t.text}"</p>
                <div className="text-sm tracking-widest text-[#B8976E]">— {t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Newsletter */}
      <section className="max-w-[700px] mx-auto px-6 py-20 text-center">
        <div className="text-xs tracking-[0.2em] text-[#B8976E] mb-3">STAY CLOSE</div>
        <h2 className="serif text-5xl tracking-[-0.01em] mb-4">Join for 10% off your first order</h2>
        <p className="text-[#6B655F] mb-8">Be the first to know about new arrivals and exclusive offers.</p>
        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Your email address" 
            className="input flex-1" 
            required 
          />
          <button type="submit" className="btn btn-primary whitespace-nowrap">Subscribe</button>
        </form>
      </section>
    </div>
  )
}

export default Home