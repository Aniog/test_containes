import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const Home = () => {
  const { addToCart } = useCart();

  const bestsellers = products.slice(0, 5);
  
  const ugcItems = [
    { id: 1, caption: "Morning light", img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80" },
    { id: 2, caption: "Golden hour", img: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&q=80" },
    { id: 3, caption: "Effortless", img: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=400&q=80" },
    { id: 4, caption: "Timeless", img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=80" },
    { id: 5, caption: "Everyday luxury", img: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&q=80" },
  ];

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. My huggies have become my daily signature." },
    { name: "Sofia R.", text: "Beautiful packaging and even more beautiful jewelry. A treasured gift." },
    { name: "Isabella K.", text: "Finally found pieces that feel truly special without being ostentatious." },
  ];

  const handleAddToCart = (product, e) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[100dvh] min-h-[700px] flex items-center justify-center bg-[#1A1816] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce45e?w=2000&q=80')] bg-cover bg-center opacity-70" />
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="font-serif text-[56px] md:text-[72px] leading-[1.05] tracking-[-0.02em] text-white mb-6">
            Crafted to be<br />Treasured
          </h1>
          <p className="text-[#D4BFA3] text-lg tracking-[0.05em] mb-10">
            Demi-fine jewelry for the modern woman
          </p>
          <Link to="/shop" className="btn btn-primary inline-block">
            Shop the Collection
          </Link>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-px h-12 bg-[#B8976E]/50" />
        </div>
      </section>

      {/* Trust Bar */}
      <div className="border-b border-[#E5E0D8] py-4">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs tracking-[0.12em] text-[#6B6560] text-center">
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
      <section className="max-w-[1400px] mx-auto px-6 pt-20 pb-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs tracking-[0.15em] text-[#6B6560] mb-2">DISCOVER</p>
            <h2 className="font-serif text-4xl tracking-[-0.01em]">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm tracking-[0.08em] underline underline-offset-4">View All</Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {bestsellers.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} className="product-card group block">
              <div className="relative aspect-[4/3.5] bg-[#F0EBE3] overflow-hidden">
                <img 
                  src={product.images[0]} 
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {product.images[1] && (
                  <img 
                    src={product.images[1]} 
                    alt={product.name}
                    className="secondary absolute inset-0 w-full h-full object-cover"
                  />
                )}
                <button 
                  onClick={(e) => handleAddToCart(product, e)}
                  className="quick-add btn btn-gold text-xs py-2.5 px-6"
                >
                  Quick Add
                </button>
              </div>
              <div className="p-4">
                <p className="product-name text-sm tracking-[0.12em] mb-1 pr-2">{product.name}</p>
                <p className="text-sm text-[#6B6560]">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* UGC Reel */}
      <section className="bg-[#1A1816] py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <p className="text-center text-[#D4BFA3] text-xs tracking-[0.15em] mb-8">AS SEEN ON YOU</p>
          <div className="flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {ugcItems.map((item) => (
              <div key={item.id} className="ugc-card w-[180px] md:w-[200px] aspect-[9/16] bg-[#2C2825] snap-start">
                <img src={item.img} alt={item.caption} className="w-full h-full object-cover" />
                <div className="ugc-caption">
                  <p className="font-serif text-lg tracking-[0.08em]">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="max-w-[1400px] mx-auto px-6 py-20">
        <p className="text-xs tracking-[0.15em] text-[#6B6560] mb-2 text-center">EXPLORE</p>
        <h2 className="font-serif text-4xl tracking-[-0.01em] text-center mb-12">Shop by Category</h2>
        
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { label: 'Earrings', path: '/shop?category=Earrings', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80' },
            { label: 'Necklaces', path: '/shop?category=Necklaces', img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80' },
            { label: 'Huggies', path: '/shop?category=Huggies', img: 'https://images.unsplash.com/photo-1506630448388-4bc034007a7b?w=800&q=80' },
          ].map((cat) => (
            <Link key={cat.label} to={cat.path} className="category-tile aspect-[16/10] block overflow-hidden bg-[#F0EBE3]">
              <img src={cat.img} alt={cat.label} className="w-full h-full object-cover" />
              <div className="category-label">
                <span className="font-serif tracking-[0.15em]">{cat.label}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="border-t border-[#E5E0D8]">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2">
          <div className="aspect-[4/3] md:aspect-auto bg-[url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce45e?w=1200&q=80')] bg-cover bg-center" />
          <div className="px-8 md:px-16 py-16 md:py-20 flex flex-col justify-center">
            <p className="text-xs tracking-[0.15em] text-[#6B6560] mb-4">EST. 2019</p>
            <h3 className="font-serif text-[42px] leading-none tracking-[-0.02em] mb-8">Our Story</h3>
            <p className="text-[#6B6560] leading-relaxed mb-8 max-w-md">
              Velmora was born from a desire to create jewelry that feels both elevated and wearable—pieces that become part of your daily ritual, not just special occasions.
            </p>
            <Link to="/" className="text-sm tracking-[0.08em] underline underline-offset-4 w-fit">Learn More</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-[1000px] mx-auto px-6 py-20 text-center">
        <p className="text-xs tracking-[0.15em] text-[#6B6560] mb-8">IN THEIR WORDS</p>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="px-4">
              <div className="stars flex justify-center gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-[#6B6560] italic leading-relaxed mb-4">"{t.text}"</p>
              <p className="text-sm tracking-[0.08em]">{t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-[#1A1816] py-16">
        <div className="max-w-md mx-auto px-6 text-center">
          <p className="font-serif text-3xl tracking-[-0.01em] text-white mb-3">Join for 10% off</p>
          <p className="text-[#D4BFA3] text-sm tracking-[0.05em] mb-8">Be the first to know about new arrivals and stories.</p>
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 bg-[#2C2825] border-[#3D3935] text-white placeholder:text-[#6B6560]"
            />
            <button type="submit" className="btn btn-primary whitespace-nowrap">Subscribe</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#F8F6F3] border-t border-[#E5E0D8] pt-14 pb-10">
        <div className="max-w-[1400px] mx-auto px-6 grid md:grid-cols-4 gap-y-12 text-sm">
          <div>
            <p className="font-serif text-xl tracking-[0.2em] mb-6">VELMORA</p>
          </div>
          
          <div>
            <p className="tracking-[0.1em] text-[#6B6560] mb-4">Shop</p>
            <div className="space-y-2 text-[#2C2825]">
              <Link to="/shop" className="block hover:underline">All Jewelry</Link>
              <Link to="/shop?category=Earrings" className="block hover:underline">Earrings</Link>
              <Link to="/shop?category=Necklaces" className="block hover:underline">Necklaces</Link>
              <Link to="/shop?category=Huggies" className="block hover:underline">Huggies</Link>
            </div>
          </div>
          
          <div>
            <p className="tracking-[0.1em] text-[#6B6560] mb-4">Help</p>
            <div className="space-y-2 text-[#2C2825]">
              <a href="#" className="block hover:underline">Shipping</a>
              <a href="#" className="block hover:underline">Returns</a>
              <a href="#" className="block hover:underline">Care Guide</a>
              <a href="#" className="block hover:underline">Contact</a>
            </div>
          </div>
          
          <div>
            <p className="tracking-[0.1em] text-[#6B6560] mb-4">Company</p>
            <div className="space-y-2 text-[#2C2825]">
              <a href="#" className="block hover:underline">Our Story</a>
              <a href="#" className="block hover:underline">Journal</a>
              <a href="#" className="block hover:underline">Stockists</a>
            </div>
            <div className="flex gap-4 mt-6 text-[#6B6560]">
              <a href="#" aria-label="Instagram">IG</a>
              <a href="#" aria-label="Pinterest">PT</a>
            </div>
          </div>
        </div>
        
        <div className="max-w-[1400px] mx-auto px-6 mt-16 pt-8 border-t border-[#E5E0D8] flex flex-col md:flex-row justify-between text-xs text-[#6B6560] tracking-[0.08em]">
          <p>© {new Date().getFullYear()} Velmora. All rights reserved.</p>
          <div className="flex gap-6 mt-3 md:mt-0">
            <span>Privacy</span>
            <span>Terms</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;