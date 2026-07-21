import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { testimonials } from '@/data/products';
import FadeIn from '@/components/FadeIn';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-brand-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-10 md:mb-14">
            <h2 className="font-serif text-2xl md:text-3xl tracking-wide">What Our Customers Say</h2>
          </div>
        </FadeIn>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.id}
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
              className="bg-paper p-6 md:p-8 rounded-sm border border-ink-100"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-brand-700 text-brand-700" />
                ))}
              </div>
              <p className="text-sm text-ink-700 leading-relaxed">"{t.text}"</p>
              <p className="mt-4 text-xs font-medium tracking-wide text-ink-500 uppercase">
                {t.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
