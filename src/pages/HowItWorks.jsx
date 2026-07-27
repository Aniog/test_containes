import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { FileText, Search, ShieldCheck, ClipboardCheck, PackageCheck, Ship, ArrowRight } from 'lucide-react'

const steps = [
  {
    icon: FileText,
    number: '01',
    title: 'Submit Your Request',
    description: 'Tell us what you need to source — product type, specifications, target price, and quantity. We review your requirements and confirm feasibility.',
    details: [
      'Fill out our inquiry form or send us an email',
      'We review your product requirements and confirm feasibility',
      'We discuss timeline, budget, and quality expectations',
      'No commitment required at this stage',
    ],
    imgId: 'process-step1-t1u2v3',
    titleId: 'process-step1-title',
    descId: 'process-step1-desc',
  },
  {
    icon: Search,
    number: '02',
    title: 'Supplier Search',
    description: 'We search our verified supplier network and visit factories in relevant manufacturing hubs to find the best match for your requirements.',
    details: [
      'Search across our network of 500+ verified suppliers',
      'Visit factories in Shenzhen, Guangzhou, Yiwu, and other hubs',
      'Evaluate 3-5 candidate suppliers per product category',
      'Provide supplier profiles with pricing and capability details',
    ],
    imgId: 'process-step2-w4x5y6',
    titleId: 'process-step2-title',
    descId: 'process-step2-desc',
  },
  {
    icon: ShieldCheck,
    number: '03',
    title: 'Factory Verification',
    description: 'We verify the factory\'s legitimacy, production capacity, and quality systems before you proceed. This includes on-site visits and documentation checks.',
    details: [
      'On-site factory visit with photo documentation',
      'Business license and registration verification',
      'Production capacity and equipment assessment',
      'Quality management system evaluation',
      'Export experience and client reference checks',
    ],
    imgId: 'process-step3-z7a8b9',
    titleId: 'process-step3-title',
    descId: 'process-step3-desc',
  },
  {
    icon: ClipboardCheck,
    number: '04',
    title: 'Sample & Quality Check',
    description: 'We arrange samples, conduct inspections, and ensure product quality meets your standards before production begins.',
    details: [
      'Arrange sample production and delivery',
      'Conduct pre-production inspection on materials',
      'Verify samples match your specifications',
      'Provide detailed sample evaluation reports',
    ],
    imgId: 'process-step4-c1d2e3',
    titleId: 'process-step4-title',
    descId: 'process-step4-desc',
  },
  {
    icon: PackageCheck,
    number: '05',
    title: 'Production Follow-up',
    description: 'We monitor production progress, track timelines, and keep you informed at every milestone. Early warnings if timelines shift.',
    details: [
      'Weekly production progress reports with photos',
      'During-production quality inspections',
      'Early warning on potential delays',
      'Packaging and labeling compliance checks',
      'Final pre-shipment AQL inspection',
    ],
    imgId: 'process-step5-f4g5h6',
    titleId: 'process-step5-title',
    descId: 'process-step5-desc',
  },
  {
    icon: Ship,
    number: '06',
    title: 'Shipping & Delivery',
    description: 'We coordinate logistics, handle documentation, and ensure your goods reach you on time. FCL, LCL, and air freight options available.',
    details: [
      'Freight forwarding coordination (sea and air)',
      'Export documentation and customs paperwork',
      'Container loading supervision',
      'Real-time shipment tracking',
      'Delivery confirmation and final report',
    ],
    imgId: 'process-step6-i7j8k9',
    titleId: 'process-step6-title',
    descId: 'process-step6-desc',
  },
]

export default function HowItWorks() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-slate-900 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="process-page-title" className="text-3xl md:text-4xl font-bold text-white mb-4">
            How It Works
          </h1>
          <p id="process-page-subtitle" className="text-slate-300 text-lg max-w-2xl mx-auto">
            A clear, step-by-step process from your initial request to final delivery. You stay informed at every stage.
          </p>
        </div>
      </section>

      {steps.map((step, index) => (
        <section
          key={step.number}
          className={index % 2 === 0 ? 'bg-white py-16 md:py-20' : 'bg-slate-50 py-16 md:py-20'}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={index % 2 !== 0 ? 'lg:order-2' : ''}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl font-bold text-primary-500">{step.number}</span>
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-primary-500" />
                  </div>
                </div>
                <h2 id={step.titleId} className="text-2xl font-bold text-slate-900 mb-4">
                  {step.title}
                </h2>
                <p id={step.descId} className="text-slate-600 text-lg leading-relaxed mb-6">
                  {step.description}
                </p>
                <ul className="space-y-3">
                  {step.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 shrink-0" />
                      <span className="text-slate-700 text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={index % 2 !== 0 ? 'lg:order-1' : ''}>
                <div className="rounded-xl overflow-hidden shadow-md">
                  <img
                    alt={step.title}
                    data-strk-img-id={step.imgId}
                    data-strk-img={`[${step.descId}] [${step.titleId}] [process-page-subtitle] [process-page-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="bg-primary-500 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Start Your Sourcing Project Today
          </h2>
          <p className="text-primary-100 text-lg mb-8">
            Submit your requirements and we will begin the supplier search process immediately.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-accent-500 text-white font-semibold px-8 py-4 rounded-lg hover:bg-accent-600 transition-colors no-underline text-lg"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
