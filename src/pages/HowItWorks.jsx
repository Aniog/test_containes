import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Search, ClipboardCheck, Building2, ShieldCheck, Ship, Package, ArrowRight, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import CTASection from '@/components/home/CTASection'

const steps = [
  {
    icon: Search,
    step: '01',
    title: 'Requirement Analysis',
    description: 'We start by understanding your product, specifications, target price, quality expectations, and timeline.',
    details: [
      'Free consultation call to discuss your needs',
      'Detailed product specification review',
      'Budget and timeline assessment',
      'Sourcing strategy proposal',
    ],
  },
  {
    icon: Building2,
    step: '02',
    title: 'Supplier Matching',
    description: 'We tap into our network of vetted suppliers to find the best match for your project.',
    details: [
      'Supplier search across our database and networks',
      'Capability and certification screening',
      'Shortlist of 3-5 qualified suppliers',
      'Comparative analysis with recommendations',
    ],
  },
  {
    icon: ClipboardCheck,
    step: '03',
    title: 'Sample Development',
    description: 'We coordinate sampling to ensure the product meets your specifications before mass production.',
    details: [
      'Sample requests from selected suppliers',
      'Sample evaluation against specifications',
      'Revision and improvement coordination',
      'Pre-production sample sign-off',
    ],
  },
  {
    icon: ShieldCheck,
    step: '04',
    title: 'Order & Production',
    description: 'Once samples are approved, we manage the order and monitor production closely.',
    details: [
      'Contract review and order placement',
      'Production schedule confirmation',
      'Raw material inspection',
      'In-process quality checks',
    ],
  },
  {
    icon: Ship,
    step: '05',
    title: 'Quality Inspection',
    description: 'Before shipment, we conduct thorough inspections to catch any issues.',
    details: [
      'Pre-shipment inspection (AQL sampling)',
      'Functionality and safety testing',
      'Packaging and labeling verification',
      'Photo and video documentation',
    ],
  },
  {
    icon: Package,
    step: '06',
    title: 'Shipping & Delivery',
    description: 'We handle logistics so your goods arrive safely and on time.',
    details: [
      'Freight booking (sea, air, or express)',
      'Export customs clearance',
      'Real-time tracking updates',
      'Post-delivery support',
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
      <section className="bg-gray-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-primary-light font-semibold text-sm tracking-wide uppercase">Our Process</span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-4">
              How Sourcing Works
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              A clear, step-by-step process designed to minimize risk and deliver consistent results.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 md:space-y-16">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-6 md:gap-10">
                <div className="flex-shrink-0 flex md:flex-col items-center md:items-start gap-4 md:gap-2">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20">
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-sm font-bold text-primary tracking-widest">{step.step}</span>
                </div>
                <div className="flex-1 pt-1">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{step.title}</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">{step.description}</p>
                  <ul className="grid sm:grid-cols-2 gap-2.5">
                    {step.details.map((detail, j) => (
                      <li key={j} className="flex items-start gap-2.5">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}