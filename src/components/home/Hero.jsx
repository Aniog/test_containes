import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1920&h=1080&fit=crop)'
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-charcoal/30" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div className="max-w-3xl">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream leading-tight mb-6">
            Crafted to be Treasured
          </h1>
          <p className="font-sans text-lg md:text-xl text-cream/80 mb-8 max-w-xl mx-auto">
            Premium demi-fine jewelry designed for the modern woman who appreciates quiet luxury and timeless elegance.
          </p>
          <Link
            to="/shop"
            className="inline-block btn-primary bg-cream text-charcoal hover:bg-gold hover:text-white"
          >
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cream/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-cream/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;