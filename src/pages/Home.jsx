import React from 'react'
import { Link } from 'react-router-dom'
import { products } from '@/data/products'
import ProductCard from '@/components/ui/ProductCard'
import StarRating from '@/components/ui/StarRating'

// UGC mock data - vertical reel-style images
const ugcItems = [
  { id: 1, caption: "My everyday staple", img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80" },
  { id: 2, caption: "Gifted to myself", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80" },
  { id: 3, caption: "Wedding day details", img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=80" },
  { id: 4, caption: "Golden hour glow", img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=80" },
  { id: 5, caption: "From my mother", img: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&q=80" },
]

const testimonials = [
  { name: "Elena M.", text: "The quality is exceptional. I wear my huggies every day and they still look brand new.", rating: 5 },
  { name: "Sofia R.", text: "Bought the Flora necklace as a gift. She hasn't taken it off since. Beautiful packaging too.", rating: 5 },
  { name: "Aisha K.", text: "Finally found jewelry that doesn't irritate my skin. The gold tone is so rich and warm.", rating: 5 },
]

export default function Home() {
  const bestsellers = products.slice(0, 5)

  return (
    <div className="pt-20">
      {/* 1. Hero */}
      <section className="relative h-[92vh] min-h-[620px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#0D0D0D]">
          <img
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1600&q=85"
            alt="Velmora Fine Jewelry"
            className="absolute inset-0 w-full h-full object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="font-serif-display text-[#F7F4EF] text-6xl md:text-7xl tracking-[-0.02em] mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-[#F7F4EF]/90 text-lg md:text-xl mb-10 tracking-wide">
            Demi-fine gold jewelry, made for the moments that matter.
          </p>
          <Link to="/shop" className="btn btn-gold inline-block">
            Shop the Collection
          </Link>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#F7F4EF]/60 text-xs tracking-[0.2em] uppercase">
          Scroll to explore
        </div>
      </section>

      {/* 2. Trust Bar */}
      <div className="trust-bar border-b border-[#EDE8E0] py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-x-8 gap-y-2 text-center text-[#6B635C]">
          <span>Free Worldwide Shipping</span>
          <span className="hidden sm:inline text-[#EDE8E0]">·</span>
          <span>30-Day Returns</span>
          <span className="hidden sm:inline text-[#EDE8E0]">·</span>
          <span>18K Gold Plated</span>
          <span className="hidden sm:inline text-[#EDE8E0]">·</span>
          <span>Hypoallergenic</span>
        </div>
      </div>

      {/* 3. Bestsellers */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-xs tracking-[0.12em] uppercase text-[#6B635C]">Discover</span>
            <h2 className="serif-heading text-4xl mt-1">Bestsellers</h2>
          </div>
          <Link to="/shop" className="hidden sm:block text-sm tracking-[0.08em] uppercase hover:text-[#B89778]">
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-10">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link to="/shop" className="text-sm tracking-[0.08em] uppercase hover:text-[#B89778]">
            View All →
          </Link>
        </div>
      </section>

      {/* 4. UGC Reel Row */}
      <section className="bg-[#EDE8E0] py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <span className="text-xs tracking-[0.12em] uppercase text-[#6B635C]">As Seen On</span>
              <h3 className="serif-heading text-3xl mt-1">Real Moments</h3>
            </div>
            <a href="#instagram" className="hidden sm:block text-sm tracking-[0.08em] uppercase hover:text-[#B89778]">
              Follow @velmora
            </a>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {ugcItems.map((item) => (
              <div key={item.id} className="ugc-card flex-shrink-0 w-[160px] md:w-[180px] aspect-[9/16] bg-[#0D0D0D] snap-start">
                <img src={item.img} alt={item.caption} className="w-full h-full object-cover" />
                <div className="ugc-caption">{item.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Shop by Category */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <span className="text-xs tracking-[0.12em] uppercase text-[#6B635C]">Find Your Piece</span>
          <h2 className="serif-heading text-4xl mt-1">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: 'Earrings', slug: 'earrings', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80' },
            { label: 'Necklaces', slug: 'necklaces', img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80' },
            { label: 'Huggies', slug: 'huggies', img: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80' },
          ].map((cat) => (
            <Link key={cat.slug} to={`/shop?category=${cat.slug}`} className="category-tile group block aspect-[16/10] bg-[#0D0D0D] overflow-hidden">
              <img src={cat.img} alt={cat.label} className="w-full h-full object-cover" />
              <div className="category-label">{cat.label}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. Brand Story */}
      <section className="border-t border-[#EDE8E0]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2">
          <div className="aspect-[4/3] md:aspect-auto bg-[#EDE8E0]">
            <img
              src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1000&q=80"
              alt="Our atelier"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="px-8 md:px-12 py-14 md:py-16 flex flex-col justify-center">
            <span className="text-xs tracking-[0.12em] uppercase text-[#6B635C]">Since 2019</span>
            <h2 className="serif-heading text-4xl mt-2 mb-6">Our Story</h2>
            <div className="space-y-4 text-[#1A1A1A] leading-relaxed max-w-prose">
              <p>
                Velmora was born from a simple belief: that beautiful jewelry should be accessible without compromise.
              </p>
              <p>
                We work with skilled artisans to create demi-fine pieces in 18K gold plating — each one designed to be worn daily, passed down, and loved for years.
              </p>
            </div>
            <Link to="/about" className="mt-8 inline-block text-sm tracking-[0.08em] uppercase hover:text-[#B89778]">
              Read More →
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <span className="text-xs tracking-[0.12em] uppercase text-[#6B635C]">Kind Words</span>
          <h2 className="serif-heading text-4xl mt-1">From Our Community</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="border border-[#EDE8E0] p-8">
              <StarRating rating={t.rating} size={16} />
              <p className="mt-5 text-[#1A1A1A] leading-relaxed">"{t.text}"</p>
              <p className="mt-4 text-sm text-[#6B635C]">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Newsletter */}
      <section className="bg-[#0D0D0D] text-[#F7F4EF] py-14">
        <div className="max-w-md mx-auto px-6 text-center">
          <h3 className="serif-heading text-3xl mb-3">Join for 10% off your first order</h3>
          <p className="text-[#F7F4EF]/70 text-sm mb-6">Be the first to know about new arrivals and private events.</p>
          
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => { e.preventDefault(); alert('Thank you. Welcome to the circle.'); }}>
            <input
              type="email"
              placeholder="Your email address"
              className="newsletter-input flex-1 text-[#F7F4EF] placeholder:text-[#F7F4EF]/50 border-b-[#F7F4EF]/40"
              required
            />
            <button type="submit" className="btn btn-gold whitespace-nowrap">Subscribe</button>
          </form>
          <p className="text-[10px] text-[#F7F4EF]/50 mt-4 tracking-wide">We respect your inbox. Unsubscribe anytime.</p>
        </div>
      </section>
    </div>
  )
}
