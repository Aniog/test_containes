import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=1600&q=80)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-lg animate-[fadeInUp_1s_cubic-bezier(0.22,1,0.36,1)_0.3s_both]">
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-white/80 mb-4">
              Demi-Fine Gold Jewelry
            </p>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-white leading-tight">
              Crafted to be
              <br />
              <span className="font-semibold">Treasured</span>
            </h1>
            <p className="font-sans text-base md:text-lg text-white/70 mt-6 max-w-md leading-relaxed">
              Discover our curated collection of demi-fine gold jewelry —
              designed for the modern woman who values quality and timeless
              elegance.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 bg-velmora-gold text-white px-8 py-3.5 font-sans text-xs uppercase tracking-widest hover:bg-velmora-gold-hover transition-all duration-300"
              >
                Shop the Collection
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-3.5 font-sans text-xs uppercase tracking-widest hover:bg-white/10 transition-all duration-300"
              >
                Explore Bestsellers
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-px h-12 bg-white/30 mx-auto animate-[bounce_2s_infinite]" />
      </div>
    </section>
  );
}