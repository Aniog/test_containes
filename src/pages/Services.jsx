import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Supplier Identification',
      desc: 'We identify manufacturers that match your product specifications, quality standards, and budget requirements.',
      details: ['Product specification analysis', 'Supplier database search', 'Initial capability screening', 'Shortlist of 3-5 candidates'],
    },
    {
      title: 'Factory Verification',
      desc: 'On-site audits and background verification to confirm legitimacy, capacity, and compliance.',
      details: ['Business license verification', 'Production capacity assessment', 'Quality system review', 'Reference checks'],
    },
    {
      title: 'Quality Inspection',
      desc: 'Comprehensive quality control at multiple production stages to ensure specifications are met.',
      details: ['Pre-production inspection', 'In-process quality checks', 'Pre-shipment inspection', 'Sample testing coordination'],
    },
    {
      title: 'Production Monitoring',
      desc: 'Regular progress tracking and communication to keep your orders on schedule.',
      details: ['Production timeline tracking', 'Weekly progress reports', 'Issue identification and resolution', 'Photo and video documentation'],
    },
    {
      title: 'Logistics Coordination',
      desc: 'End-to-end shipping management from factory to your warehouse or distribution center.',
      details: ['Freight forwarder coordination', 'Export documentation', 'Customs clearance support', 'Delivery scheduling'],
    },
    {
      title: 'Ongoing Supplier Management',
      desc: 'Long-term relationship management for repeat orders and continuous improvement.',
      details: ['Supplier performance tracking', 'Price negotiation support', 'Quality improvement initiatives', 'New product development'],
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="text-center mb-14">
        <h1 className="text-5xl font-semibold text-[#0F172A] mb-4">Our Services</h1>
        <p className="text-xl text-[#64748B]">Comprehensive support throughout your sourcing journey</p>
      </div>

      <div className="space-y-10">
        {services.map((service, idx) => (
          <div key={idx} className="border border-[#E2E8F0] rounded-xl p-10">
            <h2 className="text-2xl font-semibold text-[#0F172A] mb-4">{service.title}</h2>
            <p className="text-lg text-[#64748B] mb-6">{service.desc}</p>
            <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2 text-[#1E293B]">
              {service.details.map((detail, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#1E40AF] mt-1">•</span> {detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
