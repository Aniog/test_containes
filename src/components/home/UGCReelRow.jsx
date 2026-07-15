import React from 'react';
import { Play, Heart } from 'lucide-react';

const UGCReelRow = () => {
  const ugcItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&h=711&fit=crop",
      caption: "Golden hour glow ✨",
      author: "@sarahm"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=711&fit=crop",
      caption: "Everyday elegance",
      author: "@emilyr"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=800&fit=crop",
      caption: "Stacking my favorites",
      author: "@jessical"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=711&fit=crop",
      caption: "Gifted myself today 🎁",
      author: "@aishan"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&h=711&fit=crop",
      caption: "Velmora vibes",
      author: "@michellet"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=711&fit=crop",
      caption: "Timeless beauty",
      author: "@oliviap"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12">
        <h2 
          className="font-serif text-4xl lg:text-5xl text-center"
          style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}
        >
          #VelmoraMoments
        </h2>
      </div>

      {/* Horizontal Scroll */}
      <div className="flex gap-4 lg:gap-6 overflow-x-auto px-6 lg:px-8 pb-8 scrollbar-hide">
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-64 lg:w-80 relative group cursor-pointer"
          >
            <div className="aspect-[9/16] bg-cream overflow-hidden">
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-sm mb-2 italic">{item.caption}</p>
                  <p className="text-xs opacity-80">{item.author}</p>
                </div>
              </div>

              {/* Play Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Play size={48} className="text-white/80" fill="white" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCReelRow;
