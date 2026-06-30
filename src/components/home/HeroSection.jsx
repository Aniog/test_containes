import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative h-[100dvh] min-h-[600px] w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1617038224558-28ad3fb558a7?auto=format&fit=crop&w=1600&q=80"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-velmora-base/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-5">
        <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-white/80 mb-4 md:mb-6">
          Demi-Fine Jewelry
        </p>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl tracking-wide max-w-4xl leading-tight">
          Crafted to be
          <br />
          Treasured
        </h1>
        <p className="mt-4 md:mt-6 text-sm md:text-base text-white/70 max-w-md leading-relaxed">
          Timeless pieces designed for everyday elegance and moments worth remembering.
        </p>
        <Link
          to="/shop"
          className="mt-8 md:mt-10 inline-block bg-velmora-gold text-white px-10 py-3.5 text-xs uppercase tracking-widest font-medium hover:bg-velmora-gold-dark transition-colors"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60">
        <div className="w-px h-10 bg-white/30 mx-auto animate-bounce" />
      </div>
    </section>
  );
}
