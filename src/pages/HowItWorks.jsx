import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { 
  FileText, 
  Search, 
  Building2, 
  FlaskConical, 
  TrendingUp, 
  Ship,
  ArrowRight,
  CheckCircle
} from 'lucide-react'

const steps = [
  {
    icon: FileText,
    step: '01',
    title: 'Submit Your Requirements',
    duration: 'Day 1',
    desc: 'You tell us about your product, target price, required quality standards, and delivery timeline. The more detail you provide, the more targeted our search will be.',
    details: [
      'Fill out our inquiry form or schedule a call',
      'We clarify any questions about your requirements',
      'We provide a service proposal and cost estimate',
      'Once agreed, we begin the sourcing process',
    ],
  },
  {
    icon: Search,
    step: '02',
    title: 'Supplier Identification',
    duration: '1-2 Weeks',
    desc: 'We search our database of verified suppliers, online B2B platforms, trade show contacts, and industry networks to find manufacturers that match your criteria.',
    details: [
      'Initial shortlist of 5-10 potential suppliers',
      'Capability and capacity pre-assessment',
      'Preliminary pricing and MOQ information',
      'Shortlist narrowed to 3-5 best candidates',
    ],
  },
  {
    icon: Building2,
    step: '03',
    title: 'Factory Audit & Verification',
    duration: '1-2 Weeks',
    desc: 'Our team visits shortlisted factories in person to verify their legitimacy, production capabilities, and quality systems. We provide detailed audit reports with photo and video evidence.',
    details: [
      'On-site factory visit and inspection',
      'Business license and certification verification',
      'Production line and equipment assessment',
      'Detailed audit report with recommendations',
    ],
  },
  {
    icon: FlaskConical,
    step: '04',
    title: 'Sample & Negotiation',
    duration: '2-4 Weeks',
    desc: 'We coordinate sampling, negotiate pricing, payment terms, and delivery schedules. We ensure contracts protect your interests and include clear quality specifications.',
    details: [
      'Sample request and coordination',
      'Quality evaluation against specifications',
      'Price and payment terms negotiation',
      'Contract review and finalization',
    ],
  },
  {
    icon: TrendingUp,
    step: '05',
    title: 'Production Management',
    duration: '4-12 Weeks',
    desc: 'Once production begins, we monitor progress, check raw materials, conduct in-process inspections, and keep you updated with regular reports.',
    details: [
      'Raw material inspection at factory',
      'During-production quality checks',
      'Weekly progress reports with photos',
      'Timeline monitoring and issue escalation',
    ],
  },
  {
    icon: Ship,
    step: '06',
    title: 'Inspection & Shipping',
    duration: '1-3 Weeks',
    desc: 'Final quality inspection, packaging verification, and full logistics coordination. We ensure your goods are shipped safely and arrive on time.',
    details: [
      'Pre-shipment inspection (AQL sampling)',
      'Packaging and labeling verification',
      'Container loading supervision',
      'Freight booking and customs documentation',
    ],
  },
]

export default function HowItWorks() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-brand-500 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">How It Works</h1>
            <p className="text-lg md:text-xl text-brand-200 leading-relaxed">
              A transparent, proven process that takes you from product requirement to delivered goods. No surprises, no shortcuts.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Vertical Line */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200" />

            <div className="space-y-12">
              {steps.map((step, i) => (
                <div key={i} className="relative flex flex-col md:flex-row gap-6 md:gap-10">
                  {/* Step Number */}
                  <div className="md:static flex items-center gap-4 md:flex-col md:items-center">
                    <div className="w-16 h-16 bg-brand-500 rounded-2xl flex items-center justify-center shrink-0 relative z-10">
                      <step.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="md:text-center md:mt-2">
                      <div className="text-sm font-bold text-brand-500">{step.step}</div>
                      <div className="text-xs text-gray-400">{step.duration}</div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white rounded-xl border border-gray-100 p-6 md:p-8 shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{step.desc}</p>
                    <ul className="space-y-1.5">
                      {step.details.map((detail, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-3.5 h-3.5 text-green-500 mt-0.5 shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Summary */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-gray-100 p-8 md:p-12 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Typical Timeline</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-extrabold text-brand-500">1-2</div>
                <div className="text-sm text-gray-500">Weeks for supplier search</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-brand-500">1-2</div>
                <div className="text-sm text-gray-500">Weeks for factory audit</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-brand-500">2-4</div>
                <div className="text-sm text-gray-500">Weeks for sampling</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-brand-500">4-12</div>
                <div className="text-sm text-gray-500">Weeks for production</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-brand-500">1-3</div>
                <div className="text-sm text-gray-500">Weeks for shipping</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-brand-500">8-20</div>
                <div className="text-sm text-gray-500">Weeks total (typical)</div>
              </div>
            </div>
            <p className="text-xs text-gray-400 text-center mt-6">
              Timelines vary based on product complexity, customization, and supplier availability.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Start Your Sourcing Project</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
            Tell us what you need and we will guide you through every step.
          </p>
          <Link to="/contact">
            <Button variant="default" size="xl">
              Get a Free Sourcing Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}