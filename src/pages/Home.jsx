import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';
import ProductCard from '@/components/ui/ProductCard';
import { products } from '@/data/products';

const Home = ({ onAddToCart }) => {
  const bestsellers = products.slice(0, 5);
  
  const ugcItems = [
    { id: 1, caption: "Morning light" },
    { id: 2, caption: "Golden hour" },
    { id: 3, caption: "Everyday elegance" },
    { id: 4, caption: "Soft details" },
    { id: 5, caption: "Quiet luxury" },
  ];

  const categories = [
    { name: "Earrings", slug: "earrings" },
    { name: "Necklaces", slug: "necklaces" },
    { name: "Huggies", slug: "huggies" },
  ];

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. I've worn my huggies every day for six months and they still look brand new." },
    { name: "Sofia R.", text: "Bought the heirloom set as a gift for my sister. She hasn't taken it off since. Beautiful packaging too." },
    { name: "Isabella T.", text: "Finally found jewelry that doesn't irritate my sensitive skin. The gold tone is so warm and rich." },
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Hero Section */}
      <section className="relative h-[100dvh] min-h-[700px] flex items-center justify-center bg-[#2C2522] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="font-serif text-6xl md:text-7xl text-white tracking-[2px] mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-white/80 text-lg md:text-xl mb-10 tracking-wide">
            Demi-fine gold jewelry, made with intention.
          </p>
          <Link to="/shop">
            <Button size="lg" className="min-w-[200px]">Shop the Collection</Button>
          </Link>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-px h-12 bg-white/40" />
        </div>
      </section>

      {/* Trust Bar */}
      <div className="border-b border-[#EDE9E3] py-4">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs tracking-[1.5px] text-[#6B635C] text-center">
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
      <section className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs tracking-[2px] text-[#C5A26F] mb-2">DISCOVER</p>
            <h2 className="font-serif text-4xl text-[#2C2522]">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm tracking-wide hover:text-[#C5A26F] transition-colors hidden md:block">
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bestsellers.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </section>

      {/* UGC Reel Row */}
      <section className="bg-[#F5F2ED] py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <p className="text-xs tracking-[2px] text-[#C5A26F] mb-8 text-center">AS SEEN ON YOU</p>
          <div className="ugc-scroll flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
            {ugcItems.map((item, idx) => (
              <div 
                key={item.id} 
                className="flex-shrink-0 w-[180px] md:w-[200px] aspect-[9/16] bg-[#2C2522] relative snap-start overflow-hidden"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-[#C5A26F]/20 text-7xl">✧</div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="font-serif text-white text-sm tracking-wide">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[2px] text-[#C5A26F] mb-2">EXPLORE</p>
          <h2 className="font-serif text-4xl text-[#2C2522]">Shop by Category</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <Link 
              key={idx} 
              to={`/shop?category=${cat.slug}`}
              className="group relative aspect-[16/10] bg-[#F5F2ED] overflow-hidden"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-[#C5A26F]/20 text-8xl">✧</div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="font-serif text-3xl text-white tracking-wide group-hover:text-[#C5A26F] transition-colors">
                  {cat.name}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="border-t border-[#EDE9E3]">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2">
          <div className="aspect-[4/3] md:aspect-auto bg-[#F5F2ED] flex items-center justify-center">
            <div className="text-[#C5A26F]/30 text-[120px]">✧</div>
          </div>
          <div className="flex flex-col justify-center px-8 md:px-16 py-16 md:py-0">
            <p className="text-xs tracking-[2px] text-[#C5A26F] mb-4">OUR PHILOSOPHY</p>
            <h3 className="font-serif text-4xl text-[#2C2522] mb-6 leading-tight">
              Jewelry that feels like an heirloom, not a trend.
            </h3>
            <p className="text-[#6B635C] mb-8 max-w-md">
              Every piece is thoughtfully designed in our studio and crafted with the finest materials. 
              We believe in quiet luxury—timeless designs that become part of your story.
            </p>
            <Link to="/about" className="text-sm tracking-wide hover:text-[#C5A26F] transition-colors inline-flex items-center gap-2">
              Read Our Story →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-[1400px] mx-auto px-6 py-20 border-t border-[#EDE9E3]">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[2px] text-[#C5A26F] mb-2">LOVED BY MANY</p>
          <h2 className="font-serif text-4xl text-[#2C2522]">What Our Customers Say</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="border border-[#EDE9E3] p-8">
              <div className="flex gap-0.5 mb-4 text-[#C5A26F]">
                {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
              </div>
              <p className="text-[#6B635C] mb-6 leading-relaxed">"{t.text}"</p>
              <p className="text-sm tracking-wide">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-[#2C2522] py-16">
        <div className="max-w-md mx-auto px-6 text-center">
          <p className="text-[#C5A26F] text-xs tracking-[2px] mb-3">BECOME PART OF OUR STORY</p>
          <h3 className="font-serif text-3xl text-white mb-4">Join for 10% off your first order</h3>
          <p className="text-white/60 text-sm mb-8">Receive early access to new collections and styling inspiration.</p>
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-5 py-3 bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-[#C5A26F]"
            />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-[#EDE9E3] pt-16 pb-8">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-y-12 mb-16">
            <div className="col-span-2 md:col-span-1">
              <p className="font-serif text-2xl tracking-[3px] mb-4">VELMORA</p>
              <p className="text-xs text-[#6B635C]">Fine Jewelry</p>
            </div>
            
            <div>
              <p className="text-xs tracking-[1.5px] mb-4 text-[#C5A26F]">SHOP</p>
              <div className="space-y-2 text-sm text-[#6B635C]">
                <Link to="/shop" className="block hover:text-[#2C2522]">All Jewelry</Link>
                <Link to="/shop?category=earrings" className="block hover:text-[#2C2522]">Earrings</Link>
                <Link to="/shop?category=necklaces" className="block hover:text-[#2C2522]">Necklaces</Link>
                <Link to="/shop?category=huggies" className="block hover:text-[#2C2522]">Huggies</Link>
              </div>
            </div>
            
            <div>
              <p className="text-xs tracking-[1.5px] mb-4 text-[#C5A26F]">HELP</p>
              <div className="space-y-2 text-sm text-[#6B635C]">
                <a href="#" className="block hover:text-[#2C2522]">Shipping</a>
                <a href="#" className="block hover:text-[#2C2522]">Returns</a>
                <a href="#" className="block hover:text-[#2C2522]">Care Guide</a>
                <a href="#" className="block hover:text-[#2C2522]">Size Guide</a>
              </div>
            </div>
            
            <div>
              <p className="text-xs tracking-[1.5px] mb-4 text-[#C5A26F]">COMPANY</p>
              <div className="space-y-2 text-sm text-[#6B635C]">
                <Link to="/about" className="block hover:text-[#2C2522]">Our Story</Link>
                <Link to="/journal" className="block hover:text-[#2C2522]">Journal</Link>
                <a href="#" className="block hover:text-[#2C2522]">Sustainability</a>
                <a href="#" className="block hover:text-[#2C2522]">Contact</a>
              </div>
            </div>
            
            <div>
              <p className="text-xs tracking-[1.5px] mb-4 text-[#C5A26F]">FOLLOW</p>
              <div className="flex gap-4 text-[#6B635C]">
                <a href="#" className="hover:text-[#2C2522]">IG</a>
                <a href="#" className="hover:text-[#2C2522]">PI</a>
                <a href="#" className="hover:text-[#2C2522]">TT</a>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-[#EDE9E3] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#6B635C]">
            <p>© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
            <div className="flex gap-6">
              <span>Visa</span>
              <span>Mastercard</span>
              <span>Amex</span>
              <span>PayPal</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
