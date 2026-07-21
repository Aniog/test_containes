import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#F9F7F2]">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0 bg-[#E5E2DA]"
        data-strk-bg-id="hero-bg-velmora"
        data-strk-bg="[hero-headline] [hero-brand] jewelry model luxury gold"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      >
        <div className="absolute inset-0 bg-black/20" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          id="hero-brand"
          className="text-sm uppercase tracking-[0.4em] mb-4 font-sans font-extralight"
        >
          Velmora Fine Jewelry
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          id="hero-headline"
          className="text-5xl md:text-7xl lg:text-8xl font-serif mb-10 leading-tight"
        >
          Crafted to be <br className="hidden md:block" /> Treasured
        </motion.h1>
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, delay: 0.6 }}
        >
          <Link 
            to="/shop" 
            className="inline-block bg-[#A68A56] hover:bg-[#8D7446] text-white px-10 py-4 text-xs uppercase tracking-[0.3em] transition-all duration-300 shadow-xl shadow-black/10"
          >
            Shop the Collection
          </Link>
        </motion.div>
      </div>

      {/* Decorative scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[1px] h-12 bg-white/30 overflow-hidden">
        <motion.div 
          animate={{ y: [0, 48, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-full h-1/2 bg-white"
        />
      </div>
    </section>
  );
};

export default Hero;
