import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1920&q=80"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl font-light tracking-wide mb-6 animate-fade-in">
          Crafted to be Treasured
        </h1>
        <p className="font-sans text-lg md:text-xl font-light tracking-wide mb-10 max-w-2xl mx-auto opacity-90">
          Timeless demi-fine jewelry designed for the modern woman who appreciates quiet luxury
        </p>
        <Link
          to="/shop"
          className="inline-block bg-velmora-gold hover:bg-velmora-gold-hover text-white px-10 py-4 tracking-[0.2em] text-sm uppercase transition-all duration-300"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-[1px] h-12 bg-white/50" />
      </div>
    </section>
  );
}
