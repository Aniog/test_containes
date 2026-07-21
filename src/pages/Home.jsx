import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { products } from '../data/products';

const Home = () => {
  const bestsellers = products.slice(0, 5);
  
  const ugcItems = [
    { id: 1, image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80", caption: "Golden hour glow" },
    { id: 2, image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&q=80", caption: "Everyday elegance" },
    { id: 3, image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=80", caption: "Layered with love" },
    { id: 4, image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&q=80", caption: "Timeless beauty" },
    { id: 5, image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=400&q=80", caption: "Soft and refined" },
  ];

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. My huggies have become my daily go-to.", rating: 5 },
    { name: "Sophia R.", text: "Beautiful packaging and even more beautiful jewelry. A gift that truly felt special.", rating: 5 },
    { name: "Isabella T.", text: "Finally found pieces that don't irritate my sensitive skin. Love everything I've bought.", rating: 5 },
  ];

  return (
    <div className="pt-20">
      {/* 1. Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-[#2C2823] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=1600&q=90"
          alt="Elegant gold jewelry on model"
          className="absolute inset-0 w-full h-full object-cover opacity-75"
        />
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="serif text-6xl md:text-7xl text-white tracking-[0.05em] mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-white/90 text-lg mb-8 tracking-wide">
            Demi-fine gold jewelry for the modern woman
          </p>
          <Link to="/shop" className="btn btn-primary inline-block">
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* 2. Trust Bar */}
      <div className="trust-bar py-4 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-2 text-xs tracking-[0.1em] text-[#6B655C] text-center">
            <span>Free Worldwide Shipping</span>
            <span>30-Day Returns</span>
            <span>18K Gold Plated</span>
            <span>Hypoallergenic</span>
          </div>
        </div>
      </div>

      {/* 3. Bestsellers */}
      <section className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-xs tracking-[0.15em] text-[#8B7355]">DISCOVER</span>
            <h2 className="serif text-4xl mt-1">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm tracking-[0.08em] hover:text-[#8B7355] hidden md:block">
            View All →
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {bestsellers.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} className="product-card group block">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#F0EBE3]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="primary absolute inset-0 w-full h-full object-cover"
                />
                <img
                  src={product.hoverImage}
                  alt={product.name}
                  className="hover absolute inset-0 w-full h-full object-cover opacity-0"
                />
              </div>
              <div className="p-4">
                <div className="product-name text-sm tracking-[0.1em] mb-1">{product.name}</div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#6B655C]">${product.price}</span>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      // Quick add handled in product detail
                    }}
                    className="text-xs tracking-[0.08em] text-[#8B7355] hover:text-[#2C2823]"
                  >
                    Quick View
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. UGC Reel */}
      <section className="bg-white py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="mb-8">
            <span className="text-xs tracking-[0.15em] text-[#8B7355]">AS SEEN ON</span>
            <h2 className="serif text-3xl mt-1">Worn by You</h2>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {ugcItems.map((item) => (
              <div key={item.id} className="ugc-card w-[180px] md:w-[200px] aspect-[9/16] snap-start">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover"
                />
                <div className="ugc-caption">
                  <p className="serif text-sm tracking-wide">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Shop by Category */}
      <section className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="text-center mb-10">
          <span className="text-xs tracking-[0.15em] text-[#8B7355]">EXPLORE</span>
          <h2 className="serif text-4xl mt-1">Shop by Category</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { name: "Earrings", path: "/shop?category=Earrings", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80" },
            { name: "Necklaces", path: "/shop?category=Necklaces", img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80" },
            { name: "Huggies", path: "/shop?category=Huggies", img: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80" },
          ].map((cat) => (
            <Link key={cat.name} to={cat.path} className="category-tile group block aspect-[16/10] overflow-hidden">
              <img src={cat.img} alt={cat.name} className="w-full h-full object-cover" />
              <div className="overlay" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-xl tracking-[0.15em] serif opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  {cat.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. Brand Story */}
      <section className="max-w-[1400px] mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/3] bg-[#F0EBE3] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=900&q=80"
              alt="Velmora atelier"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <span className="text-xs tracking-[0.15em] text-[#8B7355]">OUR HERITAGE</span>
            <h2 className="serif text-4xl mt-3 mb-6">Our Story</h2>
            <p className="text-[#6B655C] leading-relaxed mb-6">
              Founded with a belief that fine jewelry should be accessible, Velmora creates demi-fine pieces 
              that honor tradition while embracing modern simplicity. Each piece is thoughtfully designed 
              in our atelier and crafted with the finest materials.
            </p>
            <Link to="/shop" className="text-sm tracking-[0.08em] border-b border-[#2C2823] pb-0.5 hover:text-[#8B7355] hover:border-[#8B7355]">
              Discover More →
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="bg-white py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-10">
            <span className="text-xs tracking-[0.15em] text-[#8B7355]">LOVED BY MANY</span>
            <h2 className="serif text-3xl mt-1">What Our Customers Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-[#C5A46E] text-[#C5A46E]" />
                  ))}
                </div>
                <p className="text-[#6B655C] italic mb-4">"{t.text}"</p>
                <p className="text-sm tracking-[0.05em]">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Newsletter */}
      <section className="newsletter py-16">
        <div className="max-w-md mx-auto px-6 text-center">
          <h3 className="serif text-3xl mb-3">Join for 10% off</h3>
          <p className="text-white/70 text-sm mb-6 tracking-wide">
            Be the first to know about new arrivals and exclusive offers.
          </p>
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email address"
              className="input flex-1 bg-white text-[#2C2823]"
              required
            />
            <button type="submit" className="btn btn-gold whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* 9. Footer */}
      <footer className="footer pt-16 pb-8">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-y-10 pb-12 border-b border-white/20">
            <div>
              <div className="serif text-2xl tracking-[0.15em] mb-4">VELMORA</div>
              <p className="text-sm text-white/60">Fine jewelry, thoughtfully made.</p>
            </div>
            <div>
              <div className="text-xs tracking-[0.1em] mb-4 text-white/60">SHOP</div>
              <div className="space-y-2 text-sm">
                <Link to="/shop" className="block hover:text-[#C5A46E]">All Jewelry</Link>
                <Link to="/shop?category=Earrings" className="block hover:text-[#C5A46E]">Earrings</Link>
                <Link to="/shop?category=Necklaces" className="block hover:text-[#C5A46E]">Necklaces</Link>
                <Link to="/shop?category=Huggies" className="block hover:text-[#C5A46E]">Huggies</Link>
              </div>
            </div>
            <div>
              <div className="text-xs tracking-[0.1em] mb-4 text-white/60">HELP</div>
              <div className="space-y-2 text-sm">
                <a href="#" className="block hover:text-[#C5A46E]">Shipping</a>
                <a href="#" className="block hover:text-[#C5A46E]">Returns</a>
                <a href="#" className="block hover:text-[#C5A46E]">Care Guide</a>
                <a href="#" className="block hover:text-[#C5A46E]">Contact</a>
              </div>
            </div>
            <div>
              <div className="text-xs tracking-[0.1em] mb-4 text-white/60">COMPANY</div>
              <div className="space-y-2 text-sm">
                <a href="#" className="block hover:text-[#C5A46E]">Our Story</a>
                <a href="#" className="block hover:text-[#C5A46E]">Journal</a>
                <a href="#" className="block hover:text-[#C5A46E]">Sustainability</a>
              </div>
            </div>
          </div>
          
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
            <div>© {new Date().getFullYear()} Velmora. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white">Instagram</a>
              <a href="#" className="hover:text-white">Pinterest</a>
              <a href="#" className="hover:text-white">TikTok</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;