import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=1600&h=900&fit=crop)',
        }}
      />
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/60 to-obsidian-950/30" />

      {/* Content */}
      <div className="relative z-10 text-center px-5 max-w-3xl mx-auto">
        <p className="section-subtitle mb-4 text-gold-400 animate-fade-in">
          New Collection 2026
        </p>
        <h1 className="font-serif text-display text-cream-50 mb-6 animate-fade-up">
          Crafted to be Treasured
        </h1>
        <p className="font-sans text-base md:text-lg text-obsidian-300 max-w-lg mx-auto mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
          Premium demi-fine jewelry in 18K gold. Designed for the moments that matter — and every day in between.
        </p>
        <Link to="/shop" className="btn-primary animate-fade-up" style={{ animationDelay: '0.4s' }}>
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: '0.8s' }}>
        <span className="text-[10px] tracking-widest-xl uppercase text-obsidian-500">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-obsidian-500 to-transparent" />
      </div>
    </section>
  );
}
