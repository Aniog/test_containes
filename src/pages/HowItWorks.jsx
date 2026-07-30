import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, CheckCircle, Clock, FileText, Search, Factory, ClipboardCheck, Zap, Truck, MessageSquare } from 'lucide-react'

const steps = [
  {
    num: '01',
    icon: MessageSquare,
    title: 'Submit Your Sourcing Inquiry',
    desc: 'Fill out our inquiry form with your product details — type, specifications, target price, quantity, and any certifications required. The more detail you provide, the faster we can match you with suitable suppliers.',
    details: ['Product description and specs', 'Target unit price and MOQ', 'Required certifications (CE, RoHS, etc.)', 'Delivery timeline and destination'],
    imgId: 'hiw-step1-img-a1b2c3',
    titleId: 'hiw-step1-title',
    descId: 'hiw-step1-desc',
  },
  {
    num: '02',
    icon: Search,
    title: 'Supplier Research & Shortlisting',
    desc: 'Our sourcing team searches our verified supplier network and industry databases to identify manufacturers that match your requirements. We evaluate each candidate on production capacity, quality systems, and export experience.',
    details: ['Network and database search', 'Supplier capability assessment', 'Price and MOQ verification', 'Shortlist of 3–5 candidates'],
    imgId: 'hiw-step2-img-d4e5f6',
    titleId: 'hiw-step2-title',
    descId: 'hiw-step2-desc',
  },
  {
    num: '03',
    icon: Factory,
    title: 'Factory Audit & Verification',
    desc: 'We visit shortlisted factories in person to verify their business registration, production facilities, quality management systems, and workforce. You receive a detailed audit report with photos before making any commitment.',
    details: ['On-site factory visit', 'Business license verification', 'Production capacity check', 'Photographic audit report'],
    imgId: 'hiw-step3-img-g7h8i9',
    titleId: 'hiw-step3-title',
    descId: 'hiw-step3-desc',
  },
  {
    num: '04',
    icon: FileText,
    title: 'Sampling & Approval',
    desc: 'We arrange samples from your selected supplier, inspect them against your specifications, and ship them to you for final approval. Any issues are communicated to the factory before production begins.',
    details: ['Sample arrangement and coordination', 'Pre-shipment sample inspection', 'Sample shipping to your location', 'Feedback loop with factory'],
    imgId: 'hiw-step4-img-j1k2l3',
    titleId: 'hiw-step4-title',
    descId: 'hiw-step4-desc',
  },
  {
    num: '05',
    icon: Zap,
    title: 'Production Monitoring',
    desc: 'Once production begins, we provide regular updates and conduct in-line inspections at key production milestones. Any deviations from agreed specifications are flagged and resolved immediately.',
    details: ['Production schedule tracking', 'In-line quality checks', 'Regular status reports', 'Issue escalation and resolution'],
    imgId: 'hiw-step5-img-m4n5o6',
    titleId: 'hiw-step5-title',
    descId: 'hiw-step5-desc',
  },
  {
    num: '06',
    icon: ClipboardCheck,
    title: 'Pre-Shipment Inspection',
    desc: 'Before goods are loaded, our inspectors conduct a final pre-shipment inspection following AQL standards. We check quantity, quality, labeling, and packaging. You receive a full inspection report before approving shipment.',
    details: ['AQL sampling inspection', 'Quantity and carton check', 'Labeling and packaging review', 'Pass/fail report with photos'],
    imgId: 'hiw-step6-img-p7q8r9',
    titleId: 'hiw-step6-title',
    descId: 'hiw-step6-desc',
  },
  {
    num: '07',
    icon: Truck,
    title: 'Shipping & Delivery',
    desc: 'We coordinate with freight forwarders for sea or air shipment, prepare all export documentation, and track your cargo from departure to arrival. We keep you informed at every stage of transit.',
    details: ['Freight forwarder coordination', 'Export documentation', 'Shipment tracking', 'Delivery confirmation'],
    imgId: 'hiw-step7-img-s1t2u3',
    titleId: 'hiw-step7-title',
    descId: 'hiw-step7-desc',
  },
]

export default function HowItWorks() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Header */}
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-brand-accent font-semibold text-sm uppercase tracking-wider">Our Process</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
              How It Works
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              A clear, step-by-step process from your first inquiry to goods arriving at your warehouse.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline intro */}
      <section className="py-10 bg-brand-light border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {steps.map((step) => (
              <div key={step.num} className="flex items-center gap-2 bg-white border border-brand-border rounded-full px-4 py-2">
                <span className="text-brand-accent font-bold text-sm">{step.num}</span>
                <span className="text-brand-navy font-medium text-sm">{step.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 md:space-y-24">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center`}
              >
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-display font-bold text-5xl text-brand-accent/30">{step.num}</span>
                    <div className="w-10 h-10 bg-brand-light rounded-xl flex items-center justify-center">
                      <step.icon className="w-5 h-5 text-brand-blue" />
                    </div>
                  </div>
                  <h2 id={step.titleId} className="font-display text-2xl md:text-3xl font-bold text-brand-navy mb-4">
                    {step.title}
                  </h2>
                  <p id={step.descId} className="text-gray-700 leading-relaxed mb-6">{step.desc}</p>
                  <ul className="space-y-2.5">
                    {step.details.map((d) => (
                      <li key={d} className="flex items-center gap-2.5">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`rounded-2xl overflow-hidden bg-gray-100 aspect-video ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img
                    alt={step.title}
                    data-strk-img-id={step.imgId}
                    data-strk-img={`[${step.descId}] [${step.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline summary */}
      <section className="py-16 bg-brand-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-brand-navy mb-3">
              Typical Timeline
            </h2>
            <p className="text-brand-muted">Timelines vary by product complexity and factory availability.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { phase: 'Sourcing & Audit', time: '5–10 days' },
              { phase: 'Sampling', time: '7–14 days' },
              { phase: 'Production', time: '20–45 days' },
              { phase: 'Shipping (Sea)', time: '15–35 days' },
            ].map((t) => (
              <div key={t.phase} className="bg-white rounded-xl p-5 border border-brand-border text-center">
                <Clock className="w-6 h-6 text-brand-blue mx-auto mb-2" />
                <div className="font-display font-bold text-brand-navy text-xl mb-1">{t.time}</div>
                <div className="text-brand-muted text-sm">{t.phase}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            Ready to Start Your Sourcing Project?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Submit your inquiry and we'll get back to you within 24 hours with a tailored sourcing plan.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-accent hover:bg-amber-500 text-white font-semibold px-7 py-3.5 rounded-lg transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
