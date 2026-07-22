import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

export default function About() {
  const ref = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <div ref={ref} className="pt-20">
      <section className="relative h-[50vh] min-h-[360px] overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-bg-4c2e8a"
          data-strk-bg="[about-title] gold jewelry atelier craftsmanship"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-ink/45" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-ivory">
          <p className="text-[11px] uppercase tracking-widest2 text-gold-light">Our Story</p>
          <h1 id="about-title" className="mt-4 font-serif text-5xl font-light md:text-6xl">
            Crafted to be Treasured
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-6 py-20 md:py-28">
        <p className="font-serif text-2xl italic leading-relaxed text-ink">
          Velmora was founded on a simple belief: fine jewelry shouldn't wait
          for special occasions.
        </p>
        <div className="mt-8 space-y-5 text-sm leading-relaxed text-stone">
          <p>
            Each piece is hand-finished in 18K gold plating, hypoallergenic and
            made to be worn from morning to night — through work, weekends, and
            everything in between. We design in small, considered collections so
            every detail earns its place.
          </p>
          <p>
            The result is jewelry that feels heirloom, without the heirloom
            price. Quiet luxury, made to be lived in.
          </p>
          <p>
            Every order ships free, worldwide, in signature Velmora packaging —
            ready to gift, or to keep.
          </p>
        </div>
      </section>
    </div>
  )
}
