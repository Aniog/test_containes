import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, ClipboardCheck, Truck, Users, FileCheck, Package } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: 'Supplier Identification',
      desc: 'We identify manufacturers that match your product specifications, quality requirements, and budget parameters.',
      details: [
        'Database search across 50,000+ verified suppliers',
        'Category-specific expertise in 30+ industries',
        'Initial capability screening and shortlisting',
        'Competitive pricing analysis',
      ],
    },
    {
      icon: FileCheck,
      title: 'Factory Verification',
      desc: 'On-site audits confirm supplier legitimacy, production capacity, and operational standards.',
      details: [
        'Business license and certification verification',
        'Production equipment and capacity assessment',
        'Quality management system review',
        'Financial stability evaluation',
      ],
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Inspection',
      desc: 'Systematic inspections at key production stages ensure products meet agreed specifications.',
      details: [
        'Pre-production sample approval',
        'In-process quality monitoring',
        'Pre-shipment final inspection',
        'Detailed reports with photos and measurements',
      ],
    },
    {
      icon: Users,
      title: 'Production Monitoring',
      desc: 'Regular oversight keeps projects on schedule and identifies issues early.',
      details: [
        'Weekly production status updates',
        'Timeline tracking against milestones',
        'Issue identification and resolution',
        'Direct factory communication management',
      ],
    },
    {
      icon: Package,
      title: 'Sample Coordination',
      desc: 'We manage sample requests, review, and feedback to ensure alignment before bulk production.',
      details: [
        'Sample ordering and tracking',
        'Quality assessment against specifications',
        'Feedback consolidation and communication',
        'Approval documentation',
      ],
    },
    {
      icon: Truck,
      title: 'Logistics Coordination',
      desc: 'End-to-end shipping support from factory to your destination.',
      details: [
        'Freight quote comparison and booking',
        'Export documentation preparation',
        'Customs clearance assistance',
        'Delivery tracking and coordination',
      ],
    },
  ];

  return (
    <div>
      <section className="bg-[#F8FAFC] py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-semibold text-[#0F172A] mb-4">Our Services</h1>
          <p className="text-xl text-[#475569]">Comprehensive support for sourcing from China.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="border border-[#E2E8F0] rounded-xl p-8">
              <div className="w-12 h-12 bg-[#EFF6FF] rounded-lg flex items-center justify-center mb-6">
                <service.icon className="w-6 h-6 text-[#1E40AF]" />
              </div>
              <h3 className="text-2xl font-semibold text-[#0F172A] mb-3">{service.title}</h3>
              <p className="text-[#475569] mb-6">{service.desc}</p>
              <ul className="space-y-2">
                {service.details.map((detail, dIdx) => (
                  <li key={dIdx} className="flex gap-3 text-sm text-[#475569]">
                    <span className="text-[#1E40AF] mt-1">•</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#0F172A] py-16 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-4">Need a Custom Service Package?</h2>
          <p className="text-[#94A3B8] mb-8">We tailor our services to your specific sourcing requirements.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#0F172A] px-8 py-3 rounded-lg font-medium hover:bg-[#F8FAFC] transition-colors"
          >
            Discuss Your Project
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
