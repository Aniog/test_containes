import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const steps = [
  {
    step: '01',
    title: 'Submit Your Requirements',
    desc: 'Fill out our inquiry form with your product specifications, target price, quantity, quality standards, and timeline. The more detail you provide, the better we can match you with the right suppliers.',
    details: ['Product specs & drawings', 'Target FOB/CIF price', 'Order quantity & MOQ flexibility', 'Quality certifications needed', 'Delivery timeline'],
  },
  {
    step: '02',
    title: 'Supplier Research & Shortlisting',
    desc: 'Our sourcing team searches our database and conducts market research to identify 3-5 qualified suppliers. We evaluate each against your criteria and present a detailed comparison report.',
    details: ['Supplier capability assessment', 'Price comparison matrix', 'Lead time analysis', 'Certification verification', 'Communication responsiveness rating'],
  },
  {
    step: '03',
    title: 'Factory Audit & Verification',
    desc: 'We visit the shortlisted factories in person to verify their production capacity, quality systems, business legitimacy, and working conditions. You receive a comprehensive audit report with photos.',
    details: ['On-site facility inspection', 'Production line evaluation', 'Quality management system review', 'Business license verification', 'Past client reference check'],
  },
  {
    step: '04',
    title: 'Sample Development & Approval',
    desc: 'We coordinate sample production, evaluate quality against your specifications, and manage revisions until you approve the final sample. Only then do we proceed to mass production.',
    details: ['Sample request coordination', 'Quality evaluation vs. specs', 'Revision management', 'Final sample approval', 'Production-ready confirmation'],
  },
  {
    step: '05',
    title: 'Production Monitoring',
    desc: 'Throughout production, we maintain regular factory contact, conduct milestone inspections, and provide weekly progress reports. Any issues are flagged and resolved immediately.',
    details: ['Weekly photo/video updates', 'Milestone inspection visits', 'Timeline tracking', 'Issue escalation & resolution', 'Change order management'],
  },
  {
    step: '06',
    title: 'Quality Inspection',
    desc: 'Before shipment, our QC team conducts a thorough pre-shipment inspection following AQL standards. We check functionality, appearance, packaging, and labeling against your approved sample.',
    details: ['AQL sampling inspection', 'Functionality testing', 'Appearance & finish check', 'Packaging & labeling review', 'Detailed inspection report'],
  },
  {
    step: '07',
    title: 'Shipping & Delivery',
    desc: 'We coordinate the entire logistics process — booking freight, preparing customs documents, managing consolidation, and tracking shipment until it arrives at your warehouse.',
    details: ['Freight booking (sea/air/rail)', 'Customs documentation', 'Shipment tracking', 'Delivery coordination', 'Post-delivery support'],
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
      <section className="bg-[#0f2a4a] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[#e86a2e] font-semibold text-sm uppercase tracking-wider mb-3">Our Process</p>
            <h1 id="hiw-hero-title" className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              How We Work With You
            </h1>
            <p id="hiw-hero-subtitle" className="mt-5 text-lg text-neutral-200 leading-relaxed">
              A transparent, step-by-step process designed to minimize risk and maximize value at every stage of your sourcing project.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, idx) => (
              <div key={step.step} className="relative">
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute left-6 top-16 bottom-0 w-px bg-neutral-200" />
                )}
                <div className="flex gap-6">
                  <div className="shrink-0">
                    <div className="w-12 h-12 rounded-full bg-[#e86a2e] flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{step.step}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl md:text-2xl font-bold text-[#0f2a4a] mb-3">{step.title}</h2>
                    <p className="text-neutral-700 leading-relaxed mb-4">{step.desc}</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-2 text-sm text-neutral-700">
                          <CheckCircle2 className="w-4 h-4 text-[#e86a2e] mt-0.5 shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual */}
      <section className="bg-neutral-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl overflow-hidden">
              <img
                data-strk-img-id="hiw-factory-audit-img-2c4a"
                data-strk-img="[hiw-hero-subtitle] factory audit inspection China"
                data-strk-img-ratio="4x3"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Factory audit in China"
                className="w-full h-64 object-cover"
              />
              <p className="text-center text-sm text-neutral-700 font-medium mt-3">Factory Audit</p>
            </div>
            <div className="rounded-xl overflow-hidden">
              <img
                data-strk-img-id="hiw-qc-inspection-img-5f8b"
                data-strk-img="[hiw-hero-subtitle] quality control inspection products"
                data-strk-img-ratio="4x3"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Quality inspection"
                className="w-full h-64 object-cover"
              />
              <p className="text-center text-sm text-neutral-700 font-medium mt-3">Quality Inspection</p>
            </div>
            <div className="rounded-xl overflow-hidden">
              <img
                data-strk-img-id="hiw-shipping-img-7d3e"
                data-strk-img="[hiw-hero-subtitle] container shipping port logistics"
                data-strk-img-ratio="4x3"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Shipping containers"
                className="w-full h-64 object-cover"
              />
              <p className="text-center text-sm text-neutral-700 font-medium mt-3">Shipping Coordination</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0f2a4a] py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Start Your Sourcing Project Today
          </h2>
          <p className="mt-4 text-lg text-neutral-200 leading-relaxed">
            Submit your requirements and receive a detailed sourcing proposal within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center mt-8 bg-[#e86a2e] hover:bg-[#d05a20] text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
