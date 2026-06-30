import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden bg-base">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1600&q=80"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-base/30 via-base/20 to-base/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <p className="font-sans text-xs uppercase tracking-[0.25em] text-gold mb-6">
          Demi-Fine Jewelry
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-text-inverse font-light leading-[1.05] max-w-4xl">
          Crafted to be
          <br />
          Treasured
        </h1>
        <p className="font-sans text-sm md:text-base text-text-inverse/80 mt-6 max-w-md leading-relaxed">
          Timeless gold pieces designed for the modern woman. Wear them today,
          cherish them forever.
        </p>
        <Link
          to="/shop"
          className="mt-10 inline-block bg-gold text-base font-sans text-xs uppercase tracking-widest font-medium px-10 py-4 hover:bg-gold-dark transition-colors duration-300"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-sans text-[10px] uppercase tracking-widest text-text-inverse/60">
          Scroll
        </span>
        <div className="w-px h-8 bg-text-inverse/40 animate-pulse" />
      </div>
    </section>
  );
}
