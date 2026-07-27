import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, ArrowDown, Clock, FileText, MessageSquare, CheckCircle2 } from 'lucide-react'

const steps = [
  {
    step: '01',
    title: 'Share Your Requirements',
    duration: '1-3 days',
    desc: 'Tell us about your product — specifications, materials, target price range, order quantity, quality standards, and any certifications needed. The more detail you provide, the better we can match you with the right supplier.',
    actions: [
      'Complete our sourcing request form or schedule a call',
      'Share product specs, drawings, reference samples',
      'Discuss budget, timeline, and quality expectations',
      'We review feasibility and provide initial feedback',
    ],
    bgImgId: 'process-step1-bg-a1b2c3',
    titleId: 'process-step1-title',
    descId: 'process-step1-desc',
  },
  {
    step: '02',
    title: 'Supplier Identification & Screening',
    duration: '1-2 weeks',
    desc: 'We search our network of 500+ verified factories and industry databases to identify 3-5 suppliers that best match your requirements. We conduct initial screening, send RFQs, and collect quotations.',
    actions: [
      'Search supplier database and industry networks',
      'Initial qualification screening and capability check',
      'Distribute RFQs and collect quotations',
      'Prepare comparison report: pricing, MOQ, lead time',
    ],
    bgImgId: 'process-step2-bg-d4e5f6',
    titleId: 'process-step2-title',
    descId: 'process-step2-desc',
  },
  {
    step: '03',
    title: 'Factory Audit & Verification',
    duration: '3-5 days',
    desc: 'Our team visits the shortlisted factories in person. We verify business licenses, inspect production lines, assess quality management systems, and check working conditions. You receive a detailed audit report with photos.',
    actions: [
      'On-site factory visit by our local team',
      'Business license and certification verification',
      'Production capacity and equipment assessment',
      'Detailed audit report with photos and recommendations',
    ],
    bgImgId: 'process-step3-bg-g7h8i9',
    titleId: 'process-step3-title',
    descId: 'process-step3-desc',
  },
  {
    step: '04',
    title: 'Sampling & Negotiation',
    duration: '2-4 weeks',
    desc: 'We coordinate sample production with your selected supplier(s). Our team reviews samples against your specifications before shipping them to you. We negotiate final pricing, payment terms, and delivery schedules.',
    actions: [
      'Sample order placement and production monitoring',
      'Sample quality review against specifications',
      'Price and terms negotiation on your behalf',
      'Final supplier selection recommendation',
    ],
    bgImgId: 'process-step4-bg-j1k2l3',
    titleId: 'process-step4-title',
    descId: 'process-step4-desc',
  },
  {
    step: '05',
    title: 'Production & Progress Monitoring',
    duration: 'Varies by product',
    desc: 'Once production begins, we monitor progress closely. We provide weekly updates with photos from the production line, track milestones against the schedule, and alert you immediately if any issues arise.',
    actions: [
      'Weekly production progress reports with photos',
      'Milestone tracking against production schedule',
      'In-line quality inspection (DUPRO)',
      'Proactive issue identification and resolution',
    ],
    bgImgId: 'process-step5-bg-m4n5o6',
    titleId: 'process-step5-title',
    descId: 'process-step5-desc',
  },
  {
    step: '06',
    title: 'QC Inspection & Shipping',
    duration: '1-4 weeks',
    desc: 'We perform final pre-shipment inspection per AQL standards, supervise container loading, manage export documentation, and coordinate freight forwarding. We track your shipment until it reaches your destination.',
    actions: [
      'Pre-shipment inspection (PSI) per AQL standards',
      'Container loading supervision',
      'Export documentation preparation',
      'Freight forwarding and shipment tracking',
    ],
    bgImgId: 'process-step6-bg-p7q8r9',
    titleId: 'process-step6-title',
    descId: 'process-step6-desc',
  },
]

const deliverables = [
  { icon: FileText, title: 'Supplier Comparison Report', desc: 'Side-by-side comparison of shortlisted suppliers with pricing, capabilities, and our recommendation.' },
  { icon: FileText, title: 'Factory Audit Report', desc: 'Detailed on-site audit report with photos, certifications verified, and production capability assessment.' },
  { icon: FileText, title: 'Inspection Reports', desc: 'AQL-based quality inspection reports with detailed findings and photos, delivered within 24 hours.' },
  { icon: MessageSquare, title: 'Weekly Progress Updates', desc: 'Regular updates with production photos, milestone tracking, and any issues requiring your attention.' },
  { icon: FileText, title: 'Shipping Documentation', desc: 'Complete set of export/import documents: Commercial Invoice, Packing List, Bill of Lading, Certificate of Origin.' },
]

export default function HowItWorks() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-navy text-white py-16 md:py-24">
        <div className="container-main">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-gold uppercase tracking-wider">How It Works</span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">Our Proven 6-Step Sourcing Process</h1>
            <p className="mt-4 text-lg text-slate-300 leading-relaxed">
              A transparent, structured approach to sourcing from China — designed to minimize risk and maximize results for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding">
        <div className="container-main">
          <div className="space-y-12">
            {steps.map((step, i) => (
              <div key={i}>
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                  <div className="lg:w-96 flex-shrink-0">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-5xl font-bold text-gold">{step.step}</span>
                      <div>
                        <h2 id={step.titleId} className="text-xl font-bold text-navy">{step.title}</h2>
                        <div className="flex items-center gap-1.5 mt-1 text-sm text-slate-500">
                          <Clock className="w-4 h-4" />
                          {step.duration}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1">
                    <p id={step.descId} className="text-slate-600 leading-relaxed">{step.desc}</p>
                    <ul className="mt-4 space-y-2">
                      {step.actions.map((action, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          {action}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="lg:w-64 flex-shrink-0">
                    <div className="rounded-lg overflow-hidden h-44">
                      <div
                        data-strk-bg-id={step.bgImgId}
                        data-strk-bg={`[${step.descId}] [${step.titleId}]`}
                        data-strk-bg-ratio="16x9"
                        data-strk-bg-width="400"
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                </div>
                {i < steps.length - 1 && (
                  <div className="flex justify-center my-4">
                    <ArrowDown className="w-6 h-6 text-slate-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="bg-[#f7f8fa] section-padding">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy">What You Receive at Each Stage</h2>
            <p className="mt-3 text-slate-600">Transparent documentation and regular updates throughout the process.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map((item) => (
              <div key={item.title} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <item.icon className="w-8 h-8 text-navy mb-3" />
                <h3 className="font-semibold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-main text-center">
          <h2 className="text-3xl font-bold text-navy">Ready to Start Your Sourcing Journey?</h2>
          <p className="mt-3 text-slate-600 max-w-xl mx-auto">
            The first step is easy — tell us what you need and we'll take it from there.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 bg-gold hover:bg-gold-hover text-white font-semibold px-8 py-3.5 rounded-lg transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
