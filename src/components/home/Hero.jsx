import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1920&h=1080&fit=crop"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1918]/30 via-[#1A1918]/10 to-[#1A1918]/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-app text-center text-[#FAF9F7]">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-tight animate-slide-up">
          Crafted to be
          <br />
          Treasured
        </h1>
        <p className="mt-6 text-lg md:text-xl text-[#FAF9F7]/80 max-w-xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
          Premium demi-fine jewelry for the modern woman. Elegant pieces designed to be worn and loved every day.
        </p>
        <Link
          to="/shop"
          className="inline-block mt-10 btn-primary animate-slide-up"
          style={{ animationDelay: '0.2s' }}
        >
          Shop the Collection
        </Link>
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