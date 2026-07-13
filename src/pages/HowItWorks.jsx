import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  ArrowRight, FileText, Search, Factory, 
  ClipboardCheck, Truck, CheckCircle, 
  MessageSquare, Phone
} from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: FileText,
    title: 'Submit Your Requirements',
    desc: 'Fill out our inquiry form with details about your product, target specifications, budget, and timeline. The more detail you provide, the faster we can match you with the right suppliers.',
    details: [
      'Complete the online inquiry form',
      'Share product specifications and drawings',
      'Indicate target price and quantity',
      'Specify any required certifications',
    ],
  },
  {
    number: '02',
    icon: MessageSquare,
    title: 'Free Consultation',
    desc: 'We review your requirements and schedule a call to discuss your project in detail. Our team asks clarifying questions to ensure we fully understand your needs before proceeding.',
    details: [
      'Project scope discussion',
      'Timeline and budget alignment',
      'Service proposal and fee structure',
      'Questions and answers session',
    ],
  },
  {
    number: '03',
    icon: Search,
    title: 'Supplier Research & Shortlisting',
    desc: 'We leverage our extensive supplier database and network to identify manufacturers that match your requirements. Each candidate is pre-screened before being presented to you.',
    details: [
      'Database search and industry connections',
      'Capability and capacity assessment',
      'Initial pricing and MOQ verification',
      'Presentation of 3-5 qualified candidates',
    ],
  },
  {
    number: '04',
    icon: Factory,
    title: 'Factory Verification',
    desc: 'Our team conducts physical on-site audits of shortlisted factories. We verify credentials, assess production capabilities, review quality systems, and check compliance with international standards.',
    details: [
      'On-site physical factory visit',
      'Business license and certification verification',
      'Production line and equipment inspection',
      'Quality management system review',
      'Comprehensive audit report provided',
    ],
  },
  {
    number: '05',
    icon: ClipboardCheck,
    title: 'Sampling & Negotiation',
    desc: 'We coordinate sample production, evaluate product quality against your specifications, and negotiate pricing, payment terms, and delivery schedules on your behalf.',
    details: [
      'Sample request coordination',
      'Quality evaluation and feedback',
      'Price and terms negotiation',
      'Contract review and finalization',
    ],
  },
  {
    number: '06',
    icon: Truck,
    title: 'Production & Delivery',
    desc: 'Once the order is placed, we monitor production progress, conduct quality inspections at key milestones, and coordinate shipping and logistics to your destination.',
    details: [
      'Production timeline management',
      'During-production quality checks',
      'Pre-shipment inspection',
      'Shipping and customs clearance',
      'Door-to-door delivery',
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
      <section className="bg-gradient-to-br from-primary via-primary to-primary-light pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="container-main">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">How It Works</h1>
            <p className="text-lg md:text-xl text-blue-200 leading-relaxed">
              A simple, transparent process from your initial inquiry to final delivery. 
              We guide you through every step of the sourcing journey.
            </p>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="max-w-4xl mx-auto">
            {steps.map((step, i) => (
              <div key={step.number} className="relative flex gap-6 md:gap-8 pb-16 last:pb-0">
                {/* Timeline Line */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute left-8 top-16 bottom-0 w-0.5 bg-gray-200" />
                )}
                
                {/* Step Number Badge */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary text-white rounded-xl flex items-center justify-center font-bold text-lg">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 card">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                      <step.icon className="w-5 h-5 text-primary-light" />
                    </div>
                    <h2 className="text-xl font-bold">{step.title}</h2>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{step.desc}</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-main text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-blue-200 mb-8 max-w-2xl mx-auto">
            Take the first step. Tell us about your project and we'll guide you through the rest.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg font-semibold text-base bg-white text-primary hover:bg-blue-50 transition-colors">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link to="/services" className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg font-semibold text-base border-2 border-white/30 text-white hover:bg-white/10 transition-colors">
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}