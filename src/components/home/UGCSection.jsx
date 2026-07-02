import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ugcItems } from '@/data/products';

export default function UGCSection() {
  const scrollRef = useRef(null);

  return (
    <section className="py-16 md:py-24 bg-surface overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16 mb-10">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.25em] text-gold font-sans mb-3">
              @velmorajewelry
            </p>
            <h2 className="font-serif text-cream text-[clamp(1.5rem,2.5vw,2rem)]">
              Styled by You
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:block text-[11px] uppercase tracking-widest text-muted hover:text-gold font-sans transition-colors"
          >
            Follow Us
          </a>
        </div>
      </div>

      {/* Horizontal scroll row */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto px-6 md:px-10 lg:px-16 pb-4 scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {ugcItems.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="flex-shrink-0 relative w-[200px] md:w-[240px] aspect-[9/16] bg-elevated overflow-hidden group cursor-pointer"
          >
            <img
              data-strk-img-id={`ugc-${item.id}`}
              data-strk-img={`[ugc-caption-${item.id}] gold jewelry ear neck closeup`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
              className="w-full h-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
            />

            {/* Caption overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-4">
              <p
                id={`ugc-caption-${item.id}`}
                className="font-serif text-cream text-base md:text-lg italic leading-snug"
              >
                {item.caption}
              </p>
              <p className="text-cream/60 text-xs font-sans mt-1">{item.author}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
