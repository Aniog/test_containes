import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Search, ShieldCheck, Factory, BoxSelect, BadgeCheck, Ship, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const services = [
    {
      id: 'supplier-sourcing',
      title: 'Supplier Sourcing & Verification',
      icon: Search,
      desc: 'Finding the right factory is half the battle. We leverage our network and local knowledge to identify capable manufacturers that align with your price point and quality expectations.',
      features: ['Manufacturer Background Checks', 'Price Negotiation & Cost Breakdown', 'Compliance & Certificate Verification', 'Sample Evaluation']
    },
    {
      id: 'factory-audit',
      title: 'Comprehensive Factory Audits',
      icon: Factory,
      desc: 'Before placing a large order, we conduct on-site factory audits to ensure they have the machinery, workforce, and systems in place to deliver your product.',
      features: ['ISO Standards Compliance', 'Production Capacity Assessment', 'Working Condition Evaluation', 'Sub-contractor Tracking']
    },
    {
      id: 'sample-consolidation',
      title: 'Sample Development & Consolidation',
      icon: BoxSelect,
      desc: 'Save significantly on international shipping by letting us collect samples from multiple suppliers, group them into one package, and send them to you for final approval.',
      features: ['OEM/ODM Sample Production', 'Sample Quality Assessment', 'Consolidated Courier Shipping', 'Packaging Design Tests']
    },
    {
      id: 'production-followup',
      title: 'Active Production Follow-up',
      icon: ShieldCheck,
      desc: 'We do not just wait for the factory to finish. Our team maintains constant communication, keeping you updated on the production schedule to avoid unexpected delays.',
      features: ['Weekly Production Updates', 'Component/Material Sourcing Checks', 'Delay Risk Mitigation', 'Packaging Customization Flow']
    },
    {
      id: 'quality-control',
      title: 'Strict Quality Control (QC)',
      icon: BadgeCheck,
      desc: 'Our inspectors act as your eyes and ears on the factory floor, ensuring your products meet standard AQL requirements before the balance payment is made.',
      features: ['During Production Inspection (DUPRO)', 'Pre-Shipment Inspection (PSI)', 'Defect Sorting & Rework Negotiation', 'Detailed Photographic Reports']
    },
    {
      id: 'shipping',
      title: 'Shipping & Amazon FBA Prep',
      icon: Ship,
      desc: 'From the factory door to your final destination, we manage the entire logistics chain, including competitive freight rates and seamless customs clearance.',
      features: ['Sea Freight (FCL/LCL) & Air Freight', 'Customs Clearance & Documentation', 'FBA Labeling & Palletizing', 'Door-to-door Delivery']
    }
  ];

  return (
    <div ref={containerRef}>
      {/* Header */}
      <div className="bg-slate-50 py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="services-page-title" className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">Our Sourcing Services</h1>
          <p id="services-page-subtitle" className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A complete suite of supply chain solutions designed to give you peace of mind and competitive advantage when importing from China.
          </p>
        </div>
      </div>

      {/* Services List */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 !== 0;
              return (
                <div key={service.id} className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}>
                  {/* Image Side */}
                  <div className="w-full lg:w-1/2">
                    <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3] bg-slate-100">
                      <img
                        data-strk-img-id={`service-img-${service.id}`}
                        data-strk-img={`[service-title-${service.id}] china sourcing`}
                        data-strk-img-ratio="4x3"
                        data-strk-img-width="800"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Content Side */}
                  <div className="w-full lg:w-1/2">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-blue-50 text-blue-600 mb-6">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h2 id={`service-title-${service.id}`} className="text-3xl font-bold text-slate-900 mb-4">{service.title}</h2>
                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">{service.desc}</p>
                    
                    <ul className="space-y-4 mb-8">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle2 className="w-6 h-6 text-blue-500 mr-3 shrink-0" />
                          <span className="text-slate-700 font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Embedded CTA */}
      <section className="bg-blue-900 py-20 text-center px-4">
        <h2 className="text-3xl font-bold text-white mb-6">Unsure which services you need?</h2>
        <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
          We offer flexible packages. Whether you need an end-to-end solution or just a one-time pre-shipment inspection, our team is ready to assist.
        </p>
        <Link to="/contact" className="inline-flex items-center bg-white text-blue-900 hover:bg-slate-50 font-bold py-4 px-8 rounded-md transition-colors duration-200">
          Discuss Your Requirements <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </section>
    </div>
  );
}
