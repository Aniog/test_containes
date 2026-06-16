import { useEffect, useRef } from "react"
import { ArrowRight } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import Reveal from "@/components/ui/Reveal"

export default function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const goTo = (id) => (e) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <section
      id="top"
      ref={containerRef}
      className="relative bg-cream-soft pt-28 md:pt-36 lg:pt-44 pb-20 md:pb-28 lg:pb-36 overflow-hidden"
    >
      <div
        className="absolute inset-0 -z-0"
        data-strk-bg-id="hero-bg-3a91d2"
        data-strk-bg="[hero-eyebrow] [hero-title] [hero-subtitle] [hero-tagline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 -z-0 bg-gradient-to-b from-cream-soft via-cream-soft/85 to-cream-soft" />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-brass/60 -z-0"
      />

      <div className="max-w-container mx-auto px-6 md:px-10 relative">
        <div className="max-w-3xl">
          <Reveal>
            <p
              id="hero-eyebrow"
              className="text-[11px] md:text-xs uppercase tracking-eyebrow text-brass-deep font-medium"
            >
              <span className="inline-block w-8 h-px bg-brass align-middle mr-3" />
              EST. 2008 · Precision folding machinery
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1
              id="hero-title"
              className="mt-6 md:mt-8 font-display font-light text-ink leading-[1.05] text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight"
            >
              Where engineering
              <br className="hidden sm:block" />
              <span className="italic font-normal text-brass-deep"> becomes architecture.</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p
              id="hero-subtitle"
              className="mt-6 md:mt-8 text-lg md:text-xl text-slate leading-relaxed max-w-2xl"
            >
              ARTITECT MACHINERY designs double folding machines and sheet metal folders for fabricators
              who refuse the trade-off between precision, throughput, and craft.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-10 md:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#products"
                onClick={goTo("products")}
                className="inline-flex items-center justify-center gap-3 px-7 py-4 bg-ink text-cream-soft text-[12px] uppercase tracking-cta font-medium hover:bg-ink-soft transition-colors"
              >
                Explore the line
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                onClick={goTo("contact")}
                className="inline-flex items-center justify-center gap-3 px-7 py-4 border border-ink text-ink text-[12px] uppercase tracking-cta font-medium hover:bg-ink hover:text-cream-soft transition-colors"
              >
                Request a quote
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <dl className="mt-14 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-3xl">
              {[
                { v: "1 200+", l: "Machines installed" },
                { v: "38", l: "Countries served" },
                { v: "0.05°", l: "Best angular accuracy" },
                { v: "12 yr", l: "Frame warranty" },
              ].map((stat) => (
                <div key={stat.l} className="border-t border-line pt-4">
                  <dt className="font-display text-2xl md:text-3xl text-ink leading-none">{stat.v}</dt>
                  <dd className="mt-2 text-[11px] uppercase tracking-eyebrow text-slate">
                    {stat.l}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
