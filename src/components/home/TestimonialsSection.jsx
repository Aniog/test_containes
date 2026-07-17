import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Sarah L.',
    text: 'The quality is incredible for the price. I wear my Golden Sphere Huggies every single day and they still look brand new after 6 months.',
    rating: 5,
  },
  {
    name: 'Maya T.',
    text: 'Bought the Royal Heirloom Set as a birthday gift for my sister. The packaging was beautiful and she absolutely loved it. Will order again!',
    rating: 5,
  },
  {
    name: 'Emily R.',
    text: 'Finally found demi-fine jewelry that does not irritate my sensitive skin. The Amber Lace Earrings are stunning and so comfortable.',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-velmora">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-velmora-gold text-xs tracking-ultra uppercase mb-3">Reviews</p>
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-base">Loved by Many</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-velmora-surfaceAlt p-8 md:p-10 flex flex-col"
            >
              <div className="flex gap-1 mb-5">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-velmora-gold text-velmora-gold" />
                ))}
              </div>
              <p className="text-velmora-base text-sm leading-relaxed flex-1">
                &ldquo;{review.text}&rdquo;
              </p>
              <p className="text-xs tracking-widest uppercase text-velmora-stone mt-6">
                {review.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
