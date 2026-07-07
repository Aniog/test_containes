import React from 'react';

const UGCSection = () => {
  const ugcItems = [
    { id: 1, image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80', caption: 'Golden hour vibes ✨' },
    { id: 2, image: 'https://images.unsplash.com/photo-1630019852942-fdaf6eb31cb8?w=400&q=80', caption: 'Everyday elegance' },
    { id: 3, image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80', caption: 'Stacked to perfection' },
    { id: 4, image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80', caption: 'Gifted with love 💝' },
    { id: 5, image: 'https://images.unsplash.com/photo-1630019852942-fdaf6eb31cb8?w=400&q=80', caption: 'Minimal & chic' },
    { id: 6, image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80', caption: 'Office to evening ✨' },
  ];

  return (
    <section className="bg-velmora-ivory py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <h2 className="font-serif text-4xl md:text-5xl text-center mb-4">
          #VelmoraMoments
        </h2>
        <p className="text-center text-velmora-mist">
          Tag us @velmora for a chance to be featured
        </p>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="flex gap-4 overflow-x-auto px-4 sm:px-6 lg:px-8 pb-6 snap-x snap-mandatory">
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="flex-none w-64 sm:w-72 aspect-[9/16] relative group cursor-pointer snap-center"
          >
            <img
              src={item.image}
              alt=""
              className="w-full h-full object-cover"
            />
            {/* Caption Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <p className="text-white text-sm font-light italic">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCSection;
