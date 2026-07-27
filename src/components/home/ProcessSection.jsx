import SectionHeader from "@/components/shared/SectionHeader"
import { ClipboardList, Search, FileCheck, Truck, Handshake } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Share Your Requirements",
    description: "Tell us what you need: product specs, target price, order volume, and delivery destination.",
  },
  {
    number: "02",
    icon: Search,
    title: "We Find & Shortlist Suppliers",
    description: "Our team identifies 3–5 qualified factories and sends you clear quotations and comparisons.",
  },
  {
    number: "03",
    icon: FileCheck,
    title: "Verify & Sample",
    description: "We audit shortlisted suppliers, arrange samples, and report findings with photos and documents.",
  },
  {
    number: "04",
    icon: Handshake,
    title: "Place Order & Monitor Production",
    description: "We help finalize terms, then follow every production milestone and report progress.",
  },
  {
    number: "05",
    icon: Truck,
    title: "Quality Check & Shipping",
    description: "Final inspection, consolidation support, and shipping coordination until goods are on their way.",
  },
]

export default function ProcessSection() {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="How It Works"
          title="A clear, five-step sourcing process"
          description="No hidden steps. We keep you informed at every stage so you can make decisions with confidence."
          centered
        />
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-slate-200 hidden md:block" />
          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.number} className="relative flex flex-col md:flex-row gap-6 md:items-start md:pl-20">
                <div className="hidden md:flex absolute left-0 top-0 h-16 w-16 items-center justify-center rounded-full bg-white border border-slate-200 shadow-sm text-brand font-bold">
                  {step.number}
                </div>
                <div className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white font-bold text-sm">
                  {step.number}
                </div>
                <div className="flex-1 rounded-lg bg-white p-6 shadow-sm border border-slate-200">
                  <div className="flex items-center gap-3 mb-3">
                    <step.icon className="h-5 w-5 text-teal" />
                    <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
