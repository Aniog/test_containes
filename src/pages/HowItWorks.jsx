import { Link } from 'react-router-dom'
import { ArrowRight, MessageSquare, Search, ShieldCheck, Package, ClipboardCheck, Ship, CheckCircle } from 'lucide-react'

const steps = [
  {
    icon: MessageSquare,
    step: '01',
    title: 'Submit Your Requirements',
    desc: 'Fill out our inquiry form with your product details, target price, quantity, quality standards, and timeline. The more detail you provide, the faster we can match you with the right suppliers.',
    details: ['Product specifications & drawings', 'Target FOB/CIF price', 'Order quantity & MOQ flexibility', 'Required certifications', 'Delivery timeline'],
  },
  {
    icon: Search,
    step: '02',
    title: 'Supplier Research & Shortlisting',
    desc: 'Our team researches the market, contacts potential suppliers, and shortlists 3-5 qualified candidates. We compare pricing, capabilities, and track records to find the best fit.',
    details: ['Database & market research', 'Initial supplier screening', 'Price & capability comparison', 'Background verification', 'Shortlist presentation'],
  },
  {
    icon: ShieldCheck,
    step: '03',
    title: 'Factory Audit & Verification',
    desc: 'We visit the top candidates in person to verify their facilities, production capacity, quality systems, and business legitimacy. You receive a detailed audit report.',
    details: ['On-site factory visit', 'Production line inspection', 'Quality system review', 'Business license check', 'Detailed photo report'],
  },
  {
    icon: Package,
    step: '04',
    title: 'Sampling & Negotiation',
    desc: 'We manage the sampling process, review samples against your specs, and negotiate final pricing, payment terms, and production timelines on your behalf.',
    details: ['Sample request & follow-up', 'Quality review vs. specs', 'Price negotiation', 'Contract terms finalization', 'Payment structure setup'],
  },
  {
    icon: ClipboardCheck,
    step: '05',
    title: 'Production Monitoring & QC',
    desc: 'During production, we conduct regular factory visits, track progress against milestones, and perform quality inspections at key stages to catch issues early.',
    details: ['Production kickoff meeting', 'Weekly progress updates', 'In-line quality checks', 'Pre-shipment inspection', 'Defect resolution'],
  },
  {
    icon: Ship,
    step: '06',
    title: 'Shipping & Delivery',
    desc: 'We coordinate logistics from factory to your warehouse — booking freight, preparing export documents, supervising container loading, and tracking shipment until delivery.',
    details: ['Freight booking & routing', 'Export documentation', 'Container loading check', 'Customs coordination', 'Delivery confirmation'],
  },
]

export default function HowItWorksPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-blue-400 font-semibold text-sm uppercase tracking-wider mb-3">Our Process</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
              How It Works
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              A transparent, step-by-step process designed to keep you informed and in control from initial inquiry to final delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((item, index) => (
              <div key={item.step} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-6 top-16 bottom-0 w-px bg-blue-100" style={{ height: 'calc(100% + 4rem)' }} />
                )}
                <div className="flex gap-6">
                  <div className="shrink-0">
                    <div className="w-12 h-12 rounded-full bg-blue-800 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <span className="text-blue-800 font-bold text-sm">Step {item.step}</span>
                    <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight mt-1 mb-3">{item.title}</h2>
                    <p className="text-slate-600 leading-relaxed mb-4">{item.desc}</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {item.details.map((detail) => (
                        <li key={detail} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 shrink-0" />
                          <span className="text-slate-700 text-sm">{detail}</span>
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

      {/* CTA */}
      <section className="bg-blue-800 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">Ready to Get Started?</h2>
          <p className="text-blue-200 text-lg mb-8">Submit your sourcing requirements and receive a free proposal within 24 hours.</p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg text-base no-underline transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
