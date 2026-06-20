import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Home = () => {
  // Use first 5 products as bestsellers
  const bestsellers = products.slice(0, 5);

  // UGC mock data - vertical reel style
  const ugcItems = [
    { id: 1, caption: "My everyday staple", img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80" },
    { id: 2, caption: "Gifted to myself", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80" },
    { id: 3, caption: "Wedding day details", img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=80" },
    { id: 4, caption: "Layering goals", img: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&q=80" },
    { id: 5, caption: "Golden hour glow", img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=80" },
  ];

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. I wear my huggies every day and they still look brand new.", rating: 5 },
    { name: "Sofia R.", text: "Bought the Royal Heirloom Set as a gift. The packaging alone made it feel so special.", rating: 5 },
    { name: "Aisha K.", text: "Finally found jewelry that doesn't irritate my skin. The gold tone is so warm and beautiful.", rating: 5 },
  ];

  return (
    <div className="pt-20">
      {/* 1. HERO */}
      <section className="relative h-[100dvh] min-h-[600px] flex items-center justify-center bg-[#0D0D0D] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1600&q=90" 
            alt="Velmora Fine Jewelry - Woman wearing gold jewelry"
            className="w-full h-full object-cover opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-[#F5F2ED] text-5xl md:text-7xl font-semibold tracking-[0.02em] mb-6">
            Crafted to be<br />Treasured
          </h1>
          <p className="text-[#F5F2ED]/80 text-lg md:text-xl mb-10 max-w-md mx-auto">
            Demi-fine gold jewelry for the modern woman.
          </p>
          <Link to="/shop" className="btn btn-primary inline-block">
            Shop the Collection
          </Link>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-px h-12 bg-[#F5F2ED]/40" />
        </div>
      </section>

      {/* 2. TRUST BAR */}
      <div className="trust-bar border-b border-[#EDE8E0] py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center md:justify-between gap-x-8 gap-y-2 text-center">
            <span>Free Worldwide Shipping</span>
            <span>30-Day Returns</span>
            <span>18K Gold Plated</span>
            <span>Hypoallergenic</span>
          </div>
        </div>
      </div>

      {/* 3. BESTSELLERS */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-xs tracking-[0.2em] text-[#B8865A]">DISCOVER</span>
            <h2 className="section-title mt-2">Bestsellers</h2>
          </div>
          <Link to="/shop" className="hidden md:block text-sm tracking-[0.1em] hover:text-[#B8865A]">
            View All →
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Link to="/shop" className="text-sm tracking-[0.1em] hover:text-[#B8865A]">
            View All →
          </Link>
        </div>
      </section>

      {/* 4. UGC REEL ROW */}
      <section className="bg-[#F5F2ED] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-8">
            <span className="text-xs tracking-[0.2em] text-[#B8865A]">AS SEEN ON</span>
            <h2 className="section-title mt-2">Real Moments</h2>
          </div>
          
          <div className="ugc-scroll">
            {ugcItems.map((item) => (
              <div key={item.id} className="ugc-card">
                <img src={item.img} alt={item.caption} />
                <div className="ugc-caption">{item.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SHOP BY CATEGORY */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-10">
          <span className="text-xs tracking-[0.2em] text-[#B8865A]">EXPLORE</span>
          <h2 className="section-title mt-2">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { name: "Earrings", path: "/shop?category=Earrings", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80" },
            { name: "Necklaces", path: "/shop?category=Necklaces", img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80" },
            { name: "Huggies", path: "/shop?category=Huggies", img: "https://images.unsplash.com/photo-1535632787350-4e68b0f4b1a6?w=800&q=80" },
          ].map((cat) => (
            <Link key={cat.name} to={cat.path} className="category-tile group">
              <img src={cat.img} alt={cat.name} />
              <div className="category-label">{cat.name}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. BRAND STORY */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2">
          <div className="aspect-[4/3] md:aspect-auto">
            <img 
              src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1000&q=80" 
              alt="Velmora atelier" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center px-8 md:px-16 py-16 md:py-0">
            <div className="max-w-md">
              <span className="text-xs tracking-[0.2em] text-[#B8865A]">SINCE 2018</span>
              <h2 className="section-title mt-4 mb-6">Our Story</h2>
              <p className="body-text text-[#5C5C5C] mb-8">
                Velmora was born from a desire to create jewelry that feels both precious and wearable. 
                Each piece is thoughtfully designed in our studio and crafted with care using traditional 
                techniques and modern sensibility.
              </p>
              <Link to="/about" className="btn btn-outline">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-10 text-center">
          <span className="text-xs tracking-[0.2em] text-[#B8865A]">LOVED BY MANY</span>
          <h2 className="section-title mt-2">What Our Customers Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial">
              <div className="stars mb-4">★★★★★</div>
              <p className="body-text text-[#5C5C5C] mb-6">"{t.text}"</p>
              <p className="text-sm tracking-[0.05em]">{t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. NEWSLETTER */}
      <section className="newsletter py-16">
        <div className="max-w-md mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-[0.02em] mb-3 text-[#F5F2ED]">
            Join for 10% off your first order
          </h2>
          <p className="text-[#F5F2ED]/70 text-sm mb-8">
            Be the first to know about new arrivals and exclusive offers.
          </p>
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              alert('Thank you! You are now subscribed.');
              e.target.reset();
            }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input 
              type="email" 
              placeholder="Your email address" 
              className="input flex-1 bg-white/95 border-white/20 text-[#1C1C1C]"
              required 
            />
            <button type="submit" className="btn btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>
          <p className="text-[10px] text-[#F5F2ED]/50 mt-4 tracking-[0.05em]">
            We respect your inbox. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;