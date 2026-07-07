import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Home = () => {
  const bestsellers = products.slice(0, 5);
  
  const ugcItems = [
    { id: 1, image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80", caption: "Morning light" },
    { id: 2, image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80", caption: "Everyday elegance" },
    { id: 3, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80", caption: "Golden hour" },
    { id: 4, image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80", caption: "Timeless" },
    { id: 5, image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80", caption: "Layered" },
  ];

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. I've worn my huggies every day for six months and they still look brand new." },
    { name: "Sofia R.", text: "Bought the Royal Heirloom Set as a gift for my sister. She was absolutely thrilled. Beautiful packaging too." },
    { name: "Maya K.", text: "Finally found jewelry that doesn't irritate my sensitive skin. The gold is so warm and rich." },
  ];

  return (
    <div>
      {/* 2. Full-bleed Hero */}
      <section className="relative h-[100dvh] min-h-[700px] flex items-center justify-center bg-[var(--color-base)] text-white pt-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1600&q=80')] bg-cover bg-center opacity-70" />
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="serif text-6xl md:text-7xl tracking-[-0.02em] mb-6">Crafted to be Treasured</h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-md mx-auto">Timeless demi-fine jewelry, made with care and meant to last.</p>
          <Link to="/shop" className="btn btn-gold inline-block">Shop the Collection</Link>
        </div>
      </section>

      {/* 3. Trust Bar */}
      <div className="trust-bar bg-[var(--color-light-gray)] py-4 border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-x-8 gap-y-2 text-center text-[var(--color-taupe)]">
          <span>Free Worldwide Shipping</span>
          <span className="hidden md:inline">·</span>
          <span>30-Day Returns</span>
          <span className="hidden md:inline">·</span>
          <span>18K Gold Plated</span>
          <span className="hidden md:inline">·</span>
          <span>Hypoallergenic</span>
        </div>
      </div>

      {/* 4. Bestsellers */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="text-xs tracking-[0.15em] uppercase text-[var(--color-gold)] mb-2">Signature Pieces</div>
            <h2 className="serif text-4xl">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm underline hover:no-underline hidden md:block">View All</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bestsellers.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 5. UGC Reel */}
      <section className="bg-[var(--color-light-gray)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <div className="text-xs tracking-[0.15em] uppercase text-[var(--color-gold)] mb-2">As Seen On You</div>
            <h2 className="serif text-4xl">Real Moments</h2>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {ugcItems.map(item => (
              <div key={item.id} className="ugc-card w-[180px] md:w-[200px] aspect-[9/16] bg-[var(--color-base)] snap-start">
                <img src={item.image} alt={item.caption} className="w-full h-full object-cover" />
                <div className="ugc-overlay">
                  <p className="serif text-white text-sm tracking-wide">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Shop by Category */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <div className="text-xs tracking-[0.15em] uppercase text-[var(--color-gold)] mb-2">Discover</div>
          <h2 className="serif text-4xl">Shop by Category</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { name: "Earrings", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80", link: "/shop?category=Earrings" },
            { name: "Necklaces", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80", link: "/shop?category=Necklaces" },
            { name: "Huggies", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80", link: "/shop?category=Huggies" },
          ].map(cat => (
            <Link key={cat.name} to={cat.link} className="category-tile aspect-[16/10] block overflow-hidden bg-[var(--color-base)]">
              <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
              <div className="label">
                <span className="text-white text-xl serif tracking-wide">{cat.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 7. Brand Story */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/3] bg-[var(--color-light-gray)] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80" 
              alt="Velmora atelier" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="text-xs tracking-[0.15em] uppercase text-[var(--color-gold)] mb-3">Since 2018</div>
            <h2 className="serif text-5xl mb-6">Our Story</h2>
            <div className="space-y-4 text-[15px] text-[var(--color-taupe)] max-w-prose">
              <p>Velmora was born from a simple belief: that beautiful, lasting jewelry should be accessible without compromise.</p>
              <p>Each piece is thoughtfully designed in our New York studio and crafted with the finest materials—18K gold plating over hypoallergenic brass, premium crystals, and meticulous attention to every detail.</p>
            </div>
            <Link to="/about" className="btn btn-outline mt-8 inline-block">Learn More</Link>
          </div>
        </div>
      </section>

      {/* 8. Testimonials */}
      <section className="bg-[var(--color-light-gray)] py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-xs tracking-[0.15em] uppercase text-[var(--color-gold)] mb-2">Voices</div>
            <h2 className="serif text-4xl">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} size={14} className="fill-[var(--color-gold)] text-[var(--color-gold)]" />
                  ))}
                </div>
                <p className="text-[15px] mb-4 leading-relaxed">"{t.text}"</p>
                <p className="text-sm text-[var(--color-taupe)]">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Newsletter */}
      <section className="newsletter py-20">
        <div className="max-w-md mx-auto px-6 text-center">
          <div className="serif text-4xl mb-4">Join the Circle</div>
          <p className="text-white/70 mb-8">Be the first to know about new arrivals, private previews, and receive 10% off your first order.</p>
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="input flex-1 bg-white/95 border-white/20 text-[var(--color-base)] placeholder:text-[var(--color-taupe)]"
              required 
            />
            <button type="submit" className="btn btn-gold whitespace-nowrap">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;