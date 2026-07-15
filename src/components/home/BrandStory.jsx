import { Link } from "react-router-dom"
import { useStrkImages } from "@/lib/useStrkImages"

export default function BrandStory() {
  const ref = useStrkImages([])

  return (
    <section ref={ref} className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden bg-sand">
            <img
              data-strk-img-id="brand-story-img-velmora-2c8e"
              data-strk-img="[brand-story-text] [brand-story-eyebrow] gold jewelry craftsmanship atelier hands"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora atelier"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:pl-6">
            <p
              id="brand-story-eyebrow"
              className="text-xs uppercase tracking-widest2 text-champagne mb-4"
            >
              Our Story
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink leading-tight mb-6">
              Jewelry made to be lived in.
            </h2>
            <p
              id="brand-story-text"
              className="text-stone leading-relaxed mb-5"
            >
              Velmora was founded on a simple belief: that fine-quality gold
              jewelry shouldn't be reserved for special occasions. We design
              demi-fine pieces in our studio and finish each one by hand,
              pairing 18K gold plating with hypoallergenic sterling silver
              cores.
            </p>
            <p className="text-stone leading-relaxed mb-8">
              The result is jewelry with the warmth and weight of luxury, at a
              price that lets you wear it every day — and gift it without
              hesitation.
            </p>
            <Link
              to="/about"
              className="inline-block text-xs uppercase tracking-widest2 text-ink border-b border-ink pb-1 hover:text-champagne hover:border-champagne transition-colors"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
