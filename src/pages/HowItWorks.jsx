import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { 
  FileText, Search, ClipboardCheck, Factory, Ship, CheckCircle,
  ArrowRight, Phone, Mail, Calendar
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const steps = [
  {
    number: '01',
    icon: FileText,
    title: 'Submit Your Requirements',
    desc: 'Fill out our inquiry form or contact us directly. Tell us about your product, target price, quality standards, quantity, and any specific requirements. We\'ll review your project and respond within 24 hours.',
    details: [
      'Product specifications and drawings',
      'Target price and budget range',
      'Required certifications and standards',
      'Expected order quantity and timeline',
      'Any existing supplier information',
    ],
  },
  {
    number: '02',
    icon: Search,
    title: 'Supplier Research & Matching',
    desc: 'Our team researches the Chinese market to find suppliers that match your criteria. We evaluate potential partners based on capabilities, certifications, trade history, and client references.',
    details: [
      'Market research and supplier database search',
      'Initial screening and capability assessment',
      'Shortlist of 3-5 qualified suppliers',
      'Detailed supplier profiles with recommendations',
      'Price indication and lead time estimates',
    ],
  },
  {
    number: '03',
    icon: ClipboardCheck,
    title: 'Verification & Sampling',
    desc: 'We conduct thorough verification of shortlisted suppliers, including factory audits and credential checks. Samples are coordinated for your evaluation before any commitment.',
    details: [
      'On-site factory audit with photo documentation',
      'Business license and certification verification',
      'Sample request and coordination',
      'Sample evaluation and feedback collection',
      'Negotiation support for pricing and terms',
    ],
  },
  {
    number: '04',
    icon: Factory,
    title: 'Order & Production Management',
    desc: 'Once you select a supplier, we help finalize contracts, manage the order process, and monitor production from start to finish with regular updates.',
    details: [
      'Contract review and finalization support',
      'Payment term structuring (escrow, L/C, T/T)',
      'Production schedule creation and tracking',
      'Raw material inspection at factory',
      'Weekly progress reports with photos',
    ],
  },
  {
    number: '05',
    icon: Ship,
    title: 'Quality Inspection & Shipping',
    desc: 'Before shipment, we conduct thorough quality inspections. Once approved, we handle all logistics including packaging, documentation, and shipping arrangements.',
    details: [
      'Pre-shipment inspection (AQL 2.5 standard)',
      'Defect reporting and resolution',
      'Packaging and labeling verification',
      'Customs documentation preparation',
      'Freight booking and cargo tracking',
    ],
  },
  {
    number: '06',
    icon: CheckCircle,
    title: 'Delivery & Ongoing Support',
    desc: 'After delivery, we remain your partner for post-shipment support, repeat orders, and ongoing supplier relationship management.',
    details: [
      'Delivery confirmation and documentation',
      'Post-delivery quality follow-up',
      'Warranty issue mediation if needed',
      'Repeat order optimization',
      'Long-term supplier relationship management',
    ],
  },
]

export default function HowItWorks() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-brand-600 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">How It Works</h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              A transparent, structured process designed to minimize risk and maximize results. 
              From your first inquiry to final delivery, we guide you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 md:space-y-16">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Timeline connector */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-8 top-20 bottom-0 w-0.5 bg-gray-200" />
                )}
                <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                  {/* Step number */}
                  <div className="flex md:flex-col items-center md:items-center gap-4 md:gap-2 shrink-0">
                    <div className="w-16 h-16 bg-brand-500 rounded-full flex items-center justify-center">
                      <step.icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="text-2xl font-bold text-brand-200 md:text-center">{step.number}</span>
                  </div>
                  {/* Content */}
                  <div className="flex-1 bg-white rounded-lg p-6 md:p-8 border border-gray-100 shadow-sm">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">{step.title}</h2>
                    <p className="text-gray-500 mb-4 leading-relaxed">{step.desc}</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                          {detail}
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
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Typical Timeline</h2>
            <p className="text-gray-500">Estimated timeframes for a standard sourcing project</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { phase: 'Research & Matching', time: '1-2 weeks' },
              { phase: 'Verification & Sampling', time: '2-4 weeks' },
              { phase: 'Production', time: '4-12 weeks' },
              { phase: 'Inspection & Shipping', time: '1-3 weeks' },
            ].map((item) => (
              <div key={item.phase} className="bg-white rounded-lg p-5 text-center border border-gray-100 shadow-sm">
                <Calendar className="w-6 h-6 text-accent-500 mx-auto mb-2" />
                <div className="text-sm font-semibold text-gray-900 mb-1">{item.phase}</div>
                <div className="text-xs text-gray-500">{item.time}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-400 mt-6">
            Timelines vary based on product complexity, order quantity, and supplier availability.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-brand-500">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Start Your Sourcing Project
          </h2>
          <p className="text-brand-200 mb-8">
            Tell us about your product requirements and we'll create a customized sourcing plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="accent" size="lg" className="text-base">
                Get a Free Sourcing Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <a href="tel:+86-1234567890" className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-md text-base font-medium border border-white/30 text-white hover:bg-white/10 transition-colors">
              <Phone className="w-5 h-5" />
              Call +86 123 4567 890
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}