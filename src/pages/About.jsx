import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { Link } from "react-router-dom"


export default function About() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="pt-24">
      <section className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-hero-3e7b2a"
          data-strk-bg="[about-eyebrow] [about-title] gold jewelry atelier warm editorial"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-ink/45" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <p
            id="about-eyebrow"
            className="font-sans text-xs uppercase tracking-widest2 text-cream/80"
          >
            Our Story
          </p>
          <h1
            id="about-title"
            className="mt-4 font-serif text-5xl text-cream md:text-6xl"
          >
            Crafted to be Treasured
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <p className="font-sans text-sm leading-relaxed text-stone">
          Velmora began with a simple belief: that fine craftsmanship shouldn't
          be reserved for special occasions. Each piece is finished in 18k gold
          over a durable base, hypoallergenic and made to be worn from morning
          to night.
        </p>
        <p className="mt-5 font-sans text-sm leading-relaxed text-stone">
          We design in small, considered collections — no noise, no trends for
          their own sake. Just pieces with quiet presence, made to be treasured
          and passed on. From the studio to your door, every detail is
          considered: the weight of a huggie, the drape of a chain, the warmth
          of the gold.
        </p>
        <div className="mt-10 text-center">
          <Link
            to="/shop"
            className="inline-block bg-gold px-10 py-4 font-sans text-[11px] uppercase tracking-widest2 text-cream hover:bg-gold-deep"
          >
            Explore the Collection
          </Link>
        </div>
      </section>
    </div>
  )
}
