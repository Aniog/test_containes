import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function BrandStorySection() {
  return (
    <section className="py-16 md:py-24 bg-velmora-surfaceAlt">
      <div className="container-velmora">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="relative aspect-[4/5] bg-velmora-warm overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-velmora-cream to-[#ddd5c8]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-velmora-gold/20" />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:py-8"
          >
            <p className="text-velmora-gold text-xs tracking-ultra uppercase mb-4">Our Story</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-velmora-base leading-tight">
              Designed for the
              <br />
              <span className="italic font-light">Modern Woman</span>
            </h2>
            <p className="text-velmora-stone mt-6 leading-relaxed max-w-md">
              Velmora was born from a belief that fine jewelry should feel accessible. Every piece is 
              18K gold-plated, hypoallergenic, and designed to be worn daily — from morning meetings 
              to midnight toasts. We craft for the woman who buys herself flowers, and the one who 
              deserves to be surprised.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-sm tracking-widest uppercase text-velmora-base hover:text-velmora-gold transition-colors group"
            >
              Our Story
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
