import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

export default function About() {
  const ref = useRef(null)
  useEffect(() => {
    if (!ref.current) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={ref} className="bg-cream pt-16 md:pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden bg-ink">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-hero-bg-3e5f7a"
          data-strk-bg="[about-hero-subtitle] [about-hero-title] gold jewelry atelier studio warm editorial"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-ink/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <p className="text-[11px] uppercase tracking-widest2 text-cream/80">Our Story</p>
          <h1
            id="about-hero-title"
            className="mt-4 font-serif text-5xl md:text-7xl text-cream"
          >
            Made to be Treasured
          </h1>
          <p
            id="about-hero-subtitle"
            className="mt-5 max-w-md text-sm text-cream/85"
          >
            Demi-fine gold jewelry, designed in studio and crafted without the
            luxury markup.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-[11px] uppercase tracking-widest2 text-champagne-deep">Est. 2021</p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl text-ink leading-tight">
            Jewelry that earns its place in your everyday
          </h2>
          <div className="mt-8 space-y-5 text-sm md:text-base leading-relaxed text-stone text-left">
            <p>
              Velmora was founded on a simple frustration: beautiful, lasting
              gold jewelry was either wildly expensive or cheaply made. We
              believed there was a better way — demi-fine pieces, finished in
              18K gold plate over a hypoallergenic base, sold directly to you.
            </p>
            <p>
              By working closely with our atelier and skipping the middlemen,
              we keep our prices honest and our quality uncompromising. Every
              earring, necklace and huggie is designed to be worn — not saved
              for special occasions.
            </p>
            <p>
              From our studio to your door, each piece arrives in signature
              Velmora packaging, ready to be treasured or gifted.
            </p>
          </div>
          <Link
            to="/shop"
            className="mt-10 inline-block bg-champagne px-10 py-4 text-[11px] uppercase tracking-widest2 text-cream hover:bg-champagne-deep transition-colors"
          >
            Explore the Collection
          </Link>
        </div>
      </section>
    </div>
  )
}
