import React from 'react'
import { Link } from 'react-router-dom'
import { Star } from 'lucide-react'
import { products } from '../data/products'
import ProductCard from '../components/product/ProductCard'

const HomePage = () => {
  const bestsellers = products.slice(0, 5)

  const ugcItems = [
    { id: 1, caption: "Everyday elegance", img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80" },
    { id: 2, caption: "Golden hour glow", img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80" },
    { id: 3, caption: "Timeless beauty", img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80" },
    { id: 4, caption: "Effortless luxury", img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80" },
    { id: 5, caption: "Modern heirloom", img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80" },
  ]

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. I've worn my huggies daily for months and they still look brand new." },
    { name: "Sofia R.", text: "Beautiful packaging and the necklace is even more stunning in person. My go-to gift for friends." },
    { name: "Isabella T.", text: "Finally found jewelry that doesn't irritate my sensitive skin. The ear cuffs are my favorite." },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[100dvh] min-h-[700px] flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-[#2C2823]">
          <img
            src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=2000&q=90"
            alt="Velmora Fine Jewelry"
            className="w-full h-full object-cover opacity-75"
          />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="serif text-[72px] md:text-[88px] leading-[0.95] tracking-[-0.02em] text-white mb-6">
            Crafted to be<br />Treasured
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-10 tracking-[0.02em]">
            Demi-fine gold jewelry, made with intention.
          </p>
          <Link to="/shop" className="btn-primary inline-block">
            SHOP THE COLLECTION
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="border-b border-[#E5DFD3] py-4">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs tracking-[0.15em] text-[#6B665F]">
            <span>FREE WORLDWIDE SHIPPING</span>
            <span className="hidden md:inline">·</span>
            <span>30-DAY RETURNS</span>
            <span className="hidden md:inline">·</span>
            <span>18K GOLD PLATED</span>
            <span className="hidden md:inline">·</span>
            <span>HYPOALLERGENIC</span>
          </div>
        </div>
      </div>

      {/* Bestsellers */}
      <section className="max-w-[1400px] mx-auto px-6 pt-20 pb-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-xs tracking-[0.2em] text-[#B8976E]">DISCOVER</span>
            <h2 className="serif text-5xl tracking-[-0.01em] mt-1">Bestsellers</h2>
          </div>
          <Link to="/shop" className="hidden md:block text-sm tracking-[0.1em] hover:text-[#B8976E] transition-colors">
            VIEW ALL →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* UGC Reel Row */}
      <section className="bg-[#2C2823] py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <span className="text-white/70 text-sm tracking-[0.15em]">AS SEEN ON YOU</span>
            <a href="#journal" className="text-white text-sm tracking-[0.1em] hover:text-[#B8976E] transition-colors">VIEW MORE ON INSTAGRAM →</a>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {ugcItems.map((item) => (
              <div key={item.id} className="ugc-card flex-shrink-0 w-[180px] md:w-[200px] aspect-[9/16] bg-[#3A3630] snap-start overflow-hidden">
                <img src={item.img} alt="" className="w-full h-full object-cover" />
                <div className="ugc-overlay">
                  <p className="serif text-white text-sm tracking-[0.05em]">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <span className="text-xs tracking-[0.2em] text-[#B8976E]">EXPLORE</span>
          <h2 className="serif text-5xl tracking-[-0.01em] mt-1">Shop by Category</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { name: "Earrings", path: "/shop?category=Earrings", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80" },
            { name: "Necklaces", path: "/shop?category=Necklaces", img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80" },
            { name: "Huggies", path: "/shop?category=Huggies", img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80" },
          ].map((cat) => (
            <Link key={cat.name} to={cat.path} className="category-tile group aspect-[4/3] bg-[#F0EBE3] overflow-hidden block">
              <img src={cat.img} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <span className="category-label">{cat.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="border-t border-[#E5DFD3]">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2">
          <div className="aspect-[4/3] md:aspect-auto bg-[#F0EBE3]">
            <img
              src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1200&q=80"
              alt="Our atelier"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center px-8 md:pr-20 py-16 md:py-0">
            <span className="text-xs tracking-[0.2em] text-[#B8976E]">SINCE 2019</span>
            <h3 className="serif text-5xl tracking-[-0.01em] mt-3 mb-6">Our Story</h3>
            <p className="text-[#6B665F] leading-relaxed mb-8 max-w-md">
              Velmora was born from a simple belief: that beautiful, lasting jewelry should be accessible without compromise. Each piece is thoughtfully designed in our studio and crafted with the finest materials.
            </p>
            <Link to="/about" className="btn-outline inline-block w-fit">LEARN MORE ABOUT US</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-[1400px] mx-auto px-6 py-20 border-t border-[#E5DFD3]">
        <div className="text-center mb-12">
          <span className="text-xs tracking-[0.2em] text-[#B8976E]">LOVED BY MANY</span>
          <h2 className="serif text-5xl tracking-[-0.01em] mt-1">What Our Clients Say</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="text-center px-4">
              <div className="flex justify-center gap-0.5 mb-4">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} size={14} className="fill-[#B8976E] text-[#B8976E]" />
                ))}
              </div>
              <p className="text-[#6B665F] italic leading-relaxed mb-4">"{t.text}"</p>
              <p className="text-sm tracking-[0.05em]">{t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-[#2C2823] py-16">
        <div className="max-w-md mx-auto px-6 text-center">
          <span className="text-[#B8976E] text-xs tracking-[0.2em]">MEMBERS ONLY</span>
          <h3 className="serif text-white text-4xl tracking-[-0.01em] mt-3 mb-3">Join for 10% off<br />your first order</h3>
          <p className="text-white/60 text-sm mb-8">Receive early access to new collections and styling inspiration.</p>
          <form className="flex" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-white/10 border border-white/20 px-5 py-3.5 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-[#B8976E]"
            />
            <button type="submit" className="btn-primary">JOIN</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#F8F5F1] border-t border-[#E5DFD3] pt-16 pb-8">
        <div className="max-w-[1400px] mx-auto px-6 grid md:grid-cols-4 gap-y-12">
          <div>
            <span className="serif text-2xl tracking-[0.2em]">VELMORA</span>
            <p className="text-xs text-[#6B665F] mt-4 max-w-[180px]">Demi-fine jewelry, crafted with intention since 2019.</p>
          </div>
          <div>
            <div className="filter-label mb-4">Shop</div>
            <div className="space-y-2 text-sm text-[#6B665F]">
              <Link to="/shop" className="block hover:text-[#2C2823]">All Jewelry</Link>
              <Link to="/shop?category=Earrings" className="block hover:text-[#2C2823]">Earrings</Link>
              <Link to="/shop?category=Necklaces" className="block hover:text-[#2C2823]">Necklaces</Link>
              <Link to="/shop?category=Huggies" className="block hover:text-[#2C2823]">Huggies</Link>
            </div>
          </div>
          <div>
            <div className="filter-label mb-4">Help</div>
            <div className="space-y-2 text-sm text-[#6B665F]">
              <a href="#" className="block hover:text-[#2C2823]">Shipping</a>
              <a href="#" className="block hover:text-[#2C2823]">Returns</a>
              <a href="#" className="block hover:text-[#2C2823]">Care Guide</a>
              <a href="#" className="block hover:text-[#2C2823]">Contact</a>
            </div>
          </div>
          <div>
            <div className="filter-label mb-4">Company</div>
            <div className="space-y-2 text-sm text-[#6B665F]">
              <Link to="/about" className="block hover:text-[#2C2823]">Our Story</Link>
              <a href="#" className="block hover:text-[#2C2823]">Journal</a>
              <a href="#" className="block hover:text-[#2C2823]">Stockists</a>
            </div>
            <div className="mt-6 flex gap-4 text-[#6B665F]">
              <a href="#" className="hover:text-[#2C2823]">IG</a>
              <a href="#" className="hover:text-[#2C2823]">PIN</a>
              <a href="#" className="hover:text-[#2C2823]">TT</a>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-[#E5DFD3] text-center text-xs text-[#6B665F]">
          © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default HomePage
