import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[650px] max-h-[900px] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-espresso">
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/70 via-espresso/30 to-espresso/60" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1440 900\'%3E%3Cdefs%3E%3ClinearGradient id=\'g\' x1=\'0%25\' y1=\'0%25\' x2=\'100%25\' y2=\'100%25\'%3E%3Cstop offset=\'0%25\' style=\'stop-color:%231C1816\'/%3E%3Cstop offset=\'40%25\' style=\'stop-color:%233D3530\'/%3E%3Cstop offset=\'70%25\' style=\'stop-color:%239B7A3C\'/%3E%3Cstop offset=\'100%25\' style=\'stop-color:%231C1816\'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill=\'url(%23g)\' width=\'1440\' height=\'900\'/%3E%3C/svg%3E")',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <p className="font-serif italic text-gold-100 text-lg md:text-xl mb-4 opacity-0 animate-fade-in">
          Velmora Fine Jewelry
        </p>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-cream tracking-widest uppercase leading-tight max-w-3xl opacity-0 animate-slide-up">
          Crafted to be Treasured
        </h1>
        <p className="mt-6 text-cream-200 text-sm md:text-base max-w-lg leading-relaxed opacity-0 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Demi-fine gold jewelry for the modern woman. Each piece designed with intention, plated in 18K gold, made to be lived in and loved.
        </p>
        <Link
          to="/shop"
          className="mt-10 inline-block bg-gold text-cream px-10 py-3.5 text-xs uppercase tracking-super font-medium hover:bg-gold-500 transition-all duration-300 opacity-0 animate-slide-up"
          style={{ animationDelay: '0.4s' }}
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-cream-200 animate-fade-in" style={{ animationDelay: '1s' }}>
        <span className="text-[10px] uppercase tracking-super">Scroll</span>
        <div className="w-px h-10 bg-cream-200/40 animate-pulse" />
      </div>
    </section>
  );
}
