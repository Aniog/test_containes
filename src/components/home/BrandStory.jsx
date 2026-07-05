import { Link } from "react-router-dom"
import { useStrkImages } from "@/lib/useStrkImages"

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E"

export default function BrandStory() {
  const ref = useStrkImages([])

  return (
    <section ref={ref} className="py-20 md:py-28 bg-sand">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image left */}
          <div className="relative aspect-[4/5] overflow-hidden bg-ink">
            <img
              alt="Velmora atelier — hand-finishing gold jewelry"
              data-strk-img-id="story-img-velmora-3b8c1d"
              data-strk-img="[story-text] [story-title] gold jewelry atelier craftsmanship"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src={PLACEHOLDER}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text right */}
          <div className="md:pl-6">
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-4">
              Our Story
            </p>
            <h2
              id="story-title"
              className="font-serif text-3xl md:text-4xl text-ink leading-tight"
            >
              Made by hand,
              <br />
              <span className="italic">made to last.</span>
            </h2>
            <p
              id="story-text"
              className="mt-6 text-stone text-base leading-relaxed"
            >
              Velmora began in a small studio with a simple belief: that
              beautiful, lasting gold jewelry should be within reach. Every
              piece is hand-finished in 18K gold plating over sterling silver,
              hypoallergenic by design, and made to be worn — not saved for
              special occasions.
            </p>
            <p className="mt-4 text-stone text-base leading-relaxed">
              From the first sketch to the final polish, we obsess over the
              details you feel but may never see: the tension of a hinge, the
              weight of a drop, the warmth of the gold.
            </p>
            <div className="mt-8">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-ink text-xs uppercase tracking-[0.2em] font-medium border-b border-ink pb-1 hover:text-gold hover:border-gold transition-colors duration-300"
              >
                Read Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
