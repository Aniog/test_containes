import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '@/data/products';
import ProductCard from '@/components/shop/ProductCard';
import Button from '@/components/ui/Button';
import StarRating from '@/components/ui/StarRating';
import { useCart } from '@/context/CartContext';

const Home = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  const { addToCart } = useCart();

  // Bestsellers - first 5 products
  const bestsellers = products.slice(0, 5);

  // UGC mock data - vertical reel style
  const ugcItems = [
    { id: 1, image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80", caption: "Everyday elegance" },
    { id: 2, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80", caption: "Golden hour glow" },
    { id: 3, image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80", caption: "Timeless layers" },
    { id: 4, image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400&q=80", caption: "Soft light, soft gold" },
    { id: 5, image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80", caption: "Made to be worn" },
  ];

  const categories = [
    { name: "Earrings", slug: "Earrings", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80" },
    { name: "Necklaces", slug: "Necklaces", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80" },
    { name: "Huggies", slug: "Huggies", image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&q=80" },
  ];

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. I've worn my huggies every day for six months and they still look brand new.", rating: 5 },
    { name: "Sofia R.", text: "Bought the Royal Heirloom Set as a gift for my sister. She cried. Worth every penny.", rating: 5 },
    { name: "Aisha K.", text: "Finally found jewelry that doesn't irritate my sensitive skin. The gold is so warm and beautiful.", rating: 5 },
  ];

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubmitted(true);
      setTimeout(() => {
        setNewsletterSubmitted(false);
        setNewsletterEmail('');
      }, 2000);
    }
  };

  return (
    <div className="bg-[#F8F6F2]">
      {/* 1. HERO */}
      <section className="relative h-[100dvh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#0A0806]">
          <img 
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=2000&q=90" 
            alt="Velmora Fine Jewelry - Warm lit gold jewelry on model"
            className="absolute inset-0 w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white tracking-[2px] leading-[1.05] mb-6">
            Crafted to be<br />Treasured
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-10 tracking-wide">
            Demi-fine gold jewelry for the moments that matter.
          </p>
          <Link to="/shop">
            <Button size="lg" className="bg-white text-[#0A0806] hover:bg-[#EDE9E3]">
              SHOP THE COLLECTION
            </Button>
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-xs tracking-[3px]">
          SCROLL TO EXPLORE
        </div>
      </section>

      {/* 2. TRUST BAR */}
      <div className="trust-bar border-b border-[#EDE9E3] py-4 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-x-8 gap-y-2 text-center text-[#4A4640]">
          <span>FREE WORLDWIDE SHIPPING</span>
          <span className="hidden sm:inline text-[#EDE9E3]">·</span>
          <span>30-DAY RETURNS</span>
          <span className="hidden sm:inline text-[#EDE9E3]">·</span>
          <span>18K GOLD PLATED</span>
          <span className="hidden sm:inline text-[#EDE9E3]">·</span>
          <span>HYPOALLERGENIC</span>
        </div>
      </div>

      {/* 3. BESTSELLERS */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-xs tracking-[2px] text-[#C5A46E]">DISCOVER</span>
            <h2 className="font-serif text-3xl tracking-[1px] mt-1">Bestsellers</h2>
          </div>
          <Link to="/shop" className="hidden md:block text-sm tracking-[1px] text-[#C5A46E] hover:text-[#B08F5A]">
            VIEW ALL →
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-10">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-10 md:hidden">
          <Link to="/shop" className="text-sm tracking-[1px] text-[#C5A46E]">VIEW ALL →</Link>
        </div>
      </section>

      {/* 4. UGC REEL-STYLE ROW */}
      <section className="bg-white py-12 border-y border-[#EDE9E3]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <span className="text-xs tracking-[2px] text-[#C5A46E]">AS SEEN ON</span>
              <h3 className="font-serif text-2xl tracking-[1px]">Real Moments</h3>
            </div>
          </div>
          
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {ugcItems.map((item) => (
              <div key={item.id} className="ugc-card flex-shrink-0 w-[160px] md:w-[180px] snap-start">
                <div className="relative aspect-[9/16] overflow-hidden bg-[#EDE9E3] rounded-sm">
                  <img 
                    src={item.image} 
                    alt={item.caption}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="font-serif text-white text-sm tracking-wide">{item.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SHOP BY CATEGORY */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <span className="text-xs tracking-[2px] text-[#C5A46E]">EXPLORE</span>
          <h2 className="font-serif text-3xl tracking-[1px] mt-1">Shop by Category</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <Link 
              key={cat.slug} 
              to={`/shop?category=${cat.slug}`}
              className="category-tile group relative block aspect-[16/10] overflow-hidden bg-[#EDE9E3]"
            >
              <img 
                src={cat.image} 
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-white text-2xl tracking-[3px] opacity-90 group-hover:opacity-100 transition-opacity">
                  {cat.name.toUpperCase()}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. BRAND STORY */}
      <section className="bg-white border-y border-[#EDE9E3]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2">
          <div className="aspect-[4/3] md:aspect-auto overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=1200&q=80" 
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center px-8 py-12 md:py-16 md:px-12 lg:px-16">
            <div className="max-w-md">
              <span className="text-xs tracking-[2px] text-[#C5A46E]">SINCE 2018</span>
              <h2 className="font-serif text-3xl tracking-[1px] mt-3 mb-6">Our Story</h2>
              <p className="text-[#4A4640] leading-relaxed mb-6">
                Velmora was born from a simple belief: that beautiful jewelry should be accessible, 
                not exclusive. We craft demi-fine pieces in 18K gold plating that feel as precious 
                as solid gold, designed to be worn every day and passed down for generations.
              </p>
              <Link to="/about" className="inline-block text-sm tracking-[1.5px] text-[#C5A46E] hover:text-[#B08F5A] border-b border-[#C5A46E] pb-0.5">
                READ OUR STORY →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <span className="text-xs tracking-[2px] text-[#C5A46E]">LOVED BY MANY</span>
          <h2 className="font-serif text-3xl tracking-[1px] mt-1">What Our Customers Say</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="text-center px-4">
              <StarRating rating={t.rating} className="justify-center mb-4" />
              <p className="text-[#4A4640] italic leading-relaxed mb-4">"{t.text}"</p>
              <p className="text-sm tracking-[1px] text-[#9A9590]">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. NEWSLETTER */}
      <section className="bg-[#0A0806] py-16">
        <div className="max-w-md mx-auto px-6 text-center">
          <h3 className="font-serif text-white text-2xl tracking-[1px] mb-3">Join for 10% off your first order</h3>
          <p className="text-[#9A9590] text-sm mb-6">Be the first to know about new collections and private events.</p>
          
          {newsletterSubmitted ? (
            <p className="text-[#C5A46E] py-3">Thank you. Welcome to the circle.</p>
          ) : (
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="YOUR EMAIL"
                required
                className="newsletter-input flex-1 px-5 py-3 text-sm tracking-[1px] placeholder:text-[#9A9590] text-white bg-transparent border border-white/30 focus:border-[#C5A46E]"
              />
              <Button type="submit" className="whitespace-nowrap">SUBSCRIBE</Button>
            </form>
          )}
          <p className="text-[10px] text-[#9A9590] mt-4 tracking-wide">We respect your inbox. Unsubscribe anytime.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
