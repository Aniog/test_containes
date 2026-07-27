import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Search, ShieldCheck, CheckCircle2, Truck } from 'lucide-react';

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <div className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6" id="services-page-title">Comprehensive Sourcing Solutions</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto" id="services-page-subtitle">
            We handle everything from finding the right supplier to delivering the final product to your warehouse.
          </p>
        </div>
      </div>

      <div className="py-20 max-w-7xl mx-auto px-4">
        <div className="space-y-24">
          {/* Supplier Sourcing */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6">
                <Search className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4" id="serv-source-title">Supplier Search & Verification</h2>
              <p className="text-lg text-slate-600 mb-6" id="serv-source-desc">
                We don't just use Alibaba. We tap into local Chinese supplier networks to find direct manufacturers that meet your quality, capacity, and price requirements.
              </p>
              <ul className="space-y-3">
                {["Background checks and license verification", "Price negotiation and sampling", "Supplier capability assessment"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-100">
               <img
                  data-strk-img-id="serv-img-source"
                  data-strk-img="[serv-source-desc] [serv-source-title] B2B factory negotiation"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Supplier Sourcing"
                  className="w-full h-full object-cover"
                />
            </div>
          </div>

          {/* Quality Control */}
          <div className="grid md:grid-cols-2 gap-12 items-center flex-col-reverse md:flex-row-reverse">
            <div className="order-1 md:order-2">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4" id="serv-qc-title">Quality Inspection</h2>
              <p className="text-lg text-slate-600 mb-6" id="serv-qc-desc">
                We act as your eyes and ears on the factory floor, ensuring your products are exactly as ordered before they ship.
              </p>
              <ul className="space-y-3">
                {["Pre-Shipment Inspection (PSI)", "During Production Inspection (DUPRO)", "Defect sorting and resolution"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 order-2 md:order-1">
               <img
                  data-strk-img-id="serv-img-qc"
                  data-strk-img="[serv-qc-desc] [serv-qc-title] quality control inspector"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Quality Inspection"
                  className="w-full h-full object-cover"
                />
            </div>
          </div>

          {/* Shipping */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6">
                <Truck className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4" id="serv-ship-title">Shipping & Logistics</h2>
              <p className="text-lg text-slate-600 mb-6" id="serv-ship-desc">
                Navigating international freight can be complex. We find the most cost-effective and reliable shipping routes for your cargo.
              </p>
              <ul className="space-y-3">
                {["Air freight and Sea freight (FCL/LCL)", "Customs clearance preparation", "Door-to-door delivery (DDP)"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-100">
               <img
                  data-strk-img-id="serv-img-ship"
                  data-strk-img="[serv-ship-desc] [serv-ship-title] cargo ship containers"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Shipping Logistics"
                  className="w-full h-full object-cover"
                />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Services;