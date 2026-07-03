import { Link } from "react-router-dom"
import { useStrkImages } from "@/hooks/useStrkImages"

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function BrandStory() {
  const ref = useStrkImages([])

  return (
    <section ref={ref} className="py-20 md:py-28 bg-cream-soft">
      <div className="mx-auto max-w-8xl px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden bg-ink order-1">
            <img
              src={PLACEHOLDER}
              alt="Velmora jewelry craftsmanship"
              data-strk-img-id="story-img-velmora-7g3h"
              data-strk-img="[story-body] [story-title] gold jewelry craftsmanship atelier hands"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="order-2 md:pl-4">
            <p className="text-[11px] uppercase tracking-[0.3em] text-stone mb-4">
              Our Story
            </p>
            <h2
              id="story-title"
              className="font-serif text-4xl md:text-5xl text-ink leading-tight"
            >
              Jewelry Made to Be
              <br />
              <em className="italic">Lived In</em>
            </h2>
            <p
              id="story-body"
              className="mt-6 text-stone leading-relaxed text-base md:text-[17px]"
            >
              Velmora began with a simple belief: that fine-quality gold jewelry
              should be part of every day, not saved for special occasions. We
              design each piece in our studio and finish it in 18K gold plate,
              made to layer, stack and wear from morning to night.
            </p>
            <p className="mt-4 text-stone leading-relaxed text-base md:text-[17px]">
              Every detail — from the hypoallergenic base to the signature gift
              box — is considered, so the only thing you have to think about is
              how to wear it.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-block text-[11px] uppercase tracking-[0.3em] text-ink border-b border-gold pb-1 hover:text-gold transition-colors"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
