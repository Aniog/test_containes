import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=1600&q=85"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-lg">
          <p className="text-gold text-sm tracking-[0.2em] uppercase mb-4 animate-fadeIn">
            Velmora Fine Jewelry
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight font-light animate-slideUp">
            Crafted to be
            <br />
            <span className="italic font-medium">Treasured</span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-white/80 leading-relaxed max-w-md animate-slideUp delay-100">
            Demi-fine gold jewelry designed for the woman who values quality, 
            craftsmanship, and quiet elegance.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-slideUp delay-200">
            <Link
              to="/collection"
              className="inline-block px-10 py-4 bg-gold text-white text-sm tracking-[0.15em] uppercase hover:bg-gold-hover transition-all duration-300 text-center"
            >
              Shop the Collection
            </Link>
            <Link
              to="/collection"
              className="inline-block px-10 py-4 border-2 border-white/30 text-white text-sm tracking-[0.15em] uppercase hover:bg-white/10 transition-all duration-300 text-center"
            >
              Bestsellers
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}