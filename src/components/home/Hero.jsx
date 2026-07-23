import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1920&h=1080&fit=crop"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight">
          Crafted to be
          <br />
          <em className="italic text-velmora-gold-light">Treasured</em>
        </h1>
        
        <p className="font-sans text-lg md:text-xl mb-10 text-white/90 max-w-2xl mx-auto leading-relaxed">
          Demi-fine jewelry that celebrates life's precious moments. 
          Each piece thoughtfully designed for the modern woman.
        </p>

        <Link
          to="/shop"
          className="inline-flex items-center gap-2 bg-white text-velmora-charcoal 
                     px-10 py-4 font-sans text-sm uppercase tracking-ultra-wide
                     hover:bg-velmora-gold hover:text-white transition-all duration-500
                     group"
        >
          Shop the Collection
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-px h-16 bg-white/40 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-scroll-down" />
        </div>
      </div>

      <style>{`
        @keyframes scroll-down {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(200%);
          }
        }
        .animate-scroll-down {
          animation: scroll-down 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
