import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1600&q=80"
          alt=""
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-noir/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <p className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-sand-300 mb-6 animate-fade-in">
          Velmora Fine Jewelry
        </p>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-cream leading-tight mb-6 animate-slide-up">
          Crafted to be Treasured
        </h1>
        <p className="font-sans text-sm md:text-base text-warmgray-200 max-w-xl mx-auto mb-10 leading-relaxed animate-slide-up">
          Demi-fine gold jewelry designed for the modern woman. Premium materials, ethical craftsmanship, accessible luxury.
        </p>
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 px-10 py-3.5 bg-cream text-noir font-sans text-sm font-medium tracking-wider uppercase hover:bg-sand-200 transition-all duration-300 animate-slide-up"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in">
        <div className="w-px h-10 bg-cream/40" />
        <span className="text-[10px] tracking-[0.3em] uppercase text-cream/50">Scroll</span>
      </div>
    </section>
  );
}