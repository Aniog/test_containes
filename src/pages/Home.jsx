import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { toast } from 'sonner';

const Home = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (product, e) => {
    e.preventDefault();
    addToCart(product);
    toast.success(`Added ${product.name} to cart`);
  };

  const bestsellers = products.slice(0, 5);
  const ugcCaptions = [
    "Golden hour glow",
    "Everyday elegance",
    "Treasured forever",
    "Soft light, strong lines",
    "Worn with intention",
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[100dvh] min-h-[700px] flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-[#2C2825]">
          <img 
            src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=2000&q=90" 
            alt="Warm-lit gold jewelry on model"
            className="w-full h-full object-cover opacity-90"
          />
        </div>
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="serif text-6xl md:text-7xl text-white tracking-[0.03em] mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-white/90 text-lg mb-10 tracking-wide">
            Demi-fine gold jewelry, made with intention.
          </p>
          <Link to="/shop" className="btn btn-primary inline-block">
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="border-b border-[#E5DFD3] py-4 text-center text-xs tracking-[0.12em] text-[#6B665F] flex flex-wrap justify-center gap-x-8 gap-y-1">
        <span>Free Worldwide Shipping</span>
        <span>30-Day Returns</span>
        <span>18K Gold Plated</span>
        <span>Hypoallergenic</span>
      </div>

      {/* Bestsellers */}
      <section className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <h2 className="serif text-4xl">Bestsellers</h2>
          <Link to="/shop" className="text-sm tracking-widest hover:text-[#B89778]">VIEW ALL →</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bestsellers.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} className="product-card group block">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#F1EDE5]">
                <img src={product.image} alt={product.name} className="absolute inset-0 w-full h-full object-cover" />
                <img src={product.hoverImage} alt={product.name} className="secondary absolute inset-0 w-full h-full object-cover" />
                <button 
                  onClick={(e) => handleAddToCart(product, e)}
                  className="quick-add btn btn-gold text-xs py-2.5 px-6"
                >
                  Quick Add
                </button>
              </div>
              <div className="p-4">
                <p className="product-name text-sm tracking-wider mb-1">{product.name}</p>
                <p className="text-[#6B665F] text-sm">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* UGC Reel Row */}
      <section className="bg-[#2C2825] py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <p className="text-center text-white/60 text-xs tracking-[0.15em] mb-8">AS SEEN ON YOU</p>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {[1,2,3,4,5].map((i, idx) => (
              <div key={i} className="ugc-card flex-shrink-0 w-[180px] aspect-[9/16] bg-[#3A3632] snap-start">
                <img 
                  src={`https://images.unsplash.com/photo-${['1535632066927-ab7c9ab60908','1599643478518-a784e5dc4c8f','1506630448388-4e683c67ddb0','1588444837495-c6cfeb53f32d','1602173574767-37ac01994b2a'][idx]}?w=600&q=90`}
                  alt="UGC"
                  className="w-full h-full object-cover"
                />
                <div className="caption">{ugcCaptions[idx]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="max-w-[1400px] mx-auto px-6 py-20">
        <h2 className="serif text-4xl text-center mb-12">Shop by Category</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {['Earrings', 'Necklaces', 'Huggies'].map((cat, idx) => (
            <Link 
              key={cat} 
              to={`/shop?category=${cat}`}
              className="category-tile aspect-[16/10] bg-[#2C2825] overflow-hidden block"
            >
              <img 
                src={['https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=900&q=90','https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=900&q=90','https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=900&q=90'][idx]}
                alt={cat}
                className="w-full h-full object-cover"
              />
              <span className="label">{cat}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="max-w-[1400px] mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div className="aspect-[4/3] bg-[#F1EDE5]">
          <img 
            src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1000&q=90" 
            alt="Our atelier"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h2 className="serif text-5xl mb-6">Our Story</h2>
          <p className="text-[#6B665F] leading-relaxed mb-8">
            Velmora was born from a desire to create jewelry that feels both timeless and personal. 
            Each piece is thoughtfully designed in our studio and crafted with the finest materials, 
            meant to be worn, loved, and passed down.
          </p>
          <Link to="/about" className="btn btn-outline inline-block">Learn More</Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20">
        <div className="max-w-[1100px] mx-auto px-6">
          <h2 className="serif text-4xl text-center mb-14">Words from our community</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Elena M.", text: "The quality is exceptional. My huggies have become my everyday staple." },
              { name: "Sofia R.", text: "Beautiful packaging and even more beautiful jewelry. A gift I will treasure." },
              { name: "Maya K.", text: "Finally found pieces that don't irritate my skin. The gold tone is perfect." },
            ].map((t, i) => (
              <div key={i} className="text-center">
                <div className="stars flex justify-center mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                </div>
                <p className="text-[#6B665F] italic mb-4">"{t.text}"</p>
                <p className="text-sm tracking-widest">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-[#2C2825] py-16 text-center px-6">
        <h3 className="serif text-white text-3xl mb-3">Join for 10% off your first order</h3>
        <p className="text-white/70 mb-8 text-sm tracking-wide">Be the first to know about new arrivals and stories.</p>
        <form className="max-w-sm mx-auto flex gap-3" onSubmit={(e) => { e.preventDefault(); toast.success('Thank you for subscribing'); }}>
          <input type="email" placeholder="Your email address" className="input flex-1" required />
          <button type="submit" className="btn btn-primary whitespace-nowrap">Subscribe</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-[#F8F5F1] border-t border-[#E5DFD3] pt-14 pb-10 text-sm">
        <div className="max-w-[1400px] mx-auto px-6 grid md:grid-cols-4 gap-y-10">
          <div>
            <div className="serif text-xl tracking-[0.15em] mb-4">VELMORA</div>
            <p className="text-[#6B665F] text-xs">Fine jewelry, thoughtfully made.</p>
          </div>
          <div>
            <div className="filter-label mb-4">Shop</div>
            <div className="space-y-2 text-[#6B665F]">
              <Link to="/shop" className="block hover:text-[#B89778]">All Jewelry</Link>
              <Link to="/shop?category=Earrings" className="block hover:text-[#B89778]">Earrings</Link>
              <Link to="/shop?category=Necklaces" className="block hover:text-[#B89778]">Necklaces</Link>
              <Link to="/shop?category=Huggies" className="block hover:text-[#B89778]">Huggies</Link>
            </div>
          </div>
          <div>
            <div className="filter-label mb-4">Help</div>
            <div className="space-y-2 text-[#6B665F]">
              <div>Shipping</div>
              <div>Returns</div>
              <div>Care Guide</div>
              <div>Contact</div>
            </div>
          </div>
          <div>
            <div className="filter-label mb-4">Company</div>
            <div className="space-y-2 text-[#6B665F]">
              <Link to="/about" className="block hover:text-[#B89778]">Our Story</Link>
              <Link to="/journal" className="block hover:text-[#B89778]">Journal</Link>
              <div>Stockists</div>
            </div>
            <div className="mt-6 text-[#6B665F] text-xs">© {new Date().getFullYear()} Velmora</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;