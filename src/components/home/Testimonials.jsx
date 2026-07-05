import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const reviews = [
    { name: 'Sarah M.', text: 'The quality surpassed my expectations. The Huggies are my daily staple now—they haven’t tarnished after months of wear.' },
    { name: 'Emma L.', text: 'Beautifully packaged and even more stunning in person. It made the perfect gift for my sister’s 30th birthday.' },
    { name: 'Julianne R.', text: 'Velmora has that high-end feel without the heavy price tag. I love the minimalist aesthetic of the Aura collection.' },
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-background border-y border-border/50">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="text-center space-y-6 flex flex-col items-center"
            >
              <div className="flex space-x-1 text-accent">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="font-serif text-lg tracking-wide leading-relaxed italic text-primary/80">
                "{review.text}"
              </p>
              <span className="text-[10px] uppercase tracking-extrawide text-muted border-t border-border pt-4 px-8">
                {review.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
