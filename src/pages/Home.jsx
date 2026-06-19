import React from 'react'
import { Link } from 'react-router-dom'
import { Star } from 'lucide-react'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'

const Home = () => {
  const { addToCart } = useCart()
  const bestsellers = products.slice(0, 5)

  const ugcItems = [
    { id: 1, caption: "Morning light", image: "https://images.unsplash.com/photo-1487412946053-3697022d3f82?w=400&q=80" },
    { id: 2, caption: "Golden hour", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" },
    { id: 3, caption: "Effortless", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80" },
    { id: 4, caption: "Timeless", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&q=80" },
    { id: 5, caption: "Everyday", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80" },
  ]

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. My huggies have become my everyday signature piece." },
    { name: "Sofia R.", text: "Beautiful packaging and even more beautiful jewelry. A gift I'll treasure." },
    { name: "Isabella T.", text: "Finally found pieces that feel truly special without being ostentatious." },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[100dvh] min-h-[700px] flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-[#1C1C1C]">
          <img 
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce45e?w=2000&q=80" 
            alt="Velmora Fine Jewelry"
            className="w-full h-full object-cover opacity-75"
          />
        </div>
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="serif text-6xl md:text-7xl text-white tracking-[-0.02em] mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-white/80 text-lg mb-10 tracking-[0.02em]">
            Demi-fine jewelry for the modern woman who values quiet elegance.
          </p>
          <Link to="/shop" className="btn btn-gold inline-block">
            SHOP THE COLLECTION
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="border-y border-[#D4CFC4] py-4">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-2 text-xs tracking-[0.15em] text-[#8B7E6B]">
            <span>FREE WORLDWIDE SHIPPING</span>
            <span>30-DAY RETURNS</span>
            <span>18K GOLD PLATED</span>
            <span>HYPOALLERGENIC</span>
          </div>
        </div>
      </div>

      {/* Bestsellers */}
      <section className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs tracking-[0.15em] text-[#8B7E6B] mb-2">DISCOVER</p>
            <h2 className="serif text-4xl tracking-[-0.02em]">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm tracking-[0.08em] hover:text-[#C5A26F] hidden md:block">
            VIEW ALL →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {bestsellers.map((product) => (
            <div key={product.id} className="product-card group">
              <Link to={`/product/${product.id}`}>
                <div className="product-image-container bg-[#E8E4DE]">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="product-image product-image-primary"
                  />
                  <img 
                    src={product.imageSecondary} 
                    alt={product.name}
                    className="product-image product-image-secondary"
                  />
                </div>
              </Link>
              <div className="p-5">
                <Link to={`/product/${product.id}`}>
                  <p className="product-name text-sm tracking-[0.12em] mb-1 pr-2">{product.name}</p>
                </Link>
                <p className="text-sm text-[#8B7E6B] mb-3">${product.price}</p>
                <button 
                  onClick={() => addToCart(product)}
                  className="quick-add btn btn-primary text-xs py-2.5 px-6"
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* UGC Reel */}
      <section className="bg-[#1C1C1C] py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <p className="text-center text-white/60 text-xs tracking-[0.15em] mb-8">AS SEEN ON YOU</p>
          <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
            {ugcItems.map((item) => (
              <div key={item.id} className="ugc-card">
                <img src={item.image} alt={item.caption} />
                <div className="ugc-caption">{item.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="max-w-[1400px] mx-auto px-6 py-20">
        <p className="text-xs tracking-[0.15em] text-[#8B7E6B] mb-2 text-center">EXPLORE</p>
        <h2 className="serif text-4xl tracking-[-0.02em] text-center mb-12">Shop by Category</h2>
        
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { name: "Earrings", path: "/shop?category=Earrings", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80" },
            { name: "Necklaces", path: "/shop?category=Necklaces", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80" },
            { name: "Huggies", path: "/shop?category=Huggies", image: "https://images.unsplash.com/photo-1535632787350-4e68b0fdbc48?w=800&q=80" },
          ].map((cat) => (
            <Link key={cat.name} to={cat.path} className="category-tile group">
              <img src={cat.image} alt={cat.name} />
              <div className="category-label">{cat.name}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="border-t border-[#D4CFC4]">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2">
          <div className="aspect-[4/3] md:aspect-auto bg-[#E8E4DE]">
            <img 
              src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1200&q=80" 
              alt="Our Craft"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center px-8 md:px-16 py-16 md:py-0">
            <div>
              <p className="text-xs tracking-[0.15em] text-[#8B7E6B] mb-4">EST. 2018</p>
              <h2 className="serif text-4xl tracking-[-0.02em] mb-6">Our Story</h2>
              <p className="text-[#8B7E6B] leading-relaxed mb-8 max-w-md">
                Velmora was born from a desire to create jewelry that feels both precious and wearable. 
                Each piece is thoughtfully designed in our studio and crafted with care using traditional techniques.
              </p>
              <Link to="/about" className="text-sm tracking-[0.08em] hover:text-[#C5A26F]">
                LEARN MORE →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-[1400px] mx-auto px-6 py-20 border-t border-[#D4CFC4]">
        <p className="text-xs tracking-[0.15em] text-[#8B7E6B] mb-2 text-center">IN THEIR WORDS</p>
        <h2 className="serif text-4xl tracking-[-0.02em] text-center mb-12">What Our Clients Say</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="text-center px-4">
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} className="fill-[#C5A26F] text-[#C5A26F]" />
                ))}
              </div>
              <p className="text-[#8B7E6B] italic mb-4">"{t.text}"</p>
              <p className="text-sm tracking-[0.08em]">{t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-[#1C1C1C] py-16">
        <div className="max-w-md mx-auto px-6 text-center">
          <h3 className="serif text-3xl text-white tracking-[-0.02em] mb-3">Join for 10% off</h3>
          <p className="text-white/60 text-sm mb-8 tracking-[0.02em]">
            Be the first to know about new arrivals and exclusive offers.
          </p>
          <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="YOUR EMAIL ADDRESS" 
              className="newsletter-input text-white placeholder:text-white/40 text-center"
            />
            <button type="submit" className="btn btn-gold mt-2">
              SUBSCRIBE
            </button>
          </form>
          <p className="text-[10px] text-white/40 mt-4 tracking-[0.1em]">
            WE RESPECT YOUR INBOX. UNSUBSCRIBE ANYTIME.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#F5F2ED] border-t border-[#D4CFC4] pt-16 pb-8">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-y-12 mb-16">
            <div>
              <p className="serif text-xl tracking-[0.2em] mb-6">VELMORA</p>
            </div>
            
            <div>
              <p className="text-xs tracking-[0.15em] text-[#8B7E6B] mb-4">SHOP</p>
              <div className="space-y-2 text-sm">
                <Link to="/shop" className="block hover:text-[#C5A26F]">All Jewelry</Link>
                <Link to="/shop?category=Earrings" className="block hover:text-[#C5A26F]">Earrings</Link>
                <Link to="/shop?category=Necklaces" className="block hover:text-[#C5A26F]">Necklaces</Link>
                <Link to="/shop?category=Huggies" className="block hover:text-[#C5A26F]">Huggies</Link>
              </div>
            </div>

            <div>
              <p className="text-xs tracking-[0.15em] text-[#8B7E6B] mb-4">HELP</p>
              <div className="space-y-2 text-sm">
                <a href="#" className="block hover:text-[#C5A26F]">Shipping</a>
                <a href="#" className="block hover:text-[#C5A26F]">Returns</a>
                <a href="#" className="block hover:text-[#C5A26F]">Care Guide</a>
                <a href="#" className="block hover:text-[#C5A26F]">Contact</a>
              </div>
            </div>

            <div>
              <p className="text-xs tracking-[0.15em] text-[#8B7E6B] mb-4">COMPANY</p>
              <div className="space-y-2 text-sm">
                <Link to="/about" className="block hover:text-[#C5A26F]">Our Story</Link>
                <Link to="/journal" className="block hover:text-[#C5A26F]">Journal</Link>
                <a href="#" className="block hover:text-[#C5A26F]">Sustainability</a>
                <a href="#" className="block hover:text-[#C5A26F]">Stockists</a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-[#D4CFC4] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#8B7E6B]">
            <p>© {new Date().getFullYear()} Velmora. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#C5A26F]">INSTAGRAM</a>
              <a href="#" className="hover:text-[#C5A26F]">PINTEREST</a>
              <a href="#" className="hover:text-[#C5A26F]">TIKTOK</a>
            </div>
            <p>MADE WITH CARE IN NEW YORK</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home