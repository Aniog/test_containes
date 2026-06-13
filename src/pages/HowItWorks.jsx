import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, MessageCircle, FileText, Search, Factory, ClipboardCheck, Truck } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const steps = [
  {
    num: '01',
    icon: MessageCircle,
    title: 'Initial Consultation',
    duration: 'Day 1-3',
    desc: 'You share your product requirements, target specifications, budget expectations, and order volume. We discuss your priorities and any concerns you have about China sourcing.',
    activities: [
      'Requirements gathering via call or email',
      'Product specification review',
      'Target price & volume discussion',
      'Timeline & milestone planning',
    ],
  },
  {
    num: '02',
    icon: Search,
    title: 'Supplier Identification',
    duration: 'Week 1-2',
    desc: 'We search our verified supplier database and trade networks to find factories that match your needs. Each candidate is pre-screened for capability, capacity, and export experience.',
    activities: [
      'Database search & trade platform screening',
      'Supplier capability pre-assessment',
      'Initial quotation collection',
      'Shortlist of 3-5 qualified suppliers',
    ],
  },
  {
    num: '03',
    icon: Factory,
    title: 'Factory Audit & Sampling',
    duration: 'Week 2-3',
    desc: 'We visit shortlisted factories in person, conduct full audits, and arrange sample production. You receive a detailed audit report with photos, scores, and our recommendation.',
    activities: [
      'On-site factory audit & verification',
      'Sample request & evaluation',
      'Comparative supplier analysis report',
      'Supplier recommendation with justification',
    ],
  },
  {
    num: '04',
    icon: FileText,
    title: 'Negotiation & Contract',
    duration: 'Week 3-4',
    desc: 'We negotiate pricing, payment terms, quality standards, and delivery schedules on your behalf. All terms are documented in a bilingual purchase agreement.',
    activities: [
      'Price & payment term negotiation',
      'Quality specification agreement (AQL standards)',
      'Production timeline confirmation',
      'Bilingual contract preparation & review',
    ],
  },
  {
    num: '05',
    icon: ClipboardCheck,
    title: 'Production & QC',
    duration: 'Week 4-10',
    desc: 'Production begins under our supervision. We conduct inspections at multiple checkpoints and send you weekly progress reports with photos from the factory floor.',
    activities: [
      'Pre-production material inspection',
      'During-production random inspection (DUPRO)',
      'Weekly progress reports with photos',
      'Issue identification & immediate resolution',
    ],
  },
  {
    num: '06',
    icon: Truck,
    title: 'Shipping & Delivery',
    duration: 'Week 10-12',
    desc: 'Final pre-shipment inspection, container loading supervision, freight booking, and customs documentation. We track the shipment until it reaches your destination.',
    activities: [
      'Pre-shipment final inspection (AQL)',
      'Container loading supervision',
      'Freight booking & customs documentation',
      'Shipment tracking until delivery',
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
      <section className="bg-slate-50 py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h1 id="hiw-heading" className="text-4xl sm:text-5xl font-bold text-brand-navy tracking-tight">
              How It Works
            </h1>
            <p id="hiw-subtitle" className="mt-4 text-lg text-gray-600">
              Our proven six-step process takes you from inquiry to delivery — with complete transparency at every stage.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {steps.map((step, i) => (
              <div key={step.num} className="relative flex gap-6">
                <div className="hidden sm:flex flex-col items-center shrink-0">
                  <div className="w-12 h-12 rounded-full bg-brand-navy text-white flex items-center justify-center font-bold text-lg">
                    {step.num}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px flex-1 bg-gray-200 my-2" />
                  )}
                </div>

                <div className="flex-1 bg-slate-50 rounded-xl border border-gray-100 p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="sm:hidden w-8 h-8 rounded-full bg-brand-navy text-white flex items-center justify-center font-bold text-sm shrink-0">
                      {step.num}
                    </span>
                    <div className="flex items-center gap-2.5">
                      <step.icon className="w-5 h-5 text-brand-orange" />
                      <h2 className="text-xl font-bold text-brand-navy">{step.title}</h2>
                    </div>
                    <span className="ml-auto text-xs font-medium text-brand-orange bg-orange-50 px-2.5 py-0.5 rounded-full">
                      {step.duration}
                    </span>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-4">{step.desc}</p>

                  <ul className="grid sm:grid-cols-2 gap-2">
                    {step.activities.map((activity) => (
                      <li key={activity} className="flex items-start gap-2 text-sm text-gray-600">
                        <svg className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-orange hover:bg-brand-orange-hover text-white font-medium rounded-lg transition-colors"
            >
              Start Your Sourcing Project <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-brand-navy">What You Get at Each Stage</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Supplier Shortlist Report', desc: 'Detailed profiles, comparison table, and our recommendation.' },
              { title: 'Factory Audit Report', desc: 'On-site photos, scores across 6 dimensions, and license verification.' },
              { title: 'Product Samples', desc: 'Physical samples shipped to you for evaluation and approval.' },
              { title: 'Bilingual Contract', desc: 'Clear terms covering quality, timeline, payment, and liability.' },
              { title: 'Weekly Progress Reports', desc: 'Photos from the production floor with status updates.' },
              { title: 'QC Inspection Reports', desc: 'AQL-based inspection results with detailed findings and photos.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl border border-gray-100 p-5">
                <h3 className="font-semibold text-brand-navy mb-1.5">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}