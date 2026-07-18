import { reels } from '@/data/products'
import StrkImage from '@/components/StrkImage'
import { useImageLoader } from '@/hooks/useImageLoader'

export default function ReelStrip() {
  const containerRef = useImageLoader([])
  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-cream">
      <div className="max-w-8xl mx-auto px-6 md:px-10 mb-10">
        <div className="text-center">
          <p className="text-xs uppercase tracking-widest2 text-gold mb-3">As Worn</p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink">On Our Community</h2>
        </div>
      </div>

      <div
        className="flex gap-4 md:gap-6 overflow-x-auto no-scrollbar px-6 md:px-10 pb-4 snap-x snap-mandatory"
      >
        {reels.map((reel) => (
          <div
            key={reel.id}
            className="relative shrink-0 w-[230px] md:w-[280px] aspect-[9x16] overflow-hidden bg-ink snap-start group"
          >
            <StrkImage
              imgId={reel.imgId}
              query={`[reel-${reel.id}-caption]`}
              ratio="9x16"
              width={560}
              alt={reel.caption}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            <p
              id={`reel-${reel.id}-caption`}
              className="absolute bottom-5 left-5 right-5 font-serif text-lg italic text-ivory leading-snug"
            >
              {reel.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
