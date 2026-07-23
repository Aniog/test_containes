import { Link } from "react-router-dom"
import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

export default function BrandStory() {
  const ref = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <section ref={ref} className="bg-sand">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="relative aspect-[4/5] overflow-hidden bg-ink-100 reveal">
            <div
              className="absolute inset-0"
              data-strk-bg-id="story-bg-2c8e1a"
              data-strk-bg="[story-text] [story-eyebrow] gold jewelry craftsmanship studio warm"
              data-strk-bg-ratio="4x5"
              data-strk-bg-width="800"
            />
          </div>
          <div className="reveal">
            <p id="story-eyebrow" className="text-xs uppercase tracking-widest3 text-gold mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink-800 leading-tight">
              Made for the everyday,
              <br />
              <span className="italic">treasured for a lifetime.</span>
            </h2>
            <p id="story-text" className="mt-6 text-ink-600 leading-relaxed">
              Velmora began with a simple belief: that beautiful, well-made gold
              jewelry shouldn't be reserved for special occasions. Each piece is
              designed in our studio and finished in 18K gold plate, crafted to be
              worn, layered, and lived in — then passed on to someone you love.
            </p>
            <p className="mt-4 text-ink-600 leading-relaxed">
              We work in small batches, with materials chosen to be kind to skin
              and to last. No markups for the sake of it. Just considered design,
              honest pricing, and pieces made to be treasured.
            </p>
            <Link
              to="/about"
              className="inline-block mt-8 text-xs uppercase tracking-widest2 border-b border-gold text-ink-800 pb-1 hover:text-gold transition-colors"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
