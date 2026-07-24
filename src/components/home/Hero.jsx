import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative h-[92vh] min-h-[640px] w-full overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1600&q=80"
        alt="Gold jewelry editorial"
        className="absolute inset-0 h-full w-full object-cover"
        onError={(e) => {
          e.currentTarget.src = 'https://images.unsplash.com/photo-1515562141589-67f0d569b6c2?w=1600&q=80';
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-end px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <div className="max-w-2xl text-white">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
            Crafted to be Treasured
          </h1>
          <p className="mt-4 text-sm md:text-base text-white/80 max-w-lg leading-relaxed">
            Demi-fine gold jewelry designed for quiet luxury. Ethically made, beautifully finished, and made to be worn every day.
          </p>
          <Link
            to="/shop"
            className="mt-8 inline-flex items-center rounded-full bg-white px-7 py-3 text-sm font-medium text-gray-900 hover:bg-gold-50 transition-colors"
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
