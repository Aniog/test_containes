import React from 'react';

const UGCRow = () => {
  const reels = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80',
      caption: 'Golden hour glow ✨',
      user: '@sophia.style',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?w=600&q=80',
      caption: 'New everyday essentials',
      user: '@emma.jewelry',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&q=80',
      caption: 'Layering season is here',
      user: '@olivia.wears',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&q=80',
      caption: 'Gift ideas for her',
      user: '@velmora',
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80',
      caption: 'Weekend vibes',
      user: '@chic.finds',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-base-cream overflow-hidden">
      <div className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-medium text-base-charcoal mb-3">
              As Seen On
            </h2>
            <p className="text-base-muted text-sm tracking-wider uppercase">
              Follow us @velmora
            </p>
          </div>
        </div>
      </div>

      {/* Horizontal scroll container */}
      <div className="relative">
        <div className="flex gap-4 overflow-x-auto px-6 pb-4 scrollbar-hide snap-x snap-mandatory">
          {reels.map((reel) => (
            <div
              key={reel.id}
              className="flex-shrink-0 w-40 md:w-48 snap-start"
            >
              <div className="relative aspect-[9/16] rounded-lg overflow-hidden bg-base-paper group">
                <img
                  src={reel.image}
                  alt={reel.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Caption overlay */}
                <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-base-charcoal/70 to-transparent">
                  <p className="font-display text-sm text-base-cream italic leading-snug">
                    {reel.caption}
                  </p>
                  <p className="text-[10px] text-base-cream/80 mt-1 tracking-wider uppercase">
                    {reel.user}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UGCRow;
