import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight } from 'lucide-react'
import { SectionHeading, CTAButton } from '@/components/shared/SectionHeading'

const steps = [
  {
    step: '01',
    title: 'Submit Your Requirements',
    desc: 'Fill out our inquiry form with your product details, specifications, target price, quantity, and delivery timeline. The more detail you provide, the faster we can find the right suppliers.',
    details: ['Product specifications & drawings', 'Target price range', 'Order quantity & MOQ flexibility', 'Quality standards & certifications needed', 'Delivery timeline'],
    titleId: 'hiw-step1-title',
    descId: 'hiw-step1-desc',
    imgId: 'hiw-step1-img-m3n4o5',
  },
  {
    step: '02',
    title: 'Supplier Research & Shortlisting',
    desc: 'Our sourcing team searches our verified supplier database and industry contacts to identify manufacturers that match your requirements. We typically present 3-5 qualified options within 5-7 business days.',
    details: ['Database & network search', 'Initial supplier screening', 'Capability assessment', 'Price & MOQ comparison', 'Shortlist presentation'],
    titleId: 'hiw-step2-title',
    descId: 'hiw-step2-desc',
    imgId: 'hiw-step2-img-p6q7r8',
  },
  {
    step: '03',
    title: 'Factory Audit & Verification',
    desc: 'We visit shortlisted factories in person to verify their legitimacy, production capacity, quality systems, and working conditions. You receive a detailed audit report with photos and our recommendation.',
    details: ['On-site factory visit', 'Business license verification', 'Production line inspection', 'Quality system review', 'Detailed photo report'],
    titleId: 'hiw-step3-title',
    descId: 'hiw-step3-desc',
    imgId: 'hiw-step3-img-s9t1u2',
  },
  {
    step: '04',
    title: 'Sampling & Negotiation',
    desc: 'Once you select a supplier, we arrange product samples for your approval. We also negotiate pricing, payment terms, and production timelines on your behalf to secure the best deal.',
    details: ['Sample production & shipping', 'Price negotiation', 'Payment term discussion', 'Contract preparation', 'Final approval'],
    titleId: 'hiw-step4-title',
    descId: 'hiw-step4-desc',
    imgId: 'hiw-step4-img-v3w4x5',
  },
  {
    step: '05',
    title: 'Production Monitoring & QC',
    desc: 'During production, we conduct regular factory visits to monitor progress and quality. We perform inspections at key stages and provide you with detailed reports including photos and test results.',
    details: ['Production schedule tracking', 'In-line quality checks', 'Pre-shipment inspection', 'Defect documentation', 'Approval for shipment'],
    titleId: 'hiw-step5-title',
    descId: 'hiw-step5-desc',
    imgId: 'hiw-step5-img-y6z7a8',
  },
  {
    step: '06',
    title: 'Shipping & Delivery',
    desc: 'After quality approval, we coordinate the entire shipping process — booking freight, preparing export documents, supervising container loading, and tracking delivery to your destination.',
    details: ['Freight booking', 'Export documentation', 'Container loading supervision', 'Shipment tracking', 'Delivery confirmation'],
    titleId: 'hiw-step6-title',
    descId: 'hiw-step6-desc',
    imgId: 'hiw-step6-img-b9c1d2',
  },
]

const HowItWorks = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">How It Works</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Our proven 6-step process takes you from initial inquiry to delivered goods — with full transparency at every stage.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {steps.map((step, idx) => (
              <div key={step.step} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="aspect-video rounded-xl overflow-hidden bg-neutral-100">
                    <img
                      data-strk-img-id={step.imgId}
                      data-strk-img={`[${step.descId}] [${step.titleId}]`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-lg font-bold text-primary">
                      {step.step}
                    </span>
                    <h2 id={step.titleId} className="text-2xl font-bold text-neutral-900">{step.title}</h2>
                  </div>
                  <p id={step.descId} className="text-neutral-600 leading-relaxed mb-5">{step.desc}</p>
                  <ul className="space-y-2">
                    {step.details.map((d) => (
                      <li key={d} className="flex items-center gap-2 text-sm text-neutral-700">
                        <ArrowRight className="w-3.5 h-3.5 text-secondary flex-shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">Start Your Sourcing Project</h2>
          <p className="text-neutral-600 mb-8 max-w-xl mx-auto">
            Submit your requirements today and receive supplier options within 5-7 business days.
          </p>
          <CTAButton />
        </div>
      </section>
    </div>
  )
}

export default HowItWorks
