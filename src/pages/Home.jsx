import React from 'react'
import { Link } from 'react-router-dom'
import { Star } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import ProductCard from '@/components/ui/ProductCard'
import Button from '@/components/ui/Button'
import { formatPrice } from '@/lib/utils'

const bestsellers = products.slice(0, 5)

const ugcItems = [
  { id: 1, caption: "My everyday staple", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=700&fit=crop" },
  { id: 2, caption: "Gifted to myself", img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=700&fit=crop" },
  { id: 3, caption: "Perfect for date night", img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=700&fit=crop" },
  { id: 4, caption: "My new favorite", img: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=700&fit=crop" },
  { id: 5, caption: "Worn every day", img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=700&fit=crop" },
]

const testimonials = [
  { name: "Elena M.", text: "The quality is exceptional. I wear my huggies every day and they still look brand new.", rating: 5 },
  { name: "Sofia R.", text: "Bought the Royal Heirloom Set as a gift for my sister. She cried. Worth every penny.", rating: 5 },
  { name: "Aisha K.", text: "Finally found jewelry that doesn't irritate my sensitive skin. The gold is so warm and beautiful.", rating: 5 },
]

export default function Home() {
  const { addToCart } = useCart()

  const handleQuickAdd = (product, variant) => {
    addToCart(product, variant, 1)
  }

  return (
    <div className="pt-20">
      {/* 1. HERO */}
      <section className="relative h-[100dvh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#0A0806]">
          <img 
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=2000&h=1200&fit=crop" 
            alt="Velmora Fine Jewelry" 
            className="absolute inset-0 w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="font-serif text-5xl md:text-7xl text-white tracking-[2px] mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-10 tracking-wide">
            Demi-fine gold jewelry for the moments that matter.
          </p>
          <Link to="/shop">
            <Button size="lg" className="tracking-[2px]">
              SHOP THE COLLECTION
            </Button>
          </Link>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-px h-12 bg-white/40" />
        </div>
      </section>

      {/* 2. TRUST BAR */}
      <div className="trust-bar border-b border-[#E5DFD3] py-4 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-x-8 gap-y-2 text-center text-[#5C5346]">
          <span>Free Worldwide Shipping</span>
          <span className="hidden md:inline text-[#C5A46E]">·</span>
          <span>30-Day Returns</span>
          <span className="hidden md:inline text-[#C5A46E]">·</span>
          <span>18K Gold Plated</span>
          <span className="hidden md:inline text-[#C5A46E]">·</span>
          <span>Hypoallergenic</span>
        </div>
      </div>

      {/* 3. BESTSELLERS */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs tracking-[2px] text-[#C5A46E] mb-2">DISCOVER</p>
            <h2 className="font-serif text-4xl tracking-wide">Bestsellers</h2>
          </div>
          <Link to="/shop" className="hidden md:block text-sm tracking-[1px] text-[#C5A46E] hover:text-[#B08F5A] transition-colors">
            VIEW ALL →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-12">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} onQuickAdd={handleQuickAdd} />
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Link to="/shop" className="text-sm tracking-[1px] text-[#C5A46E]">VIEW ALL →</Link>
        </div>
      </section>

      {/* 4. UGC REEL-STYLE ROW */}
      <section className="bg-[#0A0806] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-xs tracking-[2px] text-[#C5A46E] mb-2">AS SEEN ON</p>
              <h2 className="font-serif text-3xl text-white tracking-wide">Real Moments</h2>
            </div>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {ugcItems.map((item) => (
              <div key={item.id} className="ugc-card flex-shrink-0 w-[180px] md:w-[200px] aspect-[9/16] rounded overflow-hidden snap-start">
                <img src={item.img} alt={item.caption} className="w-full h-full object-cover" />
                <div className="caption">
                  {item.caption}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SHOP BY CATEGORY */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[2px] text-[#C5A46E] mb-2">EXPLORE</p>
          <h2 className="font-serif text-4xl tracking-wide">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: "Earrings", href: "/shop?category=Earrings", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=600&fit=crop" },
            { label: "Necklaces", href: "/shop?category=Necklaces", img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=600&fit=crop" },
            { label: "Huggies", href: "/shop?category=Huggies", img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&h=600&fit=crop" },
          ].map((cat) => (
            <Link key={cat.label} to={cat.href} className="category-tile group block aspect-[4/3] overflow-hidden rounded">
              <img src={cat.img} alt={cat.label} className="w-full h-full object-cover editorial-img" />
              <div className="label">
                <span className="font-serif text-3xl text-white tracking-wide">{cat.label}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. BRAND STORY */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2">
          <div className="aspect-[4/3] md:aspect-auto overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?w=1200&h=900&fit=crop" 
              alt="Our Story" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center px-8 md:px-16 py-16 md:py-0">
            <div className="max-w-md">
              <p className="text-xs tracking-[2px] text-[#C5A46E] mb-3">EST. 2018</p>
              <h2 className="font-serif text-4xl tracking-wide mb-6">Our Story</h2>
              <p className="text-[#5C5346] leading-relaxed mb-8">
                Velmora was born from a simple belief: that beautiful jewelry should be accessible, 
                not extravagant. We craft demi-fine pieces in 18K gold plate—timeless enough to 
                treasure, light enough to wear every day.
              </p>
              <Link to="/about" className="inline-block text-sm tracking-[1.5px] text-[#C5A46E] hover:text-[#B08F5A] border-b border-[#C5A46E] pb-0.5">
                READ OUR STORY →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <p className="text-xs tracking-[2px] text-[#C5A46E] mb-2">LOVED BY MANY</p>
        <h2 className="font-serif text-4xl tracking-wide mb-14">What Our Customers Say</h2>

        <div className="grid md:grid-cols-3 gap-10 text-left">
          {testimonials.map((t, i) => (
            <div key={i} className="space-y-4">
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 star fill-current" />
                ))}
              </div>
              <p className="text-[#5C5346] leading-relaxed">"{t.text}"</p>
              <p className="text-sm tracking-wide text-[#0A0806]">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. NEWSLETTER */}
      <section className="bg-[#C5A46E] py-16">
        <div className="max-w-md mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl text-[#0A0806] tracking-wide mb-3">Join for 10% off</h2>
          <p className="text-[#0A0806]/70 mb-8 text-sm">Be the first to know about new arrivals and exclusive offers.</p>
          
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="newsletter-input flex-1 text-[#0A0806] placeholder:text-[#0A0806]/50 border-[#0A0806]/30 focus:border-[#0A0806]"
            />
            <Button variant="outline" className="border-[#0A0806] text-[#0A0806] hover:bg-[#0A0806] hover:text-white whitespace-nowrap">
              SUBSCRIBE
            </Button>
          </form>
          <p className="text-[10px] text-[#0A0806]/50 mt-4 tracking-wide">We respect your inbox. Unsubscribe anytime.</p>
        </div>
      </section>
    </div>
  )
}
