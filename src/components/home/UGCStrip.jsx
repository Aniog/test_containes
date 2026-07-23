import { useRef } from 'react';

const ugcItems = [
  { label: 'Layered & Loved', imgId: 'ugc-layered-c1d2e3' },
  { label: 'Golden Hour Glow', imgId: 'ugc-glow-f4g5h6' },
  { label: 'Everyday Elegance', imgId: 'ugc-elegance-i7j8k9' },
  { label: 'Stacked Huggies', imgId: 'ugc-stacked-l0m1n2' },
  { label: 'Neckline Detail', imgId: 'ugc-neckline-o3p4q5' },
  { label: 'Wrist Party', imgId: 'ugc-wrist-r6s7t8' },
];

export default function UGCStrip() {
  const scrollRef = useRef(null);

  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="font-serif text-2xl md:text-3xl text-center mb-2 text-[#1A1A1A] tracking-wide">
          Worn &amp; Loved
        </h2>
        <p className="text-sm text-[#6B6560] text-center mb-10 md:mb-14 font-light">
          How the Velmora community styles their favorites
        </p>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto px-6 md:px-10 lg:px-16 pb-4 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {ugcItems.map((item) => (
            <div
              key={item.imgId}
              className="flex-shrink-0 w-[160px] md:w-[200px] snap-start"
            >
              <div className="relative aspect-[9/16] overflow-hidden bg-ivory-alt">
                <img
                  alt={item.label}
                  data-strk-img-id={`ugc-${item.imgId}`}
                  data-strk-img={`[ugc-label-${item.imgId}]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <p
                  id={`ugc-label-${item.imgId}`}
                  className="absolute bottom-3 left-3 right-3 text-white text-xs font-serif italic tracking-wide"
                >
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
