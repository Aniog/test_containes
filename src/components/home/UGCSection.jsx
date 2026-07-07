import React from 'react';

const UGCSection = () => {
  const ugcItems = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&h=711&fit=crop',
      caption: 'Everyday elegance',
      username: '@sarahstyle',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=711&fit=crop',
      caption: 'Layered perfection',
      username: '@emilyj',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=711&fit=crop',
      caption: 'Golden hour glow',
      username: '@jessicar',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&h=711&fit=crop',
      caption: 'Minimalist vibes',
      username: '@aishwaryal',
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&h=711&fit=crop',
      caption: 'Date night ready',
      username: '@nicolem',
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl text-velmora-charcoal mb-4">
            #VelmoraStyle
          </h2>
          <p className="text-velmora-graphite">
            Tag us @VelmoraFineJewelry for a chance to be featured
          </p>
        </div>

        {/* UGC Scroll Container */}
        <div className="flex gap-4 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide">
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-64 md:w-72 snap-center relative group cursor-pointer"
            >
              <div className="aspect-[9/16] rounded-lg overflow-hidden bg-velmora-warm">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Caption Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-velmora-charcoal/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-velmora-ivory">
                    <p className="font-serif text-lg mb-1">{item.caption}</p>
                    <p className="text-sm text-velmora-ivory/80">{item.username}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UGCSection;
