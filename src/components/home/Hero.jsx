import { Link } from 'react-router-dom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Hero() {
  const ref = useScrollAnimation();

  return (
    <section className="relative h-[85vh] md:h-screen flex items-center overflow-hidden">
      {/* Background image with dark overlay */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-background-main"
        data-strk-bg="gold jewelry on model warm editorial portrait luxury"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/80 via-charcoal-900/50 to-charcoal-900/20" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div ref={ref} className="animate-on-scroll max-w-xl">
          <p className="text-gold-300 text-xs tracking-mega-wide uppercase font-sans font-medium mb-4">
            New Collection 2026
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-ivory-50 font-light leading-[1.1] mb-6">
            Crafted to be
            <br />
            <span className="font-medium italic">Treasured</span>
          </h1>
          <p className="text-ivory-200/80 text-sm md:text-base leading-relaxed mb-8 max-w-md font-light">
            Premium demi-fine gold jewelry, thoughtfully designed for the modern woman. 
            18K gold plated. Hypoallergenic. Made to last.
          </p>
          <Link
            to="/shop"
            className="inline-block px-10 py-3.5 bg-gold-500 text-white text-xs tracking-widest uppercase font-semibold 
            hover:bg-gold-600 transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/20"
          >
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-ivory-300/50 text-[10px] tracking-widest uppercase">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-ivory-300/50 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
