import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ugcItems } from '@/data/products';

export default function ReelStrip() {
  const scrollRef = useRef(null);

  return (
    <section className="py-12 md:py-16 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-8 mb-6 flex items-end justify-between">
        <div>
          <p className="text-xs tracking-ultra uppercase text-velmora-gold font-medium mb-2">
            Styled by You
          </p>
          <h2 className="font-serif text-2xl md:text-3xl text-velmora-espresso">
            #VelmoraWomen
          </h2>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-3 md:gap-4 overflow-x-auto px-5 md:px-8 pb-4 scrollbar-hide snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {ugcItems.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.06 }}
            className="relative shrink-0 w-[160px] md:w-[200px] aspect-[9/16] rounded overflow-hidden snap-start group"
          >
            <img
              src={item.image}
              alt={item.caption}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <p className="absolute bottom-3 left-3 right-3 font-serif text-sm text-white italic leading-snug">
              {item.caption}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
