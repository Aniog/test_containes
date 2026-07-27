import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Search, BadgeCheck, FileCheck, ClipboardList, Ship, ArrowRight, Clock, Shield, PhoneCall } from 'lucide-react'

const processSteps = [
  {
    number: '01',
    icon: Search,
    title: 'Share Your Requirements',
    duration: '1-2 Days',
    detail: 'Tell us about your product—specifications, materials, target price, order quantity, certifications needed, and any samples or reference images. Our sourcing specialist reviews your brief and prepares a sourcing strategy.',
    deliverables: ['Detailed requirement brief', 'Sourcing strategy document', 'Timeline estimate'],
    bgId: 'hiw-step1-bg-a1b2c3',
    titleId: 'hiw-step1-title',
  },
  {
    number: '02',
    icon: BadgeCheck,
    title: 'Supplier Search & Factory Audits',
    duration: '5-10 Days',
    detail: 'We search our network of 5,000+ factories and identify 3-5 best-fit candidates. Our team visits each factory for on-site audits, verifying licenses, production capacity, equipment, QC processes, and export history. You receive a detailed comparison report with photos.',
    deliverables: ['Factory audit reports', 'Supplier comparison matrix', 'Recommendation summary'],
    bgId: 'hiw-step2-bg-d4e5f6',
    titleId: 'hiw-step2-title',
  },
  {
    number: '03',
    icon: FileCheck,
    title: 'Sampling, Negotiation & Contract',
    duration: '7-14 Days',
    detail: 'We coordinate product samples from shortlisted suppliers. Our team negotiates pricing, payment terms, and production timelines in Mandarin—securing better terms than you would get negotiating remotely. We review contracts and help finalize your supplier selection.',
    deliverables: ['Physical samples delivered to you', 'Negotiated pricing & terms', 'Bilingual contract ready for signature'],
    bgId: 'hiw-step3-bg-g7h8i9',
    titleId: 'hiw-step3-title',
  },
  {
    number: '04',
    icon: ClipboardList,
    title: 'Production & Quality Control',
    duration: '2-8 Weeks (product dependent)',
    detail: 'Production begins under our supervision. We conduct pre-production checks on raw materials, inline inspections during production, and a final pre-shipment inspection using AQL random sampling. Weekly status reports with photos keep you informed at every stage.',
    deliverables: ['Weekly production reports with photos', 'Inspection reports at each stage', 'Defect & corrective action logs'],
    bgId: 'hiw-step4-bg-j0k1l2',
    titleId: 'hiw-step4-title',
  },
  {
    number: '05',
    icon: Ship,
    title: 'Shipping, Customs & Delivery',
    duration: '2-6 Weeks (mode dependent)',
    detail: 'We coordinate freight booking, prepare export documentation, manage customs clearance, and handle cargo consolidation if needed. You receive tracking updates from factory departure to arrival at your destination port or warehouse.',
    deliverables: ['Freight booking confirmation', 'Full export documentation package', 'Real-time shipment tracking'],
    bgId: 'hiw-step5-bg-m3n4o5',
    titleId: 'hiw-step5-title',
  },
]

const guarantees = [
  { icon: Shield, title: 'Supplier Verification Guarantee', desc: 'Every supplier we recommend has been personally audited by our team. If issues arise from verified information, we help resolve them at no extra cost.' },
  { icon: Clock, title: 'On-Time Commitment', desc: 'We track production milestones and flag delays before they become problems. If we miss an agreed timeline due to our oversight, we credit part of our fee.' },
  { icon: PhoneCall, title: '24/7 Communication', desc: 'Your dedicated project manager is available on WeChat/WhatsApp. You\'ll never go more than 24 hours without a response—usually much faster.' },
]

export default function HowItWorks() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-light py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">How It Works</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            A proven, transparent 5-step process that eliminates the risks of sourcing from China.
            From your product brief to delivery at your warehouse.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {processSteps.map((step, i) => (
            <div key={step.number} className="flex gap-6 md:gap-8 pb-12 md:pb-16 last:pb-0">
              {/* Timeline */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/25">
                  <step.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </div>
                {i < processSteps.length - 1 && (
                  <div className="w-0.5 flex-1 bg-slate-200 mt-4 mb-2 min-h-[40px]" />
                )}
              </div>

              {/* Content */}
              <div className="pt-2 pb-4 flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="text-accent font-bold text-sm bg-blue-50 px-3 py-1 rounded-full">{step.number}</span>
                  <span className="text-sm text-slate-400 bg-slate-100 px-3 py-1 rounded-full">{step.duration}</span>
                </div>
                <h3 id={step.titleId} className="text-xl md:text-2xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-500 leading-relaxed mb-5">{step.detail}</p>

                <div className="grid sm:grid-cols-3 gap-3 mb-5">
                  {step.deliverables.map((d) => (
                    <div key={d} className="bg-surface border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-600 font-medium">
                      {d}
                    </div>
                  ))}
                </div>

                <div
                  className="aspect-[16/9] rounded-xl overflow-hidden bg-slate-100 max-w-md"
                  data-strk-bg-id={step.bgId}
                  data-strk-bg={`[${step.titleId}]`}
                  data-strk-bg-ratio="16x9"
                  data-strk-bg-width="600"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Commitment to You</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">We stand behind our work with clear guarantees so you can source with confidence.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
            {guarantees.map((g) => (
              <div key={g.title} className="bg-white border border-slate-200 rounded-xl p-6 md:p-8">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                  <g.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{g.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-primary rounded-2xl p-10 md:p-14">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-slate-300 mb-8 max-w-xl mx-auto">Submit your product brief today and receive a sourcing plan within 2 business days.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-cta text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/25">
              Submit Your Product Brief <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

