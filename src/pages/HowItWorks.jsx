import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, ClipboardList, Search, Factory, FlaskConical, BarChart3, Truck, Target } from 'lucide-react'
import Button from '@/components/ui/Button'
import { cn } from '@/lib/utils'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const phases = [
  {
    phase: 'Phase 1',
    title: 'Discovery & Planning',
    icon: ClipboardList,
    steps: [
      { title: 'Initial Consultation', desc: 'We discuss your product requirements, target markets, quality standards, budget, and timeline.' },
      { title: 'Requirement Analysis', desc: 'Our team analyzes your specifications and creates a detailed sourcing plan.' },
      { title: 'Market Research', desc: 'We research the Chinese manufacturing landscape relevant to your product category.' },
    ],
    duration: '1-2 weeks',
    imgId: 'howitworks-discovery-1a2b3c',
  },
  {
    phase: 'Phase 2',
    title: 'Supplier Identification',
    icon: Search,
    steps: [
      { title: 'Database Search', desc: 'We search our verified supplier database and industry networks for matching manufacturers.' },
      { title: 'Initial Screening', desc: 'Suppliers are pre-screened based on capacity, certifications, export experience, and client feedback.' },
      { title: 'Shortlist Presentation', desc: 'You receive a curated shortlist of 3-5 qualified suppliers with profiles and recommendations.' },
    ],
    duration: '1-2 weeks',
    imgId: 'howitworks-supplier-2b3c4d',
  },
  {
    phase: 'Phase 3',
    title: 'Verification & Audits',
    icon: Factory,
    steps: [
      { title: 'Document Verification', desc: 'We verify business licenses, certifications, export records, and legal compliance.' },
      { title: 'On-Site Factory Audit', desc: 'Our auditors visit the factory to assess production capacity, QC systems, and working conditions.' },
      { title: 'Audit Report', desc: 'You receive a comprehensive audit report with photos, ratings, and risk assessment.' },
    ],
    duration: '2-3 weeks',
    imgId: 'howitworks-verification-3c4d5e',
  },
  {
    phase: 'Phase 4',
    title: 'Sampling & Negotiation',
    icon: FlaskConical,
    steps: [
      { title: 'Sample Request', desc: 'We coordinate sample production and shipping from shortlisted suppliers.' },
      { title: 'Sample Evaluation', desc: 'Your team evaluates samples against specifications. We facilitate any revisions needed.' },
      { title: 'Price & Terms Negotiation', desc: 'We negotiate pricing, payment terms, lead times, and contract terms on your behalf.' },
    ],
    duration: '2-4 weeks',
    imgId: 'howitworks-sampling-4d5e6f',
  },
  {
    phase: 'Phase 5',
    title: 'Production & QC',
    icon: BarChart3,
    steps: [
      { title: 'Production Kickoff', desc: 'We confirm order details with the factory and establish QC checkpoints and schedules.' },
      { title: 'In-Process Inspection', desc: 'Our inspectors visit during production to check quality against approved samples.' },
      { title: 'Progress Reporting', desc: 'You receive weekly updates with photos, production metrics, and milestone tracking.' },
    ],
    duration: '4-12 weeks',
    imgId: 'howitworks-production-5e6f7a',
  },
  {
    phase: 'Phase 6',
    title: 'Shipping & Delivery',
    icon: Truck,
    steps: [
      { title: 'Final Inspection', desc: 'Pre-shipment inspection ensures product quality and quantity match your order.' },
      { title: 'Logistics Coordination', desc: 'We arrange freight booking, cargo consolidation, and export documentation.' },
      { title: 'Delivery & Support', desc: 'Your cargo is delivered to the destination. We remain available for any post-delivery support.' },
    ],
    duration: '2-4 weeks',
    imgId: 'howitworks-shipping-6f7a8b',
  },
]

export default function HowItWorks() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-neutral-900 py-16 md:py-24">
        <div className="container-page text-center">
          <span className="text-brand-300 text-sm font-medium tracking-wider uppercase">Our Process</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">How It Works</h1>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            A structured, transparent sourcing process from initial consultation to final delivery
          </p>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-page">
          <div className="space-y-16">
            {phases.map((phase, index) => {
              const Icon = phase.icon
              return (
                <div key={phase.phase} className="flex flex-col lg:flex-row gap-8 items-start">
                  <div className="flex-1 order-2 lg:order-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-brand-500" />
                      </div>
                      <div>
                        <span className="text-sm font-medium text-brand-500">{phase.phase}</span>
                        <h2 className="text-xl font-bold text-neutral-900">{phase.title}</h2>
                      </div>
                    </div>
                    <div className="space-y-4 ml-2">
                      {phase.steps.map((step, i) => (
                        <div key={step.title} className="flex gap-3">
                          <div className="flex flex-col items-center">
                            <div className="w-2.5 h-2.5 rounded-full bg-brand-500 mt-1.5" />
                            {i < phase.steps.length - 1 && <div className="w-px flex-1 bg-neutral-200 mt-1" />}
                          </div>
                          <div className="pb-4">
                            <h3 className="font-semibold text-neutral-900 text-sm">{step.title}</h3>
                            <p className="text-sm text-neutral-500 mt-0.5">{step.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 mt-4 text-sm text-neutral-400 ml-5">
                      <Target className="h-4 w-4" />
                      <span>Typical duration: {phase.duration}</span>
                    </div>
                  </div>
                  <div className="flex-1 w-full lg:w-auto order-1 lg:order-2">
                    <div className="rounded-xl overflow-hidden bg-neutral-100">
                      <div
                        className="h-64 md:h-72 w-full"
                        data-strk-bg-id={phase.imgId}
                        data-strk-bg={`[${phase.imgId}-title]`}
                        data-strk-bg-ratio="4x3"
                        data-strk-bg-width="800"
                      />
                      <div className="sr-only">
                        <h3 id={`${phase.imgId}-title`}>{phase.title}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-neutral-900 text-center">
        <div className="container-page">
          <h2 className="text-3xl font-bold text-white mb-4">Start Your Sourcing Journey</h2>
          <p className="text-neutral-300 max-w-xl mx-auto mb-8">
            Get in touch and we'll guide you through every step of the process.
          </p>
          <Link to="/contact">
            <Button size="xl" variant="accent">
              Get Started
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}