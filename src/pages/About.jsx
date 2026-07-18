import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

export default function About() {
  const ref = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={ref} className="pt-16 md:pt-20 bg-ivory">
      <section className="relative h-[50vh] min-h-[360px] overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-hero-1"
          data-strk-bg="[about-hero-sub] [about-hero-title] gold jewelry atelier craftsmanship"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width={1600}
        />
        <div className="absolute inset-0 bg-espresso/40" />
        <div className="relative h-full max-w-7xl mx-auto px-5 md:px-8 flex flex-col justify-end pb-12">
          <p className="text-[11px] uppercase tracking-widest3 text-ivory/80 mb-3">Our Story</p>
          <h1
            id="about-hero-title"
            className="font-serif text-4xl md:text-6xl text-ivory leading-tight"
          >
            Crafted to be Treasured
          </h1>
          <p id="about-hero-sub" className="text-ivory/85 mt-3 max-w-lg">
            Fine jewelry, made for real life.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
          <p className="text-[11px] uppercase tracking-widest3 text-gold mb-4">Est. 2024</p>
          <h2 className="font-serif text-3xl md:text-4xl text-ink leading-snug">
            We believe fine jewelry should be worn every day — not locked away for
            special occasions.
          </h2>
          <p className="text-taupe mt-6 leading-relaxed">
            Velmora was founded on a simple idea: the warmth and lustre of solid
            gold, made accessible through demi-fine craftsmanship. Each piece is
            18K gold plated over sterling silver, finished by hand, and made to
            be lived in. From the studio to your jewelry box, every detail is
            considered.
          </p>
          <p className="text-taupe mt-4 leading-relaxed">
            We design in small, considered collections — sculptural earrings,
            fine chains, and polished huggies that layer effortlessly. No noise,
            no markup, just quietly luxurious pieces made to be treasured.
          </p>
          <Link
            to="/shop"
            className="inline-block mt-8 bg-gold text-ivory text-xs uppercase tracking-widest2 font-medium px-10 py-4 hover:bg-gold-deep transition-colors"
          >
            Shop the Collection
          </Link>
        </div>
      </section>
    </div>
  )
}
