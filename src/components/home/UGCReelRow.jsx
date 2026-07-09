import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function UGCReelRow() {
  const reels = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80',
      caption: 'Everyday elegance',
      author: '@sarahj',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80',
      caption: 'Layered & loved',
      author: '@emilyc',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80',
      caption: 'Golden hour glow',
      author: '@jessicam',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80',
      caption: 'Minimal & chic',
      author: '@aishar',
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80',
      caption: 'Stacked to perfection',
      author: '@ninap',
    },
  ];

  return (
    <section className="py-20 bg-cream-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-light">Worn by you</h2>
            <p className="text-charcoal-600 mt-2">Join the #Velmora community</p>
          </div>
          <Link
            to="/journal"
            className="hidden md:flex items-center gap-2 text-sm tracking-wider uppercase text-charcoal-900 hover:opacity-70"
          >
            View all
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Horizontal Scroll */}
        <div className="flex gap-4 overflow-x-auto horizontal-scroll pb-4 -mx-6 px-6">
          {reels.map((reel) => (
            <div
              key={reel.id}
              className="flex-shrink-0 w-64 md:w-72 relative group cursor-pointer"
            >
              <div className="aspect-[9/16] max-h-[500px] overflow-hidden rounded-lg bg-cream-100">
                <img
                  src={reel.image}
                  alt={reel.caption}
                  className="w-full h-full object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="text-sm font-light italic">"{reel.caption}"</p>
                    <p className="text-xs mt-1 opacity-80">{reel.author}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
