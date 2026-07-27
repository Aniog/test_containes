import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { Search, Shield, Truck, CheckCircle, Factory, Globe } from 'lucide-react';

const Services = () => {
  const containerRef = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const services = [
    { title: 'Product Sourcing', icon: Search, desc: 'We help you find the right manufacturers in China, negotiating the best prices and ensuring they meet your specifications.', details: ['Supplier identification', 'Price negotiation', 'Sample evaluation'] },
    { title: 'Supplier Verification', icon: Factory, desc: 'Avoid scams and unreliable suppliers. We conduct thorough on-site audits and background checks.', details: ['Business license check', 'Production capacity audit', 'Financial status verification'] },
    { title: 'Quality Control', icon: Shield, desc: 'Ensure your products meet international standards. We perform inspections at different production stages.', details: ['Pre-production inspection', 'During production inspection', 'Pre-shipment inspection'] },
    { title: 'Shipping & Logistics', icon: Truck, desc: 'We coordinate the entire shipping process, from the factory floor to your warehouse.', details: ['Freight forwarding', 'Customs clearance', 'Consolidation services'] },
    { title: 'Amazon FBA Prep', icon: CheckCircle, desc: 'Optimized services for Amazon sellers, ensuring compliance with FBA requirements.', details: ['FNSKU labeling', 'Poly-bagging', 'Carton marking'] },
    { title: 'OEM & Private Label', icon: Globe, desc: 'Helping you develop your own brand with custom packaging and product modifications.', details: ['Packaging design', 'Logo application', 'Custom molding'] },
  ];

  return (
    <div ref={containerRef}>
      <section className="bg-primary text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Our Sourcing Services</h1>
        <p className="text-xl opacity-90">Comprehensive solutions for your China-based supply chain.</p>
      </section>
      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((s, i) => (
            <div key={i} className="border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-transform hover:-translate-y-1">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <s.icon className="text-primary w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary">{s.title}</h3>
              <p className="text-slate-600 mb-6">{s.desc}</p>
              <ul className="space-y-2 mb-8">
                {s.details.map((d, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-slate-500">
                    <CheckCircle className="w-4 h-4 text-green-500" /> {d}
                  </li>
                ))}
              </ul>
              <img 
                data-strk-img-id={`service-img-${i}`}
                data-strk-img={`china sourcing ${s.title} inspection manufacturing`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-40 object-cover rounded-xl mt-auto"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
export default Services;
