import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[640px] max-h-[920px] overflow-hidden bg-[#1A1410] text-[#F7F2EA]">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="velmora-hero-bg-001"
        data-strk-bg="[hero-headline] [hero-subhead] gold jewelry close up warm editorial model"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />
      {/* Warm vignette + dark overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A1410]/55 via-[#1A1410]/25 to-[#1A1410]/70" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(184,146,74,0.12),_transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 h-full flex flex-col justify-end pb-20 md:pb-28 lg:pb-32">
        <p
          className="text-[11px] uppercase tracking-[0.4em] text-[#D9BE85] mb-6 velmora-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          The Summer Edit · 2026
        </p>
        <h1
          id="hero-headline"
          className="font-serif font-light text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight max-w-4xl velmora-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Crafted to be
          <br />
          <em className="italic font-light text-[#D9BE85]">Treasured.</em>
        </h1>
        <p
          id="hero-subhead"
          className="mt-6 max-w-md text-base md:text-lg leading-relaxed text-[#F7F2EA]/85 velmora-fade-up"
          style={{ animationDelay: "0.35s" }}
        >
          Demi-fine 18K gold jewelry, hand-finished in small batches. Made for
          everyday wear, designed to be passed on.
        </p>
        <div
          className="mt-10 flex flex-col sm:flex-row gap-4 velmora-fade-up"
          style={{ animationDelay: "0.5s" }}
        >
          <Link
            to="/shop"
            className="inline-flex items-center justify-center bg-[#B8924A] hover:bg-[#8E6E33] text-[#F7F2EA] uppercase tracking-[0.22em] text-xs py-4 px-10 transition-colors duration-300"
          >
            Shop the Collection
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center justify-center border border-[#F7F2EA]/40 hover:border-[#F7F2EA] text-[#F7F2EA] uppercase tracking-[0.22em] text-xs py-4 px-10 transition-colors duration-300"
          >
            Our Story
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-[#F7F2EA]/60">
        Scroll
      </div>
    </section>
  );
}
