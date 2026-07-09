import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const Home = ({ products, addToCart }) => {
  const bestsellers = products.slice(0, 5);
  const earrings = products.filter(p => p.category === 'Earrings')[0];
  const necklaces = products.filter(p => p.category === 'Necklaces')[0];
  const huggies = products.filter(p => p.category === 'Huggies')[0];

  const ugcItems = [
    { id: 1, caption: "Everyday elegance", img: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&q=80" },
    { id: 2, caption: "Layered with love", img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80" },
    { id: 3, caption: "Golden hour glow", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80" },
    { id: 4, caption: "Timeless beauty", img: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&q=80" },
    { id: 5, caption: "Made to last", img: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&q=80" },
  ];

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. I wear my huggies every day.", rating: 5 },
    { name: "Sofia R.", text: "Beautiful packaging and even more beautiful jewelry.", rating: 5 },
    { name: "Isabella T.", text: "My go-to for meaningful gifts. Always perfect.", rating: 5 },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[100dvh] min-h-[700px] flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-[#1A1816]">
          <img 
            src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=2000&q=80" 
            alt="Velmora Jewelry"
            className="w-full h-full object-cover opacity-75"
          />
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="serif text-6xl md:text-7xl text-white tracking-wide mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-white/80 text-lg mb-10 max-w-md mx-auto">
            Demi-fine gold jewelry for the modern woman
          </p>
          <Link to="/shop" className="btn btn-gold inline-block">
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="trust-bar py-4 border-b border-[#E5E0D8] bg-white">
        <div className="max-w-5xl mx-auto px-6 flex flex-wrap justify-center gap-x-8 gap-y-2 text-center">
          <span>Free Worldwide Shipping</span>
          <span>30-Day Returns</span>
          <span>18K Gold Plated</span>
          <span>Hypoallergenic</span>
        </div>
      </div>

      {/* Bestsellers */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs tracking-[0.2em] text-[#6B6560] mb-2">DISCOVER</p>
            <h2 className="serif text-4xl">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm tracking-widest text-[#B8976F] hover:underline hidden md:block">
            VIEW ALL →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bestsellers.map(product => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      </section>

      {/* UGC Reel */}
      <section className="bg-[#F5F2ED] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs tracking-[0.2em] text-[#6B6560] mb-8 text-center">AS SEEN ON YOU</p>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {ugcItems.map(item => (
              <div key={item.id} className="ugc-card">
                <img src={item.img} alt={item.caption} />
                <div className="ugc-caption">{item.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-xs tracking-[0.2em] text-[#6B6560] mb-8 text-center">EXPLORE</p>
        <h2 className="serif text-4xl text-center mb-12">Shop by Category</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Earrings", link: "/shop?category=Earrings", img: earrings?.image },
            { title: "Necklaces", link: "/shop?category=Necklaces", img: necklaces?.image },
            { title: "Huggies", link: "/shop?category=Huggies", img: huggies?.image },
          ].map((cat, i) => (
            <Link key={i} to={cat.link} className="category-tile group">
              <img src={cat.img} alt={cat.title} />
              <div className="category-overlay">
                <span className="text-white text-xl tracking-widest">{cat.title}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div className="aspect-[4/3] bg-[#F5F2ED]">
          <img 
            src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1200&q=80" 
            alt="Our Craft" 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="text-xs tracking-[0.2em] text-[#6B6560] mb-4">SINCE 2018</p>
          <h2 className="serif text-5xl mb-6">Our Story</h2>
          <p className="text-[#6B6560] mb-8 leading-relaxed">
            Velmora was founded with a singular vision: to create demi-fine jewelry that feels as precious as fine jewelry, 
            without the precious price tag. Every piece is designed in our studio and crafted by skilled artisans using 
            time-honored techniques.
          </p>
          <Link to="/about" className="btn btn-outline inline-block">Learn More</Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs tracking-[0.2em] text-[#6B6560] mb-8 text-center">LOVED BY MANY</p>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="text-center">
                <div className="stars flex justify-center mb-4">
                  {[...Array(t.rating)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                </div>
                <p className="text-[#6B6560] mb-4">"{t.text}"</p>
                <p className="text-sm tracking-widest">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter py-20">
        <div className="max-w-md mx-auto px-6 text-center">
          <h3 className="serif text-3xl mb-3">Join for 10% off</h3>
          <p className="text-[#A39B93] mb-8 text-sm">Be the first to know about new arrivals and exclusive offers.</p>
          <form className="flex" onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing!'); }}>
            <input type="email" placeholder="Your email address" className="flex-1" required />
            <button type="submit" className="btn btn-gold px-8">Subscribe</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-y-12">
          <div>
            <div className="serif text-2xl tracking-[0.2em] mb-4">VELMORA</div>
            <p className="text-xs text-[#A39B93]">Fine jewelry for the modern woman</p>
          </div>
          <div>
            <p className="text-xs tracking-widest mb-4 text-[#A39B93]">SHOP</p>
            <div className="space-y-2 text-sm">
              <Link to="/shop" className="footer-link block">All Jewelry</Link>
              <Link to="/shop?category=Earrings" className="footer-link block">Earrings</Link>
              <Link to="/shop?category=Necklaces" className="footer-link block">Necklaces</Link>
              <Link to="/shop?category=Huggies" className="footer-link block">Huggies</Link>
            </div>
          </div>
          <div>
            <p className="text-xs tracking-widest mb-4 text-[#A39B93]">HELP</p>
            <div className="space-y-2 text-sm">
              <a href="#" className="footer-link block">Shipping</a>
              <a href="#" className="footer-link block">Returns</a>
              <a href="#" className="footer-link block">Care Guide</a>
              <a href="#" className="footer-link block">Contact</a>
            </div>
          </div>
          <div>
            <p className="text-xs tracking-widest mb-4 text-[#A39B93]">COMPANY</p>
            <div className="space-y-2 text-sm">
              <Link to="/about" className="footer-link block">Our Story</Link>
              <Link to="/journal" className="footer-link block">Journal</Link>
              <a href="#" className="footer-link block">Sustainability</a>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-xs text-[#A39B93]">
          © {new Date().getFullYear()} Velmora. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;