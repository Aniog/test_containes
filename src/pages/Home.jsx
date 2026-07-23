import React from 'react'
import { Link } from 'react-router-dom'
import { Star } from 'lucide-react'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'
import { formatPrice } from '../lib/utils'
import { toast } from 'sonner'

export default function Home() {
  const { addToCart } = useCart()
  const bestsellers = products.slice(0, 5)

  const ugcItems = [
    { id: 1, caption: "Morning light", img: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80" },
    { id: 2, caption: "Everyday elegance", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80" },
    { id: 3, caption: "Golden hour", img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80" },
    { id: 4, caption: "Timeless", img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80" },
    { id: 5, caption: "Soft glow", img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&q=80" },
  ]

  const handleAddToCart = (product) => {
    addToCart(product)
    toast.success(`${product.name} added to cart`)
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[100dvh] flex items-center justify-center bg-[#0F0F0F] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1600&q=90" 
          alt="Velmora Fine Jewelry" 
          className="absolute inset-0 w-full h-full object-cover opacity-75"
        />
        <div className="relative z-10 text-center px-6">
          <h1 className="serif text-6xl md:text-7xl text-white tracking-[-0.02em] mb-4">Crafted to be Treasured</h1>
          <p className="text-white/80 text-lg mb-8 max-w-md mx-auto">Demi-fine gold jewelry, made with intention.</p>
          <Link to="/shop" className="btn btn-primary inline-block">Shop the Collection</Link>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-xs tracking-[0.2em]">SCROLL TO EXPLORE</div>
      </section>

      {/* Trust Bar */}
      <div className="border-b border-[#E5E0D8] py-4 text-center text-xs tracking-[0.1em] text-[#8B7E6F] flex flex-wrap justify-center gap-x-8 gap-y-1 px-4">
        <span>Free Worldwide Shipping</span>
        <span>30-Day Returns</span>
        <span>18K Gold Plated</span>
        <span>Hypoallergenic</span>
      </div>

      {/* Bestsellers */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="text-xs tracking-[0.15em] text-[#C5A26F] mb-2">DISCOVER</div>
            <h2 className="serif text-4xl">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm tracking-[0.08em] hover:text-[#C5A26F] transition-colors hidden md:block">VIEW ALL →</Link>
        </div>

        <div className="product-grid">
          {bestsellers.map((product) => (
            <div key={product.id} className="product-card group">
              <Link to={`/product/${product.id}`} className="block relative overflow-hidden aspect-[4/3] bg-[#F0EBE3]">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                />
                <img 
                  src={product.imageAlt} 
                  alt={product.name} 
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
              </Link>
              <div className="p-5">
                <Link to={`/product/${product.id}`}>
                  <div className="product-name text-sm tracking-[0.12em] mb-1">{product.name}</div>
                </Link>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#8B7E6F]">{formatPrice(product.price)}</span>
                  <button 
                    onClick={() => handleAddToCart(product)}
                    className="text-xs tracking-[0.08em] text-[#C5A26F] hover:text-[#A67C52] transition-colors"
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* UGC Reel */}
      <section className="bg-[#0F0F0F] py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8">
          <div className="text-[#C5A26F] text-xs tracking-[0.15em] mb-2">IN THE WILD</div>
          <h3 className="serif text-3xl text-white">Worn by you</h3>
        </div>
        <div className="ugc-scroll px-6 md:px-12 pb-4">
          {ugcItems.map((item) => (
            <div key={item.id} className="ugc-card relative aspect-[9/16] overflow-hidden rounded-sm">
              <img src={item.img} alt={item.caption} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                <p className="serif text-white text-sm tracking-wide">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shop by Category */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="text-center mb-12">
          <div className="text-xs tracking-[0.15em] text-[#C5A26F] mb-2">EXPLORE</div>
          <h2 className="serif text-4xl">Shop by Category</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { name: "Earrings", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80", cat: "Earrings" },
            { name: "Necklaces", img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80", cat: "Necklaces" },
            { name: "Huggies", img: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80", cat: "Huggies" },
          ].map((cat, idx) => (
            <Link key={idx} to={`/shop?category=${cat.cat}`} className="category-tile aspect-[16/10] bg-[#0F0F0F]">
              <img src={cat.img} alt={cat.name} className="absolute inset-0 w-full h-full object-cover" />
              <div className="label">{cat.name}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid md:grid-cols-2 gap-12 items-center border-t border-[#E5E0D8]">
        <div className="aspect-[4/3] bg-[#F0EBE3] overflow-hidden">
          <img src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=900&q=80" alt="Our atelier" className="w-full h-full object-cover" />
        </div>
        <div>
          <div className="text-xs tracking-[0.15em] text-[#C5A26F] mb-3">EST. 2019</div>
          <h2 className="serif text-4xl mb-6">Our Story</h2>
          <p className="text-[#6B6B5F] leading-relaxed mb-8">
            Velmora was born from a desire to create jewelry that feels personal, not precious. 
            Each piece is crafted with quiet intention—designed to be worn daily, treasured for years, 
            and passed down with love.
          </p>
          <Link to="/about" className="btn btn-outline inline-block">Learn More</Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 py-20 text-center">
        <div className="text-xs tracking-[0.15em] text-[#C5A26F] mb-3">LOVED BY MANY</div>
        <h2 className="serif text-4xl mb-14">What our customers say</h2>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          {[
            { name: "Elena R.", text: "The quality is exceptional. I've worn my huggies every day for a year and they still look brand new." },
            { name: "Maya K.", text: "Beautiful packaging and even more beautiful jewelry. The necklace I bought has become my signature piece." },
            { name: "Sofia L.", text: "I bought the heirloom set as a gift for my sister. She hasn't taken it off since. Thank you, Velmora." },
          ].map((t, i) => (
            <div key={i} className="border border-[#E5E0D8] p-8">
              <div className="flex gap-0.5 mb-4 text-[#C5A26F]">
                {[...Array(5)].map((_, j) => <Star key={j} size={14} fill="currentColor" />)}
              </div>
              <p className="text-sm text-[#6B6B5F] mb-6 leading-relaxed">"{t.text}"</p>
              <div className="text-sm tracking-[0.05em]">{t.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-[#0F0F0F] py-16 text-center px-6">
        <div className="max-w-md mx-auto">
          <div className="serif text-3xl text-white mb-3">Join the circle</div>
          <p className="text-white/60 text-sm mb-8">Receive 10% off your first order and early access to new collections.</p>
          <form className="flex gap-2" onSubmit={(e) => { e.preventDefault(); toast.success('Welcome to Velmora.') }}>
            <input type="email" placeholder="Your email address" className="input flex-1 text-sm" required />
            <button type="submit" className="btn btn-primary whitespace-nowrap">Subscribe</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#F8F5F0] border-t border-[#E5E0D8] pt-16 pb-10 px-6 md:px-12 text-sm">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-y-12">
          <div>
            <div className="serif text-xl tracking-[0.2em] mb-4">VELMORA</div>
            <p className="text-[#8B7E6F] text-xs">Fine jewelry for the modern woman.</p>
          </div>
          <div>
            <div className="uppercase tracking-[0.1em] text-xs mb-4 text-[#C5A26F]">Shop</div>
            <div className="space-y-2 text-[#6B6B5F]">
              <Link to="/shop" className="block hover:text-[#1A1A1A]">All Jewelry</Link>
              <Link to="/shop?category=Earrings" className="block hover:text-[#1A1A1A]">Earrings</Link>
              <Link to="/shop?category=Necklaces" className="block hover:text-[#1A1A1A]">Necklaces</Link>
              <Link to="/shop?category=Huggies" className="block hover:text-[#1A1A1A]">Huggies</Link>
            </div>
          </div>
          <div>
            <div className="uppercase tracking-[0.1em] text-xs mb-4 text-[#C5A26F]">Help</div>
            <div className="space-y-2 text-[#6B6B5F]">
              <div>Shipping</div>
              <div>Returns</div>
              <div>Care Guide</div>
              <div>Contact</div>
            </div>
          </div>
          <div>
            <div className="uppercase tracking-[0.1em] text-xs mb-4 text-[#C5A26F]">Company</div>
            <div className="space-y-2 text-[#6B6B5F]">
              <Link to="/about" className="block hover:text-[#1A1A1A]">Our Story</Link>
              <Link to="/journal" className="block hover:text-[#1A1A1A]">Journal</Link>
              <div>Sustainability</div>
              <div>Stockists</div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-[#E5E0D8] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#8B7E6F]">
          <div>© {new Date().getFullYear()} Velmora. All rights reserved.</div>
          <div className="flex gap-6">
            <span>Instagram</span>
            <span>Pinterest</span>
            <span>Visa</span>
            <span>Mastercard</span>
          </div>
        </div>
      </footer>
    </div>
  )
}