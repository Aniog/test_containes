import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Search, ClipboardCheck, FileCheck2, Ship, MessageSquare, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Share Your Requirements',
    description: 'You tell us what you need: product specs, target price range, order volume, quality standards, and delivery timeline. The more detail you provide, the better we can match you with the right suppliers.',
    icon: MessageSquare,
    deliverables: ['Product specification sheet', 'Target price and volume', 'Quality and compliance requirements', 'Delivery timeline'],
  },
  {
    number: '02',
    title: 'Supplier Sourcing & Verification',
    description: 'We search our verified factory network and conduct new supplier research. We shortlist 3-5 matching manufacturers, then verify their credentials, capacity, and track record.',
    icon: Search,
    deliverables: ['Shortlist of verified suppliers', 'Factory audit reports', 'Capability assessment', 'Reference checks'],
  },
  {
    number: '03',
    title: 'Samples & Negotiation',
    description: 'We coordinate sample production and shipping to you. Once samples meet your approval, we negotiate commercial terms including price, payment terms, and delivery schedule.',
    icon: ClipboardCheck,
    deliverables: ['Sample coordination', 'Technical clarification', 'Commercial negotiation', 'Contract review support'],
  },
  {
    number: '04',
    title: 'Production & Quality Control',
    description: 'We monitor production progress and conduct inspections at key milestones: pre-production meeting, during-production check, and pre-shipment final inspection.',
    icon: FileCheck2,
    deliverables: ['Production schedule tracking', 'In-process inspections', 'Pre-shipment inspection report', 'Defect management'],
  },
  {
    number: '05',
    title: 'Shipping & Delivery',
    description: 'We coordinate logistics, prepare shipping documents, and manage freight forwarding. You receive regular tracking updates until your goods arrive at the destination.',
    icon: Ship,
    deliverables: ['Logistics coordination', 'Customs documentation', 'Freight tracking', 'Final delivery confirmation'],
  },
];

const HowItWorks = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">How It Works</h1>
            <p className="text-lg text-slate-300 mb-8">
              A transparent, step-by-step process designed to minimize risk and keep you in control. From your first inquiry to final delivery, we handle the ground work while you make the decisions.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Start Your Sourcing Project
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Process timeline */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={step.number} className="grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-1 flex lg:justify-center">
                  <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-lg font-bold flex-shrink-0">
                    {step.number}
                  </div>
                </div>
                <div className="lg:col-span-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                      <step.icon className="w-5 h-5" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">{step.title}</h2>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{step.description}</p>
                </div>
                <div className="lg:col-span-6">
                  <div className="bg-slate-50 rounded-xl border border-slate-200 p-6">
                    <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-4">Key Deliverables</h3>
                    <ul className="space-y-3">
                      {step.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                          <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          {item}
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

      {/* Timeline estimate */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-10">Typical Timeline</h2>
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
            <div className="grid grid-cols-2 md:grid-cols-5 divide-x divide-slate-200">
              {[
                { phase: 'Requirements', duration: '1-2 days' },
                { phase: 'Sourcing', duration: '3-5 days' },
                { phase: 'Samples', duration: '1-3 weeks' },
                { phase: 'Production', duration: '2-8 weeks' },
                { phase: 'Shipping', duration: '1-4 weeks' },
              ].map((item) => (
                <div key={item.phase} className="p-5 text-center">
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">{item.phase}</div>
                  <div className="text-sm font-semibold text-slate-900">{item.duration}</div>
                </div>
              ))}
            </div>
          </div>
          <p className="text-center text-sm text-slate-500 mt-4">
            Timelines vary by product complexity, order size, and shipping destination. We provide a detailed schedule during the initial consultation.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-slate-600 mb-8">
            Tell us about your product and requirements. We will outline a clear plan with timelines and next steps.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Get a Free Sourcing Quote
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
