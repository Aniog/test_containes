import { useStrkImages } from '@/hooks/useStrkImages';
import { StrkImg } from '@/components/ui/StrkImg';
import { UGC_REELS } from '@/data/products';

export function ReelsSection() {
  const containerRef = useStrkImages();

  return (
    <section ref={containerRef} className="bg-velmora-cream py-16 md:py-24">
      <div className="mb-10 px-6 text-center">
        <p className="mb-3 font-display text-xs font-medium uppercase tracking-superwide text-velmora-gold-dark">
          Styled by You
        </p>
        <h2 className="font-serif text-4xl font-light text-velmora-espresso md:text-5xl">
          @velmora
        </h2>
      </div>

      <div className="hide-scrollbar flex gap-4 overflow-x-auto px-6 pb-4 md:gap-5">
        {UGC_REELS.map((reel) => (
          <article
            key={reel.id}
            className="relative h-[380px] w-[220px] flex-shrink-0 overflow-hidden md:h-[460px] md:w-[260px]"
          >
            <StrkImg
              id={reel.imageId}
              query={reel.query}
              ratio="9x16"
              width={500}
              alt={reel.caption}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
              <p id={`reel-caption-${reel.id}`} className="sr-only">
                {reel.caption}
              </p>
              <p className="font-serif text-lg font-light italic leading-snug">
                {reel.caption}
              </p>
              <p className="mt-2 font-display text-[10px] uppercase tracking-widest text-white/70">
                {reel.user}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
