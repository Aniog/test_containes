import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, MessageSquare, Search, ShieldCheck, Package, ClipboardCheck, Ship } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Submit Your Requirements',
    desc: 'Fill out our inquiry form with your product details, target price, quantity, quality standards, and timeline. The more detail you provide, the faster we can help.',
    details: ['Product specifications & drawings', 'Target FOB/CIF price', 'Order quantity & MOQ flexibility', 'Required certifications', 'Delivery timeline'],
  },
  {
    number: '02',
    icon: Search,
    title: 'Supplier Research & Shortlisting',
    desc: 'Our sourcing team searches our verified supplier database and industry contacts to identify 3–5 qualified manufacturers that match your criteria.',
    details: ['Database & market research', 'Initial supplier screening', 'Capability comparison report', 'Price quotation collection', 'Recommendation with rationale'],
  },
  {
    number: '03',
    icon: ShieldCheck,
    title: 'Factory Audit & Verification',
    desc: 'We visit the top candidates in person to verify their production capacity, quality systems, certifications, and business legitimacy.',
    details: ['On-site factory visit', 'Business license check', 'Production line inspection', 'Quality system review', 'Audit report with photos'],
  },
  {
    number: '04',
    icon: Package,
    title: 'Sampling & Negotiation',
    desc: 'We arrange product samples for your approval, negotiate the best pricing and payment terms, and finalize the purchase contract.',
    details: ['Sample production & shipping', 'Price & MOQ negotiation', 'Payment term optimization', 'Contract preparation', 'Order confirmation'],
  },
  {
    number: '05',
    icon: ClipboardCheck,
    title: 'Production Monitoring & QC',
    desc: 'During production, we visit the factory regularly to check progress, catch issues early, and conduct formal quality inspections before shipment.',
    details: ['Production timeline tracking', 'Weekly progress updates', 'During-production inspection', 'Pre-shipment inspection', 'Defect resolution'],
  },
  {
    number: '06',
    icon: Ship,
    title: 'Shipping & Delivery',
    desc: 'We coordinate all logistics — booking freight, preparing customs documents, and tracking shipment until goods arrive at your warehouse.',
    details: ['Freight booking (sea/air/rail)', 'Export documentation', 'Container loading supervision', 'Shipment tracking', 'Delivery confirmation'],
  },
]

export default function HowItWorksPage() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 id="hiw-title" className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              How It Works
            </h1>
            <p id="hiw-subtitle" className="mt-4 text-lg text-gray-300 leading-relaxed">
              Our proven 6-step sourcing process takes you from product idea to delivered goods — with full transparency at every stage.
            </p>
          </div>
        </div>
      </section>

      {/* Process Visual */}
      <section className="py-16 md:py-24 bg-brand-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-brand-border hidden md:block" />

            <div className="space-y-12">
              {steps.map((step) => {
                const Icon = step.icon
                return (
                  <div key={step.number} className="relative flex gap-6">
                    {/* Step number circle */}
                    <div className="hidden md:flex shrink-0 w-12 h-12 rounded-full bg-brand-blue text-white items-center justify-center font-bold text-sm z-10">
                      {step.number}
                    </div>

                    <div className="flex-1 bg-brand-white rounded-xl border border-brand-border p-6 md:p-8">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="md:hidden inline-flex w-8 h-8 rounded-full bg-brand-blue text-white items-center justify-center font-bold text-xs">
                          {step.number}
                        </span>
                        <Icon className="w-6 h-6 text-brand-blue" />
                        <h2 className="text-xl font-bold text-brand-dark">{step.title}</h2>
                      </div>
                      <p className="text-brand-gray leading-relaxed mb-4">{step.desc}</p>
                      <ul className="space-y-1.5">
                        {step.details.map((detail) => (
                          <li key={detail} className="flex items-center gap-2 text-sm text-brand-dark">
                            <span className="w-1.5 h-1.5 bg-brand-blue rounded-full shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-16 md:py-20 bg-brand-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl overflow-hidden">
              <img
                data-strk-img-id="hiw-factory-visit-a1b2c3"
                data-strk-img="[hiw-img1-caption] [hiw-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Factory visit and audit"
                className="w-full aspect-[4/3] object-cover"
              />
              <p id="hiw-img1-caption" className="mt-3 text-sm text-brand-gray text-center">Factory visit and supplier audit</p>
            </div>
            <div className="rounded-xl overflow-hidden">
              <img
                data-strk-img-id="hiw-qc-inspection-d4e5f6"
                data-strk-img="[hiw-img2-caption] [hiw-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Quality control inspection"
                className="w-full aspect-[4/3] object-cover"
              />
              <p id="hiw-img2-caption" className="mt-3 text-sm text-brand-gray text-center">Quality control inspection</p>
            </div>
            <div className="rounded-xl overflow-hidden">
              <img
                data-strk-img-id="hiw-shipping-container-g7h8i9"
                data-strk-img="[hiw-img3-caption] [hiw-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Container shipping logistics"
                className="w-full aspect-[4/3] object-cover"
              />
              <p id="hiw-img3-caption" className="mt-3 text-sm text-brand-gray text-center">Container shipping and logistics</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-brand-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Start Your Sourcing Project Today
          </h2>
          <p className="mt-4 text-blue-100 text-lg">
            Submit your requirements and our team will get back to you within 24 hours with a sourcing plan.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center mt-8 bg-white text-brand-blue px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
