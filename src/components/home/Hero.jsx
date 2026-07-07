import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-richBlack">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1800&q=85"
          alt=""
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-richBlack/80 via-richBlack/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-richBlack/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="section-container relative z-10 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-2xl">
          <p className="font-sans text-xs font-medium uppercase tracking-extra-wide text-gold mb-6 animate-in">
            Demi-Fine Gold Jewelry
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-ivory leading-[1.1] mb-6 animate-in animate-delay-100">
            Crafted to be
            <br />
            <em className="italic">Treasured</em>
          </h1>
          <p className="font-sans text-base md:text-lg text-warmGray-300 leading-relaxed mb-10 max-w-md animate-in animate-delay-200">
            18K gold-plated demi-fine jewelry designed for the moments worth remembering. Hypoallergenic, wearable, and made to be loved.
          </p>
          <div className="flex flex-wrap gap-4 animate-in animate-delay-300">
            <Link to="/collection" className="btn-gold">
              Shop the Collection
            </Link>
            <Link to="/collection?category=earrings" className="btn-secondary border-ivory/40 text-ivory hover:bg-ivory hover:text-charcoal">
              Explore Earrings
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-in animate-delay-500">
        <span className="font-sans text-[10px] uppercase tracking-extra-wide text-warmGray-400">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-warmGray-400 to-transparent" />
      </div>
    </section>
  );
}
