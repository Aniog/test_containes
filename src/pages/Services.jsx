import React, { useEffect, useRef } from 'react';
import { ShieldCheck, Search, Users, ClipboardCheck, Truck, Scale, FileText, BarChart3, Clock, CheckCircle2 } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const coreServices = [
    {
      title: "Supplier Sourcing & Audits",
      desc: "We scan the market and filter suppliers based on capacity, financial stability, and quality credentials.",
      details: ["Factory on-site visits", "Deep background checks", "Risk assessment reports"],
      icon: Search,
      img: "China factory sourcing meeting"
    },
    {
      title: "Sample Development",
      desc: "Manage prototypes and sample revisions to ensure the final product matches your exact technical specifications.",
      details: ["Technical spec review", "Sample consolidation", "Iterative feedback management"],
      icon: FileText,
      img: "Product sample development electronics"
    },
    {
      title: "Quality Control",
      desc: "On-site quality inspections at various production stages to prevent defects from being shipped.",
      details: ["Initial production check", "Mid-production inspection", "Final random inspection (AQL)"],
      icon: ClipboardCheck,
      img: "Quality inspection professional checking goods"
    },
    {
      title: "Production Monitoring",
      desc: "Weekly reports on manufacturing progress to ensure your order stays on schedule.",
      details: ["Timeline tracking", "Bottleneck identification", "Raw material verification"],
      icon: Clock,
      img: "Factory production line monitoring"
    },
    {
      title: "Logistics Coordination",
      desc: "Consolidate shipments, manage warehouse storage, and coordinate with liners/air carriers.",
      details: ["FCL/LCL consolidation", "Customs documentation", "Amazon FBA prep support"],
      icon: Truck,
      img: "Cargo ship port containers shipping"
    },
    {
      title: "Contract & Payment Protection",
      desc: "Negotiate payment terms (30/70) and ensure legal contracts protect your interests in China.",
      details: ["Escrow arrangements", "Contract drafting", "Settlement assistance"],
      icon: ShieldCheck,
      img: "Business contract signing table"
    }
  ];

  return (
    <div ref={containerRef} className="bg-white">
      {/* Header */}
      <section className="bg-primary py-20 text-white text-center px-4 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="services-header-bg"
          data-strk-bg="Industrial warehouse supply chain background"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="relative z-10">
          <h1 id="services-page-title" className="text-4xl md:text-5xl font-extrabold mb-4">Professional Sourcing Solutions</h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg font-light tracking-wide italic">Bridging the gap between global buyers and Chinese industrial excellence.</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {coreServices.map((service, idx) => (
            <div key={idx} className="flex flex-col h-full bg-white border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="h-48 overflow-hidden relative">
                  <div 
                    data-strk-bg-id={`service-img-${idx}`}
                    data-strk-bg={service.img}
                    data-strk-bg-ratio="16x9"
                    data-strk-bg-width="600"
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                  <div className="absolute bottom-4 left-6 flex items-center">
                      <div className="bg-secondary text-white p-2 rounded-lg mr-3">
                         <service.icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-white font-bold text-lg">{service.title}</h3>
                  </div>
              </div>
              <div className="p-8 flex-grow">
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{service.desc}</p>
                <ul className="space-y-3">
                  {service.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-center text-xs text-gray-500 font-medium tracking-tight">
                      <CheckCircle2 className="w-4 h-4 mr-2 text-green-500 shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Callout */}
      <section className="bg-gray-50 py-24 border-y">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Scale className="w-12 h-12 text-secondary mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-6 text-primary tracking-tight">Zero-Markup Policy</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-10 italic">
            Unlike many agents, we do not hide commissions in product prices. You deal directly with the factory. We earn our living from a transparent service fee based on the complexity and volume of your sourcing order.
          </p>
          <div className="flex justify-center gap-4">
              <Link to="/contact" className="bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-primary/95 transition">Get Pricing Structure</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
