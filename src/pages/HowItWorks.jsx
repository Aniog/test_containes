import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Search, FileCheck, Factory, Package, Truck, ArrowRight, CheckCircle, Clock, DollarSign } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Initial Consultation',
    subtitle: 'Day 1-2',
    description: 'Share your product requirements, target specifications, quantity, budget, and timeline. We will review your needs and provide initial feedback.',
    details: [
      'Product specifications review',
      'Target price discussion',
      'Quantity and timeline planning',
      'Initial feasibility assessment',
    ],
  },
  {
    number: '02',
    icon: Search,
    title: 'Supplier Identification',
    subtitle: 'Day 3-10',
    description: 'Our team identifies qualified suppliers from our verified network, requests quotations, and evaluates candidates against your criteria.',
    details: [
      'Supplier database search',
      'RFQ preparation and distribution',
      'Quotation comparison and analysis',
      'Shortlist creation with recommendations',
    ],
  },
  {
    number: '03',
    icon: FileCheck,
    title: 'Verification & Sampling',
    subtitle: 'Day 10-25',
    description: 'Factory audits for shortlisted suppliers. Sample production, evaluation, and refinement until specifications are met.',
    details: [
      'On-site factory verification',
      'Sample production coordination',
      'Quality evaluation and testing',
      'Specification refinement',
    ],
  },
  {
    number: '04',
    icon: Factory,
    title: 'Order & Production',
    subtitle: 'Day 25-55',
    description: 'Place orders with selected suppliers. Monitor production progress with regular updates and in-line quality inspections.',
    details: [
      'Order placement and confirmation',
      'Production schedule monitoring',
      'In-line quality inspections',
      'Weekly progress reports',
    ],
  },
  {
    number: '05',
    icon: Package,
    title: 'Final Inspection',
    subtitle: 'Day 55-60',
    description: 'Comprehensive pre-shipment inspection using AQL standards. Products verified against specifications before leaving the factory.',
    details: [
      'AQL-based random sampling',
      'Function and appearance testing',
      'Packaging and labeling verification',
      'Detailed inspection report with photos',
    ],
  },
  {
    number: '06',
    icon: Truck,
    title: 'Shipping & Delivery',
    subtitle: 'Day 60-75',
    description: 'Coordinate logistics, prepare customs documentation, and arrange door-to-door delivery to your specified location.',
    details: [
      'Freight booking and coordination',
      'Customs documentation preparation',
      'Container loading supervision',
      'Shipment tracking until delivery',
    ],
  },
];

const benefits = [
  { icon: Clock, title: 'Save Time', description: 'We handle the entire sourcing process so you can focus on your business.' },
  { icon: DollarSign, title: 'Reduce Costs', description: 'Competitive pricing through supplier negotiation and volume leverage.' },
  { icon: CheckCircle, title: 'Ensure Quality', description: 'Multi-stage inspections prevent defects and protect your investment.' },
];

const HowItWorks = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-900 to-brand-700 py-20">
        <div className="container-wide text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">How It Works</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            A clear, step-by-step process to source products from China with confidence and transparency.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="relative">
            {/* Vertical Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2" />

            <div className="space-y-12 lg:space-y-0">
              {steps.map((step, index) => (
                <div key={index} className={`relative lg:grid lg:grid-cols-2 lg:gap-16 ${index > 0 ? 'lg:mt-16' : ''}`}>
                  {/* Timeline Dot */}
                  <div className="hidden lg:block absolute left-1/2 top-8 w-4 h-4 bg-brand-500 rounded-full transform -translate-x-1/2 border-4 border-white shadow" />

                  {/* Content */}
                  <div className={`${index % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:col-start-2 lg:pl-16'}`}>
                    <div className="card">
                      <div className={`flex items-start gap-4 ${index % 2 === 0 ? 'lg:flex-row-reverse lg:text-right' : ''}`}>
                        <div className="flex-shrink-0">
                          <div className="w-14 h-14 bg-brand-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                            {step.number}
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <step.icon className="w-5 h-5 text-accent-500" />
                            <span className="text-sm font-medium text-accent-600">{step.subtitle}</span>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                          <p className="text-gray-600 text-sm mb-4">{step.description}</p>
                          <ul className={`space-y-2 ${index % 2 === 0 ? 'lg:ml-auto' : ''}`}>
                            {step.details.map((detail, i) => (
                              <li key={i} className={`flex items-center gap-2 text-sm text-gray-500 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-gray-50">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Benefits of Our Process</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="card text-center">
                <div className="w-14 h-14 bg-accent-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-accent-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand-900 text-white">
        <div className="container-wide text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Start Your Sourcing Project</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Ready to source products from China? Get in touch and we will guide you through every step.
          </p>
          <Link to="/contact" className="btn-primary text-lg">
            Get Started
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
