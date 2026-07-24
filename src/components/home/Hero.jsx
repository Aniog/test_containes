import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-[#E5E1DA]"
        data-strk-bg-id="hero-bg-992211"
        data-strk-bg="[hero-subtitle] [hero-title] jewelry model lifestyle"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      >
        <div className="absolute inset-0 bg-black/30 lg:bg-black/20" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >
          <h2 id="hero-subtitle" className="font-sans uppercase tracking-[0.4em] text-xs mb-6 opacity-90">
            Timeless Elegance
          </h2>
          <h1 id="hero-title" className="font-serif text-5xl md:text-7xl lg:text-8xl mb-10 leading-tight">
            Crafted to be <br /> <span className="italic font-serif">Treasured</span>
          </h1>
          <Link
            to="/shop"
            className="inline-block bg-[#B69750] hover:bg-[#A38144] text-white px-12 py-4 uppercase text-xs tracking-[0.2em] font-sans font-bold transition-all duration-300 transform hover:-translate-y-1 shadow-xl"
          >
            Shop the Collection
          </Link>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <div className="w-[1px] h-12 bg-white" />
      </div>
    </section>
  );
};

export default Hero;
EOF > src/components/home/Hero.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-[#E5E1DA]"
        data-strk-bg-id="hero-bg-992211"
        data-strk-bg="[hero-subtitle] [hero-title] jewelry model lifestyle"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      >
        <div className="absolute inset-0 bg-black/30 lg:bg-black/20" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >
          <h2 id="hero-subtitle" className="font-sans uppercase tracking-[0.4em] text-xs mb-6 opacity-90">
            Timeless Elegance
          </h2>
          <h1 id="hero-title" className="font-serif text-5xl md:text-7xl lg:text-8xl mb-10 leading-tight">
            Crafted to be <br /> <span className="italic font-serif">Treasured</span>
          </h1>
          <Link
            to="/shop"
            className="inline-block bg-[#B69750] hover:bg-[#A38144] text-white px-12 py-4 uppercase text-xs tracking-[0.2em] font-sans font-bold transition-all duration-300 transform hover:-translate-y-1 shadow-xl"
          >
            Shop the Collection
          </Link>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <div className="w-[1px] h-12 bg-white" />
      </div>
    </section>
  );
};

export default Hero;
