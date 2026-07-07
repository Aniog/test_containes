import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1611591437281-460bf03cb967?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Woman wearing elegant gold jewelry" 
          className="w-full h-full object-cover object-center"
        />
        {/* Soft overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 md:px-8 max-w-4xl mx-auto flex flex-col items-center mt-16">
        <span className="uppercase tracking-[0.3em] text-xs font-medium mb-6 block text-white/90">
          The New Collection
        </span>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight">
          Crafted to be <br />Treasured
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-xl mx-auto mb-10 font-light">
          Demi-fine gold jewelry for your everyday moments. Quiet luxury, thoughtfully designed.
        </p>
        <Link 
          to="/shop" 
          className="inline-block bg-primary text-primary-foreground border border-primary px-10 py-4 uppercase tracking-widest text-sm font-medium hover:bg-transparent hover:text-white hover:border-white transition-colors duration-300"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
};

export default Hero;
