import { useRef } from 'react';

const ugcItems = [
  { id: 1, caption: 'Stacked & strolled', tag: '@emmawears' },
  { id: 2, caption: 'Golden hour glow', tag: '@sophiastyle' },
  { id: 3, caption: 'Date night detail', tag: '@clarabellee' },
  { id: 4, caption: 'Everyday elegance', tag: '@oliviarose' },
  { id: 5, caption: 'Warm tones', tag: '@isabellamuse' },
  { id: 6, caption: 'Minimal moments', tag: '@luciacurated' },
];

export default function UGCRow() {
  const scrollRef = useRef(null);

  return (
    <section className="py-20 lg:py-28 bg-warmwhite">
      <h2 className="font-serif text-3xl lg:text-4xl text-center mb-2 text-charcoal">
        Worn by You
      </h2>
      <p className="text-center text-stone text-sm mb-12 tracking-wide">
        Share your Velmora moments with #VelmoraFine
      </p>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto px-6 lg:px-12 pb-4 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-[180px] md:w-[200px] snap-start"
          >
            <div className="relative aspect-[9/16] bg-sand/20 overflow-hidden">
              <img
                data-strk-img-id={`ugc-${item.id}`}
                data-strk-img={`[ugc-caption-${item.id}] gold jewelry worn woman ear neck`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
                alt={item.caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p id={`ugc-caption-${item.id}`} className="font-serif italic text-white text-sm mb-1">
                  {item.caption}
                </p>
                <p className="text-cream/70 text-xs">{item.tag}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
