import React from 'react';
import { motion } from 'framer-motion';

const Collections = () => {
  const collections = [
    { title: "The Roman Dawn", desc: "Inspired by classical antiquity and soft morning light.", img: "gold jewelry classical statues aesthetic editorial" },
    { title: "Minima Gold", desc: "Simple statements for the understated life.", img: "minimalist gold jewelry daily wear flatlay" },
    { title: "Crystal Nectar", desc: "A celebration of color and light in demi-fine gold.", img: "colorful crystal jewelry editorial macro" }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 px-6 md:px-12 min-h-screen bg-white"
    >
      <div className="max-w-[1600px] mx-auto">
        <h1 className="font-serif text-5xl md:text-6xl tracking-wide mb-16 text-center">Our Collections</h1>
        
        <div className="space-y-24">
          {collections.map((col, idx) => (
            <div key={idx} className={`grid grid-cols-1 md:grid-cols-2 gap-16 items-center ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className={`aspect-video md:aspect-[4/3] bg-muted overflow-hidden rounded-sm ${idx % 2 !== 0 ? 'md:order-2' : ''}`}>
                <img 
                  data-strk-img-id={`collection-img-${idx}`}
                  data-strk-img={col.img}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="1200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                  className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                  alt={col.title}
                />
              </div>
              <div className="max-w-md mx-auto md:mx-0">
                <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-gold mb-6 block font-bold">Volume {idx + 1}</span>
                <h2 className="font-serif text-4xl md:text-5xl tracking-wide mb-8">{col.title}</h2>
                <p className="font-sans text-black/60 leading-relaxed mb-10 tracking-widest uppercase text-xs italic">
                  {col.desc}
                </p>
                <a 
                  href="/shop"
                  className="inline-block border border-black/10 px-12 py-4 uppercase tracking-widest text-xs hover:border-black transition-colors"
                >
                  Explore Collection
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Collections;
