import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { useReveal } from '@/hooks/useReveal'
import NewsletterSection from '@/components/NewsletterSection'

const VALUES = [
  {
    title: 'Made to be lived in',
    text: 'Thick 18k gold plating over premium brass, sealed against water, sweat and perfume — jewelry you never have to take off.',
  },
  {
    title: 'Kind to skin',
    text: 'Every piece is nickel-free, lead-free and hypoallergenic, tested on sensitive ears before it ever reaches yours.',
  },
  {
    title: 'Priced with honesty',
    text: 'By selling directly to you, we keep heir­loom-quality pieces between $30 and $120 — no middlemen, no markups.',
  },
]

export default function AboutPage() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  useReveal(containerRef)

  return (
    <div ref={containerRef} className="pt-24 md:pt-32">
      <header className="mx-auto max-w-7xl px-5 py-12 text-center md:px-8 md:py-20">
        <p className="reveal text-[11px] font-semibold uppercase tracking-[0.28em] text-gold-deep">
          Our story
        </p>
        <h1 className="reveal mx-auto mt-4 max-w-3xl font-serif text-4xl font-medium leading-tight text-ink md:text-6xl">
          Quiet luxury, made for every day
        </h1>
      </header>

      <section className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="reveal relative overflow-hidden bg-sand">
          <div className="aspect-[16/9] w-full md:aspect-[21/9]">
            <img
              data-strk-img-id="about-atelier-wide"
              data-strk-img="[about-lead] [about-title]"
              data-strk-img-ratio="16x9"
              data-strk-img-width="1600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Inside the Velmora atelier"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
        <div className="reveal">
          <h2 id="about-title" className="font-serif text-3xl font-medium text-ink md:text-4xl">
            From a single goldsmith’s bench
          </h2>
          <p id="about-lead" className="mt-6 text-base leading-relaxed text-ink-soft">
            Velmora was founded in Lisbon in 2019, in a sunlit atelier above a
            goldsmith’s workshop. Our founder grew up watching her grandmother
            polish the same three pieces of jewelry every Sunday — and wondered why
            beautiful things were so rarely made to be worn.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink-soft">
            So we set out to make the third kind of jewelry: not precious pieces
            that live in a safe, and not fast fashion that fades in a month — but
            demi-fine pieces plated in a thick layer of 18k gold, hand-finished in
            small batches, and designed to gather stories.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink-soft">
            Today every Velmora piece still passes through human hands at least
            eleven times before it is boxed. We think you can feel the difference
            the moment you open it.
          </p>
        </div>
      </section>

      <section className="border-y border-line bg-sand">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-3 md:gap-8 md:px-8 md:py-24">
          {VALUES.map((value, i) => (
            <div key={value.title} className="reveal">
              <p className="font-serif text-5xl text-gold-deep">0{i + 1}</p>
              <h3 className="mt-4 font-serif text-2xl text-ink">{value.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{value.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 text-center md:px-8 md:py-24">
        <div className="reveal">
          <h2 className="mx-auto max-w-2xl font-serif text-3xl font-medium leading-tight text-ink md:text-5xl">
            Begin your collection
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-ink-muted md:text-base">
            Five pieces, endlessly giftable — each one boxed, ribboned, and ready to be treasured.
          </p>
          <Link
            to="/shop"
            className="mt-8 inline-flex h-13 items-center bg-gold-deep px-10 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink"
          >
            Shop the collection
          </Link>
        </div>
      </section>

      <NewsletterSection />
    </div>
  )
}
