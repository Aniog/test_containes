import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-velmora"
        data-strk-bg="gold jewelry elegant woman"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1920&h=1080&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/20 to-charcoal/80 z-10" />

      {/* Content */}
      <div className="relative z-20 container text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h1 
            id="hero-title"
            className="font-serif text-ivory text-hero-mobile md:text-hero mb-6 animate-fade-in"
          >
            Crafted to be Treasured
          </h1>
          <p 
            id="hero-subtitle"
            className="text-ivory/80 text-lg md:text-xl font-light mb-10 max-w-xl mx-auto animate-fade-in stagger-1"
          >
            Discover our collection of premium demi-fine jewelry, designed for the modern woman who appreciates quiet luxury.
          </p>
          <Link 
            to="/shop"
            className="inline-block bg-gold text-charcoal px-10 py-4 uppercase tracking-widest text-sm font-medium hover:bg-gold/90 transition-all duration-300 hover:scale-105 animate-fade-in stagger-2"
          >
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-ivory/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-ivory/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;