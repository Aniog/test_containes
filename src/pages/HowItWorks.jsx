import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ClipboardList, Factory, Ship, PackageCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const steps = [
  {
    title: 'Share your requirements',
    description:
      'Tell us what you want to source, including product specs, target price, order volume, and preferred timeline. The more detail you provide, the faster we can match you with the right suppliers.',
    icon: ClipboardList,
  },
  {
    title: 'We source and verify suppliers',
    description:
      'We shortlist manufacturers, check business credentials, visit factories when needed, and confirm production capacity. You receive a clear comparison so you can choose with confidence.',
    icon: Factory,
  },
  {
    title: 'Inspect and approve production',
    description:
      'We inspect samples and monitor production runs. You receive reports with photos, videos, and pass/fail findings before you approve shipment.',
    icon: PackageCheck,
  },
  {
    title: 'Ship and support delivery',
    description:
      'We coordinate freight, prepare export documents, and work with customs brokers. You receive tracking updates until goods arrive at your destination.',
    icon: Ship,
  },
];

const HowItWorks = () => {
  return (
    <div className="flex-1">
      <section className="bg-slate-900 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Badge className="bg-white/10 text-white hover:bg-white/20">How It Works</Badge>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            A clear process from inquiry to delivery
          </h1>
          <p className="mt-3 max-w-2xl text-slate-300">
            Our workflow is designed to keep risk low and communication clear at every stage.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {steps.map((step, index) => (
            <Card key={step.title} className="border-slate-200 bg-white">
              <div className="p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                    {index + 1}
                  </div>
                  <step.icon className="h-6 w-6 text-slate-900" />
                  <h2 className="text-lg font-semibold text-slate-900">{step.title}</h2>
                </div>
                <p className="mt-3 text-sm text-slate-600">{step.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">What to expect after you contact us</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            <Card className="border-slate-200 bg-white">
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Within 1 business day</p>
                <h3 className="mt-2 text-base font-semibold text-slate-900">Initial response</h3>
                <p className="mt-2 text-sm text-slate-600">We review your request and reply with clarifying questions or a proposal outline.</p>
              </div>
            </Card>
            <Card className="border-slate-200 bg-white">
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Within 3-7 days</p>
                <h3 className="mt-2 text-base font-semibold text-slate-900">Supplier shortlist</h3>
                <p className="mt-2 text-sm text-slate-600">You receive a shortlist of vetted suppliers with capability notes and next steps.</p>
              </div>
            </Card>
            <Card className="border-slate-200 bg-white">
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Ongoing</p>
                <h3 className="mt-2 text-base font-semibold text-slate-900">Progress updates</h3>
                <p className="mt-2 text-sm text-slate-600">Regular updates on verification, inspection, and shipping milestones.</p>
              </div>
            </Card>
          </div>
          <div className="mt-8">
            <Button asChild className="bg-slate-900 text-white hover:bg-slate-800">
              <Link to="/contact">Start your sourcing project</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
