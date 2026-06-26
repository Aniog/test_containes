import { CheckCircle2 } from "lucide-react"
import { Eyebrow } from "@/components/ui/Section"
import { Button } from "@/components/ui/Button"

const points = [
  "In-house design and manufacturing of all folding machines",
  "Hardened, ground tooling for long service life",
  "Global installation, training, and lifetime spare parts",
  "Custom tooling and automation for your specific parts",
]

export default function About() {
  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="about" className="bg-mist py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <div className="overflow-hidden rounded-xl shadow-xl shadow-ink/10">
              <img
                alt="ARTITECT MACHINERY fabrication floor"
                data-strk-img-id="about-floor-2b8e51"
                data-strk-img="[about-subtitle] [about-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden rounded-xl bg-accent px-6 py-5 text-white shadow-lg sm:block">
              <div className="text-3xl font-extrabold">25+</div>
              <div className="text-xs font-medium uppercase tracking-wide text-white/80">
                Years of engineering
              </div>
            </div>
          </div>

          <div>
            <Eyebrow>About ARTITECT MACHINERY</Eyebrow>
            <h2
              id="about-title"
              className="mt-4 text-3xl font-bold tracking-tight text-ink md:text-4xl"
            >
              Precision folding machines, trusted worldwide
            </h2>
            <p
              id="about-subtitle"
              className="mt-4 text-base leading-relaxed text-muted md:text-lg"
            >
              For over two decades, ARTITECT MACHINERY has designed and built
              sheet metal folding machines for fabricators across more than 40
              countries. We combine hardened mechanical engineering with modern
              CNC control to deliver machines that stay accurate and productive
              for years.
            </p>

            <ul className="mt-8 space-y-4">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                  <span className="text-sm leading-relaxed text-ink">{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-9">
              <Button variant="dark" size="lg" onClick={() => scrollTo("#contact")}>
                Partner with us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
