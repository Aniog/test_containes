import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Container, Button } from "@/components/ui"
import { stats } from "@/data/content"

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink text-white">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-9f2c1a"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Dark overlay for legibility */}
      <div className="absolute inset-0 bg-ink/80" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40"
        aria-hidden="true"
      />

      <Container className="relative z-10 flex min-h-[92vh] flex-col justify-center py-32">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
            Precision Sheet Metal Folding
          </div>

          <h1
            id="hero-title"
            className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Fold Metal With
            <span className="text-accent"> Engineering Precision</span>
          </h1>

          <p
            id="hero-subtitle"
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/75"
          >
            ARTITECT MACHINERY builds double folding machines and sheet metal
            folders that deliver repeatable, tenth-of-a-millimeter accuracy —
            shift after shift, year after year.
          </p>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/80">
            {[
              "0.1 mm repeatability",
              "All-electric servo drives",
              "CNC automation",
              "Global support",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button as="a" href="#products" size="lg">
              Explore Products
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button as="a" href="#contact" variant="outlineLight" size="lg">
              Request a Quote
            </Button>
          </div>
        </div>

        <dl className="mt-16 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-ink/60 px-6 py-6 text-center">
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block text-2xl font-extrabold text-accent md:text-3xl">
                  {stat.value}
                </span>
                <span className="mt-1 block text-xs uppercase tracking-wider text-white/60">
                  {stat.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  )
}

export default Hero
