import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-velmora-charcoal/20">
        <img 
          src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Woman wearing elegant gold jewelry" 
          className="w-full h-full object-cover object-[center_30%]"
        />
        {/* Subtle dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-velmora-charcoal/80 via-velmora-charcoal/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center mt-20">
        <p className="text-white/90 uppercase tracking-[0.2em] text-xs font-semibold mb-6 flex items-center">
            <span className="w-8 h-px bg-white/50 mr-4"></span>
            The Archive Collection
            <span className="w-8 h-px bg-white/50 ml-4"></span>
        </p>
        <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight drop-shadow-md">
          Crafted to be <br/> Treasured
        </h2>
        <p className="text-white/90 font-serif text-xl md:text-2xl italic mb-10 max-w-2xl drop-shadow-sm">
          Quiet luxury for the modern woman. Everyday elegance reimagined in 18k gold vermeil.
        </p>
        <Link 
          to="/shop" 
          className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-10 py-4 uppercase tracking-widest text-sm hover:bg-white hover:text-velmora-charcoal transition-colors duration-300 transform hover:-translate-y-0.5 shadow-lg"
        >
          Shop the Collection
        </Link>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center animate-pulse">
        <span className="text-white/60 text-[10px] uppercase tracking-widest mb-2">Scroll</span>
        <div className="w-px h-8 bg-white/40"></div>
      </div>
    </section>
  );
};

export default Hero;