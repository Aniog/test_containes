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
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(26,26,26,0.3) 0%, rgba(26,26,26,0.5) 100%)'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#FDFCFA] mb-6 animate-fade-in"
          style={{ textShadow: '0 2px 20px rgba(0,0,0,0.3)' }}
        >
          Crafted to be Treasured
        </h1>
        <p
          className="text-lg md:text-xl text-[#F5F0E8]/90 mb-10 font-sans font-light animate-fade-in delay-200"
          style={{ textShadow: '0 1px 10px rgba(0,0,0,0.3)' }}
        >
          Discover our collection of demi-fine gold jewelry — elegant pieces designed for life's special moments.
        </p>
        <Link
          to="/shop"
          className="btn-accent animate-fade-in delay-300"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#F5F0E8]/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-[#F5F0E8]/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}