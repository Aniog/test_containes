import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { CheckCircle, ArrowRight } from 'lucide-react'
import CTAButton from '../components/CTAButton.jsx'
import SectionHeader from '../components/SectionHeader.jsx'

const steps = [
  {
    num: '01',
    title: 'Submit Your Sourcing Inquiry',
    desc: 'Fill out our inquiry form with your product requirements: what you need, target quantity, budget, and timeline. The more detail you provide, the faster we can match you with the right suppliers.',
    details: [
      'Product name, specifications, and reference images',
      'Target quantity and MOQ requirements',
      'Target unit price or budget range',
      'Destination country and required certifications',
      'Preferred timeline for samples and first order',
    ],
    imgId: 'hiw-img-step1-a1b2c3',
    titleId: 'hiw-step1-title',
    descId: 'hiw-step1-desc',
  },
  {
    num: '02',
    title: 'Supplier Research & Shortlisting',
    desc: 'Our sourcing team researches suppliers from our verified network and targeted searches. We evaluate each candidate against your requirements and shortlist 3–5 qualified factories.',
    details: [
      'Search across verified supplier databases and trade shows',
      'Initial screening by product match, capacity, and certifications',
      'Supplier profile preparation with key details',
      'Price and MOQ comparison across shortlisted suppliers',
    ],
    imgId: 'hiw-img-step2-d4e5f6',
    titleId: 'hiw-step2-title',
    descId: 'hiw-step2-desc',
  },
  {
    num: '03',
    title: 'Factory Audit & Verification',
    desc: 'Before recommending a supplier, we conduct an on-site factory audit to verify their legitimacy, production capacity, and quality systems. You receive a full audit report.',
    details: [
      'Business license and registration check',
      'On-site visit to assess facilities and equipment',
      'Quality management system review',
      'Worker welfare and compliance assessment',
      'Detailed audit report with photos delivered within 3 business days',
    ],
    imgId: 'hiw-img-step3-g7h8i9',
    titleId: 'hiw-step3-title',
    descId: 'hiw-step3-desc',
  },
  {
    num: '04',
    title: 'Sample Procurement & Review',
    desc: 'We request samples from your chosen supplier, review them against your specifications, and ship them to you for final approval. We can also arrange multiple supplier samples for comparison.',
    details: [
      'Sample request and coordination with factory',
      'Sample review against your product brief',
      'Consolidated shipping to your address',
      'Sample comparison report if multiple suppliers',
    ],
    imgId: 'hiw-img-step4-j1k2l3',
    titleId: 'hiw-step4-title',
    descId: 'hiw-step4-desc',
  },
  {
    num: '05',
    title: 'Order Placement & Production Monitoring',
    desc: 'Once you approve the sample and confirm the order, we manage the production process. We track milestones, communicate with the factory, and flag any issues early.',
    details: [
      'Purchase order review and contract support',
      'Production schedule confirmation',
      'Weekly production status updates',
      'Material and component verification',
      'Issue escalation and resolution',
    ],
    imgId: 'hiw-img-step5-m4n5o6',
    titleId: 'hiw-step5-title',
    descId: 'hiw-step5-desc',
  },
  {
    num: '06',
    title: 'Quality Inspection',
    desc: 'Before goods are packed and shipped, our QC team conducts a pre-shipment inspection. We check quantity, quality, measurements, function, and packaging against your specifications.',
    details: [
      'AQL sampling and defect classification',
      'Measurement, function, and appearance checks',
      'Packaging and labeling verification',
      'Inspection report with photos within 24 hours',
      'Clear pass/fail result with recommended actions',
    ],
    imgId: 'hiw-img-step6-p7q8r9',
    titleId: 'hiw-step6-title',
    descId: 'hiw-step6-desc',
  },
  {
    num: '07',
    title: 'Shipping & Delivery',
    desc: 'We coordinate with freight forwarders to arrange the most suitable shipping method. We handle export documentation, customs clearance, and keep you updated until your goods arrive.',
    details: [
      'Freight forwarder coordination (FCL, LCL, air, express)',
      'Export documentation and customs declaration',
      'Cargo insurance arrangement',
      'Shipment tracking and status updates',
      'Delivery coordination at destination port or warehouse',
    ],
    imgId: 'hiw-img-step7-s1t2u3',
    titleId: 'hiw-step7-title',
    descId: 'hiw-step7-desc',
  },
]

export default function HowItWorksPage() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-brand-blue py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-brand-red text-white text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Our Process
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How We Source for You
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto mb-8">
            A transparent, step-by-step process designed to reduce risk and give you full visibility from inquiry to delivery.
          </p>
          <CTAButton to="/contact" variant="primary">Start Your Sourcing Project</CTAButton>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`grid lg:grid-cols-2 gap-12 items-center`}
            >
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="text-brand-red font-bold text-5xl mb-4 leading-none">{step.num}</div>
                <h2 id={step.titleId} className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">{step.title}</h2>
                <p id={step.descId} className="text-gray-500 leading-relaxed mb-6">{step.desc}</p>
                <ul className="space-y-2">
                  {step.details.map((d) => (
                    <li key={d} className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`rounded-2xl overflow-hidden shadow-lg aspect-[4/3] ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <img
                  data-strk-img-id={step.imgId}
                  data-strk-img={`[${step.descId}] [${step.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={step.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-red py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-red-100 text-lg mb-8">Submit your sourcing inquiry and we'll respond within 24 hours.</p>
          <CTAButton to="/contact" variant="white">Get a Free Sourcing Quote</CTAButton>
        </div>
      </section>
    </div>
  )
}
