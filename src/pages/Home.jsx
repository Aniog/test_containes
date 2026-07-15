import React from 'react'
import { Link } from 'react-router-dom'
import { Star } from 'lucide-react'
import ProductCard from '@/components/ui/ProductCard'
import Button from '@/components/ui/Button'
import StarRating from '@/components/ui/StarRating'
import { products } from '@/data/products'

export default function Home() {
  const bestsellers = products.slice(0, 5)
  
  const ugcItems = [
    { id: 1, caption: "My everyday staple", img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80" },
    { id: 2, caption: "Gifted to myself", img: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&q=80" },
    { id: 3, caption: "Wedding day details", img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&q=80" },
    { id: 4, caption: "Golden hour glow", img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=80" },
    { id: 5, caption: "Timeless elegance", img: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&q=80" },
  ]

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. I wear my huggies every day and they still look brand new.", rating: 5 },
    { name: "Sofia R.", text: "Bought the heirloom set for my sister. She cried. Best gift I've ever given.", rating: 5 },
    { name: "Aisha K.", text: "Finally found jewelry that doesn't irritate my skin. The gold is so warm and beautiful.", rating: 5 },
  ]

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[100dvh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#1A1816]">
          <img 
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=2000&q=90" 
            alt="Velmora Fine Jewelry"
            className="absolute inset-0 w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="font-serif text-5xl md:text-7xl tracking-[2px] text-white mb-6">
            Crafted to be<br />Treasured
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-10 tracking-wide">
            Demi-fine gold jewelry for the woman who values quiet luxury.
          </p>
          <Link to="/shop">
            <Button size="lg" className="bg-white text-[#1A1816] hover:bg-[#F5F2ED] hover:text-[#1A1816]">
              SHOP THE COLLECTION
            </Button>
          </Link>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-px h-12 bg-white/40" />
        </div>
      </section>

      {/* Trust Bar */}
      <div className="border-b border-[#E5E0D8] py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs tracking-[2px] text-[#8B8178]">
            <span>FREE WORLDWIDE SHIPPING</span>
            <span className="hidden sm:inline">·</span>
            <span>30-DAY RETURNS</span>
            <span className="hidden sm:inline">·</span>
            <span>18K GOLD PLATED</span>
            <span className="hidden sm:inline">·</span>
            <span>HYPOALLERGENIC</span>
          </div>
        </div>
      </div>

      {/* Bestsellers */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-xs tracking-[3px] text-[#A67C52]">DISCOVER</span>
            <h2 className="font-serif text-4xl tracking-wide mt-1">Bestsellers</h2>
          </div>
          <Link to="/shop" className="hidden md:block text-sm tracking-[1.5px] text-[#A67C52] hover:text-[#8B6643] transition-colors">
            VIEW ALL →
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-12">
          {bestsellers.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-10 md:hidden">
          <Link to="/shop" className="text-sm tracking-[1.5px] text-[#A67C52]">VIEW ALL →</Link>
        </div>
      </section>

      {/* UGC Reel-style Row */}
      <section className="bg-[#1A1816] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-8">
            <div>
              <span className="text-xs tracking-[3px] text-[#A67C52]">AS SEEN ON</span>
              <h2 className="font-serif text-3xl text-white tracking-wide mt-1">Worn by You</h2>
            </div>
          </div>
          
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {ugcItems.map((item, idx) => (
              <div key={idx} className="relative flex-shrink-0 w-[160px] md:w-[180px] snap-start">
                <div className="aspect-[9/16] bg-[#2A2724] overflow-hidden rounded-sm">
                  <img 
                    src={item.img} 
                    alt={item.caption}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="absolute bottom-4 left-4 right-4 font-serif text-white text-sm tracking-wide drop-shadow-lg">
                  {item.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <span className="text-xs tracking-[3px] text-[#A67C52]">EXPLORE</span>
          <h2 className="font-serif text-4xl tracking-wide mt-1">Shop by Category</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { name: "Earrings", slug: "Earrings", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80" },
            { name: "Necklaces", slug: "Necklaces", img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80" },
            { name: "Huggies", slug: "Huggies", img: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80" },
          ].map((cat, idx) => (
            <Link 
              key={idx} 
              to={`/shop?category=${cat.slug}`}
              className="group relative aspect-[16/10] overflow-hidden bg-[#E5E0D8]"
            >
              <img 
                src={cat.img} 
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-3xl text-white tracking-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {cat.name}
                </span>
              </div>
              <div className="absolute bottom-6 left-6">
                <span className="text-white text-sm tracking-[2px] border-b border-white/50 pb-0.5 group-hover:border-white transition-colors">
                  SHOP NOW
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2">
          <div className="aspect-[4/3] md:aspect-auto bg-[#E5E0D8]">
            <img 
              src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1200&q=80" 
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="px-8 md:px-16 py-16 md:py-20 flex flex-col justify-center">
            <span className="text-xs tracking-[3px] text-[#A67C52]">SINCE 2018</span>
            <h2 className="font-serif text-4xl tracking-wide mt-3 mb-6">Our Story</h2>
            <div className="space-y-4 text-[#4A4640] leading-relaxed max-w-md">
              <p>
                Velmora was born from a simple belief: that beautiful jewelry should be accessible, 
                not extravagant. We design demi-fine pieces that feel like heirlooms—meant to be worn, 
                loved, and passed down.
              </p>
              <p>
                Each piece is crafted with 18K gold plating over hypoallergenic brass, 
                set with carefully selected crystals. Timeless silhouettes. Thoughtful details.
              </p>
            </div>
            <Link to="/about" className="mt-8 inline-block text-sm tracking-[1.5px] text-[#A67C52] hover:text-[#8B6643]">
              READ MORE ABOUT US →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <span className="text-xs tracking-[3px] text-[#A67C52]">LOVED BY MANY</span>
          <h2 className="font-serif text-4xl tracking-wide mt-1">What Our Customers Say</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="text-center">
              <div className="flex justify-center mb-4">
                <StarRating rating={t.rating} size={16} />
              </div>
              <p className="text-[#4A4640] italic leading-relaxed mb-4">"{t.text}"</p>
              <p className="text-sm tracking-wide text-[#8B8178]">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-[#1A1816] py-16">
        <div className="max-w-md mx-auto px-6 text-center">
          <h3 className="font-serif text-3xl text-white tracking-wide mb-3">Join for 10% off</h3>
          <p className="text-[#C5B8A8] text-sm mb-8">Be the first to know about new arrivals, stories, and special offers.</p>
          
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing!'); }}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 bg-transparent border border-[#C5B8A8]/40 text-white placeholder:text-[#C5B8A8]/60 px-5 py-3 text-sm focus:outline-none focus:border-[#A67C52]"
              required
            />
            <Button type="submit" variant="outline" className="border-white text-white hover:bg-white hover:text-[#1A1816]">
              SUBSCRIBE
            </Button>
          </form>
          <p className="text-[10px] text-[#C5B8A8]/60 mt-4 tracking-wide">We respect your inbox. Unsubscribe anytime.</p>
        </div>
      </section>
    </div>
  )
}
