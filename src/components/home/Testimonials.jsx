import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const REVIEWS = [
  {
    name: 'Sarah M.',
    text: 'The quality of the 18K plating is incredible. I wear my huggies every single day and they still look brand new.',
    stars: 5,
  },
  {
    name: 'Jessica T.',
    text: 'Beautifully packaged and even more stunning in person. This has become my go-to for gifting friends.',
    stars: 5,
  },
  {
    name: 'Amanda R.',
    text: 'Simple, elegant, and timeless. I love that I can layer these pieces so easily. Worth every penny.',
    stars: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif mb-4 uppercase tracking-widest">Kind Words</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {REVIEWS.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col items-center text-center space-y-6 p-8 bg-background shadow-sm border border-border/50"
            >
              <div className="flex space-x-1">
                {[...Array(review.stars)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-accent text-accent" />
                ))}
              </div>
              
              <blockquote className="font-serif italic text-lg text-foreground/80 leading-relaxed flex-grow">
                "{review.text}"
              </blockquote>
              
              <div className="pt-4 border-t border-border w-12 text-center">
                <cite className="not-italic text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground whitespace-nowrap">
                  {review.name}
                </cite>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
