import { ClipboardList, Search, FileCheck, Eye, Package, Ship } from "lucide-react"

const steps = [
  {
    icon: ClipboardList,
    number: "01",
    title: "Define Your Requirements",
    desc: "Share product specs, target price, order quantity, and delivery timeline.",
  },
  {
    icon: Search,
    number: "02",
    title: "Supplier Research",
    desc: "We shortlist 3–5 qualified manufacturers and present quotes and samples.",
  },
  {
    icon: FileCheck,
    number: "03",
    title: "Factory Verification",
    desc: "Audit licenses, capacity, quality systems, and past export performance.",
  },
  {
    icon: Eye,
    number: "04",
    title: "Quality Inspection",
    desc: "Inspect materials, production lines, and finished goods at agreed stages.",
  },
  {
    icon: Package,
    number: "05",
    title: "Production Monitoring",
    desc: "Track milestones, manage changes, and enforce corrective actions.",
  },
  {
    icon: Ship,
    number: "06",
    title: "Shipping & Delivery",
    desc: "Coordinate export docs, consolidation, and freight to your destination.",
  },
]

export default function Process() {
  return (
    <section className="bg-secondary py-16 md:py-24">
      <div className="container-site">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">Our Process</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-primary md:text-4xl">
            How We Source From China
          </h2>
          <p className="mt-4 text-muted-foreground">
            A practical, six-step workflow designed to reduce risk and keep your orders on track.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative rounded-lg border bg-background p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-primary-foreground">
                  <step.icon className="h-5 w-5" />
                </div>
                <span className="text-3xl font-bold text-muted/80">{step.number}</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-primary">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
