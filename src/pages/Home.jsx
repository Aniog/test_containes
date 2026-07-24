import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const Home = ({ products, onAddToCart }) => {
  const bestsellers = products.slice(0, 5);
  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. My huggies have become my everyday staple.", rating: 5 },
    { name: "Sofia R.", text: "Beautiful packaging and the necklace is even more stunning in person.", rating: 5 },
    { name: "Maya K.", text: "Finally found jewelry that doesn't irritate my sensitive skin. Love it.", rating: 5 },
  ];

  const ugcCaptions = [
    "Morning light on the Vivid Aura",
    "Layered with the Flora Nectar",
    "Golden Sphere in the golden hour",
    "Lace details catching the sun",
    "The heirloom set, gifted with love",
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[100dvh] min-h-[700px] flex items-center justify-center bg-[#EDE6DC] pt-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1600&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/25" />
        
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="serif text-white text-6xl md:text-7xl tracking-[-0.02em] mb-6">Crafted to be Treasured</h1>
          <p className="text-white/90 text-lg mb-10 max-w-md mx-auto">Demi-fine gold jewelry, made to last a lifetime.</p>
          <Link to="/shop" className="btn btn-gold inline-block">Shop the Collection</Link>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/70 text-xs tracking-[3px] flex flex-col items-center">
          SCROLL TO EXPLORE <div className="h-px w-8 bg-white/40 mt-2" />
        </div>
      </section>

      {/* Trust Bar */}
      <div className="border-b border-[var(--color-border)] py-4 text-center text-xs tracking-[0.15em] text-[var(--color-text-muted)] flex flex-wrap justify-center gap-x-8 gap-y-1">
        <span>Free Worldwide Shipping</span>
        <span>30-Day Returns</span>
        <span>18K Gold Plated</span>
        <span>Hypoallergenic</span>
      </div>

      {/* Bestsellers */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="text-xs tracking-[0.2em] text-[var(--color-gold)] mb-2">DISCOVER</div>
            <h2 className="serif text-4xl">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm tracking-[0.1em] hover:text-[var(--color-gold)] hidden md:block">VIEW ALL →</Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bestsellers.map(product => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      </section>

      {/* UGC Reel Row */}
      <section className="bg-[#F0EBE3] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-xs tracking-[0.2em] text-[var(--color-gold)] mb-3">AS SEEN ON YOU</div>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {[1,2,3,4,5].map((i, idx) => (
              <div key={i} className="ugc-card aspect-[9/16] bg-[#D4C9B8]">
                <img 
                  src={`https://images.unsplash.com/photo-${['1611085583191-a3b181a88401','1599643478518-a784e5dc4c8f','1605100804763-247f67b3557e','1605100804763-247f67b3557e','1611085583191-a3b181a88401'][idx]}?w=400&q=80`} 
                  alt="UGC" 
                  className="w-full h-full object-cover" 
                />
                <div className="ugc-caption">{ugcCaptions[idx]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <div className="text-xs tracking-[0.2em] text-[var(--color-gold)] mb-2">EXPLORE</div>
          <h2 className="serif text-4xl">Shop by Category</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-4">
          {['Earrings', 'Necklaces', 'Huggies'].map((cat, idx) => (
            <Link key={cat} to={`/shop?category=${cat}`} className="category-tile aspect-[16/10] overflow-hidden bg-[#EDE6DC]">
              <img 
                src={['https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80','https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80','https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80'][idx]} 
                alt={cat} 
                className="w-full h-full object-cover" 
              />
              <div className="category-label">{cat}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div className="aspect-[4/3] bg-[#EDE6DC]">
          <img src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=900&q=80" alt="Our atelier" className="w-full h-full object-cover" />
        </div>
        <div>
          <div className="text-xs tracking-[0.2em] text-[var(--color-gold)] mb-3">SINCE 2018</div>
          <h2 className="serif text-5xl mb-6">Our Story</h2>
          <p className="text-[var(--color-text-muted)] mb-8 leading-relaxed">Velmora was born from a simple belief: that beautiful, lasting jewelry should be accessible. We design demi-fine pieces that feel like heirlooms—crafted with care, meant to be worn every day.</p>
          <Link to="/about" className="btn btn-outline inline-block">Read More</Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[var(--color-bg)] py-16 border-y border-[var(--color-border)]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-xs tracking-[0.2em] text-[var(--color-gold)] mb-2">LOVED BY MANY</div>
            <h2 className="serif text-4xl">What Our Customers Say</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial">
                <div className="flex mb-4 text-[var(--color-gold)]">{Array.from({length: t.rating}).map((_,j)=><Star key={j} size={16} fill="currentColor" />)}</div>
                <p className="italic mb-4">"{t.text}"</p>
                <div className="text-sm text-[var(--color-text-muted)]">— {t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter py-20">
        <div className="max-w-md mx-auto px-6 text-center">
          <div className="serif text-4xl mb-4">Join the Circle</div>
          <p className="text-white/70 mb-8">Be the first to know about new arrivals and receive 10% off your first order.</p>
          
          <form className="flex" onSubmit={(e) => { e.preventDefault(); alert('Thank you! Check your email for your 10% code.'); }}>
            <input type="email" placeholder="Your email address" className="flex-1 px-5 py-4 bg-white/10 border border-white/30 text-white placeholder:text-white/50 focus:outline-none" required />
            <button type="submit" className="btn btn-gold px-8">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;