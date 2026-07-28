import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Search, Handshake, ClipboardCheck, Ship, ArrowRight, FileText, MessageSquare, Package } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: FileText,
    title: 'Submit Your Requirements',
    description: 'Start by filling out our inquiry form with details about your product, target price, quality expectations, and timeline. The more information you provide, the more accurate our sourcing plan will be.',
    details: [
      'Tell us about your product and specifications',
      'Share your target budget and MOQ preferences',
      'Indicate your timeline and delivery requirements',
      'Submit any relevant drawings, samples, or references',
    ],
    imgId: 'process-step1-3a2b1c',
    imgQuery: '[process-step1-title] [process-heading]',
  },
  {
    number: '02',
    icon: Search,
    title: 'Supplier Research & Matching',
    description: 'We conduct thorough research to identify qualified suppliers that match your requirements. Our team evaluates multiple candidates before presenting you with the best options.',
    details: [
      'Market research across our supplier database and networks',
      'Initial screening of suppliers based on your criteria',
      'Verification of business licenses and certifications',
      'Presentation of shortlisted suppliers with detailed profiles',
    ],
    imgId: 'process-step2-4b3c2d',
    imgQuery: '[process-step2-title] [process-heading]',
  },
  {
    number: '03',
    icon: Handshake,
    title: 'Supplier Evaluation & Selection',
    description: 'We visit shortlisted factories in person to assess their capabilities, quality systems, and reliability. You receive unbiased reports to make an informed decision.',
    details: [
      'In-person factory visits and capability assessments',
      'Quality management system evaluation',
      'Sample requests and quality review',
      'Price negotiation and terms finalization',
    ],
    imgId: 'process-step3-5c4d3e',
    imgQuery: '[process-step3-title] [process-heading]',
  },
  {
    number: '04',
    icon: ClipboardCheck,
    title: 'Quality Control & Production',
    description: 'Once production begins, our QC team monitors quality at every stage. We conduct inspections to ensure products meet your specifications before shipment.',
    details: [
      'Pre-production inspection of raw materials',
      'During-production quality checks',
      'Final pre-shipment inspection (AQL sampling)',
      'Regular progress reports with photos',
    ],
    imgId: 'process-step4-6d5e4f',
    imgQuery: '[process-step4-title] [process-heading]',
  },
  {
    number: '05',
    icon: Package,
    title: 'Sample Approval & Production',
    description: 'We manage the sample process from request to approval. Once samples are approved, we coordinate with the factory to begin mass production.',
    details: [
      'Sample request and follow-up with suppliers',
      'Review of samples against your specifications',
      'Feedback coordination and revision management',
      'Production sign-off and timeline confirmation',
    ],
    imgId: 'process-step5-7e6f5a',
    imgQuery: '[process-step5-title] [process-heading]',
  },
  {
    number: '06',
    icon: Ship,
    title: 'Shipping & Delivery',
    description: 'We coordinate the entire logistics process to get your goods from the factory to your destination safely and on time.',
    details: [
      'Freight arrangement (sea, air, or express)',
      'Export documentation and customs clearance',
      'Cargo tracking and real-time updates',
      'Door-to-door delivery coordination',
    ],
    imgId: 'process-step6-8f7a6b',
    imgQuery: '[process-step6-title] [process-heading]',
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
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20 md:py-28">
        <div className="section-container text-center">
          <h1 id="process-heading" className="text-4xl md:text-5xl font-bold mb-6">How It Works</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            A transparent, step-by-step process designed to make sourcing from China simple, 
            safe, and efficient for international buyers.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="section-padding">
        <div className="section-container max-w-4xl mx-auto space-y-16">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1 order-2 md:order-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-5xl font-bold text-primary/10">{step.number}</span>
                    <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <h2 id={`process-step${index + 1}-title`} className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h2>
                  <p className="text-gray-600 mb-4 leading-relaxed">{step.description}</p>
                  <ul className="space-y-2">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 w-full order-1 md:order-2">
                  <div className="bg-gray-100 rounded-2xl aspect-[4/3] overflow-hidden">
                    <img
                      data-strk-img-id={step.imgId}
                      data-strk-img={step.imgQuery}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                      alt={step.title}
                      className="w-full h-full object-cover"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-white">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Your Sourcing Journey</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
            Ready to source products from China with confidence? Get in touch for a free consultation.
          </p>
          <Link to="/contact" className="btn-secondary text-lg px-8 py-3.5 inline-flex items-center gap-2">
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}