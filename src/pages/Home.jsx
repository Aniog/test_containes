import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Truck, RotateCcw, Sparkles, Leaf } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { products, categories, ugcCaptions, testimonials } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { PLACEHOLDER_SRC } from "@/lib/utils";

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const id = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(id);
  }, []);

  const bestsellers = products.filter((p) => p.bestseller).slice(0, 5);

  return (
    <div ref={containerRef}>
      {/* HERO */}
      <section className="relative h-[100svh] min-h-[640px] lg:min-h-[720px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            alt=""
            aria-hidden="true"
            width="1920"
            height="1200"
            data-strk-bg-id="hero-bg-velmora-main"
            data-strk-img-id="hero-bg-velmora-main-img"
            data-strk-img="warm lit close up of gold jewelry on model neck collarbone editorial dark moody"
            data-strk-img-ratio="16x9"
            data-strk-img-width="1920"
            src={PLACEHOLDER_SRC}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: "brightness(0.55) contrast(1.05) saturate(0.95)" }}
          />
          {/* Editorial gradient overlay for text contrast — strongest at lower-left where the H1 sits */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#13100E]/85 via-[#13100E]/45 to-[#13100E]/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#13100E]/70 via-transparent to-[#13100E]/40" />
        </div>

        <div className="relative h-full max-w-7xl mx-auto px-5 lg:px-10 flex flex-col justify-end pb-20 lg:pb-32 fade-up">
          <p id="hero-eyebrow" className="text-[11px] uppercase tracking-[0.4em] text-[#D9B380] mb-5 lg:mb-6" style={{ textShadow: "0 1px 20px rgba(0,0,0,0.5)" }}>
            The New Collection
          </p>
          <h1 id="hero-title" className="font-serif text-white text-[44px] sm:text-6xl lg:text-7xl xl:text-[88px] leading-[1.02] max-w-3xl" style={{ textShadow: "0 2px 40px rgba(0,0,0,0.6), 0 1px 2px rgba(0,0,0,0.4)" }}>
            Crafted to be<br />
            <em className="not-italic font-light italic">Treasured.</em>
          </h1>
          <p id="hero-sub" className="text-white/95 mt-6 lg:mt-8 max-w-md text-base lg:text-lg leading-relaxed" style={{ textShadow: "0 1px 20px rgba(0,0,0,0.5)" }}>
            Demi-fine jewelry made for everyday wear and lifelong keeping. 18K gold-plated, hypoallergenic, designed in studio.
          </p>
          <div className="mt-8 lg:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <Link
              to="/shop"
              className="inline-flex items-center justify-center gap-3 bg-[#B8935C] text-white text-[12px] uppercase tracking-[0.25em] font-medium px-9 py-4 hover:bg-[#9A7A45] transition-colors duration-200 group"
            >
              Shop the Collection
              <ArrowRight size={15} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center text-[12px] uppercase tracking-[0.25em] font-medium text-white border border-white/40 hover:border-white px-9 py-4 hover:bg-white/10 transition"
            >
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-y border-[#E5DCCD] bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 py-5 lg:py-6 grid grid-cols-2 lg:grid-cols-4 gap-y-4 gap-x-6 lg:gap-8">
          {[
            { Icon: Truck, label: "Free Worldwide Shipping" },
            { Icon: RotateCcw, label: "30-Day Returns" },
            { Icon: Sparkles, label: "18K Gold Plated" },
            { Icon: Leaf, label: "Hypoallergenic" },
          ].map(({ Icon, label }) => (
            <div key={label} className="flex items-center gap-3 justify-center">
              <Icon size={16} strokeWidth={1.4} className="text-[#B8935C] flex-shrink-0" />
              <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.18em] text-[#2A211B] font-medium">
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* BESTSELLERS */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="flex items-end justify-between mb-10 lg:mb-14 gap-6 flex-wrap">
            <div>
              <p className="eyebrow mb-3">Bestsellers</p>
              <h2 className="font-serif text-4xl lg:text-5xl text-[#13100E]">
                Pieces, loved most.
              </h2>
            </div>
            <Link
              to="/shop"
              className="text-[12px] uppercase tracking-[0.22em] font-medium text-[#2A211B] hover:text-[#B8935C] transition border-b border-[#2A211B] hover:border-[#B8935C] pb-1"
            >
              Shop all
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
            {bestsellers.map((p, idx) => (
              <ProductCard key={p.id} product={p} eager={idx < 3} />
            ))}
          </div>
        </div>
      </section>

      {/* UGC REEL ROW */}
      <section className="py-16 lg:py-20 bg-[#F2EDE5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow mb-3">@velmora</p>
            <h2 className="font-serif text-3xl lg:text-4xl text-[#13100E]">
              Worn in the wild.
            </h2>
          </div>
          <a
            href="#"
            className="text-[12px] uppercase tracking-[0.22em] font-medium text-[#2A211B] hover:text-[#B8935C] transition hidden sm:inline-block border-b border-[#2A211B] hover:border-[#B8935C] pb-1"
          >
            Follow on Instagram
          </a>
        </div>

        <div className="overflow-x-auto no-scrollbar">
          <div className="flex gap-4 px-5 lg:px-10 pb-2" style={{ minWidth: "max-content" }}>
            {ugcCaptions.map((u, idx) => (
              <a
                key={u.id}
                href="#"
                className="relative flex-shrink-0 w-[220px] lg:w-[260px] aspect-[9/16] overflow-hidden bg-[#13100E] group"
              >
                <img
                  alt={u.caption}
                  width="260"
                  height="462"
                  data-strk-img-id={`ugc-${u.id}-${idx}`}
                  data-strk-img={u.q}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="400"
                  src={PLACEHOLDER_SRC}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#13100E] via-[#13100E]/70 to-transparent" />
                <p className="absolute left-4 right-4 bottom-4 lg:bottom-5 font-serif text-white text-base lg:text-lg italic leading-snug">
                  "{u.caption}"
                </p>
                {/* Reel-style play indicator */}
                <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center">
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="white" aria-hidden="true">
                    <path d="M3 1.5v9l8-4.5z" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SHOP BY CATEGORY */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-12 lg:mb-16">
            <p className="eyebrow mb-3">Shop by Category</p>
            <h2 className="font-serif text-4xl lg:text-5xl text-[#13100E]">
              Find your piece.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                to={`/shop?category=${cat.name}`}
                className="group relative aspect-[4/5] overflow-hidden bg-[#13100E]"
              >
                <img
                  alt={cat.name}
                  width="700"
                  height="875"
                  data-strk-img-id={`cat-tile-${cat.slug}`}
                  data-strk-img={cat.image.q}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="800"
                  src={PLACEHOLDER_SRC}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ filter: "brightness(0.85)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#13100E]/80 via-[#13100E]/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7 lg:p-9 transition-transform duration-500 group-hover:-translate-y-1">
                  <h3 className="font-serif text-3xl lg:text-4xl text-white mb-2">{cat.name}</h3>
                  <p className="text-sm text-white/80 mb-4">{cat.description}</p>
                  <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-[#B8935C] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Explore
                    <ArrowRight size={13} strokeWidth={1.5} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* OUR STORY (split) */}
      <section className="py-20 lg:py-28 bg-[#F2EDE5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="aspect-[4/5] lg:aspect-[5/6] overflow-hidden order-1 lg:order-1">
            <img
              alt="Velmora studio"
              width="800"
              height="1000"
              data-strk-img-id="story-image-velmora-studio"
              data-strk-img="jewelry maker hands working on gold piece studio warm light editorial"
              data-strk-img-ratio="4x5"
              data-strk-img-width="900"
              src={PLACEHOLDER_SRC}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="order-2 lg:order-2 lg:pe-10">
            <p className="eyebrow mb-4">Our Story</p>
            <h2 id="story-title" className="font-serif text-4xl lg:text-5xl text-[#13100E] leading-[1.05] mb-6 lg:mb-8">
              Heirloom feeling, modern price.
            </h2>
            <p id="story-body" className="text-[#2A211B] text-base lg:text-lg leading-relaxed mb-5">
              Velmora was founded on a single idea — that the jewelry you wear every day should feel as considered as the pieces you save for special moments.
            </p>
            <p className="text-[#2A211B] text-base lg:text-lg leading-relaxed mb-8">
              Each piece is plated in 18K gold over hypoallergenic brass, designed in our small studio, and made in limited runs. We don't chase trends. We make pieces meant to be worn for a decade and passed on after that.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-3 text-[12px] uppercase tracking-[0.25em] font-medium text-[#13100E] border-b border-[#13100E] hover:border-[#B8935C] hover:text-[#B8935C] transition pb-1.5"
            >
              Read Our Story
              <ArrowRight size={13} strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-12 lg:mb-16">
            <p className="eyebrow mb-3">Reviews</p>
            <h2 className="font-serif text-4xl lg:text-5xl text-[#13100E]">
              From those who wear it.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
            {testimonials.map((t) => (
              <figure key={t.id} className="bg-[#FAF7F2] border border-[#E5DCCD] p-8 lg:p-10 flex flex-col">
                <div className="flex gap-1 mb-5" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      strokeWidth={1.2}
                      className={i < t.rating ? "text-[#B8935C] fill-[#B8935C]" : "text-[#E5DCCD]"}
                    />
                  ))}
                </div>
                <blockquote className="font-serif text-xl lg:text-[22px] text-[#13100E] leading-[1.4] flex-1 italic">
                  "{t.text}"
                </blockquote>
                <figcaption className="mt-6 text-[11px] uppercase tracking-[0.25em] text-[#8A7A66] font-medium">
                  — {t.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-[#13100E] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            alt=""
            aria-hidden="true"
            width="1920"
            height="600"
            data-strk-img-id="newsletter-bg"
            data-strk-img="gold jewelry texture luxury warm glow background"
            data-strk-img-ratio="16x9"
            data-strk-img-width="1600"
            src={PLACEHOLDER_SRC}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#13100E] via-[#13100E]/80 to-[#13100E]/40" />
        </div>
        <div className="relative max-w-3xl mx-auto px-5 lg:px-10 py-20 lg:py-28 text-center">
          <p className="text-[11px] uppercase tracking-[0.4em] text-[#B8935C] mb-5">Velmora Insider</p>
          <h2 id="newsletter-title" className="font-serif text-4xl lg:text-[52px] text-white leading-[1.05] mb-5">
            Join for 10% off your first order.
          </h2>
          <p className="text-white/70 mb-9 max-w-lg mx-auto leading-relaxed">
            Quiet emails. New arrivals first, the occasional studio note, the occasional pre-order. No noise.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="Your email address"
              className="flex-1 bg-transparent border border-white/30 text-white placeholder:text-white/50 px-5 py-4 text-sm focus:border-[#B8935C] focus:outline-none transition"
            />
            <button
              type="submit"
              className="bg-[#B8935C] text-white text-[12px] uppercase tracking-[0.25em] font-medium px-8 py-4 hover:bg-[#9A7A45] transition"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-5 text-[11px] uppercase tracking-[0.2em] text-white/40">
            Unsubscribe any time. We never share your email.
          </p>
        </div>
      </section>
    </div>
  );
}
