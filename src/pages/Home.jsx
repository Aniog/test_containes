import React from 'react'
import { Link } from 'react-router-dom'
import { Star } from 'lucide-react'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'

const Home = () => {
  const bestsellers = products.slice(0, 5)
  
  const ugcItems = [
    { id: 1, caption: "Morning light", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80" },
    { id: 2, caption: "Golden hour", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80" },
    { id: 3, caption: "Effortless elegance", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" },
    { id: 4, caption: "Timeless beauty", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&q=80" },
    { id: 5, caption: "Everyday luxury", image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&q=80" },
  ]

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. I've worn my huggies every day for months and they still look brand new.", rating: 5 },
    { name: "Sophia R.", text: "Bought the necklace set as a gift for my sister. She absolutely loved it. Beautiful packaging too.", rating: 5 },
    { name: "Isabella T.", text: "Finally found jewelry that doesn't irritate my sensitive skin. The gold tone is so rich and elegant.", rating: 5 },
  ]

  return (
    <div>
      {/* 1. Sticky Nav - handled in Layout */}

      {/* 2. Full-bleed Hero */}
      <section className="relative h-[100dvh] min-h-[700px] flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-[#1C1A17]">
          <img 
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce45e?w=2000&q=90" 
            alt="Velmora Fine Jewelry"
            className="w-full h-full object-cover opacity-75"
          />
        </div>
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="serif text-6xl md:text-7xl text-white tracking-[0.08em] mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-white/90 text-lg mb-10 tracking-wide">
            Demi-fine jewelry for the modern woman who values quiet luxury.
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
        <div className="max-w-[1400px] mx-auto px-6 flex flex-wrap justify-center gap-x-8 gap-y-2 text-center text-[#2C2823]">
          <span>Free Worldwide Shipping</span>
          <span className="hidden md:inline text-[#E5DFD3]">·</span>
          <span>30-Day Returns</span>
          <span className="hidden md:inline text-[#E5DFD3]">·</span>
          <span>18K Gold Plated</span>
          <span className="hidden md:inline text-[#E5DFD3]">·</span>
          <span>Hypoallergenic</span>
        </div>
      </div>

      {/* 4. Bestsellers */}
      <section className="max-w-[1400px] mx-auto px-6 pt-20 pb-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="text-xs tracking-[0.2em] text-[#8B7355] mb-2">DISCOVER</div>
            <h2 className="serif text-4xl tracking-[0.05em]">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm tracking-[0.1em] hover:text-[#8B7355] hidden md:block">
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
      <section className="bg-[#1C1A17] py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-10">
            <div className="text-xs tracking-[0.2em] text-[#C5A26F] mb-2">AS SEEN ON</div>
            <h2 className="serif text-3xl text-white tracking-[0.05em]">Worn by You</h2>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {ugcItems.map(item => (
              <div key={item.id} className="ugc-card flex-shrink-0 w-[220px] aspect-[9/16] bg-[#2C2823] snap-start">
                <img src={item.image} alt={item.caption} className="w-full h-full object-cover" />
                <div className="ugc-caption">{item.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Shop by Category */}
      <section className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <div className="text-xs tracking-[0.2em] text-[#8B7355] mb-2">EXPLORE</div>
          <h2 className="serif text-4xl tracking-[0.05em]">Shop by Category</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: 'Earrings', path: '/shop?category=Earrings', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80' },
            { name: 'Necklaces', path: '/shop?category=Necklaces', img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80' },
            { name: 'Huggies', path: '/shop?category=Huggies', img: 'https://images.unsplash.com/photo-1535632787350-4e68b0cfdbac?w=800&q=80' },
          ].map(cat => (
            <Link key={cat.name} to={cat.path} className="category-tile group aspect-[4/3] overflow-hidden bg-[#1C1A17]">
              <img src={cat.img} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="category-label">{cat.name}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* 7. Brand Story */}
      <section className="bg-white">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2">
          <div className="aspect-[4/3] md:aspect-auto bg-[#1C1A17]">
            <img 
              src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1200&q=80" 
              alt="Our Craft" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center px-8 md:px-16 py-16 md:py-0">
            <div className="max-w-md">
              <div className="text-xs tracking-[0.2em] text-[#8B7355] mb-3">EST. 2018</div>
              <h2 className="serif text-4xl tracking-[0.03em] mb-6">Our Story</h2>
              <p className="text-[#2C2823]/80 leading-relaxed mb-8">
                Velmora was born from a desire to create jewelry that feels both precious and wearable. 
                Each piece is thoughtfully designed in our studio and crafted with the finest materials, 
                ensuring beauty that lasts a lifetime.
              </p>
              <Link to="/about" className="btn btn-outline inline-block">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Testimonials */}
      <section className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <div className="text-xs tracking-[0.2em] text-[#8B7355] mb-2">LOVED BY MANY</div>
          <h2 className="serif text-4xl tracking-[0.05em]">What Our Clients Say</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="text-center px-4">
              <div className="stars flex justify-center gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
              </div>
              <p className="text-[#2C2823]/80 italic mb-4">"{t.text}"</p>
              <p className="text-sm tracking-[0.1em]">{t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Newsletter */}
      <section className="bg-[#8B7355] py-16">
        <div className="max-w-md mx-auto px-6 text-center">
          <div className="text-white text-xs tracking-[0.2em] mb-3">MEMBERS ONLY</div>
          <h2 className="serif text-3xl text-white tracking-[0.05em] mb-3">Join for 10% off</h2>
          <p className="text-white/80 text-sm mb-8">Be the first to know about new arrivals and exclusive offers.</p>
          <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="newsletter-input text-white placeholder:text-white/50 w-full"
            />
            <button type="submit" className="btn bg-white text-[#8B7355] hover:bg-[#F8F5F1] w-full">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Home
