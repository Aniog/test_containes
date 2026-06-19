import React from 'react'
import { Link } from 'react-router-dom'
import { Star } from 'lucide-react'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'

const Home = () => {
  const { addToCart } = useCart()
  const bestsellers = products.slice(0, 5)

  const ugcItems = [
    { id: 1, caption: "Morning light", image: "https://images.unsplash.com/photo-1487412946053-3697022be97c?w=400&q=80" },
    { id: 2, caption: "Golden hour", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" },
    { id: 3, caption: "Effortless", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80" },
    { id: 4, caption: "Timeless", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&q=80" },
    { id: 5, caption: "Everyday luxury", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80" },
  ]

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. I've worn my huggies every day for six months and they still look brand new." },
    { name: "Sofia R.", text: "Bought the Royal Heirloom Set as a gift for my sister. She was absolutely thrilled. Beautiful packaging too." },
    { name: "Isabella T.", text: "Finally found jewelry that doesn't irritate my sensitive skin. The gold tone is so rich and elegant." },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-[#1A1816] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce45e?w=2000&q=80')] bg-cover bg-center opacity-70" />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="serif hero-headline text-white text-[72px] md:text-[88px] leading-[0.95] tracking-[-0.02em] mb-6">
            Crafted to be<br />Treasured
          </h1>
          <p className="text-white/80 text-lg mb-10 tracking-[0.02em]">
            Demi-fine jewelry for the modern woman
          </p>
          <Link to="/shop" className="btn btn-gold inline-block">
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="trust-bar border-b border-[#E5DFD6] py-4 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-wrap justify-center gap-x-10 gap-y-2 text-center">
          <span>Free Worldwide Shipping</span>
          <span>30-Day Returns</span>
          <span>18K Gold Plated</span>
          <span>Hypoallergenic</span>
        </div>
      </div>

      {/* Bestsellers */}
      <section className="max-w-[1400px] mx-auto px-6 pt-20 pb-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs tracking-[0.2em] text-[#6B6560] mb-2">DISCOVER</p>
            <h2 className="serif text-4xl tracking-[-0.01em]">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm tracking-[0.1em] hover:text-[#B8976F] hidden md:block">
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {bestsellers.map((product) => (
            <div key={product.id} className="product-card group">
              <Link to={`/product/${product.id}`} className="block">
                <div className="product-image-container">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image primary"
                  />
                  <img
                    src={product.imageSecondary}
                    alt={product.name}
                    className="product-image secondary"
                  />
                </div>
              </Link>
              <div className="p-5">
                <Link to={`/product/${product.id}`}>
                  <p className="product-name text-sm tracking-[0.12em] mb-1 pr-8">{product.name}</p>
                </Link>
                <p className="text-sm text-[#6B6560]">${product.price}</p>
              </div>
              <button
                onClick={() => addToCart(product)}
                className="quick-add btn btn-gold text-xs py-2.5 px-8"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Link to="/shop" className="text-sm tracking-[0.1em] hover:text-[#B8976F]">
            View All →
          </Link>
        </div>
      </section>

      {/* UGC Reel Row */}
      <section className="bg-[#F5F2ED] py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <p className="text-xs tracking-[0.2em] text-[#6B6560] mb-8 text-center">AS SEEN ON YOU</p>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
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
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.2em] text-[#6B6560] mb-2">EXPLORE</p>
          <h2 className="serif text-4xl tracking-[-0.01em]">Shop by Category</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {[
            { label: "Earrings", path: "/shop?category=Earrings", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80" },
            { label: "Necklaces", path: "/shop?category=Necklaces", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80" },
            { label: "Huggies", path: "/shop?category=Earrings", image: "https://images.unsplash.com/photo-1506630448388-4bc034008a1b?w=800&q=80" },
          ].map((cat, idx) => (
            <Link key={idx} to={cat.path} className="category-tile group">
              <img src={cat.image} alt={cat.label} />
              <div className="category-overlay">
                <span className="text-white text-lg tracking-[0.15em] font-light">{cat.label}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="max-w-[1400px] mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/3] bg-[#F5F2ED]">
            <img
              src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=1000&q=80"
              alt="Velmora atelier"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-w-md">
            <p className="text-xs tracking-[0.2em] text-[#6B6560] mb-4">EST. 2018</p>
            <h3 className="serif text-5xl tracking-[-0.02em] leading-none mb-8">Our Story</h3>
            <p className="text-[#6B6560] leading-relaxed mb-8">
              Velmora was born from a desire to create jewelry that feels as precious as the moments it marks. 
              Each piece is thoughtfully designed in our New York studio and crafted with the finest materials.
            </p>
            <Link to="/about" className="btn btn-outline inline-block">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20 border-y border-[#E5DFD6]">
        <div className="max-w-[1000px] mx-auto px-6">
          <p className="text-center text-xs tracking-[0.2em] text-[#6B6560] mb-10">LOVED BY OUR COMMUNITY</p>
          <div className="grid md:grid-cols-3 gap-10">
            {testimonials.map((t, idx) => (
              <div key={idx} className="text-center">
                <div className="stars flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <p className="text-[#6B6560] text-sm leading-relaxed mb-4">"{t.text}"</p>
                <p className="text-sm tracking-[0.05em]">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-[600px] mx-auto px-6 py-20 text-center">
        <h3 className="serif text-4xl tracking-[-0.01em] mb-4">Join for 10% off<br />your first order</h3>
        <p className="text-[#6B6560] mb-8 text-sm">Be the first to know about new arrivals and exclusive offers.</p>
        <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Your email address"
            className="newsletter-input flex-1"
            required
          />
          <button type="submit" className="btn btn-gold whitespace-nowrap">
            Subscribe
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1816] text-[#A39B92] pt-16 pb-8">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-y-12 mb-16">
            <div>
              <p className="serif text-2xl tracking-[0.2em] text-white mb-4">VELMORA</p>
              <p className="text-sm">Fine jewelry, thoughtfully made.</p>
            </div>
            <div>
              <p className="text-white text-sm tracking-[0.1em] mb-4">SHOP</p>
              <div className="space-y-2 text-sm">
                <Link to="/shop" className="block hover:text-white">All Jewelry</Link>
                <Link to="/shop?category=Earrings" className="block hover:text-white">Earrings</Link>
                <Link to="/shop?category=Necklaces" className="block hover:text-white">Necklaces</Link>
                <Link to="/collections" className="block hover:text-white">Collections</Link>
              </div>
            </div>
            <div>
              <p className="text-white text-sm tracking-[0.1em] mb-4">HELP</p>
              <div className="space-y-2 text-sm">
                <a href="#" className="block hover:text-white">Shipping</a>
                <a href="#" className="block hover:text-white">Returns</a>
                <a href="#" className="block hover:text-white">Care Guide</a>
                <a href="#" className="block hover:text-white">Contact</a>
              </div>
            </div>
            <div>
              <p className="text-white text-sm tracking-[0.1em] mb-4">COMPANY</p>
              <div className="space-y-2 text-sm">
                <Link to="/about" className="block hover:text-white">Our Story</Link>
                <Link to="/journal" className="block hover:text-white">Journal</Link>
                <a href="#" className="block hover:text-white">Sustainability</a>
                <a href="#" className="block hover:text-white">Stockists</a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-[0.1em]">
            <p>© {new Date().getFullYear()} Velmora. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white">Instagram</a>
              <a href="#" className="hover:text-white">Pinterest</a>
              <a href="#" className="hover:text-white">TikTok</a>
            </div>
            <div className="flex gap-4 text-[10px]">
              <span>VISA</span>
              <span>MC</span>
              <span>AMEX</span>
              <span>PP</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
