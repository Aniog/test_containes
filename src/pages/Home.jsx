import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Home = () => {
  const bestsellers = products.slice(0, 5);
  const ugcCaptions = [
    "Morning light on the Vivid Aura",
    "Layered with the Flora Nectar",
    "Golden Sphere in daily rotation",
    "Amber Lace for evening",
    "The Heirloom Set, gifted",
  ];

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. I've worn my huggies daily for months and they still look brand new." },
    { name: "Sofia R.", text: "Beautiful packaging and the necklace is even more stunning in person. My go-to gift for friends." },
    { name: "Maya K.", text: "Finally found jewelry that doesn't irritate my sensitive skin. The gold tone is so rich." },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[100dvh] min-h-[700px] flex items-center justify-center bg-[#1C1C1C] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=2000&q=80" 
          alt="Velmora Jewelry" 
          className="absolute inset-0 w-full h-full object-cover opacity-75"
        />
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="font-serif text-[56px] md:text-[72px] leading-[1.05] tracking-[-0.02em] text-white mb-6">Crafted to be Treasured</h1>
          <p className="text-[#EDE9E0] text-lg mb-10 tracking-[0.02em]">Demi-fine gold jewelry, made to last a lifetime.</p>
          <Link to="/shop" className="btn-primary inline-block">Shop the Collection</Link>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="border-b border-[#E5E2DC] py-4 text-center text-xs tracking-[0.15em] text-[#8B8178] flex flex-wrap justify-center gap-x-8 gap-y-1">
        <span>Free Worldwide Shipping</span>
        <span>30-Day Returns</span>
        <span>18K Gold Plated</span>
        <span>Hypoallergenic</span>
      </div>

      {/* Bestsellers */}
      <section className="max-w-[1400px] mx-auto px-6 pt-20 pb-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="text-xs tracking-[0.2em] text-[#BFA46F] mb-2">DISCOVER</div>
            <h2 className="font-serif text-4xl tracking-[-0.01em]">Bestsellers</h2>
          </div>
          <Link to="/shop" className="hidden md:block text-sm tracking-[0.05em] hover:text-[#BFA46F]">View All →</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-12">
          {bestsellers.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* UGC Reel Row */}
      <section className="bg-[#1C1C1C] py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-[#BFA46F] text-xs tracking-[0.2em] mb-8">AS SEEN ON YOU</div>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {[1,2,3,4,5].map((i, idx) => (
              <div key={i} className="ugc-card flex-shrink-0 w-[180px] md:w-[200px] aspect-[9/16] bg-[#2A2A2A] snap-start">
                <img 
                  src={`https://images.unsplash.com/photo-${['1535632066927-ab7c9ab60908','1611085583191-a3b181a88401','1617038220319-276d3cfab638','1599643478518-a784e5dc4c8f','1611085583191-a3b181a88401'][idx]}?w=600&q=80`}
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
      <section className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <div className="text-xs tracking-[0.2em] text-[#BFA46F] mb-2">EXPLORE</div>
          <h2 className="font-serif text-4xl tracking-[-0.01em]">Shop by Category</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {['Earrings','Necklaces','Huggies'].map((cat, idx) => (
            <Link key={cat} to="/shop" className="category-tile aspect-[16/10] bg-[#1C1C1C] overflow-hidden group">
              <img 
                src={['https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=900&q=80','https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=900&q=80','https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=900&q=80'][idx]} 
                alt={cat} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="category-label">{cat}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="max-w-[1400px] mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/3] bg-[#F0EDE7]">
            <img src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1000&q=80" alt="Our Craft" className="w-full h-full object-cover" />
          </div>
          <div className="max-w-lg">
            <div className="text-xs tracking-[0.2em] text-[#BFA46F] mb-3">EST. 2019</div>
            <h2 className="font-serif text-4xl tracking-[-0.01em] mb-6">Our Story</h2>
            <p className="text-[#5C5650] leading-relaxed mb-8">Velmora was born from a desire to create jewelry that feels both precious and wearable. Each piece is thoughtfully designed in our studio and crafted with the finest materials—never mass-produced, always intentional.</p>
            <Link to="/" className="btn-outline inline-block">Learn More</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#F9F7F3] py-16">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-xs tracking-[0.2em] text-[#BFA46F] mb-2">LOVED BY MANY</div>
            <h2 className="font-serif text-4xl tracking-[-0.01em]">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-8">
                <div className="flex gap-0.5 mb-5 text-[#BFA46F]"><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /></div>
                <p className="text-[#5C5650] mb-6 leading-relaxed">"{t.text}"</p>
                <div className="text-sm tracking-[0.05em]">{t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-[700px] mx-auto px-6 py-20 text-center">
        <div className="text-xs tracking-[0.2em] text-[#BFA46F] mb-3">STAY CLOSE</div>
        <h2 className="font-serif text-4xl tracking-[-0.01em] mb-4">Join for 10% off your first order</h2>
        <p className="text-[#8B8178] mb-8">Be the first to know about new arrivals and private events.</p>
        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={e => e.preventDefault()}>
          <input type="email" placeholder="Your email address" className="flex-1 px-5 py-3.5 border border-[#E5E2DC] bg-white text-sm focus:outline-none focus:border-[#1C1C1C]" />
          <button type="submit" className="btn-primary whitespace-nowrap">Subscribe</button>
        </form>
      </section>
    </div>
  );
};

export default Home;