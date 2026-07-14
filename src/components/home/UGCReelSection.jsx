import React from 'react';
import { ArrowRight } from 'lucide-react';

const UGCReelSection = () => {
  const ugcItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&q=80",
      caption: "Everyday elegance",
      author: "@sarahm"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80",
      caption: "Stacked & styled",
      author: "@emilyj"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80",
      caption: "Golden hour glow",
      author: "@maria_k"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80",
      caption: "Gift ready ✨",
      author: "@jess_l"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&q=80",
      caption: "Huggie love",
      author: "@ana_p"
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-velmora-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 mb-12 md:mb-16">
        <h2 className="font-serif text-4xl md:text-5xl font-light text-center">
          #VelmoraStyle
        </h2>
      </div>

      {/* Horizontal Scroll - Reel Style */}
      <div className="flex gap-4 md:gap-6 overflow-x-auto pb-8 px-6 md:px-8 scrollbar-hide">
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-64 md:w-80 aspect-[9/16] relative group cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.caption}
              className="w-full h-full object-cover"
            />

            {/* Serif Caption Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-velmora-warm-black/70 via-transparent to-transparent 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-300
                          flex items-end p-6">
              <div>
                <p className="font-serif text-velmora-warm-white text-lg mb-1">
                  {item.caption}
                </p>
                <p className="text-velmora-warm-white/70 text-sm">
                  {item.author}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* View More Card */}
        <div className="flex-shrink-0 w-64 md:w-80 aspect-[9/16] bg-velmora-charcoal 
                        flex flex-col items-center justify-center space-y-4
                        hover:bg-velmora-gold transition-all duration-300 cursor-pointer">
          <svg className="w-8 h-8 text-velmora-warm-white" fill="currentColor" viewBox="0 0 24 24">
            <rect x="2" y="2" width="20" height="20" rx="5" fill="none" stroke="currentColor" strokeWidth="2"/>
            <circle cx="12" cy="12" r="5" fill="none" stroke="currentColor" strokeWidth="2"/>
            <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
          </svg>
          <span className="text-velmora-warm-white text-sm tracking-wide">
            View on Instagram
          </span>
          <ArrowRight className="w-4 h-4 text-velmora-warm-white" />
        </div>
      </div>
    </section>
  );
};

export default UGCReelSection;
