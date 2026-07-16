import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import Button from '@/components/ui/Button';
import ProductCard from '@/components/ui/ProductCard';
import { bestsellers } from '@/data/products';

// UGC Reel-style data (simulated)
const ugcItems = [
  { id: 1, image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80', caption: 'Morning light' },
  { id: 2, image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80', caption: 'Golden hour' },
  { id: 3, image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&q=80', caption: 'Everyday elegance' },
  { id: 4, image: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&q=80', caption: 'Soft moments' },
  { id: 5, image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=80', caption: 'Timeless' },
];

const testimonials = [
  { name: 'Elena M.', text: 'The quality is exceptional. I wear my huggies every day and they still look brand new.' },
  { name: 'Sofia R.', text: 'Bought the Royal Heirloom Set as a gift. The packaging alone made it feel so special.' },
  { name: 'Aisha K.', text: 'Finally found jewelry that doesn\'t irritate my skin. The gold tone is beautiful.' },
];

const Home = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

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
    <div className="min-h-screen bg-[#F8F5F0]">
      {/* 1. HERO */}
      <section className="relative h-[100dvh] min-h-[620px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#0F0F0F]">
          <img
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=2000&q=85"
            alt="Velmora Fine Jewelry - Woman wearing gold necklace"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="font-serif text-5xl md:text-7xl text-white tracking-[2px] leading-[1.05] mb-6">
            Crafted to be<br />Treasured
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-10 tracking-wide">
            Demi-fine gold jewelry for the modern woman.
          </p>
          <Link to="/shop">
            <Button variant="solid" size="lg" className="bg-white text-[#0F0F0F] hover:bg-[#F5F1E9]">
              SHOP THE COLLECTION
            </Button>
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 text-xs tracking-[3px]">
          SCROLL TO EXPLORE
        </div>
      </section>

      {/* 2. TRUST BAR */}
      <div className="border-b border-[#E5E0D8] bg-white py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs tracking-[2px] text-[#4A4640] text-center">
            <span>FREE WORLDWIDE SHIPPING</span>
            <span className="hidden sm:inline text-[#C5A46E]">·</span>
            <span>30-DAY RETURNS</span>
            <span className="hidden sm:inline text-[#C5A46E]">·</span>
            <span>18K GOLD PLATED</span>
            <span className="hidden sm:inline text-[#C5A46E]">·</span>
            <span>HYPOALLERGENIC</span>
          </div>
        </div>
      </div>

      {/* 3. BESTSELLERS */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-[#C5A46E] text-xs tracking-[3px] mb-2">DISCOVER</p>
            <h2 className="font-serif text-4xl text-[#1A1A1A]">Bestsellers</h2>
          </div>
          <Link to="/shop" className="hidden md:block text-sm tracking-[1.5px] text-[#C5A46E] hover:underline">
            VIEW ALL →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-10">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Link to="/shop" className="text-sm tracking-[1.5px] text-[#C5A46E] hover:underline">
            VIEW ALL →
          </Link>
        </div>
      </section>

      {/* 4. UGC REEL-STYLE ROW */}
      <section className="bg-[#0F0F0F] py-14">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-serif text-2xl text-white tracking-wide">As Seen On You</h3>
            <span className="text-[#C5A46E] text-xs tracking-[2px] hidden sm:block">SWIPE FOR MORE</span>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {ugcItems.map((item) => (
              <div
                key={item.id}
                className="relative flex-shrink-0 w-[160px] md:w-[180px] aspect-[9/16] rounded overflow-hidden snap-start"
              >
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="font-serif text-white text-sm tracking-wide">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SHOP BY CATEGORY */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-[#C5A46E] text-xs tracking-[3px] mb-2">EXPLORE</p>
          <h2 className="font-serif text-4xl text-[#1A1A1A]">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: 'Earrings', slug: 'earrings', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=900&q=80' },
            { label: 'Necklaces', slug: 'necklaces', img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=900&q=80' },
            { label: 'Huggies', slug: 'huggies', img: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=900&q=80' },
          ].map((cat) => (
            <Link
              key={cat.slug}
              to={`/shop?category=${cat.slug}`}
              className="group relative aspect-[16/10] overflow-hidden rounded bg-[#E5E0D8]"
            >
              <img
                src={cat.img}
                alt={cat.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-white text-3xl tracking-[3px] opacity-90 group-hover:opacity-100 transition-opacity">
                  {cat.label}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. BRAND STORY */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2">
          <div className="aspect-[4/3] md:aspect-auto bg-[#E5E0D8]">
            <img
              src="https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=1200&q=80"
              alt="Velmora atelier"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="px-8 md:px-16 py-16 md:py-20 flex flex-col justify-center">
            <p className="text-[#C5A46E] text-xs tracking-[3px] mb-3">SINCE 2019</p>
            <h2 className="font-serif text-4xl text-[#1A1A1A] leading-tight mb-6">
              Jewelry that feels<br />like an heirloom.
            </h2>
            <p className="text-[#4A4640] leading-relaxed mb-8 max-w-md">
              Velmora was born from a desire to create beautiful, accessible jewelry that women would reach for every day. 
              Each piece is designed in our New York studio and crafted with care using premium materials.
            </p>
            <Link to="/about" className="text-sm tracking-[1.5px] text-[#C5A46E] hover:underline inline-block">
              OUR STORY →
            </Link>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <p className="text-[#C5A46E] text-xs tracking-[3px] mb-3">LOVED BY MANY</p>
        <h2 className="font-serif text-3xl text-[#1A1A1A] mb-12">What Our Customers Say</h2>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          {testimonials.map((t, i) => (
            <div key={i} className="border-l-2 border-[#C5A46E] pl-6">
              <div className="flex mb-3">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-[#C5A46E] text-[#C5A46E]" />
                ))}
              </div>
              <p className="text-[#4A4640] leading-relaxed mb-4">"{t.text}"</p>
              <p className="text-sm text-[#1A1A1A] tracking-wide">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. NEWSLETTER */}
      <section className="bg-[#0F0F0F] py-16">
        <div className="max-w-md mx-auto px-6 text-center">
          <h3 className="font-serif text-3xl text-white mb-3 tracking-wide">Join for 10% off</h3>
          <p className="text-[#8B8178] mb-8 text-sm">Be the first to know about new arrivals and exclusive offers.</p>

          {newsletterSubmitted ? (
            <p className="text-[#C5A46E] py-3">Thank you. Welcome to the circle.</p>
          ) : (
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 bg-white/5 border border-white/20 px-5 py-3 text-white placeholder:text-[#8B8178] focus:outline-none focus:border-[#C5A46E] text-sm"
              />
              <Button type="submit" variant="solid" className="sm:w-auto">
                SUBSCRIBE
              </Button>
            </form>
          )}
          <p className="text-[10px] text-[#8B8178] mt-4 tracking-wide">We respect your inbox. Unsubscribe anytime.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
