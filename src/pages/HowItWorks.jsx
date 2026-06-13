import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Send, Search, FileCheck, ClipboardList, Ship,
  ArrowRight, MessageSquare, DollarSign, Clock, Shield
} from 'lucide-react'

const steps = [
  {
    step: 1,
    icon: Send,
    title: 'Submit Your Sourcing Request',
    description: 'Tell us what you need. Provide product details, specifications, target quantities, quality requirements, and your desired timeline. The more information you share, the more accurate our sourcing will be.',
    details: [
      'Product specifications and technical requirements',
      'Target order quantity and budget range',
      'Quality standards and certification needs',
      'Preferred timeline and delivery destination',
    ],
    tip: 'Include photos, drawings, or reference products if available.',
  },
  {
    step: 2,
    icon: Search,
    title: 'Supplier Identification & Matching',
    description: 'Our team searches our verified supplier network and conducts market research to find manufacturers that match your requirements. We evaluate each potential supplier against multiple criteria.',
    details: [
      'Search across our database of pre-vetted manufacturers',
      'Evaluate production capabilities and specializations',
      'Assess quality certifications and compliance records',
      'Request initial quotations from shortlisted suppliers',
    ],
    tip: 'We typically present 3-5 qualified options for your review.',
  },
  {
    step: 3,
    icon: FileCheck,
    title: 'Supplier Verification & Sampling',
    description: 'Before you commit, we verify the supplier through on-site audits and arrange product samples for your evaluation. This step ensures the supplier is legitimate and capable of meeting your standards.',
    details: [
      'On-site factory audit with detailed reporting',
      'Business license and certification verification',
      'Production capacity and quality system assessment',
      'Sample procurement and quality evaluation',
    ],
    tip: 'We recommend always ordering samples before placing bulk orders.',
  },
  {
    step: 4,
    icon: ClipboardList,
    title: 'Production & Quality Control',
    description: 'Once you approve the supplier and samples, production begins. We monitor progress through regular factory visits and conduct quality inspections at key milestones to ensure everything stays on track.',
    details: [
      'Production kickoff confirmation and schedule tracking',
      'Regular progress updates with photos and reports',
      'During-production quality inspections',
      'Pre-shipment final inspection and testing',
    ],
    tip: 'Early detection of issues saves time and money.',
  },
  {
    step: 5,
    icon: Ship,
    title: 'Shipping & Delivery',
    description: 'When production is complete and quality is confirmed, we coordinate the entire shipping process. From freight forwarding to customs documentation, we ensure your goods arrive safely and on time.',
    details: [
      'Freight option comparison and booking',
      'Export documentation and customs clearance',
      'Cargo insurance arrangement',
      'Real-time shipment tracking until delivery',
    ],
    tip: 'We can ship by sea, air, or express depending on your needs.',
  },
]

const benefits = [
  {
    icon: MessageSquare,
    title: 'Clear Communication',
    description: 'Our bilingual team ensures nothing gets lost in translation. You receive regular updates in your language.',
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    description: 'No hidden fees or surprise charges. We provide detailed cost breakdowns for every service.',
  },
  {
    icon: Clock,
    title: 'Time Savings',
    description: 'Focus on your business while we handle the complexities of sourcing from China.',
  },
  {
    icon: Shield,
    title: 'Risk Reduction',
    description: 'Multi-layer verification and inspection processes protect your investment at every stage.',
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
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">How Our Sourcing Process Works</h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            A transparent, five-step process that takes you from initial request to successful delivery.
          </p>
        </div>
      </section>

      {/* Steps */}
      {steps.map((step, index) => (
        <section
          key={step.step}
          className={`section-padding ${index % 2 === 0 ? 'bg-white' : 'bg-secondary/50'}`}
        >
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                <div className="lg:w-1/3">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">
                      {step.step}
                    </div>
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">{step.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
                <div className="lg:w-2/3">
                  <ul className="space-y-3 mb-6">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3">
                        <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/80">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-sm text-blue-800">
                      <strong>Tip:</strong> {step.tip}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Benefits */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Why Our Process Works</h2>
            <p className="section-subtitle">
              Our structured approach is designed to give you confidence at every stage.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="card text-center">
                <benefit.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary to-blue-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Submit your sourcing request today and receive a free consultation within 24 hours.
          </p>
          <Link to="/contact" className="btn-primary bg-white text-primary hover:bg-blue-50 text-lg px-8 py-4">
            Submit Your Sourcing Request
          </Link>
        </div>
      </section>
    </div>
  )
}
