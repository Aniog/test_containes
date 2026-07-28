import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    { title: 'Supplier Identification', desc: 'We identify and shortlist manufacturers that match your product specifications, quality standards, and volume requirements.' },
    { title: 'Factory Verification', desc: 'Our team conducts on-site audits to verify factory legitimacy, production capacity, quality systems, and compliance status.' },
    { title: 'Quality Inspection', desc: 'Pre-production, in-process, and pre-shipment inspections ensure products meet your specifications before they leave the factory.' },
    { title: 'Production Monitoring', desc: 'Regular progress updates and issue resolution throughout the manufacturing cycle to keep projects on schedule.' },
    { title: 'Logistics Coordination', desc: 'We manage freight booking, customs documentation, and coordinate with forwarders to ensure timely delivery.' },
    { title: 'Ongoing Supplier Management', desc: 'Maintain relationships with verified suppliers and support repeat orders with consistent quality oversight.' },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold text-[#1F2937] mb-4">Our Services</h1>
        <p className="text-lg text-[#4B5563]">End-to-end support for sourcing from China.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {services.map((service, index) => (
          <div key={index} className="p-8 border border-slate-200 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-[#1F2937]">{service.title}</h3>
            <p className="text-[#4B5563]">{service.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-[#F3F4F6] p-8 rounded-lg text-center">
        <h2 className="text-2xl font-semibold mb-3 text-[#1F2937]">Need a customized solution?</h2>
        <p className="text-[#4B5563] mb-6">We tailor our services to your specific sourcing requirements.</p>
        <Link to="/contact" className="inline-block px-6 py-2.5 bg-[#1E3A5F] text-white font-medium rounded hover:bg-[#2E5A8B] transition-colors">Request a Consultation</Link>
      </div>
    </div>
  );
};

export default Services;
