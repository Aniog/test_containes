import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg-dark">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&q=80"
          alt="Velmora Fine Jewelry"
          className="w-full h-full object-cover opacity-60"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-bg-dark/80 via-bg-dark/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-10 pt-20">
        <div className="max-w-2xl">
          <span className="inline-block text-xs font-medium tracking-extra-wide uppercase text-accent mb-4 animate-fade-up" style={{animationDelay: '0ms'}}>
            Demi-Fine Jewelry
          </span>
          
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-6 animate-fade-up" style={{animationDelay: '100ms'}}>
            Crafted to be<br />
            <span className="italic text-accent">Treasured</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed animate-fade-up" style={{animationDelay: '200ms'}}>
            Delicate gold jewelry designed for the modern woman. 
            Elevate every moment with pieces that feel like forever.
          </p>
          
          <div className="animate-fade-up" style={{animationDelay: '300ms'}}>
            <Link
              to="/shop"
              className="inline-flex items-center justify-center px-10 py-4 bg-accent text-white text-sm font-medium tracking-extra-wide uppercase hover:bg-accent-dark transition-all duration-300 hover:shadow-lg"
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
