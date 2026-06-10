import React from 'react';
import { Search, Shield, CheckCircle, Truck, FileCheck, Layers, PieChart, Users } from 'lucide-react';

const Services = () => {
  const allServices = [
    {
      title: "Product Sourcing",
      desc: "Our team searches across platforms like 1688, Alibaba, and direct factory networks to find manufacturers that meet your specific quality standards and target price.",
      icon: <Search className="w-12 h-12 text-blue-700" />,
      features: ["Price Negotiation", "Sample Consolidation", "Detailed RFQ Reporting"]
    },
    {
      title: "Factory Audit",
      desc: "Don't risk your money on 'trading companies' posing as factories. We conduct on-site visits to verify production capacity, social compliance, and certifications.",
      icon: <Shield className="w-12 h-12 text-blue-700" />,
      features: ["On-site Verification", "ISO/SEDEX Compliance Check", "Detailed Audit Report with Photos"]
    },
    {
      title: "Quality Control",
      desc: "Third-party inspections aren't enough. We embed QC checks during production (DUPRO) and perform a final 100% or AQL-based inspection before balance payment.",
      icon: <CheckCircle className="w-12 h-12 text-blue-700" />,
      features: ["Production Monitoring", "Defect Analysis", "Container Loading Supervision"]
    },
    {
      title: "Shipping & Logistics",
      desc: "We optimize your shipping by consolidating goods from multiple suppliers, managing customs documentation, and securing competitive freight rates.",
      icon: <Truck className="w-12 h-12 text-blue-700" />,
      features: ["LCL/FCL Coordination", "Customs Clearance Support", "Freight Forwarding Network"]
    }
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-slate-50 py-24 border-b border-slate-100">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">Our Sourcing Services</h1>
          <p className="text-lg text-slate-600">A complete end-to-end solution for international buyers looking to scale their production in China safely and efficiently.</p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-32">
            {allServices.map((service, idx) => (
              <div key={idx} className={`flex flex-col lg:flex-row items-center gap-16 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2">
                  <div className="mb-6">{service.icon}</div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">{service.title}</h2>
                  <p className="text-slate-600 text-lg mb-8 leading-relaxed">{service.desc}</p>
                  <ul className="space-y-4">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        <span className="text-slate-800 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:w-1/2 bg-slate-100 aspect-video rounded-3xl overflow-hidden shadow-inner flex items-center justify-center">
                  <img 
                    data-strk-img-id={`service-img-${idx}`}
                    data-strk-img={`${service.title} factory professional china world sourcing workshop`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Value */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Advanced Sourcing Support</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { title: "Graphic Design", desc: "Helping with packaging, logos, and manual design.", icon: <Layers className="w-8 h-8 text-blue-700" /> },
              { title: "Amazon FBA Prep", icon: <FileCheck className="w-8 h-8 text-blue-700" />, desc: "Labelling, poly-bagging, and compliance checks for Amazon sellers." },
              { title: "Market Research", icon: <PieChart className="w-8 h-8 text-blue-700" />, desc: "Analysis of market trends and price competitiveness." }
            ].map((ext, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <div className="inline-flex items-center justify-center mb-6">{ext.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{ext.title}</h3>
                <p className="text-slate-600 text-sm">{ext.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
EOF > /workspace/my-app/src/pages/Services.jsx
import React from 'react';
import { Search, Shield, CheckCircle, Truck, FileCheck, Layers, PieChart, Users } from 'lucide-react';

const Services = () => {
  const allServices = [
    {
      title: "Product Sourcing",
      desc: "Our team searches across platforms like 1688, Alibaba, and direct factory networks to find manufacturers that meet your specific quality standards and target price.",
      icon: <Search className="w-12 h-12 text-blue-700" />,
      features: ["Price Negotiation", "Sample Consolidation", "Detailed RFQ Reporting"]
    },
    {
      title: "Factory Audit",
      desc: "Don't risk your money on 'trading companies' posing as factories. We conduct on-site visits to verify production capacity, social compliance, and certifications.",
      icon: <Shield className="w-12 h-12 text-blue-700" />,
      features: ["On-site Verification", "ISO/SEDEX Compliance Check", "Detailed Audit Report with Photos"]
    },
    {
      title: "Quality Control",
      desc: "Third-party inspections aren't enough. We embed QC checks during production (DUPRO) and perform a final 100% or AQL-based inspection before balance payment.",
      icon: <CheckCircle className="w-12 h-12 text-blue-700" />,
      features: ["Production Monitoring", "Defect Analysis", "Container Loading Supervision"]
    },
    {
      title: "Shipping & Logistics",
      desc: "We optimize your shipping by consolidating goods from multiple suppliers, managing customs documentation, and securing competitive freight rates.",
      icon: <Truck className="w-12 h-12 text-blue-700" />,
      features: ["LCL/FCL Coordination", "Customs Clearance Support", "Freight Forwarding Network"]
    }
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-slate-50 py-24 border-b border-slate-100">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">Our Sourcing Services</h1>
          <p className="text-lg text-slate-600">A complete end-to-end solution for international buyers looking to scale their production in China safely and efficiently.</p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-32">
            {allServices.map((service, idx) => (
              <div key={idx} className={`flex flex-col lg:flex-row items-center gap-16 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2">
                  <div className="mb-6">{service.icon}</div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">{service.title}</h2>
                  <p className="text-slate-600 text-lg mb-8 leading-relaxed">{service.desc}</p>
                  <ul className="space-y-4">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        <span className="text-slate-800 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:w-1/2 bg-slate-100 aspect-video rounded-3xl overflow-hidden shadow-inner flex items-center justify-center">
                  <img 
                    data-strk-img-id={`service-img-${idx}`}
                    data-strk-img={`${service.title} factory professional china world sourcing workshop`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Value */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Advanced Sourcing Support</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { title: "Graphic Design", desc: "Helping with packaging, logos, and manual design.", icon: <Layers className="w-8 h-8 text-blue-700" /> },
              { title: "Amazon FBA Prep", icon: <FileCheck className="w-8 h-8 text-blue-700" />, desc: "Labelling, poly-bagging, and compliance checks for Amazon sellers." },
              { title: "Market Research", icon: <PieChart className="w-8 h-8 text-blue-700" />, desc: "Analysis of market trends and price competitiveness." }
            ].map((ext, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <div className="inline-flex items-center justify-center mb-6">{ext.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{ext.title}</h3>
                <p className="text-slate-600 text-sm">{ext.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
