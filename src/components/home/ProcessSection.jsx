import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Search, FileCheck, Package, Ship, Handshake } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    number: '01',
    title: 'Tell Us Your Needs',
    description: 'Share your product specifications, target price, quantity, and any special requirements through our inquiry form or a call.',
  },
  {
    icon: Search,
    number: '02',
    title: 'We Source Suppliers',
    description: 'Our team researches and shortlists 3-5 qualified suppliers from our network, providing you with detailed quotes and factory profiles.',
  },
  {
    icon: FileCheck,
    number: '03',
    title: 'Verify & Sample',
    description: 'We conduct factory audits and arrange product samples for your approval before placing any bulk order.',
  },
  {
    icon: Package,
    number: '04',
    title: 'Place & Monitor Orders',
    description: 'Once you approve, we place the order and monitor production with regular updates, photos, and reports.',
  },
  {
    icon: Ship,
    number: '05',
    title: 'Quality Check & Ship',
    description: 'Pre-shipment inspection, container loading supervision, and logistics coordination to your destination.',
  },
  {
    icon: Handshake,
    number: '06',
    title: 'Ongoing Partnership',
    description: 'We stay engaged for reorders, supplier relationship management, and continuous improvement.',
  },
];

const ProcessSection = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider">Our Process</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-3 mb-4">
            How Sourcing With Us Works
          </h2>
          <p className="text-slate-600 text-lg">
            A transparent, step-by-step process designed to minimize your risk and maximize efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-xl p-7 border border-slate-200 h-full hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-4xl font-extrabold text-slate-100">{step.number}</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/how-it-works"
            className="inline-flex items-center gap-2 text-primary-500 font-semibold hover:text-primary-600 transition-colors"
          >
            Learn More About Our Process
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;