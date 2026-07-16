import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ugcItems } from '@/lib/products';

export default function UGCCarousel() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const amount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-charcoal overflow-hidden">
      <div className="container-wide section-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-8 lg:mb-12"
        >
          <div>
            <p className="font-sans text-xs tracking-mega-wide uppercase text-gold-light mb-3">
              @VelmoraJewelry
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl text-white">
              Styled by You
            </h2>
          </div>
          <div className="hidden sm:flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center
                       text-white/60 hover:border-gold hover:text-gold transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center
                       text-white/60 hover:border-gold hover:text-gold transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Scrollable row */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto no-scrollbar pb-4 -mx-4 px-4 snap-x snap-mandatory"
        >
          {ugcItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex-shrink-0 snap-start"
            >
              <div className="relative w-[200px] sm:w-[240px] aspect-[9/16] rounded-lg overflow-hidden group">
                <img
                  data-strk-img-id={item.imageId}
                  data-strk-img={`woman wearing gold jewelry ${item.caption} instagram reel`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'%3E%3C/svg%3E"
                  alt={item.caption}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Caption overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-serif text-lg text-white italic leading-tight">
                    {item.caption}
                  </p>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
