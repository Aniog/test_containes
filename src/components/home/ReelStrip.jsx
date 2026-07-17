import { UGC_REELS } from '@/data/products'
import SectionHeading from '@/components/ui/SectionHeading'

export default function ReelStrip() {
  return (
    <section className="bg-velmora-paper py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="As Seen On You" subtitle="@velmorafine" />
      </div>
      <div className="hide-scrollbar flex gap-4 overflow-x-auto px-4 pb-2 pt-2 sm:px-6 lg:px-8">
        {UGC_REELS.map((reel) => (
          <div
            key={reel.id}
            className="group relative aspect-[9/16] w-40 flex-shrink-0 overflow-hidden rounded-sm sm:w-52"
          >
            <img
              src={reel.image}
              alt={reel.caption}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <p className="absolute bottom-4 left-4 right-4 font-serif text-lg italic text-white">
              {reel.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
