import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const Home = ({ products, onAddToCart }) => {
  const bestsellers = products.slice(0, 5);
  
  const ugcItems = [
    { id: 1, caption: "Morning light", img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80" },
    { id: 2, caption: "Golden hour", img: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&q=80" },
    { id: 3, caption: "Effortless", img: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=400&q=80" },
    { id: 4, caption: "Timeless", img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=80" },
    { id: 5, caption: "Everyday", img: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&q=80" },
  ];

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. My huggies have become my everyday staple." },
    { name: "Sophia R.", text: "Beautiful packaging and even more beautiful jewelry. A gift I'll treasure." },
    { name: "Isabella T.", text: "Finally found pieces that feel premium without the luxury markup." },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[100dvh] min-h-[700px] flex items-center justify-center bg-[var(--color-bg-dark)] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#4A4640_0.5px,transparent_1px)] bg-[length:4px_4px] opacity-30" />
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-[var(--color-surface)] text-6xl md:text-7xl font-semibold tracking-[0.02em] mb-6 serif">
            Crafted to be<br />Treasured
          </h1>
          <p className="text-[var(--color-surface)]/80 text-lg mb-10 max-w-md mx-auto">
            Demi-fine jewelry for the modern woman who values quiet luxury.
          </p>
          <Link to="/shop" className="btn btn-gold inline-block">
            Shop the Collection
          </Link>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--color-surface)]/60 text-xs tracking-[0.2em]">
          SCROLL TO DISCOVER
        </div>
      </section>

      {/* Trust Bar */}
      <div className="trust-bar bg-[var(--color-surface)] border-b border-[var(--color-border)] py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-x-8 gap-y-2 text-center text-[var(--color-text-muted)]">
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
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="text-xs tracking-[0.15em] text-[var(--color-text-muted)] mb-2">DISCOVER</div>
            <h2 className="serif text-4xl">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm tracking-[0.08em] hover:text-[var(--color-accent)] transition-colors hidden md:block">
            VIEW ALL →
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bestsellers.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </section>

      {/* UGC Reel */}
      <section className="bg-[var(--color-bg)] py-16 border-y border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-6 mb-8">
          <div className="text-xs tracking-[0.15em] text-[var(--color-text-muted)] mb-2">AS SEEN ON</div>
          <h2 className="serif text-3xl">Real Moments</h2>
        </div>
        
        <div className="overflow-x-auto pb-4 scrollbar-hide">
          <div className="flex gap-4 pl-6 md:pl-[calc((100vw-1280px)/2+24px)]">
            {ugcItems.map(item => (
              <div key={item.id} className="ugc-card rounded-lg">
                <img src={item.img} alt={item.caption} />
                <div className="ugc-caption">{item.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <div className="text-xs tracking-[0.15em] text-[var(--color-text-muted)] mb-2">EXPLORE</div>
          <h2 className="serif text-4xl">Shop by Category</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Earrings", category: "Earrings", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80" },
            { name: "Necklaces", category: "Necklaces", img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80" },
            { name: "Huggies", category: "Huggies", img: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80" },
          ].map(cat => (
            <Link 
              key={cat.name}
              to={`/shop?category=${cat.category}`}
              className="category-tile rounded-lg overflow-hidden group"
            >
              <img src={cat.img} alt={cat.name} />
              <div className="category-label">
                <span>{cat.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-[var(--color-border)]">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/3] bg-[var(--color-bg-dark)] rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1200&q=80" 
              alt="Velmora atelier" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="text-xs tracking-[0.15em] text-[var(--color-text-muted)] mb-3">EST. 2018</div>
            <h2 className="serif text-5xl mb-6">Our Story</h2>
            <p className="text-[var(--color-text-muted)] mb-8 leading-relaxed">
              Velmora was born from a simple belief: that beautiful, well-made jewelry should be accessible. 
              We source the finest materials and work with skilled artisans to create pieces that feel 
              luxurious without the luxury price tag.
            </p>
            <Link to="/about" className="btn btn-outline inline-block">Learn More</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[var(--color-surface)] py-20 border-y border-[var(--color-border)]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-xs tracking-[0.15em] text-[var(--color-text-muted)] mb-2">LOVED BY</div>
            <h2 className="serif text-4xl">Our Community</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="text-center">
                <div className="stars flex justify-center mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                </div>
                <p className="text-[var(--color-text-muted)] mb-4 italic">"{t.text}"</p>
                <p className="text-sm tracking-[0.05em]">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter py-20">
        <div className="max-w-md mx-auto px-6 text-center">
          <h2 className="serif text-4xl mb-4 text-[var(--color-surface)]">Join the Circle</h2>
          <p className="text-[var(--color-surface)]/70 mb-8">
            Be the first to know about new arrivals and receive 10% off your first order.
          </p>
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={e => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-5 py-4 bg-white/10 border border-white/20 text-[var(--color-surface)] placeholder:text-white/50 focus:outline-none focus:border-white/40"
            />
            <button type="submit" className="btn btn-gold whitespace-nowrap">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;