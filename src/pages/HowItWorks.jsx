import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, CheckCircle, MessageSquare, Search, FileText, Factory, ClipboardCheck, Truck } from 'lucide-react'

const steps = [
  {
    num: '01',
    icon: MessageSquare,
    title: 'Submit Your Sourcing Inquiry',
    desc: 'Fill out our inquiry form with your product requirements — specifications, target price, estimated quantity, and any specific certifications or standards needed. The more detail you provide, the faster we can match you with the right suppliers.',
    details: [
      'Product name and description',
      'Target unit price and MOQ',
      'Required certifications (CE, RoHS, FDA, etc.)',
      'Packaging and labeling requirements',
      'Desired timeline',
    ],
    imgId: 'hiw-step1-img-a1b2c3',
    titleId: 'hiw-step1-title',
    descId: 'hiw-step1-desc',
  },
  {
    num: '02',
    icon: Search,
    title: 'Supplier Research & Shortlisting',
    desc: 'Our sourcing team researches our verified supplier database and conducts targeted outreach to identify 3–5 manufacturers that match your requirements. We communicate directly with factories in Chinese to get accurate information.',
    details: [
      'Database search across 10,000+ verified suppliers',
      'Direct factory outreach in Chinese',
      'Initial capability and price assessment',
      'Shortlist of 3–5 qualified suppliers',
      'Supplier profile summary for your review',
    ],
    imgId: 'hiw-step2-img-d4e5f6',
    titleId: 'hiw-step2-title',
    descId: 'hiw-step2-desc',
  },
  {
    num: '03',
    icon: FileText,
    title: 'Quotation & Sample Arrangement',
    desc: 'We collect detailed quotations from shortlisted suppliers and present them in a clear comparison format. If needed, we arrange product samples and ship them to you for evaluation before you commit to a bulk order.',
    details: [
      'Standardized quotation comparison',
      'Price negotiation on your behalf',
      'Sample sourcing and consolidation',
      'Sample quality pre-check',
      'Feedback relay to factories',
    ],
    imgId: 'hiw-step3-img-g7h8i9',
    titleId: 'hiw-step3-title',
    descId: 'hiw-step3-desc',
  },
  {
    num: '04',
    icon: Factory,
    title: 'Factory Audit & Verification',
    desc: 'Before you place your order, we conduct a factory audit to verify the supplier\'s production capacity, quality systems, certifications, and business legitimacy. You receive a detailed audit report with photos within 5 business days.',
    details: [
      'Business license and registration verification',
      'Production capacity and equipment check',
      'Quality management system assessment',
      'Worker conditions and compliance review',
      'Detailed audit report with photos',
    ],
    imgId: 'hiw-step4-img-j1k2l3',
    titleId: 'hiw-step4-title',
    descId: 'hiw-step4-desc',
  },
  {
    num: '05',
    icon: ClipboardCheck,
    title: 'Production Monitoring & QC Inspection',
    desc: 'Once production begins, we provide regular status updates and conduct quality inspections at key production milestones. Pre-shipment inspections are performed against your approved specifications and AQL standards.',
    details: [
      'Weekly production status reports',
      'In-line inspection during production',
      'Pre-shipment inspection (AQL standards)',
      'Container loading supervision',
      'Inspection report within 24 hours',
    ],
    imgId: 'hiw-step5-img-m4n5o6',
    titleId: 'hiw-step5-title',
    descId: 'hiw-step5-desc',
  },
  {
    num: '06',
    icon: Truck,
    title: 'Shipping & Delivery Coordination',
    desc: 'After goods pass inspection, we coordinate with freight forwarders to arrange shipping by sea, air, or express courier. We handle export documentation, customs declarations, and provide shipment tracking until delivery.',
    details: [
      'Freight forwarder coordination',
      'Sea, air, and express shipping options',
      'Export documentation preparation',
      'Cargo insurance arrangement',
      'Shipment tracking and delivery confirmation',
    ],
    imgId: 'hiw-step6-img-p7q8r9',
    titleId: 'hiw-step6-title',
    descId: 'hiw-step6-desc',
  },
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
      {/* Hero */}
      <section className="bg-brand-900 pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent-400 mb-3 block">Our Process</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">
              How Our China Sourcing Process Works
            </h1>
            <p className="text-brand-200 text-lg leading-relaxed">
              A clear, step-by-step process designed to give you full visibility and control over your China sourcing — from first inquiry to final delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-20">
            {steps.map((step, i) => (
              <div key={step.num} className={`grid lg:grid-cols-2 gap-10 items-center`}>
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-5xl font-bold text-brand-100">{step.num}</span>
                    <div className="w-10 h-10 bg-brand-700 rounded-xl flex items-center justify-center">
                      <step.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <h2 id={step.titleId} className="text-2xl md:text-3xl font-bold text-brand-900 mb-4">{step.title}</h2>
                  <p id={step.descId} className="text-neutral-600 leading-relaxed mb-6">{step.desc}</p>
                  <ul className="flex flex-col gap-2">
                    {step.details.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-sm text-neutral-700">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`rounded-2xl overflow-hidden aspect-[4/3] ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img
                    data-strk-img-id={step.imgId}
                    data-strk-img={`[${step.descId}] [${step.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-accent-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Sourcing Project?</h2>
          <p className="text-amber-100 text-lg mb-8">
            Submit your inquiry and we'll get back to you with a sourcing plan within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-accent-600 hover:bg-amber-50 font-bold px-10 py-4 rounded-lg transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
