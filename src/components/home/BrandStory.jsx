import { ArrowRight } from 'lucide-react'
import StrkImage from '@/components/common/StrkImage.jsx'

export default function BrandStory() {
  return (
    <section id="about" className="bg-velmora-ivory px-5 py-20 text-velmora-ink md:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
        <div className="relative">
          <div className="absolute -left-5 -top-5 hidden h-32 w-32 border border-velmora-champagne md:block" />
          <div className="relative aspect-[4/5] overflow-hidden bg-velmora-sand shadow-soft">
            <StrkImage
              id="brand-story-jewelry-making-c8f4a6"
              query="[brand-story-copy] [brand-story-title]"
              ratio="3x4"
              width="900"
              alt="Velmora gold jewelry detail"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="lg:pl-10">
          <p className="text-xs font-semibold uppercase tracking-widestLuxury text-velmora-gold">
            Our Story
          </p>
          <h2 id="brand-story-title" className="mt-5 font-serif text-5xl font-medium leading-tight text-velmora-ink md:text-7xl">
            Jewelry for the rituals you keep close.
          </h2>
          <p id="brand-story-copy" className="mt-7 text-base leading-8 text-velmora-taupe md:text-lg">
            Velmora creates demi-fine pieces with the warmth of heirlooms and the ease of everyday wear. Each design is edited for balance: luminous gold, skin-friendly finishes, and silhouettes that feel considered rather than ornate.
          </p>
          <p className="mt-5 text-base leading-8 text-velmora-taupe md:text-lg">
            Premium, accessible, and intentionally direct-to-consumer — made for gifting beautifully and buying for yourself without waiting for an occasion.
          </p>
          <a
            href="#journal"
            className="mt-9 inline-flex items-center gap-3 border-b border-velmora-gold pb-2 text-sm font-semibold uppercase tracking-widest text-velmora-ink transition hover:text-velmora-gold"
          >
            Read Our Story
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
