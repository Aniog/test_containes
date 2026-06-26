import { CheckCircle2 } from "lucide-react"
import { Container, Section, Eyebrow, Button } from "@/components/ui"

export function About() {
  return (
    <Section id="about" className="bg-mist">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="overflow-hidden rounded-xl border border-line bg-white shadow-sm">
              <img
                alt="ARTITECT MACHINERY factory floor"
                data-strk-img-id="about-factory-b3d7e9"
                data-strk-img="[about-subtitle] [about-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-4 hidden rounded-xl border border-line bg-ink px-8 py-6 text-white shadow-lg sm:block">
              <div className="text-3xl font-extrabold text-accent">25+</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-white/60">
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
              A fabricator's machine, built by fabricators
            </h2>
            <p
              id="about-subtitle"
              className="mt-5 text-base leading-relaxed text-graphite md:text-lg"
            >
              For over two decades, ARTITECT MACHINERY has designed and
              manufactured sheet metal folding equipment on the shop floor —
              not just in the CAD room. Every beam, backgauge, and controller is
              shaped by real production experience.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                "In-house design, welding, and machining under one roof",
                "Machines shipped to fabricators in over 40 countries",
                "Direct factory support — no middlemen between you and the builder",
                "Continuous R&D into all-electric and automated folding",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-dark" />
                  <span className="text-sm leading-relaxed text-graphite md:text-base">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-9">
              <Button as="a" href="#contact" variant="outline">
                Partner with us
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default About
