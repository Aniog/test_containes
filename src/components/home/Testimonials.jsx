import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-velmora-sand">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs tracking-ultra uppercase text-velmora-gold font-medium mb-3">
            Love Notes
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-espresso">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-velmora-cream p-6 md:p-8 border border-velmora-warm/30"
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-velmora-gold text-velmora-gold" />
                ))}
              </div>
              <p className="font-serif text-base md:text-lg text-velmora-espresso leading-relaxed mb-5 italic">
                "{t.text}"
              </p>
              <p className="text-xs font-medium tracking-widest uppercase text-velmora-brown">
                {t.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
