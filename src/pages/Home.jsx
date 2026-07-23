import React from "react";
import { Link } from "react-router-dom";
import { products } from "../lib/data";
import ProductCard from "../components/ProductCard";
import { ArrowRight, Star } from "lucide-react";
import { useStrkImages } from "../lib/useStrkImages";

const Home = () => {
  const containerRef = useStrkImages();
  const bestsellers = products.filter(p => p.isBestseller);

  return (
    <div ref={containerRef} className="flex flex-col">
      {/* 1. Full-bleed Hero */}
      <section className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden">
        <div
          data-strk-bg-id="hero-bg-991122"
          data-strk-bg="[hero-subtitle] [hero-title] luxury gold jewelry model close-up warm lighting editorial"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
          className="absolute inset-0 z-0 after:content-[''] after:absolute after:inset-0 after:bg-black/30"
        />
        <div className="container relative z-10 px-6 text-center text-white">
          <h1 id="hero-title" className="text-5xl md:text-7xl lg:text-8xl font-serif mb-6 leading-tight max-w-4xl mx-auto">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="text-sm md:text-base uppercase tracking-[0.4em] mb-10 max-w-xl mx-auto font-light">
            Demi-fine jewelry for your everyday luxury
          </p>
          <Link
            to="/shop"
            className="inline-block bg-brand-gold text-white px-10 py-4 uppercase tracking-[0.3em] text-xs font-medium hover:bg-white hover:text-brand-ebony transition-all duration-500 shadow-xl"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* 2. Trust Bar */}
      <section className="bg-brand-linen py-4 border-b border-gray-100 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] font-medium text-muted-foreground whitespace-nowrap">
            <span>Free Worldwide Shipping</span>
            <span className="hidden md:inline">•</span>
            <span>30-Day Returns</span>
            <span className="hidden md:inline">•</span>
            <span>18K Gold Plated</span>
            <span className="hidden md:inline">•</span>
            <span>Hypoallergenic</span>
          </div>
        </div>
      </section>

      {/* 3. Bestsellers */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-xl">
              <span className="text-xs uppercase tracking-[0.3em] text-brand-gold font-medium mb-4 block">Most Loved</span>
              <h2 id="bestsellers-title" className="text-4xl md:text-5xl font-serif text-brand-ebony">The Bestsellers</h2>
            </div>
            <Link to="/shop" className="flex items-center gap-2 group text-xs uppercase tracking-widest font-medium text-brand-ebony hover-gold pb-1 border-b border-transparent hover:border-brand-gold transition-all">
              View All Products <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-12">
            {bestsellers.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. UGC Reel */}
      <section className="bg-brand-linen/30 py-24 overflow-hidden">
        <div className="container mx-auto px-6 mb-12">
          <h2 className="text-3xl font-serif text-center uppercase tracking-widest">Worn by You</h2>
        </div>
        <div className="flex gap-4 px-6 overflow-x-auto no-scrollbar scroll-smooth pb-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="flex-shrink-0 w-64 aspect-[9/16] relative group overflow-hidden bg-gray-100">
              <img
                data-strk-img-id={`ugc-${i}`}
                data-strk-img={`[ugc-cap-${i}] model wearing gold jewelry necklace earrings ear lifestyle minimal editorial`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
                alt="Worn by you"
                className="w-full h-full object-cover grayscale-[0.2] transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <p id={`ugc-cap-${i}`} className="font-serif text-white text-lg leading-snug">
                  "Absolutely love these {i % 2 === 0 ? 'Huggies' : 'Necklace'}."
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Shop by Category */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Earrings', 'Necklaces', 'Huggies'].map((cat) => (
              <Link
                key={cat}
                to={`/shop?category=${cat}`}
                className="relative aspect-square overflow-hidden group"
              >
                <img
                  data-strk-img-id={`cat-tile-${cat}`}
                  data-strk-img={`luxury ${cat} gold jewelry flatlay editorial`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={cat}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 flex items-center justify-center">
                  <h3 className="text-white font-serif text-3xl tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0 transition-transform">
                    {cat}
                  </h3>
                </div>
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 md:hidden">
                  <span className="text-white font-serif text-xl tracking-widest uppercase">{cat}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Brand Story Split */}
      <section className="py-24 bg-brand-linen flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 aspect-[4/5] lg:aspect-auto lg:h-[800px]">
          <img
            data-strk-img-id="brand-story-img"
            data-strk-img="[story-title] [story-desc] portrait of elegant woman wearing gold jewelry editorial artistic"
            data-strk-img-ratio="4x5"
            data-strk-img-width="1200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
            alt="Brand Story"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2 px-12 py-20 lg:p-24 bg-white lg:-ml-24 shadow-2xl relative z-10 transition-luxury">
          <span className="text-xs uppercase tracking-[0.3em] text-brand-gold font-medium mb-6 block">Our Legacy</span>
          <h2 id="story-title" className="text-4xl md:text-5xl font-serif text-brand-ebony mb-8 leading-tight">
            Quiet Luxury, <br />Crafted for Life
          </h2>
          <p id="story-desc" className="text-muted-foreground leading-loose mb-10 text-lg">
            Velmora was born from a desire for jewelry that feels personal, precious, yet effortless. Our pieces are crafted using 18K gold plating over durable bases, ensuring they withstand the test of time while maintaining their golden glow. We believe luxury should be accessible without compromising on the weight, feel, or soul of the design.
          </p>
          <Link
            to="/about"
            className="inline-block border-b-2 border-brand-gold text-brand-ebony pb-2 text-xs uppercase tracking-[0.2em] font-medium hover:border-brand-ebony transition-all"
          >
            Read Our Story
          </Link>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="py-24 bg-white border-y border-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { name: "Sophia R.", text: "The weight of the Golden Sphere Huggies is incredible. They feel and look like they cost ten times more than they did." },
              { name: "Elena G.", text: "Beautifully packaged and the quality is stunning. I've been wearing the Vivid Aura cuff daily for a month and it still looks brand new." },
              { name: "Maya L.", text: "I bought the Royal Heirloom set as a gift for myself and it's easily my favorite jewelry purchase this year. Truly editorial." }
            ].map((t, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="flex gap-1 mb-6 text-brand-gold">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="font-serif text-xl text-brand-ebony mb-8 leading-relaxed italic">
                  "{t.text}"
                </p>
                <span className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">{t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Newsletter */}
      <section className="py-24 bg-brand-ebony text-white flex items-center justify-center">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Join the Circle</h2>
          <p className="text-gray-400 uppercase tracking-widest text-[10px] mb-12">
            Receive editorial updates, lookbooks, and 10% off your first order.
          </p>
          <form className="flex flex-col md:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 bg-transparent border-b border-gray-700 py-3 text-sm focus:outline-none focus:border-brand-gold transition-colors text-center md:text-left"
            />
            <button className="bg-brand-gold text-white px-10 py-4 uppercase tracking-[0.3em] text-[10px] font-bold hover:bg-white hover:text-brand-ebony transition-all">
              Join
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
