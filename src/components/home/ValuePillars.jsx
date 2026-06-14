import { Compass, Ruler, ShieldCheck, Wrench } from "lucide-react"

const pillars = [
  {
    icon: Compass,
    title: "Engineered precision",
    body: "Each folding machine is calibrated to deliver ±0.1° repeatability, batch after batch.",
  },
  {
    icon: Ruler,
    title: "Built to your spec",
    body: "Length, capacity, control system — every machine is configured for the work you actually do.",
  },
  {
    icon: ShieldCheck,
    title: "24-month warranty",
    body: "Every ARTITECT machine ships with a 24-month warranty and lifetime technical support.",
  },
  {
    icon: Wrench,
    title: "Service, worldwide",
    body: "A network of 48 certified partners keeps your production line running, wherever you are.",
  },
]

export default function ValuePillars() {
  return (
    <section className="section bg-cream">
      <div className="container-page">
        <div className="max-w-3xl">
          <p className="eyebrow">Why ARTITECT</p>
          <h2 id="value-pillars-title" className="mt-4 font-display text-4xl md:text-5xl text-ink">
            Four reasons fabricators choose us.
          </h2>
          <p className="mt-6 text-base md:text-lg text-steel leading-relaxed">
            We design every machine around the way real workshops operate — long
            shifts, tight tolerances, and the occasional all-nighter.
          </p>
        </div>

        <div className="mt-16 grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => {
            const Icon = p.icon
            return (
              <div key={p.title} className="bg-cream p-8">
                <Icon className="w-7 h-7 text-gold" strokeWidth={1.25} />
                <h3 className="mt-6 font-display text-2xl text-ink">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-steel">{p.body}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
