import React from 'react';

const UGCRow = () => {
  const ugcItems = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80',
      caption: 'My everyday staple',
      name: 'Sofia M.',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80',
      caption: 'Wore this to my sister\'s wedding',
      name: 'Elena R.',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80',
      caption: 'Feels like real gold',
      name: 'Maya K.',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=600&q=80',
      caption: 'The perfect gift for myself',
      name: 'Isabella T.',
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80',
      caption: 'Never taking these off',
      name: 'Camille L.',
    },
  ];

  return (
    <section className="bg-[#F8F5F1] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <span className="text-xs tracking-[3px] text-[#A67C52]">AS SEEN ON</span>
          <h2 className="font-serif text-3xl tracking-[1px] text-[#1C1917] mt-1">
            Worn by You
          </h2>
        </div>

        {/* Horizontal scroll container - Reel style */}
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-1 px-1">
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-[160px] sm:w-[180px] snap-start"
            >
              <div className="relative aspect-[9/16] overflow-hidden bg-[#EDE8E0] rounded-sm">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover"
                />
                {/* Soft overlay with caption */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-4">
                  <p className="font-serif text-white text-sm tracking-wide leading-tight">
                    "{item.caption}"
                  </p>
                  <p className="text-white/70 text-xs mt-2 tracking-[1px]">
                    — {item.name}
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
