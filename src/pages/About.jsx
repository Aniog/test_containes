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
    <div ref={ref} className="pt-20">
      <div className="relative h-[50vh] min-h-[360px] overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-hero-bg"
          data-strk-bg="[about-hero-title] gold jewelry atelier craftsmanship warm editorial"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-espresso/45" />
        <div className="relative h-full flex items-end max-w-7xl mx-auto px-6 md:px-10 pb-12">
          <h1
            id="about-hero-title"
            className="font-serif text-5xl md:text-6xl text-ivory"
          >
            Our Story
          </h1>
        </div>
      </div>

      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">
            Est. with intention
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink mb-8 leading-tight">
            Jewelry that feels personal, not precious.
          </h2>
          <p className="text-base text-stone leading-relaxed mb-6">
            Velmora was founded on a simple belief: that fine jewelry should be
            worn, lived in, and loved — not locked away. We design demi-fine
            pieces in 18K gold plating over sterling silver, made in small
            batches with materials chosen for their warmth and longevity.
          </p>
          <p className="text-base text-stone leading-relaxed mb-10">
            Every earring, huggie and necklace is hand-finished and presented in
            signature packaging, so it arrives ready to be treasured — whether
            for yourself or someone dear.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-gold text-ivory text-xs uppercase tracking-[0.2em] px-10 py-4 hover:bg-gold-soft transition-colors"
          >
            Shop the Collection
          </Link>
        </div>
      </section>
    </div>
  )
}
