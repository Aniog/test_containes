import { Link } from "react-router-dom"
import StrkImage from "@/components/ui/StrkImage"
import { useStrkImages } from "@/hooks/useStrkImages"

export default function BrandStory() {
  const ref = useStrkImages([])

  return (
    <section ref={ref} className="py-20 md:py-28 bg-espresso text-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="relative aspect-[4/5] overflow-hidden bg-ink">
          <StrkImage
            imgId="brand-story-img-3c1f"
            query="[story-title] [story-body]"
            ratio="4x5"
            width={800}
            alt="Velmora atelier"
          />
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.25em] text-gold mb-4">
            Est. in Studio
          </p>
          <h2
            id="story-title"
            className="font-serif text-4xl md:text-5xl font-light leading-tight"
          >
            Modern Heirlooms,
            <br />
            Quietly Made
          </h2>
          <p
            id="story-body"
            className="mt-6 text-stone-light leading-relaxed max-w-md"
          >
            Velmora began with a simple belief: fine jewelry should be worn, not
            locked away. We design each piece in our studio and finish it in 18K
            gold over sterling silver — the warmth of fine jewelry, made for
            everyday life. No markups for marble showrooms, no compromise on craft.
          </p>
          <div className="mt-8">
            <Link
              to="/about"
              className="inline-block border border-cream/40 text-cream px-8 py-3.5 text-[11px] uppercase tracking-[0.2em] font-medium hover:bg-gold hover:border-gold transition-colors"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
