import { useRef } from 'react';
import { ugcContent } from '../../data/products';

export default function UGCSection() {
  const scrollRef = useRef(null);

  return (
    <section className="py-20 bg-velmora-charcoal overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="text-center">
          <span className="text-xs tracking-widest text-velmora-gold uppercase">Real Moments</span>
          <h2 className="mt-3 font-serif text-4xl text-velmora-cream">Styled by You</h2>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div 
        ref={scrollRef}
        className="flex gap-4 px-4 md:px-8 overflow-x-auto scrollbar-hide pb-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {ugcContent.map((item, index) => (
          <div 
            key={item.id}
            className="flex-shrink-0 w-40 md:w-48 relative group cursor-pointer"
          >
            {/* Image */}
            <div className="aspect-[9/16] overflow-hidden">
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-velmora-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Caption */}
            <div className="absolute bottom-4 left-4 right-4">
              <p className="font-serif text-sm text-velmora-cream italic opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll Hint */}
      <div className="flex justify-center mt-6">
        <p className="text-xs text-velmora-taupe">Scroll to explore</p>
      </div>
    </section>
  );
}