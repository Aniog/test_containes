import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import StockImage from '@/components/ui/StockImage'
import Reveal from '@/components/ui/Reveal'

const VALUES = [
  {
    num: '01',
    title: 'Honest Materials',
    text: 'Recycled brass cores, thick 2.5-micron 18K gold plating, nickel-free everything. We publish exactly what goes into each piece.',
  },
  {
    num: '02',
    title: 'Made Slowly',
    text: 'Small batches, hand-finished in our Lisbon atelier. We would rather sell out than overproduce.',
  },
  {
    num: '03',
    title: 'Priced Fairly',
    text: 'Direct to you, no middlemen, no inflated markups. Demi-fine should mean fine quality — not fine-print pricing.',
  },
]

export default function About() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="pt-16 md:pt-20">
      <header className="velmora-container py-16 text-center md:py-24">
        <Reveal>
          <p className="eyebrow">Our Story</p>
          <h1 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-medium leading-tight text-velmora-ink md:text-6xl">
            Jewelry for the life you actually live
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-velmora-muted">
            Velmora was founded on a quiet belief: that the warmth of real gold
            belongs in everyday moments — not locked away for someday.
          </p>
        </Reveal>
      </header>

      <section className="velmora-container grid items-center gap-10 pb-20 md:grid-cols-2 md:gap-16 md:pb-28">
        <Reveal>
          <div className="relative aspect-[4/3] overflow-hidden bg-velmora-surface">
            <StockImage
              imgId="about-founder"
              query="woman jeweler portrait in warm atelier light elegant editorial"
              ratio="4x3"
              width={1000}
              alt="Velmora founder in the atelier"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </Reveal>
        <Reveal delay={120}>
          <p className="font-display text-2xl italic leading-relaxed text-velmora-ink/90 md:text-3xl">
            “I wanted pieces my grandmother would recognize as fine, and my
            daughter could wear to the beach.”
          </p>
          <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.28em] text-velmora-gold">
            Elena Marques — Founder
          </p>
          <div className="hairline-t mt-8 space-y-5 pt-8 text-[15px] leading-relaxed text-velmora-muted">
            <p>
              What began at a kitchen table in 2019 is now a small atelier of
              eleven artisans. Every Velmora piece is still designed, cast and
              finished under one roof — plated in a thick layer of 18K gold and
              inspected by hand before it leaves us.
            </p>
            <p>
              We are proudly direct-to-consumer. The markup you would normally
              pay a department store goes into thicker plating, better stones
              and fair wages instead.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="border-y border-velmora-line bg-velmora-surface/40 py-20 md:py-24">
        <div className="velmora-container">
          <Reveal>
            <div className="text-center">
              <p className="eyebrow">What We Stand By</p>
              <h2 className="mt-4 font-display text-3xl font-medium text-velmora-ink md:text-5xl">
                Three Quiet Promises
              </h2>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
            {VALUES.map((v, i) => (
              <Reveal key={v.num} delay={i * 100}>
                <div className="border-t border-velmora-gold/40 pt-6">
                  <span className="font-display text-lg text-velmora-gold">{v.num}</span>
                  <h3 className="mt-3 font-display text-2xl font-medium uppercase tracking-[0.12em] text-velmora-ink">
                    {v.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-velmora-muted">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="velmora-container py-20 text-center md:py-28">
        <Reveal>
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-medium leading-tight text-velmora-ink md:text-5xl">
            Come find the piece that feels like you
          </h2>
          <Link to="/shop" className="btn-gold mt-10">
            Shop the Collection
          </Link>
        </Reveal>
      </section>
    </div>
  )
}
