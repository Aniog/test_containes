import { useRef, useEffect } from 'react';
import { StockImage } from '@/components/ui/StockImage';
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll';

const ugcPosts = [
  {
    id: 'ugc-1',
    caption: '"Everyday elegance, effortlessly worn."',
    query: 'gold earrings model ear closeup warm light',
    imgId: 'ugc-earring-a1b2c3',
  },
  {
    id: 'ugc-2',
    caption: '"The necklace that started it all."',
    query: 'gold pendant necklace model collarbone editorial',
    imgId: 'ugc-necklace-d4e5f6',
  },
  {
    id: 'ugc-3',
    caption: '"Stacked, layered, loved."',
    query: 'gold huggie earrings stacked ear jewelry',
    imgId: 'ugc-huggies-g7h8i9',
  },
  {
    id: 'ugc-4',
    caption: '"Golden hour, golden jewelry."',
    query: 'gold jewelry model sunset warm light portrait',
    imgId: 'ugc-golden-j0k1l2',
  },
  {
    id: 'ugc-5',
    caption: '"Details that speak volumes."',
    query: 'gold filigree earrings detail macro jewelry',
    imgId: 'ugc-detail-m3n4o5',
  },
  {
    id: 'ugc-6',
    caption: '"From desk to dinner."',
    query: 'gold jewelry set model elegant evening',
    imgId: 'ugc-evening-p6q7r8',
  },
];

export default function UGCRow() {
  const scrollRef = useRef(null);
  const sectionRef = useRevealOnScroll();

  useEffect(() => {
    if (scrollRef.current) {
      const frameId = window.requestAnimationFrame(() => {
        // Images handled by StockImage
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, []);

  return (
    <section className="py-16 md:py-20 bg-secondary/30 overflow-hidden" ref={sectionRef}>
      <div className="text-center mb-10 px-4 reveal">
        <p className="serif-heading text-2xl md:text-3xl italic text-foreground/80">
          As worn by you
        </p>
        <p className="text-xs text-muted-foreground mt-2 tracking-wider uppercase">@velmorajewelry</p>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 px-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {ugcPosts.map((post, index) => (
          <div
            key={post.id}
            className={`flex-shrink-0 w-[200px] md:w-[240px] snap-start reveal reveal-delay-${Math.min(index + 1, 4)}`}
          >
            <div className="relative aspect-[9/16] bg-[#2a2520] overflow-hidden group">
              <StockImage
                imgId={post.imgId}
                query={post.query}
                ratio="9x16"
                width="400"
                alt={post.caption}
              />
              {/* Caption overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="serif-heading text-white text-sm italic leading-snug">
                  {post.caption}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
