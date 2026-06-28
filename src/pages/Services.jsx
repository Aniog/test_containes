import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Shield, CheckCircle, Clock, Truck, Users, FileText, Award } from 'lucide-react';
import InquiryForm from '../components/InquiryForm';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: 'Supplier Identification & Sourcing',
      desc: 'We locate manufacturers that match your product specifications, quality standards, and volume requirements.',
      details: [
        'Product specification analysis',
        'Supplier database search and outreach',
        'Initial capability screening',
        'Preliminary pricing and lead time assessment',
      ],
    },
    {
      icon: Shield,
      title: 'Factory Verification & Audits',
      desc: 'On-site visits to confirm legitimacy, production capacity, quality systems, and compliance.',
      details: [
        'Business license and registration verification',
        'Production capacity assessment',
        'Quality management system review',
        'Workforce and equipment evaluation',
      ],
    },
    {
      icon: CheckCircle,
      title: 'Quality Inspection Services',
      desc: 'Independent inspection at key production stages to verify conformance before shipment.',
      details: [
        'Pre-production sample review',
        'During-production inspection',
        'Pre-shipment inspection (PSI)',
        'Container loading supervision',
      ],
    },
    {
      icon: Clock,
      title: 'Production Monitoring',
      desc: 'Regular progress tracking and milestone reporting throughout the manufacturing process.',
      details: [
        'Production schedule establishment',
        'Weekly status updates',
        'Issue identification and escalation',
        'Photo and video documentation',
      ],
    },
    {
      icon: Truck,
      title: 'Logistics & Shipping Coordination',
      desc: 'Support for freight booking, documentation, and coordination with forwarders and carriers.',
      details: [
        'Freight forwarder recommendations',
        'Shipping documentation review',
        'Incoterms guidance',
        'Shipment tracking and updates',
      ],
    },
    {
      icon: FileText,
      title: 'Documentation & Compliance Support',
      desc: 'Assistance with commercial documents, certificates, and regulatory requirements.',
      details: [
        'Commercial invoice and packing list review',
        'Certificate of origin coordination',
        'Product testing and certification guidance',
        'Import compliance documentation',
      ],
    },
    {
      icon: Users,
      title: 'Order Management',
      desc: 'End-to-end coordination from initial inquiry through final delivery and payment.',
      details: [
        'Purchase order review',
        'Payment milestone coordination',
        'Communication management',
        'Issue resolution support',
      ],
    },
    {
      icon: Award,
      title: 'Ongoing Supplier Development',
      desc: 'Long-term support for clients with recurring sourcing needs.',
      details: [
        'Supplier performance tracking',
        'Continuous improvement initiatives',
        'New product development support',
        'Annual audit programs',
      ],
    },
  ];

  return (
    <div>
      <section className="bg-[#F8FAFC] py-16">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-semibold mb-4">Sourcing Services</h1>
            <p className="text-lg text-[#475569]">
              We offer modular services that can be combined based on your needs. 
              Whether you need full project support or targeted assistance at a specific stage, we can help.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="card">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#F1F5F9] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="text-[#0A2540]" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                      <p className="text-[#475569] mb-4">{service.desc}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 pl-16">
                    {service.details.map((detail, i) => (
                      <li key={i} className="text-sm text-[#475569] flex items-start gap-2">
                        <span className="text-[#2563EB] mt-1">•</span>
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

      <section className="section section-alt">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h2 className="text-2xl font-semibold mb-3">Service Packages</h2>
            <p className="text-[#475569]">
              Most clients choose one of the following engagement models. We can also customize based on your requirements.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="card">
              <h3 className="font-semibold text-lg mb-2">Project-Based Sourcing</h3>
              <p className="text-sm text-[#475569] mb-4">Full support for a specific product or order. Includes supplier identification, verification, sample coordination, and inspection.</p>
              <p className="text-xs text-[#64748B]">Best for: New products, one-time orders, or initial supplier qualification.</p>
            </div>
            <div className="card">
              <h3 className="font-semibold text-lg mb-2">Quality & Inspection Only</h3>
              <p className="text-sm text-[#475569] mb-4">Factory audit, sample review, and production inspection services for buyers who have identified suppliers independently.</p>
              <p className="text-xs text-[#64748B]">Best for: Existing supplier relationships, ongoing quality control.</p>
            </div>
            <div className="card">
              <h3 className="font-semibold text-lg mb-2">Retainer / Ongoing Support</h3>
              <p className="text-sm text-[#475569] mb-4">Monthly support for clients with regular sourcing activity. Includes priority response, scheduled audits, and production monitoring.</p>
              <p className="text-xs text-[#64748B]">Best for: Importers with multiple SKUs or recurring orders.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold mb-3">Request a Quote</h2>
              <p className="text-[#475569]">Tell us about your sourcing needs and we will provide a proposal.</p>
            </div>
            <InquiryForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
