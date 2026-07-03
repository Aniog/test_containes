import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&q=80"
          alt="Model wearing Velmora gold jewelry"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/30 via-charcoal/20 to-charcoal/50" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <h1 className="text-white font-serif text-5xl md:text-6xl lg:text-7xl font-normal tracking-normal mb-6 leading-tight animate-slide-up">
          Crafted to be Treasured
        </h1>
        <p className="text-white/90 text-lg md:text-xl font-light mb-10 max-w-xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '150ms' }}>
          Demi-fine jewelry designed for everyday luxury. 18K gold plating that makes every day feel special.
        </p>
        <Link
          to="/shop"
          className="inline-block bg-white text-charcoal px-10 py-4 text-sm uppercase tracking-wide font-medium rounded-sm hover:bg-ivory transition-all duration-300 hover:shadow-lg animate-slide-up"
          style={{ animationDelay: '300ms' }}
        >
          Shop the Collection
        </Link>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
