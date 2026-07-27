import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Search, ShieldCheck, Factory, Truck, ClipboardCheck, BarChart2 } from 'lucide-react';

const serviceList = [
  {
    id: "sourcing",
    title: "Product Sourcing & Supplier Search",
    description: "Finding the right factory is the foundation of a successful business. We don't just search on Alibaba; we use our local network to find reliable manufacturers that don't even list online.",
    features: [
      "Identifying 3-5 qualified suppliers",
      "Direct price negotiation on your behalf",
      "Detailed comparison reports",
      "Factory profile and history verification"
    ],
    icon: Search,
    imgId: "service-sourcing-img",
    imgQuery: "factory market search china sourcing"
  },
  {
    id: "verification",
    title: "Factory Audits & Verification",
    description: "Risk mitigation is key when working with overseas partners. Our team visits factories in person to ensure they have the licenses, capacity, and machinery they claim to have.",
    features: [
      "On-site factory audit (ISO standards)",
      "Business and export license check",
      "Equipment and workforce assessment",
      "Environmental and ethical standards audit"
    ],
    icon: ShieldCheck,
    imgId: "service-verification-img",
    imgQuery: "factory audit inspection quality control"
  },
  {
    id: "qc",
    title: "Quality Control & Inspections",
    description: "Protect your brand by ensuring every product meets your standards. We perform rigorous inspections at various stages to catch defects before the goods leave China.",
    features: [
      "Pre-production inspection (PPI)",
      "During production inspection (DPI)",
      "Pre-shipment inspection (PSI/FRI)",
      "Detailed reports with photos and videos"
    ],
    icon: Factory,
    imgId: "service-qc-img",
    imgQuery: "product inspection quality control laboratory"
  },
  {
    id: "logistics",
    title: "Logistics & Shipping Management",
    description: "Shipping from China can be complex. We coordinate with shippers to ensure your goods are consolidated, packed correctly, and shipped through the most cost-effective route.",
    features: [
      "Consolidation from multiple suppliers",
      "Amazon FBA prep and labeling",
      "Sea, Air, and Rail freight coordination",
      "Customs clearance document preparation"
    ],
    icon: Truck,
    imgId: "service-shipping-img",
    imgQuery: "warehouse shipping container loading logistics"
  }
];

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    document.title = "Our Services | Product Sourcing, Factory Audits & QC | SSourcing China";
    window.scrollTo(0, 0);
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="bg-white">
      {/* Page Header */}
      <section className="bg-slate-900 py-20 text-white relative">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Our Professional Services</h1>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Comprehensive solutions for global buyers looking to manufacture and source products from China with complete peace of mind.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-32">
            {serviceList.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id}
                className={`flex flex-col lg:flex-row items-center gap-16 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="lg:w-1/2 space-y-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h2 id={`${service.id}-title`} className="text-3xl font-bold text-slate-900 tracking-tight">{service.title}</h2>
                  <p id={`${service.id}-desc`} className="text-slate-600 text-lg leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3 pt-4">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-700">
                        <ClipboardCheck className="w-5 h-5 text-primary shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-6">
                    <Link to="/contact">
                      <Button size="lg">Inquire About This Service</Button>
                    </Link>
                  </div>
                </div>

                <div className="lg:w-1/2 rounded-2xl overflow-hidden shadow-xl border border-slate-100">
                  <img 
                    data-strk-img-id={service.imgId}
                    data-strk-img={`[${service.id}-desc] [${service.id}-title] ${service.imgQuery}`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={service.title}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Area */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Need a Custom Sourcing Solution?</h2>
          <p className="text-slate-600 text-lg mb-10">
            Every business is unique. We can tailor our services to meet your specific procurement and supply chain requirements.
          </p>
          <Link to="/contact">
            <Button size="xl" className="h-14 px-10">Request a Custom Proposal</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
