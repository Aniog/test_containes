import { motion } from 'framer-motion';
import PageTransition from '@/components/layout/PageTransition';
import StoriesGrid from '@/components/stories/StoriesGrid';

export default function Stories() {
  return (
    <PageTransition>
      {/* Header */}
      <div className="pt-32 pb-16 px-6 md:px-12 bg-[#F5EDE3]">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="section-label mb-4"
          >
            Editorial Series
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl text-[#2C2C2C] leading-tight"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Global Stories
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 text-[#5A5A5A] max-w-xl leading-relaxed text-lg"
          >
            Four chapters. Four continents. Four communities whose lives are
            inseparable from the ecosystems they inhabit.
          </motion.p>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="mt-10 h-px bg-[#D4B896] origin-left"
          />
        </div>
      </div>

      <StoriesGrid />
    </PageTransition>
  );
}
