import { useRef } from 'react';

const reels = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=600&q=80',
    caption: 'Everyday elegance',
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&q=80',
    caption: 'Golden hour glow',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&q=80',
    caption: 'Made to layer',
  },
  {
    id: 4,
    image:
      'https://images.unsplash.com/photo-1635767798638-3e2523c0188b?w=600&q=80',
    caption: 'Statement huggies',
  },
  {
    id: 5,
    image:
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&q=80',
    caption: 'Gift-worthy',
  },
  {
    id: 6,
    image:
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80',
    caption: 'Subtle luxury',
  },
  {
    id: 7,
    image:
      'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&q=80',
    caption: 'Treasured moments',
  },
];

export default function UGCReelSection() {
  const scrollRef = useRef(null);

  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="container-main mb-8">
        <h2 className="font-serif text-3xl md:text-4xl text-base text-center">
          Styled by You
        </h2>
        <p className="font-sans text-sm text-text-secondary text-center mt-2">
          Tag @velmorajewelry to be featured
        </p>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-3 md:gap-4 overflow-x-auto px-4 md:px-8 pb-4 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {reels.map((reel) => (
          <div
            key={reel.id}
            className="relative flex-shrink-0 w-[200px] md:w-[260px] aspect-[9/16] snap-start overflow-hidden group cursor-pointer"
          >
            <img
              src={reel.image}
              alt={reel.caption}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-base/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="font-serif text-lg text-text-inverse italic">
                {reel.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
