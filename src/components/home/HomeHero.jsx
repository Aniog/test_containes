import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { ArrowRight, ShieldCheck, ClipboardCheck, ShipWheel } from "lucide-react"
import Button from "@/components/ui/button"
import { Container } from "@/components/ui/section"
import { stats } from "@/data/content"

const heroPoints = [
  { icon: ShieldCheck, label: "Factory verification" },
  { icon: ClipboardCheck, label: "Independent QC" },
  { icon: ShipWheel, label: "Shipping coordination" },
]

export default function HomeHero() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section className="relative overflow-hidden border-b border-border bg-card" ref={containerRef}>
      <div className="absolute inset-0 -z-0">
        <div
          data-strk-bg-id="hero-bg-7f3a2c"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          className="h-full w-full"
        />
        <div className="absolute inset-0 bg-primary/85" />
      </div>

      <Container className="relative py-20 md:py-28">
        <div className="max-w-3xl text-primary-foreground">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            China-based sourcing agent for global buyers
          </span>

          <h1
            id="hero-title"
            className="mt-5 text-4xl font-bold leading-tight tracking-tight md:text-6xl"
          >
            China Sourcing Agent for Global Buyers
          </h1>

          <p
            id="hero-subtitle"
            className="mt-5 max-w-2xl text-base text-primary-foreground/85 md:text-lg"
          >
            We help overseas buyers find reliable suppliers, verify factories,
            inspect quality, follow production, and coordinate shipping — so you
            source from China with clarity and control.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button to="/contact" variant="accent" size="lg">
              Get a Free Sourcing Quote
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button to="/how-it-works" variant="white" size="lg">
              See How It Works
            </Button>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            {heroPoints.map((p) => (
              <li
                key={p.label}
                className="flex items-center gap-2 text-sm font-medium text-primary-foreground/90"
              >
                <p.icon className="h-4 w-4 text-accent" />
                {p.label}
              </li>
            ))}
          </ul>
        </div>

        <dl className="mt-14 grid grid-cols-2 gap-6 border-t border-white/15 pt-8 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.id}>
              <dt className="text-3xl font-bold text-accent md:text-4xl">
                {s.value}
              </dt>
              <dd className="mt-1 text-sm text-primary-foreground/75">
                {s.label}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  )
}
