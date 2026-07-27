import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Link } from 'react-router-dom'
import { ArrowRight, FileText, Search, ShieldCheck, Package, ClipboardCheck, Ship, CheckCircle } from 'lucide-react'

const steps = [
  {
    icon: FileText,
    step: 'Step 1',
    title: 'Submit Your Requirements',
    duration: 'Day 1',
    desc: 'Fill out our inquiry form with your product specifications, target price range, order quantity, and quality requirements. The more detail you provide, the faster we can match you with the right suppliers.',
    whatWeDo: [
      'Review your product requirements',
      'Schedule a consultation call',
      'Create a detailed sourcing brief',
      'Provide a timeline and cost estimate',
    ],
    whatYouGet: 'A clear sourcing plan with timeline and cost breakdown.',
  },
  {
    icon: Search,
    step: 'Step 2',
    title: 'Supplier Identification',
    duration: '1-2 Weeks',
    desc: 'We search our database of 2,000+ verified factories and tap into our industry network to identify manufacturers that match your requirements. We pre-screen each candidate before presenting them to you.',
    whatWeDo: [
      'Search supplier database and network',
      'Pre-screen for production capability',
      'Verify export experience',
      'Prepare a shortlist of 3-5 suppliers',
      'Present comparison of quotations',
    ],
    whatYouGet: 'A shortlist of qualified suppliers with comparison analysis.',
  },
  {
    icon: ShieldCheck,
    step: 'Step 3',
    title: 'Factory Audit & Verification',
    duration: '3-5 Days',
    desc: 'Our team visits each shortlisted factory in person. We verify business licenses, tour production lines, assess quality management systems, check certifications, and evaluate financial stability.',
    whatWeDo: [
      'On-site factory tour',
      'Business license verification',
      'Production capacity assessment',
      'Quality management system audit',
      'Certification verification',
      'Financial health evaluation',
    ],
    whatYouGet: 'Detailed audit reports with photos, scores, and our recommendation.',
  },
  {
    icon: Package,
    step: 'Step 4',
    title: 'Sampling & Negotiation',
    duration: '2-4 Weeks',
    desc: 'We coordinate sample production with your chosen supplier. Our team helps negotiate pricing, payment terms, and contract conditions to protect your interests.',
    whatWeDo: [
      'Coordinate sample production',
      'Facilitate price negotiation',
      'Review contract terms',
      'Establish quality benchmarks',
      'Set production milestones',
    ],
    whatYouGet: 'Approved samples, finalized contract, and clear production schedule.',
  },
  {
    icon: ClipboardCheck,
    step: 'Step 5',
    title: 'Production & Quality Control',
    duration: 'Varies by Product',
    desc: 'We monitor production at every stage. Our QC team conducts in-process inspections and a comprehensive pre-shipment inspection before your goods leave the factory.',
    whatWeDo: [
      'Monitor production milestones',
      'Conduct in-process QC inspections',
      'Provide weekly progress reports',
      'Flag and resolve issues early',
      'Pre-shipment inspection (AQL standard)',
      'Container loading supervision',
    ],
    whatYouGet: 'Regular updates with photos and detailed QC reports.',
  },
  {
    icon: Ship,
    step: 'Step 6',
    title: 'Shipping & Delivery',
    duration: '2-6 Weeks',
    desc: 'We coordinate freight forwarding, prepare all shipping documentation, handle customs clearance, and track your shipment until it arrives at your warehouse.',
    whatWeDo: [
      'Select freight forwarder',
      'Prepare shipping documents',
      'Handle customs clearance',
      'Arrange cargo insurance',
      'Provide real-time tracking',
      'Coordinate warehouse delivery',
    ],
    whatYouGet: 'Your goods delivered to your warehouse, on time and as specified.',
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
      <section className="bg-brand-900 py-16 md:py-20">
        <div className="section-container text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">How It Works</h1>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            Our proven six-step process takes you from inquiry to delivery. Transparent, structured, and reliable.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-white">
        <div className="section-container max-w-4xl">
          {steps.map((s, i) => (
            <div key={s.step} className="relative pb-12 last:pb-0">
              {/* Timeline line */}
              {i < steps.length - 1 && (
                <div className="absolute left-[27px] top-14 bottom-0 w-0.5 bg-brand-200" />
              )}

              <div className="flex gap-6">
                {/* Icon */}
                <div className="relative z-10 w-14 h-14 bg-brand-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <s.icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <div className="flex-1 pt-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-xs font-semibold text-brand-500 bg-brand-50 px-2.5 py-1 rounded-full">
                      {s.step}
                    </span>
                    <span className="text-xs text-neutral-400">{s.duration}</span>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">{s.title}</h3>
                  <p className="text-neutral-500 mb-4 leading-relaxed">{s.desc}</p>

                  <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-5">
                    <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-3">What We Do</p>
                    <ul className="space-y-1.5 mb-4">
                      {s.whatWeDo.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-neutral-600">
                          <CheckCircle className="w-4 h-4 text-brand-500 mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="border-t border-neutral-200 pt-3">
                      <p className="text-sm font-medium text-brand-500">
                        <span className="text-neutral-400">You get: </span>
                        {s.whatYouGet}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-neutral-50">
        <div className="section-container text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">Ready to Get Started?</h2>
          <p className="text-neutral-500 mb-8 max-w-xl mx-auto">
            Submit your product requirements today and receive a sourcing plan within 24 hours.
          </p>
          <Link to="/contact" className="btn-primary text-lg px-8 py-3.5 inline-flex items-center gap-2">
            Submit Your Inquiry <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}