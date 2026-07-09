import { Link } from "react-router-dom"
import { useStrkImages } from "@/hooks/useStrkImages"
import Reveal from "@/components/ui/Reveal"

export default function BrandStory() {
  const containerRef = useStrkImages([])

  return (
    <section ref={containerRef} className="bg-cream-deep">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-0 md:grid-cols-2">
        {/* Image left */}
        <Reveal className="relative aspect-[4/5] overflow-hidden md:aspect-[5/6]">
          <div
            className="absolute inset-0"
            data-strk-bg-id="story-bg-velmora-2c8e"
            data-strk-bg="[story-text] gold jewelry craftsmanship artisan hands at work warm editorial"
            data-strk-bg-ratio="4x5"
            data-strk-bg-width="900"
          />
        </Reveal>

        {/* Text right */}
        <Reveal className="px-6 py-16 md:px-16 md:py-24 lg:px-20">
          <p className="text-[11px] font-medium uppercase tracking-widest3 text-gold">
            Our Story
          </p>
          <h2 className="mt-4 font-serif text-4xl font-light leading-tight text-charcoal md:text-5xl">
            Jewelry with a quiet
            <br />
            sense of permanence
          </h2>
          <p id="story-text" className="mt-6 text-sm leading-relaxed text-stone md:text-base">
            Velmora was founded on a simple belief: that fine jewelry should be
            lived in, not locked away. Each piece is hand-finished in 18K gold
            plating over sterling silver, designed to age gracefully beside the
            moments it marks — from the everyday to the unforgettable.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-stone md:text-base">
            We work in small batches, with materials chosen for their warmth and
            wearability, so every piece feels considered, personal, and yours.
          </p>
          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-widest2 text-charcoal transition-colors hover:text-gold"
          >
            Read Our Story
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
