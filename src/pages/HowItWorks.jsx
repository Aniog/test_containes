import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, FileCheck, Building, FlaskConical, ClipboardCheck, Ship, MessageSquare } from 'lucide-react';

const phases = [
  {
    icon: Search,
    phase: 'Phase 1',
    title: 'Discovery & Requirements',
    duration: '1-2 weeks',
    steps: [
      'Initial consultation to understand your product, quality standards, target price, and timeline',
      'We provide a detailed project proposal with scope, timeline, and fee structure',
      'You share product specifications, drawings, samples, or reference products',
    ],
  },
  {
    icon: FileCheck,
    phase: 'Phase 2',
    title: 'Supplier Research & Shortlisting',
    duration: '1-3 weeks',
    steps: [
      'We research suppliers from our database, trade platforms, and industry contacts',
      'Cross-reference supplier credentials, export history, and client references',
      'Present you with a shortlist of 3-5 qualified suppliers with detailed profiles',
    ],
  },
  {
    icon: Building,
    phase: 'Phase 3',
    title: 'Factory Audit & Verification',
    duration: '1-2 weeks',
    steps: [
      'Our team visits shortlisted factories for on-site audits',
      'Verify business licenses, production capacity, certifications, and quality systems',
      'Provide audit reports with photos, findings, and recommendations',
    ],
  },
  {
    icon: FlaskConical,
    phase: 'Phase 4',
    title: 'Sample Development & Approval',
    duration: '2-4 weeks',
    steps: [
      'Coordinate sample requests with selected suppliers',
      'Track sample production and review samples upon receipt',
      'Facilitate sample approval and collect feedback for adjustments',
    ],
  },
  {
    icon: ClipboardCheck,
    phase: 'Phase 5',
    title: 'Order & Production Management',
    duration: '4-12 weeks',
    steps: [
      'Assist with contract review and order placement',
      'Conduct raw material inspection at factory',
      'Provide weekly production updates with photos and progress reports',
      'Perform in-process quality checks during manufacturing',
    ],
  },
  {
    icon: Ship,
    phase: 'Phase 6',
    title: 'Quality Inspection & Shipping',
    duration: '2-4 weeks',
    steps: [
      'Pre-shipment inspection before container loading',
      'Container loading supervision',
      'Coordinate shipping booking and documentation',
      'Track shipment and provide updates until delivery',
    ],
  },
];

const highlights = [
  { label: 'Average Time from Brief to First PO', value: '6-8 weeks' },
  { label: 'Client Satisfaction Rate', value: '97%' },
  { label: 'Countries We Ship To', value: '40+' },
  { label: 'Supplier Retention Rate', value: '85%' },
];

export default function HowItWorks() {
  return (
    <div>
      {/* Header */}
      <section className="bg-primary py-16 md:py-20">
        <div className="container-custom">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">How It Works</h1>
          <p className="text-lg text-white/80 max-w-2xl">
            A structured, transparent process designed to take you from product requirements to
            delivered goods with minimal risk and maximum efficiency.
          </p>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="space-y-16">
            {phases.map((phase, idx) => (
              <div key={phase.title} className="relative">
                {idx < phases.length - 1 && (
                  <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-border hidden md:block" />
                )}
                <div className="grid md:grid-cols-5 gap-8">
                  <div className="md:col-span-1">
                    <div className="flex md:flex-col items-start md:items-center gap-4 md:gap-3">
                      <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
                        <phase.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-accent uppercase tracking-wider">{phase.phase}</span>
                        <h3 className="font-bold text-primary mt-1">{phase.title}</h3>
                        <span className="text-xs text-muted">{phase.duration}</span>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-4 bg-surface rounded-xl border border-border p-6 md:p-8">
                    <ul className="space-y-3">
                      {phase.steps.map((step) => (
                        <li key={step} className="flex items-start gap-3 text-secondary text-sm">
                          <ArrowRight className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                          {step}
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

      {/* Highlights */}
      <section className="py-16 bg-surface">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {highlights.map((h) => (
              <div key={h.label} className="text-center">
                <div className="text-xl md:text-2xl font-bold text-primary mb-1">{h.value}</div>
                <div className="text-sm text-secondary">{h.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Start Your Sourcing Project</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Ready to get started? Submit your product requirements and we will provide a
            free sourcing assessment within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-accent text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
          >
            Submit Your Requirements <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}