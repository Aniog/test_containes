import React from 'react';

const UGCReelSection = () => {
  const ugcItems = [
    { id: 1, image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400&h=711&fit=crop', caption: 'Everyday elegance' },
    { id: 2, image: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=400&h=711&fit=crop', caption: 'Layered perfection' },
    { id: 3, image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&h=711&fit=crop', caption: 'Golden hour glow' },
    { id: 4, image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=711&fit=crop', caption: 'Minimalist vibes' },
    { id: 5, image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=711&fit=crop', caption: 'Stacked & styled' },
    { id: 6, image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8b?w=400&h=711&fit=crop', caption: 'Timeless beauty' },
  ];

  return (
    <section className="py-20 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl mb-4 tracking-wide">@Velmora</h2>
          <p className="text-sm text-velmora-stone uppercase tracking-widest">Follow our story</p>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="flex gap-4 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory">
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-64 md:w-72 snap-center cursor-pointer group relative"
            >
              <div className="aspect-9/16 overflow-hidden bg-velmora-warm">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Caption Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-sm font-light italic">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UGCReelSection;
