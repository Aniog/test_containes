import { motion } from 'framer-motion';
import StarRating from '@/components/ui/StarRating';

const reviews = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'The quality exceeded my expectations. I wear my Golden Sphere Huggies every single day and they still look brand new after 6 months. Absolutely obsessed.',
  },
  {
    id: 2,
    name: 'Emily R.',
    rating: 5,
    text: 'Bought the Royal Heirloom Set as a birthday gift for my sister. The packaging alone made her cry. The jewelry is stunning — delicate but substantial.',
  },
  {
    id: 3,
    name: 'Jessica T.',
    rating: 5,
    text: 'Finally found gold jewelry that does not irritate my sensitive ears. These are my go-to earrings for work and weekends. Worth every penny.',
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-warm-gold text-xs tracking-[0.2em] uppercase font-medium mb-3">
            Reviews
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal">
            Loved by Thousands
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white p-8 md:p-10 border border-sand"
            >
              <StarRating rating={review.rating} size={14} />
              <p className="mt-5 text-charcoal text-sm leading-relaxed italic">
                "{review.text}"
              </p>
              <p className="mt-6 text-xs text-stone tracking-wide uppercase">
                {review.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
