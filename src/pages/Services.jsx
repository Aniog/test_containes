import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { 
  Search, 
  ShieldCheck, 
  Settings, 
  Truck, 
  ArrowRight, 
  CheckCircle2, 
  Scale, 
  Building2, 
  Clock,
  ClipboardCheck,
  FileCheck
} from 'lucide-react';
import Button from '@/components/ui/Button';
import { Link } from 'react-router-dom';

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const detailedServices = [
    {
      title: "Supplier Identification & Vetting",
      description: "We don't just find suppliers; we find the RIGHT ones. We filter out middlemen and connect you directly with factories that specialize in your product type.",
      points: ["In-depth market research", "Supplier capability assessment", "Direct factory price negotiation", "Comparison of multiple quotes"],
      imgId: "svc-det-1",
      query: "sourcing agent discussing with Chinese factory manager samples"
    },
    {
      title: "Factory Audit & Compliance",
      description: "Verify your supplier's legitimacy before you send a single dollar. We conduct on-site audits to verify production capacity and quality management systems.",
      points: ["Business license verification", "QMS (ISO 9001) check", "Social compliance (BSCI/SEDEX)", "Technical capability audit"],
      imgId: "svc-det-2",
      query: "quality inspector checking factory certificates and production line"
    },
    {
      title: "Sample Consolidation & Check",
      description: "Shipping multiple samples from different suppliers is expensive. We collect them at our Shenzhen warehouse, inspect them, and send them to you in one box.",
      points: ["Sample collection from various factories", "Pre-shipment sample inspection", "Consolidated express shipping", "Detailed sample photos and videos"],
      imgId: "svc-det-3",
      query: "sourcing agent preparing consolidated samples in warehouse"
    },
    {
      title: "Quality Control Inspections",
      description: "We be your 'eyes in the factory'. Our inspectors visit the factory during production (DUP) or before shipping (FRI) to ensure AQL standards are met.",
      points: ["During Production Inspection (DPI)", "Final Random Inspection (FRI)", "Defect sorting and reworking", "Container Loading Supervision"],
      imgId: "svc-det-4",
      query: "QC inspector measuring product with caliper in factory"
    },
    {
      title: "Logistics & Shipping Support",
      description: "Navigate the complexities of international shipping. We help you choose the best freight methods and handle the export documentation from China.",
      points: ["FCL & LCL sea freight", "Air freight and express couriers", "Customs clearance documentation", "Amazon FBA prep & delivery"],
      imgId: "svc-det-5",
      query: "shipping containers at port logistics China"
    }
  ];

  return (
    <div ref={containerRef} className="bg-white">
      {/* Hero */}
      <section className="bg-slate-900 py-24 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 id="page-hero-title" className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight">Full-Service Sourcing Solutions</h1>
          <p id="page-hero-subtitle" className="text-xl text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed">
            From initial concept to final delivery, we provide the expertise and boots-on-the-ground presence to make your China sourcing seamless.
          </p>
        </div>
      </section>

      {/* Main Services List */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-32">
            {detailedServices.map((service, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-16 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2">
                  <h2 id={`svc-title-${index}`} className="text-3xl font-black text-slate-900 mb-6">{service.title}</h2>
                  <p id={`svc-desc-${index}`} className="text-lg text-slate-600 mb-8 leading-relaxed font-medium">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.points.map((point, pIndex) => (
                      <li key={pIndex} className="flex items-center text-slate-700 font-semibold bg-slate-50 p-3 rounded-lg border border-slate-100">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 mr-3 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:w-1/2">
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-blue-600/5 rounded-[2rem] group-hover:bg-blue-600/10 transition-colors -z-10"></div>
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                      <img 
                        data-strk-img-id={service.imgId}
                        data-strk-img={`[svc-desc-${index}] [svc-title-${index}] ${service.query}`}
                        data-strk-img-ratio="4x3"
                        data-strk-img-width="800"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-black mb-8 text-slate-900">Not Sure Which Service You Need?</h2>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto font-medium">
            Schedule a free consultation call. We’ll analyze your business needs and recommend the most cost-effective sourcing strategy.
          </p>
          <Link to="/contact">
            <Button size="lg" className="h-16 px-10 text-xl font-black uppercase tracking-tight">
              Talk to a Sourcing Expert Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
