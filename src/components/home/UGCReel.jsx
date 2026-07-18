import React from 'react';

export default function UGCReel() {
  const ugcItems = [
    { id: 1, image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80', caption: 'Stacking my favorites ✨' },
    { id: 2, image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80', caption: 'Everyday elegance' },
    { id: 3, image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80', caption: 'Golden hour glow' },
    { id: 4, image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80', caption: 'Gifted myself today 🎁' },
    { id: 5, image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80', caption: 'Minimal & chic' },
  ];

  return (
    <section className="py-20 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-4xl md:text-5xl text-center mb-12">Worn by You</h2>

        <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory">
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-72 md:w-80 aspect-[9/16] relative rounded-lg overflow-hidden snap-center"
            >
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <p className="absolute bottom-6 left-6 right-6 text-white font-serif text-lg italic">
                "{item.caption}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
