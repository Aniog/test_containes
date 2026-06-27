import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&q=80"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl mb-6 leading-tight">
          Crafted to be<br />
          <em className="font-light italic">Treasured</em>
        </h1>
        <p className="text-lg md:text-xl mb-10 font-light tracking-wide max-w-2xl mx-auto">
          Demi-fine jewelry designed for the modern woman.<br />
          Timeless pieces that celebrate your unique story.
        </p>
        <Link
          to="/shop"
          className="btn-premium bg-transparent border-2 border-white text-white hover:bg-white hover:text-velmora-black inline-block"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-px h-16 bg-white bg-opacity-50" />
      </div>
    </section>
  );
};

export default Hero;
