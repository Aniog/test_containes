import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import Button from "@/components/ui/Button"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

export default function About() {
  const containerRef = useRef(null)
  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={containerRef} className="pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[360px] overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-bg-velmora-2b3c4d"
          data-strk-bg="[about-hero-sub] [about-hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-ink/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-champagne">
            Est. 2019
          </p>
          <h1
            id="about-hero-title"
            className="mt-4 font-serif text-4xl text-cream md:text-6xl"
          >
            Made to Be Worn
          </h1>
          <p
            id="about-hero-sub"
            className="mt-4 max-w-md text-sm text-cream/80"
          >
            A studio devoted to quiet, warm, hand-finished gold.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <p className="text-[11px] uppercase tracking-[0.3em] text-taupe">
          Our Philosophy
        </p>
        <h2 className="mt-4 font-serif text-3xl text-espresso md:text-4xl">
          Fine jewelry shouldn’t live in a drawer.
        </h2>
        <div className="mt-6 space-y-5 text-sm leading-relaxed text-taupe">
          <p>
            Velmora was founded on a simple frustration: beautiful jewelry was
            either too precious to wear, or too disposable to keep. We set out
            to make demi-fine gold pieces that sit comfortably in between —
            warm, hand-finished, and made to be lived in.
          </p>
          <p>
            Every piece begins in our studio, where we sketch and refine until
            the proportions feel right. We plate in genuine 18K gold over a
            solid brass base, set each crystal by hand, and finish with a
            hypoallergenic, nickel-free promise.
          </p>
          <p>
            The result is jewelry with the warmth and weight of fine — at a
            price that lets you wear it every day, not just on occasion.
          </p>
        </div>
        <div className="mt-10">
          <Button as={Link} to="/shop" variant="solid" size="md">
            Explore the Collection
          </Button>
        </div>
      </section>

      {/* Values */}
      <section className="bg-sand">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-3 md:px-10 md:py-24">
          {[
            {
              title: "Hand-Finished",
              body: "Each piece is polished and finished by hand for a warm, lived-in glow.",
            },
            {
              title: "Hypoallergenic",
              body: "Nickel-free and gentle on sensitive skin — safe to wear every day.",
            },
            {
              title: "Responsibly Made",
              body: "Small-batch production and recyclable packaging, by design.",
            },
          ].map((v) => (
            <div key={v.title} className="text-center">
              <h3 className="font-serif text-2xl text-espresso">{v.title}</h3>
              <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-taupe">
                {v.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
