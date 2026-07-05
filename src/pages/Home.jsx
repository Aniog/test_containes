import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Home = () => {
  const bestsellers = products.slice(0, 5);
  
  const ugcItems = [
    { id: 1, caption: "Morning light", img: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80" },
    { id: 2, caption: "Golden hour", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80" },
    { id: 3, caption: "Everyday elegance", img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80" },
    { id: 4, caption: "Timeless beauty", img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400https://images.unsplash.com/photo-1515562141207-7a88fb7ce45e?w=400&q=80q=80" },
    { id: 5, caption: "Quiet luxury", img: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400https://images.unsplash.com/photo-1506630448388-4e3dcfe5d125?w=400&q=80q=80" },
  ];

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. These pieces feel like heirlooms.", rating: 5 },
    { name: "Sophia R.", text: "Beautiful packaging and even more beautiful jewelry. My go-to for gifts.", rating: 5 },
    { name: "Isabella K.", text: "I wear my huggies every day. They never tarnish and always get compliments.", rating: 5 },
  ];

  return (
    <div>
      {/* 1. Sticky Nav - handled in Navbar component */}

      {/* 2. Full-bleed Hero */}
      <section className="relative h-[100dvh] min-h-[700px] flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-[#2C2522]">
          <img 
            src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1600&q=90" 
            alt="Velmora Fine Jewelry"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="serif text-[56px] md:text-[72px] text-white tracking-[0.08em] mb-6 leading-none">
            Crafted to be<br />Treasured
          </h1>
          <p className="text-white/90 text-lg mb-10 tracking-wide">
            Demi-fine gold jewelry for the modern woman
          </p>
          <Link to="/shop" className="btn btn-primary inline-block">
            Shop the Collection
          </Link>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <div className="w-px h-12 bg-white/40" />
        </div>
      </section>

      {/* 3. Trust Bar */}
      <div className="trust-bar py-4 border-b border-[#E5DDD3] bg-white">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-wrap justify-center gap-x-8 gap-y-2 text-center">
          <span>FREE WORLDWIDE SHIPPING</span>
          <span className="hidden md:inline text-[#E5DDD3]">·</span>
          <span>30-DAY RETURNS</span>
          <span className="hidden md:inline text-[#E5DDD3]">·</span>
          <span>18K GOLD PLATED</span>
          <span className="hidden md:inline text-[#E5DDD3]">·</span>
          <span>HYPOALLERGENIC</span>
        </div>
      </div>

      {/* 4. Bestsellers */}
      <section className="max-w-[1400px] mx-auto px-6 pt-20 pb-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="text-xs tracking-[0.2em] text-[#C5A26F] mb-2">DISCOVER</div>
            <h2 className="serif text-4xl tracking-[0.05em]">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm tracking-[0.1em] hover:text-[#C5A26F] hidden md:block">
            VIEW ALL →
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 5. UGC Reel Row */}
      <section className="bg-[#F4EDE4] py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-10">
            <div className="text-xs tracking-[0.2em] text-[#C5A26F] mb-2">@VELMORA</div>
            <h3 className="serif text-3xl tracking-[0.05em]">As Seen On You</h3>
          </div>
          
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {ugcItems.map(item => (
              <div key={item.id} className="ugc-card snap-start rounded-sm">
                <img src={item.img} alt={item.caption} />
                <div className="ugc-caption">{item.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Shop by Category */}
      <section className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <div className="text-xs tracking-[0.2em] text-[#C5A26F] mb-2">EXPLORE</div>
          <h2 className="serif text-4xl tracking-[0.05em]">Shop by Category</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { name: "Earrings", path: "/shop", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80" },
            { name: "Necklaces", path: "/shop", img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80" },
            { name: "Huggies", path: "/shop", img: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80" },
          ].map(cat => (
            <Link key={cat.name} to={cat.path} className="category-tile group rounded-sm overflow-hidden">
              <img src={cat.img} alt={cat.name} />
              <div className="category-label">
                <span>{cat.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 7. Brand Story */}
      <section className="bg-white">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2">
          <div className="aspect-[4/3] md:aspect-auto bg-[#F4EDE4]">
            <img 
              src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1000https://images.unsplash.com/photo-1515562141207-7a88fb7ce45e?w=1000&q=80q=80" 
              alt="Our Craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center px-8 md:px-16 py-16 md:py-0">
            <div className="max-w-md">
              <div className="text-xs tracking-[0.2em] text-[#C5A26F] mb-3">EST. 2018</div>
              <h2 className="serif text-4xl tracking-[0.05em] mb-6">Our Story</h2>
              <p className="text-[#5C524C] leading-relaxed mb-8">
                Velmora was born from a desire to create jewelry that feels both precious and wearable. 
                Each piece is thoughtfully designed in our studio and crafted with the finest materials, 
                meant to be treasured for years to come.
              </p>
              <Link to="/shop" className="btn btn-outline inline-block">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Testimonials */}
      <section className="max-w-[1000px] mx-auto px-6 py-20 text-center">
        <div className="text-xs tracking-[0.2em] text-[#C5A26F] mb-3">LOVED BY MANY</div>
        <h2 className="serif text-4xl tracking-[0.05em] mb-14">What Our Clients Say</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="px-4">
              <div className="flex justify-center mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} size={14} className="fill-[#C5A26F] text-[#C5A26F]" />
                ))}
              </div>
              <p className="text-[#5C524C] italic mb-4 leading-relaxed">"{t.text}"</p>
              <div className="text-sm tracking-[0.1em] text-[#8A7F75]">— {t.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Newsletter */}
      <section className="bg-[#2C2522] py-16">
        <div className="max-w-md mx-auto px-6 text-center">
          <div className="text-[#C5A26F] text-xs tracking-[0.2em] mb-3">MEMBERS ONLY</div>
          <h3 className="serif text-white text-3xl tracking-[0.05em] mb-3">Join for 10% off</h3>
          <p className="text-[#D4B896] text-sm mb-8">Be the first to know about new arrivals and exclusive offers.</p>
          
          <form className="flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing!'); }}>
            <input 
              type="email" 
              placeholder="YOUR EMAIL ADDRESS" 
              className="newsletter-input text-white placeholder:text-[#8A7F75] text-center"
              required 
            />
            <button type="submit" className="btn btn-gold mt-2">
              SUBSCRIBE
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;