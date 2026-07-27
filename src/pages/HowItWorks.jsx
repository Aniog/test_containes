import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, Shield, ClipboardCheck, Ship, Users, Award, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HowItWorks = () => {
  const processSteps = [
    {
      step: '01',
      title: 'Share Your Requirements',
      description: 'Tell us what you need: product specifications, quantity, budget, and timeline. The more details you provide, the better we can match you with the right suppliers.',
      details: [
        'Product specifications and requirements',
        'Target price range and quantity',
        'Quality standards and certifications needed',
        'Preferred shipping method and timeline',
      ],
    },
    {
      step: '02',
      title: 'We Source & Verify',
      description: 'Our team searches our database of 5,000+ verified suppliers and conducts thorough factory audits to ensure they meet your requirements.',
      details: [
        'Supplier identification and shortlisting',
        'Factory verification and audits',
        'Price negotiation on your behalf',
        'Sample arrangement and evaluation',
      ],
    },
    {
      step: '03',
      title: 'Inspect & Approve',
      description: 'Before any large order, we conduct comprehensive quality inspections to ensure products meet your standards and specifications.',
      details: [
        'Pre-production inspection',
        'During-production monitoring',
        'Pre-shipment inspection',
        'Detailed inspection reports with photos',
      ],
    },
    {
      step: '04',
      title: 'Ship & Deliver',
      description: 'We coordinate the entire shipping process, handle all documentation, and track your shipment until it reaches your warehouse.',
      details: [
        'Freight forwarding and logistics',
        'Customs clearance and documentation',
        'Insurance and risk management',
        'Shipment tracking and updates',
      ],
    },
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Save Time',
      description: 'Average 2-3 week sourcing cycle vs. months of searching on your own.',
    },
    {
      icon: Shield,
      title: 'Reduce Risk',
      description: 'Verified suppliers and comprehensive QC reduce the risk of fraud and quality issues.',
    },
    {
      icon: Award,
      title: 'Better Quality',
      description: 'Professional inspections ensure products meet your standards every time.',
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      description: 'A single point of contact who understands your business and requirements.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              How It Works
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              A simple, transparent 4-step process to source products from China with confidence.
            </p>
            <Link to="/contact">
              <Button size="lg">
                Start Your Sourcing Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {processSteps.map((step, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="text-6xl font-bold text-slate-200 mb-4">{step.step}</div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">{step.title}</h2>
                  <p className="text-lg text-slate-600 mb-6">{step.description}</p>
                  <ul className="space-y-3">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="flex-shrink-0 h-5 w-5 text-green-600 mt-0.5 mr-3" />
                        <span className="text-slate-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`bg-slate-50 p-8 rounded-2xl ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="aspect-video bg-slate-200 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-white text-2xl font-bold">{step.step}</span>
                      </div>
                      <p className="text-slate-600 font-medium">{step.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Benefits of Working With Us
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Why businesses choose SSourcing China for their sourcing needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-xl text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Typical Timeline
            </h2>
            <p className="text-xl text-slate-600">
              Here's what you can expect when working with us
            </p>
          </div>
          <div className="space-y-8">
            {[
              { week: 'Week 1', activity: 'Requirements gathering and supplier search' },
              { week: 'Week 2', activity: 'Factory verification and sample evaluation' },
              { week: 'Week 3-4', activity: 'Production monitoring and quality inspections' },
              { week: 'Week 5-6', activity: 'Shipping coordination and delivery' },
            ].map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="flex-shrink-0 w-24">
                  <span className="text-sm font-semibold text-slate-900">{item.week}</span>
                </div>
                <div className="flex-1 ml-4">
                  <div className="h-2 bg-slate-200 rounded-full">
                    <div className="h-2 bg-slate-900 rounded-full" style={{ width: `${(index + 1) * 25}%` }}></div>
                  </div>
                </div>
                <div className="ml-4 text-slate-700">{item.activity}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Contact us today for a free consultation and discover how we can help streamline your sourcing process.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
              Contact Us Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
