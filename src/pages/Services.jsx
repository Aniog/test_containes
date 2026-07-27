import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShieldCheck, ClipboardCheck, Truck, Factory, Zap } from 'lucide-react';
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  const services = [
    {
      id: "product-sourcing",
      icon: <Search className="text-accent" size={32} />,
      title: "Product Sourcing",
      desc: "Our expert sourcing team identifies multiple reliable manufacturers based on your specifications, negotiating the best prices without compromising quality.",
      points: ["Multiple supplier comparisons", "Price negotiation", "Bilingual communication", "Detailed sourcing reports"],
      imgId: "service-sourcing-img",
      imgRatio: "3x2"
    },
    {
      id: "supplier-verification",
      icon: <ShieldCheck className="text-accent" size={32} />,
      title: "Factory Audit & Verification",
      desc: "Don't take risks with unverified suppliers. We perform on-site audits to verify business licenses, production capacity, and social compliance.",
      points: ["On-site factory inspection", "Business license check", "Quality management audit", "Financial background check"],
      imgId: "service-audit-img",
      imgRatio: "3x2"
    },
    {
      id: "quality-control",
      icon: <ClipboardCheck className="text-accent" size={32} />,
      title: "Quality Control (QC)",
      desc: "We ensure your products meet your standards before they leave the factory. Our inspectors follow AQL 2.5 standards for rigorous checking.",
      points: ["Pre-shipment inspection", "During production check", "Container loading supervision", "Defect management"],
      imgId: "service-qc-img",
      imgRatio: "3x2"
    },
    {
      id: "logistics",
      icon: <Truck className="text-accent" size={32} />,
      title: "Shipping & Logistics",
      desc: "Seamless door-to-door or port-to-port shipping management. We handle consolidation, documentation, and customs clearance.",
      points: ["Sea, Air & Rail freight", "Cargo consolidation", "Customs documentation", "Amazon FBA prep & shipping"],
      imgId: "service-shipping-img",
      imgRatio: "3x2"
    }
  ];

  return (
    <div ref={containerRef} className="bg-white">
      {/* Page Header */}
      <section className="bg-primary py-20 text-white">
        <div className="container-custom">
          <h1 id="services-page-title" className="text-4xl md:text-5xl font-display font-bold mb-6">Our Sourcing Services</h1>
          <p id="services-page-subtitle" className="text-xl text-slate-300 max-w-2xl">
            End-to-end supply chain management tailored to help your business grow efficiently with reliable partners in China.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="container-custom">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div key={service.id} className={`flex flex-col lg:items-center gap-12 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
                <div className="flex-1 space-y-6">
                  <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center shadow-sm border border-slate-100">
                    {service.icon}
                  </div>
                  <h2 id={`service-title-${service.id}`} className="text-3xl font-display font-bold text-slate-900">{service.title}</h2>
                  <p id={`service-desc-${service.id}`} className="text-lg text-slate-600 leading-relaxed">
                    {service.desc}
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-4">
                    {service.points.map((point, i) => (
                      <li key={i} className="flex items-center space-x-2 text-slate-700 font-medium">
                        <Zap size={16} className="text-accent" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1">
                  <div className="aspect-[3/2] rounded-2xl overflow-hidden shadow-2xl border-8 border-slate-50">
                    <img
                      data-strk-img-id={service.imgId}
                      data-strk-img={`[service-desc-${service.id}] [service-title-${service.id}] [services-page-subtitle] [services-page-title]`}
                      data-strk-img-ratio="3x2"
                      data-strk-img-width="700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 2'/%3E"
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-50 py-20 border-t border-slate-100">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">Ready to Scaled Your Sourcing?</h2>
          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
            Contact us today for a consultation. Our team is ready to help you find the best suppliers in China.
          </p>
          <Link to="/contact" className="btn-accent px-10 py-4 text-lg">
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
