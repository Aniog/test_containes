import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { MessageSquare, Search, Factory, ClipboardCheck, Truck, ArrowRight, FileText, PhoneCall } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const steps = [
  {
    num: '01',
    icon: MessageSquare,
    title: 'Initial Consultation',
    duration: 'Day 1–2',
    desc: 'You share your product requirements, target price, order volume, quality standards, and timeline. We review your needs and propose a sourcing strategy tailored to your business.',
    details: [
      'Product specification review (drawings, samples, reference products)',
      'Target price and budget discussion',
      'Required certifications and compliance needs',
      'Timeline and delivery expectations',
    ],
    imgId: 'hiw-step1-z9y8x7',
    titleId: 'hiw-title-step1',
    descId: 'hiw-desc-step1',
  },
  {
    num: '02',
    icon: Search,
    title: 'Supplier Identification',
    duration: 'Week 1–2',
    desc: 'We search our database of 15,000+ Chinese manufacturers, industry networks, and trade platforms. We shortlist 3–5 qualified suppliers that match your requirements.',
    details: [
      'Multi-source supplier search (database, trade fairs, industry networks)',
      'Initial screening of business licenses and export qualifications',
      'Supplier comparison matrix with pricing and capability data',
      'Shortlist presentation with our recommendations',
    ],
    imgId: 'hiw-step2-w6v5u4',
    titleId: 'hiw-title-step2',
    descId: 'hiw-desc-step2',
  },
  {
    num: '03',
    icon: Factory,
    title: 'Factory Audit & Verification',
    duration: 'Week 2–3',
    desc: 'Our engineers visit each shortlisted factory for on-site audits. We verify business licenses, inspect production facilities, assess quality management systems, and confirm manufacturing capability.',
    details: [
      'On-site facility inspection with photo documentation',
      'Production equipment and capacity verification',
      'Quality management system assessment',
      'Reference checks with previous international buyers',
    ],
    imgId: 'hiw-step3-t3s2r1',
    titleId: 'hiw-title-step3',
    descId: 'hiw-desc-step3',
  },
  {
    num: '04',
    icon: FileText,
    title: 'Sampling & Negotiation',
    duration: 'Week 3–5',
    desc: 'You receive samples from top candidates for evaluation. We negotiate pricing, payment terms, production schedules, and quality standards on your behalf.',
    details: [
      'Sample request coordination and international shipping',
      'Price negotiation with market benchmark data',
      'Payment term structuring (T/T, L/C, escrow options)',
      'Production agreement and quality standard definition',
    ],
    imgId: 'hiw-step4-m0n1o2',
    titleId: 'hiw-title-step4',
    descId: 'hiw-desc-step4',
  },
  {
    num: '05',
    icon: ClipboardCheck,
    title: 'Production & Quality Control',
    duration: 'Week 5–13',
    desc: 'With the order placed, our QC team monitors production at critical milestones. We conduct inline inspections and pre-shipment checks against agreed AQL standards.',
    details: [
      'Initial production check at manufacturing start',
      'During production inspection at 30–60% completion',
      'Pre-shipment inspection with AQL sampling',
      'Detailed inspection reports with photos and measurements',
    ],
    imgId: 'hiw-step5-p3q4r5',
    titleId: 'hiw-title-step5',
    descId: 'hiw-desc-step5',
  },
  {
    num: '06',
    icon: Truck,
    title: 'Shipping & Delivery',
    duration: 'Week 13–18',
    desc: 'We coordinate freight, customs documentation, and final delivery to your warehouse. You receive tracking updates until your goods arrive safely.',
    details: [
      'Freight forwarding and multi-carrier rate comparison',
      'Customs documentation preparation',
      'Container loading supervision',
      'Door-to-door delivery tracking and confirmation',
    ],
    imgId: 'hiw-step6-a1b2c3',
    titleId: 'hiw-title-step6',
    descId: 'hiw-desc-step6',
  },
]

export default function HowItWorksPage() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-navy-800 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-wide mb-3">How It Works</p>
            <h1 id="hiw-page-heading" className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Our Sourcing Process — Step by Step
            </h1>
            <p id="hiw-page-sub" className="text-lg text-slate-300 leading-relaxed">
              A proven, transparent workflow refined through thousands of successful sourcing
              projects. Here's exactly how we take your sourcing from inquiry to delivery.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, idx) => (
              <div key={step.num} className="relative">
                {idx < steps.length - 1 && (
                  <div className="absolute left-6 top-20 bottom-0 w-px bg-slate-200 hidden lg:block" />
                )}
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-navy-800 text-white flex items-center justify-center text-lg font-extrabold shrink-0">
                        {step.num}
                      </div>
                      <div>
                        <h2 id={step.titleId} className="text-2xl font-extrabold text-navy-900">{step.title}</h2>
                        <span className="text-sm font-semibold text-gold-500">{step.duration}</span>
                      </div>
                    </div>
                    <p id={step.descId} className="text-slate-600 leading-relaxed mb-5 ml-16">{step.desc}</p>
                    <div className="ml-16 grid sm:grid-cols-2 gap-2">
                      {step.details.map((d) => (
                        <div key={d} className="flex items-start gap-2 text-sm text-slate-600">
                          <span className="text-gold-500 mt-1">•</span>
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="lg:col-span-1">
                    <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-md bg-slate-200">
                      <img
                        alt={step.title}
                        data-strk-img-id={step.imgId}
                        data-strk-img={`[${step.descId}] [${step.titleId}] [hiw-page-heading]`}
                        data-strk-img-ratio="4x3"
                        data-strk-img-width="600"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-gold-500/10 text-gold-600 mb-4">
            <PhoneCall className="w-3 h-3" />
            Ready to Start?
          </div>
          <h2 className="text-3xl font-extrabold text-navy-900 mb-4">Let's Begin Your Sourcing Project</h2>
          <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
            Share your product requirements and we'll provide a tailored sourcing plan within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-gold-500 text-white hover:bg-gold-600 transition-colors shadow-lg shadow-gold-500/25"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
