import React, { useEffect, useRef } from 'react';
import { Search, Factory, ShieldCheck, Settings, Ship, Box, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const detailedServices = [
    {
      id: "sourcing",
      title: "Product Sourcing",
      desc: "Our sourcing team identifies at least 5-10 qualified manufacturers based on your specific requirements. We don't just search Alibaba; we dive deep into local industrial clusters and our private database.",
      features: ["Supplier background checks", "Price negotiation", "Sample collection", "Technical analysis"],
      img: "chinese factory production line workers"
    },
    {
      id: "verification",
      title: "Factory Verification",
      desc: "Before you wire any money, we visit the factory on-site. We verify their legal existence, production capacity, machine condition, and previous export experience.",
      features: ["Business license verification", "Social compliance audit", "Internal QC systems check", "Production capacity assessment"],
      img: "professional inspector checking factory documents"
    },
    {
      id: "qc",
      title: "Quality Control",
      desc: "We perform rigorous inspections at different stages of production. Our reports are detailed with photos and videos, giving you the final say before shipment.",
      features: ["Pre-production inspection", "During production check", "Pre-shipment inspection (PSI)", "Container loading supervision"],
      img: "quality control inspector measuring electronic product"
    },
    {
      id: "production",
      title: "Production Management",
      desc: "We act as your local office. We follow up with the factory weekly, ensuring deadlines are met and any issues are resolved before they become delays.",
      features: ["Timeline tracking", "Material verification", "Conflict resolution", "Real-time updates"],
      img: "project manager in hard hat at manufacturing plant"
    },
    {
      id: "shipping",
      title: "Shipping & Logistics",
      desc: "Navigating international shipping is complex. We handle everything from documentation to final delivery, ensuring your goods arrive safely and cost-effectively.",
      features: ["Freight forwarding", "Customs documentation", "LCL & FCL coordination", "Marine insurance"],
      img: "cargo container ship at port sunset"
    }
  ];

  return (
    <div ref={containerRef} className="bg-white">
      {/* Header */}
      <section className="bg-blue-900 py-20 text-white relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none"
          data-strk-bg-id="services-header-bg"
          data-strk-bg="factory warehouse worker quality control"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="container mx-auto px-4 relative z-10">
          <h1 id="services-page-title" className="text-4xl md:text-5xl font-bold mb-6 text-center">Comprehensive Sourcing Services</h1>
          <p className="text-xl text-slate-300 text-center max-w-3xl mx-auto">
            Everything you need to successfully source, manufacture, and ship products from China.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-32">
            {detailedServices.map((service, idx) => (
              <div key={service.id} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}>
                <div className="lg:w-1/2">
                  <div className="inline-block p-4 bg-amber-50 rounded-xl mb-6">
                    {idx === 0 && <Search className="text-amber-600" size={32} />}
                    {idx === 1 && <Factory className="text-amber-600" size={32} />}
                    {idx === 2 && <ShieldCheck className="text-amber-600" size={32} />}
                    {idx === 3 && <Settings className="text-amber-600" size={32} />}
                    {idx === 4 && <Ship className="text-amber-600" size={32} />}
                  </div>
                  <h2 id={`service-h-${service.id}`} className="text-3xl font-bold text-blue-900 mb-6">{service.title}</h2>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed italic">
                    {service.desc}
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-center gap-3 text-slate-700">
                        <CheckCircle2 className="text-green-500 shrink-0" size={20} />
                        <span className="font-medium text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-10">
                    <Link to="/contact" className="inline-flex items-center gap-2 text-amber-600 font-bold hover:gap-4 transition-all">
                      Inquire about this service <ArrowRight size={20} />
                    </Link>
                  </div>
                </div>
                <div className="lg:w-1/2 w-full">
                  <div className="relative h-80 md:h-[450px] rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      data-strk-img-id={`service-img-${service.id}`}
                      data-strk-img={`[service-h-${service.id}] ${service.img}`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Models */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 id="pricing-title" className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">Service Fee Structures</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">We offer flexible pricing to suit different business sizes and sourcing needs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "One-Time Sourcing", price: "From $299", desc: "Best for startups or those testing a new product idea. Includes supplier research and verification." },
              { title: "Sourcing Commission", price: "3% - 7%", desc: "Best for ongoing production management. We handle everything from sampling to shipping." },
              { title: "Hourly/Daily Rate", price: "Custom", desc: "Best for specific on-site factory audits or quality inspections across different provinces." }
            ].map((plan, idx) => (
              <div key={idx} className="bg-white p-10 rounded-2xl border border-slate-200 shadow-sm text-center">
                <h4 className="text-xl font-bold text-blue-900 mb-2">{plan.title}</h4>
                <div className="text-3xl font-bold text-amber-600 mb-4">{plan.price}</div>
                <p className="text-slate-600 mb-8">{plan.desc}</p>
                <Link to="/contact" className="block w-full text-center py-3 border-2 border-blue-900 text-blue-900 font-bold rounded-lg hover:bg-blue-900 hover:text-white transition-all">
                  Get Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-blue-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Need a Custom Solution?</h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">Tell us about your project and we'll design a sourcing strategy that works for you.</p>
          <Link to="/contact" className="bg-amber-600 hover:bg-amber-700 text-white px-12 py-5 rounded-md font-bold text-lg inline-block transition-all transform hover:scale-105">
            Contact an Agent
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
