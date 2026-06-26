import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Supplier Verification',
      desc: 'Comprehensive assessment of potential suppliers before you commit.',
      items: [
        'On-site factory audits and capability reviews',
        'Business license and registration verification',
        'Financial stability and trade history checks',
        'Equipment and production capacity assessment',
        'Management and quality system evaluation',
      ],
    },
    {
      title: 'Quality Inspection',
      desc: 'Independent verification that products meet your specifications.',
      items: [
        'Pre-production sample inspection',
        'During-production quality monitoring',
        'Pre-shipment final inspection',
        'Container loading supervision',
        'Detailed inspection reports with photos',
      ],
    },
    {
      title: 'Production Monitoring',
      desc: 'Visibility into order progress from start to finish.',
      items: [
        'Order confirmation and timeline setup',
        'Weekly production status updates',
        'Milestone tracking and alerts',
        'Issue identification and resolution support',
        'Photo and video documentation',
      ],
    },
    {
      title: 'Shipping Coordination',
      desc: 'Logistics support to ensure smooth delivery.',
      items: [
        'Freight quote comparison and booking',
        'Export documentation preparation',
        'Customs clearance coordination',
        'Shipping schedule monitoring',
        'Delivery confirmation and records',
      ],
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-semibold text-[#1E3A5F] mb-4">Our Services</h1>
        <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
          Practical support at each stage of the sourcing process.
        </p>
      </div>

      <div className="space-y-16">
        {services.map((service, i) => (
          <div key={i} className="border-l-4 border-[#1E3A5F] pl-8">
            <h2 className="text-2xl font-semibold text-[#1E3A5F] mb-3">{service.title}</h2>
            <p className="text-[#6B7280] mb-6 text-lg">{service.desc}</p>
            <ul className="space-y-3">
              {service.items.map((item, j) => (
                <li key={j} className="flex items-start gap-3 text-[#1F2937]">
                  <CheckCircle className="w-5 h-5 text-[#059669] mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center bg-[#F8FAFC] p-10 rounded-xl">
        <h3 className="text-xl font-semibold mb-3">Need a customized service package?</h3>
        <p className="text-[#6B7280] mb-6">We tailor our approach based on your product type, order volume, and risk tolerance.</p>
        <Link to="/contact" className="inline-flex items-center gap-2 bg-[#1E3A5F] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#162d4a] transition-colors">
          Discuss Your Requirements <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default Services;
