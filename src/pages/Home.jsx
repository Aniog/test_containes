import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Home = () => {
  const bestsellers = products.slice(0, 5);
  
  const ugcCaptions = [
    "Morning light",
    "Everyday elegance",
    "Layered with love",
    "Golden hour",
    "Timeless touch",
  ];

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. I've worn my huggies daily for months and they still look brand new." },
    { name: "Sofia R.", text: "Bought the heirloom set as a gift—my sister hasn't taken it off since. Beautiful packaging too." },
    { name: "Maya K.", text: "Finally found jewelry that doesn't irritate my sensitive skin. The gold tone is so rich." },
  ];

  return (
    <div className="pt-20">
      {/* 1. Hero */}
      <section className="relative h-[90vh] flex items-center justify-center bg-[#2C2823] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce45e?w=1600&q=80')] bg-cover bg-center opacity-70" />
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="font-serif text-6xl md:text-7xl text-white tracking-[0.08em] mb-6">
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

      {/* 2. Trust Bar */}
      <div className="trust-bar py-4 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-2 text-xs tracking-[0.15em] text-[#6B665E] text-center">
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
            <div className="text-xs tracking-[0.2em] text-[#8B7355] mb-2">DISCOVER</div>
            <h2 className="font-serif text-4xl tracking-[0.05em]">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm tracking-[0.1em] underline hover:text-[#8B7355]">View All</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bestsellers.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 4. UGC Reel Row */}
      <section className="bg-[#F1EDE6] py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-xs tracking-[0.2em] text-[#8B7355] mb-6">AS SEEN ON YOU</div>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="ugc-card aspect-[9/16] bg-[#D4C9B5]">
                <img 
                  src={`https://images.unsplash.com/photo-${['1535632066927-ab7c9ab60908','1611085583191-a3b181a88401','1599643478518-a784e5dc4c8f','1506630448388-4bc735f7d51f','1617038220319-276d3cfab638'][i]}?w=400&q=80`}
                  alt="UGC"
                  className="w-full h-full object-cover"
                />
                <div className="ugc-caption">{ugcCaptions[i]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Shop by Category */}
      <section className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="text-xs tracking-[0.2em] text-[#8B7355] mb-8 text-center">EXPLORE</div>
        <h2 className="font-serif text-4xl tracking-[0.05em] text-center mb-12">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: 'Earrings', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80' },
            { name: 'Necklaces', img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80' },
            { name: 'Huggies', img: 'https://images.unsplash.com/photo-1506630448388-4bc735f7d51f?w=800&q=80' },
          ].map((cat, idx) => (
            <Link key={idx} to="/shop" className="category-tile group block aspect-[4/3] overflow-hidden">
              <img src={cat.img} alt={cat.name} className="w-full h-full object-cover" />
              <div className="category-label">{cat.name}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. Brand Story */}
      <section className="bg-white">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2">
          <div className="aspect-[4/3] md:aspect-auto bg-[#F1EDE6]">
            <img 
              src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce45e?w=1000&q=80" 
              alt="Our Story" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center px-8 md:px-16 py-16 md:py-0">
            <div>
              <div className="text-xs tracking-[0.2em] text-[#8B7355] mb-4">EST. 2019</div>
              <h3 className="font-serif text-4xl tracking-[0.05em] mb-6">Our Story</h3>
              <p className="text-[#6B665E] leading-relaxed mb-8 max-w-md">
                Velmora was born from a desire to create jewelry that feels as precious as the moments it marks. 
                Each piece is thoughtfully designed in our studio and crafted with the finest materials.
              </p>
              <Link to="/" className="text-sm tracking-[0.1em] underline hover:text-[#8B7355]">Learn More →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <div className="text-xs tracking-[0.2em] text-[#8B7355] mb-3">LOVED BY MANY</div>
          <h2 className="font-serif text-4xl tracking-[0.05em]">What Our Customers Say</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-8 border border-[#E5DFD4]">
              <div className="stars mb-4">★★★★★</div>
              <p className="text-[#6B665E] italic mb-6 leading-relaxed">"{t.text}"</p>
              <div className="text-sm tracking-[0.05em]">{t.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Newsletter */}
      <section className="newsletter py-16">
        <div className="max-w-md mx-auto px-6 text-center text-white">
          <div className="font-serif text-3xl tracking-[0.08em] mb-3">Join the Circle</div>
          <p className="text-white/80 mb-8">Receive 10% off your first order and early access to new collections.</p>
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-5 py-3.5 text-sm bg-white/10 border border-white/30 placeholder:text-white/60 text-white focus:outline-none focus:border-white"
            />
            <button type="submit" className="btn bg-white text-[#8B7355] hover:bg-[#F8F5F1] whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;