import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { StrkImage } from "@/components/StrkImage"
import { Reveal } from "@/components/Reveal"
import { Button } from "@/components/ui/button"

const VALUES = [
  {
    title: "Small Batches",
    text: "We produce in limited runs of a few hundred pieces, so nothing is wasted and everything is checked by hand.",
  },
  {
    title: "Honest Materials",
    text: "18K gold plating over recycled brass. Nickel-free, hypoallergenic, and plated twice for depth of color.",
  },
  {
    title: "Fair by Design",
    text: "Our ateliers are family-run, audited annually, and paid a living wage — craft should sustain the crafter.",
  },
]

export default function About() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={containerRef} className="pt-16 md:pt-20">
      <section className="relative flex min-h-[60vh] items-end overflow-hidden bg-espresso">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-hero-bg-5e91"
          data-strk-bg="[about-headline] warm-lit jewelry atelier, artisan hands polishing gold earrings, editorial"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/85 via-espresso/30 to-espresso/40" />
        <div className="container relative pb-16 pt-32">
          <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-bronze-light md:text-[11px]">
            Est. 2021 · Lisbon
          </p>
          <h1 id="about-headline" className="mt-4 max-w-2xl font-serif text-4xl font-medium leading-tight text-ivory md:text-6xl">
            Made slowly, in a fast world
          </h1>
        </div>
      </section>

      <section className="container py-16 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <Reveal>
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-bronze md:text-[11px]">The Beginning</p>
            <h2 id="about-story-heading" className="mt-3 font-serif text-3xl font-medium leading-tight text-ink md:text-4xl">
              One workbench, one belief
            </h2>
            <p id="about-story-text" className="mt-6 text-sm leading-relaxed text-ink-soft md:text-base">
              Velmora was founded by two sisters who inherited their grandmother's jewelry box — and her conviction
              that jewelry should mark a life, not a season. We could not find demi-fine pieces that honored that
              idea: gold that kept its warmth, closures that held, prices that stayed honest. So we made them.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft md:text-base">
              Four years on, every Velmora piece is still drawn, cast, plated and polished under one roof in Lisbon,
              in batches small enough that our makers know each design by name.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="aspect-[4/5] overflow-hidden rounded-sm bg-cream">
              <StrkImage
                imgId="about-founders-2b47"
                query="[about-story-text] [about-story-heading] two women jewelers working at a sunlit studio bench with gold jewelry tools, editorial portrait"
                ratio="4x3"
                width={900}
                alt="The Velmora founders at their bench"
                className="transition-transform duration-700 ease-out hover:scale-105"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line bg-cream py-16 md:py-24">
        <div className="container">
          <Reveal className="text-center">
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-bronze md:text-[11px]">What We Stand For</p>
            <h2 className="mt-3 font-serif text-3xl font-medium text-ink md:text-4xl">Our Values</h2>
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-3 md:gap-5">
            {VALUES.map((value, i) => (
              <Reveal key={value.title} delay={i * 90}>
                <div className="h-full rounded-sm border border-line bg-ivory p-8">
                  <p className="font-serif text-4xl font-medium text-bronze/40">0{i + 1}</p>
                  <h3 className="mt-4 font-serif text-xl font-medium uppercase tracking-[0.12em] text-ink">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">{value.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-16 text-center md:py-24">
        <Reveal>
          <h2 className="mx-auto max-w-xl font-serif text-3xl font-medium leading-tight text-ink md:text-4xl">
            Jewelry worth inheriting, priced for right now
          </h2>
          <Button asChild className="mt-8" size="lg">
            <Link to="/shop">Explore the Collection</Link>
          </Button>
        </Reveal>
      </section>
    </div>
  )
}
