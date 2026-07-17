import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://placehold.co/1920x1080/0F0E0E/C8A97E?text=Velmora+Hero"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-base/40 via-transparent to-base/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <p className="font-sans text-xs uppercase tracking-[0.25em] text-accent mb-6 animate-fade-in-up">
          Demi-Fine Jewelry
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-warm-white max-w-4xl leading-[1.1] animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
          Crafted to be Treasured
        </h1>
        <p className="mt-6 text-base md:text-lg text-warm-white/70 max-w-lg font-sans font-light animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          Timeless designs in 18K gold plate, made for everyday luxury and moments that matter.
        </p>
        <Link
          to="/shop"
          className="mt-10 inline-flex items-center gap-2 px-8 py-4 bg-accent text-base font-sans font-semibold text-sm uppercase tracking-wider hover:bg-accent-hover transition-all duration-300 rounded animate-fade-in-up"
          style={{ animationDelay: '0.45s' }}
        >
          Shop the Collection
          <ArrowRight size={16} />
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
        <span className="text-[10px] uppercase tracking-widest text-warm-white/50">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-warm-white/50 to-transparent" />
      </div>
    </section>
  );
}
