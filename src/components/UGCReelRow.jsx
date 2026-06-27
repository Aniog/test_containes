import React from 'react';

export default function UGCReelRow() {
  const ugcItems = [
    { id: 1, image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80', caption: 'Everyday elegance' },
    { id: 2, image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80', caption: 'Layered perfection' },
    { id: 3, image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80', caption: 'Golden hour glow' },
    { id: 4, image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80', caption: 'Minimalist vibes' },
    { id: 5, image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80', caption: 'Stacked & styled' },
    { id: 6, image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80', caption: 'Timeless beauty' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-4xl text-center mb-4">Worn by You</h2>
        <p className="text-center text-[#9A9590] mb-12 tracking-wide">Join the Velmora community</p>
      </div>
      
      <div className="overflow-x-auto hide-scrollbar">
        <div className="flex space-x-4 px-4 sm:px-6 lg:px-8" style={{ width: 'max-content' }}>
          {ugcItems.map((item) => (
            <div key={item.id} className="flex-shrink-0 w-64 h-80 relative group cursor-pointer">
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-end">
                <p className="text-white text-sm italic p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
