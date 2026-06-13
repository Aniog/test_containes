import { Link } from 'react-router-dom'
import { ArrowRight, MessageSquare, Search, FileText, CheckCircle, ClipboardCheck, Ship, Package } from 'lucide-react'

const steps = [
  {
    icon: MessageSquare,
    step: 1,
    title: 'Submit Your Sourcing Request',
    description: 'Share your product requirements including specifications, target price, order quantity, and any quality standards. The more detail you provide, the more accurate our sourcing will be.',
    details: [
      'Product specifications and technical requirements',
      'Target price range and order quantity',
      'Quality standards and certifications needed',
      'Preferred timeline and delivery terms',
    ],
  },
  {
    icon: Search,
    step: 2,
    title: 'Supplier Identification & Verification',
    description: 'We search our network and the broader market to find manufacturers that match your requirements. Every shortlisted supplier goes through our verification process.',
    details: [
      'Search across verified factory database and industry directories',
      'Business license and registration verification',
      'Production capacity and capability assessment',
      'Initial contact and quotation request',
    ],
  },
  {
    icon: FileText,
    step: 3,
    title: 'Quotation Comparison & Sampling',
    description: 'We present you with a comparison of quotations from multiple suppliers, including pricing, lead times, and terms. We coordinate sample production so you can evaluate quality before committing.',
    details: [
      'Side-by-side quotation comparison',
      'Sample ordering and quality evaluation',
      'Price negotiation with shortlisted suppliers',
      'Recommendation based on your priorities',
    ],
  },
  {
    icon: CheckCircle,
    step: 4,
    title: 'Order Confirmation & Production Start',
    description: 'Once you select a supplier, we help finalize the purchase agreement, confirm all specifications, and monitor the start of production.',
    details: [
      'Purchase order review and confirmation',
      'Specification alignment with factory',
      'Production schedule establishment',
      'Deposit payment coordination (if needed)',
    ],
  },
  {
    icon: ClipboardCheck,
    step: 5,
    title: 'Production Monitoring & Quality Control',
    description: 'Throughout production, we provide regular updates and conduct quality inspections at key stages to ensure everything meets your standards.',
    details: [
      'Weekly progress reports with photos',
      'During-production inspection at 20-30% completion',
      'Pre-shipment inspection (PSI) before goods leave factory',
      'Issue identification and corrective action coordination',
    ],
  },
  {
    icon: Ship,
    step: 6,
    title: 'Shipping & Delivery',
    description: 'We coordinate all logistics from the factory to your destination, including freight forwarding, customs documentation, and delivery tracking.',
    details: [
      'Freight forwarding arrangement (sea, air, or express)',
      'Export documentation preparation',
      'Customs clearance support',
      'Shipment tracking until delivery',
    ],
  },
]

export default function HowItWorks() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">How It Works</h1>
            <p className="mt-4 text-lg text-slate-300 leading-relaxed">
              A transparent, step-by-step process from your initial inquiry to final delivery. You stay informed at every stage.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {steps.map((step, i) => (
              <div key={step.step} className="relative">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="absolute left-6 top-14 bottom-0 w-0.5 bg-slate-200 hidden sm:block" />
                )}
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1 pt-1">
                    <step.icon className="w-6 h-6 text-blue-700 mb-2" />
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">{step.title}</h2>
                    <p className="text-slate-600 leading-relaxed mb-4">{step.description}</p>
                    <ul className="space-y-2">
                      {step.details.map((detail, di) => (
                        <li key={di} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" />
                          <span className="text-sm text-slate-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Summary */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Typical Timeline</h2>
            <p className="mt-4 text-lg text-slate-600">
              Timelines vary by product complexity and order size. Here is a general guide.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white rounded-lg border border-slate-200 text-center">
              <div className="text-3xl font-bold text-blue-700 mb-1">1-2 weeks</div>
              <div className="text-sm font-medium text-slate-900">Supplier Identification</div>
              <div className="text-xs text-slate-500 mt-1">Finding and vetting factories</div>
            </div>
            <div className="p-6 bg-white rounded-lg border border-slate-200 text-center">
              <div className="text-3xl font-bold text-blue-700 mb-1">2-4 weeks</div>
              <div className="text-sm font-medium text-slate-900">Sampling</div>
              <div className="text-xs text-slate-500 mt-1">Sample production and evaluation</div>
            </div>
            <div className="p-6 bg-white rounded-lg border border-slate-200 text-center">
              <div className="text-3xl font-bold text-blue-700 mb-1">3-8 weeks</div>
              <div className="text-sm font-medium text-slate-900">Production</div>
              <div className="text-xs text-slate-500 mt-1">Manufacturing and QC</div>
            </div>
            <div className="p-6 bg-white rounded-lg border border-slate-200 text-center">
              <div className="text-3xl font-bold text-blue-700 mb-1">2-6 weeks</div>
              <div className="text-sm font-medium text-slate-900">Shipping</div>
              <div className="text-xs text-slate-500 mt-1">Freight and customs clearance</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Start Your Sourcing Journey</h2>
          <p className="mt-4 text-lg text-slate-600">
            Ready to find reliable suppliers in China? Submit your requirements and we will get started.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-700 text-white font-medium rounded-md hover:bg-blue-800 transition-colors"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
