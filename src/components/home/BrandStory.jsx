import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function BrandStory() {
  return (
    <section className="bg-velmora-bg py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="aspect-[4/5] overflow-hidden bg-white">
              <img
                src="https://placehold.co/800x1000/1a1a1a/ffffff?text=Velmora+Atelier"
                alt="Velmora atelier"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:py-8"
          >
            <p className="text-xs font-medium tracking-[0.25em] uppercase text-velmora-accent mb-4">Our Story</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-velmora-dark leading-tight">
              Designed with Intention, Worn with Confidence
            </h2>
            <p className="mt-6 text-velmora-muted leading-relaxed">
              Velmora was born from a simple belief: fine jewelry should not be reserved for special occasions. 
              Every piece in our collection is designed in-house, crafted from premium 18K gold-plated materials, 
              and finished with obsessive attention to detail.
            </p>
            <p className="mt-4 text-velmora-muted leading-relaxed">
              We create demi-fine jewelry for women who want to feel polished every day — whether at a morning meeting, 
              a dinner date, or a quiet moment alone.
            </p>
            <div className="mt-8">
              <Link
                to="#"
                className="inline-block text-sm font-medium tracking-widest uppercase text-velmora-dark border-b border-velmora-dark pb-1 hover:text-velmora-accent hover:border-velmora-accent transition-colors"
              >
                Read Our Story
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
