import React from 'react';

const reels = [
  { id: 1, imgId: 'reel-1', captionId: 'reel-caption-1', caption: 'Golden hour glow' },
  { id: 2, imgId: 'reel-2', captionId: 'reel-caption-2', caption: 'Layered necklaces' },
  { id: 3, imgId: 'reel-3', captionId: 'reel-caption-3', caption: 'Huggie moment' },
  { id: 4, imgId: 'reel-4', captionId: 'reel-caption-4', caption: 'Ear cuff edit' },
  { id: 5, imgId: 'reel-5', captionId: 'reel-caption-5', caption: 'Gift ready' },
];

const ReelsRow = () => {
  return (
    <section className="bg-brand-bg py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-widest text-brand-accent mb-2">@Velmora</p>
          <h2 id="reels-section-title" className="font-serif text-3xl md:text-4xl text-brand-ink">As Worn By You</h2>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {reels.map((reel) => (
            <div
              key={reel.id}
              className="relative h-[420px] w-[220px] flex-shrink-0 snap-start overflow-hidden rounded-sm"
            >
              <img
                data-strk-img-id={reel.imgId}
                data-strk-img={`[${reel.captionId}] [reels-section-title]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
                alt={reel.caption}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <p id={reel.captionId} className="absolute bottom-4 left-4 right-4 font-serif text-sm text-white/90">{reel.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReelsRow;
