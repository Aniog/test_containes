import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Shield, CheckCircle, Clock, Truck, Award, FileText, Search, Package } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: 'Supplier Identification & Sourcing',
      desc: 'We locate manufacturers that match your product specifications, quality requirements, production capacity, and commercial terms.',
      details: [
        'Product specification analysis and supplier matching',
        'Database and network-based supplier search',
        'Initial capability screening and shortlisting',
        'Request for quotation (RFQ) management',
      ],
    },
    {
      icon: Shield,
      title: 'Factory Verification & Audits',
      desc: 'On-site verification confirms that suppliers are legitimate, capable, and aligned with your standards before you commit.',
      details: [
        'Business license and legal status verification',
        'Production capacity and equipment assessment',
        'Quality management system review',
        'Social compliance and workplace conditions',
      ],
    },
    {
      icon: CheckCircle,
      title: 'Quality Control & Inspection',
      desc: 'Independent inspections at critical stages reduce the risk of receiving non-conforming products.',
      details: [
        'Pre-production sample verification',
        'During-production inspection',
        'Pre-shipment inspection (AQL sampling)',
        'Container loading supervision',
      ],
    },
    {
      icon: Clock,
      title: 'Production Monitoring',
      desc: 'Regular milestone tracking and communication keep projects on schedule and surface issues early.',
      details: [
        'Production schedule establishment',
        'Weekly progress reporting',
        'Issue identification and escalation',
        'Corrective action coordination',
      ],
    },
    {
      icon: Package,
      title: 'Sample Coordination',
      desc: 'We manage the sampling process to ensure you receive representative products before mass production.',
      details: [
        'Sample request and tracking',
        'Sample evaluation support',
        'Specification feedback to suppliers',
        'Approval documentation',
      ],
    },
    {
      icon: Truck,
      title: 'Logistics & Shipping Coordination',
      desc: 'We handle the operational details of moving goods from factory to your destination.',
      details: [
        'Freight quote comparison and booking',
        'Export documentation preparation',
        'Customs and compliance guidance',
        'Shipment tracking and delivery coordination',
      ],
    },
    {
      icon: FileText,
      title: 'Documentation & Compliance Support',
      desc: 'Accurate documentation is essential for smooth customs clearance and payment processes.',
      details: [
        'Commercial invoice and packing list review',
        'Certificate of origin and other certificates',
        'Product compliance documentation guidance',
        'Record keeping and file management',
      ],
    },
    {
      icon: Award,
      title: 'Ongoing Supplier Management',
      desc: 'We support repeat orders and long-term supplier relationships after the initial project.',
      details: [
        'Reorder coordination',
        'Price and lead time negotiation',
        'Performance monitoring',
        'New product development support',
      ],
    },
  ];

  return (
    <div>
      <section className="bg-[#0F172A] text-white py-14">
        <div className="container">
          <h1 className="text-white text-3xl md:text-4xl font-semibold mb-4">Our Services</h1>
          <p className="text-[#94A3B8] max-w-2xl">
            Comprehensive support for every stage of sourcing from China. Select the services that fit your needs.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div key={idx} className="card">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-14 h-14 bg-[#F1F5F9] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="text-[#0EA5E9]" size={26} />
                    </div>
                    <div className="flex-1">
                      <h2 className="font-semibold text-xl mb-2">{service.title}</h2>
                      <p className="text-[#475569] mb-4">{service.desc}</p>
                      <ul className="grid md:grid-cols-2 gap-x-8 gap-y-1.5 text-sm text-[#475569]">
                        {service.details.map((detail, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2">
                            <span className="text-[#0EA5E9] mt-1">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <p className="text-[#475569] mb-4">Ready to discuss your sourcing requirements?</p>
            <Link to="/contact" className="btn-primary">Get a Free Quote</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
