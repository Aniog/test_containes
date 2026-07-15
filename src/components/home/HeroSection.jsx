import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] md:min-h-[700px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=1600&q=80)`,
            filter: "brightness(0.65)",
          }}
        />
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-serif leading-[1.1] mb-6 tracking-wide">
            Crafted to be
            <br />
            <span className="italic font-light">Treasured</span>
          </h1>
          <p className="text-white/80 text-base md:text-lg font-light max-w-xl mx-auto mb-10 leading-relaxed">
            Ethically made demi-fine gold jewelry designed for the woman who values
            quality, beauty, and timeless elegance.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-accent-gold text-white px-12 py-4 text-sm font-medium uppercase tracking-widest 
                       transition-all duration-300 hover:bg-accent-gold-hover"
          >
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-[1px] h-12 bg-white/30 animate-pulse" />
      </div>
    </section>
  );
}