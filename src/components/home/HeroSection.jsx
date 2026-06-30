import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative h-[85vh] md:h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1600&h=1200&fit=crop')`,
        }}
      />
      {/* Warm overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-charcoal/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-charcoal/20" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-start justify-end pb-16 md:pb-24 px-5 md:px-12 lg:px-20 max-w-[1400px] mx-auto w-full">
        <p className="font-sans text-[11px] md:text-xs uppercase tracking-[0.2em] text-gold-light mb-4 animate-fade-up">
          Velmora Fine Jewelry
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-white leading-[1.1] max-w-[600px] animate-fade-up" style={{ animationDelay: '0.1s' }}>
          Crafted to be Treasured
        </h1>
        <p className="font-sans text-sm md:text-base text-white/70 mt-5 max-w-[440px] leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
          Premium demi-fine jewelry in 18K gold. Designed for the woman who knows that luxury is in the details.
        </p>
        <Link
          to="/shop"
          className="mt-8 inline-block px-8 py-3.5 bg-gold text-white text-xs font-sans font-semibold uppercase tracking-wide hover:bg-gold-dark transition-all duration-300 animate-fade-up"
          style={{ animationDelay: '0.3s' }}
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
}
