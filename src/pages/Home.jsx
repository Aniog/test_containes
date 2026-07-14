import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Home = () => {
  const bestsellers = products.slice(0, 5);
  
  const ugcItems = [
    { id: 1, caption: "Everyday elegance", image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&q=90" },
    { id: 2, caption: "Golden hour glow", image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=600&q=90" },
    { id: 3, caption: "Treasured moments", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=90" },
    { id: 4, caption: "Effortless beauty", image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&q=90" },
    { id: 5, caption: "Timeless pieces", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=90" },
  ];

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. My huggies have become my daily go-to.", rating: 5 },
    { name: "Sophia R.", text: "Beautiful packaging and even more beautiful jewelry. A gift that truly felt special.", rating: 5 },
    { name: "Isabella K.", text: "Finally found pieces that don't irritate my sensitive skin. Love them.", rating: 5 },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[100dvh] min-h-[700px] flex items-center justify-center bg-[#2C2823] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=2000&q=90')] bg-cover bg-center opacity-70" />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="serif text-6xl md:text-7xl text-white tracking-[-0.02em] mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-10 max-w-md mx-auto">
            Demi-fine gold jewelry for the modern woman who values quiet luxury.
          </p>
          <Link to="/shop" className="btn btn-primary inline-block">
            Shop the Collection
          </Link>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-px h-12 bg-white/40" />
        </div>
      </section>

      {/* Trust Bar */}
      <div className="trust-bar bg-white py-4 border-b border-[#D4C9B8]">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-wrap justify-center gap-x-8 gap-y-2 text-center text-[#6B665F]">
          <span>Free Worldwide Shipping</span>
          <span className="hidden md:inline">·</span>
          <span>30-Day Returns</span>
          <span className="hidden md:inline">·</span>
          <span>18K Gold Plated</span>
          <span className="hidden md:inline">·</span>
          <span>Hypoallergenic</span>
        </div>
      </div>

      {/* Bestsellers */}
      <section className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="uppercase tracking-[0.15em] text-xs text-[#B8975E] mb-2">Signature Pieces</p>
            <h2 className="serif text-4xl tracking-[-0.01em]">Bestsellers</h2>
          </div>
          <Link to="/shop" className="hidden md:block text-sm tracking-[0.08em] hover:text-[#B8975E]">
            VIEW ALL →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-12">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* UGC Reel Row */}
      <section className="bg-[#2C2823] py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <p className="uppercase tracking-[0.15em] text-xs text-[#B8975E] mb-8 text-center">As Seen On You</p>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {ugcItems.map((item) => (
              <div key={item.id} className="ugc-card flex-shrink-0 w-[180px] md:w-[200px] snap-start">
                <img 
                  src={item.image} 
                  alt={item.caption}
                  className="w-full h-full object-cover"
                />
                <div className="ugc-caption">
                  <p className="serif text-sm tracking-[0.05em]">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="max-w-[1400px] mx-auto px-6 py-20">
        <p className="uppercase tracking-[0.15em] text-xs text-[#B8975E] mb-8 text-center">Discover</p>
        <h2 className="serif text-4xl tracking-[-0.01em] text-center mb-12">Shop by Category</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { label: 'Earrings', path: '/shop?category=Earrings', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=90' },
            { label: 'Necklaces', path: '/shop?category=Necklaces', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=90' },
            { label: 'Huggies', path: '/shop?category=Huggies', image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=90' },
          ].map((cat) => (
            <Link key={cat.label} to={cat.path} className="category-tile group aspect-[16/10] overflow-hidden">
              <img src={cat.image} alt={cat.label} className="w-full h-full object-cover" />
              <div className="overlay-label">
                <span className="text-white text-lg tracking-[0.15em] serif">{cat.label}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="bg-white">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2">
          <div className="aspect-[4/3] md:aspect-auto">
            <img 
              src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1200&q=90" 
              alt="Velmora atelier" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center px-8 md:px-16 py-16 md:py-0">
            <div className="max-w-md">
              <p className="uppercase tracking-[0.15em] text-xs text-[#B8975E] mb-4">Our Heritage</p>
              <h3 className="serif text-4xl tracking-[-0.01em] mb-6">Every piece tells a story.</h3>
              <p className="text-[#6B665F] mb-8 leading-relaxed">
                Founded on the belief that fine jewelry should be accessible yet enduring, 
                Velmora creates demi-fine pieces that honor tradition while embracing the modern woman.
              </p>
              <Link to="/" className="text-sm tracking-[0.08em] hover:text-[#B8975E]">
                READ OUR STORY →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-[1400px] mx-auto px-6 py-20">
        <p className="uppercase tracking-[0.15em] text-xs text-[#B8975E] mb-8 text-center">Voices of Velmora</p>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="text-center px-4">
              <div className="stars flex justify-center mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-[#6B665F] italic mb-4">"{t.text}"</p>
              <p className="text-sm tracking-[0.05em]">{t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-[#2C2823] py-16">
        <div className="max-w-md mx-auto px-6 text-center">
          <p className="uppercase tracking-[0.15em] text-xs text-[#B8975E] mb-4">The Inner Circle</p>
          <h3 className="serif text-3xl text-white tracking-[-0.01em] mb-4">Join for 10% off your first order</h3>
          <p className="text-white/70 text-sm mb-8">Receive early access to new collections and styling inspiration.</p>
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="input flex-1 bg-white/95 border-white/20 text-[#2C2823]"
              required 
            />
            <button type="submit" className="btn btn-primary whitespace-nowrap">Subscribe</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#F8F5F1] border-t border-[#D4C9B8] pt-16 pb-8">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-y-10 mb-16">
            <div className="col-span-2 md:col-span-1">
              <p className="serif text-xl tracking-[0.2em] mb-4">VELMORA</p>
            </div>
            
            <div>
              <p className="text-xs tracking-[0.1em] uppercase mb-4 text-[#6B665F]">Shop</p>
              <div className="space-y-2 text-sm">
                <Link to="/shop" className="block hover:text-[#B8975E]">All Jewelry</Link>
                <Link to="/shop?category=Earrings" className="block hover:text-[#B8975E]">Earrings</Link>
                <Link to="/shop?category=Necklaces" className="block hover:text-[#B8975E]">Necklaces</Link>
                <Link to="/shop?category=Huggies" className="block hover:text-[#B8975E]">Huggies</Link>
              </div>
            </div>

            <div>
              <p className="text-xs tracking-[0.1em] uppercase mb-4 text-[#6B665F]">Help</p>
              <div className="space-y-2 text-sm">
                <a href="#" className="block hover:text-[#B8975E]">Shipping</a>
                <a href="#" className="block hover:text-[#B8975E]">Returns</a>
                <a href="#" className="block hover:text-[#B8975E]">Care Guide</a>
                <a href="#" className="block hover:text-[#B8975E]">Contact</a>
              </div>
            </div>

            <div>
              <p className="text-xs tracking-[0.1em] uppercase mb-4 text-[#6B665F]">Company</p>
              <div className="space-y-2 text-sm">
                <a href="#" className="block hover:text-[#B8975E]">Our Story</a>
                <a href="#" className="block hover:text-[#B8975E]">Journal</a>
                <a href="#" className="block hover:text-[#B8975E]">Sustainability</a>
                <a href="#" className="block hover:text-[#B8975E]">Careers</a>
              </div>
            </div>

            <div>
              <p className="text-xs tracking-[0.1em] uppercase mb-4 text-[#6B665F]">Follow</p>
              <div className="space-y-2 text-sm">
                <a href="#" className="block hover:text-[#B8975E]">Instagram</a>
                <a href="#" className="block hover:text-[#B8975E]">Pinterest</a>
                <a href="#" className="block hover:text-[#B8975E]">TikTok</a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-[#D4C9B8] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#6B665F]">
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