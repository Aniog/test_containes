import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  return (
    <section id="story" className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="aspect-[4/5] bg-sand relative overflow-hidden"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xs text-stone uppercase tracking-widest">Our Atelier</span>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="md:py-8"
          >
            <p className="text-warm-gold text-xs tracking-[0.2em] uppercase font-medium mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal leading-[1.15] mb-6">
              Jewelry Made to<br />Last a Lifetime
            </h2>
            <p className="text-stone leading-relaxed mb-4">
              Velmora was born from a simple belief: fine jewelry should not be reserved for special occasions. Every piece in our collection is designed to be worn daily, cherished deeply, and passed down gently.
            </p>
            <p className="text-stone leading-relaxed mb-8">
              We work with master artisans who have perfected the art of 18K gold plating over decades. Each design begins as a sketch in our studio and is refined through countless iterations until it feels exactly right on the body.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-charcoal text-sm font-medium tracking-wide border-b border-charcoal pb-1 hover:text-warm-gold hover:border-warm-gold transition-colors"
            >
              Discover Our Collection
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
