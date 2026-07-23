import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden bg-charcoal">
      {/* Background image placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal-soft to-charcoal" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-warmgray-light/30 text-sm uppercase tracking-[0.3em]">Hero Image — Gold Jewelry on Model</span>
      </div>

      {/* Overlay gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-charcoal/30" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-end pb-20 md:pb-28 px-4 text-center">
        <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4 font-medium">
          Demi-Fine Jewelry
        </p>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white font-medium leading-tight max-w-4xl">
          Crafted to be Treasured
        </h1>
        <p className="mt-4 md:mt-6 text-warmgray-light text-sm md:text-base max-w-md leading-relaxed">
          Timeless pieces designed for everyday luxury. 18K gold-plated, hypoallergenic, and made to last.
        </p>
        <Link
          to="/shop"
          className="mt-8 md:mt-10 inline-block px-10 py-3.5 bg-gold text-white text-xs tracking-[0.2em] uppercase font-semibold hover:bg-gold-dark transition-colors duration-300"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
}
