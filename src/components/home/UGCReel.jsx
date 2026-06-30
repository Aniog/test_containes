import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ugcItems = [
  { id: 1, caption: 'Golden Hour Glow', query: 'gold earrings on ear close up warm light' },
  { id: 2, caption: 'Everyday Elegance', query: 'gold necklace on neck model portrait' },
  { id: 3, caption: 'Stack & Style', query: 'gold huggie earrings stacked ear jewelry' },
  { id: 4, caption: 'Date Night Ready', query: 'gold jewelry woman neck evening look' },
  { id: 5, caption: 'Self-Love Sparkle', query: 'woman wearing gold bracelet hand elegant' },
  { id: 6, caption: 'Golden Layers', query: 'layered gold necklaces on collarbone model' },
];

export default function UGCReel() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 260, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 md:py-28 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs tracking-widest-xl uppercase text-gold-500 mb-3 font-medium">
            @Velmorajewelry
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal-800" style={{ fontWeight: 400 }}>
            Styled by You
          </h2>
          <div className="hairline max-w-24 mx-auto mt-6" />
        </div>
      </div>

      <div className="relative">
        {/* Scroll buttons */}
        <button
          onClick={() => scroll(-1)}
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-cream-50/90 backdrop-blur-sm border border-gold-200/30 items-center justify-center text-charcoal-600 hover:text-charcoal-800 hover:bg-cream-50 transition-colors shadow-sm"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={() => scroll(1)}
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-cream-50/90 backdrop-blur-sm border border-gold-200/30 items-center justify-center text-charcoal-600 hover:text-charcoal-800 hover:bg-cream-50 transition-colors shadow-sm"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto no-scrollbar px-4 sm:px-6 lg:px-8 pb-4 snap-x snap-mandatory"
        >
          {/* Left spacer for centering on wide screens */}
          <div className="flex-shrink-0 w-0 lg:w-[calc((100vw-1280px)/2)]" />

          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="relative flex-shrink-0 w-44 md:w-52 aspect-[9/16] snap-start overflow-hidden group cursor-pointer"
            >
              <img
                data-strk-img-id={`ugc-reel-${item.id}`}
                data-strk-img={item.query}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/70 via-transparent to-transparent" />
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="font-serif text-sm text-cream-50 tracking-wide italic" style={{ fontWeight: 300 }}>
                  {item.caption}
                </p>
              </div>
            </div>
          ))}

          <div className="flex-shrink-0 w-0 lg:w-[calc((100vw-1280px)/2)]" />
        </div>
      </div>
    </section>
  );
}
