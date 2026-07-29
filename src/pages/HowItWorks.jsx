import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '@/components/shared/PageHero'
import SectionCTA from '@/components/shared/SectionCTA'

const steps = [
  {
    step: '01',
    title: 'Share Your Requirements',
    desc: 'Fill out our inquiry form with your product details, target price, quantity, quality standards, and timeline. The more detail you provide, the faster we can find the right suppliers.',
    details: ['Product specifications & drawings', 'Target FOB/CIF price', 'Order quantity & MOQ flexibility', 'Quality certifications needed', 'Delivery timeline'],
    id: 'step-requirements',
    titleId: 'hiw-step1-title',
    descId: 'hiw-step1-desc',
    imgId: 'hiw-step1-img-a2b4c6',
  },
  {
    step: '02',
    title: 'Supplier Research & Shortlist',
    desc: 'Our team researches the market, contacts potential suppliers, and creates a shortlist of 3-5 qualified factories. We compare pricing, capabilities, certifications, and export experience.',
    details: ['Database & market research', 'Initial supplier screening', 'Price & capability comparison', 'Shortlist presentation with profiles'],
    id: 'step-research',
    titleId: 'hiw-step2-title',
    descId: 'hiw-step2-desc',
    imgId: 'hiw-step2-img-d5e7f9',
  },
  {
    step: '03',
    title: 'Factory Audit & Verification',
    desc: 'We visit the top candidates in person to verify their factory, check production lines, review quality systems, and confirm they can meet your requirements at scale.',
    details: ['On-site factory visit', 'Production capacity check', 'Quality management review', 'Detailed audit report with photos'],
    id: 'step-audit',
    titleId: 'hiw-step3-title',
    descId: 'hiw-step3-desc',
    imgId: 'hiw-step3-img-g8h1i3',
  },
  {
    step: '04',
    title: 'Samples & Negotiation',
    desc: 'We coordinate sample production, manage revisions, and negotiate final pricing and terms on your behalf. You approve the sample before any bulk order is placed.',
    details: ['Sample production management', 'Quality evaluation & feedback', 'Price & terms negotiation', 'Contract finalization'],
    id: 'step-samples',
    titleId: 'hiw-step4-title',
    descId: 'hiw-step4-desc',
    imgId: 'hiw-step4-img-j4k6l8',
  },
  {
    step: '05',
    title: 'Production Monitoring & QC',
    desc: 'Once production begins, we track progress, conduct inspections at key milestones, and ensure quality standards are maintained throughout the entire production run.',
    details: ['Production timeline tracking', 'In-line quality inspections', 'Pre-shipment final inspection', 'Defect reporting & resolution'],
    id: 'step-production',
    titleId: 'hiw-step5-title',
    descId: 'hiw-step5-desc',
    imgId: 'hiw-step5-img-m7n9o1',
  },
  {
    step: '06',
    title: 'Shipping & Delivery',
    desc: 'We book freight, prepare customs documentation, arrange insurance, and track your shipment until it arrives at your warehouse. You receive updates at every stage.',
    details: ['Freight booking (sea/air)', 'Customs documentation', 'Shipment tracking', 'Delivery confirmation'],
    id: 'step-shipping',
    titleId: 'hiw-step6-title',
    descId: 'hiw-step6-desc',
    imgId: 'hiw-step6-img-p2q4r6',
  },
]

export default function HowItWorks() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <PageHero
        title="How It Works"
        subtitle="Our structured 6-step process takes you from initial requirements to delivered goods — with full transparency at every stage."
      />

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {steps.map((item, idx) => (
              <div key={item.id} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center`}>
                <div className="w-full lg:w-1/2">
                  <img
                    alt={item.title}
                    data-strk-img-id={item.imgId}
                    data-strk-img={`[${item.descId}] [${item.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                    className="w-full rounded-xl object-cover"
                  />
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="text-4xl font-bold text-brand-orange mb-2">{item.step}</div>
                  <h2 id={item.titleId} className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">{item.title}</h2>
                  <p id={item.descId} className="text-brand-gray leading-relaxed mb-6">{item.desc}</p>
                  <ul className="space-y-2">
                    {item.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-3 text-sm text-brand-dark">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0" />
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

      <section className="bg-brand-light py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-brand-gray mb-8">
            The first step is simple: tell us what you need. We will respond within 24 hours with an initial assessment and recommended next steps.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-brand-orange text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors text-lg"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
