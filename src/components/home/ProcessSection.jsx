import SectionHeading from '@/components/shared/SectionHeading'

const steps = [
  {
    number: '01',
    title: 'Tell us what you need',
    desc: 'Send us your product details, target price, quantity and certifications. We confirm the brief within 1 business day.',
  },
  {
    number: '02',
    title: 'Supplier shortlist & quotes',
    desc: 'We source 3–5 qualified suppliers, request samples and prepare a clear comparison of pricing, MOQ and lead time.',
  },
  {
    number: '03',
    title: 'Factory verification',
    desc: 'On-site audit of the chosen factory: business license, production lines, capacity and quality systems.',
  },
  {
    number: '04',
    title: 'Production & QC',
    desc: 'We follow production weekly and inspect goods at key stages (DUPRO, pre-shipment) with detailed AQL reports.',
  },
  {
    number: '05',
    title: 'Shipping & delivery',
    desc: 'Consolidation, export documents, freight booking and door-to-door delivery to your warehouse or Amazon FBA.',
  },
]

export default function ProcessSection() {
  return (
    <section className="bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <SectionHeading
          eyebrow="How it works"
          title="A clear, step-by-step sourcing process"
          description="No surprises. You always know which stage your order is in and what happens next."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, idx) => (
            <div key={step.number} className="relative">
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm h-full">
                <span className="text-sm font-bold text-blue-700">{step.number}</span>
                <h3 className="mt-2 text-lg font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-slate-300" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
