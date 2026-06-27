import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative -mt-16 md:-mt-20 h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=1600&q=85"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(44,40,37,0.5)] via-transparent to-[rgba(44,40,37,0.2)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-lg">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-white leading-[1.1] tracking-tight">
              Crafted to be
              <br />
              <span className="font-semibold italic">Treasured</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-md">
              Demi-fine gold jewelry for the woman who values quiet elegance. Each piece, a reflection of timeless beauty.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                to="/collections/all"
                className="inline-flex items-center justify-center bg-gold text-white px-10 py-4 text-sm tracking-[0.15em] uppercase rounded-sm hover:bg-gold-hover transition-all duration-300"
              >
                Shop the Collection
              </Link>
              <Link
                to="/collections/earrings"
                className="inline-flex items-center justify-center border border-white/40 text-white px-10 py-4 text-sm tracking-[0.15em] uppercase rounded-sm hover:bg-white/10 transition-all duration-300"
              >
                Shop Earrings
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-[1px] h-12 bg-white/30 animate-pulse" />
      </div>
    </section>
  );
}