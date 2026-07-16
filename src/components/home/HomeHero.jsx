import React from 'react';
import { Link } from 'react-router-dom';

const HomeHero = () => {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden bg-stone-900">
      <div 
        className="absolute inset-0 z-0 opacity-80"
        data-strk-bg-id="home-hero-bg"
        data-strk-bg="[hero-subhead] [hero-headline] warm lit close-up of gold jewelry on model"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 z-0 bg-black/30" />
      
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto flex flex-col items-center">
        <h1 
          id="hero-headline"
          className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 tracking-wide drop-shadow-md"
        >
          Crafted to be Treasured
        </h1>
        <p 
          id="hero-subhead"
          className="text-lg md:text-xl text-stone-100 mb-10 max-w-xl mx-auto font-light drop-shadow-sm"
        >
          Discover demi-fine gold jewelry designed for the modern romantic. Quiet luxury you can wear every day.
        </p>
        <Link to="/collections/all" className="btn-primary hover:bg-gold-500 hover:text-white border-2 border-transparent bg-gold-600 text-white w-fit">
          Shop the Collection
        </Link>
      </div>
    </section>
  );
};

export default HomeHero;