import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  MessageSquare,
  Search,
  ShieldCheck,
  ClipboardCheck,
  Ship,
  ArrowRight,
  CheckCircle2,
  Clock,
  Users,
  FileText,
} from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      icon: MessageSquare,
      title: 'Initial Consultation',
      description: "Tell us about your product requirements, target price, quality standards, and timeline. We'll discuss your needs and explain how we can help.",
      duration: '1-2 days',
      deliverables: ['Requirements document', 'Service proposal', 'Timeline estimate'],
    },
    {
      number: '02',
      icon: Search,
      title: 'Supplier Sourcing',
      description: 'We search our network and the market to find qualified manufacturers that match your specifications. We verify their credentials and capabilities.',
      duration: '1-2 weeks',
      deliverables: ['Supplier shortlist', 'Factory profiles', 'Initial quotes'],
    },
    {
      number: '03',
      icon: ShieldCheck,
      title: 'Factory Verification',
      description: 'We conduct on-site audits of shortlisted factories to verify their legitimacy, capacity, quality systems, and compliance.',
      duration: '1-2 weeks',
      deliverables: ['Audit reports', 'Factory photos', 'Verification summary'],
    },
    {
      number: '04',
      icon: ClipboardCheck,
      title: 'Sample & Inspection',
      description: 'We coordinate sample production and conduct thorough inspections to ensure quality meets your standards before mass production.',
      duration: '2-4 weeks',
      deliverables: ['Product samples', 'Inspection reports', 'Quality approval'],
    },
    {
      number: '05',
      icon: Ship,
      title: 'Production & Shipping',
      description: 'We monitor production, conduct final inspections, and coordinate shipping to get your products delivered safely and on time.',
      duration: '2-8 weeks',
      deliverables: ['Production updates', 'Final inspection', 'Shipping documents'],
    },
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Save Time',
      description: 'We handle the time-consuming tasks of supplier search, verification, and quality control.',
    },
    {
      icon: Users,
      title: 'Local Expertise',
      description: 'Our team in China understands the local market, culture, and business practices.',
    },
    {
      icon: ShieldCheck,
      title: 'Reduce Risk',
      description: 'Our verification and inspection processes minimize the risk of fraud, quality issues, and delays.',
    },
    {
      icon: FileText,
      title: 'Clear Communication',
      description: 'We bridge the language gap and provide regular updates in English.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight">
              How It Works
            </h1>
            <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
              A simple, transparent 5-step process to source products from China with confidence. We handle the complexity so you can focus on your business.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-white font-bold text-lg">
                      {step.number}
                    </div>
                    <div className="text-sm font-medium text-slate-500">
                      <Clock className="inline h-4 w-4 mr-1" />
                      {step.duration}
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">{step.title}</h2>
                  <p className="text-lg text-slate-600 mb-6 leading-relaxed">{step.description}</p>
                  <div className="space-y-2">
                    <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">Key Deliverables</h3>
                    <ul className="space-y-2">
                      {step.deliverables.map((deliverable, idx) => (
                        <li key={idx} className="flex items-center text-sm text-slate-600">
                          <CheckCircle2 className="mr-2 h-4 w-4 text-green-600" />
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="rounded-2xl bg-slate-100 p-8 flex items-center justify-center">
                    <step.icon className="h-24 w-24 text-slate-400" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Benefits of Working With Us
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Why thousands of businesses trust SSourcing China for their sourcing needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-slate-200 text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 mb-4">
                  <benefit.icon className="h-6 w-6 text-slate-700" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-slate-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Overview */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Typical Timeline
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              While timelines vary by product complexity, here's what you can typically expect.
            </p>
          </div>
          <div className="bg-slate-50 rounded-2xl p-8 lg:p-12">
            <div className="grid md:grid-cols-5 gap-4">
              {steps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-slate-900 mb-2">{step.duration}</div>
                  <div className="text-sm text-slate-600">{step.title}</div>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-8 border-t border-slate-200 text-center">
              <p className="text-slate-600">
                Total typical timeline: <span className="font-semibold text-slate-900">6-17 weeks</span> from initial consultation to delivery
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Start Your Sourcing Project?
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Contact us today for a free consultation. We'll discuss your needs and provide a customized proposal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-slate-700 text-white hover:bg-slate-800" asChild>
              <Link to="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
