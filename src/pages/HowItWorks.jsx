import React from 'react';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, FileText, Shield, Truck, CheckCircle } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const HowItWorks = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const steps = [
    {
      number: '01',
      title: 'Initial Consultation',
      description: 'Share your product requirements, target price, quality standards, and timeline. We discuss your needs and explain how we can help.',
      icon: Search,
      details: [
        'Product specifications review',
        'Budget and timeline discussion',
        'Quality requirements clarification',
        'Project scope definition',
      ],
    },
    {
      number: '02',
      title: 'Supplier Sourcing',
      description: 'We search our network and the market to find suitable manufacturers that match your criteria.',
      icon: Search,
      details: [
        'Market research and supplier identification',
        'Initial supplier vetting',
        'Capability assessment',
        'Shortlist of qualified suppliers',
      ],
    },
    {
      number: '03',
      title: 'Verification & Sampling',
      description: 'We verify supplier credentials and coordinate sample production and evaluation.',
      icon: FileText,
      details: [
        'Factory audits and verification',
        'Sample production coordination',
        'Sample quality evaluation',
        'Supplier comparison report',
      ],
    },
    {
      number: '04',
      title: 'Quality Inspection',
      description: 'We conduct inspections at key production stages to ensure quality standards are met.',
      icon: Shield,
      details: [
        'Pre-production inspection',
        'During production inspection',
        'Pre-shipment inspection',
        'Detailed inspection reports',
      ],
    },
    {
      number: '05',
      title: 'Shipping & Delivery',
      description: 'We coordinate logistics, handle documentation, and ensure safe delivery to your location.',
      icon: Truck,
      details: [
        'Logistics coordination',
        'Customs documentation',
        'Freight forwarding',
        'Delivery tracking',
      ],
    },
  ];

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              How It Works
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              A simple, transparent process designed to minimize risk and maximize success in your China sourcing projects.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-4">
                    <span className="text-4xl font-bold text-blue-100 mr-4">{step.number}</span>
                    <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">{step.title}</h2>
                  </div>
                  <p className="text-lg text-slate-600 mb-6">{step.description}</p>
                  <ul className="space-y-3">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="aspect-video bg-slate-200 rounded-xl overflow-hidden">
                    <img
                      data-strk-img-id={`process-step-${index}-8f2a9c`}
                      data-strk-img={`[process-step-${index}-title] [process-step-${index}-description]`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Typical Timeline</h2>
            <p className="text-lg text-slate-600">
              While timelines vary by project complexity, here's a typical schedule for a standard sourcing project.
            </p>
          </div>
          <div className="space-y-8">
            {[
              { phase: 'Week 1-2', title: 'Consultation & Sourcing', description: 'Initial consultation, supplier search, and factory verification.' },
              { phase: 'Week 2-4', title: 'Sampling & Negotiation', description: 'Sample production, quality evaluation, and price negotiation.' },
              { phase: 'Week 4-8', title: 'Production & Inspection', description: 'Mass production, quality inspections, and production monitoring.' },
              { phase: 'Week 8-10', title: 'Shipping & Delivery', description: 'Logistics coordination, customs clearance, and delivery.' },
            ].map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-24 text-sm font-medium text-blue-600">{item.phase}</div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-slate-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Sourcing Project?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Contact us today for a free consultation and quote.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors"
          >
            Get Started
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
