import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Home = () => {
  // Use first 5 products as bestsellers
  const bestsellers = products.slice(0, 5);

  // UGC mock data - vertical images mimicking reels
  const ugcItems = [
    { id: 1, caption: "My everyday staple", img: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80" },
    { id: 2, caption: "Gifted to myself", img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80" },
    { id: 3, caption: "Wedding day details", img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80" },
    { id: 4, caption: "Golden hour glow", img: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400&q=80" },
    { id: 5, caption: "Layered with love", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80" },
  ];

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. I've worn my huggies every day for six months and they still look brand new." },
    { name: "Sofia R.", text: "Bought the Royal Heirloom Set as a gift for my sister. She hasn't taken it off since. Beautiful packaging too." },
    { name: "Aisha K.", text: "Finally found jewelry that doesn't irritate my sensitive skin. The gold tone is so warm and elegant." },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[100dvh] min-h-[600px] flex items-center justify-center bg-velmora-base overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#3a3632_0.5px,transparent_1px)] bg-[length:4px_4px] opacity-40" />
        <img 
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1600&q=90" 
          alt="Velmora Fine Jewelry - Model wearing gold jewelry"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="serif text-5xl md:text-7xl text-velmora-white tracking-[0.08em] mb-6">
            Crafted to be<br />Treasured
          </h1>
          <p className="text-velmora-white/90 text-lg md:text-xl mb-10 tracking-wide">
            Demi-fine gold jewelry for the modern woman
          </p>
          <Link to="/shop" className="btn btn-primary inline-block">
            SHOP THE COLLECTION
          </Link>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-px h-12 bg-velmora-white/40" />
        </div>
      </section>

      {/* Trust Bar */}
      <div className="trust-bar py-4 bg-velmora-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-2 text-xs tracking-[0.15em] text-velmora-text-light">
            <span>FREE WORLDWIDE SHIPPING</span>
            <span className="hidden md:inline">·</span>
            <span>30-DAY RETURNS</span>
            <span className="hidden md:inline">·</span>
            <span>18K GOLD PLATED</span>
            <span className="hidden md:inline">·</span>
            <span>HYPOALLERGENIC</span>
          </div>
        </div>
      </div>

      {/* Bestsellers */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs tracking-[0.15em] text-velmora-gold mb-2">CURATED FOR YOU</p>
            <h2 className="serif text-4xl tracking-[0.05em]">Bestsellers</h2>
          </div>
          <Link to="/shop" className="hidden md:block text-sm tracking-widest hover:text-velmora-gold transition-colors">
            VIEW ALL →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-8 md:hidden">
          <Link to="/shop" className="text-sm tracking-widest hover:text-velmora-gold transition-colors">
            VIEW ALL →
          </Link>
        </div>
      </section>

      {/* UGC Reel Row */}
      <section className="bg-velmora-cream py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-xs tracking-[0.15em] text-velmora-gold mb-1">AS SEEN ON YOU</p>
              <h3 className="serif text-2xl tracking-[0.05em]">Real Moments</h3>
            </div>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-sm tracking-widest hover:text-velmora-gold transition-colors hidden md:block">
              @VELMORA →
            </a>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {ugcItems.map((item) => (
              <div key={item.id} className="ugc-card snap-start">
                <img src={item.img} alt={item.caption} />
                <div className="ugc-caption">
                  {item.caption}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.15em] text-velmora-gold mb-2">DISCOVER</p>
          <h2 className="serif text-4xl tracking-[0.05em]">Shop by Category</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: "Earrings", category: "Earrings", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80" },
            { label: "Necklaces", category: "Necklaces", img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80" },
            { label: "Huggies", category: "Huggies", img: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80" },
          ].map((cat) => (
            <Link 
              key={cat.label} 
              to={`/shop?category=${cat.category}`}
              className="category-tile aspect-[16/10] block"
            >
              <img src={cat.img} alt={cat.label} className="w-full h-full object-cover" />
              <div className="category-overlay" />
              <span className="category-label">{cat.label}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="bg-velmora-base text-velmora-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2">
          <div className="aspect-[4/3] md:aspect-auto">
            <img 
              src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1000&q=80" 
              alt="Velmora atelier" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-10 md:p-16 flex flex-col justify-center">
            <p className="text-xs tracking-[0.15em] text-velmora-gold mb-4">SINCE 2018</p>
            <h2 className="serif text-4xl tracking-[0.05em] mb-6">Our Story</h2>
            <div className="text-velmora-light space-y-4 text-[15px] leading-relaxed max-w-prose">
              <p>Velmora was born from a simple belief: that beautiful jewelry should be worn every day, not saved for special occasions.</p>
              <p>We design demi-fine pieces that feel personal and timeless—crafted with care, never mass-produced. Each piece tells a story of quiet luxury.</p>
            </div>
            <Link to="/about" className="mt-8 inline-block text-sm tracking-widest border-b border-velmora-gold pb-1 hover:text-velmora-gold w-fit">
              READ OUR STORY →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.15em] text-velmora-gold mb-2">LOVED BY MANY</p>
          <h2 className="serif text-3xl tracking-[0.05em]">What Our Customers Say</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="text-center">
              <div className="stars flex justify-center mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-[15px] leading-relaxed mb-4">"{t.text}"</p>
              <p className="text-sm tracking-widest text-velmora-text-light">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-velmora-cream py-16">
        <div className="max-w-md mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.15em] text-velmora-gold mb-3">BECOME PART OF OUR WORLD</p>
          <h3 className="serif text-3xl tracking-[0.05em] mb-3">Join for 10% off your first order</h3>
          <p className="text-sm text-velmora-text-light mb-6">Receive early access to new collections and stories from the atelier.</p>
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing!'); }}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="input flex-1" 
              required 
            />
            <button type="submit" className="btn btn-primary whitespace-nowrap">SUBSCRIBE</button>
          </form>
          <p className="text-[10px] text-velmora-text-light mt-3 tracking-widest">We respect your inbox. Unsubscribe anytime.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;