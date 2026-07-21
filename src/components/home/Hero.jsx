import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1920&h=1080&fit=crop)'
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-velmora-dark/70 via-velmora-dark/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-xl">
            <h1 
              className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-tight animate-fade-in-up"
              style={{ animationDelay: '0.2s' }}
            >
              Crafted to be Treasured
            </h1>
            <p 
              className="mt-6 text-white/80 text-lg md:text-xl leading-relaxed animate-fade-in-up"
              style={{ animationDelay: '0.4s' }}
            >
              Discover our collection of premium demi-fine jewelry, designed for the modern woman who appreciates timeless elegance.
            </p>
            <Link
              to="/shop"
              className="inline-block mt-8 btn-primary animate-fade-in-up"
              style={{ animationDelay: '0.6s' }}
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;