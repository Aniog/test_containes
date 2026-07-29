import { FileText, Search, ClipboardCheck, Truck, CheckCircle } from 'lucide-react'

const steps = [
  {
    icon: FileText,
    step: '01',
    title: 'Submit Your Requirements',
    description: 'Share your product specifications, quantity, quality standards, and target price. We review your needs within 24 hours.',
  },
  {
    icon: Search,
    step: '02',
    title: 'Supplier Sourcing & Verification',
    description: 'We identify qualified manufacturers, verify their credentials, and present you with vetted options and quotations.',
  },
  {
    icon: ClipboardCheck,
    step: '03',
    title: 'Sample Approval & Production',
    description: 'We coordinate sample production, manage quality checks during manufacturing, and keep you updated at every stage.',
  },
  {
    icon: Truck,
    step: '04',
    title: 'Inspection & Shipping',
    description: 'Final quality inspection before shipment, followed by logistics coordination and customs documentation for smooth delivery.',
  },
]

export default function HomeProcess() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-blue-700 font-semibold text-sm uppercase tracking-wide">Our Process</span>
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
            How We Source for You
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A clear, transparent process from your initial inquiry to final delivery.
            You stay informed at every step.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.step} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-blue-200 -translate-x-1/2 z-0" />
              )}
              <div className="relative bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-blue-700 font-bold text-sm">Step {step.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="/how-it-works"
            className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:gap-3 transition-all"
          >
            See the full process <CheckCircle className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
