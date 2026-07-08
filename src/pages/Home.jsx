import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const Home = ({ products, addToCart }) => {
  const bestsellers = products.slice(0, 5);
  
  const ugcItems = [
    { id: 1, caption: "Everyday elegance", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80" },
    { id: 2, caption: "Golden hour glow", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80" },
    { id: 3, caption: "Timeless beauty", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&q=80" },
    { id: 4, caption: "Effortless luxury", image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&q=80" },
    { id: 5, caption: "Modern heirloom", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" },
  ];

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. My huggies have become my everyday staple.", rating: 5 },
    { name: "Sofia R.", text: "Beautiful packaging and even more beautiful jewelry. A perfect gift for my sister.", rating: 5 },
    { name: "Isabella T.", text: "I wear my necklace every day. It hasn't tarnished at all. Worth every penny.", rating: 5 },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-[#2C2825] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=2000&q=80')] bg-cover bg-center opacity-60" />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="font-serif text-6xl md:text-7xl text-white tracking-[0.05em] mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-white/90 text-lg tracking-wide mb-10 max-w-md mx-auto">
            Demi-fine gold jewelry for the modern woman who values quiet luxury.
          </p>
          <Link to="/shop" className="btn-primary inline-block">SHOP THE COLLECTION</Link>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="trust-bar py-4 border-b border-[#E5DFD3] bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-x-8 gap-y-2 text-center">
          <span>FREE WORLDWIDE SHIPPING</span>
          <span className="hidden md:inline">·</span>
          <span>30-DAY RETURNS</span>
          <span className="hidden md:inline">·</span>
          <span>18K GOLD PLATED</span>
          <span className="hidden md:inline">·</span>
          <span>HYPOALLERGENIC</span>
        </div>
      </div>

      {/* Bestsellers */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex justify-between items-end mb-10">
          <div>
            <div className="text-xs tracking-[0.15em] text-[#6B665F] mb-2">DISCOVER</div>
            <h2 className="font-serif text-4xl tracking-[0.05em]">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm tracking-[0.1em] hover:text-[#B89778] transition-colors hidden md:block">VIEW ALL →</Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bestsellers.map(product => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      </section>

      {/* UGC Reel Row */}
      <section className="bg-white py-16 border-y border-[#E5DFD3]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-xs tracking-[0.15em] text-[#6B665F] mb-8 text-center">AS SEEN ON YOU</div>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {ugcItems.map(item => (
              <div key={item.id} className="ugc-card flex-shrink-0 w-[180px] h-[320px] snap-start">
                <img src={item.image} alt="" className="w-full h-full object-cover" />
                <div className="ugc-caption">{item.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section id="collections" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <div className="text-xs tracking-[0.15em] text-[#6B665F] mb-2">EXPLORE</div>
          <h2 className="font-serif text-4xl tracking-[0.05em]">Shop by Category</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Earrings", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80", link: "/shop?category=Earrings" },
            { name: "Necklaces", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80", link: "/shop?category=Necklaces" },
            { name: "Huggies", image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80", link: "/shop?category=Huggies" },
          ].map(cat => (
            <Link key={cat.name} to={cat.link} className="category-tile aspect-[4/3] block">
              <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
              <div className="category-label font-serif tracking-[0.15em]">{cat.name}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section id="about" className="bg-white border-y border-[#E5DFD3]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2">
          <div className="aspect-[4/3] md:aspect-auto">
            <img 
              src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&q=80" 
              alt="Velmora atelier" 
              className="w-full h-full object-cover" 
            />
          </div>
          <div className="flex items-center px-8 md:px-16 py-16 md:py-0">
            <div>
              <div className="text-xs tracking-[0.15em] text-[#6B665F] mb-3">EST. 2019</div>
              <h3 className="font-serif text-4xl tracking-[0.05em] mb-6">Our Story</h3>
              <p className="text-[#6B665F] leading-relaxed mb-8 max-w-md">
                Velmora was born from a desire to create jewelry that feels both precious and wearable. 
                Each piece is thoughtfully designed in our New York studio and crafted with the finest materials.
              </p>
              <a href="#journal" className="text-sm tracking-[0.1em] border-b border-[#2C2825] pb-0.5 hover:text-[#B89778] hover:border-[#B89778] transition-colors">READ OUR JOURNAL →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <div className="text-xs tracking-[0.15em] text-[#6B665F] mb-2">LOVED BY MANY</div>
          <h2 className="font-serif text-4xl tracking-[0.05em]">What Our Clients Say</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="text-center px-4">
              <div className="flex justify-center gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={16} fill="#B89778" color="#B89778" />
                ))}
              </div>
              <p className="text-[#6B665F] italic mb-4">"{t.text}"</p>
              <div className="text-sm tracking-[0.05em]">{t.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter py-16">
        <div className="max-w-md mx-auto px-6 text-center">
          <div className="font-serif text-3xl tracking-[0.05em] mb-3">Join the Circle</div>
          <p className="text-white/70 text-sm tracking-wide mb-8">Be the first to know about new arrivals and receive 10% off your first order.</p>
          
          <form className="flex" onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing!'); }}>
            <input 
              type="email" 
              placeholder="YOUR EMAIL" 
              className="flex-1 bg-white/10 border border-white/30 px-5 py-3 text-sm tracking-[0.1em] placeholder:text-white/50 focus:outline-none focus:border-white/60" 
              required 
            />
            <button type="submit" className="bg-white text-[#2C2825] px-8 text-sm tracking-[0.1em] hover:bg-[#B89778] hover:text-white transition-colors">JOIN</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;