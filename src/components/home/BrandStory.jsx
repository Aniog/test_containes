import { Link } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { motion } from 'framer-motion';

const BrandStory = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
        {/* Image Left */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 aspect-square md:aspect-[4/5] overflow-hidden bg-[#E5E2DA]"
        >
          <div 
            className="w-full h-full"
            data-strk-bg-id="story-image-velmora"
            data-strk-bg="[story-title] jewelry artisan gold"
            data-strk-bg-ratio="4x5"
            data-strk-bg-width="1000"
          />
        </motion.div>

        {/* Text Right */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 flex flex-col items-start"
        >
          <h2 id="story-title" className="text-4xl md:text-5xl font-serif mb-8 italic leading-tight">
            Created for <br /> Conscious Luxury
          </h2>
          <p className="text-lg text-[#555555] font-sans leading-relaxed mb-8">
            At Velmora, we believe that fine jewelry should be a daily ritual, not a distant dream. 
            Our collection is meticulously crafted with high-quality demi-fine materials, 
            designed to be worn, loved, and eventually passed down.
          </p>
          <p className="text-lg text-[#555555] font-sans leading-relaxed mb-12">
            Each piece is born from a desire for quiet luxury—jewelry that complements 
            your strength without shouting for attention.
          </p>
          <Link 
            to="/about" 
            className="text-xs uppercase tracking-[0.3em] font-sans border-b border-[#A68A56] pb-1 hover:text-[#A68A56] transition-colors"
          >
            Learn Our Story
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandStory;
