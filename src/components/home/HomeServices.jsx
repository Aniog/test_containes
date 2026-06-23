import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShieldCheck, Box, CheckSquare, Settings, Truck, ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';

const services = [
  {
    id: "service-supplier",
    title: "Supplier Verification & Audit",
    desc: "We physically audit factories, verify business licenses, and check production capabilities to ensure you work with real, capable manufacturers, not middlemen.",
    icon: ShieldCheck,
    imgId: "srv-img-1"
  },
  {
    id: "service-sourcing",
    title: "Product Sourcing & Negotiation",
    desc: "Find the best manufacturers for your specific needs. We negotiate prices, MOQ, and terms on your behalf leveraging our local network and language skills.",
    icon: Search,
    imgId: "srv-img-2"
  },
  {
    id: "service-sample",
    title: "Sample Consolidation",
    desc: "We collect samples from multiple suppliers, check them locally, consolidate into one package, and ship them to you, saving you significant time and international shipping costs.",
    icon: Box,
    imgId: "srv-img-3"
  },
  {
    id: "service-qc",
    title: "Quality Control (QC)",
    desc: "Comprehensive pre-shipment inspections (PSI), during-production inspections (DPI), and piece-by-piece checks. We provide detailed reports with photos/videos before you pay the balance.",
    icon: CheckSquare,
    imgId: "srv-img-4"
  },
  {
    id: "service-production",
    title: "Production Follow-up",
    desc: "We monitor your orders closely, push factories to meet deadlines, and solve issues immediately if production problems arise, acting as your local project manager.",
    icon: Settings,
    imgId: "srv-img-5"
  },
  {
    id: "service-shipping",
    title: "Shipping & Logistics",
    desc: "We organize cost-effective sea, air, or express shipping. We handle export documentation, customs clearance, and ensure your goods arrive safely at your destination or FBA warehouse.",
    icon: Truck,
    imgId: "srv-img-6"
  }
];

const mockStrkImgConfig = {};

export default function HomeServices() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (window.ImageHelper && typeof window.ImageHelper.loadImages === 'function') {
        try {
            window.ImageHelper.loadImages(mockStrkImgConfig, containerRef.current);
        } catch (e) {
            console.log("Image load deferred");
        }
    }
  }, []);

  return (
    <section className="py-24 bg-white" ref={containerRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 id="services-title" className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900 mb-4">
            Comprehensive China Sourcing Services
          </h2>
          <p id="services-subtitle" className="text-lg text-slate-600">
            From finding the right factory to delivering goods to your door, we handle the entire process so you can focus on growing your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="group relative flex flex-col items-start bg-slate-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-100">
              <div className="rounded-xl bg-primary/10 p-4 mb-6">
                <service.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 id={`${service.id}-title`} className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p id={`${service.id}-desc`} className="text-slate-600 leading-relaxed mb-6 flex-1">
                {service.desc}
              </p>
              
              <Link to="/services" className="inline-flex items-center text-sm font-semibold text-primary mt-auto hover:text-primary/80 transition-colors">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
              
               {/* Hidden image tag for search indexing/future use if we want to show images in cards later */}
               {/*
                <img
                  className="hidden"
                  data-strk-img-id={service.imgId}
                  data-strk-img={`[${service.id}-desc] [${service.id}-title] [services-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={service.title}
                />
               */}
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
             <Link
              to="/services"
              className="inline-flex h-12 items-center justify-center rounded-md border-2 border-primary bg-transparent px-8 text-base font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
            >
              View All Services
            </Link>
        </div>
      </div>
    </section>
  );
}
