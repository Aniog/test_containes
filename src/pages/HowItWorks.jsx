import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, MessageSquare, Search, FileSearch, ClipboardCheck, Truck, PackageCheck, ChevronRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Initial Consultation',
    desc: 'You share your product requirements, target price, order volume, and quality expectations. We review feasibility and provide a preliminary assessment within 24 hours.',
    highlights: ['Product specification review', 'Budget & MOQ alignment', 'Timeline planning'],
    imgId: 'hiw-step-1-a1b2',
  },
  {
    number: '02',
    icon: Search,
    title: 'Supplier Identification',
    desc: 'We search our verified factory database and industry networks to identify 3-5 qualified manufacturers that match your requirements.',
    highlights: ['Factory database search', 'Initial capability screening', 'Supplier shortlist with profiles'],
    imgId: 'hiw-step-2-c3d4',
  },
  {
    number: '03',
    icon: FileSearch,
    title: 'Factory Audit & Verification',
    desc: 'Our team visits shortlisted factories to audit production lines, quality systems, certifications, and management practices.',
    highlights: ['On-site factory visit', 'Capacity assessment', 'Audit report with photos'],
    imgId: 'hiw-step-3-e5f6',
  },
  {
    number: '04',
    icon: ClipboardCheck,
    title: 'Sampling & Negotiation',
    desc: 'We coordinate sample production, arrange shipping to you, and help negotiate pricing, payment terms, and production timelines.',
    highlights: ['Sample coordination', 'Price negotiation', 'Contract review'],
    imgId: 'hiw-step-4-g7h8',
  },
  {
    number: '05',
    icon: PackageCheck,
    title: 'Production & QC',
    desc: 'We monitor production progress with regular factory visits and conduct quality inspections at critical stages to ensure specifications are met.',
    highlights: ['Production monitoring', 'In-line QC inspections', 'Pre-shipment inspection'],
    imgId: 'hiw-step-5-i9j0',
  },
  {
    number: '06',
    icon: Truck,
    title: 'Shipping & Delivery',
    desc: 'We manage freight booking, customs documentation, cargo insurance, and track your shipment until it reaches your warehouse.',
    highlights: ['Freight coordination', 'Customs clearance', 'Delivery tracking'],
    imgId: 'hiw-step-6-k1l2',
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
      <section className="bg-brand-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 id="hiw-title" className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              How It Works
            </h1>
            <p className="text-lg text-blue-200 leading-relaxed">
              A clear, structured process that takes your product from concept to delivery — managed by professionals on the ground in China.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 md:space-y-24">
            {steps.map((step, i) => (
              <div key={i} className="relative">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute left-[39px] top-16 bottom-0 w-px bg-gray-200" style={{ bottom: '-6rem' }} />
                )}
                <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                  {/* Number & Icon */}
                  <div className="flex md:flex-col items-center md:items-start gap-3 flex-shrink-0">
                    <div className="w-20 h-20 rounded-2xl bg-brand-500 flex items-center justify-center relative z-10">
                      <span className="text-2xl font-bold text-white">{step.number}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <step.icon className="w-6 h-6 text-brand-500" />
                      <h2 className="text-2xl font-bold text-brand-900">{step.title}</h2>
                    </div>
                    <p id={`hiw-step-${i}-desc`} className="text-slate-600 leading-relaxed mb-5">
                      {step.desc}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {step.highlights.map((h, j) => (
                        <span key={j} className="px-3 py-1.5 bg-brand-50 text-brand-700 text-xs font-medium rounded-full">
                          {h}
                        </span>
                      ))}
                    </div>
                    <div className="relative rounded-xl overflow-hidden aspect-[16/9] max-w-lg">
                      <img
                        alt={step.title}
                        data-strk-img-id={step.imgId}
                        data-strk-img={`[hiw-step-${i}-desc] [hiw-title]`}
                        data-strk-img-ratio="16x9"
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

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-brand-900 mb-6">Typical Timeline</h2>
          <div className="bg-white border border-gray-200 rounded-xl p-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
              <div className="border-l-2 border-brand-500 pl-4">
                <p className="text-brand-500 text-sm font-semibold mb-1">Week 1-2</p>
                <p className="text-brand-900 font-semibold">Consultation & Sourcing</p>
                <p className="text-slate-500 text-sm">Requirements review, supplier search, shortlist creation</p>
              </div>
              <div className="border-l-2 border-accent-400 pl-4">
                <p className="text-accent-500 text-sm font-semibold mb-1">Week 2-4</p>
                <p className="text-brand-900 font-semibold">Audit & Sampling</p>
                <p className="text-slate-500 text-sm">Factory visits, audit reports, sample production and review</p>
              </div>
              <div className="border-l-2 border-brand-500 pl-4">
                <p className="text-brand-500 text-sm font-semibold mb-1">Week 4+</p>
                <p className="text-brand-900 font-semibold">Production & Delivery</p>
                <p className="text-slate-500 text-sm">Production monitoring, QC, shipping to your destination</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-brand-500">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Start Your Sourcing Journey
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            The first step is a no-obligation consultation. Tell us what you need.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-brand-700 hover:bg-blue-50 font-semibold px-8 py-3.5 rounded-lg text-base transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
