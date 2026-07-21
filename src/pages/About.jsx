import {useRef, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { PLACEHOLDER } from '@/components/ui/Button'
import Button from '@/components/ui/Button'

export default function About() {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, node)
    })
    return () => window.cancelAnimationFrame(frameId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div ref={ref} className="bg-ivory pt-24 md:pt-28">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-hero-bg-9d2e1f"
          data-strk-bg="[about-hero-sub] [about-hero-title] gold jewelry atelier studio warm editorial"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-espresso/45" />
        <div className="relative h-full max-w-8xl mx-auto px-6 md:px-10 flex flex-col justify-end pb-14">
          <p id="about-hero-title" className="text-[11px] uppercase tracking-widest3 text-ivory/80 mb-4">
            Our Story
          </p>
          <h1 className="font-serif text-ivory text-5xl md:text-7xl leading-tight max-w-2xl">
            Quiet luxury, <span className="italic text-gold-soft">made to last.</span>
          </h1>
          <p id="about-hero-sub" className="mt-5 text-ivory/85 max-w-md">
            Demi-fine gold jewelry, designed in studio and made for everyday.
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <p className="text-[11px] uppercase tracking-widest3 text-gold mb-4">
            Est. with intention
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink leading-tight">
            We believe fine-feel jewelry shouldn’t require a fine-jewelry price.
          </h2>
          <div className="mt-8 space-y-5 text-ink/80 leading-relaxed text-base md:text-lg">
            <p>
              Velmora began with a simple frustration: beautiful, warm gold
              jewelry was either prohibitively expensive or cheaply made and
              quick to tarnish. We set out to build the in-between — pieces with
              the weight, warmth, and finish of fine jewelry, at a price that
              invites everyday wear.
            </p>
            <p>
              Each piece is 18K gold-plated over solid brass, hypoallergenic and
              nickel-free by design, and finished by hand. We design in small,
              considered collections — never trend-chasing, always made to layer,
              stack, and treasure for years.
            </p>
            <p>
              From the studio to your jewelry box, every step is considered:
              recycled materials where possible, plastic-free packaging, and a
              30-day return promise because we want you to love what you wear.
            </p>
          </div>

          <div className="mt-12">
            <Button as={Link} to="/shop" variant="outline">
              Explore the Collection
            </Button>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-cream py-20 md:py-24">
        <div className="max-w-8xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { t: 'Made by hand', d: 'Every piece is hand-finished for a warmth that reads as quietly expensive.' },
            { t: 'Made to last', d: '18K gold plating over solid brass, hypoallergenic and nickel-free.' },
            { t: 'Made responsibly', d: 'Recycled materials where possible, plastic-free packaging, easy returns.' },
          ].map((v) => (
            <div key={v.t} className="text-center">
              <h3 className="font-serif text-2xl text-ink mb-3">{v.t}</h3>
              <p className="text-sand leading-relaxed">{v.d}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
