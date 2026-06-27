import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ugcItems = [
  { id: 1, image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80', caption: 'Golden Hour Glow' },
  { id: 2, image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80', caption: 'Everyday Elegance' },
  { id: 3, image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80', caption: 'Layered & Loved' },
  { id: 4, image: 'https://images.unsplash.com/photo-1630019852942-f6a7b1a89c93?w=400&q=80', caption: 'Minimalist Vibes' },
  { id: 5, image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80', caption: 'Gift Ready' },
  { id: 6, image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80', caption: 'Self-Care Sunday' },
];

export default function UGCReel() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-serif text-4xl font-light">On the Feed</h2>
          <div className="flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="p-2 border border-velmora-gold text-velmora-gold hover:bg-velmora-gold hover:text-white transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2 border border-velmora-gold text-velmora-gold hover:bg-velmora-gold hover:text-white transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="flex-none w-64 h-96 relative group cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-end">
                <p className="text-white text-sm font-serif italic p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
