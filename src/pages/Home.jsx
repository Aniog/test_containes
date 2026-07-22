import React from "react";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import Button from "@/components/ui/Button";
import { products } from "@/data/products";

const Home = () => {
  // Bestsellers: first 5 products
  const bestsellers = products.slice(0, 5);

  // UGC mock data - vertical reel style
  const ugcItems = [
    { id: 1, caption: "Everyday elegance", product: "Golden Sphere Huggies" },
    { id: 2, caption: "My new favorite", product: "Vivid Aura Jewels" },
    { id: 3, caption: "Perfect for gifting", product: "Royal Heirloom Set" },
    { id: 4, caption: "Feels so special", product: "Amber Lace Earrings" },
    { id: 5, caption: "Worn every day", product: "Majestic Flora Nectar" },
  ];

  // Testimonials
  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. I wear my huggies every day and they still look brand new.", rating: 5 },
    { name: "Sofia R.", text: "Bought the Royal Heirloom Set as a gift for my sister. She cried when she opened it.", rating: 5 },
    { name: "Aisha K.", text: "Finally found jewelry that doesn't irritate my skin. The gold tone is so warm and beautiful.", rating: 5 },
  ];

  return (
    <div className="pt-20">
      {/* 1. HERO - Full bleed */}
      <section className="relative h-[92vh] min-h-[620px] flex items-center justify-center bg-[#2C2823] overflow-hidden">
        {/* Hero image placeholder - warm editorial */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
        <div className="absolute inset-0 bg-[radial-gradient(#C5A46E_0.5px,transparent_1px)] bg-[length:4px_4px] opacity-10" />
        
        {/* Elegant hero visual - warm gold jewelry editorial style */}
        <div className="absolute inset-0 flex items-center justify-center" style={{ background: "linear-gradient(135deg, #3A3530 0%, #2C2823 100%)" }}>
          <div className="relative">
            {/* Large gold jewelry visual */}
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full border-[14px] border-[#C5A46E] opacity-30" />
            <div className="absolute inset-[18px] rounded-full border-[6px] border-[#C5A46E] opacity-20" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#C5A46E] opacity-40" />
            {/* Subtle crystal sparkles */}
            <div className="absolute top-12 right-16 w-3 h-3 rotate-45 bg-white opacity-20" />
            <div className="absolute bottom-20 left-12 w-2 h-2 rotate-12 bg-[#C5A46E] opacity-30" />
          </div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="font-serif text-5xl md:text-7xl text-white tracking-[1.5px] leading-[1.05] mb-6">
            Crafted to be<br />Treasured
          </h1>
          <p className="text-[#E5E0D8] text-lg md:text-xl mb-10 tracking-wide max-w-md mx-auto">
            Demi-fine gold jewelry for the moments that matter.
          </p>
          <Link to="/shop">
            <Button size="lg" className="tracking-[2px]">
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
      <div className="border-b border-[#E5E0D8] py-4">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-2 text-xs tracking-[1.5px] text-[#6B6359]">
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

      {/* 3. BESTSELLERS */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-xs tracking-[2px] text-[#C5A46E]">DISCOVER</span>
            <h2 className="font-serif text-4xl tracking-[1px] text-[#2C2823]">Bestsellers</h2>
          </div>
          <Link to="/shop" className="hidden md:block text-sm tracking-[1.5px] text-[#C5A46E] hover:text-[#A68B5B]">
            VIEW ALL →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link to="/shop" className="text-sm tracking-[1.5px] text-[#C5A46E]">
            VIEW ALL →
          </Link>
        </div>
      </section>

      {/* 4. UGC REEL-STYLE ROW */}
      <section className="bg-[#F5F2ED] py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <span className="text-xs tracking-[2px] text-[#C5A46E]">AS SEEN ON</span>
              <h3 className="font-serif text-3xl tracking-[1px]">Real Moments</h3>
            </div>
            <span className="text-xs text-[#9A8F7E] hidden md:block">SWIPE TO SEE MORE</span>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {ugcItems.map((item, idx) => (
              <div
                key={item.id}
                className="ugc-card flex-shrink-0 w-[160px] md:w-[180px] aspect-[9/16] rounded overflow-hidden relative snap-start"
              >
                {/* Vertical placeholder image - elegant warm tones, no text */}
                <div 
                  className="absolute inset-0" 
                  style={{ 
                    background: idx % 2 === 0 
                      ? "linear-gradient(180deg, #D4C9B8 0%, #B8A68A 100%)" 
                      : "linear-gradient(180deg, #C5B8A3 0%, #A68B5B 100%)" 
                  }} 
                >
                  {/* Subtle jewelry silhouette */}
                  <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-[3px] border-[#C5A46E] opacity-40" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#C5A46E] opacity-30" />
                </div>
                
                {/* Caption overlay */}
                <div className="caption absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 opacity-90">
                  <p className="font-serif text-white text-sm tracking-wide leading-tight">
                    {item.caption}
                  </p>
                  <p className="text-[#C5A46E] text-[10px] tracking-[1px] mt-1">
                    {item.product}
                  </p>
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
          <h2 className="font-serif text-4xl tracking-[1px] mt-1">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { label: "Earrings", category: "Earrings", desc: "Cuffs, drops & studs" },
            { label: "Necklaces", category: "Necklaces", desc: "Pendants & chains" },
            { label: "Huggies", category: "Huggies", desc: "Everyday essentials" },
          ].map((cat) => (
            <Link
              key={cat.label}
              to={`/shop?category=${cat.category}`}
              className="category-tile group aspect-[16/10] md:aspect-[4/3] flex items-center justify-center rounded overflow-hidden"
            >
              <div className="overlay absolute inset-0 bg-black/20" />
              <div className="relative z-10 text-center">
                <div className="label font-serif text-white text-3xl tracking-[2px] mb-1">
                  {cat.label}
                </div>
                <p className="text-white/80 text-sm tracking-wide">{cat.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. BRAND STORY SPLIT */}
      <section className="border-t border-[#E5E0D8]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2">
          {/* Image side - elegant editorial portrait placeholder */}
          <div className="aspect-[4/3] md:aspect-auto flex items-center justify-center" style={{ background: "linear-gradient(135deg, #EDE8DF 0%, #D4C9B8 100%)" }}>
            <div className="relative w-32 h-40">
              {/* Soft silhouette suggestion */}
              <div className="absolute inset-x-4 bottom-0 h-3/4 bg-[#3A3530] opacity-10 rounded-t-full" />
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full border-[3px] border-[#C5A46E] opacity-30" />
            </div>
          </div>

          {/* Text side */}
          <div className="px-8 py-14 md:py-16 md:pr-16 flex flex-col justify-center">
            <span className="text-xs tracking-[2px] text-[#C5A46E]">SINCE 2019</span>
            <h2 className="font-serif text-4xl tracking-[1px] mt-2 mb-6">Our Story</h2>
            <div className="text-[#6B6359] leading-relaxed space-y-4 text-[15px]">
              <p>
                Velmora was born from a simple belief: that beautiful jewelry should be accessible, 
                not intimidating. We design demi-fine pieces that feel special enough for life's 
                most meaningful moments, yet versatile enough for everyday wear.
              </p>
              <p>
                Each piece is crafted with 18K gold plating over hypoallergenic brass, 
                set with carefully selected crystals, and finished by hand.
              </p>
            </div>
            <Link to="/about" className="mt-8 inline-block text-sm tracking-[1.5px] text-[#C5A46E] hover:text-[#A68B5B]">
              READ MORE ABOUT US →
            </Link>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <span className="text-xs tracking-[2px] text-[#C5A46E]">LOVED BY MANY</span>
          <h2 className="font-serif text-4xl tracking-[1px] mt-1">What Our Customers Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="testimonial pl-6">
              <div className="flex mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="star w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-[#2C2823] leading-relaxed mb-4">"{t.text}"</p>
              <p className="text-sm text-[#9A8F7E]">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. NEWSLETTER */}
      <section className="newsletter-block py-16">
        <div className="max-w-md mx-auto px-6 text-center">
          <h3 className="font-serif text-white text-3xl tracking-[1px] mb-3">
            Join for 10% off your first order
          </h3>
          <p className="text-[#9A8F7E] text-sm mb-8">
            Be the first to know about new arrivals, private sales, and styling stories.
          </p>
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="YOUR EMAIL ADDRESS"
              className="flex-1 px-5 py-3.5 bg-white text-[#2C2823] text-sm tracking-[1px] placeholder:text-[#9A8F7E] focus:outline-none"
              required
            />
            <Button type="submit" className="sm:px-8 tracking-[1.5px]">
              SUBSCRIBE
            </Button>
          </form>
          <p className="text-[#9A8F7E] text-[10px] tracking-widest mt-4">
            WE RESPECT YOUR INBOX. UNSUBSCRIBE ANYTIME.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
