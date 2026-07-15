import { useImageLoader } from '@/hooks/useImageLoader';

const reels = [
  { id: 'reel-1', caption: 'Everyday gold', label: 'ear cuff' },
  { id: 'reel-2', caption: 'Layered moments', label: 'necklace' },
  { id: 'reel-3', caption: 'Soft light, bold glow', label: 'huggies' },
  { id: 'reel-4', caption: 'Treasured details', label: 'earrings' },
  { id: 'reel-5', caption: 'Gifted beautifully', label: 'gift set' },
];

export function UGCReel() {
  const containerRef = useImageLoader();

  return (
    <section ref={containerRef} className="bg-cream py-20 lg:py-28">
      <div className="mx-auto mb-10 max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-2 text-xs uppercase tracking-widest text-warmGray">@velmorajewelry</p>
        <h2 id="ugc-title" className="heading-md">Styled by You</h2>
      </div>

      <div className="scrollbar-hide flex gap-4 overflow-x-auto px-4 pb-4 sm:px-6 lg:px-8">
        {reels.map((reel) => (
          <div
            key={reel.id}
            className="relative w-[220px] flex-shrink-0 snap-start overflow-hidden rounded-sm sm:w-[260px]"
          >
            <div
              className="aspect-[9/16] w-full bg-ink/10"
              data-strk-bg-id={`ugc-bg-${reel.id}`}
              data-strk-bg={`[${reel.id}-caption] velmora jewelry ${reel.label}`}
              data-strk-bg-ratio="9x16"
              data-strk-bg-width="500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            <p
              id={`${reel.id}-caption`}
              className="absolute bottom-5 left-5 right-5 font-serif text-lg italic text-cream"
            >
              {reel.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
