import React from 'react';

const reels = [
  { id: 1, image: 'https://placehold.co/600x1067/f6f4f0/1c1917?text=Golden+hour+glow.&font=playfair-display', caption: 'Golden hour glow.' },
  { id: 2, image: 'https://placehold.co/600x1067/f6f4f0/1c1917?text=Layered+necklaces.&font=playfair-display', caption: 'Layered necklaces.' },
  { id: 3, image: 'https://placehold.co/600x1067/f6f4f0/1c1917?text=Huggies+for+days.&font=playfair-display', caption: 'Huggies for days.' },
  { id: 4, image: 'https://placehold.co/600x1067/f6f4f0/1c1917?text=Ear+cuff+edit.&font=playfair-display', caption: 'Ear cuff edit.' },
  { id: 5, image: 'https://placehold.co/600x1067/f6f4f0/1c1917?text=Gift-ready+sets.&font=playfair-display', caption: 'Gift-ready sets.' },
];

const ReelRow = () => {
  return (
    <section className="section-container py-16">
      <h2 className="font-serif text-2xl text-[#1c1917] md:text-3xl">From the Community</h2>
      <p className="mt-2 text-sm text-[#5c5650]">Tag @velmora to be featured.</p>

      <div className="mt-8 flex gap-4 overflow-x-auto pb-4 md:gap-6">
        {reels.map((reel) => (
          <div key={reel.id} className="relative aspect-[9/16] w-[220px] flex-shrink-0 overflow-hidden rounded-xl md:w-[260px]">
            <img src={reel.image} alt={reel.caption} className="h-full w-full object-cover" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
              <p className="font-serif text-sm text-white">{reel.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReelRow;
