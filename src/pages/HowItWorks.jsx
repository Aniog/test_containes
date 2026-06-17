import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, CheckCircle2, FileText, MessageSquare, Package, Ship } from 'lucide-react'

const steps = [
  {
    step: '01',
    title: 'Submit Your Request',
    desc: 'Tell us about your product requirements, specifications, target price, and quality standards. The more detail you provide, the better we can match you with the right suppliers.',
    details: [
      'Complete our inquiry form with product details',
      'Share specifications, drawings, or reference samples',
      'Indicate target price range and order quantity',
      'Specify quality standards and certifications needed',
    ],
    icon: FileText,
    imgId: 'process-step1-a1b2c3',
  },
  {
    step: '02',
    title: 'Supplier Matching',
    desc: 'We search our network of 2,000+ verified suppliers across China\'s key manufacturing hubs and identify 3-5 qualified candidates that match your requirements.',
    details: [
      'Search across our verified supplier database',
      'Contact potential suppliers for capability assessment',
      'Compare pricing, MOQ, and lead times',
      'Present shortlisted suppliers with detailed profiles',
    ],
    icon: Package,
    imgId: 'process-step2-d4e5f6',
  },
  {
    step: '03',
    title: 'Factory Verification',
    desc: 'Before you commit, we conduct on-site factory audits to verify credentials, assess production capabilities, and ensure compliance with your standards.',
    details: [
      'Verify business license and export qualifications',
      'Conduct on-site factory audit with photos',
      'Assess production capacity and quality systems',
      'Review social compliance and certifications',
    ],
    icon: CheckCircle2,
    imgId: 'process-step3-g7h8i9',
  },
  {
    step: '04',
    title: 'Sample & Negotiation',
    desc: 'We arrange product samples for your evaluation and negotiate pricing, payment terms, and delivery schedules on your behalf.',
    details: [
      'Arrange sample production and shipping',
      'Negotiate unit pricing and payment terms',
      'Finalize order specifications and timeline',
      'Draft and review purchase agreements',
    ],
    icon: MessageSquare,
    imgId: 'process-step4-j1k2l3',
  },
  {
    step: '05',
    title: 'Production & Quality Control',
    desc: 'We monitor production progress and conduct quality inspections at key milestones to ensure your products meet specifications.',
    details: [
      'Weekly production progress updates with photos',
      'Pre-production inspection for raw materials',
      'During-production inspection at 20-30% completion',
      'Pre-shipment inspection before container loading',
    ],
    icon: CheckCircle2,
    imgId: 'process-step5-m4n5o6',
  },
  {
    step: '06',
    title: 'Shipping & Delivery',
    desc: 'We coordinate logistics, handle customs documentation, and manage delivery to your door — so you can focus on your business.',
    details: [
      'Freight booking (sea, air, or rail)',
      'Container loading supervision',
      'Customs documentation and compliance',
      'Door-to-door delivery coordination',
    ],
    icon: Ship,
    imgId: 'process-step6-p7q8r9',
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
      <section className="bg-navy py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">How It Works</h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              A clear, structured process that takes you from initial inquiry to delivered goods. Here's what to expect at each stage.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, idx) => (
              <div key={step.step} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-14 h-14 bg-ocean rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {step.step}
                    </div>
                    <h2 className="text-2xl font-bold text-navy">{step.title}</h2>
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-6">{step.desc}</p>
                  <ul className="space-y-3">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-slate-700 text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="rounded-xl overflow-hidden bg-slate-100 aspect-[4/3]">
                    <img
                      data-strk-img-id={step.imgId}
                      data-strk-img={`[process-${idx}-desc] [process-${idx}-title]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p id={`process-${idx}-title`} className="hidden">{step.title}</p>
                  <p id={`process-${idx}-desc`} className="hidden">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Summary */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">Typical Timeline</h2>
            <p className="text-slate-600">From inquiry to delivery, here's what to expect.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border border-slate-100 text-center">
              <div className="text-3xl font-bold text-ocean mb-2">1-2 Weeks</div>
              <div className="font-semibold text-navy mb-1">Supplier Identification</div>
              <p className="text-sm text-slate-500">Supplier search, screening, and shortlisting</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-100 text-center">
              <div className="text-3xl font-bold text-ocean mb-2">2-4 Weeks</div>
              <div className="font-semibold text-navy mb-1">Verification & Sampling</div>
              <p className="text-sm text-slate-500">Factory audit, sample production, and negotiation</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-100 text-center">
              <div className="text-3xl font-bold text-ocean mb-2">4-8 Weeks</div>
              <div className="font-semibold text-navy mb-1">Production & Delivery</div>
              <p className="text-sm text-slate-500">Manufacturing, QC inspections, and shipping</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-slate-300 mb-8">
            Submit your sourcing request and we'll start matching you with qualified suppliers right away.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-ocean text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-blue-700 transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
