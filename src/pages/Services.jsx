import React, { useEffect, useRef } from 'react';
import { ShieldCheck, Truck, Factory, Search, CheckCircle2 } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const serviceList = [
  {
    title: "Supplier Identification & Sourcing",
    desc: "We scan the market to find manufacturers that meet your quality, price, and regulatory requirements. We don't just use Alibaba; we use our local networks and industrial databases.",
    icon: Search,
    img: "supplier search factory china"
  },
  {
    title: "Factory Verification & Audits",
    desc: "Legitimacy is key. We physically visit factories to verify their licenses, production capacity, machine condition, and social compliance standards.",
    icon: ShieldCheck,
    img: "factory audit inspection verification"
  },
  {
    title: "Pre-Shipment Inspection (QC)",
    desc: "Our inspectors check your goods based on AQL standards (ANSI/ASQ Z1.4). We check dimensions, workmanship, functions, packaging, and marking.",
    icon: Factory,
    img: "quality control inspection electronics"
  },
  {
    title: "Shipping & Logistics Coordination",
    desc: "From FCL to LCL, we coordinate with freight forwarders to ensure your goods are shipped cost-effectively and documents are correctly prepared for customs.",
    icon: Truck,
    img: "shipping container logistics port"
  }
];

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col">
      <section className="bg-slate-900 py-20 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 id="services-page-title" className="text-4xl md:text-5xl font-bold mb-6">Our Sourcing Services</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Professional solutions designed to protect your interests at every stage of the supply chain in China.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-24">
            {serviceList.map((service, index) => (
              <div 
                key={index} 
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={index % 2 !== 0 ? 'lg:order-2' : ''}>
                  <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 text-blue-600">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <h2 id={`service-title-${index}`} className="text-3xl font-bold text-slate-900 mb-6">{service.title}</h2>
                  <p className="text-slate-600 text-lg leading-relaxed mb-8">{service.desc}</p>
                  
                  <ul className="space-y-4">
                    <li className="flex gap-3 items-center text-slate-700">
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                      <span>Dedicated Account Manager</span>
                    </li>
                    <li className="flex gap-3 items-center text-slate-700">
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                      <span>Regular Progress Reports</span>
                    </li>
                    <li className="flex gap-3 items-center text-slate-700">
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                      <span>Transparent Pricing Model</span>
                    </li>
                  </ul>
                </div>
                
                <div className={index % 2 !== 0 ? 'lg:order-1' : ''}>
                   <img 
                    data-strk-img-id={`service-img-${index}`}
                    data-strk-img={`[service-title-${index}] sourcing agent service`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="800"
                    className="rounded-2xl shadow-xl"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={service.title}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
