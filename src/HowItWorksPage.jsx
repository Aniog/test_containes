import { Link } from 'react-router-dom'
import { Button, Badge } from './ui.jsx'

const STEPS = [
  {
    step: '01',
    title: 'Requirement Analysis',
    description: 'You share your product specifications, target price, order volume, quality standards, and timeline. Our industry specialists review and clarify every detail to ensure we fully understand your needs.',
    deliverables: ['Project brief document', 'Feasibility assessment', 'Sourcing strategy proposal'],
    timeline: '1–3 business days',
  },
  {
    step: '02',
    title: 'Supplier Identification & Shortlisting',
    description: 'We search our database of 500+ verified factories and also reach out through our industry networks. We evaluate candidates based on capability, capacity, certifications, and past performance.',
    deliverables: ['Supplier longlist (8–15 candidates)', 'Capability matrix comparison', 'Preliminary pricing estimates'],
    timeline: '3–7 business days',
  },
  {
    step: '03',
    title: 'Factory Audit & Verification',
    description: 'Our Guangzhou-based team visits the top 3–5 factories in person. We verify business licenses, inspect facilities, assess equipment and workforce, review quality systems, and interview management.',
    deliverables: ['On-site audit reports with photos/video', 'Certification verification', 'Final shortlist (3–5 factories)'],
    timeline: '5–10 business days',
  },
  {
    step: '04',
    title: 'Negotiation & Sampling',
    description: 'We negotiate pricing, payment terms, MOQ, lead times, and quality standards with shortlisted factories. We arrange sample production and coordinate shipping of samples to you for approval.',
    deliverables: ['Negotiated terms comparison', 'Sample coordination', 'Pricing confirmation'],
    timeline: '2–4 weeks (depending on samples)',
  },
  {
    step: '05',
    title: 'Production Monitoring & QC',
    description: 'Once production begins, we conduct regular inspections. At minimum: pre-production check, during production inspection at 30–50% completion, and final pre-shipment inspection with AQL sampling.',
    deliverables: ['Weekly progress reports with photos', 'Inspection reports at each stage', 'Corrective action tracking'],
    timeline: 'Based on production lead time',
  },
  {
    step: '06',
    title: 'Shipping & Delivery',
    description: 'We coordinate freight forwarding, prepare all export documentation, supervise container loading, and track the shipment until it reaches your destination port or warehouse.',
    deliverables: ['Shipping documentation package', 'Loading supervision report', 'Tracking & delivery confirmation'],
    timeline: 'Based on shipping method',
  },
]

export default function HowItWorksPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-blue-900 text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <Badge variant="green" className="mb-4 bg-white/10 text-green-300 border-0">How It Works</Badge>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Our Proven Sourcing Process</h1>
            <p className="text-lg text-blue-100 leading-relaxed mb-8">
              A structured 6-step methodology that eliminates guesswork and ensures consistent results — from your first inquiry to final delivery.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 border-0 shadow-lg">
                Start Your Project
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-0">
            {STEPS.map((step, i) => (
              <div key={i} className="relative pl-12 md:pl-20 pb-16 last:pb-0">
                {/* Timeline line */}
                {i < STEPS.length - 1 && (
                  <div className="absolute left-[19px] md:left-[35px] top-12 bottom-0 w-0.5 bg-blue-200" />
                )}
                {/* Step number */}
                <div className="absolute left-0 md:left-4 top-0 w-10 h-10 md:w-14 md:h-14 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold text-lg md:text-xl shadow-lg">
                  {step.step}
                </div>
                {/* Content */}
                <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8 shadow-sm">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900">{step.title}</h3>
                    <span className="text-xs font-medium text-gray-400 bg-gray-100 px-3 py-1 rounded-full">{step.timeline}</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-5">{step.description}</p>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">Deliverables</h4>
                    <div className="flex flex-wrap gap-2">
                      {step.deliverables.map((d, j) => (
                        <span key={j} className="bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1.5 rounded-full">{d}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Note */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How Long Does It Take?</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Typical sourcing projects take 4–8 weeks from initial inquiry to production start, depending on product complexity and sampling requirements. Rush timelines are available for urgent projects.
          </p>
          <Link to="/contact">
            <Button variant="primary">Discuss Your Timeline</Button>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Begin Your Sourcing Journey?</h2>
          <p className="text-blue-100 mb-8 text-lg">Tell us what you need and we will get started within 24 hours.</p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 border-0 shadow-lg">
              Get a Free Sourcing Quote
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}