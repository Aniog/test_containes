import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1920&h=1080&fit=crop"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-wide animate-slide-up">
          Crafted to be Treasured
        </h1>
        <p className="mt-6 text-lg md:text-xl text-white/90 font-sans font-light animate-slide-up delay-200">
          Premium demi-fine jewelry for the modern woman who appreciates quiet luxury
        </p>
        <Link
          to="/collections"
          className="inline-block mt-8 btn-accent animate-slide-up delay-300"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/80 rounded-full" />
        </div>
      </div>
    </section>
  );
}
