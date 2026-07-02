import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ugcItems = [
  { id: 1, caption: 'Morning light, golden glow', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=700&fit=crop' },
  { id: 2, caption: 'Stacked and styled', img: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400&h=700&fit=crop' },
  { id: 3, caption: 'Everyday luxury', img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=700&fit=crop' },
  { id: 4, caption: 'Gifting season', img: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&h=700&fit=crop' },
  { id: 5, caption: 'Golden hour details', img: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=700&fit=crop' },
  { id: 6, caption: 'Simply elegant', img: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=700&fit=crop' },
  { id: 7, caption: 'Subtle statement', img: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400&h=700&fit=crop' },
];

export default function UGCReels() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 280, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 mb-10">
        <div className="flex items-end justify-between">
          <div>
            <p className="section-subtitle mb-3">Worn & Loved</p>
            <h2 className="font-serif text-heading">#VelmoraStyle</h2>
          </div>
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scroll(-1)}
              className="w-10 h-10 border border-obsidian-700 rounded-full flex items-center justify-center text-obsidian-400 hover:text-gold-400 hover:border-gold-500/40 transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll(1)}
              className="w-10 h-10 border border-obsidian-700 rounded-full flex items-center justify-center text-obsidian-400 hover:text-gold-400 hover:border-gold-500/40 transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 px-5 md:px-8 overflow-x-auto scrollbar-hide pb-4"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-[200px] md:w-[240px] aspect-[9/16] rounded-lg overflow-hidden group cursor-pointer"
            style={{ scrollSnapAlign: 'start' }}
          >
            <img
              src={item.img}
              alt={item.caption}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/80 via-transparent to-transparent" />
            <p className="absolute bottom-4 left-4 right-4 font-serif text-sm text-cream-100 italic leading-snug">
              "{item.caption}"
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
