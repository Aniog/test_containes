import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { products } from '../data/products';

const Home = () => {
  const bestsellers = products.slice(0, 5);
  const categories = [
    { name: 'Earrings', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80' },
    { name: 'Necklaces', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80' },
    { name: 'Huggies', image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&q=80' },
  ];

  const testimonials = [
    { name: 'Elena M.', text: 'The quality is exceptional. My necklace has become my everyday signature piece.', rating: 5 },
    { name: 'Sofia R.', text: 'Beautiful packaging and even more beautiful jewelry. A gift I will treasure.', rating: 5 },
    { name: 'Isabella K.', text: 'Finally found earrings that don\'t irritate my sensitive ears. Love them.', rating: 5 },
  ];

  const ugcItems = [
    { id: 1, caption: 'Morning light', image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80' },
    { id: 2, caption: 'Golden hour', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80' },
    { id: 3, caption: 'Everyday elegance', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80' },
    { id: 4, caption: 'Timeless beauty', image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80' },
    { id: 5, caption: 'Quiet luxury', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80' },
  ];

  return (
    <div className="bg-[#F8F5F1] text-[#2C2522]">
      {/* Hero Section */}
      <section className="relative h-[100dvh] min-h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#2C2522]">
          <img
            src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=2000&q=80"
            alt="Velmora Fine Jewelry"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="font-serif text-[56px] md:text-[72px] leading-[1.1] tracking-[2px] text-white mb-6">
            Crafted to be<br />Treasured
          </h1>
          <p className="text-white/90 text-lg tracking-[1px] mb-10 max-w-md mx-auto">
            Demi-fine gold jewelry, made with intention for the modern woman.
          </p>
          <Link
            to="/shop"
            className="inline-block px-10 py-4 bg-[#8B7355] text-white text-sm tracking-[3px] hover:bg-[#6B5742] transition-colors"
          >
            SHOP THE COLLECTION
          </Link>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-px h-12 bg-white/50" />
        </div>
      </section>

      {/* Trust Bar */}
      <div className="border-b border-[#D4C5B5] py-4">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs tracking-[2px] text-[#6B6058]">
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
      <section className="max-w-[1440px] mx-auto px-6 pt-20 pb-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs tracking-[3px] text-[#8B7355] mb-2">DISCOVER</p>
            <h2 className="font-serif text-4xl tracking-[1px]">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm tracking-[2px] hover:text-[#8B7355] transition-colors hidden md:block">
            VIEW ALL →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group block"
            >
              <div className="relative aspect-[4/3] bg-[#EDE8E0] overflow-hidden mb-4">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                />
                <img
                  src={product.images[1] || product.images[0]}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    // Will be handled by cart context in product page
                  }}
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-white/95 text-xs tracking-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#8B7355] hover:text-white"
                >
                  QUICK ADD
                </button>
              </div>
              <div className="px-1">
                <p className="font-serif text-sm tracking-[1.5px] mb-1">{product.name}</p>
                <p className="text-sm text-[#6B6058]">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center md:hidden">
          <Link to="/shop" className="text-sm tracking-[2px] hover:text-[#8B7355]">VIEW ALL →</Link>
        </div>
      </section>

      {/* UGC Reel Row */}
      <section className="bg-[#2C2522] py-16">
        <div className="max-w-[1440px] mx-auto px-6">
          <p className="text-center text-[#D4C5B5] text-xs tracking-[3px] mb-8">AS SEEN ON YOU</p>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {ugcItems.map((item) => (
              <div key={item.id} className="relative flex-shrink-0 w-[180px] aspect-[9/16] overflow-hidden snap-start">
                <img src={item.image} alt={item.caption} className="w-full h-full object-cover" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="font-serif text-white text-sm tracking-[1px]">{item.caption}</p>
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
        <div className="grid md:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              to={`/shop?category=${cat.name}`}
              className="group relative aspect-[16/10] overflow-hidden bg-[#EDE8E0]"
            >
              <img src={cat.image} alt={cat.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-white text-3xl tracking-[3px] opacity-0 group-hover:opacity-100 transition-opacity">
                  {cat.name.toUpperCase()}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="max-w-[1440px] mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="aspect-[4/3] bg-[#EDE8E0]">
            <img
              src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
              alt="Our Craft"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="py-4 md:py-8">
            <p className="text-xs tracking-[3px] text-[#8B7355] mb-4">EST. 2019</p>
            <h2 className="font-serif text-4xl tracking-[1px] mb-6">Our Story</h2>
            <div className="space-y-4 text-[#6B6058] leading-relaxed">
              <p>Velmora was born from a simple belief: that beautiful jewelry should be accessible without compromise.</p>
              <p>Each piece is thoughtfully designed in our studio and crafted with the finest materials—18K gold plating, ethically sourced crystals, and hypoallergenic findings.</p>
            </div>
            <Link to="/" className="inline-block mt-8 text-sm tracking-[2px] border-b border-[#8B7355] pb-0.5 hover:text-[#8B7355]">
              READ OUR STORY →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#EDE8E0] py-16">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[3px] text-[#8B7355] mb-2">IN THEIR WORDS</p>
            <h2 className="font-serif text-4xl tracking-[1px]">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="text-center px-4">
                <div className="flex justify-center gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={14} className="fill-[#8B7355] text-[#8B7355]" />
                  ))}
                </div>
                <p className="text-[#6B6058] italic leading-relaxed mb-4">"{t.text}"</p>
                <p className="text-sm tracking-[1px]">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-[1440px] mx-auto px-6 py-20">
        <div className="max-w-md mx-auto text-center">
          <p className="text-xs tracking-[3px] text-[#8B7355] mb-3">MEMBERS ONLY</p>
          <h2 className="font-serif text-3xl tracking-[1px] mb-4">Join for 10% off your first order</h2>
          <p className="text-[#6B6058] text-sm mb-8">Be the first to know about new arrivals and exclusive offers.</p>
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="YOUR EMAIL ADDRESS"
              className="flex-1 px-5 py-3.5 bg-white border border-[#D4C5B5] text-sm tracking-[1px] placeholder:text-[#8B7355]/50 focus:outline-none focus:border-[#8B7355]"
            />
            <button
              type="submit"
              className="px-8 py-3.5 bg-[#2C2522] text-white text-sm tracking-[2px] hover:bg-[#8B7355] transition-colors whitespace-nowrap"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C2522] text-[#D4C5B5] pt-16 pb-8">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 mb-16">
            <div>
              <p className="font-serif text-2xl tracking-[4px] text-white mb-6">VELMORA</p>
            </div>
            <div>
              <p className="text-white text-sm tracking-[2px] mb-4">SHOP</p>
              <div className="space-y-2 text-sm">
                <Link to="/shop" className="block hover:text-white">All Jewelry</Link>
                <Link to="/shop?category=Earrings" className="block hover:text-white">Earrings</Link>
                <Link to="/shop?category=Necklaces" className="block hover:text-white">Necklaces</Link>
                <Link to="/shop?category=Huggies" className="block hover:text-white">Huggies</Link>
              </div>
            </div>
            <div>
              <p className="text-white text-sm tracking-[2px] mb-4">HELP</p>
              <div className="space-y-2 text-sm">
                <a href="#" className="block hover:text-white">Shipping</a>
                <a href="#" className="block hover:text-white">Returns</a>
                <a href="#" className="block hover:text-white">Care Guide</a>
                <a href="#" className="block hover:text-white">Contact</a>
              </div>
            </div>
            <div>
              <p className="text-white text-sm tracking-[2px] mb-4">COMPANY</p>
              <div className="space-y-2 text-sm">
                <a href="#" className="block hover:text-white">Our Story</a>
                <a href="#" className="block hover:text-white">Journal</a>
                <a href="#" className="block hover:text-white">Sustainability</a>
                <a href="#" className="block hover:text-white">Stockists</a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-[1px]">
            <p>© {new Date().getFullYear()} Velmora. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white">INSTAGRAM</a>
              <a href="#" className="hover:text-white">PINTEREST</a>
              <a href="#" className="hover:text-white">TIKTOK</a>
            </div>
            <p>VISA · MASTERCARD · AMEX · PAYPAL</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;