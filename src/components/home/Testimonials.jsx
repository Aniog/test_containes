import { motion } from 'framer-motion'
import { testimonials } from '@/data/products'
import { StarRating } from '@/components/ui/StarRating'

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-velmora-cream">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl text-velmora-deep"
          >
            What Our Customers Say
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-velmora-ivory p-8 md:p-10 text-center"
            >
              <div className="flex justify-center mb-5">
                <StarRating rating={testimonial.rating} />
              </div>
              <p className="font-serif text-xl md:text-2xl text-velmora-deep italic leading-relaxed">
                "{testimonial.text}"
              </p>
              <p className="mt-6 text-xs uppercase tracking-widest-xl text-velmora-taupe font-medium">
                {testimonial.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
