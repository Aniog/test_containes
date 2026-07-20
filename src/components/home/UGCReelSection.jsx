import { useImageLoader } from '@/hooks/useImageLoader';

const reels = [
  { id: 'reel-1', caption: 'A little light, a lot of gold' },
  { id: 'reel-2', caption: 'Daily ritual' },
  { id: 'reel-3', caption: 'Gifted to myself' },
  { id: 'reel-4', caption: 'Date night stack' },
  { id: 'reel-5', caption: 'Quiet luxury' },
  { id: 'reel-6', caption: 'Made to mix' },
];

export function UGCReelSection() {
  const sectionId = 'ugc-reel';
  const ref = useImageLoader([]);

  return (
    <section ref={ref} className="py-16 md:py-24 bg-cream overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 mb-8 md:mb-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-extra-wide text-muted mb-3">@velmorafine</p>
            <h2
              id={`${sectionId}-title`}
              className="font-serif text-3xl md:text-4xl font-light text-foreground"
            >
              Styled by You
            </h2>
          </div>
          <p className="text-sm text-muted">Tag us to be featured.</p>
        </div>
      </div>

      <div className="pl-6 md:pl-10">
        <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-4 pr-6">
          {reels.map((reel, index) => (
            <div
              key={reel.id}
              className="relative flex-shrink-0 w-[200px] md:w-[260px] aspect-[9/16] bg-foreground group overflow-hidden"
            >
              <img
                data-strk-img-id={`ugc-${reel.id}`}
                data-strk-img={`[${reel.id}-caption] [${sectionId}-title]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="500"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={`Customer reel ${index + 1}`}
                className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
              <p
                id={`${reel.id}-caption`}
                className="absolute bottom-5 left-5 right-5 font-serif text-lg md:text-xl text-white leading-snug"
              >
                {reel.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
