import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShieldCheck, Truck, FileCheck, Anchor, Box } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const servicesList = [
    {
      id: "supplier-sourcing",
      icon: Search,
      title: "Supplier Sourcing & Verification",
      description: "We bypass trading companies and source directly from manufacturers. Our team verifies business licenses, export records, and production capabilities to ensure you work with reliable partners.",
      benefits: ["Direct-to-factory pricing", "Verified business credentials", "Capacity assessment", "Risk elimination"]
    },
    {
      id: "sample-consolidation",
      icon: Box,
      title: "Sample Consolidation",
      description: "Getting samples from multiple factories is expensive and time-consuming. We collect all your samples in our China office, inspect them, and ship them to you in one cost-effective package.",
      benefits: ["Save up to 70% on courier fees", "Faster evaluation process", "Pre-screening before sending", "Detailed video/photo reports"]
    },
    {
      id: "factory-audits",
      icon: FileCheck,
      title: "Comprehensive Factory Audits",
      description: "Before you place a large order, our auditors visit the factory in person. We evaluate their quality management systems, social compliance, and environmental standards.",
      benefits: ["On-site verification", "ISO 9001 compliance check", "Detailed PDF reports", "Avoiding scam operations"]
    },
    {
      id: "quality-control",
      icon: ShieldCheck,
      title: "Quality Control & Inspections",
      description: "We monitor production and perform Pre-Shipment Inspections (PSI) based on internationally recognized AQL standards. Goods don't leave the factory until they meet your specifications.",
      benefits: ["Defect rate tracking", "Functional testing", "Packaging verification", "Go/No-Go shipping authorization"]
    },
    {
      id: "shipping-logistics",
      icon: Anchor,
      title: "Shipping & Customs Clearance",
      description: "From Ex-Works to DDP, we manage the entire logistics chain. We negotiate competitive freight rates, handle customs documentation, and ensure smooth delivery to your warehouse.",
      benefits: ["LCL & FCL sea freight", "Express air freight", "Customs broker coordination", "Door-to-door tracking"]
    },
    {
      id: "order-management",
      icon: Truck,
      title: "End-to-End Order Management",
      description: "We act as your local project managers, negotiating contracts, tracking production schedules, preventing delays, and handling any issues that arise during manufacturing.",
      benefits: ["Contract drafting & protection", "Production milestone tracking", "Crisis resolution", "Clear bi-weekly updates"]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen" ref={containerRef}>
      {/* Page Header */}
      <section 
        className="relative bg-slate-900 py-16 md:py-24 text-white overflow-hidden"
      >
        <div 
          className="absolute inset-0 z-0 bg-slate-800"
          data-strk-bg-id="services-header-bg-99c1z"
          data-strk-bg="[services-page-desc] [services-page-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        >
          <div className="absolute inset-0 bg-slate-900/80"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
          <h1 id="services-page-title" className="text-4xl md:text-5xl font-bold text-white mb-6">Our Sourcing Services</h1>
          <p id="services-page-desc" className="text-xl text-slate-300 max-w-3xl mx-auto">
            A comprehensive suite of services designed to protect your investment and streamline your supply chain from China.
          </p>
        </div>
      </section>

      {/* Services Detailed List */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-16 md:space-y-24">
            {servicesList.map((service, index) => (
              <div key={service.id} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
                <div className="flex-1 space-y-6">
                  <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-xl">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h2 id={`service-${service.id}-title`} className="text-3xl font-bold text-slate-900">{service.title}</h2>
                  <p id={`service-${service.id}-desc`} className="text-lg text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="pt-4">
                    <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">Key Benefits</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center text-slate-700">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary mr-3 flex-shrink-0"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="flex-1 w-full relative">
                  {/* Decorative background instead of image */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-slate-200 to-slate-100 rounded-3xl transform rotate-2 scale-105 -z-10"></div>
                  <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 aspect-[4/3] flex flex-col justify-center items-center text-center relative overflow-hidden">
                     <img
                       alt={service.title}
                       className="absolute inset-0 w-full h-full object-cover opacity-90"
                       data-strk-img-id={`service-img-${service.id}`}
                       data-strk-img={`[service-${service.id}-desc] [service-${service.id}-title]`}
                       data-strk-img-ratio="4x3"
                       data-strk-img-width="800"
                       src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                     />
                     <div className="absolute inset-0 bg-slate-900/60 z-10 transition-opacity hover:bg-slate-900/40"></div>
                     <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/20 rounded-full blur-2xl z-20 pointer-events-none"></div>
                     <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-blue-500/20 rounded-full blur-2xl z-20 pointer-events-none"></div>
                     <service.icon className="h-24 w-24 text-slate-200 mb-6 z-20 relative" />
                     <h3 className="text-xl font-bold text-white z-20 relative">{service.title}</h3>
                     <p className="text-slate-200 mt-2 max-w-xs mx-auto text-sm z-20 relative">Professional execution monitored by our local team in China.</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Transparent, Value-Based Pricing</h2>
          <p className="text-lg text-slate-600 mb-8">
            Unlike many agents, we do not take hidden kickbacks from factories. We operate on a transparent service fee structure based on the total order value, aligning our incentives with your success.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 text-left mb-10">
             <div className="p-6 rounded-xl border border-slate-200 bg-slate-50">
                <h3 className="font-bold text-slate-900 mb-2">A La Carte Services</h3>
                <p className="text-sm text-slate-600">Need just an audit or inspection? Pay flat fees per man-day.</p>
             </div>
             <div className="p-6 rounded-xl border border-primary/20 bg-primary/5">
                <h3 className="font-bold text-primary mb-2">End-to-End Sourcing</h3>
                <p className="text-sm text-slate-700">Percentage based fee on order value. Full transparency on factory pricing.</p>
             </div>
          </div>
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link to="/contact">Request a Custom Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};
