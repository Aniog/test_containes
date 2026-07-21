import React from 'react'
import { Link } from 'react-router-dom'
import { Star } from 'lucide-react'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'

const Home = () => {
  const { addToCart } = useCart()
  const bestsellers = products.slice(0, 5)

  const ugcItems = [
    { id: 1, caption: "Morning light", img: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=400&q=80" },
    { id: 2, caption: "Golden hour", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80" },
    { id: 3, caption: "Effortless", img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&q=80" },
    { id: 4, caption: "Timeless", img: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&q=80" },
    { id: 5, caption: "Everyday", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" },
  ]

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. My huggies have become my daily signature." },
    { name: "Sofia R.", text: "Beautiful packaging and even more beautiful jewelry. A gift that felt truly special." },
    { name: "Isabella T.", text: "Finally found pieces that feel luxurious without being loud. Exactly what I wanted." },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-[#F0EBE3] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce45e?w=2000&q=80"
            alt="Velmora Fine Jewelry"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/25" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="serif text-6xl md:text-7xl text-white tracking-[0.1em] mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-white/90 text-lg mb-10 tracking-wide">
            Demi-fine gold jewelry for the modern woman who values quiet luxury.
          </p>
          <Link to="/shop" className="btn btn-gold inline-block">
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="trust-bar bg-white py-4 border-b border-[#E5DFD6]">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-x-10 gap-y-2 text-center text-[#6B635E]">
          <span>Free Worldwide Shipping</span>
          <span>30-Day Returns</span>
          <span>18K Gold Plated</span>
          <span>Hypoallergenic</span>
        </div>
      </div>

      {/* Bestsellers */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="uppercase tracking-[0.2em] text-xs text-[#8B7355]">Signature Pieces</p>
            <h2 className="serif text-4xl mt-2">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm tracking-widest hover:text-[#8B7355] hidden md:block">
            VIEW ALL →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bestsellers.map((product) => (
            <div key={product.id} className="product-card group">
              <Link to={`/product/${product.id}`} className="block">
                <div className="product-card-image bg-[#F0EBE3]">
                  <img src={product.images[0]} alt={product.name} className="primary-image" />
                  <img src={product.images[1]} alt={product.name} className="secondary-image" />
                </div>
              </Link>
              <div className="p-5">
                <Link to={`/product/${product.id}`}>
                  <p className="product-name text-sm tracking-wider mb-1">{product.name}</p>
                </Link>
                <p className="text-[#8B7355] font-medium">${product.price}</p>
              </div>
              <button
                onClick={() => addToCart(product)}
                className="quick-add btn btn-primary text-xs px-8"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* UGC Reel Row */}
      <section className="bg-[#F0EBE3] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="uppercase tracking-[0.2em] text-xs text-[#8B7355] mb-8 text-center">As Seen On You</p>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {ugcItems.map((item) => (
              <div key={item.id} className="ugc-card">
                <img src={item.img} alt={item.caption} />
                <div className="caption">{item.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="uppercase tracking-[0.2em] text-xs text-[#8B7355]">Discover</p>
          <h2 className="serif text-4xl mt-2">Shop by Category</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { label: "Earrings", path: "/shop?category=Earrings", img: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80" },
            { label: "Necklaces", path: "/shop?category=Necklaces", img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80" },
            { label: "Huggies", path: "/shop?category=Huggies", img: "https://images.unsplash.com/photo-1535632787350-4e68b0f2c8e3?w=800&q=80" },
          ].map((cat) => (
            <Link key={cat.label} to={cat.path} className="category-tile group">
              <img src={cat.img} alt={cat.label} />
              <div className="overlay">
                <span className="text-white text-lg tracking-[0.15em] serif">{cat.label}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-[#E5DFD6]">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/3] bg-[#F0EBE3]">
            <img
              src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1000&q=80"
              alt="Our Craft"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="uppercase tracking-[0.2em] text-xs text-[#8B7355]">Since 2019</p>
            <h2 className="serif text-4xl mt-3 mb-6">Our Story</h2>
            <div className="space-y-4 text-[#6B635E] leading-relaxed">
              <p>Velmora was born from a simple belief: that fine jewelry should be accessible without compromise.</p>
              <p>Each piece is thoughtfully designed in our studio and crafted with the highest quality materials—18K gold plating over hypoallergenic bases, set with carefully selected crystals.</p>
            </div>
            <Link to="/" className="inline-block mt-8 text-sm tracking-widest border-b border-[#2C2522] pb-0.5 hover:text-[#8B7355] hover:border-[#8B7355]">
              READ MORE ABOUT OUR CRAFT →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20 border-y border-[#E5DFD6]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="uppercase tracking-[0.2em] text-xs text-[#8B7355]">Voices We Treasure</p>
            <h2 className="serif text-4xl mt-2">What Our Clients Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="text-center">
                <div className="stars flex justify-center mb-4">
                  {[...Array(5)].map((_, idx) => <Star key={idx} size={16} fill="currentColor" />)}
                </div>
                <p className="text-[#6B635E] italic leading-relaxed">"{t.text}"</p>
                <p className="mt-4 text-sm tracking-widest">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter py-20">
        <div className="max-w-md mx-auto px-6 text-center">
          <h3 className="serif text-3xl mb-3">Join for 10% off</h3>
          <p className="text-white/80 mb-8 text-sm tracking-wide">Be the first to know about new arrivals and exclusive offers.</p>
          <form className="flex" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email address"
              className="input flex-1 bg-white text-[#2C2522] rounded-none border-0"
            />
            <button type="submit" className="btn btn-gold px-8">Subscribe</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C2522] text-[#9A9088] py-16 text-sm">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-y-12">
          <div>
            <div className="serif text-white text-xl tracking-[0.2em] mb-6">VELMORA</div>
            <p className="text-xs tracking-widest">FINE JEWELRY</p>
          </div>

          <div>
            <div className="text-white tracking-widest mb-4 text-xs">SHOP</div>
            <div className="space-y-2">
              <Link to="/shop" className="block hover:text-white">All Jewelry</Link>
              <Link to="/shop?category=Earrings" className="block hover:text-white">Earrings</Link>
              <Link to="/shop?category=Necklaces" className="block hover:text-white">Necklaces</Link>
              <Link to="/shop?category=Huggies" className="block hover:text-white">Huggies</Link>
            </div>
          </div>

          <div>
            <div className="text-white tracking-widest mb-4 text-xs">HELP</div>
            <div className="space-y-2">
              <a href="#" className="block hover:text-white">Shipping</a>
              <a href="#" className="block hover:text-white">Returns</a>
              <a href="#" className="block hover:text-white">Care Guide</a>
              <a href="#" className="block hover:text-white">Contact</a>
            </div>
          </div>

          <div>
            <div className="text-white tracking-widest mb-4 text-xs">COMPANY</div>
            <div className="space-y-2">
              <a href="#" className="block hover:text-white">Our Story</a>
              <a href="#" className="block hover:text-white">Journal</a>
              <a href="#" className="block hover:text-white">Stockists</a>
            </div>
            <div className="mt-8 text-[10px] tracking-[2px]">© {new Date().getFullYear()} VELMORA</div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home