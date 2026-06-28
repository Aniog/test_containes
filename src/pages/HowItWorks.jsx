import { Link } from 'react-router-dom'
import { useRef, useEffect } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  MessageSquare, Search, ClipboardCheck, Package, Truck,
  CheckCircle, ArrowRight, Clock, Shield, Phone,
} from 'lucide-react'

const steps = [
  {
    num: '01',
    icon: MessageSquare,
    title: 'Initial Consultation',
    desc: 'Share your product requirements, target price, order quantity, and delivery timeline. You can send us sketches, photos, technical drawings, or physical samples. We will review everything and confirm we can assist.',
    details: [
      'Product specification review',
      'Feasibility assessment',
      'Budget and timeline discussion',
      'NDA execution if required',
    ],
    timeline: '1-2 business days',
    imgId: 'hiw-step1-a1b2c3',
    query: 'business consultation meeting discussion',
  },
  {
    num: '02',
    icon: Search,
    title: 'Supplier Sourcing & Verification',
    desc: 'Our team searches our database of 2,000+ verified suppliers to identify the best matches. We conduct or review factory audits for each shortlisted supplier, verifying their credentials, capabilities, and track record.',
    details: [
      'Supplier identification from our network',
      'On-site factory audit (if new supplier)',
      'Business license and certification review',
      'Production capacity verification',
      'Detailed supplier comparison report',
    ],
    timeline: '3-5 business days',
    imgId: 'hiw-step2-d4e5f6',
    query: 'supplier factory verification audit',
  },
  {
    num: '03',
    icon: ClipboardCheck,
    title: 'Quotation & Sample Approval',
    desc: 'We provide you with a detailed, itemized quotation from the selected supplier(s), including unit price, tooling costs, packaging, and estimated shipping. We then arrange product samples for your review and approval.',
    details: [
      'Itemized cost breakdown',
      'Multiple supplier quotes for comparison',
      'Sample production and shipping',
      'Specification comparison and revision',
      'Golden sample approval',
    ],
    timeline: '7-14 business days',
    imgId: 'hiw-step3-g7h8i9',
    query: 'product sample quotation approval',
  },
  {
    num: '04',
    icon: Package,
    title: 'Production & Quality Control',
    desc: 'Once you approve the sample and confirm the order, production begins. We monitor the entire process, conducting inspections at key stages and sending you regular progress reports with photos and updates.',
    details: [
      'Order confirmation and deposit processing',
      'Pre-production sample verification',
      'In-line quality inspection',
      'Weekly progress reports with photos',
      'Pre-shipment inspection (AQL standards)',
    ],
    timeline: 'Varies by product (typically 2-8 weeks)',
    imgId: 'hiw-step4-j1k2l3',
    query: 'production quality control factory manufacturing',
  },
  {
    num: '05',
    icon: Truck,
    title: 'Shipping & Delivery',
    desc: 'After final inspection and your approval, we coordinate the shipping process. This includes export documentation, customs clearance, freight booking, and door-to-door delivery tracking.',
    details: [
      'Final payment and balance settlement',
      'Export documentation preparation',
      'Freight forwarding (sea, air, or rail)',
      'Customs clearance assistance',
      'Door-to-door delivery with tracking',
    ],
    timeline: '1-6 weeks depending on shipping method',
    imgId: 'hiw-step5-m4n5o6',
    query: 'shipping logistics container freight delivery',
  },
]

const whySteps = [
  { icon: Clock, title: 'Transparent Timeline', desc: 'Clear milestones and expected delivery dates at every stage.' },
  { icon: Shield, title: 'Risk Mitigation', desc: 'Multi-stage inspections and verified suppliers minimize quality and delivery risks.' },
  { icon: Phone, title: 'Dedicated Support', desc: 'A single point of contact throughout the entire sourcing journey.' },
]

export default function HowItWorks() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              How It Works
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
              Our 5-Step Sourcing Process
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              From your first inquiry to final delivery, every step is designed to be transparent, efficient, and risk-free. Here is exactly how we work.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-16 md:space-y-20">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div key={step.num} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div className={i % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{step.num}</span>
                    </div>
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                    {step.title}
                  </h2>
                  <p className="text-text-secondary leading-relaxed mb-6">
                    {step.desc}
                  </p>
                  <ul className="space-y-2.5 mb-5">
                    {step.details.map((d) => (
                      <li key={d} className="flex items-start gap-2.5">
                        <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-text-primary text-sm">{d}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="inline-flex items-center gap-2 bg-bg-light rounded-full px-4 py-2 border border-border">
                    <Clock className="w-4 h-4 text-accent" />
                    <span className="text-sm font-medium text-text-primary">
                      Typical timeline: {step.timeline}
                    </span>
                  </div>
                </div>
                <div className={`rounded-lg overflow-hidden aspect-[4/3] bg-bg-card ${i % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <img
                    data-strk-img-id={step.imgId}
                    data-strk-img={`[hiw-${step.title.replace(/\s+/g, '-').toLowerCase()}] ${step.query}`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Why this process */}
      <section className="py-16 md:py-24 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Our Process Works
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              A structured approach that minimizes risk, controls costs, and ensures quality at every step.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whySteps.map((s) => {
              const Icon = s.icon
              return (
                <div key={s.title} className="bg-white rounded-lg border border-border p-6 text-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-primary mb-2">{s.title}</h3>
                  <p className="text-text-secondary text-sm">{s.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            The first step is simple. Tell us what you need and we will take it from there.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-md text-base font-semibold hover:bg-accent-hover transition-colors"
          >
            Start Your Sourcing Project
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
