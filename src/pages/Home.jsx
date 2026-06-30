import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import Button from '../components/Button';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const bestsellers = products.slice(0, 5);
  
  const ugcItems = [
    { id: 1, caption: "Morning light", image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=400&q=80" },
    { id: 2, caption: "Golden hour", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80" },
    { id: 3, caption: "Effortless elegance", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" },
    { id: 4, caption: "Everyday luxury", image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&q=80" },
    { id: 5, caption: "Timeless beauty", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&q=80" },
  ];

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. My huggies have become my everyday staple.", rating: 5 },
    { name: "Sofia R.", text: "Beautiful packaging and even more beautiful jewelry. A gift that truly felt special.", rating: 5 },
    { name: "Isabella T.", text: "Finally found pieces that don't irritate my sensitive skin. Love them.", rating: 5 },
  ];

  return (
    <div>
      {/* 1. Sticky Nav - handled in Navbar component */}

      {/* 2. Full-bleed Hero */}
      <section className="relative h-[100dvh] min-h-[600px] flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-[#2C2823]">
          <img 
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce45e?w=2000&q=80" 
            alt="Velmora jewelry on model"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="text-5xl md:text-7xl text-white mb-6 tracking-[0.02em] font-medium">
            Crafted to be Treasured
          </h1>
          <p className="text-lg md:text-xl text-[#D4C4A8] mb-10 tracking-wide">
            Demi-fine jewelry for the modern woman
          </p>
          <Link to="/shop">
            <Button variant="primary">Shop the Collection</Button>
          </Link>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <div className="w-px h-12 bg-white/40" />
        </div>
      </section>

      {/* 3. Trust Bar */}
      <div className="trust-bar py-4 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs tracking-[0.15em] text-[#6B665F] text-center">
            <span>FREE WORLDWIDE SHIPPING</span>
            <span className="hidden md:inline">·</span>
            <span>30-DAY RETURNS</span>
            <span className="hidden md:inline">·</span>
            <span>18K GOLD PLATED</span>
            <span className="hidden md:inline">·</span>
            <span>HYPOALLERGENIC</span>
          </div>
        </div>
      </div>

      {/* 4. Bestsellers */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs tracking-[0.2em] text-[#B8976E] mb-2">DISCOVER</p>
            <h2 className="text-4xl tracking-[0.02em]">Bestsellers</h2>
          </div>
          <Link to="/shop" className="hidden md:block text-sm tracking-[0.1em] uppercase hover:text-[#B8976E] transition-colors">
            View All →
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 5. UGC Reel Row */}
      <section className="bg-[#2C2823] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-[#B8976E] text-xs tracking-[0.2em] mb-8">AS SEEN ON YOU</p>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
            {ugcItems.map((item) => (
              <div key={item.id} className="ugc-card w-[180px] md:w-[200px] aspect-[9/16] snap-start">
                <img 
                  src={item.image} 
                  alt={item.caption}
                  className="w-full h-full object-cover"
                />
                <div className="ugc-caption">
                  <p>{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Shop by Category */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-center text-xs tracking-[0.2em] text-[#B8976E] mb-3">EXPLORE</p>
        <h2 className="text-center text-4xl tracking-[0.02em] mb-12">Shop by Category</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { name: "Earrings", link: "/shop?category=Earrings", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80" },
            { name: "Necklaces", link: "/shop?category=Necklaces", img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80" },
            { name: "Huggies", link: "/shop?category=Huggies", img: "https://images.unsplash.com/photo-1506630448388-4bc034007a7b?w=800&q=80" },
          ].map((cat) => (
            <Link key={cat.name} to={cat.link} className="category-tile aspect-[4/3] block">
              <img src={cat.img} alt={cat.name} className="w-full h-full object-cover" />
              <div className="overlay" />
              <span className="label">{cat.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* 7. Brand Story */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2">
          <div className="aspect-[4/3] md:aspect-auto">
            <img 
              src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1200&q=80" 
              alt="Velmora atelier"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center px-8 md:px-16 py-16 md:py-0">
            <div className="max-w-md">
              <p className="text-xs tracking-[0.2em] text-[#B8976E] mb-4">OUR PHILOSOPHY</p>
              <h3 className="text-4xl tracking-[0.02em] mb-6">Quiet luxury,<br />timelessly made.</h3>
              <p className="text-[#6B665F] mb-8 leading-relaxed">
                Each piece is thoughtfully designed in our atelier and crafted with the finest materials. 
                We believe jewelry should feel as beautiful as it looks—effortless, enduring, and deeply personal.
              </p>
              <Link to="/about">
                <Button variant="outline">Our Story</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Testimonials */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <p className="text-xs tracking-[0.2em] text-[#B8976E] mb-3">LOVED BY MANY</p>
        <h2 className="text-4xl tracking-[0.02em] mb-14">What Our Clients Say</h2>
        
        <div className="grid md:grid-cols-3 gap-8 text-left">
          {testimonials.map((t, i) => (
            <div key={i} className="border border-[#E5DFD3] p-8">
              <div className="flex gap-0.5 mb-4 text-[#B8976E]">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-[#6B665F] mb-6 leading-relaxed">"{t.text}"</p>
              <p className="text-sm tracking-wider">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Newsletter */}
      <section className="bg-[#2C2823] py-16">
        <div className="max-w-md mx-auto px-6 text-center">
          <p className="text-[#B8976E] text-xs tracking-[0.2em] mb-3">JOIN THE CIRCLE</p>
          <h3 className="text-white text-3xl tracking-[0.02em] mb-4">Receive 10% off your first order</h3>
          <p className="text-[#D4C4A8] text-sm mb-8">Be the first to know about new arrivals and exclusive offers.</p>
          
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing!'); }}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="input flex-1 bg-white/95 border-[#4A4640] text-[#2C2823]"
              required 
            />
            <Button variant="primary" type="submit">SUBSCRIBE</Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;