import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-charcoal">
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1600&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-transparent to-charcoal/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-2xl">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-tight">
          Crafted to be Treasured
        </h1>
        <p className="mt-4 md:mt-6 text-white/70 text-sm md:text-base leading-relaxed max-w-md mx-auto">
          Demi-fine jewelry designed for the modern woman. Timeless pieces that elevate every moment.
        </p>
        <Link
          to="/shop"
          className="inline-block mt-8 bg-gold text-cream px-10 py-3.5 text-xs tracking-[0.15em] uppercase font-sans font-medium hover:bg-gold-light transition-colors"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
}
