import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../lib/products';
import ProductCard from '../components/ProductCard';
import UGCCard from '../components/UGCCard';
import CategoryTile from '../components/CategoryTile';
import Testimonial from '../components/Testimonial';

const Home = () => {
  const bestsellers = products;

  const ugcItems = [
    {
      image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&q=80",
      caption: "The Golden Sphere Huggies are my everyday go-to. So comfortable and beautiful.",
    },
    {
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80",
      caption: "Wearing my Majestic Flora Nectar for my anniversary dinner. Felt so special.",
    },
    {
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80",
      caption: "The Vivid Aura ear cuff adds just the right amount of sparkle.",
    },
    {
      image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=600&q=80",
      caption: "My Royal Heirloom Set arrived in the most beautiful box. Perfect gift for my sister.",
    },
    {
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80",
      caption: "The Amber Lace Earrings are even more delicate in person. Love them.",
    },
  ];

  const testimonials = [
    {
      quote: "The quality is exceptional. I wear my huggies every single day and they still look brand new.",
      name: "SOPHIA M.",
    },
    {
      quote: "Bought the Royal Heirloom Set for my daughter. She cried when she opened it. Worth every penny.",
      name: "ELENA R.",
    },
    {
      quote: "Finally found jewelry that doesn't irritate my sensitive skin. The gold is so warm and beautiful.",
      name: "ISABELLE T.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F5F1]">
      {/* 2. Full-bleed Hero */}
      <section className="relative h-[100dvh] min-h-[620px] flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-[#0F0E0C]">
          <img
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=2000&q=85"
            alt="Velmora Fine Jewelry - Woman wearing gold jewelry"
            className="absolute inset-0 w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white tracking-[0.02em] leading-[1.05] mb-6">
            Crafted to be<br />Treasured
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-10 font-light tracking-wide">
            Demi-fine gold jewelry for the woman who values quiet luxury.
          </p>
          <Link
            to="/shop"
            className="btn-premium btn-premium-solid inline-block px-10 py-4 text-sm tracking-[0.12em]"
          >
            SHOP THE COLLECTION
          </Link>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 text-xs tracking-[0.2em]">
          SCROLL TO EXPLORE
        </div>
      </section>

      {/* 3. Trust Bar */}
      <div className="trust-bar border-b border-[#E5DFD6] py-4 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center items-center gap-x-8 gap-y-2 text-[#6B6359] text-center">
          <span>FREE WORLDWIDE SHIPPING</span>
          <span className="hidden md:inline text-[#E5DFD6]">·</span>
          <span>30-DAY RETURNS</span>
          <span className="hidden md:inline text-[#E5DFD6]">·</span>
          <span>18K GOLD PLATED</span>
          <span className="hidden md:inline text-[#E5DFD6]">·</span>
          <span>HYPOALLERGENIC</span>
        </div>
      </div>

      {/* 4. Bestsellers */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="text-xs tracking-[0.15em] text-[#B8976A] mb-1">CURATED FOR YOU</div>
            <h2 className="font-serif text-3xl tracking-[0.02em]">Bestsellers</h2>
          </div>
          <Link to="/shop" className="hidden md:block text-sm tracking-[0.05em] text-[#6B6359] hover:text-[#B8976A] transition-colors">
            VIEW ALL →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-10">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link to="/shop" className="text-sm tracking-[0.05em] text-[#6B6359] hover:text-[#B8976A]">
            VIEW ALL →
          </Link>
        </div>
      </section>

      {/* 5. UGC Reel-style Row */}
      <section className="bg-[#F5F2ED] py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-8">
            <div className="text-xs tracking-[0.15em] text-[#B8976A] mb-1">FROM OUR COMMUNITY</div>
            <h2 className="font-serif text-3xl tracking-[0.02em]">Worn & Loved</h2>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {ugcItems.map((item, index) => (
              <div key={index} className="snap-start">
                <UGCCard image={item.image} caption={item.caption} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Shop by Category */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-8">
          <div className="text-xs tracking-[0.15em] text-[#B8976A] mb-1">DISCOVER</div>
          <h2 className="font-serif text-3xl tracking-[0.02em]">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <CategoryTile
            title="Earrings"
            image="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=900&q=80"
            category="Earrings"
          />
          <CategoryTile
            title="Necklaces"
            image="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=900&q=80"
            category="Necklaces"
          />
          <CategoryTile
            title="Huggies"
            image="https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=900&q=80"
            category="Huggies"
          />
        </div>
      </section>

      {/* 7. Brand Story Split Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2">
          <div className="relative aspect-[4/3] md:aspect-auto">
            <img
              src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&q=80"
              alt="Velmora atelier"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="px-8 md:px-14 py-14 md:py-20 flex flex-col justify-center">
            <div className="max-w-md">
              <div className="text-xs tracking-[0.15em] text-[#B8976A] mb-3">EST. 2018</div>
              <h2 className="font-serif text-4xl tracking-[0.01em] leading-tight mb-6">
                Jewelry that feels like an heirloom, not a trend.
              </h2>
              <p className="text-[#6B6359] leading-relaxed mb-8">
                Velmora was born from a desire to create beautiful, accessible pieces that women reach for every day. 
                Each design is thoughtfully crafted in small batches using responsibly sourced materials.
              </p>
              <Link
                to="/about"
                className="btn-premium btn-premium-outline inline-block px-8 py-3 text-sm tracking-[0.08em]"
              >
                OUR STORY
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Testimonials */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <div className="text-xs tracking-[0.15em] text-[#B8976A] mb-1">KIND WORDS</div>
          <h2 className="font-serif text-3xl tracking-[0.02em]">What Our Customers Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <Testimonial key={i} quote={t.quote} name={t.name} />
          ))}
        </div>
      </section>

      {/* 9. Newsletter */}
      <section className="bg-[#0F0E0C] py-16">
        <div className="max-w-md mx-auto px-6 text-center">
          <div className="font-serif text-white text-3xl tracking-[0.02em] mb-3">Join the Circle</div>
          <p className="text-white/70 text-sm mb-8">
            Be the first to know about new arrivals, private sales, and stories from the atelier.<br />
            <span className="text-[#B8976A]">Join for 10% off your first order.</span>
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const email = e.target.email.value;
              if (email) {
                alert(`Thank you! A 10% code has been sent to ${email}. (Demo)`);
                e.target.reset();
              }
            }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              name="email"
              required
              placeholder="YOUR EMAIL ADDRESS"
              className="newsletter-input flex-1 px-5 py-3.5 text-sm text-white placeholder:text-white/40 tracking-[0.05em]"
            />
            <button
              type="submit"
              className="btn-premium btn-premium-solid px-8 py-3.5 text-sm tracking-[0.1em] whitespace-nowrap"
            >
              SUBSCRIBE
            </button>
          </form>
          <p className="text-[10px] text-white/40 mt-4 tracking-widest">WE RESPECT YOUR INBOX. UNSUBSCRIBE ANYTIME.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
