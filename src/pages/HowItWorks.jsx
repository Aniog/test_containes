import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, CheckCircle, Clock, FileText, MessageSquare } from 'lucide-react'

const steps = [
  {
    step: '01',
    title: 'Submit Your Sourcing Inquiry',
    desc: 'Fill out our inquiry form with your product requirements — type, specifications, target quantity, and budget. The more detail you provide, the faster we can match you with the right suppliers.',
    details: [
      'Product name and category',
      'Technical specifications or reference samples',
      'Target unit price and MOQ',
      'Required certifications (CE, FCC, etc.)',
      'Delivery timeline',
    ],
    titleId: 'hiw-step1-title',
    descId: 'hiw-step1-desc',
    imgId: 'hiw-step1-img-a1b2c3',
  },
  {
    step: '02',
    title: 'Supplier Research & Shortlisting',
    desc: 'Our team searches our vetted manufacturer network and conducts targeted research to identify 3–5 suppliers that best match your requirements. We evaluate each on capability, pricing, and reliability.',
    details: [
      'Database and trade show research',
      'Supplier capability assessment',
      'Price and MOQ comparison',
      'Initial communication and screening',
      'Shortlist report delivered to you',
    ],
    titleId: 'hiw-step2-title',
    descId: 'hiw-step2-desc',
    imgId: 'hiw-step2-img-d4e5f6',
  },
  {
    step: '03',
    title: 'Factory Audit & Verification',
    desc: 'Before recommending a supplier, we visit the factory in person. We verify their business registration, production capacity, quality systems, and working conditions. You receive a full audit report.',
    details: [
      'On-site factory visit',
      'Business license verification',
      'Production line inspection',
      'Quality management review',
      'Photo and video documentation',
    ],
    titleId: 'hiw-step3-title',
    descId: 'hiw-step3-desc',
    imgId: 'hiw-step3-img-g7h8i9',
  },
  {
    step: '04',
    title: 'Sampling & Approval',
    desc: 'We coordinate sample production with your chosen supplier, inspect the samples against your specifications, and ship them to you for final approval before placing a bulk order.',
    details: [
      'Sample order coordination',
      'Sample inspection against specs',
      'Consolidated sample shipping',
      'Feedback and revision management',
      'Sample approval sign-off',
    ],
    titleId: 'hiw-step4-title',
    descId: 'hiw-step4-desc',
    imgId: 'hiw-step4-img-j1k2l3',
  },
  {
    step: '05',
    title: 'Production Monitoring & QC',
    desc: 'Once you approve the sample and place your order, we monitor production at key milestones. Our inspectors conduct in-line and pre-shipment inspections to ensure quality standards are met.',
    details: [
      'Production milestone tracking',
      'In-line quality inspection',
      'Pre-shipment inspection (AQL)',
      'Defect reporting and resolution',
      'Final approval before shipment',
    ],
    titleId: 'hiw-step5-title',
    descId: 'hiw-step5-desc',
    imgId: 'hiw-step5-img-m4n5o6',
  },
  {
    step: '06',
    title: 'Shipping & Delivery',
    desc: 'We coordinate with freight forwarders to arrange the most cost-effective shipping method, prepare all export documentation, and track your shipment until it reaches your warehouse.',
    details: [
      'Freight forwarder coordination',
      'Sea, air, or express options',
      'Export documentation preparation',
      'Cargo consolidation if needed',
      'Shipment tracking and updates',
    ],
    titleId: 'hiw-step6-title',
    descId: 'hiw-step6-desc',
    imgId: 'hiw-step6-img-p7q8r9',
  },
]

const timelines = [
  { phase: 'Supplier Research', duration: '5–10 business days' },
  { phase: 'Factory Audit', duration: '3–5 business days' },
  { phase: 'Sample Production', duration: '7–21 days (varies by product)' },
  { phase: 'Bulk Production', duration: '20–60 days (varies by order size)' },
  { phase: 'Quality Inspection', duration: '1–3 business days' },
  { phase: 'Sea Freight', duration: '15–35 days (port to port)' },
]

export default function HowItWorks() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Header */}
      <section className="bg-[#0F2A4A] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-[#C8102E] text-sm font-semibold uppercase tracking-wider">Our Process</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2 mb-4">
              How We Work With You
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              A clear, structured process from your first inquiry to final delivery. No surprises, no guesswork.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-16">
            {steps.map((step, i) => {
              const isEven = i % 2 === 0
              return (
                <div
                  key={step.step}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
                >
                  <div className={!isEven ? 'lg:order-2' : ''}>
                    <div className="text-5xl font-bold text-[#C8102E]/20 mb-2">{step.step}</div>
                    <h2 id={step.titleId} className="text-2xl md:text-3xl font-bold text-[#0F2A4A] mb-3">{step.title}</h2>
                    <p id={step.descId} className="text-slate-600 leading-relaxed mb-5">{step.desc}</p>
                    <ul className="flex flex-col gap-2">
                      {step.details.map((d) => (
                        <li key={d} className="flex items-center gap-2 text-sm text-slate-700">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`rounded-xl overflow-hidden bg-slate-100 aspect-video ${!isEven ? 'lg:order-1' : ''}`}>
                    <img
                      alt={step.title}
                      data-strk-img-id={step.imgId}
                      data-strk-img={`[${step.descId}] [${step.titleId}]`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-[#C8102E] text-sm font-semibold uppercase tracking-wider">Typical Timelines</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0F2A4A] mt-2 mb-3">How Long Does It Take?</h2>
            <p className="text-slate-600">
              Timelines vary by product complexity and order size. Here are typical ranges for each phase.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {timelines.map((t) => (
              <div key={t.phase} className="bg-white border border-slate-200 rounded-xl p-5 flex items-center gap-4">
                <Clock className="w-8 h-8 text-[#C8102E] flex-shrink-0" />
                <div>
                  <div className="text-[#0F2A4A] font-semibold text-sm">{t.phase}</div>
                  <div className="text-slate-500 text-sm">{t.duration}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0F2A4A]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MessageSquare className="w-10 h-10 text-white/40 mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-slate-300 mb-8">
            Submit your sourcing inquiry today. We'll review your requirements and respond within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#C8102E] text-white px-7 py-3.5 rounded-md font-semibold hover:bg-[#A80D26] transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
