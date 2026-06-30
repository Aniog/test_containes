import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-charcoal via-[#2a2018] to-[#1a1208]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1600&q=80')] bg-cover bg-center opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-white leading-tight">
          Crafted to be<br />Treasured
        </h1>
        <p className="mt-6 text-sm md:text-base text-white/70 font-sans max-w-md mx-auto leading-relaxed">
          Demi-fine jewelry designed for the moments that matter. 18K gold plated, hypoallergenic, made to last.
        </p>
        <Link
          to="/shop"
          className="inline-block mt-8 bg-brand-gold text-white px-10 py-3.5 text-xs tracking-widest uppercase font-sans hover:bg-brand-gold-dark transition-colors"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-px h-8 bg-white/30 animate-pulse" />
      </div>
    </section>
  );
}
