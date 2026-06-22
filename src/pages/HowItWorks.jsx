import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ClipboardList, Target, HardHat, CheckSquare, Truck, ArrowRight } from "lucide-react";
import React, { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function HowItWorks() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div className="flex flex-col w-full min-h-screen bg-white" ref={containerRef}>
      {/* Header */}
      <section className="bg-slate-50 border-b border-slate-200 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <h1 id="process-title" className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">Our 5-Step Sourcing Process</h1>
          <p id="process-subtitle" className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            A systematic, transparent approach to sourcing from China. We handle the complexities so you can focus on growing your business.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl relative">
          
          {/* Connecting Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-100 transform -translate-x-1/2 z-0"></div>
          
          <div className="space-y-16 lg:space-y-32 relative z-10">
            
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
               <div className="w-full md:w-1/2 order-2 md:order-1 md:text-right">
                  <div className="flex items-center gap-4 justify-start md:justify-end mb-4">
                     <h3 className="text-2xl font-bold text-slate-900">1. Requirement Analysis</h3>
                     <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold text-lg hidden md:flex">1</span>
                  </div>
                  <p className="text-lg text-slate-600 leading-relaxed md:pl-8">
                     We start by deeply understanding your project. You share your product specifications, target pricing, order volume, and quality standards. We analyze the feasibility and provide an immediate assessment.
                  </p>
               </div>
               <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-start">
                  <span className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-xl md:hidden mb-4">1</span>
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm w-full md:w-4/5 flex items-center justify-center aspect-video">
                     <ClipboardList className="w-20 h-20 text-slate-300" />
                  </div>
               </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
               <div className="w-full md:w-1/2 flex justify-end">
                  <span className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-xl md:hidden mb-4">2</span>
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm w-full md:w-4/5 flex items-center justify-center aspect-video">
                     <Target className="w-20 h-20 text-slate-300" />
                  </div>
               </div>
               <div className="w-full md:w-1/2 md:text-left">
                  <div className="flex items-center gap-4 justify-start mb-4">
                     <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold text-lg hidden md:flex">2</span>
                     <h3 className="text-2xl font-bold text-slate-900">2. Supplier Searching & Quotes</h3>
                  </div>
                  <p className="text-lg text-slate-600 leading-relaxed md:pr-8">
                     Our team leverages local databases and networks to identify 10+ potential factories. We screen them down to the best 2-3 options, negotiate pricing, and present you with a detailed comparison report.
                  </p>
               </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
               <div className="w-full md:w-1/2 order-2 md:order-1 md:text-right">
                  <div className="flex items-center gap-4 justify-start md:justify-end mb-4">
                     <h3 className="text-2xl font-bold text-slate-900">3. Sampling & Factory Audit</h3>
                     <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold text-lg hidden md:flex">3</span>
                  </div>
                  <p className="text-lg text-slate-600 leading-relaxed md:pl-8">
                     Before mass production, we arrange product samples for your approval. Simultaneously, we perform an on-site factory audit to verify the supplier's capacity, machinery, and compliance certifications.
                  </p>
               </div>
               <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-start">
                  <span className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-xl md:hidden mb-4">3</span>
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm w-full md:w-4/5 flex items-center justify-center aspect-video">
                     <HardHat className="w-20 h-20 text-slate-300" />
                  </div>
               </div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
               <div className="w-full md:w-1/2 flex justify-end">
                  <span className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-xl md:hidden mb-4">4</span>
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm w-full md:w-4/5 flex items-center justify-center aspect-video">
                     <CheckSquare className="w-20 h-20 text-slate-300" />
                  </div>
               </div>
               <div className="w-full md:w-1/2 md:text-left">
                  <div className="flex items-center gap-4 justify-start mb-4">
                     <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold text-lg hidden md:flex">4</span>
                     <h3 className="text-2xl font-bold text-slate-900">4. Production & Quality Control</h3>
                  </div>
                  <p className="text-lg text-slate-600 leading-relaxed md:pr-8">
                     You place the order, and we manage the production timeline. Crucially, our QC inspectors perform strict pre-shipment inspections (PSI) based on your criteria to ensure zero defective goods leave the factory.
                  </p>
               </div>
            </div>

            {/* Step 5 */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
               <div className="w-full md:w-1/2 order-2 md:order-1 md:text-right">
                  <div className="flex items-center gap-4 justify-start md:justify-end mb-4">
                     <h3 className="text-2xl font-bold text-slate-900">5. Shipping & Logistics</h3>
                     <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold text-lg hidden md:flex">5</span>
                  </div>
                  <p className="text-lg text-slate-600 leading-relaxed md:pl-8">
                     Once goods pass inspection, we handle the complex logistics. Whether sea freight, air delivery, or express courier, we arrange the most cost-effective shipping method, handle export customs, and deliver to your door.
                  </p>
               </div>
               <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-start">
                  <span className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-xl md:hidden mb-4">5</span>
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm w-full md:w-4/5 flex items-center justify-center aspect-video">
                     <Truck className="w-20 h-20 text-slate-300" />
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
           <h2 className="text-3xl font-bold mb-6">Ready to Start Step 1?</h2>
           <p className="text-slate-400 mb-8 text-lg">Send us your product requirements for a free assessment.</p>
           <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 h-12 px-8">
              <Link to="/contact">Get a Free Sourcing Quote <ArrowRight className="ml-2 w-4 h-4" /></Link>
           </Button>
        </div>
      </section>

    </div>
  );
}