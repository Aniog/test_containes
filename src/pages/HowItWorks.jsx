import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Search,
  ShieldCheck,
  ClipboardCheck,
  Ship,
  ArrowRight,
  CheckCircle2,
  Clock,
  FileText,
  MessageSquare,
} from 'lucide-react';

const steps = [
  {
    number: '1',
    title: 'Share your requirements',
    description:
      'Submit your product specs, target price range, quantity, and timeline. We also ask about quality expectations and destination market requirements.',
    icon: FileText,
    details: [
      'Product specifications and reference samples',
      'Target unit price and order volume',
      'Preferred shipping terms and destination',
      'Quality standards and certification needs',
    ],
  },
  {
    number: '2',
    title: 'Supplier shortlist & background checks',
    description:
      'We search our network and public sources to identify capable factories, then verify business registration, production capacity, and client references.',
    icon: Search,
    details: [
      'Factory location and registration check',
      'Product line and capacity assessment',
      'Client references and market experience',
      'Initial price and lead-time comparison',
    ],
  },
  {
    number: '3',
    title: 'Factory audit & sample review',
    description:
      'We visit shortlisted factories, inspect production lines, and coordinate sample production and evaluation on your behalf.',
    icon: ShieldCheck,
    details: [
      'On-site factory audit with photo report',
      'Sample production tracking',
      'Sample evaluation against your specs',
      'Negotiation support for pricing and terms',
    ],
  },
  {
    number: '4',
    title: 'Production follow-up & inspection',
    description:
      'During production, we monitor progress, conduct in-line inspections, and perform pre-shipment checks to reduce defects.',
    icon: ClipboardCheck,
    details: [
      'Weekly production updates',
      'In-line inspection at agreed milestones',
      'Pre-shipment random sampling',
      'Detailed inspection report with photos',
    ],
  },
  {
    number: '5',
    title: 'Logistics & delivery coordination',
    description:
      'We arrange consolidation, prepare shipping documents, and coordinate freight to your warehouse or distribution center.',
    icon: Ship,
    details: [
      'Consolidation from multiple suppliers if needed',
      'Packing and marking verification',
      'Customs documentation support',
      'Freight tracking until delivery',
    ],
  },
];

const timelines = [
  { label: 'Initial shortlist', duration: '3-5 business days' },
  { label: 'Factory audit', duration: '5-10 business days' },
  { label: 'Sample approval', duration: '2-4 weeks' },
  { label: 'Production run', duration: 'Varies by product' },
  { label: 'Shipping transit', duration: 'Varies by route' },
];

const HowItWorks = () => {
  return (
    <div className="bg-white">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900">How our sourcing process works</h1>
            <p className="mt-4 text-lg text-slate-600">
              A structured workflow designed to reduce risk, improve communication, and keep your project on schedule.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {steps.map((step) => (
              <div key={step.number} className="grid gap-8 lg:grid-cols-12 lg:gap-10">
                <div className="lg:col-span-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                      {step.number}
                    </div>
                    <h2 className="text-xl font-semibold text-slate-900">{step.title}</h2>
                  </div>
                  <p className="mt-3 text-sm text-slate-600">{step.description}</p>
                  <div className="mt-4">
                    <Button asChild variant="outline" size="sm">
                      <Link to="/contact" className="inline-flex items-center gap-2">
                        Start this step <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className="lg:col-span-8">
                  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-blue-50 text-blue-600">
                        <step.icon className="h-5 w-5" />
                      </div>
                      <div className="text-sm font-medium text-slate-900">What this step includes</div>
                    </div>
                    <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                      {step.details.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-600" />
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

      <section className="border-t border-slate-200 bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">Typical timelines</h2>
              <p className="mt-3 text-lg text-slate-600">
                These are common timeframes. Actual schedules depend on product complexity, supplier availability, and shipping route.
              </p>
              <div className="mt-8 space-y-4">
                {timelines.map((item) => (
                  <div key={item.label} className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3">
                    <span className="text-sm font-medium text-slate-900">{item.label}</span>
                    <span className="inline-flex items-center gap-2 text-sm text-slate-600">
                      <Clock className="h-4 w-4 text-slate-400" />
                      {item.duration}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="aspect-video w-full overflow-hidden rounded-lg bg-slate-100">
                <img
                  alt="Shipping container at a Chinese port"
                  className="h-full w-full object-cover"
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80"
                />
              </div>
              <p className="mt-4 text-sm text-slate-600">
                We coordinate with freight forwarders at major ports including Shenzhen, Ningbo, Shanghai, and Guangzhou.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center">
            <MessageSquare className="mx-auto h-10 w-10 text-blue-600" />
            <h2 className="mt-4 text-2xl font-bold text-slate-900">Ready to start your sourcing project?</h2>
            <p className="mt-2 text-slate-600">
              Tell us what you need and we will reply with a clear plan, timeline, and estimated cost.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link to="/contact">Get a Free Sourcing Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/services">View all services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
