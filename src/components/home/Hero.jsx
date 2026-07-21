import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1920&h=1080&fit=crop)',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 animate-fade-in-up">
          Crafted to be Treasured
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-10 font-light animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Premium demi-fine jewelry for the modern woman. Elegant pieces designed to become your most treasured possessions.
        </p>
        <Link
          to="/shop"
          className="inline-block px-10 py-4 bg-[#C9A962] text-white text-sm uppercase tracking-[0.2em] hover:bg-[#B8984F] transition-all hover:shadow-lg animate-fade-in-up"
          style={{ animationDelay: '0.4s' }}
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  );
}