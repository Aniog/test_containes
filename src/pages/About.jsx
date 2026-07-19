import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

export default function About() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      <section className="relative h-[50vh] min-h-[360px] overflow-hidden bg-ink">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-hero-3d7e2b"
          data-strk-bg="[about-hero-title] gold jewelry atelier craftsmanship warm editorial"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-ink/45" />
        <div className="relative z-10 mx-auto flex h-full max-w-3xl flex-col items-center justify-center px-5 text-center">
          <span className="text-[11px] uppercase tracking-[0.3em] text-champagne">Our Story</span>
          <h1 id="about-hero-title" className="mt-4 font-serif text-4xl text-cream md:text-6xl">
            Crafted to be Treasured
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-20 md:px-8 md:py-28">
        <p className="text-sm uppercase tracking-[0.25em] text-gold">Velmora Fine Jewelry</p>
        <h2 className="mt-4 font-serif text-3xl leading-tight text-ink md:text-4xl">
          Fine jewelry, made to be lived in.
        </h2>
        <div className="mt-6 space-y-5 text-sm leading-relaxed text-stone md:text-base">
          <p>
            Velmora began with a simple belief: fine jewelry should be worn, not locked away.
            We design demi-fine pieces in 18K gold plating — warm in tone, weighty in hand,
            and quietly luxurious in every detail.
          </p>
          <p>
            Each piece is hand-finished by artisans who care about the small things, because
            the small things are what make a piece worth treasuring. From the first sketch to
            the final polish, our process honors both craft and the everyday moments our
            jewelry is made for.
          </p>
          <p>
            We believe luxury doesn't need to shout. It lives in the warmth of the gold, the
            weight of a hoop, the way a pendant catches the light. That is the Velmora
            philosophy — quiet luxury, made to be lived in.
          </p>
        </div>
        <Link
          to="/shop"
          className="mt-10 inline-block bg-gold px-10 py-4 text-[11px] uppercase tracking-[0.22em] text-cream transition-colors hover:bg-gold-deep"
        >
          Shop the Collection
        </Link>
      </section>
    </div>
  )
}
