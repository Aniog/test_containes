import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1920&h=1080&fit=crop)'
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-velmora-charcoal/40 via-velmora-charcoal/20 to-velmora-charcoal/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-velmora-cream mb-6 animate-fade-in-up opacity-0">
          Crafted to be Treasured
        </h1>
        <p className="text-velmora-cream/90 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto animate-fade-in-up opacity-0 stagger-2">
          Timeless demi-fine jewelry designed for the modern woman who appreciates quiet luxury.
        </p>
        <Link 
          to="/shop"
          className="inline-block btn-primary bg-velmora-cream text-velmora-charcoal hover:bg-velmora-gold hover:text-white animate-fade-in-up opacity-0 stagger-3"
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
};

export default Hero;