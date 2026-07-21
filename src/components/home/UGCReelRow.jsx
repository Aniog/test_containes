import React from 'react';

export default function UGCReelRow() {
  const ugcItems = [
    { id: 1, image: 'https://placehold.co/400x711/F5F0EB/C9A96E?text=Style+1', caption: 'Stacked for everyday' },
    { id: 2, image: 'https://placehold.co/400x711/F5F0EB/C9A96E?text=Style+2', caption: 'Golden hour glow' },
    { id: 3, image: 'https://placehold.co/400x711/F5F0EB/C9A96E?text=Style+3', caption: 'Minimalist layers' },
    { id: 4, image: 'https://placehold.co/400x711/F5F0EB/C9A96E?text=Style+4', caption: 'Gifted with love' },
    { id: 5, image: 'https://placehold.co/400x711/F5F0EB/C9A96E?text=Style+5', caption: 'Huggie perfection' },
    { id: 6, image: 'https://placehold.co/400x711/F5F0EB/C9A96E?text=Style+6', caption: 'Everyday elegance' },
  ];

  return (
    <section className="py-20 bg-[#FAF7F2]">
      <div className="container-luxury">
        <h2 className="font-serif text-4xl text-center mb-4">Worn by You</h2>
        <p className="text-center text-gray-600 mb-12 tracking-wide">
          Join the Velmora community
        </p>
      </div>

      <div className="flex gap-4 overflow-x-auto px-4 md:px-8 scrollbar-hide">
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <p className="text-white font-serif italic text-lg">{item.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
