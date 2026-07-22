import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1920&h=1080&fit=crop)'
        }}
      >
        <div className="absolute inset-0 bg-velmora-charcoal/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-velmora-cream px-4 max-w-3xl mx-auto">
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl tracking-wide animate-fade-in">
          Crafted to be Treasured
        </h1>
        <p className="mt-6 text-lg md:text-xl text-velmora-cream/90 font-light leading-relaxed animate-fade-in delay-200">
          Premium demi-fine jewelry designed for the modern woman who appreciates quiet luxury and timeless elegance.
        </p>
        <Link 
          to="/shop" 
          className="inline-block mt-8 btn-primary animate-fade-in delay-300"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-velmora-cream/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-velmora-cream/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
