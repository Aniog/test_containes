import { Target, Layers, Gauge, Headset } from "lucide-react"
import { features, stats } from "@/data/content"
import { SectionHeading } from "@/components/ui/Section"

const iconMap = {
  Target,
  Layers,
  Gauge,
  Headset,
}

export default function Capabilities() {
  return (
    <section id="capabilities" className="bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Capabilities"
          title="Engineered to perform, built to last"
          description="Every ARTITECT machine is the product of decades of fabrication expertise, refined for accuracy, versatility, and uptime."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = iconMap[feature.icon] ?? Target
            return (
              <div
                key={feature.id}
                className="rounded-xl border border-slate-200 bg-mist/60 p-7 transition-colors hover:border-accent/40"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-ink text-accent-soft">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-ink">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 rounded-xl bg-ink px-8 py-10 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-extrabold text-white md:text-4xl">
                {stat.value}
              </div>
              <div className="mt-2 text-xs font-medium uppercase tracking-wide text-white/60">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
