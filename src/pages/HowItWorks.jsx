import { Link } from 'react-router-dom'
import { Search, FileCheck, ClipboardCheck, Package, Ship, Handshake, ArrowRight, Clock, Shield, MessageCircle } from 'lucide-react'
import SectionTitle from '../components/shared/SectionTitle'

const steps = [
  {
    step: '01',
    icon: Search,
    title: 'Submit Your Requirements',
    description: 'Fill out our inquiry form or schedule a call. Tell us about your product, quantity, target price, quality standards, and timeline. The more detail you provide, the better we can match you with the right suppliers.',
    timeline: 'Day 1',
    details: [
      'Product specifications and drawings',
      'Target price range and MOQ',
      'Required certifications (CE, FDA, etc.)',
      'Desired delivery timeline',
    ],
  },
  {
    step: '02',
    icon: FileCheck,
    title: 'Supplier Research & Shortlist',
    description: 'Our sourcing team conducts comprehensive market research, reaching out to manufacturers through our network, trade databases, and direct factory contacts. We evaluate each candidate against your criteria.',
    timeline: 'Days 2-5',
    details: [
      'Database research across 15+ platforms',
      'Initial supplier screening and contact',
      'Capability and capacity assessment',
      'Shortlist of 3-5 best-matched suppliers',
    ],
  },
  {
    step: '03',
    icon: ClipboardCheck,
    title: 'Factory Verification',
    description: 'We visit or conduct video audits of shortlisted factories. Our verification process checks business licenses, production lines, quality control systems, and export experience. You receive a detailed audit report.',
    timeline: 'Days 6-10',
    details: [
      'On-site or video factory audit',
      'License and certificate verification',
      'Production line and equipment review',
      'Detailed audit report with photos',
    ],
  },
  {
    step: '04',
    icon: Package,
    title: 'Sample Evaluation & Negotiation',
    description: 'We collect samples from verified suppliers, coordinate any necessary modifications, and negotiate pricing, MOQ, payment terms, and delivery schedules on your behalf.',
    timeline: 'Days 11-20',
    details: [
      'Sample collection and shipping to you',
      'Price and term negotiation',
      'Contract and payment term review',
      'Final supplier selection support',
    ],
  },
  {
    step: '05',
    icon: ClipboardCheck,
    title: 'Production Monitoring & QC',
    description: 'Once production begins, we monitor progress with regular updates. Our inspectors perform quality checks at key milestones to ensure your standards are met before goods are packed.',
    timeline: 'During Production',
    details: [
      'Weekly production status reports',
      'In-process quality inspections',
      'Pre-shipment inspection (AQL 2.5)',
      'Photo and video documentation',
    ],
  },
  {
    step: '06',
    icon: Ship,
    title: 'Shipping & Delivery',
    description: 'We coordinate freight booking, supervise container loading, prepare all export documents, and track your shipment until it arrives at your destination.',
    timeline: 'Final Stage',
    details: [
      'Freight forwarding coordination',
      'Container loading supervision',
      'Export documentation preparation',
      'Delivery tracking and handover',
    ],
  },
]

export default function HowItWorks() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-surface py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary mb-4">
            How SSourcing China Works
          </h1>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            A transparent, step-by-step process designed to minimize risk and maximize efficiency for your China sourcing operations.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 md:space-y-16">
            {steps.map((item, index) => (
              <div key={item.step} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-full bg-border hidden md:block" />
                )}
                <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                  {/* Step number & icon */}
                  <div className="shrink-0 flex md:flex-col items-center md:items-center gap-4 md:gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white shadow-lg">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-text-muted uppercase tracking-wider">Step {item.step}</span>
                  </div>
                  {/* Content */}
                  <div className="flex-1 bg-surface rounded-xl p-6 md:p-8 border border-border">
                    <div className="flex items-center gap-2 mb-3">
                      <Clock className="w-4 h-4 text-accent" />
                      <span className="text-xs font-semibold text-accent">{item.timeline}</span>
                    </div>
                    <h3 className="text-xl font-bold text-text-primary mb-3">{item.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed mb-5">{item.description}</p>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {item.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-2 text-sm text-text-secondary">
                          <Shield className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                          <span>{detail}</span>
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

      {/* Communication Promise */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MessageCircle className="w-12 h-12 text-white/80 mx-auto mb-6" />
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Clear Communication at Every Step
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            You'll never be left wondering what's happening with your order. We provide regular updates in English, with photos, reports, and direct access to your dedicated sourcing manager.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 text-left">
            <div className="bg-white/10 rounded-xl p-6 border border-white/10">
              <div className="text-3xl font-extrabold text-white mb-1">24h</div>
              <div className="text-sm text-white/70">Average response time to client inquiries</div>
            </div>
            <div className="bg-white/10 rounded-xl p-6 border border-white/10">
              <div className="text-3xl font-extrabold text-white mb-1">Weekly</div>
              <div className="text-sm text-white/70">Production status reports during manufacturing</div>
            </div>
            <div className="bg-white/10 rounded-xl p-6 border border-white/10">
              <div className="text-3xl font-extrabold text-white mb-1">100%</div>
              <div className="text-sm text-white/70">Inspection reports include photos and video</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
            Start Your Sourcing Journey Today
          </h2>
          <p className="text-text-secondary mb-8">
            The first step is free. Share your requirements and we'll get back to you with a tailored sourcing plan.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-accent-hover transition-colors shadow-lg"
          >
            Get Your Free Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
