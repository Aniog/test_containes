import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { makeStrkImageLoaderRef } from "@/components/ui/StrkImage"

const BRAND_STORY_IMG_ID = "brand-story-atelier"

export default function BrandStory() {
  return (
    <section ref={makeStrkImageLoaderRef()} className="bg-cream-50 py-20 md:py-28">
      <div className="mx-auto max-w-editorial px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="md:col-span-6 order-2 md:order-1">
            <div className="relative aspect-[4/5] bg-cream-200 overflow-hidden">
              <img
                data-strk-img-id={BRAND_STORY_IMG_ID}
                data-strk-img="[brand-story-body] [brand-story-title]"
                data-strk-img-ratio="4x5"
                data-strk-img-width="1000"
                alt="Velmora atelier"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="hidden md:block mt-3 text-[11px] uppercase tracking-widest2 text-ink-muted">
              Est. 2019 · New York
            </div>
          </div>

          <div className="md:col-span-6 order-1 md:order-2">
            <p className="eyebrow">Our Story</p>
            <h2
              id="brand-story-title"
              className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl text-espresso-800 leading-[1.05] text-balance"
            >
              Made slowly.<br />
              <span className="italic">Worn</span> for years.
            </h2>
            <p
              id="brand-story-body"
              className="mt-6 text-ink-muted text-base md:text-lg leading-relaxed max-w-xl text-pretty"
            >
              Velmora began with a single question — why should fine gold jewelry
              cost a season's rent? We craft demi-fine pieces in small batches
              with the same hand techniques as the houses four times our price,
              then pass the savings to you. The result: 18K gold plated jewelry
              that doesn't look, or feel, like a compromise.
            </p>
            <p className="mt-4 text-ink-muted text-base md:text-lg leading-relaxed max-w-xl text-pretty">
              Every piece is hypoallergenic, tarnish-resistant, and made to be
              worn daily — to the office, the wedding, the Tuesday afternoon.
            </p>
            <Link
              to="/about"
              className="mt-8 link-underline inline-flex items-center gap-2"
            >
              Our Story
              <ArrowRight className="h-3 w-3" strokeWidth={1.6} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
