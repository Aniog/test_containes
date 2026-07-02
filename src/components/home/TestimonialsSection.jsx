import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-base">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="text-center mb-14">
          <p className="text-[11px] uppercase tracking-[0.25em] text-gold font-sans mb-3">
            Reviews
          </p>
          <h2 className="font-serif text-cream text-[clamp(1.75rem,3vw,2.5rem)]">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-surface border border-white/5 p-8 md:p-10"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, si) => (
                  <Star
                    key={si}
                    className={`w-3.5 h-3.5 ${
                      si < t.rating ? 'text-gold fill-gold' : 'text-white/10'
                    }`}
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-cream/90 font-sans text-sm leading-[1.8] mb-6">
                "{t.text}"
              </p>

              {/* Name */}
              <p className="text-muted font-sans text-xs uppercase tracking-widest">
                {t.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
