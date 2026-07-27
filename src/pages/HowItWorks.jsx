import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ClipboardList, Search, ShieldCheck, ClipboardCheck, PackageCheck, Ship, ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const steps = [
  {
    id: 'step-1',
    icon: ClipboardList,
    step: '1',
    title: 'Submit Your Request',
    desc: 'Tell us what you need — product type, specifications, quantity, target price, and timeline. We review your requirements and confirm feasibility within 24 hours.',
    details: [
      'Fill out our inquiry form or send us an email',
      'Include product specs, photos, or reference samples',
      'Specify quantity, target price, and delivery timeline',
      'We confirm feasibility and outline next steps',
    ],
    imgId: 'how-step1-a1b2c3',
    titleId: 'how-step1-title',
    descId: 'how-step1-desc',
  },
  {
    id: 'step-2',
    icon: Search,
    step: '2',
    title: 'Supplier Search & Screening',
    desc: 'We search our verified supplier network and evaluate candidates based on your requirements. You receive 3-5 qualified options with detailed profiles and pricing.',
    details: [
      'Search our 500+ verified supplier database',
      'Evaluate production capability and product match',
      'Compare pricing, MOQ, and lead times',
      'Present 3-5 qualified options with detailed profiles',
    ],
    imgId: 'how-step2-d4e5f6',
    titleId: 'how-step2-title',
    descId: 'how-step2-desc',
  },
  {
    id: 'step-3',
    icon: ShieldCheck,
    step: '3',
    title: 'Factory Verification',
    desc: 'Before you commit, we conduct on-site audits to verify business legitimacy, production capacity, quality systems, and working conditions.',
    details: [
      'Verify business license and company registration',
      'On-site factory visit and capability assessment',
      'Evaluate quality management systems',
      'Check production equipment and workforce',
    ],
    imgId: 'how-step3-g7h8i9',
    titleId: 'how-step3-title',
    descId: 'how-step3-desc',
  },
  {
    id: 'step-4',
    icon: ClipboardCheck,
    step: '4',
    title: 'Sample & Quality Check',
    desc: 'We arrange sample production, evaluate quality against your specifications, and conduct inspections throughout the production process.',
    details: [
      'Coordinate sample production and delivery',
      'Evaluate samples against your specifications',
      'Pre-production inspection before mass production',
      'During-production inspection to catch issues early',
    ],
    imgId: 'how-step4-j1k2l3',
    titleId: 'how-step4-title',
    descId: 'how-step4-desc',
  },
  {
    id: 'step-5',
    icon: PackageCheck,
    step: '5',
    title: 'Production Follow-up',
    desc: 'We monitor production progress, track timelines, and keep you updated with regular reports and photos. Issues are flagged early so they can be resolved quickly.',
    details: [
      'Weekly production status updates with photos',
      'Timeline tracking against agreed milestones',
      'Early warning on potential delays',
      'Coordinate changes between buyer and factory',
    ],
    imgId: 'how-step5-m4n5o6',
    titleId: 'how-step5-title',
    descId: 'how-step5-desc',
  },
  {
    id: 'step-6',
    icon: Ship,
    step: '6',
    title: 'Shipping & Delivery',
    desc: 'We coordinate freight booking, handle customs documentation, arrange insurance, and track your shipment from factory to your warehouse.',
    details: [
      'Compare sea, air, and express shipping options',
      'Book freight and prepare customs documentation',
      'Arrange cargo insurance',
      'Track shipment from factory to destination',
    ],
    imgId: 'how-step6-p7q8r9',
    titleId: 'how-step6-title',
    descId: 'how-step6-desc',
  },
]

const HowItWorks = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-primary-800 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 id="how-page-title" className="text-3xl md:text-4xl font-bold mb-4">How It Works</h1>
          <p id="how-page-desc" className="text-primary-100 max-w-2xl text-lg">
            A clear, step-by-step process that takes you from initial request to delivered goods — with full transparency at every stage.
          </p>
        </div>
      </section>

      {steps.map((s, i) => (
        <section key={s.id} className={`py-16 md:py-20 ${i % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary-500 text-white flex items-center justify-center font-bold text-sm">
                    {s.step}
                  </div>
                  <s.icon className="w-6 h-6 text-primary-500" />
                </div>
                <h2 id={s.titleId} className="text-2xl md:text-3xl font-bold text-neutral-800 mb-3">{s.title}</h2>
                <p id={s.descId} className="text-neutral-500 leading-relaxed mb-6">{s.desc}</p>
                <ul className="space-y-2 mb-6">
                  {s.details.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm text-neutral-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-1.5" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="aspect-[4/3] rounded-lg overflow-hidden bg-neutral-100">
                  <img
                    alt={s.title}
                    data-strk-img-id={s.imgId}
                    data-strk-img={`[${s.descId}] [${s.titleId}] [how-page-desc] [how-page-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="py-16 md:py-20 bg-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start?</h2>
          <p className="text-primary-100 max-w-2xl mx-auto mb-8">
            Submit your sourcing request today and we will begin the process within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-semibold px-6 py-3 rounded-lg no-underline transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default HowItWorks
