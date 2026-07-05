import React from 'react';
import { ugcPosts } from '../data/products';

const UGCReelRow = () => {
  const displayPosts = ugcPosts && ugcPosts.length > 0 ? ugcPosts : [
    {
      id: 1,
      image: 'https://placehold.co/400x500/F5F0EB/1A1A1A?text=Styled+1',
      caption: 'Everyday elegance',
      author: '@sarahj'
    },
    {
      id: 2,
      image: 'https://placehold.co/400x500/F5F0EB/1A1A1A?text=Styled+2',
      caption: 'Stacked & styled',
      author: '@emilyr'
    },
    {
      id: 3,
      image: 'https://placehold.co/400x500/F5F0EB/1A1A1A?text=Styled+3',
      caption: 'Golden hour glow',
      author: '@maria_k'
    },
    {
      id: 4,
      image: 'https://placehold.co/400x500/F5F0EB/1A1A1A?text=Styled+4',
      caption: 'Minimal & chic',
      author: '@jess_l'
    },
    {
      id: 5,
      image: 'https://placehold.co/400x500/F5F0EB/1A1A1A?text=Styled+5',
      caption: 'Perfect gift',
      author: '@anna_m'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cream">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-4xl text-center mb-4">Styled by You</h2>
        <p className="text-center text-stone mb-12">Tag us @velmora for a chance to be featured</p>

        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {displayPosts.map((post) => (
            <div
              key={post.id}
              className="flex-shrink-0 w-64 h-80 relative group cursor-pointer overflow-hidden bg-cream"
            >
              <img 
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover"
              />
              
              <div className="absolute inset-0 bg-charcoal bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-end">
                <div className="p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="font-serif text-lg mb-1">{post.caption}</p>
                  <p className="text-sm opacity-90">{post.author}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UGCReelRow;
