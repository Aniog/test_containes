import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Search, FileCheck, Factory, Package, Truck, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Tell Us What You Need',
    description: 'Share your product specifications, target price, quantity, and quality requirements.',
  },
  {
    number: '02',
    icon: Search,
    title: 'We Find Suppliers',
    description: 'Our team identifies and evaluates qualified manufacturers that match your criteria.',
  },
  {
    number: '03',
    icon: FileCheck,
    title: 'Verify & Negotiate',
    description: 'Factory audits, sample evaluation, and price negotiation to secure the best deal.',
  },
  {
    number: '04',
    icon: Factory,
    title: 'Production & QC',
    description: 'Monitor production progress and conduct quality inspections at key milestones.',
  },
  {
    number: '05',
    icon: Package,
    title: 'Final Inspection',
    description: 'Pre-shipment inspection to verify quantity, quality, and packaging before dispatch.',
  },
  {
    number: '06',
    icon: Truck,
    title: 'Ship to Your Door',
    description: 'Coordinate logistics, customs clearance, and delivery to your specified destination.',
  },
];

const SourcingProcess = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How We Work
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A streamlined 6-step process to source products from China with confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="card h-full">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-brand-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                      {step.number}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <step.icon className="w-5 h-5 text-accent-500" />
                      <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Connector Arrow (hidden on last item and mobile) */}
              {index < steps.length - 1 && index % 3 !== 2 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-gray-300">
                  <ArrowRight className="w-6 h-6" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/how-it-works" className="btn-outline">
            Learn More About Our Process
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SourcingProcess;
