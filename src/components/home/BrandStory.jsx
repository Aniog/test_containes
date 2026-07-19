import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { useStrkImages } from "@/hooks/useStrkImages"

export default function BrandStory() {
  const ref = useStrkImages([])

  return (
    <section ref={ref} className="bg-cream">
      <div className="mx-auto grid max-w-7xl items-stretch gap-0 px-6 py-20 md:grid-cols-2 md:px-10 md:py-28">
        {/* Image left */}
        <div className="relative aspect-[4/5] overflow-hidden bg-cream md:aspect-auto md:min-h-[560px]">
          <div
            className="absolute inset-0"
            data-strk-bg-id="story-bg-2b8e1f"
            data-strk-bg="[story-subtitle] [story-title]"
            data-strk-bg-ratio="4x5"
            data-strk-bg-width="900"
          />
        </div>
        {/* Text right */}
        <div className="flex flex-col justify-center px-2 py-12 md:px-16 md:py-16">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-gold">
            Our Story
          </p>
          <h2
            id="story-title"
            className="mt-4 font-serif text-4xl leading-tight text-espresso md:text-5xl"
          >
            Quiet luxury, made to be lived in.
          </h2>
          <p
            id="story-subtitle"
            className="mt-6 max-w-md text-sm leading-relaxed text-stone"
          >
            Velmora began with a simple belief: that fine jewelry should feel
            personal, not precious. Each piece is hand-finished in 18K gold
            plate over sterling silver, hypoallergenic and made to move with
            you — from morning coffee to candlelit dinners.
          </p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-stone">
            We design in small, considered collections, so every detail earns
            its place. No noise. No compromise. Just gold, worn your way.
          </p>
          <Link
            to="/about"
            className="group mt-8 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-espresso transition-colors hover:text-gold"
          >
            Read Our Story
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
