import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, ShieldCheck, ClipboardCheck, Ship, ArrowRight, CheckCircle2 } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Share your requirements',
      description: 'Tell us the product category, target price, quantity, quality standards, and timeline. The more detail you provide, the faster we can match the right suppliers.',
      icon: Search,
      tips: ['Product specs or reference samples', 'Target unit price and order volume', 'Quality standards and certifications', 'Preferred shipping terms'],
    },
    {
      number: '02',
      title: 'We source and verify suppliers',
      description: 'We search our network and the market for matching manufacturers, then verify their credentials, capacity, and track record before presenting options to you.',
      icon: ShieldCheck,
      tips: ['Factory audits and document checks', 'Sample requests and evaluation', 'Price and term negotiation', 'Shortlist with risk notes'],
    },
    {
      number: '03',
      title: 'Inspect and approve production',
      description: 'We conduct inspections at key milestones, share reports with photos and measurements, and help you approve production before full-scale manufacturing.',
      icon: ClipboardCheck,
      tips: ['Pre-production checks', 'During-production inspections', 'Pre-shipment final inspection', 'Detailed reporting with pass/fail criteria'],
    },
    {
      number: '04',
      title: 'Ship and support delivery',
      description: 'We coordinate logistics, prepare shipping documents, and support customs clearance. After delivery, we help resolve any follow-up issues with the supplier.',
      icon: Ship,
      tips: ['Freight quoting and carrier selection', 'Customs documentation support', 'Shipment tracking', 'Post-delivery issue support'],
    },
  ];

  return (
    <div className="bg-white">
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="mb-4" variant="secondary">How It Works</Badge>
            <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">A practical sourcing workflow</h1>
            <p className="mt-4 text-lg text-slate-600">
              From your first inquiry to final delivery, we manage the steps that are difficult to do remotely. Here is how we work together.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8">
            {steps.map((step) => (
              <Card key={step.number}>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-md bg-slate-900 text-white">
                      <step.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-500">Step {step.number}</div>
                      <CardTitle className="text-xl">{step.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="mt-2">{step.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
                    {step.tips.map((tip) => (
                      <li key={tip} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">What to expect from us</h2>
              <p className="mt-3 text-slate-600">We focus on practical support, not sales promises. Here is what our process delivers.</p>
              <ul className="mt-8 space-y-4">
                {[
                  'Clear scope and realistic timelines',
                  'Transparent cost estimates before work begins',
                  'Regular updates in English with supporting documents',
                  'Inspection reports with photos and measurements',
                  'Shipping coordination with tracking and documentation',
                  'Post-delivery support for follow-up issues',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-8">
              <h3 className="text-lg font-semibold text-slate-900">Typical timelines</h3>
              <div className="mt-4 space-y-3 text-sm text-slate-700">
                <div className="flex items-center justify-between rounded-md border border-slate-200 px-4 py-3">
                  <span>Initial supplier matching</span>
                  <span className="font-medium">3-7 business days</span>
                </div>
                <div className="flex items-center justify-between rounded-md border border-slate-200 px-4 py-3">
                  <span>Factory verification and sample review</span>
                  <span className="font-medium">1-3 weeks</span>
                </div>
                <div className="flex items-center justify-between rounded-md border border-slate-200 px-4 py-3">
                  <span>Production and inspection cycle</span>
                  <span className="font-medium">2-6 weeks</span>
                </div>
                <div className="flex items-center justify-between rounded-md border border-slate-200 px-4 py-3">
                  <span>Shipping and delivery</span>
                  <span className="font-medium">Varies by route</span>
                </div>
              </div>
              <p className="mt-4 text-xs text-slate-500">Timelines vary by product complexity, supplier readiness, and shipping method.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-8 sm:p-10">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold text-slate-900">Start with a free consultation</h2>
              <p className="mt-3 text-slate-600">Tell us what you are looking for and we will outline a practical approach.</p>
            </div>
            <div className="mt-6">
              <Button asChild>
                <Link to="/contact">Get a Free Sourcing Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
