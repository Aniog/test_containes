import React from 'react'
import { Link } from 'react-router-dom'
import { Star } from 'lucide-react'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'

const Home = () => {
  const { addToCart } = useCart()
  const bestsellers = products.slice(0, 5)

  const ugcItems = [
    { id: 1, caption: "Morning light" },
    { id: 2, caption: "Golden hour" },
    { id: 3, caption: "Everyday elegance" },
    { id: 4, caption: "Soft details" },
    { id: 5, caption: "Quiet luxury" },
  ]

  const categories = [
    { name: "Earrings", path: "/shop?category=Earrings" },
    { name: "Necklaces", path: "/shop?category=Necklaces" },
    { name: "Huggies", path: "/shop?category=Huggies" },
  ]

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. I've worn my huggies every day for months." },
    { name: "Sofia R.", text: "Beautiful packaging and the necklace is even more stunning in person." },
    { name: "Isabella K.", text: "My go-to for gifting. Friends always ask where I found these pieces." },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-[#EDE6D9] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce45e?w=1600&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/30" />
        
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="font-serif text-6xl md:text-7xl text-white tracking-[3px] mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-white/90 text-lg tracking-[1px] mb-10 max-w-md mx-auto">
            Demi-fine jewelry for the modern woman
          </p>
          <Link
            to="/shop"
            className="inline-block btn-primary bg-white text-[#2C2522] hover:bg-[#F8F5F1]"
          >
            SHOP THE COLLECTION
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="trust-bar border-b border-[#D4C5B5] py-4">
        <div className="max-w-[1440px] mx-auto px-6 flex flex-wrap justify-center gap-x-8 gap-y-2 text-center">
          <span>FREE WORLDWIDE SHIPPING</span>
          <span className="hidden md:inline">·</span>
          <span>30-DAY RETURNS</span>
          <span className="hidden md:inline">·</span>
          <span>18K GOLD PLATED</span>
          <span className="hidden md:inline">·</span>
          <span>HYPOALLERGENIC</span>
        </div>
      </div>

      {/* Bestsellers */}
      <section className="max-w-[1440px] mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs tracking-[3px] text-[#8B7355] mb-2">DISCOVER</p>
            <h2 className="font-serif text-4xl tracking-[1px]">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm tracking-[1px] text-[#8B7355] hover:text-[#2C2522] hidden md:block">
            VIEW ALL →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bestsellers.map((product) => (
            <div key={product.id} className="product-card group">
              <Link to={`/product/${product.id}`} className="block">
                <div className="product-image-container aspect-[4/3.5] mb-4 rounded overflow-hidden relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image product-image-primary absolute inset-0 w-full h-full object-cover"
                  />
                  <img
                    src={product.imageSecondary}
                    alt={product.name}
                    className="product-image product-image-secondary absolute inset-0 w-full h-full object-cover opacity-0"
                  />
                </div>
              </Link>
              <div className="px-1">
                <Link to={`/product/${product.id}`}>
                  <h3 className="product-name text-sm tracking-[2px] mb-1 group-hover:text-[#8B7355] transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <p className="text-sm text-[#8B7355] mb-3">${product.price}</p>
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    addToCart(product)
                  }}
                  className="text-xs tracking-[1.5px] border-b border-[#D4C5B5] pb-0.5 hover:border-[#8B7355] hover:text-[#8B7355] transition-colors"
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* UGC Reel Row */}
      <section className="bg-[#F4EDE4] py-16">
        <div className="max-w-[1440px] mx-auto px-6">
          <p className="text-xs tracking-[3px] text-[#8B7355] mb-8 text-center">AS SEEN ON YOU</p>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {ugcItems.map((item, index) => (
              <div
                key={item.id}
                className="ugc-card flex-shrink-0 w-[180px] md:w-[200px] aspect-[9/16] rounded-lg snap-start"
              >
                <div className="ugc-caption">
                  <p>{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="max-w-[1440px] mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[3px] text-[#8B7355] mb-2">EXPLORE</p>
          <h2 className="font-serif text-4xl tracking-[1px]">Shop by Category</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link key={cat.name} to={cat.path} className="category-tile aspect-[16/10] rounded flex items-center justify-center group">
              <span className="category-label tracking-[3px]">{cat.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="max-w-[1440px] mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/3] bg-[#EDE6D9] rounded" />
          <div>
            <p className="text-xs tracking-[3px] text-[#8B7355] mb-4">OUR PHILOSOPHY</p>
            <h2 className="font-serif text-4xl tracking-[1px] mb-6">Quiet luxury,<br />thoughtfully made.</h2>
            <p className="text-[#6B635C] leading-relaxed mb-8">
              Velmora was born from a desire to create jewelry that feels personal yet timeless. 
              Each piece is crafted with intention, using the finest materials and designed to be 
              worn, loved, and passed down.
            </p>
            <Link to="/about" className="text-sm tracking-[1.5px] border-b border-[#8B7355] pb-0.5 text-[#8B7355]">
              READ OUR STORY →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#F4EDE4] py-20">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[3px] text-[#8B7355] mb-2">LOVED BY MANY</p>
            <h2 className="font-serif text-4xl tracking-[1px]">What Our Community Says</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} size={16} className="text-[#C5A46E] fill-[#C5A46E]" />
                  ))}
                </div>
                <p className="text-[#6B635C] italic mb-4 leading-relaxed">"{t.text}"</p>
                <p className="text-sm tracking-[1px] text-[#8B7355]">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-[1440px] mx-auto px-6 py-20">
        <div className="max-w-md mx-auto text-center">
          <p className="text-xs tracking-[3px] text-[#8B7355] mb-3">JOIN THE CIRCLE</p>
          <h2 className="font-serif text-3xl tracking-[1px] mb-4">Receive 10% off your first order</h2>
          <p className="text-[#6B635C] text-sm mb-8">Be the first to know about new arrivals and exclusive offers.</p>
          
          <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email address"
              className="newsletter-input text-center"
              required
            />
            <button type="submit" className="btn-primary mt-2">
              SUBSCRIBE
            </button>
          </form>
          <p className="text-[10px] text-[#A89B8C] mt-4 tracking-[0.5px]">We respect your inbox. Unsubscribe anytime.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#D4C5B5] bg-[#F4EDE4]">
        <div className="max-w-[1440px] mx-auto px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12">
            <div>
              <p className="font-serif text-xl tracking-[3px] mb-6">VELMORA</p>
            </div>
            
            <div>
              <p className="text-xs tracking-[2px] mb-4 text-[#8B7355]">SHOP</p>
              <div className="space-y-2 text-sm text-[#6B635C]">
                <Link to="/shop" className="block hover:text-[#2C2522]">All Jewelry</Link>
                <Link to="/shop?category=Earrings" className="block hover:text-[#2C2522]">Earrings</Link>
                <Link to="/shop?category=Necklaces" className="block hover:text-[#2C2522]">Necklaces</Link>
                <Link to="/shop?category=Huggies" className="block hover:text-[#2C2522]">Huggies</Link>
              </div>
            </div>

            <div>
              <p className="text-xs tracking-[2px] mb-4 text-[#8B7355]">HELP</p>
              <div className="space-y-2 text-sm text-[#6B635C]">
                <a href="#" className="block hover:text-[#2C2522]">Shipping</a>
                <a href="#" className="block hover:text-[#2C2522]">Returns</a>
                <a href="#" className="block hover:text-[#2C2522]">Care Guide</a>
                <a href="#" className="block hover:text-[#2C2522]">Contact</a>
              </div>
            </div>

            <div>
              <p className="text-xs tracking-[2px] mb-4 text-[#8B7355]">COMPANY</p>
              <div className="space-y-2 text-sm text-[#6B635C]">
                <Link to="/about" className="block hover:text-[#2C2522]">Our Story</Link>
                <Link to="/journal" className="block hover:text-[#2C2522]">Journal</Link>
                <a href="#" className="block hover:text-[#2C2522]">Sustainability</a>
                <a href="#" className="block hover:text-[#2C2522]">Careers</a>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-[#D4C5B5] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#A89B8C] tracking-[1px]">
            <p>© {new Date().getFullYear()} Velmora. All rights reserved.</p>
            <div className="flex gap-6">
              <span>INSTAGRAM</span>
              <span>PINTEREST</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
