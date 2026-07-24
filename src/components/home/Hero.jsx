import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1920&h=1080&fit=crop"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from rgba(26, 24, 21, 0.4) to rgba(26, 24, 21, 0.2)" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container">
          <div className="max-w-xl">
            <h1
              className="text-5xl md:text-6xl lg:text-7xl text-[#FAF9F7] mb-6 animate-slide-up"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Crafted to be Treasured
            </h1>
            <p className="text-lg md:text-xl text-[#FAF9F7]/80 mb-8 animate-slide-up delay-200">
              Discover our collection of demi-fine gold jewelry — elegant pieces
              designed for the modern woman who appreciates quiet luxury.
            </p>
            <Link
              to="/shop"
              className="inline-block py-4 px-10 bg-[#C9A962] text-white text-sm tracking-[0.1em] uppercase hover:bg-[#B8954F] transition-all duration-300 shadow-[0_4px_12px_rgba(201,169,98,0.3)] hover:shadow-[0_6px_20px_rgba(201,169,98,0.4)] animate-slide-up delay-300"
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#FAF9F7]/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-[#FAF9F7]/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}