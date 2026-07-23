import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Home = ({ onAddToCart }) => {
  const bestsellers = products.slice(0, 5);
  
  const ugcItems = [
    { id: 1, caption: "Morning light", img: "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?w=400&q=80" },
    { id: 2, caption: "Golden hour", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80" },
    { id: 3, caption: "Effortless", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" },
    { id: 4, caption: "Everyday luxury", img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&q=80" },
    { id: 5, caption: "Timeless", img: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&q=80" },
  ];

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. My huggies have become my everyday staple." },
    { name: "Sofia R.", text: "Beautiful packaging and even more beautiful jewelry. A gift I treasure." },
    { name: "Isabella T.", text: "Finally found pieces that feel premium without the markup. Love Velmora." },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[92vh] flex items-center justify-center bg-[#1C1C1C] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=2000&q=80" 
          alt="Velmora Jewelry" 
          className="absolute inset-0 w-full h-full object-cover opacity-75"
        />
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="font-serif text-[72px] md:text-[88px] leading-[0.95] tracking-[-0.02em] text-white mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-white/90 text-lg mb-10 tracking-[0.02em]">Demi-fine gold jewelry for the modern woman.</p>
          <Link to="/shop" className="btn-gold inline-block">SHOP THE COLLECTION</Link>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="border-b border-[#E5E0D8] py-4 text-center text-xs tracking-[0.15em] text-[#8B7E6F] flex flex-wrap justify-center gap-x-8 gap-y-1">
        <span>FREE WORLDWIDE SHIPPING</span>
        <span>30-DAY RETURNS</span>
        <span>18K GOLD PLATED</span>
        <span>HYPOALLERGENIC</span>
      </div>

      {/* Bestsellers */}
      <section className="max-w-[1400px] mx-auto px-6 pt-20 pb-16">
        <div className="flex justify-between items-end mb-10">
          <div>
            <div className="text-xs tracking-[0.15em] text-[#8B7E6F] mb-2">DISCOVER</div>
            <h2 className="font-serif text-4xl tracking-[-0.01em]">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm tracking-[0.08em] hover:text-[#C5A26F]">VIEW ALL →</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bestsellers.map(p => (
            <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />
          ))}
        </div>
      </section>

      {/* UGC Reel */}
      <section className="bg-[#F5F2ED] py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-xs tracking-[0.15em] text-[#8B7E6F] mb-3">AS SEEN ON</div>
          <h2 className="font-serif text-4xl tracking-[-0.01em] mb-8">Real Moments</h2>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x">
            {ugcItems.map(item => (
              <div key={item.id} className="ugc-card flex-shrink-0 w-[180px] aspect-[9/16] rounded overflow-hidden snap-start">
                <img src={item.img} alt="" className="w-full h-full object-cover" />
                <div className="ugc-caption">{item.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="text-xs tracking-[0.15em] text-[#8B7E6F] mb-3 text-center">EXPLORE</div>
        <h2 className="font-serif text-4xl tracking-[-0.01em] text-center mb-12">Shop by Category</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {['Earrings', 'Necklaces', 'Huggies'].map(cat => (
            <Link key={cat} to={`/shop?category=${cat}`} className="category-tile aspect-[16/10] bg-[#1C1C1C] rounded overflow-hidden">
              <img src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80" alt={cat} className="w-full h-full object-cover" />
              <div className="category-label">{cat}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="max-w-[1400px] mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=900&q=80" alt="Our Story" className="w-full" />
          <div>
            <div className="text-xs tracking-[0.15em] text-[#8B7E6F] mb-3">EST. 2019</div>
            <h2 className="font-serif text-5xl tracking-[-0.01em] mb-6">Our Story</h2>
            <p className="text-[#8B7E6F] leading-relaxed mb-8">Velmora was born from a desire to create jewelry that feels as special as the moments it marks. Each piece is thoughtfully designed in our studio and crafted with the finest materials.</p>
            <Link to="/about" className="btn-outline inline-block">READ MORE</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-16 border-y border-[#E5E0D8]">
        <div className="max-w-[1100px] mx-auto px-6 text-center">
          <div className="text-xs tracking-[0.15em] text-[#8B7E6F] mb-3">LOVED BY MANY</div>
          <h2 className="font-serif text-4xl tracking-[-0.01em] mb-12">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {testimonials.map((t, i) => (
              <div key={i} className="border-l-2 border-[#C5A26F] pl-6">
                <div className="flex mb-3">{[...Array(5)].map((_, j) => <Star key={j} size={14} className="fill-[#C5A26F] text-[#C5A26F]" />)}</div>
                <p className="text-sm text-[#8B7E6F] mb-4 leading-relaxed">"{t.text}"</p>
                <div className="text-sm tracking-[0.05em]">{t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-[600px] mx-auto px-6 py-20 text-center">
        <div className="font-serif text-4xl tracking-[-0.01em] mb-4">Join for 10% off</div>
        <p className="text-[#8B7E6F] mb-8">Be the first to know about new arrivals and exclusive offers.</p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input type="email" placeholder="YOUR EMAIL" className="flex-1 border border-[#E5E0D8] px-5 py-3.5 text-sm focus:outline-none" />
          <button className="btn-primary whitespace-nowrap">SUBSCRIBE</button>
        </div>
      </section>
    </div>
  );
};

export default Home;