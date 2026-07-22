import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function About() {
  const ref = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <div ref={ref} className="pt-16 md:pt-20">
      <section className="relative h-[50vh] min-h-[360px] overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-hero-bg-2d8f"
          data-strk-bg="[about-lead] [about-eyebrow] gold jewelry atelier workshop warm editorial"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-espresso/45" />
        <div className="relative h-full max-w-3xl mx-auto px-5 md:px-8 flex flex-col items-center justify-center text-center">
          <p id="about-eyebrow" className="text-[11px] uppercase tracking-[0.3em] text-ivory/80 mb-4">
            Our Story
          </p>
          <h1 className="font-serif text-ivory text-4xl md:text-6xl leading-tight">
            Quietly made, proudly worn
          </h1>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-2xl mx-auto px-5 md:px-8 text-center">
          <p id="about-lead" className="font-serif text-2xl md:text-3xl text-ink leading-relaxed">
            Velmora was founded on a simple idea: that gold jewelry should be
            lived in, not locked away. We design demi-fine pieces in small
            batches, plate them in 18K gold, and finish each one by hand &mdash;
            so they feel as good as they look, every single day.
          </p>
          <div className="w-12 h-px bg-sand mx-auto my-10" />
          <p className="text-stone leading-relaxed">
            From the first sketch to the final polish, every piece passes
            through the hands of makers who care about the details most people
            will never notice. That is the standard we hold ourselves to, and
            the promise we make to you.
          </p>
          <div className="mt-10">
            <Link
              to="/shop"
              className="inline-block bg-gold text-espresso text-[11px] uppercase tracking-[0.2em] px-9 py-4 hover:bg-gold-deep hover:text-ivory transition-colors duration-300"
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
