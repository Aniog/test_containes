import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ClipboardCheck, Eye, TrendingUp, Truck, FileCheck } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: 'Supplier Sourcing',
      desc: 'We identify manufacturers that match your product specifications, quality requirements, and volume needs. Our database includes verified suppliers across major industrial regions.',
      details: ['Product specification matching', 'Supplier shortlisting', 'Initial capability assessment', 'Sample coordination'],
    },
    {
      icon: ClipboardCheck,
      title: 'Factory Verification',
      desc: 'On-site audits confirm that factories are legitimate, properly licensed, and have the capacity and equipment to fulfill your orders.',
      details: ['Business license verification', 'Production capacity assessment', 'Equipment and facility review', 'Compliance documentation'],
    },
    {
      icon: Eye,
      title: 'Quality Inspection',
      desc: 'Our inspectors conduct pre-shipment, in-process, and container loading inspections to verify product quality before goods leave the factory.',
      details: ['Pre-shipment inspection', 'During-production checks', 'Container loading supervision', 'Detailed inspection reports'],
    },
    {
      icon: TrendingUp,
      title: 'Production Monitoring',
      desc: 'Regular factory visits and progress reports keep you informed about manufacturing status, timeline adherence, and any issues that arise.',
      details: ['Weekly progress updates', 'Milestone verification', 'Issue identification and resolution', 'Timeline management'],
    },
    {
      icon: Truck,
      title: 'Logistics Coordination',
      desc: 'We manage freight booking, coordinate with forwarders, prepare export documentation, and track shipments until delivery.',
      details: ['Freight rate negotiation', 'Export documentation', 'Customs clearance support', 'Delivery tracking'],
    },
    {
      icon: FileCheck,
      title: 'Compliance Support',
      desc: 'Guidance on product certifications, labeling requirements, and import regulations relevant to your destination market.',
      details: ['Certification requirements', 'Labeling compliance', 'Import regulation guidance', 'Documentation review'],
    },
  ];

  return (
    <div className="pt-20">
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-semibold mb-4">Our Services</h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            Comprehensive support for every stage of the sourcing process.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-8 border border-slate-200 rounded-xl">
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-6">
                <service.icon className="w-6 h-6 text-blue-800" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 mb-6">{service.desc}</p>
              <ul className="space-y-2">
                {service.details.map((detail, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                    <span className="w-1.5 h-1.5 bg-blue-800 rounded-full" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">Need a Custom Service Package?</h2>
          <p className="text-slate-600 mb-8">
            We can tailor our services to match your specific sourcing requirements and budget.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 bg-blue-800 text-white font-medium rounded-lg hover:bg-blue-900 transition-colors"
          >
            Discuss Your Project
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
