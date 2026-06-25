import SectionHeader from '../SectionHeader'

const steps = [
  {
    number: '01',
    title: 'Send us your brief',
    description:
      'Share your product specs, target price, quantity and any reference photos or samples. We confirm scope within one business day.',
  },
  {
    number: '02',
    title: 'Supplier shortlist',
    description:
      'We search our supplier network and Chinese B2B platforms, screen factories and send you 3–5 vetted options with quotes.',
  },
  {
    number: '03',
    title: 'Factory verification',
    description:
      'We visit short-listed factories in person to confirm business license, production lines, equipment and real capacity.',
  },
  {
    number: '04',
    title: 'Samples & negotiation',
    description:
      'We collect samples, manage your feedback, and negotiate prices, MOQ, payment terms and lead times in Chinese.',
  },
  {
    number: '05',
    title: 'Production & QC',
    description:
      'During production we follow up weekly. Before shipping, we run a pre-shipment inspection with a full photo and AQL report.',
  },
  {
    number: '06',
    title: 'Shipping & delivery',
    description:
      'We book sea or air freight, handle documents and consolidation, and track the shipment until it reaches your door.',
  },
]

export default function ProcessSection() {
  return (
    <section className="bg-slate-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="How it works"
          title="A clear, six-step sourcing process"
          description="No black box. You get visibility at every stage, from supplier shortlist to delivered goods."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative rounded-xl border border-slate-200 bg-white p-6 md:p-7"
            >
              <span className="text-sm font-semibold tracking-[0.18em] text-[#1B6FB8]">
                STEP {step.number}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-[#0B2545]">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
