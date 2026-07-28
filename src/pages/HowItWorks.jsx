import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Link } from 'react-router-dom'
import { Search, Factory, ClipboardCheck, FileText, Eye, Ship, ArrowRight, Phone, MessageSquare } from 'lucide-react'
import CTABanner from '@/components/CTABanner'

const steps = [
  {
    step: '01',
    icon: MessageSquare,
    title: 'Initial Consultation',
    duration: '1-2 Days',
    desc: 'Share your product idea, specifications, target price, and order volume with our sourcing specialist. We will ask detailed questions to fully understand your requirements and expectations. This conversation shapes the entire sourcing project.',
    imgId: 'process-step-1-consult-a1b2c3',
    titleId: 'process-step-1-title',
    descId: 'process-step-1-desc',
  },
  {
    step: '02',
    icon: Search,
    title: 'Supplier Research & Matching',
    duration: '3-7 Days',
    desc: 'Our team searches our database of 5,000+ vetted factories and identifies 3-5 best-match suppliers. We evaluate each candidate based on product specialization, production capacity, export experience, certifications, and client track record.',
    imgId: 'process-step-2-match-d4e5f6',
    titleId: 'process-step-2-title',
    descId: 'process-step-2-desc',
  },
  {
    step: '03',
    icon: Factory,
    title: 'Factory Audit & Sample Development',
    duration: '1-3 Weeks',
    desc: 'We conduct comprehensive on-site factory audits — verifying business licenses, touring production lines, and assessing QC systems. We then arrange for samples to be produced and shipped to you for evaluation.',
    imgId: 'process-step-3-audit-g7h8i9',
    titleId: 'process-step-3-title',
    descId: 'process-step-3-desc',
  },
  {
    step: '04',
    icon: FileText,
    title: 'Negotiation & Contract',
    duration: '2-5 Days',
    desc: 'Once you approve a supplier and samples, we negotiate pricing, payment terms, lead times, and quality standards. We draft a bilingual purchase contract that protects your interests under both Chinese and international trade law.',
    imgId: 'process-step-4-contract-j0k1l2',
    titleId: 'process-step-4-title',
    descId: 'process-step-4-desc',
  },
  {
    step: '05',
    icon: Eye,
    title: 'Production Monitoring & QC',
    duration: 'Ongoing',
    desc: 'We monitor production progress with weekly updates. Our QC team conducts in-process inspections at 30% and 80% completion stages, plus a mandatory pre-shipment inspection. We only release goods that pass our quality standards.',
    imgId: 'process-step-5-qc-m3n4o5',
    titleId: 'process-step-5-title',
    descId: 'process-step-5-desc',
  },
  {
    step: '06',
    icon: Ship,
    title: 'Logistics & Delivery',
    duration: '1-6 Weeks',
    desc: 'We coordinate freight (sea/air/rail), prepare all shipping documents, handle customs clearance, and track your shipment until it reaches your warehouse or door. You receive real-time updates throughout the shipping process.',
    imgId: 'process-step-6-ship-p6q7r8',
    titleId: 'process-step-6-title',
    descId: 'process-step-6-desc',
  },
]

const timeline = [
  { label: 'Initial Consultation', days: 'Day 1-2' },
  { label: 'Supplier Matching', days: 'Day 3-9' },
  { label: 'Factory Audit & Samples', days: 'Day 10-30' },
  { label: 'Negotiation & Contract', days: 'Day 31-35' },
  { label: 'Production Starts', days: 'Day 36+' },
  { label: 'QC Inspections', days: 'During Production' },
  { label: 'Shipping', days: 'After QC Pass' },
  { label: 'Delivery to You', days: '1-6 Weeks Later' },
]

export default function HowItWorks() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-400 font-semibold text-sm tracking-wide uppercase mb-3">How It Works</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
            Your Roadmap to Sourcing from China
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A clear, step-by-step process designed to minimize risk and maximize results.
            Here is exactly how we take you from inquiry to delivery.
          </p>
        </div>
      </section>

      {/* Timeline Overview */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy-950 text-center mb-10">
            Typical Project Timeline
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {timeline.map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-10 h-10 rounded-full bg-brand-600 text-white flex items-center justify-center mx-auto mb-3 font-bold text-sm">
                  {i + 1}
                </div>
                <p className="text-xs font-semibold text-navy-950 mb-1">{item.label}</p>
                <p className="text-xs text-gray-500">{item.days}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Steps */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {steps.map((step, index) => (
              <div
                key={step.step}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-10 lg:gap-16 items-center`}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-brand-600 font-bold text-5xl opacity-25">{step.step}</span>
                    <span className="px-3 py-1 bg-brand-50 text-brand-700 text-sm font-medium rounded-full">
                      {step.duration}
                    </span>
                  </div>
                  <h2 id={step.titleId} className="text-2xl sm:text-3xl font-bold text-navy-950 mb-4">
                    {step.title}
                  </h2>
                  <p id={step.descId} className="text-gray-600 leading-relaxed text-base">
                    {step.desc}
                  </p>
                </div>
                <div className="flex-1">
                  <div className="overflow-hidden rounded-xl shadow-lg">
                    <img
                      alt={step.title}
                      data-strk-img-id={step.imgId}
                      data-strk-img={`[${step.descId}] [${step.titleId}] China sourcing process step`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-auto rounded-xl"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Communication */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-950 mb-6">
            Always in the Loop
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-12">
            We communicate with you through your preferred channel — email, WhatsApp, WeChat, or video calls.
            You receive weekly progress reports, inspection photos and videos, and real-time updates.
          </p>
          <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { icon: Phone, title: 'Weekly Calls', desc: 'Scheduled video or voice calls to discuss progress and decisions.' },
              { icon: MessageSquare, title: 'Instant Messaging', desc: 'WhatsApp or WeChat for quick questions and daily updates.' },
              { icon: FileText, title: 'Structured Reports', desc: 'Formatted progress reports, inspection reports, and shipping docs.' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 rounded-full bg-brand-50 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-brand-600" />
                </div>
                <h3 className="font-semibold text-navy-950 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Start Your Sourcing Project?"
        subtitle="Our team is standing by. Share your requirements and we will prepare a custom sourcing plan for you."
        buttonText="Get Started Today"
      />
    </div>
  )
}
