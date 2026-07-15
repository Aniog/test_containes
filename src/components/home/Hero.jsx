import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1920&h=1080&fit=crop"
          alt="Velmora Fine Jewelry"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <h1 
          className="font-serif text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight"
          style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300 }}
        >
          Crafted to be<br />Treasured
        </h1>
        <p className="text-lg md:text-xl mb-10 opacity-90 font-light tracking-wide">
          Timeless pieces for life's most precious moments
        </p>
        <Link
          to="/shop"
          className="inline-block bg-transparent border-2 border-white text-white px-10 py-4 text-sm uppercase tracking-wider hover:bg-white hover:text-charcoal transition-all duration-300"
        >
          Shop the Collection
          <ArrowRight className="inline-block ml-2" size={18} />
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-px h-12 bg-white/50" />
      </div>
    </section>
  );
};

export default Hero;
