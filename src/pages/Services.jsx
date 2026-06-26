import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Supplier Sourcing',
      desc: 'We identify and qualify suppliers that match your specific product requirements, quality standards, and budget parameters.',
      details: ['Product specification analysis', 'Supplier database search', 'Initial capability screening', 'Sample coordination'],
    },
    {
      title: 'Factory Verification',
      desc: 'On-site audits and comprehensive background checks to confirm supplier legitimacy and production capabilities.',
      details: ['Business license verification', 'On-site factory inspection', 'Equipment and capacity assessment', 'Reference checks'],
    },
    {
      title: 'Quality Inspection',
      desc: 'Systematic quality control at multiple production stages to ensure products meet your specifications.',
      details: ['Pre-production inspection', 'In-process quality checks', 'Pre-shipment inspection', 'Loading supervision'],
    },
    {
      title: 'Production Monitoring',
      desc: 'Regular progress tracking and timeline management to keep your orders on schedule.',
      details: ['Production schedule review', 'Weekly progress reports', 'Issue identification and resolution', 'Timeline adjustments'],
    },
    {
      title: 'Logistics Coordination',
      desc: 'End-to-end shipping management from factory to your destination, including customs clearance.',
      details: ['Freight forwarding', 'Customs documentation', 'Insurance coordination', 'Final delivery tracking'],
    },
  ];

  return (
    <div>
      <section className="bg-[#1a365d] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-semibold mb-4">Our Services</h1>
          <p className="text-xl text-[#a0aec0]">Comprehensive support for every stage of your sourcing journey</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-12">
            {services.map((service, index) => (
              <div key={index} className="grid md:grid-cols-3 gap-8 pb-12 border-b border-[#e2e8f0] last:border-0">
                <div>
                  <h2 className="text-2xl font-semibold mb-3">{service.title}</h2>
                </div>
                <div className="md:col-span-2">
                  <p className="text-[#4a5568] mb-6">{service.desc}</p>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-[#4a5568]">
                        <span className="w-1.5 h-1.5 bg-[#3182ce] rounded-full" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f7fafc]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">Need a Custom Solution?</h2>
          <p className="text-[#4a5568] mb-6">We can tailor our services to match your specific sourcing requirements.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-[#3182ce] text-white px-6 py-3 rounded-md font-medium hover:bg-[#2b6cb0]">
            Discuss Your Project <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
