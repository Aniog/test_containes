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
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-velmora-bg-primary/60 via-velmora-bg-primary/40 to-velmora-bg-primary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-serif text-hero-mobile md:text-hero text-velmora-text-primary mb-6 animate-fade-in">
          Crafted to be Treasured
        </h1>
        <p className="text-lg md:text-xl text-velmora-text-secondary mb-10 max-w-xl mx-auto font-light">
          Discover our collection of demi-fine gold jewelry — designed for the modern woman who appreciates quiet luxury.
        </p>
        <Link 
          to="/shop"
          className="inline-block bg-velmora-accent text-velmora-bg-primary px-10 py-4 text-sm font-medium tracking-wider uppercase transition-all duration-300 hover:bg-velmora-accent-hover hover:scale-[1.02]"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-velmora-text-secondary/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-velmora-text-secondary/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}