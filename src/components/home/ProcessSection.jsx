import * as React from "react"
import SectionTitle from "@/components/shared/SectionTitle"
import { FileText, Search, ShieldCheck, PackageCheck, Ship } from "lucide-react"

const steps = [
  {
    step: "01",
    icon: FileText,
    title: "Share your brief",
    description: "Send product specs, target price, quantity, and any supplier preferences.",
  },
  {
    step: "02",
    icon: Search,
    title: "Supplier search",
    description: "We shortlist 3–5 qualified factories and provide quotes and samples timeline.",
  },
  {
    step: "03",
    icon: ShieldCheck,
    title: "Verify & negotiate",
    description: "Factory audits, price negotiation, and contract terms before you commit.",
  },
  {
    step: "04",
    icon: PackageCheck,
    title: "QC & production follow-up",
    description: "Regular updates, inspections, and issue resolution during manufacturing.",
  },
  {
    step: "05",
    icon: Ship,
    title: "Ship to destination",
    description: "Consolidation, documentation, and delivery to your warehouse or fulfilment centre.",
  },
]

export default function ProcessSection() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-page">
        <SectionTitle
          eyebrow="How it works"
          title="A clear sourcing process you can track"
          description="No hidden steps. You see every milestone from supplier shortlist to shipment."
        />
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {steps.map((item, idx) => (
            <div key={idx} className="relative text-center">
              <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-white border border-slate-200 text-brand-600 shadow-sm">
                <item.icon className="h-6 w-6" />
              </div>
              <div className="mt-4 text-xs font-bold uppercase tracking-wider text-slate-400">Step {item.step}</div>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.description}</p>
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-7 left-[60%] w-[80%] h-[1px] bg-slate-200" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
