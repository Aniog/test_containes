import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const Home = () => {
  const { addToCart } = useCart();
  const bestsellers = products.slice(0, 5);

  const ugcItems = [
    { id: 1, caption: "Morning light", img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80" },
    { id: 2, caption: "Golden hour", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80" },
    { id: 3, caption: "Effortless", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" },
    { id: 4, caption: "Everyday luxe", img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&q=80" },
    { id: 5, caption: "Timeless", img: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&q=80" },
  ];

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. I wear my huggies every day.", rating: 5 },
    { name: "Sofia R.", text: "Beautiful packaging and the necklace is even more stunning in person.", rating: 5 },
    { name: "Isabella T.", text: "My go-to for thoughtful, elevated gifts. Always a hit.", rating: 5 },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[100dvh] min-h-[700px] flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-[var(--color-bg-dark)]">
          <img 
            src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=2000&q=80" 
            alt="Velmora Jewelry"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="serif text-6xl md:text-7xl text-white mb-6 tracking-[-0.02em]">
            Crafted to be Treasured
          </h1>
          <p className="text-white/90 text-lg mb-10 max-w-md mx-auto">
            Demi-fine gold jewelry, made to last a lifetime.
          </p>
          <Link to="/shop" className="btn-gold inline-block">
            Shop the Collection
          </Link>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 text-xs tracking-[0.2em] flex flex-col items-center">
          SCROLL TO EXPLORE
          <div className="w-px h-8 bg-white/40 mt-2" />
        </div>
      </section>

      {/* Trust Bar */}
      <div className="border-b border-[var(--color-border)] py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs tracking-[0.1em] text-[var(--color-text-muted)] text-center">
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
            <div className="text-xs tracking-[0.15em] text-[var(--color-gold)] mb-2">DISCOVER</div>
            <h2 className="serif text-4xl">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm tracking-[0.08em] hover:text-[var(--color-gold)] hidden md:block">
            VIEW ALL →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bestsellers.map((product) => (
            <div key={product.id} className="product-card group">
              <Link to={`/product/${product.id}`} className="block relative aspect-[4/3.5] overflow-hidden bg-[var(--color-border)]">
                <img src={product.images[0]} alt={product.name} className="absolute inset-0 w-full h-full object-cover" />
                {product.images[1] && <img src={product.images[1]} alt={product.name} className="secondary absolute inset-0 w-full h-full object-cover" />}
                
                <button 
                  onClick={(e) => { e.preventDefault(); addToCart(product); }}
                  className="quick-add btn-primary text-xs px-6 py-2.5 opacity-0 group-hover:opacity-100"
                >
                  Quick Add
                </button>
              </Link>
              <div className="p-4">
                <Link to={`/product/${product.id}`}>
                  <div className="product-name text-sm tracking-[0.1em] mb-1">{product.name}</div>
                  <div className="text-sm text-[var(--color-text-muted)]">${product.price}</div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* UGC Reel Row */}
      <section className="bg-[var(--color-bg-dark)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <div className="text-xs tracking-[0.15em] text-[var(--color-gold)] mb-2">AS SEEN ON YOU</div>
            <h2 className="serif text-4xl text-white">Real Moments</h2>
          </div>
          
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
            {ugcItems.map((item) => (
              <div key={item.id} className="ugc-card w-[180px] md:w-[200px] aspect-[9/16] rounded-xl overflow-hidden snap-start">
                <img src={item.img} alt={item.caption} className="w-full h-full object-cover" />
                <div className="ugc-caption">
                  <p className="serif text-white text-sm tracking-[0.05em]">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <div className="text-xs tracking-[0.15em] text-[var(--color-gold)] mb-2">EXPLORE</div>
          <h2 className="serif text-4xl">Shop by Category</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Earrings", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80" },
            { name: "Necklaces", img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80" },
            { name: "Huggies", img: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80" },
          ].map((cat) => (
            <Link key={cat.name} to="/shop" className="category-tile group block aspect-[16/10] overflow-hidden rounded-xl">
              <img src={cat.img} alt={cat.name} className="w-full h-full object-cover" />
              <div className="overlay" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="text-white text-2xl serif tracking-[0.05em] group-hover:text-[var(--color-gold)] transition-colors">
                  {cat.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/3] bg-[var(--color-border)] rounded-xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=1000&q=80" 
              alt="Our atelier" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="text-xs tracking-[0.15em] text-[var(--color-gold)] mb-3">SINCE 2018</div>
            <h2 className="serif text-5xl mb-6">Our Story</h2>
            <p className="text-[var(--color-text-muted)] mb-8 leading-relaxed">
              Velmora was born from a simple belief: that beautiful, lasting jewelry should be accessible. 
              We craft demi-fine pieces using the finest materials, designed to be worn every day and 
              treasured for years to come.
            </p>
            <Link to="/" className="btn-outline">Learn More</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[var(--color-surface)] py-20 border-y border-[var(--color-border)]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-xs tracking-[0.15em] text-[var(--color-gold)] mb-2">LOVED BY MANY</div>
            <h2 className="serif text-4xl">What Our Customers Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(t.rating)].map((_, idx) => (
                    <Star key={idx} size={16} className="fill-[var(--color-gold)] text-[var(--color-gold)]" />
                  ))}
                </div>
                <p className="italic mb-4 text-[var(--color-text-muted)]">"{t.text}"</p>
                <p className="text-sm tracking-[0.05em]">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter py-20">
        <div className="max-w-xl mx-auto px-6 text-center">
          <div className="serif text-4xl mb-4">Join the Circle</div>
          <p className="text-[var(--color-gold-light)] mb-8">
            Be the first to know about new arrivals and receive 10% off your first order.
          </p>
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-6 py-4 bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-[var(--color-gold)]"
            />
            <button type="submit" className="btn-gold whitespace-nowrap">Subscribe</button>
          </form>
          <p className="text-xs text-[var(--color-gold-light)] mt-4">We respect your inbox. Unsubscribe anytime.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;