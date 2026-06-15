import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Search, Shield, CheckSquare, Truck, Package, Factory, Target, MessageSquare } from 'lucide-react';

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const detailedServices = [
    {
      id: 'sourcing',
      title: 'Global Sourcing & Procurement',
      subtitle: 'Identify high-quality suppliers that fit your business model.',
      description: 'Our team conducts deep market research to find manufacturers, not just traders. We evaluate their reputation, financial stability, and export history to ensure you build a sustainable supply chain.',
      features: ['Supplier identification', 'Price negotiation', 'Niche product research', 'Sample consolidation'],
      icon: Search,
      imgTag: 'professional sourcing agent evaluating samples'
    },
    {
      id: 'audit',
      title: 'Factory Audit & Verification',
      subtitle: 'Know who you are dealing with before you commit.',
      description: 'Physical on-site audits to verify factory claims. We check business licenses, production capacity, machine condition, and social compliance (BSCI, SEDEX).',
      features: ['Legal verification', 'ISO compliance check', 'Capacity assessment', 'On-site video verification'],
      icon: Factory,
      imgTag: 'factory audit inspector checking production line'
    },
    {
      id: 'qc',
      title: 'Quality Control Inspection',
      subtitle: 'Your quality standards, strictly enforced.',
      description: 'We perform rigorous inspections at your specified tolerance levels (AQL). If products don\'t pass, they don\'t ship. We provide detailed reports with photos and videos.',
      features: ['Initial production check', 'Mid-production inspection', 'Pre-shipment (Final) inspection', 'Container loading supervision'],
      icon: CheckSquare,
      imgTag: 'QC inspector measuring product dimensions carefully'
    },
    {
      id: 'logistics',
      title: 'Logistics & Door-to-Door Shipping',
      subtitle: 'Seamless transport from China to your warehouse.',
      description: 'We handle the headache of international shipping. Whether it is sea freight (FCL/LCL), air cargo, or express courier, we coordinate the best rates and manage all customs clearance.',
      features: ['FCL/LCL sea freight', 'Air cargo & Express', 'DDP shipping (Duty Paid)', 'Amazon FBA preparation'],
      icon: Truck,
      imgTag: 'shipping container being loaded at port'
    }
  ];

  return (
    <div ref={containerRef} className="bg-white">
      {/* Header */}
      <section className="bg-slate-900 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 id="services-title" className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">
            Professional China Sourcing Services
          </h1>
          <p id="services-subtitle" className="mt-6 text-xl text-slate-400 max-w-3xl mx-auto">
            Comprehensive solutions to help you mitigate risk and maximize profit when buying from China.
          </p>
        </div>
      </section>

      {/* Detailed Services list */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          {detailedServices.map((service, idx) => (
            <div key={service.id} className={`flex flex-col lg:items-center gap-12 lg:gap-20 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
              <div className="lg:w-1/2 space-y-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl text-blue-600 mb-4">
                  <service.icon className="h-8 w-8" />
                </div>
                <h2 id={`service-title-${service.id}`} className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
                  {service.title}
                </h2>
                <p id={`service-subtitle-${service.id}`} className="text-xl font-medium text-blue-600">
                  {service.subtitle}
                </p>
                <p id={`service-desc-${service.id}`} className="text-lg text-slate-600 leading-relaxed">
                  {service.description}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center text-slate-600 font-medium">
                      <CheckSquare className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                  <img
                    data-strk-img-id={`service-img-${service.id}`}
                    data-strk-img={`[service-title-${service.id}] ${service.imgTag}`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    className="w-full h-full object-cover"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={service.title}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing / Engagement Model */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Transparent Engagement Models</h2>
            <p className="mt-4 text-xl text-slate-500">We grow when you grow. Simple, honest pricing.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "One-Off Sourcing",
                desc: "Ideal for new projects or singular inventory needs.",
                price: "Project-Based Fee",
                features: ["Supplier sourcing report", "Sample management", "Initial negotiation", "Fixed price transparency"]
              },
              {
                title: "Ongoing Partnership",
                desc: "Ongoing support for established sellers and repeat orders.",
                price: "Commission % of Order",
                features: ["Continuous production follow-up", "Ongoing QC inspections", "Logistics coordination", "Account manager support"]
              },
              {
                title: "Specialized Audit/QC",
                desc: "Standalone inspection services for existing suppliers.",
                price: "Daily Rate + Expenses",
                features: ["Detailed inspection reports", "Fault analysis", "Corrective action plans", "Video/Photo documentation"]
              }
            ].map((plan, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-shadow flex flex-col">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.title}</h3>
                <p className="text-slate-500 mb-6 flex-grow">{plan.desc}</p>
                <div className="text-3xl font-extrabold text-blue-600 mb-6">{plan.price}</div>
                <div className="space-y-4 mb-8">
                  {plan.features.map((f, fi) => (
                    <div key={fi} className="flex items-start text-sm font-medium text-slate-600">
                      <Target className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>
                <a 
                  href="/contact" 
                  className="w-full py-4 text-center bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors"
                >
                  Request Detailed Pricing
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
