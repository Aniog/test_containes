import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1920&h=1080&fit=crop)',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
        <h1 
          className="font-serif text-4xl md:text-6xl lg:text-7xl mb-6 animate-slide-up"
          style={{ 
            fontFamily: 'var(--font-family-serif)',
            textShadow: '0 2px 20px rgba(0,0,0,0.3)'
          }}
        >
          Crafted to be Treasured
        </h1>
        <p 
          className="text-lg md:text-xl mb-8 opacity-90 animate-slide-up delay-200"
          style={{ fontFamily: 'var(--font-family-sans)' }}
        >
          Discover our collection of demi-fine gold jewelry — elegant pieces designed for life's special moments.
        </p>
        <Link 
          to="/shop" 
          className="btn-accent animate-slide-up delay-300"
        >
          Shop the Collection
        </Link>
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