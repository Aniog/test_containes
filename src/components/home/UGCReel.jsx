import { useRef } from 'react';
import { ugcItems } from '@/data/products';
import { useStrkImages } from '@/hooks/useStrkImages';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const UGCReel = () => {
  const containerRef = useRef(null);
  const [revealRef, revealed] = useScrollReveal();
  useStrkImages(containerRef);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-brand-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={revealRef}
          className={`text-center mb-10 scroll-reveal animate-reveal-up ${revealed ? 'revealed' : ''}`}
        >
          <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-brand-charcoal">
            As Seen On You
          </h2>
          <div className="w-12 h-px bg-brand-gold mx-auto mt-4" />
        </div>
      </div>

      {/* Horizontal scroll */}
      <div className={`overflow-x-auto hide-scrollbar scroll-reveal animate-reveal-fade ${revealed ? 'revealed' : ''}`}>
        <div className="flex gap-4 px-4 sm:px-6 lg:px-8 pb-4" style={{ width: 'max-content' }}>
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="relative w-40 md:w-48 aspect-[9/16] flex-shrink-0 overflow-hidden rounded-sm group"
            >
              <img
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.titleId}]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Caption overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <p
                id={item.titleId}
                className="absolute bottom-4 left-4 right-4 font-serif text-sm text-white tracking-wide"
              >
                {item.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UGCReel;
