import React, { useEffect, useRef } from 'react';
import { Search, Factory, FileCheck, ClipboardList, Ship } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const HomeServices = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const services = [
    {
      icon: <Search className="w-10 h-10 text-accent" />,
      title: "Product Sourcing",
      desc: "Identifying best-match manufacturers based on your specs, quality needs, and budget.",
      id: "srv-sourcing"
    },
    {
      icon: <Factory className="w-10 h-10 text-accent" />,
      title: "Supplier Verification",
      desc: "On-site factory audits ensuring valid licenses, production capacity, and ethical standards.",
      id: "srv-verify"
    },
    {
      icon: <FileCheck className="w-10 h-10 text-accent" />,
      title: "Quality Control",
      desc: "Detailed inspections (DPI/FRI) with comprehensive photo and video reports before final payment.",
      id: "srv-qc"
    },
    {
      icon: <ClipboardList className="w-10 h-10 text-accent" />,
      title: "Order Management",
      desc: "A-to-Z production following to ensure timelines are met and requirements are strictly followed.",
      id: "srv-order"
    },
    {
      icon: <Ship className="w-10 h-10 text-accent" />,
      title: "Logistics Support",
      desc: "Warehouse consolidation and coordinating air/sea freight for optimized costs.",
      id: "srv-ship"
    }
  ];

  return (
    <section ref={containerRef} className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl font-bold text-primary mb-2">Our Core Services</h2>
            <p className="text-slate-600 max-w-xl">Comprehensive on-the-ground support to make your China sourcing seamless and risk-free.</p>
          </div>
          <Link to="/services" className="text-primary font-bold flex items-center hover:text-accent transition-colors">
            View All Services <span className="ml-2">→</span>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((srv, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow group">
              <div className="mb-6">{srv.icon}</div>
              <h3 id={srv.id} className="text-xl font-bold text-slate-900 mb-4">{srv.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">{srv.desc}</p>
              
              <div className="w-full h-48 rounded-lg overflow-hidden bg-slate-100 mb-4">
                 <img 
                    alt={srv.title}
                    data-strk-img-id={`srv-img-${idx}`}
                    data-strk-img={`[${srv.id}] China factory quality control shipping`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                 />
              </div>
            </div>
          ))}
          
          <div className="bg-primary p-8 rounded-xl flex flex-col justify-center items-center text-center text-white">
             <h3 className="text-2xl font-bold mb-4">Custom Solutions?</h3>
             <p className="text-slate-300 text-sm mb-8">We offer tailored sourcing strategies for complex projects and large-scale procurement.</p>
             <Link to="/contact" className="btn-accent w-full font-bold">Discuss Your Project</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
