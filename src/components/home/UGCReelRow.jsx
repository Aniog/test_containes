import React from 'react';

export default function UGCReelRow() {
  const ugcItems = [
    { id: 1, image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&h=711&fit=crop', caption: 'Everyday elegance' },
    { id: 2, image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=711&fit=crop', caption: 'Layered perfection' },
    { id: 3, image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&h=711&fit=crop', caption: 'Golden hour glow' },
    { id: 4, image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=711&fit=crop', caption: 'Minimalist vibes' },
    { id: 5, image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&h=711&fit=crop', caption: 'Stacked & styled' },
    { id: 6, image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=711&fit=crop', caption: 'Timeless beauty' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-premium">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl mb-4">Styled by You</h2>
          <div className="hairline w-24 mx-auto" />
        </div>

        <div className="ugc-scroll flex gap-4 overflow-x-auto pb-4">
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-64 md:w-80 relative group cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.caption}
                className="w-full aspect-[9/16] object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-end">
                <p className="text-white p-6 font-serif text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
