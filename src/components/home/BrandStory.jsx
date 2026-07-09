import { Link } from "react-router-dom"
import { useStrkImages } from "@/lib/useStrkImages"


export default function BrandStory() {
  const ref = useStrkImages([])

  return (
    <section ref={ref} className="bg-cream">
      <div className="mx-auto grid max-w-8xl items-stretch gap-0 px-5 py-20 md:grid-cols-2 md:px-8 md:py-28">
        {/* Image */}
        <div className="relative aspect-[4/5] overflow-hidden bg-sand/40 md:aspect-auto">
          <img
            alt="Velmora atelier — gold jewelry craftsmanship"
            data-strk-img-id="story-atelier-velmora-9d3f"
            data-strk-img="[story-eyebrow] [story-title] [story-body] gold jewelry craftsmanship atelier"
            data-strk-img-ratio="4x5"
            data-strk-img-width="900"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col justify-center px-0 py-12 md:px-16 md:py-20">
          <p id="story-eyebrow" className="text-[11px] uppercase tracking-widest3 text-taupe">
            Our Story
          </p>
          <h2
            id="story-title"
            className="mt-4 font-serif text-4xl leading-tight text-ink md:text-5xl"
          >
            Jewelry made to be lived in.
          </h2>
          <p
            id="story-body"
            className="mt-6 max-w-md text-base leading-relaxed text-taupe"
          >
            Velmora began with a simple belief: fine jewelry shouldn't wait for
            special occasions. We craft demi-fine pieces in 18K gold plating,
            designed for the everyday and engineered to last. Every piece is
            hypoallergenic, ethically made, and finished by hand.
          </p>
          <div className="mt-8">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-widest2 text-ink transition-colors hover:text-gold"
            >
              Read Our Story
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
