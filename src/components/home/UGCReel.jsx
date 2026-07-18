import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function UGCReel() {
  const ugcItems = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&q=80',
      caption: 'Stacking my favorites',
      author: '@sarahj'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80',
      caption: 'Everyday elegance',
      author: '@emilyrose'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&q=80',
      caption: 'Golden hour glow',
      author: '@maria_k'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80',
      caption: 'Gifted myself',
      author: '@jenniferl'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&q=80',
      caption: 'Bride tribe gifts',
      author: '@oliviab'
    },
  ];

  return (
    <section className="py-20 bg-velmora-cream">
      <div className="container-premium">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-4">#VelmoraStyle</h2>
          <p className="text-velmora-warm-gray text-sm tracking-wide uppercase">Follow us on Instagram</p>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="flex space-x-4 overflow-x-auto pb-6 scrollbar-hide">
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-64 md:w-72 relative group cursor-pointer"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              {/* Caption Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="text-white">
                  <p className="font-serif italic text-sm mb-1">{item.caption}</p>
                  <p className="text-xs">{item.author}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
