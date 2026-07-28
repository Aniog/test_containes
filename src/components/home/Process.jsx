import SectionHeader from "@/components/ui/SectionHeader"

const steps = [
  {
    number: "01",
    title: "Share your request",
    description: "Send product specs, target price, quantity, and destination. We review and confirm feasibility within 24 hours.",
  },
  {
    number: "02",
    title: "Supplier matching",
    description: "We research and shortlist 3–5 qualified factories, then collect quotes, samples, and lead-time estimates.",
  },
  {
    number: "03",
    title: "Verification & sampling",
    description: "Our team audits the top candidates, verifies certifications, and arranges samples for your approval.",
  },
  {
    number: "04",
    title: "Order & production",
    description: "We negotiate terms, place the PO, monitor production milestones, and perform inline inspections.",
  },
  {
    number: "05",
    title: "QC & shipping",
    description: "Final inspection, container loading supervision, and export documentation — until your cargo is on its way.",
  },
]

export default function Process() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-site">
        <SectionHeader
          label="How It Works"
          title="A clear sourcing process"
          description="We keep every stage transparent so you always know where your order stands."
        />
        <div className="relative">
          <div className="absolute left-8 top-0 hidden h-full w-0.5 bg-slate-200 md:block" />
          <div className="space-y-8 md:space-y-12">
            {steps.map((step) => (
              <div key={step.number} className="relative flex flex-col gap-6 md:flex-row md:items-start">
                <div className="z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
                  {step.number}
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                  <h3 className="text-xl font-bold text-navy-900 md:text-2xl">{step.title}</h3>
                  <p className="mt-2 text-slate-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
