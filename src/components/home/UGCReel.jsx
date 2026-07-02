import { StrkImg } from '@/components/ui/StrkImg';

const REELS = [
  { id: 'reel-1', caption: 'Layered for brunch' },
  { id: 'reel-2', caption: 'Office-to-evening' },
  { id: 'reel-3', caption: 'Weekend stack' },
  { id: 'reel-4', caption: 'Gift ready' },
  { id: 'reel-5', caption: 'Self-love ritual' },
  { id: 'reel-6', caption: 'Golden hour' },
];

export function UGCReel() {
  return (
    <section className="bg-velmora-cream py-20">
      <div className="mx-auto mb-10 max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <span className="mb-3 block font-sans text-xs font-medium uppercase tracking-[0.28em] text-velmora-gold">
          @velmorajewelry
        </span>
        <h2 className="font-serif text-4xl text-velmora-base sm:text-5xl">
          How You Wear It
        </h2>
      </div>

      <div className="scrollbar-hide flex gap-4 overflow-x-auto px-4 pb-4 sm:px-6 lg:px-8">
        {REELS.map((reel, index) => (
          <div
            key={reel.id}
            className="relative h-[420px] w-[260px] flex-shrink-0 overflow-hidden bg-velmora-cream-dark sm:h-[480px] sm:w-[300px]"
          >
            <StrkImg
              id={reel.id}
              query={`[reel-caption-${index}] gold jewelry on model ear neck`}
              ratio="9x16"
              width={600}
              alt={reel.caption}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-velmora-base/60 via-transparent to-transparent" />
            <p
              id={`reel-caption-${index}`}
              className="absolute bottom-5 left-5 right-5 font-serif text-xl italic text-white"
            >
              {reel.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
