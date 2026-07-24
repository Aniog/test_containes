import { useRef } from 'react';

const ugcItems = [
  { caption: 'Everyday gold', bg: '#8a6c4f' },
  { caption: 'Stacked & styled', bg: '#6c5a3f' },
  { caption: 'Golden hour glow', bg: '#9a7c5f' },
  { caption: 'Layered looks', bg: '#7d624f' },
  { caption: 'Evening elegance', bg: '#8a745c' },
  { caption: 'Minimal moment', bg: '#9e846a' },
];

export default function UGCRow() {
  const scrollRef = useRef(null);

  return (
    <section className="py-16 md:py-24 bg-velvet-50">
      <div className="container-wide section-padding">
        <div className="text-center mb-10 md:mb-14">
          <p className="font-sans text-xs tracking-widest uppercase text-sand-500 mb-3">
            As Seen On You
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-velvet-800 font-light tracking-wide">
            Styled by Our Community
          </h2>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide px-6 md:px-12 lg:px-24"
      >
        {ugcItems.map((item, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[160px] md:w-[220px] aspect-[9/16] rounded-sm overflow-hidden relative group cursor-pointer"
            style={{ backgroundColor: item.bg }}
          >
            {/* Placeholder gradient */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(180deg, transparent 40%, rgba(28, 20, 16, 0.65) 100%)`,
              }}
            />
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
              <p className="font-serif text-white text-sm md:text-base italic tracking-wide">
                {item.caption}
              </p>
              <p className="font-sans text-[10px] md:text-xs text-white/60 mt-1">
                @velmorajewelry
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
