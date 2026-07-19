import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

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
    <div ref={ref} className="pt-16 md:pt-20">
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-hero-bg-velmora-4d2b7a"
          data-strk-bg="[about-hero-subtitle] [about-hero-title] gold jewelry atelier craftsmanship warm editorial"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-espresso/40" />
        <div className="relative h-full max-w-content mx-auto px-6 md:px-10 flex flex-col justify-end pb-16">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold-soft mb-4">
            Our Story
          </p>
          <h1
            id="about-hero-title"
            className="font-serif text-ivory text-5xl md:text-7xl leading-tight"
          >
            Made to be lived in.
          </h1>
          <p
            id="about-hero-subtitle"
            className="mt-5 text-ivory/85 max-w-xl leading-relaxed"
          >
            Velmora is a demi-fine jewelry house built on a single belief — that
            fine-quality gold should belong to the everyday.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-2xl mx-auto px-6 md:px-10 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-4">
            Philosophy
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-espresso leading-tight">
            Quiet luxury, by design.
          </h2>
          <p className="mt-6 text-cocoa leading-relaxed">
            We design for the woman who values restraint over noise, and
            craftsmanship over trends. Each piece is hand-finished in small
            batches, plated in 18K gold, and made to be worn — through mornings,
            meetings, and the moments in between.
          </p>
          <p className="mt-4 text-cocoa leading-relaxed">
            From our studio to your jewelry box, every detail is considered:
            hypoallergenic materials, secure closures, and finishes that hold
            their warmth over time.
          </p>
          <div className="mt-10">
            <Link
              to="/shop"
              className="inline-block bg-gold text-espresso text-[11px] uppercase tracking-[0.25em] px-10 py-4 hover:bg-gold-deep hover:text-ivory transition-colors duration-300"
            >
              Explore the Collection
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
