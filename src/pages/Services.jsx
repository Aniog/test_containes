import React from 'react';
import { Users, Award, Clock, Truck, FileCheck, Search } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: 'Supplier Identification',
      desc: 'We identify potential suppliers based on your product specifications, quality requirements, and volume needs.',
      details: ['Product specification matching', 'Supplier database search', 'Initial capability screening', 'Shortlist presentation']
    },
    {
      icon: Users,
      title: 'Supplier Verification',
      desc: 'Comprehensive factory audits and background checks to confirm legitimacy and capability.',
      details: ['Business license verification', 'On-site factory audit', 'Production capacity assessment', 'Quality system review']
    },
    {
      icon: Award,
      title: 'Quality Inspection',
      desc: 'Independent quality control at multiple production stages to ensure specifications are met.',
      details: ['Pre-production inspection', 'In-process quality checks', 'Pre-shipment inspection', 'Loading supervision']
    },
    {
      icon: Clock,
      title: 'Production Monitoring',
      desc: 'Regular progress updates and milestone tracking throughout the manufacturing process.',
      details: ['Weekly production reports', 'Photo documentation', 'Timeline tracking', 'Issue escalation']
    },
    {
      icon: FileCheck,
      title: 'Documentation Support',
      desc: 'Assistance with export documentation, certifications, and compliance requirements.',
      details: ['Commercial invoice review', 'Packing list verification', 'Certificate coordination', 'Regulatory guidance']
    },
    {
      icon: Truck,
      title: 'Shipping Coordination',
      desc: 'Logistics planning and coordination with freight forwarders for timely delivery.',
      details: ['Freight quote comparison', 'Booking assistance', 'Customs documentation', 'Delivery tracking']
    }
  ];

  return (
    <div>
      <section className="bg-slate-900 text-white py-16">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4 text-white">Our Services</h1>
          <p className="text-xl text-slate-300 max-w-2xl">Comprehensive sourcing support from supplier discovery through delivery.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="card">
                <service.icon className="text-blue-800 mb-4" size={36} />
                <h3 className="font-semibold text-xl mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-4">{service.desc}</p>
                <ul className="space-y-2 text-sm text-slate-600">
                  {service.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex gap-2">
                      <span className="text-emerald-600 mt-1">•</span> {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container text-center">
          <h2 className="section-title">Need a Custom Service Package?</h2>
          <p className="text-slate-600 mb-6 max-w-xl mx-auto">We tailor our services to match your specific sourcing requirements and project scope.</p>
          <a href="/contact" className="btn-primary">Discuss Your Needs</a>
        </div>
      </section>
    </div>
  );
};

export default Services;