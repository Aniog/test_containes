import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, Factory, ClipboardCheck, Ship, ArrowRight, CheckCircle2 } from 'lucide-react';

const steps = [
  { step: '01', icon: Search, title: 'Tell us what you need', desc: 'Share your product requirements, target price, quantity, and timeline. The more detail you provide, the better we can match you with the right suppliers.' },
  { step: '02', icon: Factory, title: 'We find and verify suppliers', desc: 'We search our vetted network, conduct factory audits, and shortlist 3-5 suppliers that meet your criteria. You get detailed profiles and our recommendation.' },
  { step: '03', icon: ClipboardCheck, title: 'Samples and quality checks', desc: 'We coordinate sample production and shipping. Once you approve, we set up a QC plan and inspect at key production stages.' },
  { step: '04', icon: Ship, title: 'Production, QC, and shipping', desc: 'We monitor production, conduct pre-shipment inspection, and coordinate freight to your destination. You receive tracking updates and all shipping documents.' },
];

const timeline = [
  { phase: 'Week 1-2', title: 'Sourcing & Verification', tasks: ['Requirement analysis', 'Supplier search', 'Factory audits', 'Sample requests'] },
  { phase: 'Week 3-4', title: 'Sampling & Approval', tasks: ['Sample production', 'Sample QC', 'Your review & feedback', 'Spec finalization'] },
  { phase: 'Week 5-8', title: 'Production & QC', tasks: ['Production monitoring', 'In-line inspections', 'Pre-shipment inspection', 'Final approval'] },
  { phase: 'Week 9-10', title: 'Shipping & Delivery', tasks: ['Freight booking', 'Customs docs', 'Container loading', 'Delivery tracking'] },
];

const HowItWorks = () => {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">How It Works</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">A clear, step-by-step process that takes you from idea to delivery — with full visibility and control.</p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {steps.map((item) => (
            <Card key={item.step} className="border-slate-200 relative">
              <div className="absolute top-4 right-4 text-4xl font-bold text-slate-100">{item.step}</div>
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-slate-100 flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-slate-900" />
                </div>
                <CardTitle className="text-lg">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{item.desc}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Typical timeline</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timeline.map((item) => (
              <div key={item.phase} className="bg-white rounded-lg border border-slate-200 p-6">
                <div className="text-sm font-semibold text-slate-500 mb-2">{item.phase}</div>
                <h3 className="font-semibold text-slate-900 mb-4">{item.title}</h3>
                <ul className="space-y-2">
                  {item.tasks.map((task) => (
                    <li key={task} className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* What you get */}
        <div className="bg-slate-50 rounded-2xl p-8 lg:p-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">What you get at each stage</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Transparency', desc: 'Real-time updates, photos, and reports so you always know the status.' },
              { title: 'Control', desc: 'Approve samples, sign off on inspections, and make decisions with full information.' },
              { title: 'Protection', desc: 'Contracts, QC standards, and insurance options to reduce your risk.' },
            ].map((item) => (
              <div key={item.title} className="bg-white p-6 rounded-lg border border-slate-200 text-center">
                <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link to="/contact">
            <Button size="lg">
              Start your sourcing project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
