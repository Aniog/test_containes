import React from 'react';
import { ugcPosts } from '../data/products';

export default function UGCReel() {
  return (
    <section className="py-20 bg-velmora-charcoal text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h2 className="font-serif text-4xl md:text-5xl text-center mb-4">Styled by You</h2>
        <div className="hairline w-24 mx-auto mb-4 border-velmora-charcoal-light" />
        <p className="text-center text-gray-400 uppercase tracking-wider text-sm">@velmora_jewelry</p>
      </div>

      {/* Horizontal Scroll */}
      <div className="flex gap-4 overflow-x-auto pb-8 px-4 sm:px-6 lg:px-8 scrollbar-hide">
        {ugcPosts.map((post) => (
          <div
            key={post.id}
            className="flex-shrink-0 w-64 h-80 md:w-72 md:h-96 relative group cursor-pointer"
          >
            <img
              src={post.image}
              alt={post.caption}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-serif text-lg italic">"{post.caption}"</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}