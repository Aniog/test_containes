import React, { useEffect, useRef } from 'react';
import { Search, ShieldCheck, ClipboardCheck, Truck, Factory, BarChart3, Globe, Zap, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const serviceDetails = [
  {
    icon: <Search className="w-12 h-12 text-blue-900" />,
    title: "Supplier Sourcing",
    features: ["Direct Factory Match", "Price Negotiation", "Sample Collection", "Cost Breakdown Analysis"],
    desc: "We don't just search on Alibaba. We use our local network to find factories that don't advertise globally, getting you better prices and higher reliability."
  },
  {
    icon: <ShieldCheck className="w-12 h-12 text-blue-900" />,
    title: "Factory Audits",
    features: ["Technical Audit", "Social Compliance", "Environmental Audit", "Quality System Review"],
    desc: "Before you commit, our auditors visit the factory to verify their true production capacity, equipment condition, and labor practices."
  },
  {
    icon: <ClipboardCheck className="w-12 h-12 text-blue-900" />,
    title: "Quality Control",
    features: ["Initial Production Check", "During Production Check", "Pre-Shipment Inspection", "Container Loading Supervise"],
    desc: "Our AQL-based inspections ensure your products meet every specification. We act as your eyes in the factory during the entire production run."
  },
  {
    icon: <Truck className="w-12 h-12 text-blue-900" />,
    title: "Logistics & Shipping",
    features: ["Warehousing", "Consolidation", "Customs Clearance", "LCL & FCL Management"],
    desc: "We coordinate the most cost-effective shipping methods, handling all Chinese export documentation and ensuring smooth transit to your port."
  }
];

export default function Services() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div className="pt-24 pb-20" ref={containerRef}>
      <section className="bg-slate-900 py-24 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-900/20 -skew-x-12 transform translate-x-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-8">Comprehensive Sourcing Solutions</h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-10">
              We provide a complete end-to-end supply chain management service, allowing you to focus on selling while we handle the complexities of manufacturing in China.
            </p>
            <Link to="/contact" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block transition-all">
              Request Service Quote
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16">
            {serviceDetails.map((service, i) => (
              <div key={i} className={`flex flex-col lg:flex-row gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2 space-y-6">
                  <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl font-extrabold text-slate-900">{service.title}</h2>
                  <p className="text-xl text-slate-600 leading-relaxed">{service.desc}</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.features.map((feat, j) => (
                      <li key={j} className="flex items-center gap-2 text-slate-700 font-medium">
                        <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:w-1/2 w-full h-80 lg:h-[450px] bg-slate-100 rounded-3xl overflow-hidden shadow-xl border border-slate-100">
                  <img 
                    data-strk-img-id={`svc-img-${i}`}
                    data-strk-img={`${service.title} factory professional`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    alt={service.title}
                    className="w-full h-full object-cover"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Why Manufacturers Prefer Working with SSourcing</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Our professional approach ensures factories take your orders seriously, leading to better quality and priority production.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm space-y-4">
              <Globe className="w-10 h-10 text-blue-900" />
              <h3 className="text-xl font-bold">Native Representation</h3>
              <p className="text-slate-600">Local language and culture mastery means no misunderstandings and faster resolution of production issues.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm space-y-4">
              <Zap className="w-10 h-10 text-blue-900" />
              <h3 className="text-xl font-bold">Standardized QC</h3>
              <p className="text-slate-600">Our inspection reports follow international standards (AQL), giving you a clear technical view of your order quality.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm space-y-4">
              <Users className="w-10 h-10 text-blue-900" />
              <h3 className="text-xl font-bold">Dedicated Manager</h3>
              <p className="text-slate-600">You work with a single point of contact who understands your business goals and quality needs.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
