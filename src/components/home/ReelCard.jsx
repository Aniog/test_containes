import React from 'react';

const ReelCard = ({ reel }) => {
  return (
    <div className="relative h-[420px] w-[220px] flex-shrink-0 snap-start overflow-hidden rounded-2xl bg-brand-dark">
      <img
        data-strk-img-id={`reel-${reel.id}-img-8f2a9c`}
        data-strk-img={`[reel-${reel.id}-title] [reel-${reel.id}-subtitle]`}
        data-strk-img-ratio="9x16"
        data-strk-img-width="600"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        alt={reel.title}
        className="h-full w-full object-cover opacity-90"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-4">
        <p id={`reel-${reel.id}-title`} className="font-serif text-lg text-white">{reel.title}</p>
        <p id={`reel-${reel.id}-subtitle`} className="mt-1 text-xs text-white/70">{reel.subtitle}</p>
      </div>
    </div>
  );
};

export default ReelCard;
