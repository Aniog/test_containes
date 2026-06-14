import * as React from "react"
import { Search, FileText, Cog, Truck } from "lucide-react"
import { SectionHeading } from "@/components/ui/SectionHeading"

const steps = [
  {
    icon: Search,
    n: "01",
    title: "Discovery",
    body:
      "We start with a 30-minute call to understand your parts, materials, volumes and the constraints of your shop floor.",
  },
  {
    icon: FileText,
    n: "02",
    title: "Spec & quote",
    body:
      "Within 48 hours you'll have a fixed-price quote, a CAD layout for your floor, and a clear delivery timeline.",
  },
  {
    icon: Cog,
    n: "03",
    title: "Build & commission",
    body:
      "Your machine is built, factory-acceptance tested, shipped and installed by an ARTITECT engineer. We train your team on day three.",
  },
  {
    icon: Truck,
    n: "04",
    title: "Lifetime support",
    body:
      "24/7 remote diagnostics, preventive maintenance, and a 10-year frame warranty. We don't disappear after delivery.",
  },
]

export function Process() {
  return (
    <section
      id="process"
      className="bg-ink py-24 md:py-32 border-t border-line"
    >
      <div className="container-x">
        <SectionHeading
          align="center"
          eyebrow="How we work"
          title="From first call to first part in four steps."
          subtitle="A predictable process is the difference between a tool and a headache. Here's exactly what working with ARTITECT looks like."
        />

        <ol className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map(({ icon: Icon, n, title, body }) => (
            <li
              key={n}
              className="relative rounded-md border border-line bg-slate-850 p-6 lg:p-7"
            >
              <div className="flex items-center justify-between">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-copper-500/40 bg-copper-500/10 text-copper-400">
                  <Icon className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <span className="text-3xl font-semibold text-text-dim tabular leading-none">
                  {n}
                </span>
              </div>
              <h3 className="mt-7 text-lg font-semibold text-text">{title}</h3>
              <p className="mt-2 text-sm text-text-muted leading-relaxed">
                {body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
