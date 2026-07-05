import React from 'react';
import { motion } from 'framer-motion';

const BrandStory = () => {
  return (
    <section id="brand-story-section" className="py-24 px-6 md:px-12 bg-[#F7F4F0]">
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
        {/* Left: Product/Brand Image */}
        <div className="w-full md:w-1/2 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="aspect-[4/5] bg-secondary/10 overflow-hidden shadow-2xl"
          >
            <img 
              data-strk-img-id="brand-story-main"
              data-strk-img="[story-title] [story-desc]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Brand Heritage" 
              className="w-full h-full object-cover grayscale-[0.2]"
            />
          </motion.div>
          {/* Decorative Float */}
          <div className="absolute -bottom-10 -right-10 w-48 h-64 bg-background shadow-lg hidden lg:block p-4">
            <img 
              data-strk-img-id="brand-story-float"
              data-strk-img="[story-title]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Detail" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>

        {/* Right: Content */}
        <div className="w-full md:w-1/2 space-y-8">
          <span className="text-accent text-[10px] uppercase tracking-[0.5em] block">Our Story</span>
          <h2 id="story-title" className="font-serif text-4xl md:text-6xl tracking-wide leading-tight">
            Quiet <span className="italic">Luxury</span>, <br /> Consciously Crafted
          </h2>
          <div id="story-desc" className="space-y-6 text-muted text-sm md:text-base leading-relaxed max-w-lg">
            <p>
              Founded on the belief that jewelry should be as enduring as the moments it celebrates, Velmora blends timeless craftsmanship with modern accessibility.
            </p>
            <p>
              Each piece is thoughtfully designed in our studio and crafted using recycled 18K gold plating and ethically sourced stones. We skip the traditional markups to bring you heirloom quality without the luxury price tag.
            </p>
          </div>
          <button className="text-[10px] uppercase tracking-extrawide border-b border-primary/20 pb-2 hover:border-primary transition-all duration-300">
            Read Our Manifesto
          </button>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
