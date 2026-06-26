import {
  Building2,
  Car,
  Container,
  Flame,
  Plane,
  Zap,
} from "lucide-react"

const applications = [
  {
    icon: Building2,
    title: "Architectural Metalwork",
    description: "Flashings, fascia panels, coping caps, and trim profiles.",
  },
  {
    icon: Car,
    title: "Automotive & Transport",
    description: "Chassis brackets, body panels, and custom fabrications.",
  },
  {
    icon: Zap,
    title: "Electrical Enclosures",
    description: "Switchgear cabinets, server racks, and junction boxes.",
  },
  {
    icon: Flame,
    title: "HVAC & Ductwork",
    description: "Duct sections, transitions, and custom fittings.",
  },
  {
    icon: Plane,
    title: "Aerospace Components",
    description: "Light-gauge precision forms and prototype assemblies.",
  },
  {
    icon: Container,
    title: "Storage & Shelving",
    description: "Boxes, trays, lockers, and warehouse racking parts.",
  },
]

export default function ApplicationsSection() {
  return (
    <section
      id="applications"
      className="bg-slate-950 py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest">
            Industries Served
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-slate-50">
            Engineered for Every Application
          </h2>
          <p className="mt-4 text-slate-400 text-lg">
            ARTITECT folding machines handle the materials, thicknesses, and
            profiles that matter to your industry.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-xl border border-slate-800 bg-slate-900 p-6 transition-colors hover:border-cyan-500/30"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 mb-4">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-50">{title}</h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
