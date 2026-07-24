import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] -mt-16 md:-mt-20">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=1600&q=85"
          alt="Warm gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <div className="animate-fade-in-up">
          <p className="text-gold-300 text-xs uppercase tracking-[0.25em] mb-4 font-sans">
            Demi-Fine Gold Jewelry
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
            Crafted to be
            <br />
            <span className="italic">Treasured</span>
          </h1>
          <p className="text-white/80 text-sm md:text-base max-w-md mx-auto mb-8 font-sans leading-relaxed">
            Pieces designed for the moments that matter — from everyday elegance to life's most cherished occasions.
          </p>
          <Link
            to="/shop"
            className="btn-primary inline-block"
          >
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-[1px] h-12 bg-white/40 animate-pulse" />
      </div>
    </section>
  );
}