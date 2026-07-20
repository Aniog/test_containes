import { useRef } from 'react';
import { ugcContent } from '@/data/products';

export default function UGCSection() {
  const scrollRef = useRef(null);

  return (
    <section className="py-16 md:py-24 bg-cream-dark overflow-hidden">
      <div className="container-main mb-8">
        <h2 className="font-serif text-3xl md:text-h2 text-charcoal text-center">As Seen On You</h2>
      </div>

      {/* Horizontal Scroll Container */}
      <div 
        ref={scrollRef}
        className="flex gap-4 md:gap-6 overflow-x-auto pb-4 px-4 md:px-8 scrollbar-hide"
        style={{ 
          scrollBehavior: 'smooth',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        {ugcContent.map((item) => (
          <div 
            key={item.id}
            className="flex-shrink-0 w-40 md:w-56 relative group cursor-pointer"
          >
            <div className="aspect-[9/16] bg-cream overflow-hidden">
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <p className="absolute bottom-4 left-4 right-4 font-serif text-cream text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {item.caption}
            </p>
          </div>
        ))}
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}