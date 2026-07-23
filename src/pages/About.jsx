import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { Button } from "@/components/ui/Button"
import { Link } from "react-router-dom"

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
    <div ref={ref} className="pt-16 md:pt-20">
      <section className="relative h-[50vh] min-h-[360px] bg-espresso overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-hero-bg-velmora-2b8d"
          data-strk-bg="[about-hero-subtitle] [about-hero-title] gold jewelry atelier craftsmanship warm editorial"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-espresso/45" />
        <div className="relative h-full max-w-7xl mx-auto px-5 md:px-8 flex flex-col justify-end pb-12">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">
            Our Story
          </p>
          <h1
            id="about-hero-title"
            className="font-serif text-ivory text-5xl md:text-6xl font-light"
          >
            Crafted to be Treasured
          </h1>
          <p
            id="about-hero-subtitle"
            className="text-ivory/80 mt-4 max-w-lg"
          >
            Demi-fine gold jewelry, made to be lived in.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-5 md:px-8 py-20 md:py-28">
        <div className="prose-custom space-y-6 text-stone leading-relaxed text-lg">
          <p className="font-serif text-2xl text-ink font-light">
            Velmora began with a simple belief: that beautiful gold jewelry
            should be lived in, not locked away.
          </p>
          <p>
            We design every piece in our studio with a quiet, editorial
            sensibility — warm gold, clean lines, and details that reward a
            second look. Each piece is hand-finished in 18K gold plating over a
            durable core, hypoallergenic and made to be worn from morning to
            midnight.
          </p>
          <p>
            We believe luxury should feel personal. That's why we sell directly
            to you — no markups, no middlemen — so you get heirloom-quality
            design at an honest, accessible price.
          </p>
          <p>
            From the first sketch to the velvet-lined gift box, every step is
            considered. We hope these pieces become part of your everyday
            rituals, and one day, treasured heirlooms.
          </p>
        </div>
        <div className="mt-12 text-center">
          <Button as={Link} to="/shop" variant="outline">
            Explore the Collection
          </Button>
        </div>
      </section>
    </div>
  )
}
