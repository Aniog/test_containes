import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import ProductCard from '../components/ui/ProductCard';
import { products } from '../data/products';

const Home = ({ onAddToCart }) => {
  const bestsellers = products.slice(0, 5);
  
  const ugcItems = [
    { id: 1, caption: "Morning light", img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80" },
    { id: 2, caption: "Golden hour", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80" },
    { id: 3, caption: "Effortless", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" },
    { id: 4, caption: "Timeless", img: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&q=80" },
    { id: 5, caption: "Everyday luxe", img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=80" },
  ];

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. I've worn my huggies daily for months and they still look brand new.", rating: 5 },
    { name: "Sophia R.", text: "Bought the Royal Heirloom Set as a gift. The packaging alone made it feel so special.", rating: 5 },
    { name: "Isabella T.", text: "Finally found jewelry that doesn't irritate my sensitive skin. The gold is so warm and beautiful.", rating: 5 },
  ];

  return (
    <div>
      {/* 1. Sticky Nav - handled in Layout */}

      {/* 2. Full-bleed Hero */}
      <section className="relative h-[90vh] flex items-center justify-center bg-charcoal overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=2000&q=80')] bg-cover bg-center opacity-70" />
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="serif text-6xl md:text-7xl text-white tracking-[0.05em] mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-cream/90 text-lg mb-10 tracking-[0.02em]">
            Demi-fine gold jewelry for the modern woman
          </p>
          <Link to="/shop" className="btn-gold inline-block">
            SHOP THE COLLECTION
          </Link>
        </div>
      </section>

      {/* 3. Trust Bar */}
      <div className="trust-bar py-4 border-b border-divider bg-white">
        <div className="max-w-[1280px] mx-auto px-6 flex flex-wrap justify-center gap-x-8 gap-y-2 text-center">
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
      <section className="max-w-[1280px] mx-auto px-6 py-16 section-padding">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="text-xs tracking-[0.15em] text-gold mb-2">DISCOVER</div>
            <h2 className="serif text-4xl">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm tracking-[0.05em] hover:text-gold hidden md:block">
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

      {/* 5. UGC Reel Row */}
      <section className="bg-white py-16 border-y border-divider">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-10">
            <div className="text-xs tracking-[0.15em] text-gold mb-2">AS SEEN ON YOU</div>
            <h2 className="serif text-4xl">Real Moments</h2>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {ugcItems.map(item => (
              <div key={item.id} className="ugc-card">
                <img src={item.img} alt={item.caption} />
                <div className="ugc-caption">{item.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Shop by Category */}
      <section className="max-w-[1280px] mx-auto px-6 py-16 section-padding">
        <div className="text-center mb-10">
          <div className="text-xs tracking-[0.15em] text-gold mb-2">EXPLORE</div>
          <h2 className="serif text-4xl">Shop by Category</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Earrings", link: "/shop?category=Earrings", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80" },
            { name: "Necklaces", link: "/shop?category=Necklaces", img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80" },
            { name: "Huggies", link: "/shop?category=Huggies", img: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80" },
          ].map(cat => (
            <Link key={cat.name} to={cat.link} className="category-tile group">
              <img src={cat.img} alt={cat.name} />
              <div className="category-overlay">
                <span className="text-white text-xl tracking-[0.15em] serif">{cat.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 7. Brand Story */}
      <section className="bg-white border-y border-divider">
        <div className="max-w-[1280px] mx-auto grid md:grid-cols-2">
          <div className="aspect-[4/3] md:aspect-auto">
            <img 
              src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1200&q=80" 
              alt="Velmora atelier" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center p-10 md:p-16">
            <div>
              <div className="text-xs tracking-[0.15em] text-gold mb-3">EST. 2018</div>
              <h2 className="serif text-4xl mb-6">Our Story</h2>
              <p className="text-taupe leading-relaxed mb-8">
                Velmora was born from a desire to create jewelry that feels both precious and wearable. 
                Each piece is thoughtfully designed in our atelier, using only the finest materials 
                that stand the test of time and touch.
              </p>
              <Link to="/about" className="btn-outline text-sm inline-block">
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Testimonials */}
      <section className="max-w-[1280px] mx-auto px-6 py-16 section-padding">
        <div className="text-center mb-12">
          <div className="text-xs tracking-[0.15em] text-gold mb-2">LOVED BY MANY</div>
          <h2 className="serif text-4xl">What Our Clients Say</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="text-center">
              <div className="stars flex justify-center gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="testimonial mb-4">"{t.text}"</p>
              <p className="text-sm text-taupe">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Newsletter */}
      <section className="bg-charcoal py-16">
        <div className="max-w-md mx-auto px-6 text-center">
          <div className="text-gold text-xs tracking-[0.15em] mb-3">MEMBERS ONLY</div>
          <h2 className="serif text-3xl text-white mb-4">Join for 10% off your first order</h2>
          <p className="text-cream/70 text-sm mb-8">Be the first to know about new arrivals and exclusive offers.</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="newsletter-input flex-1 rounded-l-none border-r-0"
            />
            <button className="btn-gold rounded-l-none px-8">JOIN</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;