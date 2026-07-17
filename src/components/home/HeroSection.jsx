import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/jewelry-hero/1600/900"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-xl">
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-tight font-light text-balance">
              Crafted to be<br />
              <span className="italic font-light">Treasured</span>
            </h1>
            <p className="text-white/70 text-base md:text-lg mt-6 max-w-md leading-relaxed font-light">
              Demi-fine gold jewelry designed for life's everyday moments and most cherished occasions. Each piece, a heirloom in the making.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link to="/shop" className="btn-primary inline-block text-center">
                Shop the Collection
              </Link>
              <Link
                to="/shop"
                className="border border-white/40 text-white px-8 py-3 text-sm uppercase tracking-widest font-medium hover:bg-white hover:text-charcoal transition-all duration-300 text-center"
              >
                Explore Bestsellers
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-[1px] h-12 bg-white/30 mx-auto" />
      </div>
    </section>
  );
}