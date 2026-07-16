import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { motion } from 'framer-motion';

const BrandStory = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-[#F9F8F6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full md:w-1/2 aspect-[4/5] bg-muted relative"
          >
            <img
              alt="Our Story"
              data-strk-img-id="story-main-img"
              data-strk-img="[story-heading] gold jewelry workshop studio aesthetic"
              data-strk-img-ratio="4x5"
              data-strk-img-width="1000"
              className="w-full h-full object-cover grayscale"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full md:w-1/2 space-y-8"
          >
            <h2 className="text-xs uppercase tracking-[0.3em] font-sans font-semibold text-accent mb-4">Our Philosophy</h2>
            <h3 id="story-heading" className="text-4xl md:text-5xl font-serif leading-tight">
              Quiet Luxury for the <br /> Everyday Moment.
            </h3>
            <div className="space-y-6 text-muted-foreground leading-relaxed font-sans">
              <p>
                Velmora was born from a desire to create demi-fine jewelry that doesn't just look premium, but feels essential. We believe that jewelry should be an extension of your persona — subtle, elegant, and timeless.
              </p>
              <p>
                Each piece in our collection is meticulously crafted with 18K gold plating over high-quality bases, ensuring durability and a radiant finish that lasts.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-block text-xs uppercase tracking-widest border-b border-black pb-1 hover:opacity-70 transition-opacity"
            >
              Our Story
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
