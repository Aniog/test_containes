import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function BrandStory() {
  const ref = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (ref.current) {
        ImageHelper.loadImages(strkImgConfig, ref.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={ref} className="bg-sand py-20 md:py-28">
      <div className="mx-auto grid max-w-8xl grid-cols-1 items-center gap-10 px-5 md:grid-cols-2 md:gap-16 md:px-8">
        <div className="relative aspect-[4/5] overflow-hidden bg-ink">
          <div
            className="absolute inset-0"
            data-strk-bg-id="story-bg-velmora-3c4d"
            data-strk-bg="[story-text] gold jewelry craftsmanship atelier warm editorial"
            data-strk-bg-ratio="4x5"
            data-strk-bg-width="900"
          />
        </div>

        <div className="md:pl-6">
          <p className="text-[11px] font-medium uppercase tracking-[0.4em] text-gold">
            Our Story
          </p>
          <h2 className="mt-4 font-serif text-4xl font-light leading-tight text-ink md:text-5xl">
            Quiet luxury,
            <br />
            <span className="italic">made to last.</span>
          </h2>
          <p
            id="story-text"
            className="mt-6 max-w-md text-sm leading-relaxed text-stone md:text-base"
          >
            Velmora was founded on a simple belief: that beautiful, hand-finished
            gold jewelry should be accessible enough to wear every day, and
            considered enough to treasure for years. Each piece is crafted in
            small batches, finished by hand, and made to be lived in.
          </p>
          <Link
            to="/about"
            className="group mt-8 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest2 text-ink transition-colors hover:text-gold"
          >
            Read Our Story
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </section>
  )
}
