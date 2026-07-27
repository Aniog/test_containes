import React, { useEffect, useRef } from 'react';
import { Search, ShieldCheck, CheckCircle2, Truck, Factory, Users, BarChart } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const allServices = [
    {
      title: 'Supplier Sourcing',
      description: 'We help you find the best suppliers in China by filtering through thousands of manufacturers, verifying their legitimacy, and evaluating their production capacity.',
      features: ['Supplier Background Check', 'Sample Procurement', 'Price Negotiation', 'Supplier Comparison Report'],
      icon: Search
    },
    {
      title: 'Factory Audit',
      description: 'Before you place a large order, we visit the factory in person to assess their quality management systems, social responsibility, and technical capabilities.',
      features: ['ISO Standards Verification', 'Worker Conditions Audit', 'Machinery Inspection', 'Production Line Assessment'],
      icon: ShieldCheck
    },
    {
      title: 'Quality Inspection',
      description: 'Our certified inspectors perform on-site checks during and after production to ensure your products meet the specified quality standards.',
      features: ['During Production Check (DUPRO)', 'Final Random Inspection (FRI)', 'Laboratory Testing Coordination', 'Detailed QC Reports with Photos'],
      icon: CheckCircle2
    },
    {
      title: 'Shipping & Logistics',
      description: 'We coordinate the entire shipping process, from factory warehouse to your final destination, optimizing routes and costs.',
      features: ['Sea, Air, and Rail Freight', 'Consolidation Services', 'Customs Clearance Support', 'Real-time Tracking'],
      icon: Truck
    }
  ];

  return (
    <div className="bg-white py-20 lg:py-32" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Our Services</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Professional end-to-end sourcing solutions designed to mitigate risks and maximize your profit margins when buying from China.
          </p>
        </div>

        <div className="space-y-24">
          {allServices.map((service, index) => (
            <div key={index} className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="flex-1 w-full lg:w-1/2">
                <div className="inline-flex items-center justify-center p-3 bg-blue-50 rounded-xl mb-6">
                  <service.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">{service.title}</h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 w-full lg:w-1/2">
                <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                  <img
                    data-strk-img-id={`service-img-${index}`}
                    data-strk-img={`${service.title} professional sourcing service china factory`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={service.title}
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
