import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        data-strk-bg-id="home-hero-bg-92a1c"
        data-strk-bg="[hero-title] [hero-desc]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      <div className="container mx-auto px-6 relative z-20 text-white pt-20">
        <div className="max-w-2xl">
          <h1 
            id="hero-title"
            className="text-5xl md:text-7xl lg:text-8xl font-serif mb-6 leading-tight animate-in fade-in slide-in-from-bottom-8 duration-1000"
          >
            Crafted to be <br /> Treasured
          </h1>
          <p 
            id="hero-desc"
            className="text-lg md:text-xl font-light mb-10 tracking-wide opacity-90 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300"
          >
            Demi-fine gold jewelry designed for your every day and your most memorable moments.
          </p>
          <div className="flex flex-wrap gap-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
            <Link to="/shop">
              <Button className="accent-button bg-white text-black hover:bg-white/90">
                Shop the Collection
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-[1px] h-12 bg-white/50" />
      </div>
    </section>
  );
};
