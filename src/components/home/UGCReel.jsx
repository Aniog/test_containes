import React from 'react';
import { Link } from 'react-router-dom';

export default function UGCReel() {
  const ugcItems = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80',
      caption: 'Golden hour essentials',
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
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80',
      caption: 'Layered perfection',
      author: '@jessicam'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80',
      caption: 'Minimalist vibes',
      author: '@oliviak'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80',
      caption: 'Gifted with love',
      author: '@natalieg'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80',
      caption: 'Self-care Sunday',
      author: '@aubreyl'
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="heading-md mb-4">#VelmoraStyle</h2>
          <p className="font-sans text-velmora-text-secondary">
            Tag us @velmora for a chance to be featured
          </p>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="relative">
          <div className="flex space-x-4 lg:space-x-6 overflow-x-auto no-scrollbar pb-4">
            {ugcItems.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 w-64 lg:w-72 group cursor-pointer"
              >
                {/* Vertical Card (9:16 aspect ratio) */}
                <div className="relative aspect-[9/16] overflow-hidden bg-velmora-sand rounded-lg">
                  <img
                    src={item.image}
                    alt={item.caption}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Caption Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-velmora-charcoal/70 via-transparent to-transparent 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500
                                flex items-end p-6">
                    <div>
                      <p className="font-serif text-white text-lg italic mb-1">
                        "{item.caption}"
                      </p>
                      <p className="font-sans text-white/80 text-sm">
                        {item.author}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Gradient Fades on Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-velmora-cream to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-velmora-cream to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
