import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import ProductCard from '../components/product/ProductCard';
import Button from '../components/ui/Button';
import { products } from '../data/products';

const Home = () => {
  const bestsellers = products.slice(0, 5);
  
  const ugcItems = [
    { id: 1, caption: "Morning light", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80" },
    { id: 2, caption: "Everyday elegance", image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&q=80" },
    { id: 3, caption: "Golden hour", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80" },
    { id: 4, caption: "Timeless beauty", image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=80" },
    { id: 5, caption: "Effortless charm", image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&q=80" },
  ];

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. My necklace has become my signature piece." },
    { name: "Sophia R.", text: "Beautiful packaging and even more beautiful jewelry. A gift I'll treasure." },
    { name: "Isabella K.", text: "Finally found pieces that feel special without being ostentatious." },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-[#1C1C1C] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=2000&q=80')] bg-cover bg-center opacity-70" />
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="serif text-6xl md:text-7xl text-white tracking-[-0.02em] mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-[#F8F5F0] text-lg mb-10 tracking-wide">
            Demi-fine jewelry for the modern woman
          </p>
          <Link to="/shop">
            <Button variant="gold">Shop the Collection</Button>
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="border-b border-[#E5E0D8] py-4">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs tracking-[0.1em] uppercase text-[#8B7E6B]">
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
      <section className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="text-xs tracking-[0.15em] uppercase text-[#8B7E6B] mb-2">Signature Pieces</div>
            <h2 className="serif text-4xl">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm tracking-[0.08em] uppercase hover:text-[#C5A46E]">View All →</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* UGC Reel */}
      <section className="bg-[#1C1C1C] py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-10">
            <div className="text-xs tracking-[0.15em] uppercase text-[#C5A46E] mb-2">As Seen On You</div>
            <h2 className="serif text-4xl text-white">Moments in Gold</h2>
          </div>
          <div className="ugc-scroll flex gap-4 overflow-x-auto pb-4">
            {ugcItems.map((item) => (
              <div key={item.id} className="flex-shrink-0 w-[180px] relative">
                <div className="aspect-[9/16] bg-[#2A2A2A] overflow-hidden">
                  <img src={item.image} alt={item.caption} className="w-full h-full object-cover" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                  <p className="serif text-white text-sm tracking-wide">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <div className="text-xs tracking-[0.15em] uppercase text-[#8B7E6B] mb-2">Discover</div>
          <h2 className="serif text-4xl">Shop by Category</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Earrings", link: "/shop?category=Earrings" },
            { name: "Necklaces", link: "/shop?category=Necklaces" },
            { name: "Huggies", link: "/shop?category=Huggies" },
          ].map((cat, idx) => (
            <Link key={idx} to={cat.link} className="group relative aspect-[16/10] bg-[#E5E0D8] overflow-hidden block">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-xl tracking-[0.15em] uppercase serif opacity-0 group-hover:opacity-100 transition-opacity">
                  {cat.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/3] bg-[#E5E0D8]">
            <img 
              src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=1000&q=80" 
              alt="Our atelier" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-w-lg">
            <div className="text-xs tracking-[0.15em] uppercase text-[#8B7E6B] mb-3">Since 2018</div>
            <h2 className="serif text-4xl mb-6">Our Story</h2>
            <p className="text-[#8B7E6B] leading-relaxed mb-8">
              Velmora was born from a desire to create jewelry that feels both special and wearable. 
              Each piece is thoughtfully designed in our studio and crafted with care using traditional 
              techniques and modern sensibilities.
            </p>
            <Link to="/" className="text-sm tracking-[0.08em] uppercase border-b border-[#1C1C1C] pb-0.5 hover:text-[#C5A46E] hover:border-[#C5A46E]">
              Learn More About Us →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#F4F1EB] py-20">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-xs tracking-[0.15em] uppercase text-[#8B7E6B] mb-2">Voices</div>
            <h2 className="serif text-4xl">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="text-center">
                <div className="stars flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-[#8B7E6B] italic mb-4">"{t.text}"</p>
                <div className="text-sm tracking-wide">— {t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="bg-[#1C1C1C] text-center py-16 px-6">
          <div className="max-w-md mx-auto">
            <div className="serif text-3xl text-white mb-3">Join the Circle</div>
            <p className="text-[#8B7E6B] mb-8">Receive 10% off your first order and early access to new collections.</p>
            <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing!'); }}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="input flex-1"
                required 
              />
              <Button variant="gold" type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;