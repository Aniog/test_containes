import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/lib/products';

export default function Testimonials() {
  return (
    <section className="py-16 lg:py-24 bg-ivory">
      <div className="container-wide section-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <p className="section-subtitle mb-3">Testimonials</p>
          <h2 className="section-title">Loved by Thousands</h2>
          <div className="w-16 h-px bg-gold mx-auto mt-4" />
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white p-6 lg:p-8 rounded-sm shadow-soft"
            >
              <Quote className="w-8 h-8 text-gold/30 mb-4" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating
                        ? 'fill-gold text-gold'
                        : 'text-champagne'
                    }`}
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-slate leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between border-t border-champagne pt-4">
                <div>
                  <p className="font-sans text-sm font-medium text-charcoal">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-warm-gray">
                    Verified Buyer
                  </p>
                </div>
                <p className="text-xs text-gold font-sans tracking-wider">
                  {testimonial.product}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
