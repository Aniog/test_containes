import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://placehold.co/1920x1080/1a1a1a/c9a96e?text=Warm+Gold+Jewelry+Editorial')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-velmora-black/50 via-velmora-black/30 to-velmora-black/60" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-velmora-gold-light text-xs sm:text-sm font-medium tracking-editorial uppercase mb-4 sm:mb-6 animate-fade-in">
          Demi-Fine Jewelry
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-velmora-white leading-tight mb-4 sm:mb-6 animate-slide-up">
          Crafted to be Treasured
        </h1>
        <p className="text-velmora-sand/90 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed animate-fade-in">
          Quiet luxury for the modern woman. Each piece is designed to feel as special as the moments you wear it for.
        </p>
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 px-8 sm:px-10 py-3.5 sm:py-4 bg-velmora-gold text-velmora-charcoal text-xs font-semibold tracking-editorial uppercase hover:bg-velmora-gold-light transition-all duration-300 animate-slide-up"
        >
          Shop the Collection
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 rounded-full border border-velmora-white/40 flex items-start justify-center p-1.5">
          <div className="w-1 h-2 rounded-full bg-velmora-white/60" />
        </div>
      </div>
    </section>
  );
}
