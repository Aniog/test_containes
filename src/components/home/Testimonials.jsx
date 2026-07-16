import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const reviews = [
    { name: "Sarah L.", text: "The weight and shine of the Golden Sphere Huggies are incredible. I wear them every single day.", rating: 5 },
    { name: "Emma R.", text: "Beautifully packaged and even more stunning in person. This is now my go-to for gifts.", rating: 5 },
    { name: "Jessica M.", text: "Perfect quality. I have sensitive skin and these haven't caused any irritation at all.", rating: 5 },
  ];

  return (
    <section className="py-24 bg-white px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase tracking-[0.3em] font-sans font-semibold text-muted-foreground mb-4">Reviews</h2>
          <h3 className="text-4xl font-serif">What our Clients Say</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center space-y-6"
            >
              <div className="flex justify-center space-x-1">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-lg font-serif italic text-primary leading-relaxed">
                "{review.text}"
              </p>
              <p className="text-[10px] uppercase tracking-[0.2em] font-semibold text-muted-foreground">
                — {review.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
