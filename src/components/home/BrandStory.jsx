import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

export default function BrandStory() {
  const ref = useRef(null)
  useEffect(() => {
    let cancelled = false
    ;(async () => {
      try {
        const mod = await import("@strikingly/sdk")
        const cfgMod = await import("@/strk-img-config.json")
        if (cancelled) return
        if (mod?.ImageHelper?.loadImages) {
          mod.ImageHelper.loadImages(cfgMod.default || cfgMod, ref.current)
        }
      } catch (e) {}
    })()
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <section ref={ref} className="bg-sand">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[560px]">
          <img
            alt="Founder of Velmora in studio"
            data-strk-img-id="home-story-img-77b1"
            data-strk-img="[home-story-title] velmora fine jewelry founder studio gold"
            data-strk-img-ratio="4x5"
            data-strk-img-width="1100"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="flex items-center px-6 py-16 md:px-16 md:py-24 lg:px-24">
          <div className="max-w-lg">
            <span className="eyebrow">Our Story</span>
            <h2
              id="home-story-title"
              className="h-section mt-3 text-4xl text-espresso md:text-5xl"
            >
              Made slowly, in <em className="not-italic text-gold">small</em>{" "}
              batches.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-taupe md:text-lg">
              Velmora began with a single pair of huggies — a gift, a question,
              a small studio in Lisbon. We design each piece to feel like an
              heirloom from the first time you put it on, finished in 18K gold
              over brass, made to wear daily.
            </p>
            <p className="mt-4 text-base leading-relaxed text-taupe md:text-lg">
              No fast fashion. No loud logos. Just considered jewelry, made by
              people we know by name.
            </p>
            <Link to="/about" className="btn-ghost mt-8">
              Read Our Story
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
