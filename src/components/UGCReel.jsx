import React from 'react';
import { Play, Heart } from 'lucide-react';

export default function UGCReel() {
  const ugcItems = [
    { id: 1, image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&h=711&fit=crop', caption: 'Everyday elegance' },
    { id: 2, image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=711&fit=crop', caption: 'Stacked to perfection' },
    { id: 3, image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=711&fit=crop', caption: 'Golden hour glow' },
    { id: 4, image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=711&fit=crop', caption: 'Minimal & timeless' },
    { id: 5, image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&h=711&fit=crop', caption: 'Layered love' },
    { id: 6, image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=711&fit=crop', caption: 'Gift ready' }
  ];

  return (
    <section className="py-20 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-light tracking-wide mb-4">
            #VelmoraStyle
          </h2>
          <p className="font-sans text-lg text-velmora-charcoal-light">
            Shop our community's favorite looks
          </p>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="flex gap-4 overflow-x-auto pb-6 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {ugcItems.map((item) => (
            <div 
              key={item.id}
              className="flex-shrink-0 w-64 md:w-72 relative group cursor-pointer"
            >
              {/* Vertical Card (9:16 aspect ratio) */}
              <div className="relative overflow-hidden bg-velmora-charcoal" style={{ aspectRatio: '9/16' }}>
                <img 
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay with Play Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-white bg-opacity-90 flex items-center justify-center">
                    <Play className="w-5 h-5 text-velmora-charcoal ml-1" />
                  </div>
                </div>

                {/* Caption Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                  <p className="font-serif text-white text-sm italic">
                    "{item.caption}"
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <Heart className="w-4 h-4 text-white" />
                    <span className="font-sans text-xs text-white opacity-80">2.4k</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Link */}
        <div className="text-center mt-8">
          <a 
            href="https://instagram.com/velmora"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-sm tracking-wider uppercase text-velmora-gold hover:text-velmora-gold-dark transition-colors duration-300"
          >
            Follow @Velmora on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
