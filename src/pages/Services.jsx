import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Search, ShieldCheck, Truck, Factory, BarChart3, Users, Box, Headphones } from 'lucide-react';

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (ImageHelper && ImageHelper.loadImages) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  const detailedServices = [
    {
      title: 'Supplier Identification & Sourcing',
      desc: 'We go beyond Alibaba to find the best manufacturers. We negotiate pricing, MOQ, and terms while ensuring they are legitimate factories, not traders.',
      icon: <Search className="w-12 h-12 text-yellow-500" />,
      features: ['Price Negotiation', 'Supplier Comparison', 'Direct Contract Support'],
      imgId: 'service-source-detail'
    },
    {
      title: 'Factory Audits & Verification',
      desc: 'Never send money blindly. We physically visit factories to verify their production capacity, machinery, certifications, and labor conditions.',
      icon: <Factory className="w-12 h-12 text-yellow-500" />,
      features: ['On-site Verification', 'Capacity Assessment', 'Document Audit'],
      imgId: 'service-audit-detail'
    },
    {
      title: 'Quality Inspections (QC)',
      desc: 'We perform Pre-Shipment Inspection (PSI), During Production Inspection (DPI), and Container Loading Supervision (CLS) to guarantee product quality.',
      icon: <ShieldCheck className="w-12 h-12 text-yellow-500" />,
      features: ['AQL Standard', 'Functionality Testing', 'Packaging Check'],
      imgId: 'service-qc-detail'
    },
    {
      title: 'Shipping & Logistics Coordination',
      desc: 'LCL or FCL, we optimize your shipping routes. We handle China export customs and coordinate with freight forwarders for seamless delivery.',
      icon: <Truck className="w-12 h-12 text-yellow-500" />,
      features: ['Export Documents', 'Cargo Consolidation', 'Freight Optimization'],
      imgId: 'service-log-detail'
    },
    {
      title: 'Amazon FBA / E-commerce Prep',
      desc: 'Specialized services for e-commerce sellers including labeling, kitting, and direct shipping to Amazon warehouses or 3PLs.',
      icon: <Box className="w-12 h-12 text-yellow-500" />,
      features: ['FNSKU Labeling', 'Palletizing', 'Strict Amazon Compliance'],
      imgId: 'service-fba-detail'
    },
    {
      title: 'Product Development & Prototype',
      desc: 'Help you communicate technical specs with engineers to create your own unique products and OEM/ODM solutions.',
      icon: <BarChart3 className="w-12 h-12 text-yellow-500" />,
      features: ['Blueprint Translation', 'Sample Modification', 'Mold Management'],
      imgId: 'service-proto-detail'
    }
  ];

  return (
    <div ref={containerRef}>
      {/* Header */}
      <section className="bg-slate-900 py-16 md:py-24 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="service-header-bg"
          data-strk-bg="China manufacturing factory hub"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Our Sourcing Services</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            End-to-end solutions designed to eliminate the risks of buying from China.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 id="why-service" className="text-3xl font-bold text-slate-900 mb-6">Why Use a Local Sourcing Agent?</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Navigating the China market can be challenging due to language barriers, cultural differences, and distance. We bridge this gap by being your feet on the ground.
              </p>
              <div className="space-y-4">
                {[
                  'Bilingual team fluent in Mandarin and English',
                  'Deep understanding of China manufacturing law',
                  'Quick on-site response anywhere in China',
                  'Exclusive focus on your best interest, not the factory'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="bg-yellow-100 p-1 rounded">
                      <ShieldCheck className="w-5 h-5 text-yellow-600" />
                    </div>
                    <span className="font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                data-strk-img-id="service-trust-img"
                data-strk-img="[why-service] China sourcing agent office inspection"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                alt="Our Team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {detailedServices.map((service, index) => (
              <div key={index} className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden flex flex-col">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    data-strk-img-id={service.imgId}
                    data-strk-img={`[service-title-${index}] China sourcing`}
                    data-strk-img-ratio="16x10"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 10'/%3E"
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
                <div className="p-8 flex-grow">
                  <div className="mb-6">{service.icon}</div>
                  <h3 id={`service-title-${index}`} className="text-2xl font-bold text-slate-900 mb-4 leading-tight">{service.title}</h3>
                  <p className="text-slate-600 mb-8 leading-relaxed">
                    {service.desc}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-sm font-semibold text-slate-500">
                        <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Mini */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Service FAQ</h2>
          <div className="space-y-8">
            <div>
              <h4 className="font-bold text-slate-900 mb-2">How much do you charge?</h4>
              <p className="text-slate-600">We offer both commission-based (usually 3-7%) and fixed-fee models depending on the scope of work. No upfront management fees for sourcing.</p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-2">Do you take kickbacks from factories?</h4>
              <p className="text-slate-600">Strictly no. We signed anti-corruption agreements with all our staff. We work exclusively for YOUR profit and protection.</p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-2">What is your turnaround time?</h4>
              <p className="text-slate-600">Basic sourcing reports with 3-5 verified suppliers are typically delivered within 48 to 72 hours.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

