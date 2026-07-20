import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden -mt-16">
      {/* Background Image */}
      <div 
        data-strk-bg-id="hero-bg-98f2a"
        data-strk-bg="[hero-sub] [hero-title] luxury gold jewelry model close up"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
        className="absolute inset-0 z-0 scale-105"
      >
        <div className="absolute inset-0 bg-black/30 z-1" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span id="hero-sub" className="text-xs uppercase tracking-[0.4em] mb-6 block font-medium">Timeless Demi-Fine Jewelry</span>
          <h1 id="hero-title" className="text-5xl md:text-7xl lg:text-8xl font-serif mb-10 leading-tight">
            Crafted to be <br /> Treasured
          </h1>
          <Link to="/shop" className="premium-button border border-white bg-transparent hover:bg-white hover:text-primary px-10 py-4 inline-block transition-all duration-300">
            Shop the Collection
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 hidden md:block">
        <div className="w-[1px] h-20 bg-white/30 relative overflow-hidden">
          <motion.div 
            animate={{ top: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 w-full h-1/2 bg-white"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
