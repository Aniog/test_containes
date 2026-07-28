import React from 'react';
import { Link } from 'react-router-dom';
import {
  FileText,
  Search,
  Users,
  FlaskConical,
  ClipboardCheck,
  Truck,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  MessageSquare,
} from 'lucide-react';

const steps = [
  {
    icon: FileText,
    step: '01',
    title: 'Submit Your Requirements',
    duration: 'Day 1',
    desc: 'You fill out a simple form or email us with your product specs, target price, order volume, and any supplier preferences. We acknowledge receipt within 4 hours.',
    bullets: [
      'Product name, category, and specifications',
      'Target price range and order volume',
      'Required certifications (CE, FCC, RoHS, etc.)',
      'Delivery timeline and destination',
    ],
  },
  {
    icon: Search,
    step: '02',
    title: 'We Source & Shortlist',
    duration: 'Days 2–5',
    desc: 'Our team searches our verified supplier network and industry databases to identify 3–5 manufacturers that match your requirements.',
    bullets: [
      'Database search across 500+ verified suppliers',
      'Preliminary price and MOQ inquiry',
      'Capability match check (equipment, capacity, certifications)',
      'Initial blacklist screening for known issues',
    ],
  },
  {
    icon: Users,
    step: '03',
    title: 'Factory Verification',
    duration: 'Days 6–10',
    desc: 'We visit or audit shortlisted factories on-site to confirm they are legitimate, capable, and financially stable.',
    bullets: [
      'On-site factory audit with photo/video evidence',
      'Business license and registration verification',
      'Production line and equipment inspection',
      'Social compliance and environmental checks (optional)',
    ],
  },
  {
    icon: FlaskConical,
    step: '04',
    title: 'Sample & Negotiation',
    duration: 'Days 11–20',
    desc: 'We coordinate sample production, negotiate pricing and terms, and present you with a clear comparison report.',
    bullets: [
      'Sample production coordination and tracking',
      'Price, MOQ, and payment term negotiation',
      'Contract term review (penalties, warranties, IP)',
      'Side-by-side supplier comparison report',
    ],
  },
  {
    icon: ClipboardCheck,
    step: '05',
    title: 'Order & Production Monitoring',
    duration: 'Weeks 3–8+',
    desc: 'After your purchase order, we manage the factory relationship with weekly updates and milestone inspections.',
    bullets: [
      'Weekly production status reports with photos',
      'Pre-production material inspection',
      'Inline inspections at 20%, 50%, 80% completion',
      'Packaging and labeling compliance verification',
    ],
  },
  {
    icon: Truck,
    step: '06',
    title: 'Inspection & Shipping',
    duration: 'Final Week',
    desc: 'We conduct pre-shipment inspection, supervise container loading, and coordinate freight to your destination.',
    bullets: [
      'Pre-shipment AQL inspection with full report',
      'Container loading supervision',
      'Export documentation and customs support',
      'Freight forwarding and delivery tracking',
    ],
  },
];

const tips = [
  {
    icon: AlertCircle,
    title: 'Be Specific With Specs',
    desc: 'The more detail you provide upfront — dimensions, materials, colors, packaging — the faster and more accurate our sourcing will be.',
  },
  {
    icon: MessageSquare,
    title: 'Communicate Your Priorities',
    desc: 'Tell us if price, quality, or speed matters most. We optimize our supplier selection and negotiation strategy accordingly.',
  },
  {
    icon: CheckCircle,
    title: 'Plan for Sample Lead Time',
    desc: 'Allow 2–3 weeks for sample production and shipping. Rushing this stage often leads to missed details and later problems.',
  },
];

export default function HowItWorks() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-primary-dark text-white py-16 md:py-24">
        <div className="container">
          <span className="text-primary-light text-xs font-semibold uppercase tracking-wider">Process</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
            How It Works
          </h1>
          <p className="text-white/80 max-w-2xl text-lg leading-relaxed">
            A clear, 6-step process designed to reduce risk, improve transparency, and give you confidence in every order from China.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="section-padding bg-white">
        <div className="container max-w-4xl">
          <div className="space-y-16">
            {steps.map((s, i) => (
              <div key={i} className="relative">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="absolute left-7 top-16 w-0.5 h-[calc(100%+2rem)] bg-primary-light hidden md:block" />
                )}

                <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                  <div className="flex md:flex-col items-center md:items-start gap-4 shrink-0">
                    <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center text-lg font-bold shrink-0">
                      {s.step}
                    </div>
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider bg-primary-light px-3 py-1 rounded-full">
                      {s.duration}
                    </span>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <s.icon className="w-6 h-6 text-primary" />
                      <h2 className="text-2xl font-bold text-neutral-nearblack">{s.title}</h2>
                    </div>
                    <p className="text-neutral-mediumgray mb-4 leading-relaxed">{s.desc}</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {s.bullets.map((b, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-neutral-darkgray">
                          <CheckCircle className="w-4 h-4 text-success shrink-0 mt-0.5" />
                          <span>{b}</span>
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

      {/* Tips */}
      <section className="section-padding bg-neutral-offwhite">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-primary text-xs font-semibold uppercase tracking-wider">Tips</span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-nearblack mt-2 mb-4">
              Get the Most Out of Our Service
            </h2>
            <p className="text-neutral-mediumgray">
              Small preparation steps on your side can significantly improve speed and outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tips.map((tip, i) => (
              <div key={i} className="bg-white rounded-lg p-8 shadow-sm">
                <tip.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-neutral-nearblack mb-2">{tip.title}</h3>
                <p className="text-sm text-neutral-mediumgray leading-relaxed">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-white">
        <div className="container text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Start Your First Sourcing Project
          </h2>
          <p className="text-white/80 mb-8">
            No commitment required. Send us your product requirements and we will reply with a free sourcing plan within 24 hours.
          </p>
          <Link
            to="/contact"
            className="bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-md text-base font-semibold transition-colors inline-flex items-center gap-2"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
