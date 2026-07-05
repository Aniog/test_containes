import React, { useRef } from 'react';

const ugcItems = [
  { id: 1, caption: 'Golden hour glow', query: 'woman wearing gold hoop earrings close-up portrait warm lighting' },
  { id: 2, caption: 'Stacked & styled', query: 'layered gold necklaces on neck collarbone editorial' },
  { id: 3, caption: 'Everyday elegance', query: 'gold huggie earrings on ear close-up warm tone' },
  { id: 4, caption: 'Gift-worthy', query: 'jewelry gift box gold necklace earrings velvet' },
  { id: 5, caption: 'Effortless chic', query: 'woman hands gold rings bracelet minimal styling' },
  { id: 6, caption: 'Shine bright', query: 'crystal jewelry sparkling close-up dark background' },
  { id: 7, caption: 'Morning ritual', query: 'woman putting on gold earrings mirror reflection' },
];

export default function UGCReelSection() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 260, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-[#2C2622]">
      <div className="max-w-7xl mx-auto px-5 md:px-10 mb-8">
        <div className="flex items-end justify-between">
          <div>
            <h2
              className="text-2xl md:text-3xl text-[#FAF7F2] mb-2"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Styled by You
            </h2>
            <p className="text-sm text-[#B8ADA0]">Tag @velmora to be featured</p>
          </div>
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scroll(-1)}
              className="w-10 h-10 rounded-full border border-[#4A3F37] text-[#B8ADA0] hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors flex items-center justify-center"
              aria-label="Scroll left"
            >
              &#8592;
            </button>
            <button
              onClick={() => scroll(1)}
              className="w-10 h-10 rounded-full border border-[#4A3F37] text-[#B8ADA0] hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors flex items-center justify-center"
              aria-label="Scroll right"
            >
              &#8594;
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto px-5 md:px-10 pb-4 scrollbar-hide snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-44 md:w-52 aspect-[9/16] rounded-2xl overflow-hidden snap-start group"
          >
            <img
              data-strk-img-id={`ugc-reel-${item.id}`}
              data-strk-img={`${item.query}`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#2C2622]/80 via-transparent to-transparent" />
            <p
              className="absolute bottom-4 left-4 right-4 text-[#FAF7F2] text-sm italic"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {item.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
