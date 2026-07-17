import { Link } from 'react-router-dom'
import { useStrkImages, STRK_PLACEHOLDER } from '@/lib/useStrkImages'

export default function BrandStory() {
  const ref = useStrkImages([])

  return (
    <section ref={ref} className="bg-cream">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-0 md:grid-cols-2">
        {/* Image */}
        <div className="relative aspect-[4/5] overflow-hidden md:aspect-[4/5]">
          <img
            alt="Velmora atelier crafting gold jewelry"
            data-strk-img-id="story-img-velmora-3d4e"
            data-strk-img="[story-subtitle] [story-title] gold jewelry atelier craftsmanship hands close up warm"
            data-strk-img-ratio="4x5"
            data-strk-img-width="800"
            src={STRK_PLACEHOLDER}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="px-6 py-16 md:px-16 md:py-24">
          <p className="text-[11px] uppercase tracking-widest2 text-gold">Our Story</p>
          <h2
            id="story-title"
            className="mt-4 font-serif text-3xl leading-tight text-ink md:text-5xl"
          >
            Quiet luxury, <span className="italic">made to last</span>
          </h2>
          <p
            id="story-subtitle"
            className="mt-6 text-sm leading-relaxed text-taupe"
          >
            Velmora began with a simple belief: that beautiful, lasting gold
            jewelry should be part of every day, not saved for special occasions.
            Each piece is designed in our studio and finished in 18K gold plating
            over sterling silver — hypoallergenic, nickel-free, and made to be
            worn, layered, and treasured.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-taupe">
            From the first sketch to the keepsake box it arrives in, every detail
            is considered. Because the pieces you reach for every day deserve the
            same care as the ones you save for forever.
          </p>
          <Link
            to="/about"
            className="mt-8 inline-block border-b border-gold pb-1 text-[11px] uppercase tracking-widest2 text-ink transition-colors hover:text-gold"
          >
            Read Our Story
          </Link>
        </div>
      </div>
    </section>
  )
}
