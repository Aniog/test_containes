import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const reels = [
  { id: 1, caption: 'Everyday gold essentials' },
  { id: 2, caption: 'Stacked & styled' },
  { id: 3, caption: 'Gift-worthy moments' },
  { id: 4, caption: 'Golden hour glow' },
  { id: 5, caption: 'Minimal, not boring' },
  { id: 6, caption: 'Dinner party ready' },
];

export default function ReelsSection() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    const amount = 280;
    scrollRef.current.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-10"
        >
          <div>
            <p className="text-warm-gold text-xs tracking-[0.2em] uppercase font-medium mb-3">
              @velmorajewelry
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal">
              Styled by You
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              className="p-2 border border-sand hover:border-charcoal transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft size={18} className="text-charcoal" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2 border border-sand hover:border-charcoal transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight size={18} className="text-charcoal" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Horizontal scroll */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-4 px-6 lg:px-10 scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {reels.map((reel, i) => (
          <motion.div
            key={reel.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="relative flex-shrink-0 w-[220px] md:w-[260px] aspect-[9/16] bg-charcoal overflow-hidden group cursor-pointer"
          >
            {/* Placeholder image area */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-charcoal/80" />

            {/* Caption overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="font-serif text-white text-sm italic leading-snug">
                {reel.caption}
              </p>
            </div>

            {/* Hover ring */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-warm-gold/50 transition-colors" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
