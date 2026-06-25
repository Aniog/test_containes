import React from 'react';
import { Search, ShieldAlert, BadgeCheck, ClipboardList, Send } from 'lucide-react';

const Services = () => {
  const serviceList = [
    {
      title: "Supplier Identification",
      desc: "We scan thousands of suppliers through B2B platforms, trade fairs, and our internal database to find the perfect match for your requirements.",
      icon: Search,
      points: ["Verification of Business License", "Background & Reputation Check", "Financial Stability Assessment"]
    },
    {
      title: "Factory Audits",
      desc: "Our auditors visit factories to evaluate their production capabilities, quality systems, and ethical standards before you place an order.",
      icon: BadgeCheck,
      points: ["QMS Audit (ISO 9001)", "Social Compliance (BSCI/SMETA)", "Technical & Capacity Evaluation"]
    },
    {
      title: "Quality Control",
      desc: "Customizable inspection plans to ensure products meet your quality standards before leaving the factory floor.",
      icon: ShieldAlert,
      points: ["Initial Production Check (IPC)", "During Production Check (DUPRO)", "Pre-Shipment Inspection (PSI)"]
    },
    {
      title: "Order Fulfillment",
      desc: "Dedicated account managers bridge the communication gap, following up on every detail from sampling to final mass production.",
      icon: ClipboardList,
      points: ["Sample Development", "Contract Negotiation", "Progress Reporting"]
    },
    {
      title: "Shipping & Logistics",
      desc: "Efficient freight coordination to ensure your goods arrive safely and on time, with all necessary export and import paperwork.",
      icon: Send,
      points: ["Freight Rate Benchmarking", "Consolidation Services", "Customs Clearance Support"]
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-slate-50 py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 underline decoration-yellow-500 decoration-4 underline-offset-8">
            Professional Sourcing Services
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Eliminate risk and optimize your supply chain with our end-to-end manufacturing and sourcing solutions in China.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-12">
              {serviceList.slice(0, 3).map((service, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-yellow-500 shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-slate-900">{service.title}</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed italic">{service.desc}</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                       {service.points.map((p, j) => (
                         <li key={j} className="flex items-center text-sm text-slate-500">
                           <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2"></span>
                           {p}
                         </li>
                       ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-12">
              <div className="bg-slate-900 p-8 rounded-3xl text-white mb-12">
                 <h4 className="text-xl font-bold mb-4 text-yellow-500">Why Professional Service Matters</h4>
                 <p className="text-slate-300 text-sm italic mb-6">"Most sourcing mistakes happen in the 'Gray Space'—the assumptions made between what you think you ordered and what the factory understands they are making."</p>
                 <div className="space-y-4">
                    <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
                      <span className="block text-yellow-500 font-bold text-lg">15% - 30%</span>
                      <span className="text-xs text-slate-400">Typical cost savings when sourcing through local experts vs. online B2B platforms alone.</span>
                    </div>
                 </div>
              </div>
              {serviceList.slice(3).map((service, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-yellow-500 shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-slate-900">{service.title}</h3>
                    <p className="text-slate-600 mb-4 leading-relaxed italic">{service.desc}</p>
                    <ul className="grid grid-cols-1 gap-x-4 gap-y-2">
                       {service.points.map((p, j) => (
                         <li key={j} className="flex items-center text-sm text-slate-500">
                           <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2"></span>
                           {p}
                         </li>
                       ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Service Image Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col lg:row items-center gap-12 bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100">
              <div className="lg:w-1/2">
                 <img 
                    data-strk-img-id="manufacturing-process-visual"
                    data-strk-img="modern electronic high-precision manufacturing factory line china [hero-title]"
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                    alt="Precision Manufacturing"
                 />
              </div>
              <div className="lg:w-1/2 p-8 lg:p-16">
                 <h3 className="text-3xl font-bold text-slate-900 mb-6">Uncompromising Quality Assurance</h3>
                 <p className="text-slate-600 mb-8 leading-relaxed">
                   We don't just 'inspect'—we engineer quality from the ground up. By visiting factories before the first unit is produced, we help you set clear standards that the manufacturer must follow.
                 </p>
                 <div className="grid grid-cols-2 gap-6">
                    <div>
                       <div className="text-2xl font-bold text-slate-900">48-Hour</div>
                       <div className="text-xs text-slate-500 uppercase">Inspection Report Turnaround</div>
                    </div>
                    <div>
                       <div className="text-2xl font-bold text-slate-900">100%</div>
                       <div className="text-xs text-slate-500 uppercase">Independent & Transparent</div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Services;