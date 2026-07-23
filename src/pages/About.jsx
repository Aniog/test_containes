import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

export default function About() {
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
    <div ref={ref} className="bg-cream">
      <section className="relative flex h-[60vh] min-h-[400px] items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-hero-3c"
          data-strk-bg="[about-hero-sub] [about-hero-title] gold jewelry atelier craftsmanship warm"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-ink/50" />
        <div className="relative z-10 px-5 text-center">
          <p className="text-[11px] uppercase tracking-widest2 text-gold-soft">
            Est. with intention
          </p>
          <h1
            id="about-hero-title"
            className="mt-4 font-serif text-4xl text-cream md:text-6xl"
          >
            Our Story
          </h1>
          <p
            id="about-hero-sub"
            className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-cream/80"
          >
            Fine-quality gold jewelry, made to be lived in.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-20 md:px-8 md:py-28">
        <div className="prose prose-stone max-w-none">
          <p className="text-[11px] uppercase tracking-widest2 text-gold">
            The Velmora Philosophy
          </p>
          <h2 className="mt-3 font-serif text-3xl text-ink md:text-4xl">
            Quietly luxurious, endlessly wearable
          </h2>
          <p className="mt-6 text-base leading-relaxed text-stone">
            Velmora began with a simple belief: that fine-quality gold jewelry
            should be accessible enough to wear every day, not just on special
            occasions. Each piece is designed in our studio and hand-finished
            in 18K gold plating over sterling silver, using hypoallergenic
            materials that feel as good as they look.
          </p>
          <p className="mt-4 text-base leading-relaxed text-stone">
            From the first sketch to the final polish, we obsess over the
            details - the weight of a huggie, the curve of an ear cuff, the way
            light moves across a filigree drop. The result is jewelry you reach
            for again and again.
          </p>
          <p className="mt-4 text-base leading-relaxed text-stone">
            We believe in transparent pricing, ethical materials, and pieces
            that earn a permanent place in your collection. No noise, no
            shortcuts - just jewelry crafted to be treasured.
          </p>
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/shop"
            className="inline-flex bg-gold px-10 py-4 text-xs uppercase tracking-widest2 text-ink transition-colors hover:bg-gold-deep hover:text-cream"
          >
            Explore the Collection
          </Link>
        </div>
      </section>
    </div>
  )
}
