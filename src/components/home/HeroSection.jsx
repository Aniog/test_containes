import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=1920&q=80')`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-warmblack/70 via-warmblack/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-0">
        <div className="max-w-2xl">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight mb-6 animate-slide-up">
            Crafted to be
            <br />
            <span className="text-gold-300 italic">Treasured</span>
          </h1>
          <p className="text-lg md:text-xl text-ivory-200 mb-10 leading-relaxed animate-slide-up" style={{ animationDelay: '0.15s' }}>
            Fine demi-fine jewelry for the modern woman. 
            18K gold-plated pieces designed to become part of your story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Link
              to="/collection"
              className="inline-flex items-center justify-center bg-gold-500 text-white px-10 py-4 text-sm tracking-extra-wide uppercase font-medium transition-all duration-300 hover:bg-gold-600 active:scale-[0.98] group"
            >
              Shop the Collection
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center border-2 border-ivory-100/50 text-ivory-100 px-10 py-4 text-sm tracking-extra-wide uppercase font-medium transition-all duration-300 hover:border-ivory-100 hover:bg-ivory-100/10"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-ivory-100/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-ivory-100/70 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
