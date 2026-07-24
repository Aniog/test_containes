import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <p className="text-caption uppercase tracking-[0.25em] text-gold-500 mb-3">
            Kind Words
          </p>
          <h2 className="heading-section text-charcoal-800">What Our Customers Say</h2>
          <div className="divider mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Quote className="w-8 h-8 text-gold-300 mx-auto mb-5" strokeWidth={1} />
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    className={`w-4 h-4 ${
                      j < item.rating
                        ? 'text-gold-500 fill-gold-500'
                        : 'text-charcoal-200'
                    }`}
                  />
                ))}
              </div>
              <p className="text-body text-charcoal-600 mb-5 leading-relaxed italic">
                &ldquo;{item.text}&rdquo;
              </p>
              <p className="product-name text-charcoal-700 text-[11px]">
                {item.name}
              </p>
              <p className="text-body-sm text-charcoal-400 mt-1">
                {item.product}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
