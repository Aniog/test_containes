import { SectionLabel } from "@/components/ui/SectionLabel"

const steps = [
  {
    step: "01",
    title: "Tell us what you need",
    desc: "Share product specs, target price, quantity, and any supplier preferences.",
  },
  {
    step: "02",
    title: "We find & verify suppliers",
    desc: "We shortlist factories, check credentials, and negotiate on your behalf.",
  },
  {
    step: "03",
    title: "Sample & order management",
    desc: "We coordinate samples, quotations, contracts, and production milestones.",
  },
  {
    step: "04",
    title: "Quality control & shipping",
    desc: "We inspect, load containers, and manage logistics until delivery is complete.",
  },
]

export function ProcessSection() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <SectionLabel>How It Works</SectionLabel>
          <h2 id="process-title" className="text-3xl font-bold sm:text-4xl">
            A Simple, Transparent Sourcing Process
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            We keep you informed at every step with clear updates and direct
            communication.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.step} className="relative">
              <span className="text-5xl font-extrabold text-slate-200">
                {s.step}
              </span>
              <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
