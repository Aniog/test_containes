import { useRef } from 'react';

const reels = [
  {
    id: 'reel-1',
    label: 'Everyday Gold',
    query: 'woman wearing delicate gold earrings warm tone',
    imgId: 'ugc-reel-gold-earrings-worn',
  },
  {
    id: 'reel-2',
    label: 'Stacked & Layered',
    query: 'gold ear stack multiple earrings close up',
    imgId: 'ugc-reel-ear-stack-close',
  },
  {
    id: 'reel-3',
    label: 'The Perfect Gift',
    query: 'gold jewelry gift box elegant unwrapping',
    imgId: 'ugc-reel-gift-unboxing',
  },
  {
    id: 'reel-4',
    label: 'Day to Night',
    query: 'woman gold necklace evening outfit elegant',
    imgId: 'ugc-reel-necklace-evening',
  },
  {
    id: 'reel-5',
    label: 'Minimal Moments',
    query: 'gold huggie earrings minimalist style flat lay',
    imgId: 'ugc-reel-huggie-minimal',
  },
  {
    id: 'reel-6',
    label: 'Golden Hour',
    query: 'gold jewelry warm sunset light glow',
    imgId: 'ugc-reel-golden-hour',
  },
];

export default function UGCReels() {
  const scrollRef = useRef(null);

  return (
    <section className="py-20 md:py-28 bg-velvet-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">As Seen On You</p>
          <h2 className="font-serif text-3xl md:text-5xl tracking-wider mb-4">
            STYLED BY YOU
          </h2>
          <div className="w-12 h-px bg-gold mx-auto" />
        </div>
      </div>

      {/* Horizontal scroll */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto px-6 pb-4 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {reels.map((reel) => (
          <div
            key={reel.id}
            className="flex-shrink-0 w-[180px] md:w-[220px] snap-start"
          >
            <div className="relative aspect-[9/16] bg-velvet-200 overflow-hidden group cursor-pointer">
              <img
                data-strk-img-id={reel.imgId}
                data-strk-img={`[ugc-${reel.id}-label]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={reel.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velvet-950/70 via-transparent to-transparent" />
              <p
                id={`ugc-${reel.id}-label`}
                className="absolute bottom-4 left-4 right-4 font-serif text-white text-lg italic leading-tight"
              >
                {reel.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}