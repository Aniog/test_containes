import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ShieldCheck, ClipboardCheck, Ship, ArrowRight, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Submit your requirements',
    description: 'Share your product specifications, target price range, order volume, and any quality or compliance requirements. The more detail you provide, the faster we can match you with the right suppliers.',
    icon: Search,
  },
  {
    number: '02',
    title: 'Supplier shortlist and factory visits',
    description: 'We search for manufacturers that fit your needs, then visit the most promising ones on-site. We verify business registration, production capacity, quality systems, and client references.',
    icon: ShieldCheck,
  },
  {
    number: '03',
    title: 'Samples and quality checks',
    description: 'We request samples from shortlisted factories and run inspections against your specifications. We provide detailed reports with photos and measurements so you can make an informed decision.',
    icon: ClipboardCheck,
  },
  {
    number: '04',
    title: 'Order management and production monitoring',
    description: 'Once you place an order, we monitor production timelines, conduct in-line inspections, and flag any delays or deviations immediately.',
    icon: Ship,
  },
  {
    number: '05',
    title: 'Final inspection and shipping',
    description: 'Before shipment, we perform a pre-shipment inspection to confirm quality, packaging, and quantity. We then coordinate logistics, documentation, and freight forwarding to your destination.',
    icon: Ship,
  },
];

const expectations = [
  'Clear communication in English with a dedicated sourcing specialist',
  'Transparent pricing with no hidden fees',
  'Regular updates at every stage of the process',
  'Detailed inspection reports with photos and measurements',
  'Support for customs documentation and logistics coordination',
];

const HowItWorks = () => {
  return (
    <div className="bg-white">
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              How It Works
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              A structured, transparent process that takes you from initial inquiry to delivered goods with minimal risk.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={step.number} className="grid gap-8 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-5">
                  <div className="flex items-center gap-4">
                    <span className="text-4xl font-bold text-slate-200">{step.number}</span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-900 text-white">
                      <step.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <h2 className="mt-4 text-2xl font-bold text-slate-900">{step.title}</h2>
                  <p className="mt-3 text-slate-600">{step.description}</p>
                </div>
                <div className="lg:col-span-6 lg:col-start-7">
                  <div className="aspect-[16/9] overflow-hidden rounded-2xl bg-slate-100">
                    <img
                      alt={`Step ${step.number}: ${step.title}`}
                      data-strk-img-id={`how-step-${step.number}-img`}
                      data-strk-img={`[how-step-${step.number}-title] [how-step-${step.number}-desc]`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="1200"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <p id={`how-step-${step.number}-title`} className="sr-only">
                    {step.title}
                  </p>
                  <p id={`how-step-${step.number}-desc`} className="sr-only">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                What to expect when working with us
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                We aim to make cross-border sourcing feel as straightforward as working with a local partner.
              </p>
            </div>
            <div className="space-y-4">
              {expectations.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/contact"
              className="inline-flex h-12 items-center justify-center rounded-md bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow transition-colors hover:bg-slate-800"
            >
              Start Your Sourcing Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
