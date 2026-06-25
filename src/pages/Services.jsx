import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, ClipboardCheck, Factory, Truck, Users, FileCheck } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: 'Supplier Identification & Sourcing',
      desc: 'We identify manufacturers matching your product specifications, quality requirements, and commercial terms. Our database covers verified suppliers across major industrial regions in China.',
      details: ['Product specification matching', 'Supplier database screening', 'Initial capability assessment', 'Competitive landscape analysis'],
    },
    {
      icon: Factory,
      title: 'Factory Verification & Audits',
      desc: 'On-site verification confirms that suppliers are legitimate businesses with adequate production capacity and quality systems. We assess both new and existing suppliers.',
      details: ['Business license verification', 'Production capacity evaluation', 'Quality management review', 'Social compliance checks'],
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Inspection Services',
      desc: 'Independent inspection at various production stages helps identify issues before shipment. We follow AQL standards and client-specific inspection protocols.',
      details: ['Pre-production inspection', 'During-production monitoring', 'Pre-shipment inspection', 'Container loading supervision'],
    },
    {
      icon: Users,
      title: 'Production Coordination',
      desc: 'We maintain regular communication with suppliers throughout production, providing progress updates and addressing issues as they arise.',
      details: ['Order timeline management', 'Progress reporting', 'Issue escalation', 'Sample coordination'],
    },
    {
      icon: Truck,
      title: 'Logistics & Shipping Support',
      desc: 'We coordinate freight arrangements, documentation, and customs requirements to ensure smooth delivery to your destination.',
      details: ['Freight quotation coordination', 'Export documentation', 'Customs clearance support', 'Delivery tracking'],
    },
    {
      icon: FileCheck,
      title: 'Compliance & Documentation',
      desc: 'We assist with product compliance requirements, certifications, and the documentation needed for import into your market.',
      details: ['Product certification guidance', 'Test report coordination', 'Import documentation review', 'Regulatory requirement research'],
    },
  ];

  return (
    <div>
      <section className="bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-[1280px] mx-auto px-6 py-16">
          <h1 className="text-4xl font-semibold tracking-tight mb-4">Our Services</h1>
          <p className="text-lg text-[#475569] max-w-2xl">Comprehensive sourcing support from supplier discovery through delivery coordination.</p>
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto px-6 py-16">
        <div className="space-y-16">
          {services.map((service, idx) => (
            <div key={idx} className="grid md:grid-cols-12 gap-8 md:gap-12">
              <div className="md:col-span-5">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#EFF6FF] rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-[#1E40AF]" />
                  </div>
                  <h2 className="text-2xl font-semibold tracking-tight">{service.title}</h2>
                </div>
              </div>
              <div className="md:col-span-7">
                <p className="text-[#475569] mb-6 leading-relaxed">{service.desc}</p>
                <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2 text-sm">
                  {service.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2 text-[#475569]">
                      <span className="text-[#1E40AF] mt-1">•</span> {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#0F172A] text-white">
        <div className="max-w-[1280px] mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to discuss your sourcing needs?</h2>
          <p className="text-[#94A3B8] mb-8 max-w-md mx-auto">Contact us for a preliminary assessment of your project requirements.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-[#0F172A] px-8 py-3 rounded-lg text-sm font-medium hover:bg-[#F1F5F9] transition-colors">
            Get a Free Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
