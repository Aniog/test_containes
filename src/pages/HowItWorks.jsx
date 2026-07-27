import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Search, FileText, ClipboardCheck, Truck, ArrowRight, MessageCircle, Shield } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const steps = [
  {
    step: '01',
    icon: MessageCircle,
    title: 'Initial Consultation',
    duration: '1-2 Days',
    desc: 'Share your product requirements, specifications, target price, order volume, and timeline. We analyze your needs and prepare a customized sourcing plan with a free quote.',
    details: [
      'Product specification review',
      'Target price and budget analysis',
      'Timeline and volume assessment',
      'Sourcing strategy proposal',
      'Free service quote provided',
    ],
  },
  {
    step: '02',
    icon: Search,
    title: 'Supplier Identification & Audit',
    duration: '1-2 Weeks',
    desc: 'We search our network and industry databases to identify qualified suppliers. Shortlisted factories undergo on-site audits to verify certifications, capacity, and quality systems.',
    details: [
      'Supplier database search across 5,000+ factories',
      'RFQ distribution and quote collection',
      'Comparative analysis of quotes and capabilities',
      'On-site factory audit and verification',
      'Detailed audit report with photos and ratings',
    ],
  },
  {
    step: '03',
    icon: FileText,
    title: 'Sampling & Negotiation',
    duration: '2-4 Weeks',
    desc: 'We coordinate samples from top candidates, arrange your review, and negotiate pricing, payment terms, and production timelines on your behalf.',
    details: [
      'Sample request and coordination',
      'Sample quality review and feedback',
      'Price negotiation with factories',
      'Payment terms and contract finalization',
      'Production timeline agreement',
    ],
  },
  {
    step: '04',
    icon: ClipboardCheck,
    title: 'Production & Quality Control',
    duration: '3-8 Weeks',
    desc: 'We monitor production milestones, conduct in-process and pre-shipment inspections, and ensure your products meet all specifications before shipping.',
    details: [
      'Production kick-off and milestone tracking',
      'During-production inspection (DPI)',
      'Pre-shipment inspection (PSI) with AQL standards',
      'Defect management and rework coordination',
      'Container loading supervision',
    ],
  },
  {
    step: '05',
    icon: Truck,
    title: 'Shipping & Delivery',
    duration: '2-6 Weeks',
    desc: 'We manage all logistics — freight booking, export documentation, customs clearance, and shipment tracking — until your goods arrive at your destination.',
    details: [
      'Freight booking (sea, air, or rail)',
      'Export documentation preparation',
      'Customs clearance coordination',
      'Cargo insurance arrangement',
      'Real-time shipment tracking',
    ],
  },
]

export default function HowItWorks() {
  const containerRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-400 font-semibold text-sm uppercase tracking-wider mb-4">
            Our Process
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            How Our Sourcing Process Works
          </h1>
          <p className="mt-4 text-navy-200 text-lg max-w-2xl mx-auto">
            A proven five-step approach to source products from China with confidence, transparency, and quality assurance at every stage.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-0">
            {steps.map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={item.step} className="relative">
                  <div className="grid md:grid-cols-[auto_1fr_1fr] gap-6 md:gap-8 pb-12 md:pb-16">
                    <div className="flex flex-col items-center">
                      <div className="w-14 h-14 rounded-full bg-brand-600 text-white flex items-center justify-center text-lg font-bold shrink-0">
                        {item.step}
                      </div>
                      {idx < steps.length - 1 && (
                        <div className="w-0.5 flex-1 bg-brand-100 mt-2" />
                      )}
                    </div>

                    <div className="md:pt-3">
                      <div className="flex items-center gap-3 mb-2">
                        <Icon className="w-5 h-5 text-brand-600" />
                        <span className="text-xs font-semibold text-brand-600 bg-brand-50 px-2.5 py-1 rounded-full">
                          {item.duration}
                        </span>
                      </div>
                      <h3 id={`process-step-${item.step}`} className="text-xl font-bold text-navy-900 mb-3">
                        {item.title}
                      </h3>
                      <p className="text-navy-500 leading-relaxed mb-4">{item.desc}</p>
                      <ul className="space-y-2">
                        {item.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-navy-600">
                            <Shield className="w-3.5 h-3.5 text-brand-500 shrink-0 mt-0.5" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="md:pt-3">
                      <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 shadow-sm">
                        <img
                          alt={item.title}
                          data-strk-img-id={`how-it-works-${item.step}-${idx}f3b8`}
                          data-strk-img={`[process-step-${item.step}] China manufacturing sourcing process step`}
                          data-strk-img-ratio="4x3"
                          data-strk-img-width="500"
                          className="w-full h-full object-cover"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 tracking-tight mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-navy-500 text-lg mb-8">
            The entire process from inquiry to delivery typically takes 6-14 weeks. Contact us today to start your sourcing journey.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-8 py-4 text-base font-semibold text-white hover:bg-brand-700 transition-colors"
          >
            Start Your Sourcing Project
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}