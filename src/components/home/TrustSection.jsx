import { Shield, Globe, Users, Clock } from "lucide-react"

const points = [
  {
    icon: Shield,
    stat: "2,400+",
    label: "Factory audits completed",
  },
  {
    icon: Globe,
    stat: "40+",
    label: "Countries served",
  },
  {
    icon: Users,
    stat: "30+",
    label: "Bilingual sourcing staff",
  },
  {
    icon: Clock,
    stat: "48h",
    label: "Average first quote response",
  },
]

export function TrustSection() {
  return (
    <section className="bg-primary-light py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((p) => (
            <div key={p.label} className="text-center">
              <p.icon className="mx-auto h-8 w-8 text-primary" />
              <p className="mt-4 text-3xl font-extrabold text-slate-900">
                {p.stat}
              </p>
              <p className="mt-1 text-sm font-medium text-slate-600">
                {p.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
