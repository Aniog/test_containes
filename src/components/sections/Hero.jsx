import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/Button"

const highlights = [
  "Double folding machines",
  "CNC sheet metal folders",
  "Heavy-duty metal folders",
]

export default function Hero() {
  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="top" className="relative isolate overflow-hidden bg-ink">
      {/* Background image */}
      <div
        className="absolute inset-0 -z-10"
        data-strk-bg-id="hero-bg-7f3a2c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/90 to-ink/40" />

      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8 lg:py-36">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-accent-soft/70" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-soft">
              Precision Sheet Metal Folding
            </span>
          </div>

          <h1
            id="hero-title"
            className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Folding Machines Built for Precision and Productivity
          </h1>

          <p
            id="hero-subtitle"
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/75"
          >
            ARTITECT MACHINERY engineers double folding machines, sheet metal
            folders, and heavy-duty metal folding machines that deliver
            repeatable accuracy shift after shift.
          </p>

          <ul className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-8">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2 text-white/85">
                <CheckCircle2 className="h-5 w-5 text-accent-soft" />
                <span className="text-sm font-medium">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button size="lg" onClick={() => scrollTo("#products")}>
              Explore Products
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollTo("#contact")}>
              Talk to an Engineer
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
