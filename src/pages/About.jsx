import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import Button from '@/components/ui/Button'

export default function About() {
  const ref = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={ref} className="pt-24 md:pt-28">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[360px] overflow-hidden bg-ink">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-hero-3c9f2a"
          data-strk-bg="[about-hero-sub] [about-hero-title] gold jewelry atelier craftsmanship warm editorial"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-ink/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
          <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-ivory/80 mb-4">
            Est. for the Everyday
          </p>
          <h1 id="about-hero-title" className="font-serif text-5xl md:text-6xl text-ivory">
            Our Story
          </h1>
          <p id="about-hero-sub" className="mt-4 text-ivory/80 font-light max-w-lg">
            Quiet luxury, honestly priced.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-ivory">
        <div className="mx-auto max-w-3xl px-6 md:px-10 text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-ink leading-tight">
            Fine-Feeling Jewelry, Without the Fine-Jewelry Markup
          </h2>
          <div className="mx-auto mt-6 h-px w-16 bg-sand" />
          <p className="mt-8 text-base text-charcoal font-light leading-relaxed">
            Velmora was founded on a simple belief: beautiful, lasting jewelry should not require
            an inflated price tag. By working directly with our ateliers and finishing each piece
            in genuine 18K gold over sterling silver, we deliver demi-fine quality at an accessible
            price. No middlemen. No markups. Only pieces crafted to be treasured.
          </p>
          <p className="mt-6 text-base text-charcoal font-light leading-relaxed">
            Every design begins with a sketch and ends in your hands — hypoallergenic,
            tarnish-resistant, and made to be worn every single day.
          </p>
          <div className="mt-10">
            <Button as={Link} to="/shop" variant="primary" size="md">
              Shop the Collection
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
