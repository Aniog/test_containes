import React, { useEffect, useRef } from 'react';
import { Search, ShieldCheck, ClipboardCheck, Ship, Box, Target, FileSignature, Scale } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';

const servicesList = [
  {
    id: 'sourcing',
    title: 'Product Sourcing & Supplier Finding',
    shortDesc: 'Identifying the most capable and reliable manufacturers for your specific product.',
    fullDesc: 'We don\'t just search Alibaba. We leverage our local network and industry databases to find direct manufacturers, bypassing trading companies. We evaluate potential suppliers based on production capability, past export experience, certifications, and pricing competitiveness.',
    features: ['Direct factory identification', 'Price negotiation', 'Sample arrangement & consolidation', 'Background verification'],
    icon: Search,
    imgId: 'service-img-source-2d4f',
    imgQuery: 'factory owner and buyer shaking hands business meeting'
  },
  {
    id: 'audits',
    title: 'Factory Audits & Verification',
    shortDesc: 'On-site inspections to ensure the factory actually exists and meets your standards.',
    fullDesc: 'Before you send a deposit, our team visits the factory in person. We assess their production lines, warehouse organization, quality control systems, and worker conditions to ensure they have the real capacity to fulfill your order as promised.',
    features: ['Business license verification', 'Production capacity assessment', 'Quality management system check', 'Social compliance auditing'],
    icon: ShieldCheck,
    imgId: 'service-img-audit-9k1m',
    imgQuery: 'factory audit inspector checking manufacturing equipment'
  },
  {
    id: 'quality',
    title: 'Quality Control Inspections',
    shortDesc: 'Pre-shipment and during-production checks to guarantee product quality.',
    fullDesc: 'We protect your investment by inspecting goods before they leave China. Following AQL (Acceptable Quality Limit) standards, we check for visual defects, functional performance, packaging integrity, and adherence to your specific requirements.',
    features: ['Pre-Shipment Inspection (PSI)', 'During Production Inspection (DUPRO)', 'First Article Inspection (FAI)', '100% Full Inspection (Optional)'],
    icon: ClipboardCheck,
    imgId: 'service-img-qc-5p8n',
    imgQuery: 'quality control worker inspecting electronics factory line'
  },
  {
    id: 'shipping',
    title: 'Logistics & Shipping Management',
    shortDesc: 'End-to-end coordination of freight, customs, and final delivery.',
    fullDesc: 'Navigating international shipping can be complex and expensive. We compare rates among reliable freight forwarders to get you the best deal for sea, air, or rail freight. We manage all export documentation and ensure smooth customs clearance.',
    features: ['Sea/Air/Rail freight booking', 'FCL and LCL container loading', 'Customs documentation (Export & Import)', 'Amazon FBA prep & delivery'],
    icon: Ship,
    imgId: 'service-img-ship-3r7x',
    imgQuery: 'cargo ship container port logistics crane'
  },
  {
    id: 'prototyping',
    title: 'Prototyping & OEM/ODM Development',
    shortDesc: 'Turning your concepts into physical products ready for mass production.',
    fullDesc: 'If you are developing a new product, we work closely with engineers and tooling factories to create molds and prototypes. We protect your intellectual property with local NNN (Non-Disclosure, Non-Use, Non-Circumvention) agreements.',
    features: ['3D modeling & 3D printing', 'Mold making & tooling', 'Material sourcing', 'NNN agreement drafting'],
    icon: Box,
    imgId: 'service-img-proto-8y2w',
    imgQuery: 'engineer measuring prototype product caliper'
  },
  {
    id: 'compliance',
    title: 'Compliance & Certification',
    shortDesc: 'Ensuring your products meet the legal requirements of your target market.',
    fullDesc: 'We help classify your product and determine required certifications (CE, FCC, RoHS, FDA, etc.). We coordinate with accredited testing laboratories in China to get your products certified before they hit the market.',
    features: ['Regulatory requirement analysis', 'Lab testing coordination', 'Labeling requirements review', 'Certification document management'],
    icon: FileSignature,
    imgId: 'service-img-comp-1c9v',
    imgQuery: 'laboratory testing electronic compliance safety'
  }
];

export default function Services() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
        if(containerRef.current) {
            ImageHelper.loadImages(strkImgConfig, containerRef.current);
        }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef} className="w-full">
      {/* Header Section */}
      <section className="bg-blue-900 py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 id="services-page-title" className="text-4xl md:text-5xl font-bold text-white mb-6">Our Sourcing Services</h1>
          <p id="services-page-subtitle" className="text-xl text-blue-100">
            A complete end-to-end solution for manufacturing and importing from China. Choose individual services or let us manage the entire process.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {servicesList.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div key={service.id} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-16 items-center`}>
                
                {/* Content Side */}
                <div className="flex-1 space-y-6">
                  <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-bold">
                    <Icon className="h-4 w-4" />
                    <span>Service {index + 1}</span>
                  </div>
                  
                  <h2 id={`service-title-${service.id}`} className="text-3xl font-bold text-slate-900">
                    {service.title}
                  </h2>
                  
                  <p className="text-xl text-slate-700 font-medium pb-2 border-b border-slate-200">
                    {service.shortDesc}
                  </p>
                  
                  <p id={`service-desc-${service.id}`} className="text-slate-600 leading-relaxed">
                    {service.fullDesc}
                  </p>
                  
                  <div>
                    <h4 className="font-bold text-slate-900 mb-4 tracking-tight">Key Inclusions:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-2 text-slate-600 text-sm">
                          <CheckCircle2 className="h-5 w-5 text-orange-500 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Image Side */}
                <div className="flex-1 w-full">
                  <div className="relative aspect-auto lg:aspect-[4/3] rounded-xl overflow-hidden shadow-xl border border-slate-200 bg-slate-200 min-h-[300px]">
                    <img
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      data-strk-img-id={service.imgId}
                      data-strk-img={`[service-title-${service.id}] ${service.imgQuery}`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                  </div>
                </div>
                
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Need a Custom Sourcing Plan?</h2>
          <p className="text-lg text-slate-600 mb-10">
            Every product and supply chain is unique. Contact us today to discuss your specific requirements, and we'll build a tailored sourcing strategy for your business.
          </p>
          <div className="flex justify-center gap-4">
             <Link to="/contact" className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-md transition-colors shadow-sm text-lg">
                Request a Proposal
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
}