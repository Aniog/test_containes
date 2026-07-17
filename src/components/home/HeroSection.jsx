import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[650px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=1600&h=900&fit=crop)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 via-charcoal/30 to-charcoal/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-3xl mx-auto">
        <p className="font-sans text-xs md:text-sm tracking-[0.2em] uppercase text-goldlight mb-5 animate-fade-in">
          Velmora Fine Jewelry
        </p>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium leading-[1.1] tracking-wide text-balance mb-6">
          Crafted to be Treasured
        </h1>
        <p className="font-sans text-sm md:text-base text-white/70 leading-relaxed max-w-lg mx-auto mb-10">
          Demi-fine gold jewelry designed for the woman who collects moments, not things. Each piece tells a story worth keeping.
        </p>
        <Link to="/shop" className="btn-primary">
          Shop the Collection
        </Link>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
        <span className="font-sans text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}
