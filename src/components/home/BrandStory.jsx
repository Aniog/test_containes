import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="py-16 lg:py-24 bg-cream">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative aspect-[4/5] rounded-sm overflow-hidden"
          >
            <img
              data-strk-img-id="brand-story-main"
              data-strk-img="artisan crafting gold jewelry workshop warm lighting hands detail"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'%3E%3C/svg%3E"
              alt="Velmora artisan crafting gold jewelry"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Decorative border */}
            <div className="absolute inset-4 border border-gold/20 rounded-sm pointer-events-none" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:pl-8"
          >
            <p className="section-subtitle mb-4">Our Story</p>
            <h2 className="font-serif text-3xl lg:text-4xl text-charcoal mb-6 leading-snug">
              Jewelry That Feels Like{' '}
              <span className="italic text-gold-dark">You</span>
            </h2>
            <div className="w-12 h-px bg-gold mb-6" />
            <p className="text-sm text-slate leading-relaxed mb-4">
              Velmora was born from a simple belief: luxury should be lived in, not locked away.
              We create demi-fine pieces that bridge the gap between costume jewelry and fine jewelry
              — beautiful enough to treasure, accessible enough to wear every day.
            </p>
            <p className="text-sm text-slate leading-relaxed mb-8">
              Every piece is crafted with 18K gold plating over surgical-grade materials,
              designed to be hypoallergenic and tarnish-resistant. Because the best jewelry
              is the kind you never have to take off.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 font-sans text-sm tracking-ultra-wide uppercase text-gold hover:text-gold-dark transition-colors group"
            >
              Learn More
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
