import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Search, Factory, FileCheck, ClipboardList, Ship, ShieldCheck, BarChart3, Globe } from 'lucide-react';

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const detailedServices = [
    {
      title: "Product Sourcing & Analysis",
      id: "srv-detailed-sourcing",
      icon: <Search className="text-accent" size={32} />,
      desc: "We don't just find suppliers; we analyze them. Our team deep-dives into the Chinese market to find manufacturers that match your price point and quality expectations perfectly.",
      points: ["Multi-supplier quoting", "Price negotiation", "Sample consolidation", "Technical spec review"]
    },
    {
      title: "Supplier Audits & Verification",
      id: "srv-detailed-verify",
      icon: <Factory className="text-accent" size={32} />,
      desc: "Transparency is key. We visit factories in person to verify their legitimacy, production capabilities, and adherence to social and safety standards.",
      points: ["On-site factory tours", "Business license verification", "Production capacity check", "ISO & Cert validation"]
    },
    {
      title: "Strict Quality Control",
      id: "srv-detailed-qc",
      icon: <FileCheck className="text-accent" size={32} />,
      desc: "Your quality is our priority. We perform rigid inspections at various production stages to catch errors before they leave the factory floor.",
      points: ["Initial Production Check", "During Production (DUPRO)", "Final Random Inspection (FRI)", "Container Loading Check"]
    },
    {
      title: "Logistics & Global Shipping",
      id: "srv-detailed-ship",
      icon: <Ship className="text-accent" size={32} />,
      desc: "Navigating international shipping is complex. We handle the paperwork, consolidation, and coordination to ensure your goods arrive safely and cost-effectively.",
      points: ["LCL/FCL consolidation", "Customs documentation", "Sea & Air freight booking", "Door-to-door (DDP) options"]
    }
  ];

  return (
    <div ref={containerRef} className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">Our Sourcing Services</h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto font-light">
            Comprehensive, on-the-ground support for your entire procurement lifecycle in China. We act as your office, eyes, and ears in the world's largest manufacturing hub.
          </p>
        </div>

        <div className="space-y-24">
          {detailedServices.map((service, idx) => (
            <div key={idx} className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center`}>
              <div className="lg:w-1/2">
                <div className="mb-6">{service.icon}</div>
                <h2 id={service.id} className="text-3xl font-bold text-slate-900 mb-6">{service.title}</h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">{service.desc}</p>
                <ul className="grid grid-cols-2 gap-4">
                  {service.points.map((p, pIdx) => (
                    <li key={pIdx} className="flex items-center text-sm font-semibold text-slate-700">
                      <ShieldCheck size={18} className="text-accent mr-2" /> {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:w-1/2 relative">
                <div className="absolute -inset-4 bg-slate-100 rounded-2xl -rotate-2 z-0"></div>
                <div className="relative z-10 w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    alt={service.title}
                    data-strk-img-id={`srv-detailed-img-${idx}`}
                    data-strk-img={`[${service.id}] China factory quality inspection logistics`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
