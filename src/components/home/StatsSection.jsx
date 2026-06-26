import { Factory, Globe, Users, Wrench } from "lucide-react"

const stats = [
  { icon: Factory, value: "25+", label: "Years in Manufacturing" },
  { icon: Globe, value: "60+", label: "Countries Served" },
  { icon: Wrench, value: "12K+", label: "Machines Installed" },
  { icon: Users, value: "98%", label: "Customer Retention" },
]

export default function StatsSection() {
  return (
    <section className="bg-slate-900 border-y border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-slate-800">
          {stats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="bg-slate-900 px-6 py-10 md:py-12 text-center"
            >
              <Icon className="mx-auto h-7 w-7 text-cyan-400 mb-3" />
              <p className="text-3xl md:text-4xl font-extrabold text-slate-50">
                {value}
              </p>
              <p className="mt-1 text-sm text-slate-400">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
