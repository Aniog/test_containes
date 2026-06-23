import React from 'react';
import { Search, ShieldCheck, ClipboardCheck, Ship, Box, Settings, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-slate-50 py-16 md:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="page-title" className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Sourcing Services</h1>
          <p id="page-desc" className="text-xl text-slate-600 max-w-3xl mx-auto">
            From finding the right factory to getting the finished products to your door, we offer end-to-end supply chain management tailored to B2B buyers.
          </p>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          
          {/* Service: Sourcing */}
          <div id="product-sourcing" className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                <Search className="w-8 h-8" />
              </div>
              <h2 id="service-sourcing-title" className="text-3xl font-bold text-slate-900 mb-4">Product Sourcing & Price Negotiation</h2>
              <p id="service-sourcing-desc" className="text-lg text-slate-600 mb-6">
                Finding a supplier on Alibaba is easy. Finding a *reliable* manufacturer capable of meeting your quality standards and target price is hard. We leverage our extensive local network to find the best match for your project.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-3 text-slate-700">
                  <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Identify and shortlist qualified manufacturers (no trading companies disguised as factories).</span>
                </li>
                <li className="flex gap-3 text-slate-700">
                  <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Negotiate pricing, payment terms, and lead times in local language.</span>
                </li>
                <li className="flex gap-3 text-slate-700">
                  <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Sample consolidation: We collect samples from multiple factories, check them, and send them to you in one box to save shipping costs.</span>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <img 
                data-strk-img-id="service-sourcing-img"
                data-strk-img="[service-sourcing-title] [service-sourcing-desc]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                alt="Product sourcing"
                className="rounded-xl shadow-lg w-full object-cover"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
          </div>

          {/* Service: Verification */}
          <div id="supplier-verification" className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                data-strk-img-id="service-verification-img"
                data-strk-img="[service-verify-title] factory audit inspection"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                alt="Supplier verification"
                className="rounded-xl shadow-lg w-full object-cover"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            <div>
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h2 id="service-verify-title" className="text-3xl font-bold text-slate-900 mb-4">Supplier Verification & Audits</h2>
              <p className="text-lg text-slate-600 mb-6">
                Protect yourself from scams and substandard facilities before transferring any funds. We verify that the factory actually exists and has the capacity to fulfill your order.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-3 text-slate-700">
                  <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Basic Background Check: Verification of business licenses, registered capital, and legal status.</span>
                </li>
                <li className="flex gap-3 text-slate-700">
                  <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>On-site Factory Audits: We visit the facility to inspect production lines, equipment, worker conditions, and QC systems.</span>
                </li>
                <li className="flex gap-3 text-slate-700">
                  <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Comprehensive audit report provided with photos and our honest assessment.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Service: QC */}
          <div id="quality-control" className="grid md:grid-cols-2 gap-12 items-center">
             <div className="order-2 md:order-1">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                <ClipboardCheck className="w-8 h-8" />
              </div>
              <h2 id="service-qc-title" className="text-3xl font-bold text-slate-900 mb-4">Quality Control & Inspection</h2>
              <p className="text-lg text-slate-600 mb-6">
                Never ship defects. Fixing quality issues after the container arrives in your country is nearly impossible and extremely costly. We catch errors before they leave China.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-3 text-slate-700">
                  <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Pre-Production Inspection (PPI): Check raw materials and initial setups.</span>
                </li>
                <li className="flex gap-3 text-slate-700">
                  <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>During Production Inspection (DPI): Monitor the assembly line to catch issues early.</span>
                </li>
                <li className="flex gap-3 text-slate-700">
                  <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Pre-Shipment Inspection (PSI): Final random inspection using AQL standards before balance payment.</span>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <img 
                data-strk-img-id="service-qc-img"
                data-strk-img="[service-qc-title] quality control inspector"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                alt="Quality control"
                className="rounded-xl shadow-lg w-full object-cover"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
          </div>
          
           {/* Service: Shipping */}
           <div id="shipping" className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                data-strk-img-id="service-shipping-img"
                data-strk-img="[service-shipping-title] logistics warehouse shipping containers"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                alt="Shipping and Logistics"
                className="rounded-xl shadow-lg w-full object-cover"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            <div>
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                <Ship className="w-8 h-8" />
              </div>
              <h2 id="service-shipping-title" className="text-3xl font-bold text-slate-900 mb-4">Shipping & Logistics</h2>
              <p className="text-lg text-slate-600 mb-6">
                We handle the complex export procedures, customs clearance, and coordinate the most cost-effective shipping method for your cargo.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-3 text-slate-700">
                  <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Freight Forwarding: Sea freight (FCL/LCL), Air freight, and Express couriers.</span>
                </li>
                <li className="flex gap-3 text-slate-700">
                  <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Consolidation & Warehousing: Combine goods from multiple suppliers into one shipment to reduce costs.</span>
                </li>
                <li className="flex gap-3 text-slate-700">
                  <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Amazon FBA Prep: Labeling, barcoding, and direct shipping to Amazon fulfillment centers.</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-100 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Need a Custom Sourcing Plan?</h2>
            <p className="text-lg text-slate-600 mb-8">Every buyer's needs are different. Contact us to discuss your specific product and supply chain requirements.</p>
            <Link to="/contact" className="inline-block bg-blue-600 text-white font-medium text-lg px-8 py-4 rounded-md shadow hover:bg-blue-700 transition">
              Contact Our Sourcing Team
            </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;