import React from 'react';
import { motion } from 'framer-motion';
import StarRating from '@/components/StarRating';

const reviews = [
  {
    name: 'Sarah J.',
    initials: 'SJ',
    rating: 5,
    text: 'The quality is unreal for this price point. I wear my Golden Sphere Huggies every single day and they still look brand new after 6 months.',
  },
  {
    name: 'Emma K.',
    initials: 'EK',
    rating: 5,
    text: 'Bought the Royal Heirloom Set as a birthday gift for my sister. The packaging alone made her cry. Absolutely stunning from unboxing to wearing.',
  },
  {
    name: 'Mia R.',
    initials: 'MR',
    rating: 5,
    text: 'Finally found jewelry that does not irritate my sensitive skin. The Amber Lace Earrings are lightweight, elegant, and get compliments everywhere I go.',
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[var(--cream)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sans text-xs uppercase tracking-[0.3em] text-[var(--gold)] mb-3"
          >
            Reviews
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl md:text-4xl text-[var(--charcoal)]"
          >
            What Our Customers Say
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[var(--warm-white)] p-8 border border-[var(--cream-dark)]"
            >
              <StarRating rating={review.rating} size={14} />
              <p className="mt-5 text-[var(--charcoal)]/70 leading-relaxed text-sm">
                "{review.text}"
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[var(--charcoal)] text-white flex items-center justify-center text-xs font-medium">
                  {review.initials}
                </div>
                <span className="font-sans text-sm font-medium text-[var(--charcoal)]">
                  {review.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
