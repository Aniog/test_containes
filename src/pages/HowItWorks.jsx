import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { CheckCircle, ArrowRight, Clock, MessageSquare, FileText, Truck } from 'lucide-react'

const steps = [
  {
    num: '01',
    icon: MessageSquare,
    title: 'Submit Your Sourcing Inquiry',
    desc: 'Fill out our inquiry form with your product requirements — specifications, quantity, target price, timeline, and any special requirements. The more detail you provide, the better we can match you with the right suppliers.',
    details: [
      'Product name and detailed specifications',
      'Target unit price or budget range',
      'Required quantity (MOQ and order volume)',
      'Delivery timeline and destination',
      'Any certifications or compliance requirements',
    ],
    titleId: 'hiw-step1-title',
    descId: 'hiw-step1-desc',
    imgId: 'hiw-step1-img-a1b2c3',
  },
  {
    num: '02',
    icon: FileText,
    title: 'Supplier Research & Shortlisting',
    desc: 'Our sourcing team researches the Chinese market to identify manufacturers that match your requirements. We screen suppliers based on production capability, quality standards, pricing, and reliability.',
    details: [
      'Search across verified supplier databases and trade shows',
      'Initial screening of 10–20 potential suppliers',
      'Shortlist of 3–5 best-matched manufacturers',
      'Supplier profiles with key information',
      'Initial price indications and MOQ details',
    ],
    titleId: 'hiw-step2-title',
    descId: 'hiw-step2-desc',
    imgId: 'hiw-step2-img-d4e5f6',
  },
  {
    num: '03',
    icon: CheckCircle,
    title: 'Factory Verification',
    desc: 'For shortlisted suppliers, we conduct background checks and, where required, on-site factory audits to verify their legitimacy, production capacity, and quality management systems.',
    details: [
      'Business registration and license verification',
      'On-site factory audit (optional)',
      'Production capacity and equipment review',
      'Quality certifications check (ISO, CE, etc.)',
      'Audit report with photos and findings',
    ],
    titleId: 'hiw-step3-title',
    descId: 'hiw-step3-desc',
    imgId: 'hiw-step3-img-g7h8i9',
  },
  {
    num: '04',
    icon: FileText,
    title: 'Quotation & Sample Evaluation',
    desc: 'We collect detailed quotations from verified suppliers and present them to you in a clear comparison format. We also coordinate sample procurement so you can evaluate product quality before committing to a full order.',
    details: [
      'Detailed quotation collection and comparison',
      'Price negotiation on your behalf',
      'Sample order coordination',
      'Sample quality evaluation support',
      'Supplier recommendation with rationale',
    ],
    titleId: 'hiw-step4-title',
    descId: 'hiw-step4-desc',
    imgId: 'hiw-step4-img-j1k2l3',
  },
  {
    num: '05',
    icon: Clock,
    title: 'Order Placement & Production Follow-up',
    desc: 'Once you confirm a supplier, we assist with order placement, contract review, and production monitoring. We keep you updated on production progress and address any issues that arise during manufacturing.',
    details: [
      'Purchase order review and placement support',
      'Production timeline tracking',
      'Regular factory communication and updates',
      'Issue identification and resolution',
      'Packaging and labeling verification',
    ],
    titleId: 'hiw-step5-title',
    descId: 'hiw-step5-desc',
    imgId: 'hiw-step5-img-m4n5o6',
  },
  {
    num: '06',
    icon: CheckCircle,
    title: 'Quality Inspection',
    desc: 'Before goods are shipped, our QC inspectors conduct a thorough pre-shipment inspection to verify that products meet your specifications and quality standards. You receive a detailed inspection report.',
    details: [
      'AQL-based sampling inspection',
      'Product specification verification',
      'Defect identification and classification',
      'Packaging and labeling check',
      'Detailed inspection report with photos',
    ],
    titleId: 'hiw-step6-title',
    descId: 'hiw-step6-desc',
    imgId: 'hiw-step6-img-p7q8r9',
  },
  {
    num: '07',
    icon: Truck,
    title: 'Shipping & Delivery',
    desc: 'We coordinate with freight forwarders to arrange shipment by sea, air, or express courier. We handle export documentation and keep you informed until your goods arrive at their destination.',
    details: [
      'Freight forwarder coordination',
      'Export documentation preparation',
      'Customs clearance support',
      'Shipment tracking and updates',
      'Delivery confirmation',
    ],
    titleId: 'hiw-step7-title',
    descId: 'hiw-step7-desc',
    imgId: 'hiw-step7-img-s1t2u3',
  },
]

export default function HowItWorks() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      if (containerRef.current) ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frame)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Header */}
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-red-300 font-semibold text-sm uppercase tracking-wider mb-3">Our Process</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">How It Works</h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              A transparent, step-by-step sourcing process designed to give you full visibility and control over your China sourcing project.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, idx) => (
              <div key={step.num} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center`}>
                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-black text-sm">{step.num}</span>
                    </div>
                    <div className="h-px flex-1 bg-gray-200" />
                  </div>
                  <h2 id={step.titleId} className="text-2xl md:text-3xl font-bold text-primary mb-3">{step.title}</h2>
                  <p id={step.descId} className="text-gray-600 leading-relaxed mb-5">{step.desc}</p>
                  <ul className="space-y-2">
                    {step.details.map((d) => (
                      <li key={d} className="flex items-start gap-2.5">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                  <img
                    alt={step.title}
                    data-strk-img-id={step.imgId}
                    data-strk-img={`[${step.descId}] [${step.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full rounded-xl shadow-md object-cover h-64 md:h-72 bg-gray-100"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timelines */}
      <section className="py-16 bg-lightblue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-primary mb-3">Typical Timelines</h2>
            <p className="text-gray-600 max-w-xl mx-auto">Timelines vary by product complexity and order size. Here are general estimates.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { phase: 'Supplier Sourcing', time: '3–7 business days', desc: 'From inquiry submission to shortlist delivery' },
              { phase: 'Factory Audit', time: '5–10 business days', desc: 'Scheduling, on-site visit, and report delivery' },
              { phase: 'Production & QC', time: 'Varies by product', desc: 'Typically 15–45 days depending on complexity' },
            ].map((t) => (
              <div key={t.phase} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
                <div className="text-3xl font-black text-accent mb-2">{t.time}</div>
                <h3 className="font-bold text-primary text-lg mb-1">{t.phase}</h3>
                <p className="text-gray-500 text-sm">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Sourcing Project?
          </h2>
          <p className="text-blue-200 text-lg mb-8">
            Submit your inquiry and we'll get back to you within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-red-700 transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
