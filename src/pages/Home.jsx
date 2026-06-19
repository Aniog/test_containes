import React from 'react'
import { Link } from 'react-router-dom'
import { Star } from 'lucide-react'
import { products } from '../App'
import { useCart } from '../App'

const Home = () => {
  const { addToCart } = useCart()
  
  const bestsellers = products.slice(0, 5)
  
  const ugcItems = [
    { id: 1, caption: "My everyday staple", image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80" },
    { id: 2, caption: "Perfect for date night", image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400&q=80" },
    { id: 3, caption: "Gifted to myself", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80" },
    { id: 4, caption: "Obsessed with these", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80" },
    { id: 5, caption: "Wedding day jewels", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce45e?w=400&q=80" },
  ]

  const testimonials = [
    { name: "Sarah M.", text: "The quality is exceptional. These pieces feel so much more expensive than they are.", rating: 5 },
    { name: "Elena R.", text: "I wear my huggies every single day. They never tarnish and always get compliments.", rating: 5 },
    { name: "Maya K.", text: "Bought the Royal Heirloom Set as a gift. My sister hasn't taken it off since.", rating: 5 },
  ]

  return (
    <div className="pt-20">
      {/* 1. Hero */}
      <section className="relative h-[90vh] flex items-center justify-center bg-[#1C1A18] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce45e?w=2000&q=80')] bg-cover bg-center opacity-70" />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-[72px] md:text-[88px] leading-[0.95] text-white tracking-[-1px] mb-6 serif">
            Crafted to be<br />Treasured
          </h1>
          <p className="text-white/80 text-lg mb-10 max-w-md mx-auto">
            Demi-fine jewelry for the modern woman who values quiet luxury.
          </p>
          <Link to="/shop" className="btn btn-primary inline-block">
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* 2. Trust Bar */}
      <div className="trust-bar py-4 border-b border-[#E5E0D8] bg-white">
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

      {/* 3. Bestsellers */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="text-xs tracking-[0.15em] text-[#6B6560]">DISCOVER</div>
            <h2 className="text-4xl serif mt-1">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm tracking-[0.1em] hover:text-[#B89B6E] hidden md:block">
            View All →
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {bestsellers.map(product => (
            <div key={product.id} className="product-card group">
              <Link to={`/product/${product.id}`} className="block relative aspect-[4/3] bg-[#F5F2ED] overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <img 
                  src={product.imageSecondary} 
                  alt={product.name}
                  className="secondary absolute inset-0 w-full h-full object-cover"
                />
                <button 
                  onClick={(e) => {
                    e.preventDefault()
                    addToCart(product)
                  }}
                  className="quick-add btn btn-gold text-xs py-2 px-6"
                >
                  Quick Add
                </button>
              </Link>
              <div className="pt-4 pb-2">
                <Link to={`/product/${product.id}`}>
                  <div className="product-name text-sm tracking-wider mb-1">{product.name}</div>
                </Link>
                <div className="flex justify-between items-center">
                  <span className="text-sm">${product.price}</span>
                  <div className="flex items-center gap-1 text-xs text-[#6B6560]">
                    <Star size={12} className="fill-[#B89B6E] text-[#B89B6E]" />
                    {product.rating}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. UGC Reel */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <div className="text-xs tracking-[0.15em] text-[#6B6560]">AS SEEN ON</div>
            <h3 className="text-3xl serif mt-2">Real Moments, Real Jewelry</h3>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {ugcItems.map(item => (
              <div key={item.id} className="ugc-card w-[180px] md:w-[200px] aspect-[9/16] bg-[#1C1A18] snap-start">
                <img src={item.image} alt="" className="w-full h-full object-cover" />
                <div className="ugc-caption">
                  <p className="text-sm italic serif">"{item.caption}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Shop by Category */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <div className="text-xs tracking-[0.15em] text-[#6B6560]">EXPLORE</div>
          <h2 className="text-4xl serif mt-2">Shop by Category</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { name: "Earrings", path: "/shop?category=Earrings", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80" },
            { name: "Necklaces", path: "/shop?category=Necklaces", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80" },
            { name: "Huggies", path: "/shop?category=Huggies", image: "https://images.unsplash.com/photo-1535632787350-7423ebd33c1f?w=800&q=80" },
          ].map(cat => (
            <Link key={cat.name} to={cat.path} className="category-tile aspect-[16/10] overflow-hidden bg-[#1C1A18]">
              <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
              <div className="overlay" />
              <div className="label serif tracking-[0.15em]">{cat.name}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. Brand Story */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2">
          <div className="aspect-[4/3] md:aspect-auto bg-[url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce45e?w=1200&q=80')] bg-cover bg-center" />
          <div className="px-8 md:px-16 py-16 md:py-20 flex flex-col justify-center">
            <div className="max-w-md">
              <div className="text-xs tracking-[0.15em] text-[#6B6560]">EST. 2019</div>
              <h2 className="text-5xl serif mt-4 mb-6 leading-none">Our Story</h2>
              <p className="text-[#6B6560] mb-8">
                Born from a desire to make fine jewelry accessible, Velmora creates pieces that feel special without the precious metal price tag. Each design is crafted with intention, using only the finest materials.
              </p>
              <Link to="/about" className="btn btn-outline inline-block">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <div className="text-xs tracking-[0.15em] text-[#6B6560] mb-3">LOVED BY MANY</div>
        <h2 className="text-4xl serif mb-14">What Our Customers Say</h2>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          {testimonials.map((t, i) => (
            <div key={i} className="border-l-2 border-[#B89B6E] pl-6">
              <div className="stars flex mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} size={16} className="fill-[#B89B6E] text-[#B89B6E]" />
                ))}
              </div>
              <p className="text-[#2C2825] mb-4 italic">"{t.text}"</p>
              <div className="text-sm text-[#6B6560]">— {t.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Newsletter */}
      <section className="newsletter py-20">
        <div className="max-w-md mx-auto px-6 text-center">
          <div className="text-xs tracking-[0.15em] text-[#B89B6E] mb-3">THE INNER CIRCLE</div>
          <h3 className="text-4xl serif text-white mb-4">Join for 10% off<br />your first order</h3>
          <p className="text-white/60 text-sm mb-8">Be the first to know about new arrivals and exclusive offers.</p>
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="input flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/40"
            />
            <button type="submit" className="btn btn-primary">Join</button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Home