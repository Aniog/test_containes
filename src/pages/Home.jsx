import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import StarRating from '../components/StarRating';

const ugcImages = [
  { id: 1, img: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&q=80", caption: "Everyday elegance" },
  { id: 2, img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80", caption: "Golden hour glow" },
  { id: 3, img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80", caption: "Effortless layers" },
  { id: 4, img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80", caption: "Modern heirloom" },
  { id: 5, img: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&q=80", caption: "Soft light, strong lines" },
];

const testimonials = [
  { name: "Elena M.", text: "The quality is exceptional. I wear my huggies every day and they still look brand new." },
  { name: "Sofia R.", text: "Bought the Royal Heirloom Set as a gift. The packaging alone felt so special." },
  { name: "Aisha K.", text: "Finally found jewelry that doesn't irritate my skin. The gold tone is beautiful." },
];

function Home() {
  const bestsellers = products.slice(0, 5);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[92vh] min-h-[620px] flex items-center justify-center bg-[#2C2522] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1600&q=85" 
            alt="Velmora jewelry on model"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="font-serif text-5xl md:text-6xl text-white tracking-[0.06em] leading-[1.05] mb-6">
            Crafted to be<br />Treasured
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-9 tracking-wide">
            Demi-fine gold jewelry, made for the moments that matter.
          </p>
          <Link to="/shop" className="btn btn-gold inline-block">
            Shop the Collection
          </Link>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 text-xs tracking-[0.2em]">
          SCROLL TO EXPLORE
        </div>
      </section>

      {/* Trust Bar */}
      <div className="border-b border-[#E5DFD6] py-4">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs tracking-[0.12em] text-[#6B6058] text-center">
          <span>FREE WORLDWIDE SHIPPING</span>
          <span className="hidden md:inline">·</span>
          <span>30-DAY RETURNS</span>
          <span className="hidden md:inline">·</span>
          <span>18K GOLD PLATED</span>
          <span className="hidden md:inline">·</span>
          <span>HYPOALLERGENIC</span>
        </div>
      </div>

      {/* Bestsellers */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="text-xs tracking-[0.15em] text-[#6B6058] mb-1">CURATED FOR YOU</div>
            <h2 className="font-serif text-3xl tracking-[0.04em]">Bestsellers</h2>
          </div>
          <Link to="/shop" className="hidden md:block text-sm tracking-[0.08em] hover:text-[#B89778] transition-colors">VIEW ALL →</Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-10">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-8 md:hidden">
          <Link to="/shop" className="text-sm tracking-[0.08em] hover:text-[#B89778]">VIEW ALL →</Link>
        </div>
      </section>

      {/* UGC Reel Row */}
      <section className="bg-[#F8F5F1] py-12 border-y border-[#E5DFD6]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-xs tracking-[0.15em] text-[#6B6058] mb-4">AS SEEN ON YOU</div>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {ugcImages.map((item) => (
              <div key={item.id} className="ugc-card w-[160px] md:w-[180px] aspect-[9/16] rounded-sm overflow-hidden snap-start">
                <img src={item.img} alt={item.caption} className="w-full h-full object-cover" />
                <div className="ugc-caption">{item.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <div className="text-xs tracking-[0.15em] text-[#6B6058] mb-1">DISCOVER</div>
          <h2 className="font-serif text-3xl tracking-[0.04em]">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: "Earrings", slug: "earrings", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=900&q=80" },
            { label: "Necklaces", slug: "necklaces", img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=900&q=80" },
            { label: "Huggies", slug: "huggies", img: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=900&q=80" },
          ].map((cat) => (
            <Link 
              key={cat.slug} 
              to={`/shop?category=${cat.slug}`}
              className="category-tile group block aspect-[16/10] overflow-hidden"
            >
              <img src={cat.img} alt={cat.label} className="w-full h-full object-cover" />
              <div className="category-label">{cat.label}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="border-t border-[#E5DFD6]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2">
          <div className="aspect-[4/3] md:aspect-auto overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&q=80" 
              alt="Velmora craftsmanship" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="px-8 md:px-14 py-14 md:py-20 flex flex-col justify-center">
            <div className="text-xs tracking-[0.15em] text-[#6B6058] mb-3">EST. 2019</div>
            <h2 className="font-serif text-4xl tracking-[0.03em] leading-tight mb-6">Our Story</h2>
            <p className="text-[#6B6058] leading-relaxed mb-8 max-w-md">
              Velmora was born from a desire to create jewelry that feels personal, not performative. 
              Each piece is designed in our studio and crafted with care using responsibly sourced materials.
            </p>
            <Link to="/about" className="btn btn-outline w-fit text-sm">Read More</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <div className="text-xs tracking-[0.15em] text-[#6B6058] mb-1">IN THEIR WORDS</div>
          <h2 className="font-serif text-3xl tracking-[0.04em]">What Our Customers Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial">
              <StarRating rating={5} size={13} />
              <p className="mt-4 text-[#2C2522] leading-relaxed">"{t.text}"</p>
              <div className="mt-4 text-sm text-[#6B6058]">— {t.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter py-16">
        <div className="max-w-md mx-auto px-6 text-center">
          <div className="font-serif text-3xl tracking-[0.04em] mb-3">Join for 10% off</div>
          <p className="text-[#F8F5F1]/80 text-sm mb-6">Be the first to know about new arrivals and private releases.</p>
          
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you! You've been added to our list. (Demo)");
              e.target.reset();
            }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input 
              type="email" 
              placeholder="Your email address" 
              required
              className="input flex-1 bg-white/95 text-[#2C2522] placeholder:text-[#6B6058]"
            />
            <button type="submit" className="btn btn-gold whitespace-nowrap">Subscribe</button>
          </form>
          <p className="text-[10px] text-[#F8F5F1]/50 mt-3 tracking-widest">WE RESPECT YOUR INBOX.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
