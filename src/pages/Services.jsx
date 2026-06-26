import React from 'react';
import { Search, ShieldCheck, Factory, Truck, CheckCircle2, Award, Zap, Users } from 'lucide-react';

const Services = () => {
  const serviceList = [
    {
      title: "Supplier Sourcing",
      icon: <Search className="w-10 h-10 text-blue-600" />,
      desc: "We scan the entire Chinese market to find suppliers that match your specific product standards, quality requirements, and target pricing.",
      details: ["Manufacturer background check", "Price negotiation", "Sample consolidation", "Market mapping"]
    },
    {
      title: "Factory Audits",
      icon: <Factory className="w-10 h-10 text-blue-600" />,
      desc: "Don't take risks with unverified factories. We conduct on-site audits to verify their equipment, production capacity, and legitimate operation.",
      details: ["On-site facility inspection", "Certification verification", "Social compliance audits", "Technical capability assessment"]
    },
    {
      title: "Quality Control",
      icon: <ShieldCheck className="w-10 h-10 text-blue-600" />,
      desc: "Our QC engineers implement strict inspection protocols based on international AQL standards to ensure every batch meets your specifications.",
      details: ["Initial production check", "During production inspection", "Pre-shipment inspection", "Container loading supervision"]
    },
    {
      title: "Amazon FBA Sourcing",
      icon: <Zap className="w-10 h-10 text-blue-600" />,
      desc: "Specialized services for E-commerce sellers. We handle FBA labeling, customized packaging, and compliance for Amazon fulfillment.",
      details: ["FNSKU labeling", "Carton marking", "Palletization", "Photography for listings"]
    },
    {
      title: "Shipping & Logistics",
      icon: <Truck className="w-10 h-10 text-blue-600" />,
      desc: "We coordinate with reliable freight forwarders to provide you with the best shipping rates and ensure smooth customs clearance.",
      details: ["Sea, Air, & Rail freight", "Customs documentation", "Warehousing", "Consolidation"]
    },
    {
      title: "Private Labeling (OEM/ODM)",
      icon: <Award className="w-10 h-10 text-blue-600" />,
      desc: "Launch your own brand with ease. We help manage custom branding, packaging design, and product modifications with manufacturers.",
      details: ["Custom mold development", "Logo & packaging design", "Prototyping", "Intellectual property advice"]
    }
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Sourcing Services</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Professional, end-to-end supply chain solutions tailored to your business needs in China.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {serviceList.map((service, idx) => (
              <div key={idx} className="flex flex-col h-full bg-white rounded-2xl border border-slate-100 p-8 shadow-sm hover:shadow-xl transition-all">
                <div className="mb-6 p-4 bg-blue-50 w-fit rounded-xl">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  {service.desc}
                </p>
                <div className="mt-auto pt-6 border-t border-slate-50">
                  <h4 className="font-bold text-sm uppercase tracking-wider text-slate-400 mb-4">What's Included:</h4>
                  <ul className="space-y-3">
                    {service.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-3 text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
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

      {/* Inspection Standards */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-3xl p-8 md:p-16 shadow-lg overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/5 -skew-x-12 translate-x-1/4" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4 block">Quality First</span>
                <h2 className="text-3xl font-bold text-slate-900 mb-6 leading-tight">Strict QC & Inspection Protocols</h2>
                <p className="text-slate-600 mb-8 text-lg">
                  We don't just "check" products. We perform rigorous scientific inspections based on your AQL requirements to ensure your brand reputation stays intact.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex gap-4">
                    <div className="bg-blue-600 text-white p-2 rounded-lg h-10 w-10 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold">AQL Standards</h4>
                      <p className="text-xs text-slate-500">Industry standard sampling & defect limits.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-blue-600 text-white p-2 rounded-lg h-10 w-10 flex items-center justify-center shrink-0">
                      <Users className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold">Expert Inspectors</h4>
                      <p className="text-xs text-slate-500">Trained professionals only.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                 <img 
                  data-strk-img-id="inspection-standard-img"
                  data-strk-img="Quality control professional inspecting electronics in factory"
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Quality Inspection"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

