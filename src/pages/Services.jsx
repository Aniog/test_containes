import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Shield, CheckCircle, Clock, Truck, FileText, Users, Award } from 'lucide-react';
import InquiryForm from '../components/InquiryForm';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: 'Supplier Identification & Sourcing',
      description: 'We locate manufacturers that match your product specifications, volume needs, and quality requirements.',
      details: [
        'Product specification analysis',
        'Supplier database and network search',
        'Initial capability screening',
        'Shortlist with comparison reports',
      ],
    },
    {
      icon: Shield,
      title: 'Factory Verification & Audits',
      description: 'On-site verification to confirm legitimacy, capacity, and quality systems before you commit.',
      details: [
        'Business registration and legitimacy check',
        'Production capacity assessment',
        'Quality management system review',
        'Detailed audit report with photos',
      ],
    },
    {
      icon: CheckCircle,
      title: 'Quality Inspection Services',
      description: 'Independent inspection at key production stages to verify compliance with your requirements.',
      details: [
        'Pre-production inspection',
        'During-production inspection',
        'Pre-shipment inspection',
        'Container loading supervision',
      ],
    },
    {
      icon: Clock,
      title: 'Production Monitoring',
      description: 'Ongoing oversight to track progress, identify issues early, and keep orders on schedule.',
      details: [
        'Production schedule tracking',
        'Milestone reporting',
        'Issue identification and escalation',
        'Photo and video documentation',
      ],
    },
    {
      icon: Truck,
      title: 'Logistics & Shipping Coordination',
      description: 'Support for freight booking, documentation, and coordination from factory to destination.',
      details: [
        'Freight quote coordination',
        'Export documentation review',
        'Customs clearance guidance',
        'Delivery timeline management',
      ],
    },
    {
      icon: FileText,
      title: 'Documentation & Compliance Support',
      description: 'Assistance with required paperwork and basic compliance information for your market.',
      details: [
        'Commercial invoice and packing list review',
        'Certificate of origin coordination',
        'Product specification documentation',
        'Basic regulatory requirement guidance',
      ],
    },
  ];

  const process = [
    'Initial consultation to understand requirements',
    'Proposal with scope and fees',
    'Agreement and project kickoff',
    'Execution with regular updates',
    'Final report and handover',
  ];

  return (
    <div>
      <section className="bg-slate-900 text-white py-12 md:py-16">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">Sourcing Services</h1>
            <p className="text-lg text-slate-300">
              Practical, end-to-end support for buyers sourcing from China. Each service can be engaged 
              individually or as part of a complete sourcing project.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="card">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-slate-700" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                      <p className="text-slate-600 mb-4">{service.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 pl-16">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 text-green-700 mt-0.5 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title text-center mb-8">How We Work With Clients</h2>
            <div className="space-y-4">
              {process.map((step, index) => (
                <div key={index} className="flex gap-4 items-start bg-white p-4 rounded-lg border border-slate-200">
                  <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm font-medium flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="pt-1 text-slate-700">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="section-title mb-4">Service Options</h2>
              <div className="space-y-4 text-slate-600">
                <p>
                  <strong>Project-Based:</strong> Full sourcing support from supplier search through delivery. 
                  Best for new products or new supplier relationships.
                </p>
                <p>
                  <strong>Inspection Only:</strong> Quality inspection services for orders you have already placed. 
                  Includes pre-shipment and during-production options.
                </p>
                <p>
                  <strong>Verification Only:</strong> Factory audit and verification for suppliers you have identified. 
                  Includes detailed reporting.
                </p>
                <p>
                  <strong>Ongoing Support:</strong> Retainer arrangements for buyers with regular sourcing needs. 
                  Priority response and volume pricing.
                </p>
              </div>
            </div>
            <div className="card">
              <h3 className="font-semibold mb-4">What We Do Not Do</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex gap-2">• We do not take ownership of goods or act as importer of record</li>
                <li className="flex gap-2">• We do not handle payments between buyers and suppliers</li>
                <li className="flex gap-2">• We do not guarantee specific outcomes or prices</li>
                <li className="flex gap-2">• We do not represent suppliers or accept commissions from them</li>
                <li className="flex gap-2">• We do not provide legal or customs brokerage services</li>
              </ul>
              <p className="text-xs text-slate-500 mt-4">
                We focus on information, verification, and coordination. Final commercial decisions remain with you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-slate-900 text-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <h2 className="text-2xl font-bold mb-3 text-white">Need a Specific Service?</h2>
            <p className="text-slate-300">Tell us what you need and we will provide a scope and quote.</p>
          </div>
          <div className="max-w-xl mx-auto bg-white rounded-lg p-6 md:p-8">
            <InquiryForm compact title="Request Service Information" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
