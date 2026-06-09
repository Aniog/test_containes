import React from 'react';
import { Search, Shield, CheckCircle, Truck, Package, MessageSquare } from 'lucide-react';

const PageHeader = ({ title, subtitle, bgId }) => (
  <section className="relative py-20 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <div 
        className="w-full h-full bg-slate-900"
        data-strk-bg-id={bgId}
        data-strk-bg={title + " " + subtitle}
        data-strk-bg-ratio="21x9"
        data-strk-bg-width="1920"
      />
      <div className="absolute inset-0 bg-slate-900/70" />
    </div>
    <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
      <p className="text-xl text-slate-300 max-w-2xl mx-auto">{subtitle}</p>
    </div>
  </section>
);

const Services = () => {
  const services = [
    {
      id: 'sourcing',
      title: 'Product Sourcing',
      icon: Search,
      desc: 'We identify potential suppliers that meet your specific product, price, and quality requirements. We compare multiple quotes to find the best value.',
      features: ['Multiple Supplier Comparisons', 'Price Negotiation', 'Sample Acquisition']
    },
    {
      id: 'audit',
      title: 'Factory Audits',
      icon: Shield,
      desc: 'Our inspectors visit factories to verify they are legitimate, have the necessary licenses, and possess the capacity to produce your order.',
      features: ['On-site verification', 'Business License Check', 'Social Compliance']
    },
    {
      id: 'qc',
      title: 'Quality Control',
      icon: CheckCircle,
      desc: 'We perform rigorous inspections at various stages: Initial Production Check, During Production Inspection, and Pre-Shipment Inspection.',
      features: ['AQL Standards', 'Defect Reporting', 'Loading Supervision']
    },
    {
      id: 'logistics',
      title: 'Shipping Coordination',
      icon: Truck,
      desc: 'We handle the complexity of international logistics, from warehousing in China to customs clearance and final delivery.',
      features: ['Express/Sea/Air Freight', 'Customs Documentation', 'Consolidation']
    }
  ];

  return (
    <div>
      <PageHeader 
        title="Professional Sourcing Services" 
        subtitle="Minimize risk and maximize efficiency with our on-the-ground support in China." 
        bgId="services-header-bg"
      />
      
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {services.map((service, index) => (
              <div key={service.id} className={`flex flex-col md:flex-row gap-8 items-start p-8 rounded-2xl border border-slate-100 bg-slate-50/50 ${index % 2 === 0 ? 'bg-white shadow-sm' : ''}`}>
                <div className="w-16 h-16 bg-blue-600 text-white rounded-xl flex-shrink-0 flex items-center justify-center">
                  <service.icon className="w-10 h-10" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h2>
                  <p className="text-slate-600 mb-6 leading-relaxed">{service.desc}</p>
                  <ul className="space-y-3">
                    {service.features.map(f => (
                      <li key={f} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
          <MessageSquare className="w-12 h-12 text-blue-400 mb-6" />
          <h2 className="text-3xl font-bold mb-6 text-white">Need a custom sourcing solution?</h2>
          <p className="text-lg text-slate-400 max-w-2xl mb-10">We tailor our services to your specific business model, whether you are an Amazon FBA seller, a medium-sized retailer, or a large industrial buyer.</p>
          <a href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-bold transition-all">
            Discuss Your Needs
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
