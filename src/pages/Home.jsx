import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

const Home = ({ products }) => {
  const bestsellers = products.slice(0, 5);
  
  const ugcItems = [
    { id: 1, caption: "My everyday staple", image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80" },
    { id: 2, caption: "Obsessed with these", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce45e?w=400&q=80" },
    { id: 3, caption: "Perfect for gifting", image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400&q=80" },
    { id: 4, caption: "Worn on repeat", image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=400&q=80" },
    { id: 5, caption: "Feels so special", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80" },
  ];

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. These pieces feel like heirlooms.", rating: 5 },
    { name: "Sofia R.", text: "Beautiful packaging and the jewelry is even more stunning in person.", rating: 5 },
    { name: "Isabella T.", text: "My go-to for meaningful gifts. Every piece tells a story.", rating: 5 },
  ];

  return (
    <div className="pt-20">
      {/* 1. Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-[#1C1917] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce45e?w=2000&q=80')] bg-cover bg-center opacity-70" />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="serif text-6xl md:text-7xl text-white tracking-[0.05em] mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-[#D4B896] text-lg mb-10 tracking-[0.1em]">
            Demi-fine jewelry for the modern woman
          </p>
          <Link to="/shop" className="btn btn-gold inline-block">
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* 2. Trust Bar */}
      <div className="trust-bar bg-white border-b border-[#E5DFD3] py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-x-8 gap-y-2 text-center text-[#6B665F]">
          <span>Free Worldwide Shipping</span>
          <span className="hidden md:inline">·</span>
          <span>30-Day Returns</span>
          <span className="hidden md:inline">·</span>
          <span>18K Gold Plated</span>
          <span className="hidden md:inline">·</span>
          <span>Hypoallergenic</span>
        </div>
      </div>

      {/* 3. Bestsellers */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex justify-between items-end mb-10">
          <div>
            <div className="uppercase text-xs tracking-[0.2em] text-[#B8976F] mb-2">Signature Pieces</div>
            <h2 className="serif text-4xl tracking-[0.05em]">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm tracking-[0.1em] hover:text-[#B8976F] transition-colors hidden md:block">
            View All →
          </Link>
        </div>
        
        <div className="product-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bestsellers.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} className="product-card group block">
              <div className="relative aspect-[4/3] bg-[#F5F2ED] overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <img 
                  src={product.image2} 
                  alt={product.name}
                  className="secondary absolute inset-0 w-full h-full object-cover"
                />
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    // Will be handled by context
                  }}
                  className="absolute bottom-4 right-4 btn btn-gold text-xs px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Quick Add
                </button>
              </div>
              <div className="p-4">
                <div className="product-name text-sm tracking-[0.1em] mb-1 pr-8">{product.name}</div>
                <div className="price">${product.price}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. UGC Reel */}
      <section className="bg-[#F5F2ED] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="uppercase text-xs tracking-[0.2em] text-[#B8976F] mb-8 text-center">As Seen On You</div>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {ugcItems.map((item) => (
              <div key={item.id} className="ugc-card w-[180px] aspect-[9/16] bg-[#1C1917] snap-start">
                <img 
                  src={item.image} 
                  alt={item.caption}
                  className="w-full h-full object-cover"
                />
                <div className="ugc-caption">
                  <p className="serif text-sm tracking-[0.05em]">"{item.caption}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Shop by Category */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="uppercase text-xs tracking-[0.2em] text-[#B8976F] mb-8 text-center">Discover</div>
        <h2 className="serif text-4xl tracking-[0.05em] text-center mb-12">Shop by Category</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { label: 'Earrings', path: '/shop', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80' },
            { label: 'Necklaces', path: '/shop', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80' },
            { label: 'Huggies', path: '/shop', image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80' },
          ].map((cat, idx) => (
            <Link key={idx} to={cat.path} className="category-tile aspect-[16/10] block overflow-hidden bg-[#1C1917]">
              <img src={cat.image} alt={cat.label} className="w-full h-full object-cover" />
              <div className="label">
                <span className="serif text-2xl tracking-[0.1em]">{cat.label}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. Brand Story */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/3] bg-[#F5F2ED]">
            <img 
              src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1000&q=80" 
              alt="Our atelier" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="uppercase text-xs tracking-[0.2em] text-[#B8976F] mb-4">Since 2018</div>
            <h2 className="serif text-4xl tracking-[0.05em] mb-6">Our Story</h2>
            <p className="text-[#6B665F] leading-relaxed mb-8">
              Velmora was born from a desire to create jewelry that feels both timeless and contemporary. 
              Each piece is thoughtfully designed in our New York studio and crafted with the finest materials, 
              ensuring beauty that lasts a lifetime.
            </p>
            <Link to="/" className="btn btn-outline inline-block">Learn More</Link>
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="uppercase text-xs tracking-[0.2em] text-[#B8976F] mb-8 text-center">Voices of Velmora</div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="text-center">
                <div className="stars flex justify-center mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-[#6B665F] italic mb-4">"{t.text}"</p>
                <p className="text-sm tracking-[0.1em]">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Newsletter */}
      <section className="newsletter py-20">
        <div className="max-w-md mx-auto px-6 text-center">
          <div className="serif text-3xl tracking-[0.05em] mb-4">Join the Circle</div>
          <p className="text-[#A39B8F] mb-8">Receive 10% off your first order and be the first to discover new arrivals.</p>
          <form className="flex" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-5 py-3.5 bg-white text-[#2C2825] text-sm focus:outline-none"
              required
            />
            <button type="submit" className="btn btn-gold px-8">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
