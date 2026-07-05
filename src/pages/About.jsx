import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Link } from 'react-router-dom'

export default function About() {
  const containerRef = useRef(null)
  useEffect(() => {
    if (!containerRef.current) return
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="bg-ivory">
      <section className="relative pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          data-strk-bg-id="about-hero-bg"
          data-strk-bg="[about-hero-subtitle] [about-hero-title] gold jewelry atelier warm light"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 -z-10 bg-noir/40" />
        <div className="container-page text-ivory">
          <span className="text-[11px] uppercase tracking-widest3 font-medium text-ivory/80">
            Our story
          </span>
          <h1
            id="about-hero-title"
            className="mt-5 font-serif text-5xl md:text-7xl leading-[1.05] max-w-3xl"
          >
            A small atelier,{' '}
            <span className="italic font-light">a long view.</span>
          </h1>
          <p
            id="about-hero-subtitle"
            className="mt-6 text-base md:text-lg text-ivory/85 max-w-xl font-light leading-relaxed"
          >
            Velmora began in 2021 as a notebook of sketches and a single brass
            sample passed between two friends. Today, we work with family-run
            foundries in Arezzo and finish each piece by hand in our Paris
            studio.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-page grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-6">
            <div
              className="relative w-full aspect-[4/5] overflow-hidden bg-cream"
              data-strk-bg-id="about-img-1"
              data-strk-bg="[about-block-1-title] [about-block-1-sub] gold jewelry atelier hands warm light"
              data-strk-bg-ratio="4x5"
              data-strk-bg-width="1000"
            />
          </div>
          <div className="md:col-span-6 flex flex-col justify-center">
            <span className="eyebrow">Slow craft</span>
            <h2
              id="about-block-1-title"
              className="mt-4 font-serif text-4xl md:text-5xl leading-[1.05]"
            >
              We make in small{' '}
              <span className="italic font-light text-espresso-soft">batches.</span>
            </h2>
            <p
              id="about-block-1-sub"
              className="mt-5 text-sm md:text-base text-espresso-soft font-light leading-relaxed max-w-md"
            >
              We never cast more than 250 pieces of a design at a time. It
              means we get to know each one — and you get a piece with a
              maker's hand behind it.
            </p>
            <Link to="/shop" className="btn-outline mt-8 self-start">
              Shop the collection
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-cream">
        <div className="container-page grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-6 md:order-2">
            <div
              className="relative w-full aspect-[4/5] overflow-hidden bg-noir"
              data-strk-bg-id="about-img-2"
              data-strk-bg="[about-block-2-title] gold jewelry editorial portrait warm"
              data-strk-bg-ratio="4x5"
              data-strk-bg-width="1000"
            />
          </div>
          <div className="md:col-span-6 md:order-1 flex flex-col justify-center">
            <span className="eyebrow">Considered materials</span>
            <h2
              id="about-block-2-title"
              className="mt-4 font-serif text-4xl md:text-5xl leading-[1.05]"
            >
              Demi-fine,{' '}
              <span className="italic font-light text-espresso-soft">
                honestly priced.
              </span>
            </h2>
            <p className="mt-5 text-sm md:text-base text-espresso-soft font-light leading-relaxed max-w-md">
              We plate in 18K gold over a solid brass core, hand-set each
              crystal, and skip the middlemen. The result: real-feeling pieces
              at a price you can wear every day.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-espresso-soft">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1 w-1 rounded-full bg-gold" />
                Hypoallergenic, lead-free, nickel-free
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1 w-1 rounded-full bg-gold" />
                Made in small batches in Arezzo, Italy
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1 w-1 rounded-full bg-gold" />
                30-day returns, no questions asked
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
