import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const bestsellers = products.slice(0, 5);
  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. My necklace has become my everyday signature piece.", rating: 5 },
    { name: "Sophia R.", text: "Beautiful craftsmanship. The huggies are so comfortable I forget I'm wearing them.", rating: 5 },
    { name: "Isabella K.", text: "Gave these as a gift and my sister hasn't taken them off since. Stunning.", rating: 5 },
  ];

  const ugcItems = [
    { id: 1, caption: "Golden hour glow" },
    { id: 2, caption: "Everyday elegance" },
    { id: 3, caption: "Layered with love" },
    { id: 4, caption: "Timeless touch" },
    { id: 5, caption: "Soft light, soft gold" },
  ];

  return (
    <div className="min-h-screen bg-[#F8F5F1]">
      {/* Sticky Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#F8F5F1] shadow-sm' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="font-serif text-2xl tracking-[4px] text-[#2C2522]">VELMORA</Link>
          
          <div className="hidden md:flex items-center gap-10 text-sm tracking-[1px] text-[#2C2522]">
            <Link to="/shop" className="hover:text-[#8B7355] transition-colors">SHOP</Link>
            <Link to="/shop" className="hover:text-[#8B7355] transition-colors">COLLECTIONS</Link>
            <Link to="/" className="hover:text-[#8B7355] transition-colors">ABOUT</Link>
            <Link to="/" className="hover:text-[#8B7355] transition-colors">JOURNAL</Link>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 text-[#2C2522] hover:text-[#8B7355] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button 
              onClick={() => setIsCartOpen(true)}
              className="p-2 text-[#2C2522] hover:text-[#8B7355] transition-colors relative"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#8B7355] text-white text-[10px] rounded-full flex items-center justify-center">{cartCount}</span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[100dvh] min-h-[700px] flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-[#2C2522]">
          <div className="absolute inset-0 bg-[radial-gradient(#8B7355_0.5px,transparent_1px)] bg-[length:4px_4px] opacity-10"></div>
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="font-serif text-[56px] md:text-[72px] leading-[1.1] tracking-[-1px] text-white mb-6">
            Crafted to be<br />Treasured
          </h1>
          <p className="text-[#D4C5B5] text-lg tracking-[1px] mb-10 max-w-md mx-auto">
            Demi-fine gold jewelry, made with intention for the modern woman.
          </p>
          <Link 
            to="/shop" 
            className="inline-block px-10 py-4 bg-[#8B7355] text-white text-sm tracking-[2px] hover:bg-[#6B5535] transition-all duration-300"
          >
            SHOP THE COLLECTION
          </Link>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-px h-12 bg-[#8B7355]"></div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="border-y border-[#E5DFD3] bg-white py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-2 text-xs tracking-[2px] text-[#6B655C] text-center">
            <span>FREE WORLDWIDE SHIPPING</span>
            <span>30-DAY RETURNS</span>
            <span>18K GOLD PLATED</span>
            <span>HYPOALLERGENIC</span>
          </div>
        </div>
      </div>

      {/* Bestsellers */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-xs tracking-[3px] text-[#8B7355]">DISCOVER</span>
            <h2 className="font-serif text-4xl text-[#2C2522] mt-1">Bestsellers</h2>
          </div>
          <Link to="/shop" className="hidden md:flex items-center gap-2 text-sm tracking-[1px] text-[#8B7355] hover:text-[#6B5535]">
            VIEW ALL <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* UGC Reel Row */}
      <section className="bg-[#2C2522] py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-8">
          <span className="text-xs tracking-[3px] text-[#8B7355]">AS SEEN ON</span>
          <h3 className="font-serif text-3xl text-white mt-1">Worn by you</h3>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4 px-6 scrollbar-hide snap-x snap-mandatory">
          {ugcItems.map((item, idx) => (
            <div key={idx} className="flex-shrink-0 w-[180px] snap-start">
              <div className="relative aspect-[9/16] bg-[#3D3632] rounded-sm overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-serif text-white text-sm tracking-wide">{item.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shop by Category */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <span className="text-xs tracking-[3px] text-[#8B7355]">EXPLORE</span>
          <h2 className="font-serif text-4xl text-[#2C2522] mt-1">Shop by Category</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: 'Earrings', path: '/shop?category=Earrings' },
            { name: 'Necklaces', path: '/shop?category=Necklaces' },
            { name: 'Huggies', path: '/shop?category=Huggies' },
          ].map((cat, idx) => (
            <Link key={idx} to={cat.path} className="group relative aspect-[4/3] bg-[#EDE8DF] overflow-hidden rounded-sm">
              <div className="absolute inset-0 bg-[#2C2522]/40 group-hover:bg-[#2C2522]/60 transition-all duration-500"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-white text-3xl tracking-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">{cat.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2">
          <div className="aspect-[4/3] md:aspect-auto bg-[#EDE8DF]"></div>
          <div className="flex items-center px-8 md:px-16 py-16 md:py-0">
            <div className="max-w-md">
              <span className="text-xs tracking-[3px] text-[#8B7355]">SINCE 2019</span>
              <h2 className="font-serif text-4xl text-[#2C2522] mt-3 mb-6">Our Story</h2>
              <p className="text-[#5C554E] leading-relaxed mb-8">
                Velmora was born from a desire to create jewelry that feels as meaningful as it is beautiful. 
                Each piece is thoughtfully designed in our studio and crafted with the finest materials.
              </p>
              <Link to="/" className="inline-flex items-center gap-2 text-sm tracking-[1px] text-[#8B7355] hover:text-[#6B5535]">
                READ MORE <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <span className="text-xs tracking-[3px] text-[#8B7355]">LOVED BY MANY</span>
          <h2 className="font-serif text-4xl text-[#2C2522] mt-1">What our customers say</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="border border-[#E5DFD3] p-8">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#8B7355] text-[#8B7355]" />
                ))}
              </div>
              <p className="text-[#5C554E] italic leading-relaxed mb-6">"{t.text}"</p>
              <p className="text-sm tracking-[1px] text-[#2C2522]">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-[#2C2522] py-16">
        <div className="max-w-md mx-auto px-6 text-center">
          <h3 className="font-serif text-3xl text-white mb-3">Join for 10% off</h3>
          <p className="text-[#D4C5B5] text-sm tracking-[1px] mb-8">Be the first to know about new arrivals and exclusive offers.</p>
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-5 py-3 bg-white/10 border border-white/20 text-white placeholder:text-[#8B7355] text-sm focus:outline-none focus:border-[#8B7355]"
            />
            <button type="submit" className="px-8 py-3 bg-[#8B7355] text-white text-sm tracking-[2px] hover:bg-[#6B5535] transition-colors">
              SUBSCRIBE
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#F8F5F1] border-t border-[#E5DFD3] pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-y-12">
          <div>
            <div className="font-serif text-2xl tracking-[4px] text-[#2C2522] mb-4">VELMORA</div>
            <p className="text-xs text-[#6B655C] tracking-[1px]">FINE JEWELRY</p>
          </div>
          <div>
            <div className="text-xs tracking-[2px] text-[#8B7355] mb-4">SHOP</div>
            <div className="space-y-2 text-sm text-[#5C554E]">
              <div>Earrings</div>
              <div>Necklaces</div>
              <div>Huggies</div>
              <div>Gift Sets</div>
            </div>
          </div>
          <div>
            <div className="text-xs tracking-[2px] text-[#8B7355] mb-4">HELP</div>
            <div className="space-y-2 text-sm text-[#5C554E]">
              <div>Shipping</div>
              <div>Returns</div>
              <div>Care Guide</div>
              <div>Contact</div>
            </div>
          </div>
          <div>
            <div className="text-xs tracking-[2px] text-[#8B7355] mb-4">COMPANY</div>
            <div className="space-y-2 text-sm text-[#5C554E]">
              <div>Our Story</div>
              <div>Journal</div>
              <div>Stockists</div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-[#E5DFD3] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#6B655C] tracking-[1px]">
          <div>© 2026 Velmora. All rights reserved.</div>
          <div className="flex gap-6">
            <span>INSTAGRAM</span>
            <span>PINTEREST</span>
            <span>TIKTOK</span>
          </div>
          <div>VISA · MASTERCARD · AMEX · PAYPAL</div>
        </div>
      </footer>
    </div>
  );
};

export default Home;