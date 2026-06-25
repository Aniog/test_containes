import React from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, CheckCircle, MessageCircle, Search, FileCheck, Package, Truck,
  Shield, Eye, Clock, Globe, Users, Award, Phone
} from 'lucide-react'
import SectionHeader from '@/components/SectionHeader'

const steps = [
  {
    num: '01',
    icon: MessageCircle,
    title: 'Share Your Requirements',
    desc: 'Send us your product specifications, target price, quantity, and timeline. The more detail you provide, the better we can match you with the right suppliers.',
    details: [
      'Product specifications, drawings, or reference samples',
      'Target unit price and total budget',
      'Order quantity (initial and recurring)',
      'Target delivery date and shipping destination',
      'Quality requirements and certifications needed',
    ],
    timeline: 'Day 1',
  },
  {
    num: '02',
    icon: Search,
    title: 'Supplier Research & Shortlisting',
    desc: 'We search our verified factory network and broader market to find 3-5 qualified suppliers that match your requirements.',
    details: [
      'Search across our database of 1,200+ verified factories',
      'Evaluate suppliers on price, quality, capacity, and reliability',
      'Request initial quotations and production timelines',
      'Verify business licenses and export credentials',
      'Present a detailed comparison report with our recommendation',
    ],
    timeline: 'Days 2-5',
  },
  {
    num: '03',
    icon: Shield,
    title: 'Factory Verification & Sampling',
    desc: 'We verify your chosen supplier with an on-site visit and coordinate sample production for your review.',
    details: [
      'On-site factory audit and capability assessment',
      'Sample production coordination and quality review',
      'Sample shipping to your location for approval',
      'Specification adjustments based on your feedback',
      'Pricing and terms negotiation on your behalf',
    ],
    timeline: 'Days 5-15',
  },
  {
    num: '04',
    icon: Eye,
    title: 'Production & Quality Control',
    desc: 'Once you approve the sample and terms, we oversee the entire production process with regular inspections.',
    details: [
      'Production schedule creation and agreement',
      'Pre-production material and component inspection',
      'Weekly progress reports with photos and updates',
      'In-process quality inspections at key milestones',
      'Issue identification and immediate resolution',
    ],
    timeline: 'Days 15-45',
  },
  {
    num: '05',
    icon: CheckCircle,
    title: 'Pre-Shipment Inspection',
    desc: 'Before goods leave the factory, we conduct a thorough final inspection using international AQL standards.',
    details: [
      'AQL-based random sampling inspection',
      'Visual appearance and workmanship check',
      'Function and performance testing',
      'Measurement and specification verification',
      'Packaging, labeling, and documentation check',
      'Detailed inspection report with photos',
    ],
    timeline: 'Day 45-50',
  },
  {
    num: '06',
    icon: Truck,
    title: 'Shipping & Delivery',
    desc: 'We coordinate all logistics, customs documentation, and transportation to get your goods delivered safely.',
    details: [
      'Freight rate comparison and booking',
      'Export customs documentation preparation',
      'Container loading supervision',
      'Real-time shipment tracking',
      'Import customs clearance coordination',
      'Final delivery to your specified destination',
    ],
    timeline: 'Days 50-80',
  },
]

const guarantees = [
  { icon: Shield, title: 'Verified Suppliers Only', desc: 'Every factory in our network has been personally visited and audited by our team.' },
  { icon: Eye, title: 'Transparent Reporting', desc: 'Regular photo and video updates at every stage. You always know the status of your order.' },
  { icon: Clock, title: 'On-Time Commitment', desc: 'We set realistic timelines and actively manage production schedules to meet deadlines.' },
  { icon: Globe, title: 'No Hidden Costs', desc: 'Complete cost breakdowns provided upfront. We negotiate on your behalf to get the best price.' },
]

const HowItWorks = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-900 to-navy-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-3 py-1 bg-white/10 text-white text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
            Our Process
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            How It Works
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A clear, six-step process that takes you from initial inquiry to delivered goods. Full transparency at every stage.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Vertical connector */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-navy-100 hidden md:block" />

            <div className="space-y-16">
              {steps.map((step, idx) => (
                <div key={step.num} className="relative flex gap-8">
                  {/* Step number */}
                  <div className="hidden md:flex flex-col items-center">
                    <div className="w-16 h-16 bg-navy-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl z-10 shadow-lg">
                      {step.num}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-gray-50 rounded-2xl p-8 border border-gray-100">
                    <div className="flex items-start justify-between gap-4 mb-4 flex-wrap">
                      <div className="flex items-center gap-3">
                        <div className="md:hidden w-10 h-10 bg-navy-600 rounded-xl flex items-center justify-center text-white font-bold text-sm">
                          {step.num}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-navy-900">{step.title}</h3>
                          <span className="text-xs text-accent-500 font-semibold">{step.timeline}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-4">{step.desc}</p>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {step.details.map((d, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                          <span className="text-gray-600">{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-20 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Our Guarantee"
            title="What You Can Expect"
            subtitle="Our commitments to every client, regardless of project size."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {guarantees.map((g) => (
              <div key={g.title} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
                <div className="w-12 h-12 mx-auto bg-navy-100 rounded-xl flex items-center justify-center mb-4">
                  <g.icon className="w-6 h-6 text-navy-600" />
                </div>
                <h3 className="text-base font-bold text-navy-900 mb-2">{g.title}</h3>
                <p className="text-sm text-gray-500">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-gray-400 mb-8">Share your requirements and receive a detailed sourcing proposal within 48 hours.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-lg transition-colors"
          >
            Start Your Sourcing Project <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default HowItWorks
