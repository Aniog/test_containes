import { useRef } from 'react';

const ugcItems = [
  { id: 'ugc-1', caption: 'Golden hour glow', imgQuery: 'gold earrings on ear close up warm natural light portrait woman', imgId: 'ugc-img-1-d4a2e1' },
  { id: 'ugc-2', caption: 'Stack and layer', imgQuery: 'layered gold necklaces on neck editorial minimalist style', imgId: 'ugc-img-2-b8f3c9' },
  { id: 'ugc-3', caption: 'Everyday elegance', imgQuery: 'gold huggie earrings woman profile soft light natural beauty', imgId: 'ugc-img-3-e5a7d2' },
  { id: 'ugc-4', caption: 'Details matter', imgQuery: 'crystal necklace close up on collarbone warm light luxury', imgId: 'ugc-img-4-c2f8b6' },
  { id: 'ugc-5', caption: 'Gift of gold', imgQuery: 'jewelry gift box opened gold earrings luxury packaging', imgId: 'ugc-img-5-a9e1d4' },
  { id: 'ugc-6', caption: 'Self-love sparkle', imgQuery: 'woman wearing gold ear cuff smiling soft bokeh warm light', imgId: 'ugc-img-6-f3c5a8' },
];

export default function UGCReel() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      const amount = 260;
      scrollRef.current.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 sm:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <div className="text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-velmora-charcoal tracking-wide">
            As Seen On You
          </h2>
          <div className="w-16 h-px bg-velmora-gold mx-auto mt-4 mb-3" />
          <p className="text-sm text-velmora-taupe tracking-wider">#VelmoraStyle</p>
        </div>
      </div>

      <div className="relative">
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto px-4 sm:px-8 pb-4 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="relative flex-shrink-0 w-48 sm:w-56 aspect-[9/16] rounded-lg overflow-hidden snap-start group"
            >
              <img
                data-strk-img-id={item.imgId}
                data-strk-img={item.imgQuery}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 font-serif text-white text-lg italic leading-snug">
                {item.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
