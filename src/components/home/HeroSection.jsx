import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[650px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-espresso to-charcoal-soft">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#B8965E20_0%,_transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#D4B87A15_0%,_transparent_50%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto animate-fade-in">
        <p className="text-gold-light text-xs sm:text-sm tracking-widest uppercase mb-6 font-sans">
          Demi-Fine Jewelry
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6 tracking-wide">
          Crafted to be<br className="hidden sm:block" /> Treasured
        </h1>
        <p className="text-taupe text-sm sm:text-base max-w-lg mx-auto mb-10 leading-relaxed">
          Gold-plated jewelry designed for everyday elegance. Each piece is
          crafted with care, meant to be worn, loved, and passed down.
        </p>
        <Link
          to="/shop"
          className="inline-block bg-gold hover:bg-gold-deep text-white text-sm font-medium tracking-wider uppercase px-10 py-3.5 rounded transition-all duration-300"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-5 h-8 border border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}