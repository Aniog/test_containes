import React from 'react';

export default function UGCReel({ content }) {
  return (
    <section className="py-20 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-4">Styled by You</h2>
          <p className="text-velmora-warm-gray text-sm uppercase tracking-wider">Join the Velmora community</p>
        </div>

        <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4">
          {content.map((item) => (
            <div key={item.id} className="flex-shrink-0 w-64 md:w-72 relative group cursor-pointer">
              <div className="aspect-[9/16] overflow-hidden bg-velmora-cream">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                <p className="text-white text-sm font-light">{item.caption}</p>
                <p className="text-white text-xs opacity-70">{item.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
