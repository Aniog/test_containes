import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { useStrkImages } from "@/hooks/useStrkImages"

export default function BrandStory() {
  const containerRef = useStrkImages([])

  return (
    <section ref={containerRef} className="bg-cream py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-2 md:gap-16 md:px-8">
        {/* Image */}
        <div className="relative aspect-[4/5] overflow-hidden bg-sand">
          <img
            alt="Velmora atelier craftsmanship"
            data-strk-img-id="story-img-velmora-2b8e51"
            data-strk-img="[story-text] gold jewelry craftsmanship atelier hands"
            data-strk-img-ratio="4x5"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="md:pl-4">
          <p className="text-xs uppercase tracking-[0.3em] text-champagne-deep">
            Our Story
          </p>
          <h2 className="mt-4 font-serif text-3xl leading-tight text-ink md:text-4xl">
            Jewelry made to be lived in, not locked away.
          </h2>
          <p id="story-text" className="mt-6 text-base leading-relaxed text-espresso">
            Velmora was founded on a simple belief: fine jewelry should be
            accessible, wearable, and deeply personal. Each piece is
            hand-finished in 18K gold plating over sterling silver, designed
            in our studio to move with you from morning to evening.
          </p>
          <p className="mt-4 text-base leading-relaxed text-espresso">
            We skip the traditional markups and the loud branding, so what
            you're left with is the quiet confidence of something beautifully
            made — at a price that lets you build a collection, not just own
            a single piece.
          </p>
          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-ink transition-colors duration-300 hover:text-champagne-deep"
          >
            Read Our Story
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
