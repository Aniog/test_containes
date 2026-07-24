import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { products, ugcImages } from '../data/products';
import { useCart } from '../context/CartContext';

const Home = () => {
  const { addToCart } = useCart();
  const bestsellers = products.slice(0, 5);

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. My necklace has become my everyday signature piece." },
    { name: "Sofia R.", text: "Beautiful craftsmanship. The huggies are so comfortable I forget I'm wearing them." },
    { name: "Isabella T.", text: "Gifted the heirloom set to my sister. She wears it constantly. Stunning." }
  ];

  return (
    <div className="pt-20">
      {/* 1. Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-[#2C2825] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1600&q=80')] bg-cover bg-center opacity-70" />
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="serif text-6xl md:text-7xl text-white tracking-[0.05em] mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-white/90 text-lg mb-10 tracking-wide">
            Demi-fine gold jewelry, designed for the moments that matter.
          </p>
          <Link to="/shop" className="btn btn-gold inline-block">
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* 2. Trust Bar */}
      <div className="trust-bar bg-white border-b border-[#E5DFD3] py-4">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-wrap justify-center gap-x-10 gap-y-2 text-center text-[#6B665F]">
          <span>Free Worldwide Shipping</span>
          <span>30-Day Returns</span>
          <span>18K Gold Plated</span>
          <span>Hypoallergenic</span>
        </div>
      </div>

      {/* 3. Bestsellers */}
      <section className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="uppercase tracking-[0.2em] text-sm text-[#8B7355]">Signature Pieces</p>
            <h2 className="serif text-4xl mt-2">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm tracking-wider hover:text-[#8B7355] hidden md:block">View All →</Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bestsellers.map((product) => (
            <div key={product.id} className="product-card group">
              <Link to={`/product/${product.id}`} className="block relative overflow-hidden aspect-[4/3] bg-[#E5DFD3]">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                />
                <img 
                  src={product.hoverImage} 
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
              </Link>
              <div className="p-5">
                <Link to={`/product/${product.id}`}>
                  <p className="product-name text-sm tracking-wider mb-1">{product.name}</p>
                </Link>
                <p className="text-[#6B665F] text-sm mb-3">${product.price}</p>
                <button 
                  onClick={() => addToCart(product)}
                  className="text-xs tracking-[0.1em] uppercase border-b border-[#2C2825] hover:text-[#8B7355] hover:border-[#8B7355] transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. UGC Reel Row */}
      <section className="bg-white py-16 border-y border-[#E5DFD3]">
        <div className="max-w-[1400px] mx-auto px-6">
          <p className="uppercase tracking-[0.2em] text-sm text-[#8B7355] mb-8">As Seen On You</p>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {ugcImages.map((ugc) => (
              <div key={ugc.id} className="ugc-card flex-shrink-0 w-[220px] aspect-[9/16] bg-[#E5DFD3] snap-start">
                <img src={ugc.image} alt={ugc.caption} className="w-full h-full object-cover" />
                <div className="caption">
                  <p>{ugc.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Shop by Category */}
      <section className="max-w-[1400px] mx-auto px-6 py-20">
        <h2 className="serif text-4xl mb-10 text-center">Shop by Category</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {['Earrings', 'Necklaces', 'Huggies'].map((cat, idx) => (
            <Link key={idx} to="/shop" className="category-tile aspect-[16/10] bg-[#2C2825] overflow-hidden group">
              <img 
                src={products[idx]?.image || products[0].image} 
                alt={cat}
                className="w-full h-full object-cover grayscale-[0.3] group-hover:scale-105 transition-transform duration-700"
              />
              <div className="overlay">
                <span className="text-white text-xl tracking-[0.15em] serif">{cat}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. Brand Story */}
      <section className="bg-white border-y border-[#E5DFD3]">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2">
          <div className="aspect-[4/3] md:aspect-auto bg-[#E5DFD3]">
            <img 
              src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1000&q=80" 
              alt="Velmora atelier" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center px-8 md:px-16 py-16 md:py-0">
            <div>
              <p className="uppercase tracking-[0.2em] text-sm text-[#8B7355]">Since 2019</p>
              <h3 className="serif text-4xl mt-4 mb-6">Our Story</h3>
              <p className="text-[#6B665F] leading-relaxed mb-8 max-w-md">
                Velmora was born from a desire to create jewelry that feels both precious and wearable. 
                Each piece is thoughtfully designed in our atelier, using only the finest materials.
              </p>
              <Link to="/shop" className="text-sm tracking-wider border-b border-[#2C2825] hover:text-[#8B7355]">
                Discover More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="max-w-[1000px] mx-auto px-6 py-20 text-center">
        <p className="uppercase tracking-[0.2em] text-sm text-[#8B7355] mb-8">Voices from Our Community</p>
        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((t, idx) => (
            <div key={idx}>
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="text-[#C5A46E] fill-[#C5A46E]" />
                ))}
              </div>
              <p className="text-[#6B665F] italic leading-relaxed mb-4">"{t.text}"</p>
              <p className="text-sm tracking-wider">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Newsletter */}
      <section className="bg-[#2C2825] py-16">
        <div className="max-w-md mx-auto px-6 text-center">
          <h3 className="serif text-3xl text-white mb-3">Join for 10% off</h3>
          <p className="text-white/70 text-sm mb-8 tracking-wide">Be the first to know about new arrivals and private events.</p>
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="input flex-1 bg-white/95 border-0"
            />
            <button type="submit" className="btn btn-gold whitespace-nowrap">Subscribe</button>
          </form>
        </div>
      </section>

      {/* 9. Footer */}
      <footer className="bg-[#F8F5F1] border-t border-[#E5DFD3] pt-16 pb-8">
        <div className="max-w-[1400px] mx-auto px-6 grid md:grid-cols-4 gap-y-12 text-sm">
          <div>
            <p className="serif text-xl tracking-[0.15em] mb-4">VELMORA</p>
            <p className="text-[#6B665F]">Fine jewelry for the modern woman.</p>
          </div>
          <div>
            <p className="uppercase tracking-[0.15em] mb-4 text-[#8B7355]">Shop</p>
            <div className="space-y-2 text-[#6B665F]">
              <p><Link to="/shop">All Jewelry</Link></p>
              <p><Link to="/shop">Earrings</Link></p>
              <p><Link to="/shop">Necklaces</Link></p>
              <p><Link to="/shop">Huggies</Link></p>
            </div>
          </div>
          <div>
            <p className="uppercase tracking-[0.15em] mb-4 text-[#8B7355]">Help</p>
            <div className="space-y-2 text-[#6B665F]">
              <p>Shipping</p>
              <p>Returns</p>
              <p>Care Guide</p>
              <p>Contact</p>
            </div>
          </div>
          <div>
            <p className="uppercase tracking-[0.15em] mb-4 text-[#8B7355]">Company</p>
            <div className="space-y-2 text-[#6B665F]">
              <p>Our Story</p>
              <p>Journal</p>
              <p>Stockists</p>
            </div>
            <div className="flex gap-4 mt-6 text-[#8B7355]">
              <span>IG</span>
              <span>PT</span>
            </div>
          </div>
        </div>
        <div className="text-center text-xs text-[#6B665F] mt-16 tracking-wider">
          © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;