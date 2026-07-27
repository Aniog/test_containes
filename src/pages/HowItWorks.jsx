import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, CheckCircle } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Submit Your Requirements',
    description: 'Fill out our inquiry form with your product details, target price, quantity, quality standards, and timeline. The more detail you provide, the faster we can match you with the right suppliers.',
    details: ['Product specifications & drawings', 'Target FOB/CIF price', 'Order quantity & MOQ flexibility', 'Required certifications', 'Delivery timeline'],
    titleId: 'step-1-title',
    descId: 'step-1-desc',
    imgId: 'step-1-img-x1y2z3',
  },
  {
    number: '02',
    title: 'Supplier Research & Shortlisting',
    description: 'Our team researches the market, contacts potential suppliers, and creates a shortlist of 3–5 qualified factories. We verify basic credentials and request initial quotations on your behalf.',
    details: ['Database & market research', 'Initial supplier screening', 'Quotation collection & comparison', 'Preliminary background check'],
    titleId: 'step-2-title',
    descId: 'step-2-desc',
    imgId: 'step-2-img-a4b5c6',
  },
  {
    number: '03',
    title: 'Factory Audit & Samples',
    description: 'We visit the shortlisted factories in person to verify their capabilities. Once you select a supplier, we arrange product samples and manage revisions until you approve.',
    details: ['On-site factory audit', 'Capacity & equipment verification', 'Sample arrangement & follow-up', 'Sample evaluation support'],
    titleId: 'step-3-title',
    descId: 'step-3-desc',
    imgId: 'step-3-img-d7e8f9',
  },
  {
    number: '04',
    title: 'Order Placement & Production',
    description: 'We help finalize contracts, negotiate payment terms, and place the order. During production, we conduct regular check-ins and provide progress reports with photos.',
    details: ['Contract & payment term negotiation', 'Order confirmation', 'Production timeline tracking', 'Regular progress updates'],
    titleId: 'step-4-title',
    descId: 'step-4-desc',
    imgId: 'step-4-img-g1h2i3',
  },
  {
    number: '05',
    title: 'Quality Inspection',
    description: 'Before shipment, our inspectors visit the factory to check your goods against approved samples and specifications. We follow AQL standards and provide a detailed inspection report.',
    details: ['AQL sampling inspection', 'Defect classification', 'Detailed photo report', 'Pass/fail recommendation'],
    titleId: 'step-5-title',
    descId: 'step-5-desc',
    imgId: 'step-5-img-j4k5l6',
  },
  {
    number: '06',
    title: 'Shipping & Delivery',
    description: 'We coordinate with freight forwarders, prepare export documents, and track your shipment until it arrives at your warehouse. You receive tracking updates throughout.',
    details: ['Freight booking (sea/air/rail)', 'Export documentation', 'Customs clearance support', 'Delivery confirmation'],
    titleId: 'step-6-title',
    descId: 'step-6-desc',
    imgId: 'step-6-img-m7n8o9',
  },
]

export default function HowItWorks() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              How It Works
            </h1>
            <p className="mt-4 text-lg text-slate-300 leading-relaxed">
              Our structured 6-step process ensures transparency, quality, and on-time delivery for every sourcing project.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center`}
              >
                <div className="w-full lg:w-1/2">
                  <img
                    alt={step.title}
                    data-strk-img-id={step.imgId}
                    data-strk-img={`[${step.descId}] [${step.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                    className="w-full rounded-xl object-cover"
                  />
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="text-5xl font-bold text-brand-blue opacity-20 mb-2">{step.number}</div>
                  <h2 id={step.titleId} className="text-2xl md:text-3xl font-bold text-brand-navy mb-4">{step.title}</h2>
                  <p id={step.descId} className="text-slate-600 leading-relaxed mb-6">{step.description}</p>
                  <ul className="space-y-2">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-brand-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Ready to Start Your Sourcing Project?
          </h2>
          <p className="mt-4 text-lg text-blue-100">
            Submit your requirements today and receive a free proposal within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center mt-8 bg-white text-brand-blue px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
