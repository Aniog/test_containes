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
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/30 via-charcoal/20 to-charcoal/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-cream px-4 max-w-3xl mx-auto">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium leading-tight animate-fadeIn">
          Crafted to be Treasured
        </h1>
        <p className="mt-6 text-lg md:text-xl text-cream/80 font-sans font-light">
          Premium demi-fine jewelry designed for the modern woman. 
          Elegant pieces that become part of your story.
        </p>
        <Link
          to="/shop"
          className="inline-block mt-8 md:mt-10 bg-gold-antique text-white py-3 md:py-4 px-8 md:px-12 font-sans text-sm uppercase tracking-widest hover:bg-gold-antique/90 transition-all duration-300 hover:scale-105"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cream/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-cream/50 rounded-full animate-pulse" />
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
      `}</style>
    </section>
  );
}