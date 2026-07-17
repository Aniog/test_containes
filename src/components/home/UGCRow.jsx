import { useEffect, useRef } from 'react';
// import { ImageHelper } from '@strikingly/sdk';
// import strkImgConfig from '@/strk-img-config.json';

const ugcItems = [
  { id: 'ugc-1', caption: 'Golden hour with my Velmora huggies ✨', name: '— Olivia R.' },
  { id: 'ugc-2', caption: 'Everyday elegance never looked so good', name: '— Sophia K.' },
  { id: 'ugc-3', caption: 'The perfect gift for someone special (or yourself)', name: '— Emma D.' },
  { id: 'ugc-4', caption: 'Stacked and styled for date night', name: '— Isabella M.' },
  { id: 'ugc-5', caption: 'New season, new favorites from Velmora', name: '— Charlotte W.' },
  { id: 'ugc-6', caption: 'These earrings go with literally everything', name: '— Ava L.' },
];

export default function UGCRow() {
  const containerRef = useRef(null);

  useEffect(() => {
    return // ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-espresso overflow-hidden">
      <div className="mb-12 section-padding">
        <p className="font-sans text-xs tracking-widest uppercase text-gold-light mb-4">
          As Seen On You
        </p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream">
          Styled by You
        </h2>
        <div className="w-12 h-px bg-gold mt-6" />
      </div>

      <div className="flex gap-4 md:gap-5 overflow-x-auto px-6 md:px-12 lg:px-20 pb-4 scrollbar-hide snap-x snap-mandatory">
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-[180px] md:w-[220px] snap-start group cursor-pointer"
          >
            <div className="relative aspect-[9/16] rounded-sm overflow-hidden bg-sand/20 mb-3">
              <img
                data-strk-img-id={item.id}
                data-strk-img={`woman wearing gold jewelry earrings neck ${item.caption}`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="440"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Customer style"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="font-serif text-sm text-cream italic leading-snug">
                  "{item.caption}"
                </p>
                <p className="text-xs text-cream/60 mt-1.5">{item.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
