import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  MessageSquare, Search, Package, Factory, Eye, FileCheck, Truck, CheckCircle,
  ArrowRight, Phone, Mail, Globe
} from 'lucide-react'
import SectionHeader from '@/components/SectionHeader'

const steps = [
  {
    step: '01',
    icon: MessageSquare,
    title: 'Initial Consultation',
    timeline: 'Day 1-2',
    description: 'We discuss your sourcing needs, product specifications, target pricing, order quantities, and quality requirements. This helps us understand exactly what you need.',
    activities: [
      'Share product requirements and specifications',
      'Discuss target pricing and budget',
      'Define quality standards and certifications needed',
      'Agree on project scope and timeline',
    ],
    imgQuery: 'business consultation meeting discussion professional',
    imgId: 'step-consult-a1b2c3',
  },
  {
    step: '02',
    icon: Search,
    title: 'Supplier Identification',
    timeline: 'Day 3-7',
    description: 'We search our verified supplier network and the broader market to find factories that match your exact requirements.',
    activities: [
      'Search supplier database and industry contacts',
      'Screen suppliers for capability and reliability',
      'Request initial pricing and MOQ information',
      'Prepare a shortlist of qualified suppliers',
    ],
    imgQuery: 'supplier research database search factory evaluation',
    imgId: 'step-search-d4e5f6',
  },
  {
    step: '03',
    icon: Factory,
    title: 'Factory Verification',
    timeline: 'Day 7-10',
    description: 'We visit shortlisted factories to verify their capabilities, quality systems, and business legitimacy before recommending them.',
    activities: [
      'On-site factory visits and inspections',
      'Verify business licenses and certifications',
      'Assess production capacity and equipment',
      'Check quality management systems',
    ],
    imgQuery: 'factory verification audit inspection manufacturing',
    imgId: 'step-verify-g7h8i9',
  },
  {
    step: '04',
    icon: Package,
    title: 'Sample Development',
    timeline: 'Day 10-20',
    description: 'We coordinate sample production, evaluate quality against your specifications, and ship approved samples to you for review.',
    activities: [
      'Coordinate sample production with selected supplier',
      'Evaluate samples against specifications',
      'Photograph and document sample details',
      'Ship samples to you for approval',
    ],
    imgQuery: 'product samples development review quality check',
    imgId: 'step-sample-j0k1l2',
  },
  {
    step: '05',
    icon: Eye,
    title: 'Production Monitoring',
    timeline: 'Day 20-50',
    description: 'Once you approve samples and place your order, we monitor production closely with regular factory visits and progress reports.',
    activities: [
      'Confirm order details and production schedule',
      'Conduct pre-production material verification',
      'Perform in-line quality inspections',
      'Send regular progress updates with photos',
    ],
    imgQuery: 'production monitoring factory floor quality check',
    imgId: 'step-monitor-m3n4o5',
  },
  {
    step: '06',
    icon: FileCheck,
    title: 'Final Inspection',
    timeline: 'Day 50-55',
    description: 'Before shipping, we conduct a thorough pre-shipment inspection using AQL standards to ensure all products meet your specifications.',
    activities: [
      'Random sampling per AQL standards',
      'Check dimensions, function, and appearance',
      'Verify packaging and labeling',
      'Provide detailed inspection report',
    ],
    imgQuery: 'final quality inspection product checking warehouse',
    imgId: 'step-inspect-p6q7r8',
  },
  {
    step: '07',
    icon: Truck,
    title: 'Shipping & Delivery',
    timeline: 'Day 55-75',
    description: 'We handle all logistics from factory pickup to door delivery, including customs documentation and freight coordination.',
    activities: [
      'Coordinate container loading and supervision',
      'Prepare customs and export documentation',
      'Arrange freight forwarding (sea, air, or rail)',
      'Track shipment and coordinate final delivery',
    ],
    imgQuery: 'shipping container logistics cargo freight delivery',
    imgId: 'step-ship-s9t0u1',
  },
]

export default function HowItWorks() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-brand-dark to-brand-primary pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-semibold text-blue-200 uppercase tracking-wider mb-3">
              Our Process
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              How We Source Products from China
            </h1>
            <p className="mt-5 text-lg text-blue-100 leading-relaxed">
              Our proven 7-step process takes you from initial product idea to delivered goods, 
              with quality checks and transparency at every stage.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Overview */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 md:grid-cols-7 gap-4">
            {steps.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-10 h-10 mx-auto rounded-full bg-brand-primary text-white flex items-center justify-center text-sm font-bold mb-2">
                  {step.step}
                </div>
                <div className="text-xs font-semibold text-brand-dark">{step.timeline}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Steps */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {steps.map((step, idx) => (
              <div
                key={step.step}
                className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                  idx % 2 === 1 ? 'lg:direction-rtl' : ''
                }`}
              >
                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 rounded-full bg-brand-primary text-white flex items-center justify-center text-lg font-bold">
                      {step.step}
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-brand-accent">{step.timeline}</span>
                      <h2 className="text-2xl md:text-3xl font-bold text-brand-dark">{step.title}</h2>
                    </div>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {step.description}
                  </p>
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h4 className="text-sm font-bold text-brand-dark uppercase tracking-wider mb-3">
                      Key Activities
                    </h4>
                    <ul className="space-y-2.5">
                      {step.activities.map((activity) => (
                        <li key={activity} className="flex items-start gap-2.5">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img
                      data-strk-img-id={step.imgId}
                      data-strk-img={`[step-title-${step.imgId}] ${step.imgQuery}`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={step.title}
                      className="w-full h-auto object-cover"
                    />
                    <div id={`step-title-${step.imgId}`} className="sr-only">{step.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Summary */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-brand-dark mb-4">
            Typical Project Timeline
          </h2>
          <p className="text-gray-600 mb-8">
            From first contact to delivered goods, most projects take 60-75 days depending on 
            product complexity and shipping method.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="text-3xl font-bold text-brand-primary mb-1">5-10</div>
              <div className="text-sm text-gray-600">Days for sourcing & verification</div>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="text-3xl font-bold text-brand-primary mb-1">30-45</div>
              <div className="text-sm text-gray-600">Days for production</div>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="text-3xl font-bold text-brand-primary mb-1">20-35</div>
              <div className="text-sm text-gray-600">Days for shipping (sea freight)</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-brand-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Have a Product to Source?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Start with a free consultation. We will review your requirements and 
            provide a detailed sourcing plan within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-accent hover:bg-orange-600 text-white font-semibold rounded-lg text-base transition-colors shadow-lg"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
