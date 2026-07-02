import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="py-20 md:py-28 bg-surface">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative aspect-[4/5] overflow-hidden"
          >
            <img
              data-strk-img-id="brand-story-img"
              data-strk-img="[brand-story-title] [brand-story-text] gold jewelry making craftsmanship artisan"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="md:pl-6"
          >
            <p className="text-[11px] uppercase tracking-[0.25em] text-gold font-sans mb-4">
              Our Philosophy
            </p>
            <h2
              id="brand-story-title"
              className="font-serif text-cream text-[clamp(1.75rem,3vw,2.5rem)] mb-6"
            >
              Designed with Intention, Worn with Confidence
            </h2>
            <p
              id="brand-story-text"
              className="text-muted font-sans text-sm leading-[1.8] mb-6"
            >
              Velmora was born from a belief that fine jewelry should not be reserved for special occasions alone. 
              Every piece in our collection is designed to feel as at home at a morning meeting as it does at an evening gala — 
              versatile, enduring, and undeniably yours.
            </p>
            <p className="text-muted font-sans text-sm leading-[1.8] mb-8">
              We work with skilled artisans who share our commitment to quality, using 18K gold plating 
              and hypoallergenic materials that stand the test of time. Each design is refined down to 
              its finest detail, because we believe true luxury lies in the details you notice every day.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-cream hover:text-gold font-sans text-[11px] uppercase tracking-widest transition-colors duration-300 group"
            >
              Our Story
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
