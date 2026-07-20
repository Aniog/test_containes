import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function About() {
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
    <div ref={ref} className="bg-cream pt-28 md:pt-32">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden bg-ink">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-hero-bg-5e6f"
          data-strk-bg="[about-hero-text] gold jewelry atelier craftsmanship warm editorial"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-ink/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.4em] text-champagne">
            Our Story
          </p>
          <h1
            id="about-hero-text"
            className="mt-4 max-w-3xl font-serif text-5xl font-light text-cream md:text-7xl"
          >
            Crafted with intention
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-20 md:py-28">
        <div className="space-y-6 text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.4em] text-gold">
            Est. 2021
          </p>
          <h2 className="font-serif text-4xl font-light text-ink md:text-5xl">
            Quiet luxury, made to last
          </h2>
          <div className="mx-auto h-px w-12 bg-gold" />
        </div>
        <div className="mt-10 space-y-6 text-sm leading-relaxed text-stone md:text-base">
          <p>
            Velmora was founded on a simple belief: that beautiful, hand-finished
            gold jewelry should be accessible enough to wear every day, and
            considered enough to treasure for years.
          </p>
          <p>
            Each piece is designed in-house and crafted in small batches by
            skilled artisans, using 18K gold plating over brass and hand-set
            crystals. We obsess over the details — the weight of a huggie, the
            curve of an ear cuff, the drape of a chain — so that every piece
            feels as good as it looks.
          </p>
          <p>
            We believe in honest pricing, responsible materials, and jewelry
            that becomes part of your story. No markups for markup's sake. No
            throwaway trends. Just pieces made to be lived in, layered, and
            loved for years to come.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {[
            { title: 'Hand-Finished', text: 'Every piece finished by hand in small batches.' },
            { title: 'Hypoallergenic', text: 'Nickel-free and gentle on sensitive skin.' },
            { title: 'Responsibly Made', text: 'Recyclable materials and ethical sourcing.' },
          ].map((item) => (
            <div key={item.title} className="text-center">
              <h3 className="font-serif text-xl uppercase tracking-widest2 text-ink">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-stone">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/shop"
            className="inline-flex items-center justify-center bg-gold px-9 py-4 text-xs font-medium uppercase tracking-widest2 text-ink transition-colors hover:bg-gold-soft"
          >
            Shop the Collection
          </Link>
        </div>
      </section>
    </div>
  )
}
