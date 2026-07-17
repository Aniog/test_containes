import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const reviews = [
  { name: 'Elena R.', text: 'The Golden Sphere Huggies are my new everyday staple. The quality is incredible for the price point.' },
  { name: 'Sarah K.', text: "Absolutely stunning packaging. It felt like receiving a gift from a high-end boutique. I'll be back for more." },
  { name: 'Maya L.', text: 'Velmora is my go-to for gifts now. Every piece feels intentional and timeless.' }
];

const Testimonials = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-velmora-ivory border-t border-velmora-stone">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 justify-between">
        {reviews.map((rev, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="flex-1 text-center md:text-left"
          >
            <div className="flex justify-center md:justify-start gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-velmora-gold text-velmora-gold" />
              ))}
            </div>
            <p className="font-serif text-xl italic mb-6 text-velmora-charcoal/80">"{rev.text}"</p>
            <p className="text-[10px] uppercase tracking-widest font-bold opacity-60">— {rev.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
