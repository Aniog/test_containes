import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-velmora-ink">
        <div className="absolute inset-0 bg-gradient-to-b from-velmora-charcoal/80 via-velmora-charcoal/40 to-velmora-ink/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-velmora-bronze/20 via-transparent to-velmora-bronze/20" />
        {/* Simulated jewelry glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-velmora-gold/10 blur-[120px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto animate-fade-in">
        <p className="font-sans text-xs md:text-sm tracking-super uppercase text-velmora-gold mb-6">
          Demi-Fine Jewelry
        </p>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white font-light leading-tight mb-6 text-balance">
          Crafted to be<br className="hidden md:block" /> Treasured
        </h1>
        <p className="text-white/60 text-sm md:text-base max-w-lg mx-auto mb-10 leading-relaxed font-light">
          Heirloom-worthy demi-fine jewelry in 18K gold plate. Designed for the woman who collects moments, not things.
        </p>
        <Link to="/shop" className="btn-primary text-sm tracking-wider">
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}