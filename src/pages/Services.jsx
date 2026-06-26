import React from 'react';
import { Search, Shield, CheckCircle, Truck, Info, Settings, FileText, BarChart } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Full Sourcing & Procurement',
      desc: 'We manage the entire process, from finding the right supplier to final delivery. Ideal for businesses looking for a turn-key solution.',
      features: ['Supplier identification', 'Price negotiation', 'Sample consolidation', 'Contract management'],
      icon: Search
    },
    {
      title: 'Factory Audit & Verification',
      desc: 'Don’t take risks with unverified factories. We visit the site to check their legal status, production capabilities, and worker conditions.',
      features: ['Background check', 'Production capacity audit', 'Quality management system check', 'Social compliance'],
      icon: Shield
    },
    {
      title: 'Pre-Shipment Inspection (QC)',
      desc: 'Our inspectors ensure your products meet your specifications before they leave the factory floor.',
      features: ['AQL sampling standards', 'Defect classification', 'Functional testing', 'Packaging verification'],
      icon: CheckCircle
    },
    {
      title: 'Shipping & Logistics Support',
      desc: 'We coordinate the most efficient shipping routes and handle all the paperwork for hassle-free delivery.',
      features: ['Freight consolidation', 'Customs documentation', 'Sea/Air freight booking', 'Door-to-door delivery'],
      icon: Truck
    }
  ];

  return (
    <div className="animate-in fade-in duration-500">
      <section className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Our Services</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Comprehensive sourcing and supply chain solutions tailored to your business needs in China.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16">
            {services.map((item, index) => (
              <div key={index} className="flex flex-col sm:flex-row gap-8 items-start p-8 rounded-2xl border border-slate-100 hover:border-brand-blue/20 hover:shadow-lg transition-all">
                <div className="bg-brand-blue/5 p-4 rounded-xl text-brand-blue shrink-0">
                  <item.icon size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">{item.desc}</p>
                  <ul className="space-y-3">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                        <CheckCircle size={16} className="text-green-500" /> {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Services */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Additional Support</h2>
            <p className="text-slate-600">Extra services to help you scale your business seamlessly.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: FileText, title: 'Contract Consulting', desc: 'Ensuring your purchase agreements are enforceable in China.' },
              { icon: Settings, title: 'Product Development', desc: 'Helping you turn CAD designs into mass-produced reality.' },
              { icon: BarChart, title: 'Supply Chain Optimization', desc: 'Reducing costs and lead times through better logistics.' }
            ].map((extra, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                <extra.icon className="text-brand-orange mb-4" size={24} />
                <h4 className="text-lg font-bold text-slate-900 mb-2">{extra.title}</h4>
                <p className="text-sm text-slate-600">{extra.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
