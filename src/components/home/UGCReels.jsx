import { useRef } from 'react';

const reels = [
  { id: 1, caption: 'Golden hour glow', query: 'woman wearing gold huggie earrings closeup ear warm light editorial' },
  { id: 2, caption: 'Layered luxe', query: 'gold layered necklaces on woman neck closeup editorial warm light' },
  { id: 3, caption: 'Statement maker', query: 'woman gold statement earrings portrait editorial jewelry closeup' },
  { id: 4, caption: 'Everyday shine', query: 'minimal gold ear cuff on woman ear closeup editorial warm light' },
  { id: 5, caption: 'Gift worthy', query: 'gold jewelry gift box open elegant dark background' },
  { id: 6, caption: 'Self love', query: 'woman touching gold necklace portrait editorial warm light' },
];

export default function UGCReels() {
  const scrollRef = useRef(null);

  return (
    <section className="py-16 md:py-24 bg-cream border-t border-hairline">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 mb-8 flex items-end justify-between">
        <div>
          <p className="text-xs uppercase tracking-widest text-gold font-medium mb-2">
            @velmorajewelry
          </p>
          <h2 className="font-serif text-2xl md:text-3xl">Styled by You</h2>
        </div>
        <span className="text-xs text-muted hidden md:block">Scroll to explore</span>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto px-6 md:px-10 pb-4 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: 'none' }}
      >
        {reels.map((reel) => (
          <div
            key={reel.id}
            className="relative flex-shrink-0 w-[180px] md:w-[220px] aspect-[9/16] snap-start overflow-hidden group cursor-pointer"
          >
            <img
              src={`https://image.pollinations.ai/prompt/${encodeURIComponent(reel.query)}?width=440&height=780&nologo=true&seed=${reel.id}`}
              alt={reel.caption}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-base/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="font-serif text-white text-base md:text-lg italic leading-snug">
                {reel.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
