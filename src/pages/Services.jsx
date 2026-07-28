import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShieldCheck, ClipboardCheck, Truck, Package, Scale, ArrowRight, CheckCircle2 } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const serviceDetails = [
  {
    id: 'product-sourcing',
    icon: Search,
    title: 'Product Sourcing & Supplier Identification',
    titleId: 'srv-sourcing-title',
    descId: 'srv-sourcing-desc',
    desc: 'Finding the right manufacturer is the foundation of importing success. We do not just search Alibaba; we leverage our localized network to find capable factories that align with your requirements.',
    features: [
      'Comprehensive supplier search across multiple platforms and offline networks',
      'Price negotiation and cost breakdown structure (BOM)',
      'Evaluating manufacturing capabilities and capacity',
      'Requesting and consolidating product samples for your review',
      'Shortlisting 3-5 of the best-fit manufacturers'
    ]
  },
  {
    id: 'supplier-verification',
    icon: ShieldCheck,
    title: 'Supplier Verification & Factory Audit',
    titleId: 'srv-audit-title',
    descId: 'srv-audit-desc',
    desc: 'Never send money to an unverified entity. We conduct rigorous background checks and physical factory audits to guarantee you are dealing with a legitimate, competent manufacturer, not a trading company posing as a factory.',
    features: [
      'Verification of business licenses, export licenses, and certifications (ISO, CE, etc.)',
      'On-site factory physical capability assessment',
      'Review of quality management systems (QMS) in place',
      'Assessment of working conditions and social compliance',
      'Detailed audit reports with photos and videos'
    ]
  },
  {
    id: 'quality-control',
    icon: ClipboardCheck,
    title: 'Rigorous Quality Control (QC)',
    titleId: 'srv-qc-title',
    descId: 'srv-qc-desc',
    desc: 'We are your eyes and ears on the factory floor. Our independent QC inspectors follow AQL (Acceptable Quality Limit) standards to catch defects before goods leave the factory.',
    features: [
      'Pre-Production Inspection (PPI) to check raw materials',
      'During Production Inspection (DPI) to identify early issues',
      'Pre-Shipment Inspection (PSI) on finished and packaged goods',
      'Container Loading Supervision (CLS)',
      'Comprehensive defect reporting and corrective action plans'
    ]
  },
  {
    id: 'production-tracking',
    icon: Package,
    title: 'Production Follow-up & Management',
    titleId: 'srv-prod-title',
    descId: 'srv-prod-desc',
    desc: 'Factories in China require constant communication to ensure deadlines are met. We manage the day-to-day communication, solve problems as they arise, and keep your production on schedule.',
    features: [
      'Establishing a clear production timeline and milestones',
      'Weekly progress updates and status reports',
      'Managing tooling, molds, and custom packaging design',
      'Resolving manufacturing delays or misunderstandings',
      'Translating complex technical requirements accurately'
    ]
  },
  {
    id: 'shipping-logistics',
    icon: Truck,
    title: 'Shipping, Logistics & Customs',
    titleId: 'srv-ship-title',
    descId: 'srv-ship-desc',
    desc: 'We coordinate the final leg of the journey, ensuring your goods are delivered safely and cost-effectively from the factory floor to your final destination anywhere in the world.',
    features: [
      'Freight forwarding optimization (Sea vs. Air vs. Rail freight)',
      'Consolidating shipments from multiple suppliers to save costs (LCL)',
      'Handling all export documentation (Bill of Lading, Commercial Invoice, Packing List)',
      'Ensuring compliance with local customs requirements',
      'Door-to-door (DDP) or Port-to-port logistics solutions'
    ]
  }
];

export default function Services() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="pb-20">
      {/* Header */}
      <section className="bg-slate-900 pt-20 pb-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-40 mix-blend-overlay"
          data-strk-bg-id="services-header-bg"
          data-strk-bg="[services-header-desc] [services-header-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 id="services-header-title" className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Our Sourcing Services</h1>
          <p id="services-header-desc" className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            End-to-end supply chain management tailored to your specific business needs. We eliminate the risks of importing from China.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {serviceDetails.map((service, index) => (
              <div key={service.id} id={service.id} className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1 w-full relative">
                  <div className="absolute inset-0 bg-blue-100 transform translate-x-4 translate-y-4 rounded-2xl z-0"></div>
                  <img
                    alt={service.title}
                    data-strk-img-id={`img-${service.id}`}
                    data-strk-img={`[${service.descId}] [${service.titleId}] [services-header-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="relative z-10 w-full rounded-2xl shadow-lg border border-slate-200 object-cover aspect-4/3"
                  />
                </div>
                <div className="flex-1 space-y-6">
                  <div className="w-14 h-14 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7" />
                  </div>
                  <h2 id={service.titleId} className="text-3xl font-bold text-slate-900">{service.title}</h2>
                  <p id={service.descId} className="text-lg text-slate-600 leading-relaxed">{service.desc}</p>
                  
                  <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mt-8">
                    <h3 className="font-semibold text-slate-900 mb-4 pb-2 border-b border-slate-200">What's included in this service:</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                          <span className="text-slate-700 text-sm leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing/Engagement Model CTA */}
      <section className="bg-blue-50 py-20 border-y border-blue-100 mt-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Transparent Engagement Models</h2>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed">
            We don't believe in hidden fees or kickbacks from factories. We offer transparent project-based pricing or commission-based models depending on your order volume and ongoing needs.
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-md">
            Discuss Your Project With Us
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
