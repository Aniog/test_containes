import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import StrkImg from '@/components/ui/StrkImg'
import Reveal from '@/components/ui/Reveal'

const VALUES = [
  {
    title: 'Craft Above All',
    text: 'Every piece begins at the jeweler\u2019s bench. Small batches, hand-finishing, and stones set one at a time — never mass-produced.',
  },
  {
    title: 'Honest Materials',
    text: 'Recycled brass cores, thick 18K gold plating, nickel-free and hypoallergenic. Luxury you can wear against your skin, every day.',
  },
  {
    title: 'Accessible by Design',
    text: 'We sell directly to you — no middlemen, no traditional markups. Fine-jewelry feeling at $30–$120, always.',
  },
]

export default function About() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="pt-16 md:pt-20">
      <section className="relative flex min-h-[60vh] items-center overflow-hidden bg-espresso">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          data-strk-bg-id="about-hero-bg-1a2b3c"
          data-strk-bg="[about-hero-title] atelier workshop gold jewelry"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="relative z-10 mx-auto max-w-7xl px-5 py-24 md:px-10">
          <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-gold-soft">Since the First Bench</p>
          <h1 id="about-hero-title" className="mt-4 max-w-2xl font-display text-4xl font-light leading-tight text-ivory md:text-6xl">
            Quiet luxury, made to be lived in.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16 text-center md:py-24">
        <Reveal>
          <p className="font-display text-2xl font-light italic leading-relaxed text-cocoa md:text-3xl">
            &ldquo;We believe the most beautiful jewelry is the kind you never take off — the huggies you sleep in,
            the necklace that becomes part of you. Velmora exists to make that feeling accessible.&rdquo;
          </p>
          <p className="mt-6 text-[11px] font-medium uppercase tracking-[0.28em] text-gold">
            — The Velmora Atelier
          </p>
        </Reveal>
      </section>

      <section className="border-y border-line bg-cream">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:gap-16 md:px-10 md:py-24">
          <Reveal className="order-2 md:order-1">
            <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-gold">The Atelier</p>
            <h2 id="about-atelier-title" className="mt-4 font-display text-3xl font-light text-espresso md:text-4xl">
              From sketch to skin
            </h2>
            <p id="about-atelier-text" className="mt-5 text-sm leading-relaxed text-mocha md:text-base">
              Each design starts as a pencil sketch in our studio, then moves through wax models, casting and
              hand-polishing before its final layer of 18K gold. We plate thicker than industry standard and seal
              every piece against tarnish — because demi-fine should still mean enduring.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-mocha md:text-base">
              The result: pieces with the weight, warmth and glow of fine jewelry, at a price that invites daily wear.
            </p>
          </Reveal>
          <Reveal delay={120} className="order-1 md:order-2">
            <div className="aspect-[4/5] overflow-hidden bg-sand">
              <StrkImg
                imgId="about-atelier-img-4d5e6f"
                query="[about-atelier-text] [about-atelier-title] goldsmith hands crafting gold jewelry atelier"
                ratio="4x5"
                width={900}
                alt="Goldsmith crafting jewelry in the Velmora atelier"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
        <Reveal className="mb-12 text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-gold">What We Stand For</p>
          <h2 className="mt-4 font-display text-3xl font-light text-espresso md:text-4xl">Our Values</h2>
        </Reveal>
        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 100} className="text-center">
              <span className="mx-auto block h-px w-10 bg-gold" />
              <h3 className="mt-6 font-display text-2xl font-light text-espresso">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-mocha">{v.text}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-14 text-center">
          <Link
            to="/shop"
            className="inline-block bg-espresso px-10 py-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-ivory transition-colors duration-300 hover:bg-gold-deep"
          >
            Shop the Collection
          </Link>
        </Reveal>
      </section>
    </div>
  )
}
