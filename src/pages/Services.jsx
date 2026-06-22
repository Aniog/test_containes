import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Search, ShieldCheck, PackageSearch, Ship, FileText, BadgeCheck, ArrowRight } from "lucide-react";
import React, { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function Services() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen" ref={containerRef}>
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-20 w-full">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl mx-auto text-center">
          <h1 id="services-header" className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Comprehensive China Sourcing Services</h1>
          <p id="services-description" className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            From initial factory search to final delivery, we offer a full suite of services to make importing from China safe, efficient, and profitable.
          </p>
        </div>
      </section>

      {/* Services Detail List */}
      <section className="py-20 w-full">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl mx-auto space-y-24">
          
          {/* Service 1 */}
          <div className="flex flex-col md:flex-row gap-12 items-center bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100">
            <div className="w-full md:w-1/2">
               <img 
                 data-strk-img-id="service-supplier-search"
                 data-strk-img="[service-1-title] [service-1-desc]"
                 data-strk-img-ratio="4x3"
                 data-strk-img-width="600"
                 src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                 alt="Supplier Search"
                 className="rounded-lg shadow-md w-full object-cover"
               />
            </div>
            <div className="w-full md:w-1/2">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Search className="w-7 h-7" />
              </div>
              <h2 id="service-1-title" className="text-3xl font-bold text-slate-900 mb-4">Supplier Sourcing & Verification</h2>
              <p id="service-1-desc" className="text-lg text-slate-600 mb-6 leading-relaxed">
                We identify the most capable manufacturers for your specific product category. Our team calls, filters, and qualifies dozens of factories to present you with the top 2-3 candidates that meet your price, quality, and MOQ requirements.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-slate-700">
                  <BadgeCheck className="w-5 h-5 text-blue-500" /> Exhaustive market search
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <BadgeCheck className="w-5 h-5 text-blue-500" /> Price and term negotiation
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <BadgeCheck className="w-5 h-5 text-blue-500" /> Background checks on business licenses
                </li>
              </ul>
            </div>
          </div>

          {/* Service 2 */}
          <div className="flex flex-col md:flex-row-reverse gap-12 items-center bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100">
            <div className="w-full md:w-1/2">
               <img 
                 data-strk-img-id="service-factory-audit"
                 data-strk-img="[service-2-title] [service-2-desc]"
                 data-strk-img-ratio="4x3"
                 data-strk-img-width="600"
                 src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                 alt="Factory Audit"
                 className="rounded-lg shadow-md w-full object-cover"
               />
            </div>
            <div className="w-full md:w-1/2">
              <div className="w-14 h-14 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h2 id="service-2-title" className="text-3xl font-bold text-slate-900 mb-4">Factory Audits</h2>
              <p id="service-2-desc" className="text-lg text-slate-600 mb-6 leading-relaxed">
                Don't rely on polished Alibaba profiles. We physically visit factories to assess their true capabilities, production lines, quality management systems (QMS), and working conditions before you place bulk orders.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-slate-700">
                  <BadgeCheck className="w-5 h-5 text-amber-500" /> Comprehensive facility inspection
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <BadgeCheck className="w-5 h-5 text-amber-500" /> Production capacity verification
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <BadgeCheck className="w-5 h-5 text-amber-500" /> Detailed audit report with photos
                </li>
              </ul>
            </div>
          </div>

          {/* Service 3 */}
          <div className="flex flex-col md:flex-row gap-12 items-center bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100">
            <div className="w-full md:w-1/2">
               <img 
                 data-strk-img-id="service-qc"
                 data-strk-img="[service-3-title] [service-3-desc]"
                 data-strk-img-ratio="4x3"
                 data-strk-img-width="600"
                 src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                 alt="Quality Control"
                 className="rounded-lg shadow-md w-full object-cover"
               />
            </div>
            <div className="w-full md:w-1/2">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
                <PackageSearch className="w-7 h-7" />
              </div>
              <h2 id="service-3-title" className="text-3xl font-bold text-slate-900 mb-4">Quality Control & Inspection</h2>
              <p id="service-3-desc" className="text-lg text-slate-600 mb-6 leading-relaxed">
                We act as your eyes on the factory floor. By conducting strict pre-shipment inspections based on AQL standards, we catch defects before goods leave China, saving you massive returns and brand damage.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-slate-700">
                  <BadgeCheck className="w-5 h-5 text-emerald-500" /> Pre-Production Inspection (PPI)
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <BadgeCheck className="w-5 h-5 text-emerald-500" /> During Production Inspection (DUPRO)
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <BadgeCheck className="w-5 h-5 text-emerald-500" /> Pre-Shipment Inspection (PSI)
                </li>
              </ul>
            </div>
          </div>

          {/* Service 4 */}
          <div className="flex flex-col md:flex-row-reverse gap-12 items-center bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100">
            <div className="w-full md:w-1/2">
               <img 
                 data-strk-img-id="service-logistics"
                 data-strk-img="[service-4-title] [service-4-desc]"
                 data-strk-img-ratio="4x3"
                 data-strk-img-width="600"
                 src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                 alt="Logistics and Shipping"
                 className="rounded-lg shadow-md w-full object-cover"
               />
            </div>
            <div className="w-full md:w-1/2">
              <div className="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <Ship className="w-7 h-7" />
              </div>
              <h2 id="service-4-title" className="text-3xl font-bold text-slate-900 mb-4">Logistics & Customs Clearance</h2>
              <p id="service-4-desc" className="text-lg text-slate-600 mb-6 leading-relaxed">
                Navigating international shipping can be complex. We arrange cost-effective freight forwarding, consolidate shipments from multiple suppliers, and handle export customs clearance to ensure smooth delivery.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-slate-700">
                  <BadgeCheck className="w-5 h-5 text-indigo-500" /> Sea Freight (FCL/LCL) & Air Freight
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <BadgeCheck className="w-5 h-5 text-indigo-500" /> Order consolidation & warehousing
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <BadgeCheck className="w-5 h-5 text-indigo-500" /> DDP/DDU shipping directly to door
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* Pricing/Value Prop block */}
      <section className="py-16 bg-white border-y border-slate-200 w-full">
         <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Transparent, Value-Driven Pricing</h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              We don't charge hidden fees or take kickbacks from factories. We charge a clear service fee based on the order volume or a flat rate for specific inspections, ensuring our interests are 100% aligned with yours.
            </p>
            <Button asChild size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-8">
              <Link to="/contact">Discuss Your Project</Link>
            </Button>
         </div>
      </section>

    </div>
  );
}