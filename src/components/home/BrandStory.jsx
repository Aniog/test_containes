import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { useStrkImages, StrkImage } from "@/components/ui/StrkImage"

export default function BrandStory() {
  const ref = useStrkImages([])

  return (
    <section ref={ref} className="py-20 md:py-28 bg-sand">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden bg-ink">
            <StrkImage
              imgId="brand-story-velmora-02"
              query="[story-heading] [story-body] gold jewelry craftsmanship editorial"
              ratio="4x5"
              width={800}
              alt="Velmora craftsmanship"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:pl-6">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">
              Our Story
            </p>
            <h2
              id="story-heading"
              className="font-serif text-4xl md:text-5xl text-ink leading-tight mb-6"
            >
              Jewelry made to be lived in
            </h2>
            <p id="story-body" className="text-stone leading-relaxed mb-5">
              Velmora was founded on a simple belief: that fine jewelry shouldn't
              be reserved for special occasions. We design demi-fine pieces in
              18K gold plating — accessible enough for everyday, refined enough
              to treasure.
            </p>
            <p className="text-stone leading-relaxed mb-8">
              Every piece is hand-finished by skilled artisans, hypoallergenic,
              and made to last. No middlemen, no markups — just beautifully made
              jewelry, delivered to you.
            </p>
            <Link
              to="/about"
              className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-ink border-b border-ink pb-1 hover:text-gold hover:border-gold transition-colors"
            >
              Read Our Story
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
