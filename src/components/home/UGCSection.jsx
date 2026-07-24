import React from 'react';
import { Play, Heart } from 'lucide-react';

const UGCSection = () => {
  const ugcItems = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&h=711&fit=crop',
      caption: 'Stacking my favorites',
      author: '@sarahj',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=711&fit=crop',
      caption: 'Everyday elegance',
      author: '@emilyr',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=711&fit=crop',
      caption: 'Gifted myself today',
      author: '@michellew',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=711&fit=crop',
      caption: 'Obsessed with these huggies',
      author: '@jessicat',
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400&h=711&fit=crop',
      caption: 'Perfect for layering',
      author: '@oliviad',
    },
  ];

  return (
    <section className="bg-cream py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h2 className="font-serif text-4xl font-light text-center mb-4 tracking-wide">
          #VelmoraMoments
        </h2>
        <p className="text-center text-gray-600 tracking-wide">Tag us @VelmoraJewelry</p>
      </div>

      {/* Horizontal Scroll */}
      <div className="flex gap-4 overflow-x-auto px-4 sm:px-6 lg:px-8 pb-6 scrollbar-hide">
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-64 md:w-72 relative group cursor-pointer"
          >
            <div className="ugc-card overflow-hidden bg-cream">
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 editorial-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="text-cream">
                  <p className="font-serif text-lg mb-1">{item.caption}</p>
                  <p className="text-sm">{item.author}</p>
                </div>
              </div>

              {/* Play Icon for Reel-style */}
              <div className="absolute top-4 right-4">
                <Play size={20} className="text-cream fill-cream" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCSection;
