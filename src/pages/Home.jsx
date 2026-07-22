import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import UGCCard from '../components/UGCCard';
import { products } from '../data/products';

const Home = () => {
  const bestsellers = products.filter(p => p.featured).slice(0, 5);
  
  const ugcCaptions = [
    "Morning light on the Vivid Aura",
    "The Flora Nectar at golden hour",
    "Everyday elegance with the Sphere Huggies",
    "Lace details catching the sun",
    "The Heirloom Set, passed down"
  ];

  const testimonials = [
    {
      text: "The most beautiful pieces I've ever owned. The quality is exceptional and they feel so special.",
      author: "Elena M."
    },
    {
      text: "Bought the Royal Heirloom Set as a gift for my sister. She wears it every day. Perfect.",
      author: "Sofia R."
    },
    {
      text: "I love that these pieces look expensive but feel so wearable. My new everyday staples.",
      author: "Aisha K."
    }
  ];

  return (
    <div className="pt-20">
      {/* 1. Full-bleed Hero */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center bg-[#EDE4D7] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://placehold.co/1920x1080/F5EDE3/1C1917?text="
            alt="Warm-lit close-up of gold jewelry on a model"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/30" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl mb-6 tracking-[-0.02em]">
            Crafted to be Treasured
          </h1>
          <p className="text-white/90 text-lg mb-8 max-w-md mx-auto">
            Demi-fine gold jewelry for the moments that matter.
          </p>
          <Link to="/shop" className="btn btn-primary inline-block">
            SHOP THE COLLECTION
          </Link>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-px h-12 bg-white/50" />
        </div>
      </section>

      {/* 2. Trust Bar */}
      <div className="trust-bar py-4 border-b border-[#D9D2C7] bg-white">
        <div className="container flex flex-wrap justify-center items-center gap-x-8 gap-y-2 text-center">
          <span>FREE WORLDWIDE SHIPPING</span>
          <span className="hidden md:inline text-[#D9D2C7]">·</span>
          <span>30-DAY RETURNS</span>
          <span className="hidden md:inline text-[#D9D2C7]">·</span>
          <span>18K GOLD PLATED</span>
          <span className="hidden md:inline text-[#D9D2C7]">·</span>
          <span>HYPOALLERGENIC</span>
        </div>
      </div>

      {/* 3. Bestsellers */}
      <section className="section container">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-xs tracking-[0.1em] text-[#6B635C] uppercase">Curated for you</span>
            <h2 className="mt-1">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm tracking-[0.06em] text-[#6B635C] hover:text-[#B89778] hidden md:block">
            VIEW ALL →
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-8 md:hidden">
          <Link to="/shop" className="text-sm tracking-[0.06em] text-[#6B635C]">VIEW ALL →</Link>
        </div>
      </section>

      {/* 4. UGC Reel Row */}
      <section className="section-sm bg-[#F0EBE3]">
        <div className="container">
          <div className="flex items-end justify-between mb-6">
            <div>
              <span className="text-xs tracking-[0.1em] text-[#6B635C] uppercase">As seen on you</span>
              <h2 className="mt-1">Moments in Velmora</h2>
            </div>
          </div>
          
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {ugcCaptions.map((caption, index) => (
              <div key={index} className="snap-start">
                <UGCCard caption={caption} imageIndex={index} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Shop by Category */}
      <section className="section container">
        <div className="text-center mb-10">
          <span className="text-xs tracking-[0.1em] text-[#6B635C] uppercase">Find your piece</span>
          <h2 className="mt-1">Shop by Category</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: 'Earrings', path: '/shop?category=Earrings' },
            { name: 'Necklaces', path: '/shop?category=Necklaces' },
            { name: 'Huggies', path: '/shop?category=Huggies' }
          ].map((cat, index) => (
            <Link key={index} to={cat.path} className="category-tile group">
              <img 
                src={`https://placehold.co/800x600/F5EDE3/1C1917?text=`}
                alt={cat.name}
              />
              <div className="category-tile-label">
                <span>{cat.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. Brand Story Split */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] bg-[#F0EBE3] overflow-hidden">
              <img 
                src="https://placehold.co/800x600/EDE4D7/1C1917?text="
                alt="Velmora atelier workspace"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="max-w-lg">
              <span className="text-xs tracking-[0.1em] text-[#6B635C] uppercase">Since 2018</span>
              <h2 className="mt-2 mb-6">Our Story</h2>
              <div className="space-y-4 text-[#6B635C] text-[15px]">
                <p>
                  Velmora was born from a simple belief: that beautiful jewelry should be accessible, 
                  not exclusive. We design demi-fine pieces that feel as special as fine jewelry, 
                  without the precious price tag.
                </p>
                <p>
                  Every piece is hand-finished in small batches, using 18K gold plating over 
                  hypoallergenic brass. We believe in quality you can feel, and beauty that lasts.
                </p>
              </div>
              <Link to="/about" className="btn btn-gold-outline mt-8 inline-block">
                READ OUR STORY
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="section container">
        <div className="text-center mb-10">
          <span className="text-xs tracking-[0.1em] text-[#6B635C] uppercase">Kind words</span>
          <h2 className="mt-1">From Our Community</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial">
              <div className="testimonial-stars flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <p className="testimonial-author">— {testimonial.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Newsletter */}
      <section className="newsletter py-16">
        <div className="container max-w-md text-center">
          <h2 className="text-white mb-3">Join for 10% off your first order</h2>
          <p className="text-[#9A9085] mb-8 text-sm">
            Be the first to know about new arrivals, private sales, and stories from the atelier.
          </p>
          <form 
            className="flex flex-col sm:flex-row gap-3"
            onSubmit={(e) => {
              e.preventDefault();
              alert('Thank you! You are now subscribed.');
              e.target.reset();
            }}
          >
            <input 
              type="email" 
              placeholder="YOUR EMAIL ADDRESS" 
              className="input flex-1 text-sm"
              required 
            />
            <button type="submit" className="btn btn-primary whitespace-nowrap">
              SUBSCRIBE
            </button>
          </form>
          <p className="text-[10px] text-[#9A9085] mt-4 tracking-wider">
            WE RESPECT YOUR INBOX. UNSUBSCRIBE ANYTIME.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
