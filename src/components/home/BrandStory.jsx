import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function BrandStory() {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, node)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={ref} className="py-20 md:py-28 bg-cream">
      <div className="max-w-8xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image left */}
          <div className="relative aspect-[4x5] overflow-hidden bg-espresso order-1">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E"
              alt="Velmora atelier"
              data-strk-img-id="brand-story-img-3d8f1a"
              data-strk-img="[brand-story-text] [brand-story-title] gold jewelry atelier craftsmanship warm editorial"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text right */}
          <div className="order-2 md:pl-6">
            <p className="text-[11px] uppercase tracking-widest2 text-champagne mb-4">
              Our Story
            </p>
            <h2
              id="brand-story-title"
              className="font-serif text-4xl md:text-5xl text-ink leading-tight"
            >
              Quiet luxury,
              <br />
              made to last.
            </h2>
            <p
              id="brand-story-text"
              className="mt-6 text-base text-stone leading-relaxed"
            >
              Velmora was founded on a simple belief: that fine-quality gold
              jewelry should be part of every day, not reserved for special
              occasions. We work in 18K gold plate over sterling silver,
              finishing each piece by hand to achieve a warmth and weight that
              feels genuinely luxurious — at a price that invites you to wear
              it, gift it, and live in it.
            </p>
            <p className="mt-4 text-base text-stone leading-relaxed">
              Every design is hypoallergenic, nickel-free and made to be
              treasured for years.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center mt-8 border border-ink text-ink hover:bg-ink hover:text-ivory transition-colors px-8 py-4 text-xs uppercase tracking-widest2 font-medium rounded-sm"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
