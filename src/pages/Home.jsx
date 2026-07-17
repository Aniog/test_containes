import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const Home = () => {
  const { addToCart } = useCart();
  const bestsellers = products.slice(0, 5);

  const ugcItems = [
    { id: 1, caption: "Morning light", image: "https://picsum.photos/id/1011/400/600" },
    { id: 2, caption: "Golden hour", image: "https://picsum.photos/id/1005/400/600" },
    { id: 3, caption: "Everyday elegance", image: "https://picsum.photos/id/1011/400/600" },
    { id: 4, caption: "Timeless beauty", image: "https://picsum.photos/id/1005/400/600" },
    { id: 5, caption: "Soft glow", image: "https://picsum.photos/id/1011/400/600" },
  ];

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. My necklace has become my everyday signature piece." },
    { name: "Sophia R.", text: "Beautiful packaging and the jewelry exceeded my expectations. Will be back for more." },
    { name: "Isabella T.", text: "The huggies are so comfortable. I forget I'm wearing them, which is the highest compliment." },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[90vh] flex items-center justify-center bg-[#1a1816] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/id/1011/1600/900')] bg-cover bg-center opacity-70" />
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="serif text-6xl md:text-7xl text-white tracking-[0.1em] mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-white/80 text-lg mb-10 tracking-wide">
            Demi-fine jewelry for the modern woman
          </p>
          <Link to="/shop" className="btn btn-gold inline-block">
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="border-b border-[#e5e0d8] py-4">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs tracking-[0.15em] text-[#6b635c]">
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
            <p className="text-xs tracking-[0.2em] text-[#6b635c] mb-2">DISCOVER</p>
            <h2 className="serif text-4xl">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm tracking-wide hover:text-[#c5a26f] hidden md:block">
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bestsellers.map((product) => (
            <div key={product.id} className="product-card group">
              <Link to={`/product/${product.id}`}>
                <div className="product-image-container bg-[#f5f2ed]">
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
                  <p className="product-name text-sm tracking-wider mb-1">{product.name}</p>
                </Link>
                <p className="text-sm text-[#6b635c] mb-3">${product.price}</p>
                <button
                  onClick={() => addToCart(product)}
                  className="quick-add btn btn-primary text-xs py-2.5 px-6"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* UGC Reel */}
      <section className="bg-[#f5f2ed] py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <p className="text-xs tracking-[0.2em] text-[#6b635c] mb-8 text-center">AS SEEN ON YOU</p>
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
      <section className="max-w-[1400px] mx-auto px-6 py-20">
        <p className="text-xs tracking-[0.2em] text-[#6b635c] mb-8 text-center">EXPLORE</p>
        <h2 className="serif text-4xl text-center mb-12">Shop by Category</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {['Earrings', 'Necklaces', 'Huggies'].map((cat, idx) => (
            <Link key={idx} to="/shop" className="category-tile group">
              <img
                src={products[idx % products.length].image}
                alt={cat}
                className="w-full h-full object-cover"
              />
              <div className="category-overlay">
                <span className="text-white text-lg tracking-[0.15em]">{cat}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="max-w-[1400px] mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/3] bg-[#f5f2ed]">
            <img
              src="https://picsum.photos/id/1011/800/600"
              alt="Our atelier"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] text-[#6b635c] mb-4">EST. 2018</p>
            <h2 className="serif text-4xl mb-6">Our Story</h2>
            <p className="text-[#6b635c] leading-relaxed mb-8">
              Velmora was born from a desire to create jewelry that feels both precious and wearable. 
              Each piece is thoughtfully designed in our studio and crafted with the finest materials, 
              ensuring beauty that lasts a lifetime.
            </p>
            <Link to="/" className="btn btn-outline">Learn More</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#faf8f5] py-20">
        <div className="max-w-[1400px] mx-auto px-6">
          <p className="text-xs tracking-[0.2em] text-[#6b635c] mb-8 text-center">LOVED BY MANY</p>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div key={idx} className="testimonial">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="#c5a26f" color="#c5a26f" />
                  ))}
                </div>
                <p className="text-[#2c2825] mb-6 leading-relaxed">"{t.text}"</p>
                <p className="text-sm text-[#6b635c]">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter py-20">
        <div className="max-w-md mx-auto px-6 text-center">
          <h3 className="serif text-3xl mb-4">Join for 10% off</h3>
          <p className="text-white/70 mb-8 text-sm tracking-wide">
            Be the first to know about new arrivals and exclusive offers.
          </p>
          <form className="flex gap-3" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-white/10 border border-white/30 px-4 py-3 text-sm placeholder:text-white/50 focus:outline-none focus:border-white/60"
            />
            <button type="submit" className="btn btn-gold">Subscribe</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1816] text-white/60 py-16">
        <div className="max-w-[1400px] mx-auto px-6 grid md:grid-cols-4 gap-y-12">
          <div>
            <p className="serif text-white text-xl tracking-[0.2em] mb-4">VELMORA</p>
            <p className="text-sm">Fine jewelry for the modern woman.</p>
          </div>
          <div>
            <p className="text-white text-sm tracking-wider mb-4">SHOP</p>
            <div className="space-y-2 text-sm">
              <Link to="/shop" className="block hover:text-white">All Jewelry</Link>
              <Link to="/shop" className="block hover:text-white">Earrings</Link>
              <Link to="/shop" className="block hover:text-white">Necklaces</Link>
              <Link to="/shop" className="block hover:text-white">Huggies</Link>
            </div>
          </div>
          <div>
            <p className="text-white text-sm tracking-wider mb-4">HELP</p>
            <div className="space-y-2 text-sm">
              <a href="#" className="block hover:text-white">Shipping</a>
              <a href="#" className="block hover:text-white">Returns</a>
              <a href="#" className="block hover:text-white">Care Guide</a>
              <a href="#" className="block hover:text-white">Contact</a>
            </div>
          </div>
          <div>
            <p className="text-white text-sm tracking-wider mb-4">COMPANY</p>
            <div className="space-y-2 text-sm">
              <a href="#" className="block hover:text-white">About</a>
              <a href="#" className="block hover:text-white">Journal</a>
              <a href="#" className="block hover:text-white">Sustainability</a>
            </div>
            <div className="flex gap-4 mt-6 text-white">
              <a href="#" className="hover:text-[#c5a26f]">IG</a>
              <a href="#" className="hover:text-[#c5a26f]">PT</a>
            </div>
          </div>
        </div>
        <div className="text-center text-xs mt-16 tracking-wider">© {new Date().getFullYear()} Velmora. All rights reserved.</div>
      </footer>
    </div>
  );
};

export default Home;