import React from 'react';
import { Package, Truck, Scale, FileCheck, CircleDollarSign, Speech, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-slate-900 text-white py-16 md:py-24 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="how-it-works-title" className="text-4xl md:text-5xl font-bold mb-6">How It Works</h1>
          <p id="how-it-works-desc" className="text-xl text-slate-300 max-w-3xl mx-auto">
            Our 6-step process ensures a transparent, secure, and efficient sourcing experience from inquiry to delivery.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Vertical Line for Desktop */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-blue-100"></div>

            <div className="space-y-16">
              {/* Step 1 */}
              <div className="relative flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-5/12 text-center md:text-right md:pr-8 mb-6 md:mb-0 order-2 md:order-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">1. Inquiry & Requirement Analysis</h3>
                  <p className="text-slate-600">You send us your product details, specifications, target price, and estimated order quantity. We review your request to ensure it's feasible and aligns with our expertise.</p>
                </div>
                <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-2xl z-10 shadow-lg border-4 border-white mb-4 md:mb-0 order-1 md:order-2 shrink-0 relative">
                   <Speech className="w-8 h-8" />
                </div>
                <div className="md:w-5/12 order-3"></div>
              </div>

              {/* Step 2 */}
              <div className="relative flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-5/12 order-3 md:order-1"></div>
                <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-2xl z-10 shadow-lg border-4 border-white mb-4 md:mb-0 order-1 md:order-2 shrink-0 relative">
                   <Search className="w-8 h-8" />
                </div>
                <div className="md:w-5/12 text-center md:text-left md:pl-8 mb-6 md:mb-0 order-2 md:order-3">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">2. Supplier Sourcing & Quoting</h3>
                  <p className="text-slate-600">We contact multiple verified factories in our network, negotiate prices locally, and provide you with a consolidated quotation report with the best options.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-5/12 text-center md:text-right md:pr-8 mb-6 md:mb-0 order-2 md:order-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">3. Sample Development</h3>
                  <p className="text-slate-600">We arrange for samples to be made based on your specs. We review the samples locally first to save time, then consolidate the best ones and express ship them to your office for final approval.</p>
                </div>
                <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-2xl z-10 shadow-lg border-4 border-white mb-4 md:mb-0 order-1 md:order-2 shrink-0 relative">
                   <Package className="w-8 h-8" />
                </div>
                <div className="md:w-5/12 order-3"></div>
              </div>

              {/* Step 4 */}
              <div className="relative flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-5/12 order-3 md:order-1"></div>
                <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-2xl z-10 shadow-lg border-4 border-white mb-4 md:mb-0 order-1 md:order-2 shrink-0 relative">
                  <CircleDollarSign className="w-8 h-8" />
                </div>
                <div className="md:w-5/12 text-center md:text-left md:pl-8 mb-6 md:mb-0 order-2 md:order-3">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">4. Order Placement & Production</h3>
                  <p className="text-slate-600">Once samples are approved, we draft a secure contract in Chinese and English. You pay the deposit, and we closely monitor the production timeline to prevent delays.</p>
                </div>
              </div>

               {/* Step 5 */}
               <div className="relative flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-5/12 text-center md:text-right md:pr-8 mb-6 md:mb-0 order-2 md:order-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">5. Quality Inspection</h3>
                  <p className="text-slate-600">Before the balance is paid and goods leave the factory, our QC team performs a strict pre-shipment inspection (AQL standard) and sends you a detailed report with photos/videos.</p>
                </div>
                <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-2xl z-10 shadow-lg border-4 border-white mb-4 md:mb-0 order-1 md:order-2 shrink-0 relative">
                   <FileCheck className="w-8 h-8"/>
                </div>
                <div className="md:w-5/12 order-3"></div>
              </div>

              {/* Step 6 */}
              <div className="relative flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-5/12 order-3 md:order-1"></div>
                <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-2xl z-10 shadow-lg border-4 border-white mb-4 md:mb-0 order-1 md:order-2 shrink-0 relative">
                  <Truck className="w-8 h-8" />
                </div>
                <div className="md:w-5/12 text-center md:text-left md:pl-8 mb-6 md:mb-0 order-2 md:order-3">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">6. Shipping & Customs</h3>
                  <p className="text-slate-600">We arrange sea, air, or express freight based on your budget and timeline. We handle all export documents and coordinate with customs brokers for a smooth delivery to your final destination.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Ready to Start Step 1?</h2>
            <Link to="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-4 rounded-md shadow transition">
                Submit Your Requirements
            </Link>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;