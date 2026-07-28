import { MessageSquare, Search, Factory, ClipboardCheck, Truck, CheckCircle } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Tell Us What You Need',
    description: 'Share your product requirements, target price, quantity, and timeline. We respond within 24 hours.',
  },
  {
    number: '02',
    icon: Search,
    title: 'We Find & Verify Suppliers',
    description: 'Our team sources suitable factories, verifies credentials, and provides detailed supplier profiles.',
  },
  {
    number: '03',
    icon: Factory,
    title: 'Samples & Negotiation',
    description: 'We arrange samples, negotiate pricing, and help you finalize terms with your chosen supplier.',
  },
  {
    number: '04',
    icon: ClipboardCheck,
    title: 'Production & QC',
    description: 'We monitor production, conduct quality inspections, and keep you updated at every stage.',
  },
  {
    number: '05',
    icon: Truck,
    title: 'Shipping & Delivery',
    description: 'We handle logistics, customs documentation, and coordinate door-to-door delivery to your location.',
  },
  {
    number: '06',
    icon: CheckCircle,
    title: 'Follow-Up Support',
    description: 'Ongoing support for reorders, quality issues, and continuous supply chain improvement.',
  },
]

export default function ProcessSection() {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">How It Works</span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-4">
            Simple 6-Step Sourcing Process
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Our streamlined process makes sourcing from China straightforward, transparent, and risk-free.
          </p>
        </div>

        {/* Process steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              {/* Step number */}
              <div className="absolute top-4 right-4 text-5xl font-bold text-gray-100">
                {step.number}
              </div>

              {/* Icon */}
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                <step.icon className="h-7 w-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-navy mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="/how-it-works"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            Learn more about our process
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
