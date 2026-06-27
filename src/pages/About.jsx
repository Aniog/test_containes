import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 px-6 md:px-12 min-h-screen bg-primary"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-24">
           <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-gold mb-6 block font-bold">Our Philosophy</span>
           <h1 className="font-serif text-5xl md:text-7xl tracking-wide mb-12">Treasures for the <br/> Modern Soul</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center mb-32">
           <div className="aspect-[3/4] bg-muted overflow-hidden rounded-sm">
              <img 
                data-strk-img-id="about-1"
                data-strk-img="jewelry craftsmanship macro detail gold"
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                className="w-full h-full object-cover"
                alt=""
              />
           </div>
           <div className="space-y-10">
              <h2 className="font-serif text-3xl md:text-4xl">The Velmora Vision</h2>
              <p className="font-sans text-sm text-black/70 leading-relaxed tracking-widest uppercase italic">
                VELMORA was born from a desire to create jewelry that feels personal, enduring, and effortlessly luxurious. We believe that fine jewelry shouldn't be reserved only for special occasions, but should be a part of your daily ritual.
              </p>
              <p className="font-sans text-sm text-black/70 leading-relaxed tracking-widest uppercase italic">
                Our pieces are inspired by the warm light of the Italian coast and the timeless silhouettes of classical antiquity, reimagined for the modern aesthetic.
              </p>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center flex-row-reverse">
           <div className="md:order-2 aspect-[3/4] bg-muted overflow-hidden rounded-sm">
              <img 
                data-strk-img-id="about-2"
                data-strk-img="sustainable jewelry packaging gift box gold"
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                className="w-full h-full object-cover"
                alt=""
              />
           </div>
           <div className="space-y-10 md:order-1">
              <h2 className="font-serif text-3xl md:text-4xl">Consciously Crafted</h2>
              <p className="font-sans text-sm text-black/70 leading-relaxed tracking-widest uppercase italic">
                We are committed to ethical production and sustainable practices. Each VELMORA piece is crafted using recycled 18k gold plating and sterling silver, ensuring that your treasure is as kind to the earth as it is beautiful on you.
              </p>
              <div className="pt-8 grid grid-cols-2 gap-8">
                 <div>
                    <h4 className="font-serif text-xl mb-2">18K Gold</h4>
                    <p className="font-sans text-[10px] uppercase tracking-widest text-black/40">Premium plating for longevity</p>
                 </div>
                 <div>
                    <h4 className="font-serif text-xl mb-2">Sustainably Packaged</h4>
                    <p className="font-sans text-[10px] uppercase tracking-widest text-black/40">100% Recyclable materials</p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
