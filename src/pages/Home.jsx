import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import { ArrowRight, Star, Play } from "lucide-react";
import strkImgConfig from "@/strk-img-config.json";
import { products, categories, testimonials } from "@/data/products";
import { cn } from "@/lib/utils";
import ProductCard from "@/components/ProductCard";
import ResolvedImage from "@/components/ResolvedImage";
import Newsletter from "@/components/Newsletter";

function ImageLoader({ children, deps = [] }) {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    const id = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current);
    });
    return () => cancelAnimationFrame(id);
  }, deps);
  return <div ref={ref}>{children}</div>;
}

function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-charcoal bg-cover bg-center"
        data-strk-bg-id="hero-bg-velmora"
        data-strk-bg="[hero-title] [hero-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-charcoal/40" />
      <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto animate-slide-up">
        <p className="font-sans text-xs uppercase tracking-[0.3em] text-white/80 mb-4">
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 text-balance"
        >
          Crafted to be Treasured
        </h1>
        <p id="hero-subtitle" className="font-sans text-base md:text-lg text-white/80 mb-10 max-w-xl mx-auto">
          Timeless designs in 18K gold plate, made for everyday moments and forever keepsakes.
        </p>
        <Link
          to="/shop"
          className="inline-block bg-bronze text-white px-8 py-4 text-xs uppercase tracking-widest hover:bg-bronze-hover transition-colors"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    "Free Worldwide Shipping",
    "30-Day Returns",
    "18K Gold Plated",
    "Hypoallergenic",
  ];
  return (
    <div className="bg-cream border-b border-soft-taupe">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[10px] md:text-xs uppercase tracking-widest text-warm-gray">
          {items.map((item, i) => (
            <span key={i} className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-bronze" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Bestsellers() {
  const bestsellers = products.slice(0, 5);
  return (
    <section className="py-16 md:py-24 bg-parchment">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-5xl mb-3">Bestsellers</h2>
          <p className="font-sans text-warm-gray text-sm md:text-base">Our most-loved pieces right now.</p>
        </div>
        <ImageLoader>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-10">
            {bestsellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </ImageLoader>
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-charcoal border-b border-charcoal pb-1 hover:text-bronze hover:border-bronze transition-colors"
          >
            View All
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function UGCReel() {
  const reels = [
    { id: "r1", caption: "Everyday gold" },
    { id: "r2", caption: "Gift-worthy" },
    { id: "r3", caption: "Layered light" },
    { id: "r4", caption: "Ear party" },
    { id: "r5", caption: "Quiet luxury" },
  ];

  return (
    <section className="py-16 md:py-24 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 flex items-end justify-between">
        <div>
          <h2 className="font-serif text-3xl md:text-5xl mb-2">#VelmoraWomen</h2>
          <p className="font-sans text-sm text-warm-gray">Styled by you, treasured forever.</p>
        </div>
        <Link
          to="/shop"
          className="hidden md:inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-charcoal hover:text-bronze transition-colors"
        >
          Shop the feed <ArrowRight size={14} />
        </Link>
      </div>
      <ImageLoader>
        <div className="flex gap-4 overflow-x-auto px-4 sm:px-6 lg:px-8 pb-4 snap-x snap-mandatory">
          {reels.map((reel, idx) => (
            <div
              key={reel.id}
              className="relative flex-shrink-0 w-[260px] md:w-[300px] aspect-[9/16] snap-center group cursor-pointer overflow-hidden bg-charcoal"
            >
              <ResolvedImage
                imgId={`ugc-reel-${reel.id}`}
                query={`[reel-caption-${idx}]`}
                ratio="9x16"
                width="600"
                alt={reel.caption}
                className="absolute inset-0 opacity-90 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <p id={`reel-caption-${idx}`} className="font-serif text-lg italic mb-3">
                  {reel.caption}
                </p>
                <div className="w-8 h-8 rounded-full border border-white/60 flex items-center justify-center">
                  <Play size={12} fill="white" className="ml-0.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </ImageLoader>
    </section>
  );
}

function CategoryTiles() {
  return (
    <section className="py-16 md:py-24 bg-parchment">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-5xl mb-3">Shop by Category</h2>
        </div>
        <ImageLoader>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {categories.map((cat, idx) => (
              <Link
                key={cat.id}
                to={`/shop?category=${cat.slug}`}
                className="relative group aspect-[4/5] overflow-hidden bg-charcoal"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  data-strk-bg-id={`category-bg-${cat.id}`}
                  data-strk-bg={`[category-title-${idx}]`}
                  data-strk-bg-ratio="3x4"
                  data-strk-bg-width={idx === 1 ? 900 : 700}
                />
                <div className="absolute inset-0 bg-charcoal/40 group-hover:bg-charcoal/30 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3
                    id={`category-title-${idx}`}
                    className="font-serif text-2xl md:text-3xl text-white tracking-widest border-b border-white pb-1 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500"
                  >
                    {cat.label}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </ImageLoader>
      </div>
    </section>
  );
}

function BrandStory() {
  return (
    <section id="story" className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <ImageLoader>
            <div className="aspect-[4/5] bg-soft-taupe overflow-hidden">
              <ResolvedImage
                imgId="story-img-velmora"
                query="[story-title] [story-text]"
                ratio="4x5"
                width="800"
                alt="Velmora craftsmanship"
                className="w-full h-full"
              />
            </div>
          </ImageLoader>
          <div className="md:py-8">
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-bronze mb-4">Our Story</p>
            <h2 id="story-title" className="font-serif text-3xl md:text-5xl mb-6">
              Designed with Intention, Worn with Ease
            </h2>
            <p id="story-text" className="font-sans text-warm-gray leading-relaxed mb-6">
              Velmora was born from a simple belief: fine jewelry should feel accessible, and everyday
              jewelry should feel special. Every piece is designed in-house, cast in recycled brass, and
              finished in thick 18K gold plating for a warm, lasting glow.
            </p>
            <p className="font-sans text-warm-gray leading-relaxed mb-8">
              From morning coffee to evening celebrations, our demi-fine collection is made to move with
              you — quietly luxurious, endlessly wearable.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-charcoal border-b border-charcoal pb-1 hover:text-bronze hover:border-bronze transition-colors"
            >
              Read Our Story <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-parchment">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-5xl mb-3">What Our Customers Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((review) => (
            <div
              key={review.id}
              className="bg-cream p-8 md:p-10 border border-soft-taupe text-center"
            >
              <div className="flex justify-center gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="text-bronze fill-current" />
                ))}
              </div>
              <p className="font-serif text-xl md:text-2xl italic text-charcoal mb-6 leading-snug">
                “{review.text}”
              </p>
              <p className="font-sans text-xs uppercase tracking-widest text-warm-gray">
                {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="bg-parchment">
      <ImageLoader>
        <Hero />
      </ImageLoader>
      <TrustBar />
      <Bestsellers />
      <UGCReel />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </main>
  );
}
