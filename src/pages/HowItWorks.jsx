import React from 'react';
import { Link } from 'react-router-dom';
import { ClipboardCheck, Search, ShieldCheck, Ship, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const steps = [
  {
    title: 'Share Requirements',
    description: 'Tell us your product specs, target price range, quantity, and timeline. The more detail you provide, the faster we can match the right suppliers.',
    timeline: 'Day 1',
    deliverables: ['Requirement checklist', 'Initial market overview', 'Next-step plan'],
  },
  {
    title: 'Supplier Matching',
    description: 'We search our network and the market to identify qualified factories. We shortlist options and share profiles for your review.',
    timeline: '3-7 business days',
    deliverables: ['Supplier shortlist', 'Factory profiles', 'Initial pricing range'],
  },
  {
    title: 'Verification & Inspection',
    description: 'We verify supplier credentials and inspect samples or production readiness. You get a clear report before placing a larger order.',
    timeline: '1-2 weeks',
    deliverables: ['Factory audit report', 'Sample evaluation', 'Risk assessment'],
  },
  {
    title: 'Order Management',
    description: 'We monitor production, manage quality checks, and keep the supplier aligned with your requirements and schedule.',
    timeline: 'Production cycle',
    deliverables: ['Production updates', 'Inspection reports', 'Issue resolution'],
  },
  {
    title: 'Delivery & Support',
    description: 'We coordinate shipping, prepare documentation, and support customs clearance. You receive the goods with full traceability.',
    timeline: 'Shipping cycle',
    deliverables: ['Shipping documents', 'Customs support', 'After-sales assistance'],
  },
];

const faqs = [
  {
    question: 'How much does the sourcing service cost?',
    answer: 'Costs depend on the scope of work. We typically charge a service fee for supplier search, verification, and inspection, plus shipping coordination. We provide a clear quote before starting.',
  },
  {
    question: 'Can you work with my existing suppliers?',
    answer: 'Yes. We can verify and inspect your current suppliers, manage quality control, and coordinate shipping without changing your supplier relationships.',
  },
  {
    question: 'What if a supplier fails inspection?',
    answer: 'We report the findings clearly and help you decide whether to request corrections, re-inspect, or switch suppliers. Our goal is to prevent bad shipments, not just detect them.',
  },
  {
    question: 'Do you handle small orders?',
    answer: 'We support both small and large orders. For very small quantities, we may recommend consolidated shipping or alternative suppliers to keep costs reasonable.',
  },
];

const HowItWorks = () => {
  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">How It Works</h1>
          <p className="mt-4 text-slate-600">A structured process designed to reduce risk, improve transparency, and keep your sourcing project on track.</p>
        </div>

        <div className="mt-12 space-y-8">
          {steps.map((step, index) => (
            <div key={step.title} className="grid gap-6 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">{index + 1}</span>
                  <div>
                    <h2 className="text-lg font-semibold text-slate-900">{step.title}</h2>
                    <p className="text-xs text-slate-500">{step.timeline}</p>
                  </div>
                </div>
                <p className="mt-3 text-sm text-slate-600">{step.description}</p>
              </div>
              <div className="lg:col-span-8">
                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-sm font-semibold text-slate-900">Key deliverables</h3>
                  <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                    {step.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-900" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-xl border border-slate-200 bg-slate-50 p-8">
          <h3 className="text-xl font-semibold text-slate-900">Process FAQs</h3>
          <div className="mt-6 space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="group rounded-lg border border-slate-200 bg-white p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between text-left text-base font-semibold text-slate-900">
                  {faq.question}
                  <ArrowRight className="h-4 w-4 text-slate-500 transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-3 text-sm text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <Button asChild>
            <Link to="/contact">Start Your Sourcing Project</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
