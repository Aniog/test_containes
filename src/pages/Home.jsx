import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '@/data/products';
import ProductCard from '@/components/ui/ProductCard';
import StarRating from '@/components/ui/StarRating';
import Button from '@/components/ui/Button';

export default function Home() {
  const bestsellers = products.slice(0, 5);

  const ugcItems = [
    { id: 1, caption: "Morning light", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" },
    { id: 2, caption: "Everyday elegance", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" },
    { id: 3, caption: "Golden hour", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80" },
    { id: 4, caption: "Soft details", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80" },
    { id: 5, caption: "Timeless", img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&q=80" },
  ];

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. I wear my huggies every day and they still look brand new." },
    { name: "Sofia R.", text: "Bought the Royal Heirloom Set as a gift. The packaging alone made it feel so special." },
    { name: "Aisha K.", text: "Finally found jewelry that doesn't irritate my skin. The gold tone is beautiful." },
  ];

  return (
    <div className="pt-20">
      {/* 1. Full-bleed Hero */}
      <section className="relative h-[100dvh] min-h-[600px] flex items-center justify-center bg-[#F5F2ED] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1600&q=85" 
            alt="Velmora Fine Jewelry - Warm lit gold jewelry on model"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/25" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="font-serif text-5xl md:text-6xl text-white tracking-[2px] mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-white/90 text-lg mb-8 tracking-[0.5px]">
            Demi-fine jewelry for the woman who values quiet luxury.
          </p>
          <Link to="/shop">
            <Button size="lg" className="bg-white text-[#2C2825] hover:bg-[#F5F2ED]">
              SHOP THE COLLECTION
            </Button>
          </Link>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-px h-12 bg-white/50" />
        </div>
      </section>

      {/* 2. Trust Bar */}
      <div className="trust-bar border-b border-[#E8E4DE] py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-x-8 gap-y-2 text-center text-[#5C5651]">
          <span>FREE WORLDWIDE SHIPPING</span>
          <span className="hidden md:inline text-[#E8E4DE]">·</span>
          <span>30-DAY RETURNS</span>
          <span className="hidden md:inline text-[#E8E4DE]">·</span>
          <span>18K GOLD PLATED</span>
          <span className="hidden md:inline text-[#E8E4DE]">·</span>
          <span>HYPOALLERGENIC</span>
        </div>
      </div>

      {/* 3. Bestsellers */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs tracking-[2px] text-[#C5A46E] mb-2">CURATED FOR YOU</p>
            <h2 className="font-serif text-4xl tracking-[1px]">Bestsellers</h2>
          </div>
          <Link to="/shop" className="hidden md:block text-sm tracking-[1px] text-[#C5A46E] hover:text-[#B89778] transition-colors">
            VIEW ALL →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-12">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 4. Reel-style UGC Row */}
      <section className="bg-[#F5F2ED] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs tracking-[2px] text-[#C5A46E] mb-2 text-center">AS SEEN ON YOU</p>
          <h2 className="font-serif text-3xl text-center tracking-[1px] mb-10">Moments in Gold</h2>
          
          <div className="ugc-scroll flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
            {ugcItems.map((item) => (
              <div key={item.id} className="relative flex-shrink-0 w-[160px] md:w-[180px] aspect-[9/16] rounded overflow-hidden snap-start">
                <img 
                  src={item.img} 
                  alt={item.caption}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="font-serif text-white text-sm tracking-[1px]">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Shop by Category */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[2px] text-[#C5A46E] mb-2">DISCOVER</p>
          <h2 className="font-serif text-4xl tracking-[1px]">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: 'Earrings', path: '/shop?category=Earrings', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80' },
            { label: 'Necklaces', path: '/shop?category=Necklaces', img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80' },
            { label: 'Huggies', path: '/shop?category=Huggies', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80' },
          ].map((cat) => (
            <Link key={cat.label} to={cat.path} className="category-tile group block aspect-[16/10] overflow-hidden rounded">
              <img src={cat.img} alt={cat.label} className="w-full h-full object-cover editorial-img" />
              <div className="absolute inset-0 flex items-end justify-center pb-8">
                <span className="label font-serif text-white text-2xl tracking-[2px] relative z-10">{cat.label}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. Brand Story Split */}
      <section className="bg-[#F5F2ED]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2">
          <div className="aspect-[4/3] md:aspect-auto overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1000&q=80" 
              alt="Velmora atelier - hands crafting jewelry"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center px-8 md:px-16 py-16 md:py-0">
            <div className="max-w-md">
              <p className="text-xs tracking-[2px] text-[#C5A46E] mb-3">EST. 2019</p>
              <h2 className="font-serif text-4xl tracking-[1px] mb-6">Our Story</h2>
              <p className="text-[#5C5651] leading-relaxed mb-8">
                Velmora was born from a desire to create jewelry that feels personal, not performative. 
                Each piece is designed in our studio and crafted with 18K gold plating over hypoallergenic brass — 
                beautiful enough for every day, special enough for forever.
              </p>
              <Link to="/about" className="text-sm tracking-[1.5px] text-[#C5A46E] hover:text-[#B89778] inline-flex items-center gap-2">
                READ MORE <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[2px] text-[#C5A46E] mb-2">LOVED BY MANY</p>
          <h2 className="font-serif text-4xl tracking-[1px]">What Our Customers Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="text-center">
              <StarRating rating={5} size={16} />
              <p className="mt-4 text-[#5C5651] leading-relaxed">"{t.text}"</p>
              <p className="mt-4 text-sm tracking-[1px] text-[#8B8178]">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Newsletter */}
      <section className="bg-[#2C2825] py-16">
        <div className="max-w-md mx-auto px-6 text-center">
          <p className="text-[#C5A46E] text-xs tracking-[2px] mb-3">BECOME PART OF THE STORY</p>
          <h2 className="font-serif text-3xl text-white tracking-[1px] mb-3">Join for 10% off your first order</h2>
          <p className="text-[#8B8178] text-sm mb-8">Receive early access to new collections and styling inspiration.</p>
          
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => { e.preventDefault(); alert('Thank you. You are now subscribed.'); }}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="newsletter-input flex-1 text-white placeholder:text-[#8B8178] border-b border-white/30 pb-3"
              required 
            />
            <Button type="submit" variant="solid" className="whitespace-nowrap">
              SUBSCRIBE
            </Button>
          </form>
          <p className="text-[10px] text-[#8B8178] mt-4 tracking-[0.5px]">We respect your inbox. Unsubscribe anytime.</p>
        </div>
      </section>
    </div>
  );
}
