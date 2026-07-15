import React from 'react';

const placeholder = (label) =>
  `https://placehold.co/600x800/F6F3EE/B8860B?text=${encodeURIComponent(label)}&font=playfair-display`;

const UGC = () => {
  const reels = [
    { id: 1, caption: 'Golden hour glow ✨' },
    { id: 2, caption: 'Layered perfection' },
    { id: 3, caption: 'Huggie season' },
    { id: 4, caption: 'Ear candy' },
    { id: 5, caption: 'Gift ready' },
  ];

  return (
    <section className="py-16 bg-brand-surface overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8">
        <h2 className="section-title text-center">As Seen On</h2>
        <p className="mt-3 text-center text-brand-muted text-sm">Follow us @velmora for your chance to be featured</p>
      </div>
      <div className="flex gap-4 overflow-x-auto pb-4 px-4 sm:px-6 lg:px-8 scrollbar-hide">
        {reels.map(reel => (
          <div key={reel.id} className="relative flex-shrink-0 w-40 h-56 md:w-48 md:h-64 rounded-xl overflow-hidden group">
            <img src={placeholder(reel.caption)} alt={reel.caption} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <p className="absolute bottom-3 left-3 right-3 font-serif text-white text-sm italic">{reel.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGC;
