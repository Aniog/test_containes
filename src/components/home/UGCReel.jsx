import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ugcItems = [
  { id: 'ugc-1', caption: 'Everyday elegance', query: 'woman wearing gold earring closeup warm light' },
  { id: 'ugc-2', caption: 'Layered & loved', query: 'gold necklace layering on woman neck warm toned' },
  { id: 'ugc-3', caption: 'Golden hour glow', query: 'woman wearing gold huggie earrings sunlit portrait' },
  { id: 'ugc-4', caption: 'Gifting made easy', query: 'jewelry gift box gold set elegant packaging' },
  { id: 'ugc-5', caption: 'Statement pieces', query: 'crystal necklace on woman collarbone closeup' },
  { id: 'ugc-6', caption: 'Minimal & chic', query: 'gold ear cuff styling minimal aesthetic warm' },
  { id: 'ugc-7', caption: 'Effortless beauty', query: 'gold filigree earrings woman profile warm lighting' },
];

export default function UGCReel() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    const amount = 280;
    scrollRef.current.scrollBy({
      left: dir === 'left' ? -amount : amount,
      behavior: 'smooth',
    });
  };

  return (
    <section className="py-16 md:py-24 bg-cream-100">
      <div className="max-w-[1400px] mx-auto">
        {/* Section header */}
        <div className="text-center mb-10 px-5">
          <div className="divider-gold mx-auto mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal-400 tracking-wide mb-3">
            Styled by You
          </h2>
          <p className="text-sm text-charcoal-50 tracking-wide">
            See how our community wears Velmora.
          </p>
        </div>

        {/* Scroll controls */}
        <div className="relative">
          <button
            onClick={() => scroll('left')}
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-cream-50/90 backdrop-blur-sm shadow-md flex items-center justify-center rounded-full hover:bg-gold-500 hover:text-cream-50 transition-all duration-300 text-charcoal-200"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-cream-50/90 backdrop-blur-sm shadow-md flex items-center justify-center rounded-full hover:bg-gold-500 hover:text-cream-50 transition-all duration-300 text-charcoal-200"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Scrollable strip */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide px-5 md:px-10 lg:px-20 pb-4 snap-x snap-mandatory"
          >
            {ugcItems.map((item) => (
              <div
                key={item.id}
                className="relative flex-shrink-0 w-[220px] md:w-[260px] aspect-[9/16] overflow-hidden snap-start group"
              >
                <img
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  data-strk-img-id={item.id}
                  data-strk-img={`[ugc-caption-${item.id}] gold jewelry worn styling`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                {/* Caption overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-500/60 via-transparent to-transparent" />
                <p
                  id={`ugc-caption-${item.id}`}
                  className="absolute bottom-5 left-4 right-4 font-serif text-cream-50 text-lg tracking-wide italic"
                >
                  {item.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
