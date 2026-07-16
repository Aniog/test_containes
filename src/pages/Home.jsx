import React from 'react'
import { Link } from 'react-router-dom'
import { Star } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

const Home = () => {
  // Use first 5 products as bestsellers
  const bestsellers = products.slice(0, 5)

  const ugcItems = [
    { id: 1, caption: "Morning light", img: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400&q=80" },
    { id: 2, caption: "Golden hour", img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&q=80" },
    { id: 3, caption: "Effortless", img: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&q=80" },
    { id: 4, caption: "Everyday luxury", img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=80" },
    { id: 5, caption: "Soft glow", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80" },
  ]

  const categories = [
    { name: "Earrings", slug: "Earrings", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80" },
    { name: "Necklaces", slug: "Necklaces", img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80" },
    { name: "Huggies", slug: "Huggies", img: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80" },
  ]

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. I've worn my huggies every day for months and they still look brand new." },
    { name: "Sofia R.", text: "Bought the Flora Nectar for my sister's birthday. She hasn't taken it off since. Beautiful packaging too." },
    { name: "Aisha K.", text: "Finally found jewelry that doesn't irritate my skin. The gold tone is so rich and warm. Will be back for more." },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[100dvh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#1A1816]">
          <img 
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=2000&q=90" 
            alt="Velmora Fine Jewelry - Woman wearing elegant gold necklace"
            className="absolute inset-0 w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="font-serif text-5xl md:text-7xl text-white tracking-[-0.02em] mb-6">
            Crafted to be<br />Treasured
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-10 max-w-md mx-auto">
            Demi-fine gold jewelry for the modern woman. Timeless pieces, thoughtfully made.
          </p>
          <Link to="/shop" className="btn btn-primary inline-block">
            Shop the Collection
          </Link>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block">
          <div className="w-px h-12 bg-white/50" />
        </div>
      </section>

      {/* Trust Bar */}
      <div className="trust-bar border-b border-[#EDE8E0] py-4">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-wrap justify-center md:justify-between gap-x-8 gap-y-2 text-center">
            <span>Free Worldwide Shipping</span>
            <span>30-Day Returns</span>
            <span>18K Gold Plated</span>
            <span>Hypoallergenic</span>
          </div>
        </div>
      </div>

      {/* Bestsellers */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-xs tracking-[0.15em] text-[#C5A46E]">DISCOVER</span>
            <h2 className="font-serif text-4xl mt-1">Bestsellers</h2>
          </div>
          <Link to="/shop" className="hidden md:block text-sm tracking-widest hover:text-[#C5A46E]">VIEW ALL →</Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Link to="/shop" className="text-sm tracking-widest">VIEW ALL →</Link>
        </div>
      </section>

      {/* UGC Reel Row */}
      <section className="bg-[#F5F1E9] py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-8">
            <span className="text-xs tracking-[0.15em] text-[#C5A46E]">AS SEEN ON</span>
            <h3 className="font-serif text-3xl mt-1">Real Moments</h3>
          </div>
          
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {ugcItems.map((item) => (
              <div key={item.id} className="ugc-card snap-start">
                <img src={item.img} alt={item.caption} />
                <div className="ugc-caption">{item.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-20">
        <div className="text-center mb-12">
          <span className="text-xs tracking-[0.15em] text-[#C5A46E]">EXPLORE</span>
          <h2 className="font-serif text-4xl mt-1">Shop by Category</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link 
              key={cat.slug} 
              to={`/shop?category=${cat.slug}`}
              className="category-tile group"
            >
              <img src={cat.img} alt={cat.name} />
              <div className="category-tile-label">
                {cat.name}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="bg-[#F5F1E9]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2">
          <div className="aspect-[4/3] md:aspect-auto overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1200&q=80" 
              alt="Velmora atelier - hands crafting delicate gold jewelry"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center p-10 md:p-16 lg:p-20">
            <div>
              <span className="text-xs tracking-[0.15em] text-[#C5A46E]">OUR PHILOSOPHY</span>
              <h2 className="font-serif text-4xl mt-3 mb-6">Jewelry that feels like you.</h2>
              <p className="body-text text-[#5C5349] mb-8 max-w-md">
                Velmora was born from a simple belief: beautiful jewelry shouldn't be reserved for special occasions. 
                We design pieces that become part of your daily ritual—quietly luxurious, effortlessly wearable.
              </p>
              <Link to="/about" className="btn btn-gold-outline inline-block">
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-20">
        <div className="text-center mb-12">
          <span className="text-xs tracking-[0.15em] text-[#C5A46E]">LOVED BY MANY</span>
          <h2 className="font-serif text-4xl mt-1">What Our Customers Say</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial">
              <div className="stars mb-4">★★★★★</div>
              <p className="body-text text-[#5C5349] mb-6">"{t.text}"</p>
              <p className="text-sm tracking-widest">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter-block py-16">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h3 className="font-serif text-3xl mb-3">Join for 10% off your first order</h3>
          <p className="text-[#FAF7F2]/70 mb-8 text-sm">Be the first to know about new arrivals, private sales, and styling stories.</p>
          
          <form 
            onSubmit={(e) => { 
              e.preventDefault(); 
              alert("Thank you! You've been added to our list. (Demo)"); 
              e.target.reset();
            }} 
            className="flex flex-col sm:flex-row gap-3"
          >
            <input 
              type="email" 
              placeholder="Your email address" 
              required
              className="flex-1 px-5 py-3.5 text-sm focus:outline-none focus:border-[#C5A46E]"
            />
            <button type="submit" className="btn btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>
          <p className="text-[10px] text-[#FAF7F2]/50 mt-4">We respect your inbox. Unsubscribe anytime.</p>
        </div>
      </section>
    </div>
  )
}

export default Home
