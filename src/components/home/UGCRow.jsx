import { useRef } from 'react';

const ugcItems = [
  { id: 'ugc-1', caption: 'Morning glow', imgId: 'ugc-img-morning-glow-8a1b' },
  { id: 'ugc-2', caption: 'Stacked & styled', imgId: 'ugc-img-stacked-c3d2' },
  { id: 'ugc-3', caption: 'Golden hour', imgId: 'ugc-img-golden-hour-e5f4' },
  { id: 'ugc-4', caption: 'Everyday elegance', imgId: 'ugc-img-everyday-9g6h' },
  { id: 'ugc-5', caption: 'Date night', imgId: 'ugc-img-date-night-7i8j' },
  { id: 'ugc-6', caption: 'Weekend vibes', imgId: 'ugc-img-weekend-1k2l' },
];

export default function UGCRow() {
  const scrollRef = useRef(null);

  return (
    <section className="bg-velmora-surface py-20 md:py-28">
      <div className="mb-12 px-6 md:px-10 lg:px-16">
        <h2 className="section-title text-center">Styled by You</h2>
        <p className="section-subtitle text-center mt-3">
          Tag <span className="text-velmora-gold">@velmorajewelry</span> to be featured
        </p>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 md:gap-6 px-6 md:px-10 lg:px-16 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {ugcItems.map((item, i) => (
          <div
            key={item.id}
            className="shrink-0 w-[160px] md:w-[200px] lg:w-[220px] snap-start"
          >
            <div className="relative aspect-[9/16] bg-velmora-sand overflow-hidden group cursor-pointer">
              <img
                alt={item.caption}
                data-strk-img-id={item.imgId}
                data-strk-img={`[ugc-caption-${i}] [ugc-section-title]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-deep/60 via-transparent to-transparent" />
              <p
                id={`ugc-caption-${i}`}
                className="absolute bottom-3 left-3 right-3 font-serif text-white text-sm italic tracking-wide"
              >
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div id="ugc-section-title" className="hidden">Styled by You Velmora Jewelry</div>
    </section>
  );
}
