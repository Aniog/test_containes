import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import Button from '@/components/ui/Button';
import { products } from '@/data/products';

// UGC Reel data - vertical 9:16 style images with captions
const ugcItems = [
  { id: 1, image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80", caption: "Morning light" },
  { id: 2, image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&q=80", caption: "Golden hour" },
  { id: 3, image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&q=80", caption: "Effortless" },
  { id: 4, image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&q=80", caption: "Everyday luxury" },
  { id: 5, image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=80", caption: "Soft glow" },
];

const testimonials = [
  { name: "Elena M.", text: "The quality is exceptional. I wear my huggies every day and they still look brand new.", rating: 5 },
  { name: "Sofia R.", text: "Bought the Royal Heirloom Set as a gift. The packaging alone made it feel so special.", rating: 5 },
  { name: "Aisha K.", text: "Finally found jewelry that doesn't irritate my skin. The gold tone is so warm and beautiful.", rating: 5 },
];

export default function Home() {
  const bestsellers = products.slice(0, 5);

  return (
    <div className="min-h-screen bg-[#F5F2ED]">
      {/* 1. Sticky Nav is handled by Navbar component */}

      {/* 2. Full-bleed Hero */}
      <section className="relative h-[100dvh] min-h-[600px] flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-[#1A1A1A]">
          <img 
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=2000&q=85" 
            alt="Velmora Fine Jewelry - Warm lit gold jewelry on model"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="font-serif text-5xl md:text-7xl text-white tracking-[-1px] mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-10 max-w-md mx-auto">
            Demi-fine gold jewelry for the moments that matter.
          </p>
          <Link to="/shop">
            <Button size="lg" className="tracking-[2px]">
              SHOP THE COLLECTION
            </Button>
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 text-xs tracking-[3px]">
          SCROLL TO EXPLORE
        </div>
      </section>

      {/* 3. Trust Bar */}
      <div className="trust-bar border-b border-[#EDE8E0] py-4 bg-white/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-2 text-center text-[#6B6359]">
            <span>FREE WORLDWIDE SHIPPING</span>
            <span className="hidden md:inline text-[#C5A46E]">·</span>
            <span>30-DAY RETURNS</span>
            <span className="hidden md:inline text-[#C5A46E]">·</span>
            <span>18K GOLD PLATED</span>
            <span className="hidden md:inline text-[#C5A46E]">·</span>
            <span>HYPOALLERGENIC</span>
          </div>
        </div>
      </div>

      {/* 4. Bestsellers */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="text-xs tracking-[3px] text-[#C5A46E] mb-2">DISCOVER</div>
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
          <Link to="/shop" className="text-sm tracking-[1.5px] text-[#C5A46E]">VIEW ALL →</Link>
        </div>
      </section>

      {/* 5. UGC Reel-style Row */}
      <section className="bg-[#1A1A1A] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-8">
            <div>
              <div className="text-xs tracking-[3px] text-[#C5A46E] mb-2">AS SEEN ON</div>
              <h3 className="font-serif text-3xl text-white">Worn by you</h3>
            </div>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-sm tracking-[1.5px] text-[#C5A46E] hover:underline hidden md:block">
              @VELMORA
            </a>
          </div>

          <div className="ugc-scroll flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
            {ugcItems.map((item) => (
              <div key={item.id} className="relative flex-shrink-0 w-[160px] md:w-[180px] aspect-[9/16] overflow-hidden rounded-sm snap-start">
                <img 
                  src={item.image} 
                  alt={item.caption}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                  <p className="font-serif text-white text-sm tracking-wide">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Shop by Category */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <div className="text-xs tracking-[3px] text-[#C5A46E] mb-2">EXPLORE</div>
          <h2 className="font-serif text-4xl">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { name: "Earrings", slug: "Earrings", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=900&q=80" },
            { name: "Necklaces", slug: "Necklaces", img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=900&q=80" },
            { name: "Huggies", slug: "Huggies", img: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=900&q=80" },
          ].map((cat) => (
            <Link 
              key={cat.slug} 
              to={`/shop?category=${cat.slug}`}
              className="category-tile group relative aspect-[16/10] overflow-hidden rounded-sm"
            >
              <img 
                src={cat.img} 
                alt={cat.name}
                className="w-full h-full object-cover editorial-img"
              />
              <div className="label absolute bottom-0 left-0 right-0 p-8">
                <span className="font-serif text-3xl text-white tracking-[2px]">{cat.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 7. Brand Story Split Section */}
      <section className="border-t border-[#EDE8E0]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2">
          <div className="aspect-[4/3] md:aspect-auto bg-[#EDE8E0]">
            <img 
              src="https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=1200&q=80" 
              alt="Velmora atelier - hands crafting jewelry"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center px-8 md:px-16 py-16 md:py-0">
            <div className="max-w-md">
              <div className="text-xs tracking-[3px] text-[#C5A46E] mb-3">EST. 2019</div>
              <h2 className="font-serif text-4xl mb-6">Our Story</h2>
              <p className="text-[#6B6359] leading-relaxed mb-8">
                Velmora was born from a desire to create jewelry that feels personal, not performative. 
                Each piece is designed in our studio and crafted with care using responsibly sourced materials. 
                We believe the most beautiful things are the ones you reach for every day.
              </p>
              <Link to="/about">
                <Button variant="outline">READ OUR STORY</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Testimonials */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <div className="text-xs tracking-[3px] text-[#C5A46E] mb-2">LOVED BY MANY</div>
          <h2 className="font-serif text-4xl">What our customers say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="border border-[#EDE8E0] p-8">
              <div className="stars flex mb-4">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="testimonial text-[#1A1A1A] mb-6">"{t.text}"</p>
              <p className="text-sm text-[#8B7B6B]">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Newsletter Capture */}
      <section className="newsletter-block py-16">
        <div className="max-w-md mx-auto px-6 text-center">
          <h3 className="font-serif text-3xl text-white mb-3">Join for 10% off your first order</h3>
          <p className="text-white/70 text-sm mb-8">Be the first to know about new collections and private events.</p>
          
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              const email = e.target.email.value;
              if (email) {
                alert(`Thank you! Your 10% code has been sent to ${email}`);
                e.target.reset();
              }
            }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input 
              type="email" 
              name="email"
              placeholder="Your email address" 
              required
              className="input-premium flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/50"
            />
            <Button type="submit" className="whitespace-nowrap">SUBSCRIBE</Button>
          </form>
          <p className="text-[10px] text-white/50 mt-4 tracking-wide">We respect your inbox. Unsubscribe anytime.</p>
        </div>
      </section>
    </div>
  );
}
