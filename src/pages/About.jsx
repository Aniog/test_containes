import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { useReveal } from "@/lib/useReveal"
import { Link } from "react-router-dom"

export default function About() {
  useReveal()
  const ref = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <div ref={ref} className="pt-16 md:pt-20">
      <section className="relative h-[50vh] min-h-[360px] overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-hero-3d9f1b"
          data-strk-bg="[about-eyebrow] [about-title] gold jewelry studio craftsmanship warm"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-ink-900/40" />
        <div className="relative h-full max-w-7xl mx-auto px-5 md:px-8 flex flex-col justify-end pb-12">
          <p id="about-eyebrow" className="text-xs uppercase tracking-widest3 text-gold-soft mb-3">
            Our Story
          </p>
          <h1 id="about-title" className="font-serif text-5xl md:text-7xl text-cream font-light">
            Crafted to be Treasured
          </h1>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-5 md:px-8 py-20 md:py-28">
        <div className="reveal space-y-6 text-ink-600 leading-relaxed text-lg">
          <p>
            Velmora began with a simple belief: that beautiful, well-made gold
            jewelry shouldn't be reserved for special occasions. We design each
            piece in our studio and finish it in 18K gold plate, crafted to be
            worn, layered, and lived in — then passed on to someone you love.
          </p>
          <p>
            We work in small batches, with materials chosen to be kind to skin
            and to last. Every piece is hypoallergenic, nickel and lead free.
            No markups for the sake of it — just considered design, honest
            pricing, and jewelry made to be treasured.
          </p>
          <p>
            From the everyday huggie to the gift-boxed heirloom set, our
            collections are made for women who appreciate quiet luxury — and
            know that the best pieces are the ones you never take off.
          </p>
        </div>
        <div className="mt-12 text-center reveal">
          <Link
            to="/shop"
            className="inline-block text-xs uppercase tracking-widest2 bg-ink-800 text-cream px-9 py-4 hover:bg-gold transition-colors"
          >
            Shop the Collection
          </Link>
        </div>
      </section>
    </div>
  )
}
