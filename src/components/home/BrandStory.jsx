import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

export default function BrandStory() {
  const ref = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={ref} className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="relative aspect-[4/5] overflow-hidden">
            <div
              className="absolute inset-0"
              data-strk-bg-id="story-bg-velmora-1"
              data-strk-bg="[story-text] gold jewelry craftsmanship atelier warm"
              data-strk-bg-ratio="4x5"
              data-strk-bg-width={900}
            />
          </div>

          <div className="md:pl-6">
            <p className="text-[11px] uppercase tracking-widest3 text-gold mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink leading-tight">
              Made to be lived in,
              <br />
              <span className="italic">not locked away.</span>
            </h2>
            <p id="story-text" className="text-taupe mt-6 leading-relaxed">
              Velmora began with a simple belief: fine jewelry should be worn
              every day, not saved for special occasions. We work in demi-fine
              18K gold plating over sterling silver — the warmth and lustre of
              solid gold, designed for real life. Each piece is finished by hand
              and made to be treasured for years.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6 border-t border-sand pt-8">
              {[
                { n: "18K", l: "Gold Plated" },
                { n: "100%", l: "Hypoallergenic" },
                { n: "30-Day", l: "Easy Returns" },
              ].map((s) => (
                <div key={s.l}>
                  <p className="font-serif text-2xl md:text-3xl text-gold">{s.n}</p>
                  <p className="text-xs text-taupe mt-1 uppercase tracking-widest2">
                    {s.l}
                  </p>
                </div>
              ))}
            </div>
            <Link
              to="/about"
              className="inline-block mt-8 border border-ink text-ink text-xs uppercase tracking-widest2 font-medium px-8 py-3.5 hover:bg-ink hover:text-ivory transition-colors"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
