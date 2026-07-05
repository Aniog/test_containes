import React from 'react';
import { Play, Heart } from 'lucide-react';

const ugcItems = [
  { id: 1, image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80', caption: 'Everyday elegance' },
  { id: 2, image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80', caption: 'Layered perfection' },
  { id: 3, image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80', caption: 'Golden hour glow' },
  { id: 4, image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220e?w=400&q=80', caption: 'Minimalist vibes' },
  { id: 5, image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80', caption: 'Stacked & styled' },
  { id: 6, image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80', caption: 'Gifted with love' },
];

export default function UGCReelRow() {
  return (
    <section className="py-20 md:py-32 bg-velmora-warm-white">
      <div className="container-luxury">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">Styled by You</h2>
          <p className="text-velmora-text-light text-sm uppercase tracking-wider">@velmora_jewelry</p>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="flex gap-4 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory">
          {ugcItems.map(item => (
            <div
              key={item.id}
              className="flex-shrink-0 w-64 md:w-72 snap-center relative group cursor-pointer"
            >
              <div className="aspect-[9/16] bg-velmora-sand rounded-lg overflow-hidden">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center">
                    <Play size={20} className="text-velmora-charcoal ml-1" />
                  </div>
                </div>

                {/* Caption Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="text-white text-sm font-light italic">"{item.caption}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
