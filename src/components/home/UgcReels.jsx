import React from 'react';

const reels = [
  {
    id: 1,
    image: 'https://placehold.co/600x1067/f7f5f2/1c1917?text=Morning+light',
    caption: 'Morning light, golden glow.',
  },
  {
    id: 2,
    image: 'https://placehold.co/600x1067/f7f5f2/1c1917?text=Layered+delicacies',
    caption: 'Layered delicacies.',
  },
  {
    id: 3,
    image: 'https://placehold.co/600x1067/f7f5f2/1c1917?text=Modern+huggie',
    caption: 'Modern huggie moment.',
  },
  {
    id: 4,
    image: 'https://placehold.co/600x1067/f7f5f2/1c1917?text=Filigree+in+motion',
    caption: 'Filigree in motion.',
  },
  {
    id: 5,
    image: 'https://placehold.co/600x1067/f7f5f2/1c1917?text=Gift-ready+elegance',
    caption: 'Gift-ready elegance.',
  },
];

const UgcReels = () => {
  return (
    <section className="bg-surface border-y border-border">
      <div className="container-editorial py-10 md:py-14">
        <h2 className="font-serif text-2xl md:text-3xl text-ink">Worn by you</h2>
        <p className="mt-2 text-sm text-muted">Tag @velmora to be featured.</p>
        <div className="mt-6 flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {reels.map((reel) => (
            <div
              key={reel.id}
              className="relative h-[420px] w-[220px] shrink-0 snap-center overflow-hidden rounded-2xl bg-background"
            >
              <img
                src={reel.image}
                alt={reel.caption}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent p-4">
                <p className="font-serif text-sm text-surface">{reel.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UgcReels;
