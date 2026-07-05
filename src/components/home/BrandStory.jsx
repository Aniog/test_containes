import { Link } from "react-router-dom"
import { StrkBackground } from "@/components/ui/StrkImage"
import { useStrkImages } from "@/hooks/useStrkImages"

export default function BrandStory() {
  const ref = useStrkImages([])

  return (
    <section ref={ref} className="py-20 md:py-28 bg-sand">
      <div className="mx-auto max-w-content px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="relative aspect-[4/5] overflow-hidden bg-ink">
            <StrkBackground
              bgId="story-bg-velmora-3c4d"
              query="[story-body] [story-title]"
              ratio="4x5"
              width={900}
              className="absolute inset-0"
            />
          </div>

          <div className="md:pl-6">
            <p className="text-[11px] uppercase tracking-widest2 text-gold mb-4">
              Our Story
            </p>
            <h2
              id="story-title"
              className="font-serif text-4xl md:text-5xl leading-tight"
            >
              Quiet luxury, made to be lived in.
            </h2>
            <p id="story-body" className="mt-6 text-base text-muted leading-relaxed">
              Velmora was founded on a simple belief: that fine jewelry should
              be worn, not locked away. Each piece is crafted in 18K gold plate
              over a hypoallergenic base, finished by hand, and made to move
              with you — from morning coffee to evening light.
            </p>
            <p className="mt-4 text-base text-muted leading-relaxed">
              We design in small, considered collections so every detail earns
              its place. No noise, no trends — just warm gold, made to treasure.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center text-[11px] uppercase tracking-widest2 text-ink border-b border-ink pb-1 hover:text-gold hover:border-gold transition-colors"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
