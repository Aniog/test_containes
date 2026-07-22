import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import Button from "@/components/ui/Button"

export default function About() {
  const ref = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (ref.current) ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={ref} className="pt-24 md:pt-28">
      <section className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-hero-bg-7h3k"
          data-strk-bg="[about-hero-subtitle] [about-hero-title] gold jewelry artisan studio warm light"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          style={{ opacity: 0 }}
        />
        <div className="absolute inset-0 bg-espresso/45" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center">
          <h1
            id="about-hero-title"
            className="font-serif text-5xl text-cream md:text-6xl"
          >
            Our Story
          </h1>
          <p
            id="about-hero-subtitle"
            className="mt-4 max-w-md text-sm text-cream/85"
          >
            Fine jewelry, made to be lived in.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-20 md:px-8 md:py-28">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">Est. 2021</p>
        <h2 className="mt-4 font-serif text-4xl text-ink md:text-5xl">
          Crafted to be Treasured
        </h2>
        <div className="mt-8 space-y-5 text-sm leading-relaxed text-stone md:text-base">
          <p>
            Velmora was founded on a simple belief: fine jewelry shouldn't
            require a special occasion. We design demi-fine gold pieces that
            feel heirloom-worthy, at a price that lets you wear them every day.
          </p>
          <p>
            Each piece begins as a sketch in our studio and is hand-finished in
            18K gold plating over brass. We obsess over the details — the weight
            of a huggie, the curve of an ear cuff, the way a pendant catches
            the light — so every piece feels considered, not mass-produced.
          </p>
          <p>
            Hypoallergenic, nickel-free, and made to last. That's our promise
            to you, and to the moments you'll wear them through.
          </p>
        </div>
        <div className="mt-10">
          <Button as={Link} to="/shop">
            Explore the Collection
          </Button>
        </div>
      </section>
    </div>
  )
}
