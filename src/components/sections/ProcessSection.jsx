import SectionHeader from "@/components/ui/SectionHeader"

const steps = [
  {
    number: "01",
    title: "Tell us what you need",
    description:
      "Share product specs, target price, quantity, and any supplier preferences. We review and confirm requirements within one business day.",
  },
  {
    number: "02",
    title: "We source & verify",
    description:
      "We shortlist 3–5 qualified suppliers, verify factory credentials, and share quotes, samples, and audit summaries.",
  },
  {
    number: "03",
    title: "Place & manage the order",
    description:
      "We help negotiate terms, draft contracts, process samples, and schedule production with clear milestones.",
  },
  {
    number: "04",
    title: "Inspect before shipping",
    description:
      "Our QC team conducts inspections during production and before shipment, with photo reports and pass/fail guidance.",
  },
  {
    number: "05",
    title: "Coordinate delivery",
    description:
      "We handle export docs, booking, consolidation, and tracking until your goods arrive at the destination.",
  },
]

export default function ProcessSection() {
  return (
    <section className="section bg-white">
      <div className="container-main">
        <SectionHeader
          badge="How It Works"
          title="A simple, transparent sourcing process"
          description="We keep every stage visible, so you always know where your order stands."
        />

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-slate-200 md:left-1/2" />
          <div className="space-y-12">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0
              return (
                <div
                  key={step.number}
                  className={`relative flex flex-col md:flex-row md:items-center ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="flex-1 md:px-12" />
                  <div className="absolute left-4 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-accent text-xs font-bold text-white md:left-1/2">
                    {step.number}
                  </div>
                  <div className="flex-1 pl-12 md:px-12 md:pl-0">
                    <div className="card p-6">
                      <h3 className="text-lg font-semibold text-slate-900">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
