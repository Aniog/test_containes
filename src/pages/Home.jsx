import React from 'react'
import { Link } from 'react-router-dom'
import { Star } from 'lucide-react'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'

const Home = () => {
  const { addToCart } = useCart()
  const bestsellers = products.slice(0, 5)

  const ugcItems = [
    { id: 1, caption: "Morning light", image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=400&q=80" },
    { id: 2, caption: "Golden hour", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80" },
    { id: 3, caption: "Effortless elegance", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" },
    { id: 4, caption: "Everyday luxury", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&q=80" },
    { id: 5, caption: "Timeless beauty", image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&q=80" }
  ]

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. I've worn my huggies every day for months and they still look brand new.", rating: 5 },
    { name: "Sophia K.", text: "Bought the Royal Heirloom Set as a gift. The packaging alone made it feel so special.", rating: 5 },
    { name: "Isabella R.", text: "Finally found jewelry that doesn't irritate my sensitive skin. The gold tone is beautiful.", rating: 5 }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[100dvh] min-h-[700px] flex items-center justify-center bg-[#2C2823] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=2000&q=80')] bg-cover bg-center opacity-90" />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="font-serif text-6xl md:text-7xl text-white tracking-[0.05em] mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-10 max-w-md mx-auto">
            Demi-fine gold jewelry for the modern woman who values quiet luxury.
          </p>
          <Link to="/shop" className="btn btn-primary inline-block">
            Shop the Collection
          </Link>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-xs tracking-[0.2em]">
          SCROLL TO EXPLORE
        </div>
      </section>

      {/* Trust Bar */}
      <div className="border-b border-[#E5DFD3] py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs tracking-[0.15em] text-[#6B665F] text-center">
            <span>Free Worldwide Shipping</span>
            <span className="hidden md:inline">·</span>
            <span>30-Day Returns</span>
            <span className="hidden md:inline">·</span>
            <span>18K Gold Plated</span>
            <span className="hidden md:inline">·</span>
            <span>Hypoallergenic</span>
          </div>
        </div>
      </div>

      {/* Bestsellers */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="text-xs tracking-[0.2em] text-[#B8976D] mb-2">DISCOVER</div>
            <h2 className="font-serif text-4xl">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm tracking-[0.1em] hover:text-[#B8976D] hidden md:block">
            VIEW ALL →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map(product => (
            <div key={product.id} className="product-card group">
              <Link to={`/product/${product.id}`} className="block">
                <div className="product-image-container">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image primary"
                  />
                  <img
                    src={product.imageAlt}
                    alt={product.name}
                    className="product-image secondary"
                  />
                </div>
              </Link>
              <div className="p-4">
                <Link to={`/product/${product.id}`}>
                  <div className="product-name text-sm tracking-[0.1em] mb-1 pr-8">{product.name}</div>
                </Link>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#6B665F]">${product.price}</span>
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      addToCart(product)
                    }}
                    className="quick-add btn btn-gold text-xs py-2 px-5"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Link to="/shop" className="text-sm tracking-[0.1em] hover:text-[#B8976D]">
            VIEW ALL →
          </Link>
        </div>
      </section>

      {/* UGC Reel */}
      <section className="bg-[#F5F1EA] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <div className="text-xs tracking-[0.2em] text-[#B8976D] mb-2">AS SEEN ON YOU</div>
            <h2 className="font-serif text-4xl">Moments in Gold</h2>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
            {ugcItems.map(item => (
              <div key={item.id} className="ugc-card snap-start">
                <img src={item.image} alt={item.caption} />
                <div className="ugc-caption">{item.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <div className="text-xs tracking-[0.2em] text-[#B8976D] mb-2">EXPLORE</div>
          <h2 className="font-serif text-4xl">Shop by Category</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {[
            { name: "Earrings", path: "/shop?category=Earrings", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80" },
            { name: "Necklaces", path: "/shop?category=Necklaces", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80" },
            { name: "Huggies", path: "/shop?category=Huggies", image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80" }
          ].map(cat => (
            <Link key={cat.name} to={cat.path} className="category-tile group">
              <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
              <div className="category-overlay">
                <span className="font-serif text-2xl text-white tracking-[0.1em]">{cat.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/3] bg-[#F5F1EA]">
            <img
              src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1000&q=80"
              alt="Velmora atelier"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-w-lg">
            <div className="text-xs tracking-[0.2em] text-[#B8976D] mb-3">EST. 2019</div>
            <h2 className="font-serif text-4xl mb-6">Our Story</h2>
            <div className="space-y-4 text-[#6B665F] leading-relaxed">
              <p>
                Velmora was born from a simple belief: that beautiful, well-crafted jewelry should be accessible without compromise.
              </p>
              <p>
                Each piece is thoughtfully designed in our New York studio and hand-finished by artisans who share our commitment to quality and detail.
              </p>
            </div>
            <Link to="/about" className="btn btn-outline mt-8 inline-block">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-16 border-y border-[#E5DFD3]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-xs tracking-[0.2em] text-[#B8976D] mb-2">LOVED BY MANY</div>
            <h2 className="font-serif text-4xl">What Our Customers Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={14} fill="#B8976D" className="text-[#B8976D]" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-4">"{t.text}"</p>
                <div className="text-xs tracking-[0.1em] text-[#6B665F]">— {t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter py-20">
        <div className="max-w-md mx-auto px-6 text-center">
          <div className="font-serif text-3xl mb-3 tracking-[0.05em]">Join the Circle</div>
          <p className="text-white/70 mb-8">Be the first to know about new arrivals and receive 10% off your first order.</p>
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email address"
              className="input flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/50"
              required
            />
            <button type="submit" className="btn btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>
          <p className="text-[10px] text-white/50 mt-4 tracking-[0.1em]">We respect your inbox. Unsubscribe anytime.</p>
        </div>
      </section>
    </div>
  )
}

export default Home