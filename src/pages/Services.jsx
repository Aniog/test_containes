import React, { useEffect, useRef } from 'react';
import { Search, ShieldCheck, Factory, ClipboardCheck, PackageCheck, Ship, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { cn } from '@/lib/utils';

export default function Services() {
  const containerRef = useRef(null);

  useEffect(() => {
    try {
      if (ImageHelper && ImageHelper.loadImages && strkImgConfig) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    } catch (e) {
      console.log('ImageHelper not available');
    }
  }, []);

  const servicesList = [
    {
      id: "sourcing",
      title: "Product Sourcing & Supplier Search",
      icon: <Search className="w-10 h-10 text-primary" />,
      desc: "Finding a reliable supplier is the most critical step. We don't just search Alibaba; we leverage our localized network and industry databases to find direct manufacturers that match your price and quality requirements.",
      features: [
        "Supplier background checks (business licenses, capital)",
        "Price negotiation and MOQ reduction",
        "Cost breakdown analysis",
        "Alternative material suggestions for cost-saving"
      ],
      imgQuery: "purchasing agent analyzing factory product samples manufacturing",
    },
    {
      id: "audit",
      title: "Factory Audits & Verification",
      icon: <ShieldCheck className="w-10 h-10 text-primary" />,
      desc: "Never send money to an unverified supplier. Our team physically visits the factory to ensure they are a real manufacturer, not a trading company operating out of an apartment.",
      features: [
        "On-site visual inspection of facilities",
        "Production capacity and lead time analysis",
        "Quality management system (ISO) checks",
        "Social compliance and working conditions audit"
      ],
      imgQuery: "inspector writing report holding clipboard inside large manufacturing facility",
    },
    {
      id: "sample",
      title: "Sample Development & Consolidation",
      icon: <Factory className="w-10 h-10 text-primary" />,
      desc: "We manage the entire sampling process. If you are ordering from multiple suppliers, we collect all samples in our office, review them against your specs, and send them to you in one box to save expensive international courier fees.",
      features: [
        "Fast-tracked prototype development",
        "Detailed sample review reports with photos/videos",
        "Tooling and mold management",
        "Sample consolidation (save 70% on DHL/FedEx)"
      ],
      imgQuery: "product designer examining prototype measuring quality check close up",
    },
    {
      id: "qc",
      title: "Quality Control & Inspection",
      icon: <ClipboardCheck className="w-10 h-10 text-primary" />,
      desc: "We follow international AQL standards to inspect your goods before you pay the final balance. We identify defects, measurement errors, and packaging issues while the goods are still in the factory.",
      features: [
        "During Production Inspection (DPI)",
        "Pre-Shipment Inspection (PSI)",
        "100% Full Inspection for high-value goods",
        "Comprehensive PDF defect reports within 24 hours"
      ],
      imgQuery: "quality control worker inspecting goods with caliper measuring tool factory",
    },
    {
      id: "logistics",
      title: "Warehousing & Global Shipping",
      icon: <Ship className="w-10 h-10 text-primary" />,
      desc: "Shipping from China can be complex. We handle EXW, FOB, and DDP terms, finding the most cost-effective routing for your goods, whether it's a small courier package or a full 40HQ container.",
      features: [
        "Free temporary warehousing in major ports",
        "FBA prep (Amazon product labeling & box labels)",
        "Sea freight (FCL/LCL) and Air freight",
        "Customs clearance assistance"
      ],
      imgQuery: "cargo ship container port terminal logistics aerial view",
    }
  ];

  return (
    <div ref={containerRef} className="pt-24 pb-20">
      {/* Header */}
      <section className="bg-slate-900 text-white py-16 mb-20">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6" id="services-page-title">
              Our Professional Sourcing Services
            </h1>
            <p className="text-xl text-slate-300" id="services-page-desc">
              Comprehensive end-to-end solutions to protect your investment and simplify your China supply chain. Choose individual services or let us handle everything.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detailed List */}
      <section className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="space-y-24">
          {servicesList.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={service.id} className={cn("flex flex-col lg:flex-row gap-12 items-center", !isEven && "lg:flex-row-reverse")}>
                
                {/* Text Content */}
                <div className="lg:w-1/2">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4" id={`srv-title-${service.id}`}>
                    {service.title}
                  </h2>
                  <p className="text-lg text-slate-600 mb-8" id={`srv-desc-${service.id}`}>
                    {service.desc}
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    {service.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-start">
                        <CheckCircle2 className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0" />
                        <span className="text-slate-700 font-medium" id={`srv-feat-${service.id}-${fIndex}`}>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link 
                    to="/contact" 
                    className="inline-flex items-center text-primary font-bold hover:text-primary/80 transition-colors"
                  >
                    Request this service
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>

                {/* Image */}
                <div className="lg:w-1/2 w-full">
                  <div className="rounded-2xl overflow-hidden shadow-lg aspect-4/3 bg-slate-100">
                    <img 
                      data-strk-img-id={`visual-${service.id}`}
                      data-strk-img={`[srv-title-${service.id}] ${service.imgQuery}`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </section>

      {/* Pricing / CTA */}
      <section className="bg-slate-50 mt-24 py-20 border-t">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Transparent Pricing Structure</h2>
          <p className="text-lg text-slate-600 mb-10">
            We don't believe in hidden kickbacks. We charge a clear service fee based on order volume (typically 5-10%), or fixed flat fees for standalone services like inspections or audits.
          </p>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 mb-10 text-left flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-slate-100">
            <div className="md:w-1/2 p-6">
              <h3 className="text-xl font-bold mb-2">Commission Based</h3>
              <p className="text-slate-500 text-sm mb-4">Best for complete end-to-end sourcing.</p>
              <div className="text-3xl font-black text-primary mb-4">5% - 10%</div>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• No upfront fees to start searching</li>
                <li>• Covers sourcing, samples, and basic QC</li>
                <li>• Percentage scales down for larger orders</li>
              </ul>
            </div>
            <div className="md:w-1/2 p-6">
              <h3 className="text-xl font-bold mb-2">Flat Fee Services</h3>
              <p className="text-slate-500 text-sm mb-4">Best for specific tasks with your own suppliers.</p>
              <div className="text-3xl font-black text-slate-900 mb-4">From $199</div>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• Factory Audits (per man-day)</li>
                <li>• Pre-shipment Quality Inspections</li>
                <li>• Detailed PDF reports included</li>
              </ul>
            </div>
          </div>
          <Link 
            to="/contact" 
            className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-md font-bold text-lg inline-flex items-center transition-colors"
          >
            Get a Customized Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

    </div>
  );
}