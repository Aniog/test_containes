import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const reviews = [
    {
      name: "Sophia L.",
      text: "The quality is simply unmatched. My Golden Sphere Huggies haven't left my ears in weeks, and the luster is still as brilliant as day one.",
      rating: 5,
    },
    {
      name: "Isabella R.",
      text: "Truly elegant packaging and fast shipping. I bought the Royal Heirloom Set for my sister, but I might just keep it for myself!",
      rating: 5,
    },
    {
      name: "Elena M.",
      text: "Finding jewelry that doesn't irritate my sensitive skin is tough. Velmora's pieces are genuinely hypoallergenic and so lightweight.",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-white border-y border-velmora-surface">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-serif italic text-center mb-16">Notes from our community</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reviews.map((review, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="flex flex-col items-center text-center space-y-6"
            >
              <div className="flex text-velmora-accent">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <p className="font-serif italic text-lg leading-relaxed text-velmora-primary/80">
                "{review.text}"
              </p>
              <div className="flex flex-col items-center">
                 <div className="w-8 h-[1px] bg-velmora-surface mb-4" />
                 <span className="uppercase tracking-[0.2em] text-[10px] font-bold text-velmora-muted">
                    {review.name}
                 </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
