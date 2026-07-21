import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Home = () => {
  const bestsellers = products.slice(0, 5);
  
  const ugcItems = [
    { id: 1, caption: "Everyday elegance", img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80" },
    { id: 2, caption: "Golden hour glow", img: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&q=80" },
    { id: 3, caption: "Effortless beauty", img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=80" },
    { id: 4, caption: "Timeless pieces", img: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&q=80" },
    { id: 5, caption: "Quiet luxury", img: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=400&q=80" },
  ];

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. My necklace has become my signature piece." },
    { name: "Sophia R.", text: "Beautiful packaging and even more beautiful jewelry. A wonderful gift." },
    { name: "Isabella T.", text: "I wear my huggies every day. They never tarnish and always look new." },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[100dvh] min-h-[700px] flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-[#2C2823]">
          <img
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=2000&q=80"
            alt="Velmora Jewelry"
            className="w-full h-full object-cover opacity-75"
          />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="serif text-6xl md:text-7xl text-white tracking-[0.1em] mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-white/90 text-lg mb-10 tracking-wide">
            Demi-fine gold jewelry for the modern woman
          </p>
          <Link to="/shop" className="btn btn-gold inline-block">
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="border-b border-[#E5DFD3] py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs tracking-[0.15em] text-[#7A7368] text-center">
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
            <p className="text-xs tracking-[0.2em] text-[#7A7368] mb-2">DISCOVER</p>
            <h2 className="serif text-4xl">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm tracking-wider hover:text-[#8B7355] hidden md:block">
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* UGC Reel */}
      <section className="bg-[#F8F5F1] py-16 border-y border-[#E5DFD3]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs tracking-[0.2em] text-[#7A7368] mb-8 text-center">AS SEEN ON YOU</p>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
            {ugcItems.map((item) => (
              <div key={item.id} className="ugc-card w-[180px] md:w-[200px] aspect-[9/16] rounded overflow-hidden snap-start">
                <img src={item.img} alt={item.caption} className="w-full h-full object-cover" />
                <div className="ugc-caption">
                  <p className="serif text-sm tracking-wide">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-xs tracking-[0.2em] text-[#7A7368] mb-8 text-center">EXPLORE</p>
        <h2 className="serif text-4xl text-center mb-12">Shop by Category</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { name: "Earrings", path: "/shop?category=Earrings", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80" },
            { name: "Necklaces", path: "/shop?category=Necklaces", img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80" },
            { name: "Huggies", path: "/shop?category=Huggies", img: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80" },
          ].map((cat) => (
            <Link key={cat.name} to={cat.path} className="category-tile aspect-[4/3] overflow-hidden rounded">
              <img src={cat.img} alt={cat.name} className="w-full h-full object-cover" />
              <div className="label">
                <p className="serif text-2xl tracking-wider">{cat.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="border-y border-[#E5DFD3]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2">
          <div className="aspect-[4/3] md:aspect-auto bg-[#2C2823]">
            <img
              src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&q=80"
              alt="Our Story"
              className="w-full h-full object-cover opacity-90"
            />
          </div>
          <div className="flex items-center p-10 md:p-16">
            <div>
              <p className="text-xs tracking-[0.2em] text-[#7A7368] mb-4">EST. 2018</p>
              <h3 className="serif text-4xl mb-6">Our Story</h3>
              <p className="text-[#7A7368] leading-relaxed mb-8">
                Velmora was born from a desire to create jewelry that feels both precious and wearable. 
                Each piece is thoughtfully designed in our studio and crafted with the finest materials, 
                meant to be treasured for years to come.
              </p>
              <Link to="/" className="text-sm tracking-wider hover:text-[#8B7355]">
                Learn more about us →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <p className="text-xs tracking-[0.2em] text-[#7A7368] mb-8">LOVED BY OUR COMMUNITY</p>
        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <div key={i}>
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} className="fill-[#C5A46E] text-[#C5A46E]" />
                ))}
              </div>
              <p className="text-[#7A7368] italic mb-4">"{t.text}"</p>
              <p className="text-sm tracking-wider">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter py-16">
        <div className="max-w-md mx-auto px-6 text-center">
          <h3 className="serif text-3xl mb-3">Join for 10% off</h3>
          <p className="text-white/70 text-sm mb-8 tracking-wide">Be the first to know about new arrivals and special offers.</p>
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder:text-white/50 text-sm focus:outline-none focus:border-white/40"
            />
            <button type="submit" className="btn btn-gold px-6">Join</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C2823] text-white/70 py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-y-12">
          <div>
            <p className="serif text-2xl tracking-[0.2em] text-white mb-4">VELMORA</p>
            <p className="text-xs tracking-wider">Fine Jewelry</p>
          </div>
          <div>
            <p className="text-white text-sm tracking-wider mb-4">Shop</p>
            <div className="space-y-2 text-sm">
              <Link to="/shop" className="block hover:text-white">All Jewelry</Link>
              <Link to="/shop?category=Earrings" className="block hover:text-white">Earrings</Link>
              <Link to="/shop?category=Necklaces" className="block hover:text-white">Necklaces</Link>
              <Link to="/shop?category=Huggies" className="block hover:text-white">Huggies</Link>
            </div>
          </div>
          <div>
            <p className="text-white text-sm tracking-wider mb-4">Help</p>
            <div className="space-y-2 text-sm">
              <a href="#" className="block hover:text-white">Shipping</a>
              <a href="#" className="block hover:text-white">Returns</a>
              <a href="#" className="block hover:text-white">Care Guide</a>
              <a href="#" className="block hover:text-white">Contact</a>
            </div>
          </div>
          <div>
            <p className="text-white text-sm tracking-wider mb-4">Company</p>
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
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 text-xs tracking-wider text-center">
          © {new Date().getFullYear()} Velmora. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;