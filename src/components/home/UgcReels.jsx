import React from 'react';

const reels = [
  { id: 1, handle: '@sophia.wears', caption: 'My new everyday stack ✨' },
  { id: 2, handle: '@emma.loves.gold', caption: 'Gifting season sorted' },
  { id: 3, handle: '@olivia.daily', caption: 'Quiet luxury, loud impact' },
  { id: 4, handle: '@chloe.jewelry', caption: 'Layered just right' },
  { id: 5, handle: '@mia.style', caption: 'From desk to dinner' },
];

const UgcReels = () => {
  return (
    <section className="section-container py-16 md:py-24">
      <div className="flex items-end justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">As seen on</p>
          <h2 className="mt-2 font-serif text-3xl text-ink md:text-4xl">The Velmora Edit</h2>
        </div>
        <p className="hidden text-sm text-ink-secondary md:block">Tag @velmora to be featured</p>
      </div>

      <div className="mt-8 flex gap-4 overflow-x-auto pb-4 md:gap-6">
        {reels.map((reel) => (
          <div key={reel.id} className="relative h-[420px] w-[260px] flex-shrink-0 overflow-hidden rounded-2xl bg-ink md:h-[520px] md:w-[300px]">
            <img
              src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80"
              alt=""
              className="h-full w-full object-cover opacity-80"
              loading="lazy"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5">
              <p className="text-xs font-medium text-white/80">{reel.handle}</p>
              <p className="mt-1 font-serif text-base text-white">{reel.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UgcReels;
