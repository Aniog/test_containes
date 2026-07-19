import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const reels = [
  { id: 1, caption: 'Golden hour with Golden Sphere Huggies', tag: '@sarahmstyles' },
  { id: 2, caption: 'Layered and luminous — Majestic Flora Nectar', tag: '@michellek' },
  { id: 3, caption: 'Everyday elegance with Amber Lace', tag: '@jennifer.r' },
  { id: 4, caption: 'The perfect gift set — Royal Heirloom', tag: '@stylebyemma' },
  { id: 5, caption: 'Ear cuff stack for brunch', tag: '@thejewelryedit' },
  { id: 6, caption: 'Pearl Kiss Huggies for date night', tag: '@alexandra.l' },
];

export default function UgcReel() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-end justify-between mb-10 lg:mb-14">
          <div>
            <p className="text-xs text-gold tracking-widest uppercase mb-3 font-sans">
              As Seen On
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-espresso tracking-wide">
              Styled by You
            </h2>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-12 lg:px-12"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {reels.map((reel) => (
            <div
              key={reel.id}
              className="flex-shrink-0 w-[160px] sm:w-[200px] lg:w-[240px]"
            >
              <div className="aspect-[9/16] rounded-lg bg-gradient-to-b from-[#D4B87A]/30 via-[#E8E2D9] to-[#B8965E]/20 relative overflow-hidden group cursor-pointer">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                    <span className="text-gold-deep font-serif text-lg">V</span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent flex items-end p-4">
                  <div>
                    <p className="text-white text-xs font-serif leading-snug mb-1">
                      {reel.caption}
                    </p>
                    <p className="text-gold-light text-[10px] tracking-wider">
                      {reel.tag}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}