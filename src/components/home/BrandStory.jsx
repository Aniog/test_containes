import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function BrandStory() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-white border-t border-hairline">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="aspect-[4/5] overflow-hidden"
          >
            <img
              src="https://image.pollinations.ai/prompt/jewelry%20designer%20hands%20crafting%20gold%20earrings%20workbench%20warm%20light%20editorial?width=800&height=1000&nologo=true"
              alt="Crafting Velmora jewelry"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p className="text-xs uppercase tracking-widest text-gold font-medium mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl mb-6 leading-tight">
              Designed with Intention, Worn with Confidence
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Velmora was born from a belief that fine jewelry should feel accessible —
              not just in price, but in wearability. Every piece is designed in-house
              and crafted from 18K gold-plated brass with a focus on hypoallergenic
              finishes that last.
            </p>
            <p className="text-muted leading-relaxed mb-8">
              We create for the woman who buys herself flowers, who invests in pieces
              that outlast trends, and who believes that quiet luxury speaks louder than
              logos ever could.
            </p>
            <Link
              to="/"
              className="inline-block border-b border-base pb-1 text-xs uppercase tracking-widest font-medium hover:text-gold hover:border-gold transition-colors duration-300"
            >
              Read Our Story
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
