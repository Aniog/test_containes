import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, Shield, ClipboardCheck, Truck, FileCheck, Package } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Submit Your Inquiry',
    description: 'Share your product requirements, target quantity, budget range, and quality expectations. The more details you provide, the better we can match you with the right suppliers.',
    details: [
      'Product specifications and requirements',
      'Target quantity and budget',
      'Quality standards and certifications needed',
      'Timeline for production and delivery',
    ],
  },
  {
    number: '02',
    icon: Shield,
    title: 'Supplier Matching & Verification',
    description: 'We search our network of 1,200+ verified factories and find 3-5 suppliers that match your criteria. We then conduct preliminary verification checks.',
    details: [
      'Match suppliers based on your requirements',
      'Verify business licenses and credentials',
      'Check production capacity and capabilities',
      'Review past performance and client feedback',
    ],
  },
  {
    number: '03',
    icon: ClipboardCheck,
    title: 'Factory Audit & Sample Approval',
    description: 'We arrange on-site factory visits and audits. You can request samples from shortlisted suppliers for quality evaluation.',
    details: [
      'On-site factory audit report',
      'Sample production and shipping',
      'Sample quality evaluation support',
      'Factory capability assessment',
    ],
  },
  {
    number: '04',
    icon: FileCheck,
    title: 'Contract & Production Start',
    description: 'Once you select a supplier, we help negotiate terms, review contracts, and ensure all details are agreed upon before production begins.',
    details: [
      'Contract review and negotiation support',
      'Payment terms clarification',
      'Production timeline confirmation',
      'Quality standards documentation',
    ],
  },
  {
    number: '05',
    icon: ClipboardCheck,
    title: 'Production Monitoring & QC',
    description: 'We monitor production progress and conduct inspections at key stages to ensure quality and timeline adherence.',
    details: [
      'Regular production progress updates',
      'Pre-production inspection',
      'During-production inspection',
      'Pre-shipment inspection with detailed report',
    ],
  },
  {
    number: '06',
    icon: Truck,
    title: 'Shipping & Delivery',
    description: 'We coordinate the entire shipping process, from factory pickup to delivery at your warehouse, handling all logistics and customs documentation.',
    details: [
      'Freight forwarding arrangement',
      'Customs clearance documentation',
      'Cargo tracking and updates',
      'Final delivery coordination',
    ],
  },
];

export default function HowItWorks() {
  return (
    <div>
      {/* Header */}
      <section className="bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900">How Our Sourcing Process Works</h1>
            <p className="mt-4 text-lg text-slate-600">
              A simple, transparent 6-step process designed to minimize risk and ensure successful sourcing from China.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {steps.map((step, idx) => (
              <div key={step.number} className={`grid lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-5xl font-bold text-blue-100">{step.number}</span>
                    <div className="h-12 w-12 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                      <step.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">{step.title}</h2>
                  <p className="text-lg text-slate-600 mb-6">{step.description}</p>
                  <ul className="space-y-3">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3">
                        <span className="text-green-500 mt-1">✓</span>
                        <span className="text-slate-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <Card className="border-slate-200">
                    <CardContent className="p-0">
                      <div className="aspect-video bg-slate-100 rounded-lg flex items-center justify-center">
                        <step.icon className="h-16 w-16 text-slate-300" />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Typical Timeline</h2>
            <p className="mt-4 text-lg text-slate-600">
              Here's how long each phase typically takes. Timelines may vary based on product complexity.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { phase: 'Phase 1', title: 'Sourcing & Verification', duration: '1-2 weeks', description: 'Supplier search, verification, and sample approval.' },
              { phase: 'Phase 2', title: 'Production & QC', duration: '2-6 weeks', description: 'Production monitoring and quality inspections.' },
              { phase: 'Phase 3', title: 'Shipping & Delivery', duration: '1-4 weeks', description: 'Logistics coordination and final delivery.' },
            ].map((item) => (
              <Card key={item.phase} className="border-slate-200 text-center">
                <CardHeader>
                  <div className="text-sm font-medium text-blue-600 mb-2">{item.phase}</div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <div className="text-2xl font-bold text-slate-900">{item.duration}</div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Sourcing Project?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Get in touch and we'll walk you through the process.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
              Start Your Inquiry
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
