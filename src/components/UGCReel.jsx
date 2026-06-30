import React from 'react';
import { Play, Heart } from 'lucide-react';

export default function UGCReel() {
  const ugcItems = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80',
      caption: 'Perfect for layering',
      author: '@sarahj'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80',
      caption: 'Everyday elegance',
      author: '@emilyr'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80',
      caption: 'Gifted myself today',
      author: '@jessicam'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80',
      caption: 'Obsessed with these',
      author: '@nataliek'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80',
      caption: 'Wedding guest ready',
      author: '@aishaw'
    }
  ];

  return (
    <section className="py-20 bg-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl mb-4 text-foreground">
            #VelmoraMoments
          </h2>
          <div className="divider w-20 mx-auto my-6" />
          <p className="text-muted text-lg">
            See how our community styles their Velmora pieces
          </p>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory">
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="flex-none w-72 md:w-80 snap-center relative group cursor-pointer"
            >
              <div className="aspect-[9/16] relative overflow-hidden bg-card">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="font-serif text-lg mb-2">{item.caption}</p>
                    <p className="text-sm opacity-80">{item.author}</p>
                  </div>
                </div>

                {/* Play Icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Play size={24} className="text-white" fill="white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
