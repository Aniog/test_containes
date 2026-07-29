import React, { useEffect, useRef } from 'react';
import { Search, ShieldAlert, FileText, PackageCheck, Scale, Ship, Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ServiceCard = ({ icon, title, description, features, id }) => (
  <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
    <div className="w-14 h-14 bg-blue-50 text-primary rounded-lg flex items-center justify-center mb-6">
      {icon}
    </div>
    <h3 id={`${id}-title`} className="text-2xl font-bold text-secondary mb-4">{title}</h3>
    <p id={`${id}-desc`} className="text-slate-600 mb-6 font-medium leading-relaxed">
      {description}
    </p>
    <ul className="space-y-3 mb-8">
      {features.map((feature, i) => (
        <li key={i} className="flex items-start gap-2 text-sm text-slate-700 font-semibold">
          <Check size={18} className="text-green-500 flex-shrink-0" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <div className="mt-auto">
      <img
        data-strk-img-id={`service-img-${id}`}
        data-strk-img={`[${id}-desc] [${id}-title] professional sourcing service China`}
        data-strk-img-ratio="3x2"
        data-strk-img-width="600"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        className="w-full h-40 object-cover rounded-lg mb-4"
        alt={title}
      />
    </div>
  </div>
);

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  const servicesList = [
    {
      id: "supplier-sourcing",
      icon: <Search size={28} />,
      title: "Product Sourcing & Identification",
      description: "Finding the right factory starts with knowing where to look. We identify suppliers that match your specifications, capacity, and price points.",
      features: ["Verified Manufacturer Database", "Price Negotiation", "Sample Coordination", "Direct Factory Access"]
    },
    {
      id: "factory-audit",
      icon: <ShieldAlert size={28} />,
      title: "Factory Audits & Verification",
      description: "We don't just trust certificates. We visit the production floor to verify license authenticity, manufacturing capability, and social compliance.",
      features: ["Business License Check", "Production Capacity Audit", "ISO Standards Verification", "Social Responsibility Audit"]
    },
    {
      id: "quality-control",
      icon: <PackageCheck size={28} />,
      title: "Quality Control (QC) Inspections",
      description: "Prevent defects before they reach your country. Our inspectors perform rigorous checks during and after production.",
      features: ["In-line Production Check", "Pre-shipment Inspection (PSI)", "AQL Standards", "Defect Analysis Reports"]
    },
    {
      id: "shipping-logistics",
      icon: <Ship size={28} />,
      title: "Global Logistics & Shipping",
      description: "Complexity stops here. We coordinate container loading and manage shipping documents for smooth customs clearance.",
      features: ["Sea, Air, and Rail Freight", "Consolidation Services", "Export Documentation", "Door-to-Door Tracking"]
    },
    {
      id: "contract-legal",
      icon: <Scale size={28} />,
      title: "Contract Negotiation & Legal",
      description: "Drafting bilingual purchase agreements that protect your interests under Chinese law.",
      features: ["Bilingual Contracts", "IP Protection Strategies", "Payment Safety", "Conflict Resolution"]
    },
    {
      id: "order-follow",
      icon: <FileText size={28} />,
      title: "Order Management & Follow-up",
      description: "We be your eyes and ears. Constant communication with factories to ensure deadlines are met.",
      features: ["Schedule Tracking", "Production Monitoring", "Real-time Updates", "Packaging Review"]
    }
  ];

  return (
    <div ref={containerRef} className="bg-slate-50 min-h-screen pt-12">
      <section className="py-20 md:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <h1 id="page-title" className="text-4xl md:text-5xl font-extrabold text-secondary mb-6 tracking-tight">
              Full-Spectrum Sourcing Services
            </h1>
            <p id="page-subtitle" className="text-xl text-slate-600 font-medium leading-relaxed">
              From the initial search to final delivery, we provide a complete suite of services to ensure your China sourcing is profitable, safe, and efficient.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Need a custom sourcing solution?</h2>
            <p className="text-slate-400 text-lg mb-8">
              We handle complex projects including private labeling (OEM), custom molds, and multi-supplier consolidation. Tell us about your specific goals.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-white font-bold py-4 px-8 rounded-lg hover:bg-primary-hover transition shadow-xl">
              Discuss Your Project <ArrowRight size={20} />
            </Link>
          </div>
          <div className="hidden lg:block w-72 h-72 border-8 border-slate-800 rounded-full flex items-center justify-center p-8 bg-slate-900 shadow-inner">
             <div className="text-center">
                <p className="text-5xl font-black text-accent mb-2">24/7</p>
                <p className="text-xs uppercase font-bold tracking-widest text-slate-500">Support for our clients</p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
