import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Shield, ClipboardCheck, Factory, Ship, ArrowRight, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Share Your Requirements',
      description: 'Tell us about your product, target price, quality standards, and timeline. The more details you provide, the better we can match you with the right suppliers.',
      details: ['Product specifications', 'Target price range', 'Quality requirements', 'Delivery timeline'],
    },
    {
      number: '02',
      title: 'Supplier Matching & Verification',
      description: 'We search our verified supplier database and conduct new searches as needed. Each potential supplier undergoes a thorough verification process.',
      details: ['Supplier search', 'Factory verification', 'Business license check', 'Reference checks'],
    },
    {
      number: '03',
      title: 'Sample & Quality Approval',
      description: 'We coordinate sample production and inspection to ensure the supplier can meet your quality standards before placing a bulk order.',
      details: ['Sample coordination', 'Quality inspection', 'Specification review', 'Approval process'],
    },
    {
      number: '04',
      title: 'Production Monitoring',
      description: 'During production, we conduct regular factory visits and inspections to ensure quality and timeline adherence.',
      details: ['Progress monitoring', 'Quality inspections', 'Issue resolution', 'Regular reporting'],
    },
    {
      number: '05',
      title: 'Pre-Shipment Inspection',
      description: 'Before shipping, we conduct a final comprehensive inspection to ensure all products meet your specifications.',
      details: ['Final inspection', 'Quantity verification', 'Packaging check', 'Documentation review'],
    },
    {
      number: '06',
      title: 'Shipping & Delivery',
      description: 'We coordinate the entire shipping process, from factory to your warehouse, including customs clearance and logistics.',
      details: ['Freight forwarding', 'Customs clearance', 'Insurance', 'Delivery tracking'],
    },
  ];

  const benefits = [
    { title: 'Reduce Risk', description: 'Minimize supplier fraud, quality issues, and delivery delays through our verification and inspection processes.' },
    { title: 'Save Time', description: 'We handle the time-consuming tasks of supplier search, negotiation, and quality control on your behalf.' },
    { title: 'Lower Costs', description: 'Our local presence and negotiation expertise help you get better prices without compromising quality.' },
    { title: 'Peace of Mind', description: 'With regular updates and transparent reporting, you always know the status of your orders.' },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">How It Works</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              A simple, transparent process designed to minimize risk and maximize results for your China sourcing projects.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className="grid lg:grid-cols-2 gap-12 items-center">
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center mb-4">
                    <span className="text-5xl font-bold text-slate-200 mr-4">{step.number}</span>
                    <h2 className="text-3xl font-bold text-slate-900">{step.title}</h2>
                  </div>
                  <p className="text-lg text-slate-600 leading-relaxed mb-6">{step.description}</p>
                  <ul className="space-y-3">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-slate-700">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="bg-slate-50 rounded-2xl p-8 lg:p-12">
                    <div className="aspect-video bg-slate-200 rounded-xl flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-slate-300 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-2xl font-bold text-slate-500">{step.number}</span>
                        </div>
                        <p className="text-slate-500 font-medium">Step {step.number}</p>
                      </div>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Why Buyers Choose Our Process</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our proven process delivers measurable benefits for overseas buyers sourcing from China.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-slate-100 text-center">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-slate-700" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to Start Your Sourcing Project?</h2>
          <p className="text-lg text-slate-600 mb-8">
            Contact us today for a free consultation and learn how we can help you source better from China.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors"
          >
            Get Started
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
