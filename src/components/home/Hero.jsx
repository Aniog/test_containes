import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-ivory">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=1920&h=1080&fit=crop"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ivory via-ivory/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-xl">
          <span className="inline-block text-xs uppercase tracking-ultra-wide text-taupe mb-6">
            New Collection
          </span>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-espresso leading-tight mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-lg md:text-xl text-taupe leading-relaxed mb-10 max-w-md">
            Demi-fine 18K gold plated jewelry that elevates everyday moments into something extraordinary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/collection"
              className="inline-flex items-center justify-center bg-espresso text-ivory px-10 py-4 text-xs uppercase tracking-ultra-wide hover:bg-taupe transition-colors duration-300 group"
            >
              Shop the Collection
              <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center border border-espresso text-espresso px-10 py-4 text-xs uppercase tracking-ultra-wide hover:bg-espresso hover:text-ivory transition-all duration-300"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-taupe/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-taupe/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
