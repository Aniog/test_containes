import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1920&q=80)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/70 via-charcoal-900/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-0">
        <div className="max-w-xl md:max-w-2xl animate-fade-in">
          <p className="font-sans text-xs md:text-sm tracking-ultra-wide text-gold-300 uppercase mb-4">
            Demi-Fine Jewelry
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream-50 leading-tight mb-6">
            Crafted to be Treasured
          </h1>
          <p className="font-sans text-base md:text-lg text-cream-200 leading-relaxed mb-8 max-w-lg">
            Timeless 18K gold-plated pieces designed for the modern woman. 
            Everyday luxury that feels extraordinary.
          </p>
          <Link 
            to="/collection" 
            className="inline-block bg-cream-50 text-charcoal-800 px-10 py-4 font-sans font-medium tracking-wide text-sm uppercase transition-all duration-300 hover:bg-gold-100 hover:shadow-lg"
          >
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cream-100/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-cream-100/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
