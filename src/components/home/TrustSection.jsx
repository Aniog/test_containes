import { Globe, Users, Award, Clock } from "lucide-react"

const stats = [
  { icon: Globe, value: "12+", label: "Years in China sourcing" },
  { icon: Users, value: "500+", label: "Factories in our network" },
  { icon: Award, value: "2,400+", label: "QC inspections completed" },
  { icon: Clock, value: "48h", label: "Initial supplier shortlist" },
]

export default function TrustSection() {
  return (
    <section className="bg-white py-16 md:py-24 border-y border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-brand">
                <stat.icon className="h-6 w-6" />
              </div>
              <div className="text-3xl md:text-4xl font-extrabold text-slate-900">{stat.value}</div>
              <div className="mt-1 text-sm text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
