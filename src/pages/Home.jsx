import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

function Home() {
  const { addToCart } = useCart();

  // Bestsellers - first 5 products
  const bestsellers = products.slice(0, 5);

  // UGC mock data
  const ugcItems = [
    { id: 1, caption: "Morning light", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80" },
    { id: 2, caption: "Everyday elegance", image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&q=80" },
    { id: 3, caption: "Golden hour", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80" },
    { id: 4, caption: "Quiet luxury", image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=400&q=80" },
    { id: 5, caption: "Timeless", image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=80" },
  ];

  // Testimonials
  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. I've worn my huggies every day for six months and they still look brand new." },
    { name: "Sofia R.", text: "Bought the Royal Heirloom Set as a gift for my sister. She was absolutely delighted." },
    { name: "Isabella T.", text: "Finally found jewelry that doesn't irritate my sensitive skin. The gold is so warm and beautiful." },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[100dvh] min-h-[700px] flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-[#2C2825]">
          <img 
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce45e?w=2000&q=90" 
            alt="Velmora Fine Jewelry"
            className="w-full h-full object-cover opacity-90"
          />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="serif text-6xl md:text-7xl text-white tracking-[-0.02em] mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-10 max-w-md mx-auto">
            Demi-fine gold jewelry, designed for the moments that matter.
          </p>
          <Link to="/shop" className="btn btn-primary inline-block">
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="border-y border-[#E5DFD3] py-4 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs tracking-[0.15em] uppercase text-[#6B665F] text-center">
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
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="uppercase tracking-[0.2em] text-xs text-[#6B665F] mb-2">Signature Pieces</p>
            <h2 className="serif text-4xl">Bestsellers</h2>
          </div>
          <Link to="/shop" className="hidden md:block text-sm tracking-[0.1em] uppercase hover:text-[#B8976F] transition-colors">
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bestsellers.map((product) => (
            <div key={product.id} className="product-card group">
              <Link to={`/product/${product.id}`} className="block">
                <div className="product-image-container bg-[#F8F5F1]">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="product-image product-image-primary"
                  />
                  <img 
                    src={product.imageSecondary} 
                    alt={product.name}
                    className="product-image product-image-secondary"
                  />
                </div>
              </Link>
              <div className="p-5">
                <Link to={`/product/${product.id}`}>
                  <p className="product-name text-sm tracking-[0.15em] mb-1 pr-8">{product.name}</p>
                </Link>
                <p className="text-sm text-[#6B665F] mb-3">${product.price}</p>
                <button 
                  onClick={() => addToCart(product)}
                  className="quick-add btn btn-outline text-xs"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* UGC Reel Row */}
      <section className="bg-white py-16 border-y border-[#E5DFD3]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="uppercase tracking-[0.2em] text-xs text-[#6B665F] mb-8 text-center">As Seen On You</p>
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
      <section className="max-w-7xl mx-auto px-6 py-20">
        <p className="uppercase tracking-[0.2em] text-xs text-[#6B665F] mb-8 text-center">Discover</p>
        <h2 className="serif text-4xl text-center mb-12">Shop by Category</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Earrings", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80" },
            { name: "Necklaces", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80" },
            { name: "Huggies", image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80" },
          ].map((cat) => (
            <Link key={cat.name} to="/shop" className="category-tile group">
              <img src={cat.image} alt={cat.name} />
              <div className="category-overlay">
                <span className="text-white text-lg tracking-[0.15em] uppercase">{cat.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="bg-white border-y border-[#E5DFD3]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2">
          <div className="aspect-[4/3] md:aspect-auto bg-[#2C2825]">
            <img 
              src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce45e?w=1200&q=80" 
              alt="Our atelier"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center p-10 md:p-16">
            <p className="uppercase tracking-[0.2em] text-xs text-[#6B665F] mb-4">Since 2018</p>
            <h2 className="serif text-4xl mb-6">Our Story</h2>
            <p className="body-text text-[#6B665F] mb-8 max-w-md">
              Velmora was born from a desire to create jewelry that feels as precious as the moments it marks. 
              Each piece is thoughtfully designed in our studio and crafted with care using the finest materials.
            </p>
            <Link to="/" className="btn btn-outline self-start">Learn More</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <p className="uppercase tracking-[0.2em] text-xs text-[#6B665F] mb-8 text-center">Voices</p>
        <h2 className="serif text-4xl text-center mb-12">What Our Clients Say</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial">
              <div className="stars mb-4">★★★★★</div>
              <p className="body-text text-[#6B665F] mb-6">"{t.text}"</p>
              <p className="text-sm tracking-[0.1em] uppercase">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter py-16">
        <div className="max-w-md mx-auto px-6 text-center">
          <h3 className="serif text-3xl mb-3 text-white">Join for 10% off</h3>
          <p className="text-white/70 mb-8 text-sm">Be the first to know about new arrivals and exclusive offers.</p>
          <form className="flex" onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing!'); }}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-5 py-3 text-sm bg-white/10 border border-white/30 text-white placeholder:text-white/50 focus:outline-none focus:border-white"
              required
            />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C2825] text-white/70 py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-y-12">
          <div>
            <div className="serif text-2xl tracking-[0.2em] text-white mb-4">VELMORA</div>
            <p className="text-sm">Fine jewelry, thoughtfully made.</p>
          </div>
          
          <div>
            <div className="uppercase tracking-[0.15em] text-xs mb-4 text-white">Shop</div>
            <div className="space-y-2 text-sm">
              <Link to="/shop" className="block hover:text-white">All Jewelry</Link>
              <Link to="/shop" className="block hover:text-white">Earrings</Link>
              <Link to="/shop" className="block hover:text-white">Necklaces</Link>
              <Link to="/shop" className="block hover:text-white">Huggies</Link>
            </div>
          </div>
          
          <div>
            <div className="uppercase tracking-[0.15em] text-xs mb-4 text-white">Help</div>
            <div className="space-y-2 text-sm">
              <a href="#" className="block hover:text-white">Shipping</a>
              <a href="#" className="block hover:text-white">Returns</a>
              <a href="#" className="block hover:text-white">Care Guide</a>
              <a href="#" className="block hover:text-white">Contact</a>
            </div>
          </div>
          
          <div>
            <div className="uppercase tracking-[0.15em] text-xs mb-4 text-white">Company</div>
            <div className="space-y-2 text-sm">
              <a href="#" className="block hover:text-white">Our Story</a>
              <a href="#" className="block hover:text-white">Journal</a>
              <a href="#" className="block hover:text-white">Stockists</a>
            </div>
            <div className="flex gap-4 mt-6 text-white">
              <a href="#" aria-label="Instagram">IG</a>
              <a href="#" aria-label="Pinterest">PT</a>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 text-xs tracking-[0.1em] flex flex-col md:flex-row justify-between gap-4">
          <div>© {new Date().getFullYear()} Velmora. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;