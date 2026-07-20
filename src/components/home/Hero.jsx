import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1600&q=80')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />

      <div className="relative z-10 section-container text-center text-white">
        <p className="eyebrow text-white/80">New Collection</p>
        <h1 className="mt-4 font-serif text-4xl md:text-6xl lg:text-7xl font-medium tracking-wide leading-tight">
          Crafted to be Treasured
        </h1>
        <p className="mt-4 md:mt-6 max-w-xl mx-auto text-sm md:text-base text-white/85 leading-relaxed">
          Demi-fine jewelry in warm 18K gold plating, designed for quiet luxury and everyday elegance.
        </p>
        <div className="mt-8 md:mt-10">
          <Link to="/shop" className="btn-primary">
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
