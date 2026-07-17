import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[650px] flex items-center justify-center overflow-hidden">
      {/* Background — warm gold jewelry editorial */}
      <div className="absolute inset-0 bg-espresso">
        <div
          className="absolute inset-0 opacity-70"
          style={{
            background: 'radial-gradient(ellipse 60% 50% at 50% 40%, #3a3020 0%, #1C1917 70%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'radial-gradient(circle at 30% 35%, rgba(199, 165, 91, 0.25) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(199, 165, 91, 0.15) 0%, transparent 50%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-[700px] mx-auto">
        <p className="text-gold-light text-[11px] lg:text-xs tracking-[0.28em] uppercase mb-6 animate-fade-in font-medium">
          Demi-Fine Gold Jewelry
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl text-cream font-light leading-[1.1] mb-6 tracking-wide animate-slide-up">
          Crafted to be<br />Treasured
        </h1>
        <p className="text-cream/60 text-sm lg:text-base leading-relaxed max-w-[420px] mx-auto mb-10 animate-fade-in font-light" style={{ animationDelay: '0.3s' }}>
          Timeless demi-fine jewelry in 18K gold plate — designed for the moments that matter, priced for every day.
        </p>
        <Link
          to="/shop"
          className="btn-gold animate-fade-in"
          style={{ animationDelay: '0.5s' }}
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/30 animate-fade-in" style={{ animationDelay: '0.8s' }}>
        <span className="text-[9px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-cream/30 to-transparent" />
      </div>
    </section>
  );
}
