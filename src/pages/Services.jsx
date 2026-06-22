import React, { useEffect, useRef } from 'react';
import { Search, ShieldCheck, Factory, BoxSelect, Ship, Users, CheckCircle2 } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const servicesList = [
  {
    id: "supplier-sourcing",
    title: "Supplier Sourcing & Verification",
    shortDesc: "Finding the right factory for your product.",
    description: "We don't just search on Alibaba. We leverage our local networks and industry databases to find direct manufacturers. We then conduct deep background checks, verifying their business licenses, export history, and real production capabilities to ensure you're working with a legitimate and capable factory.",
    icon: Search,
    features: ["Deep background checks", "Direct manufacturer identification", "Price negotiation", "Sample collection & evaluation"]
  },
  {
    id: "factory-audit",
    title: "Factory Audits",
    shortDesc: "On-site verification before you order.",
    description: "Our auditors travel to the factory to assess their facilities firsthand. We evaluate their quality management systems (ISO standards), production capacity, working conditions, and equipment. You receive a comprehensive report with photos, giving you confidence before placing a deposit.",
    icon: Factory,
    features: ["On-site facility inspection", "Quality system evaluation", "Capacity assessment", "Detailed audit report with photos"]
  },
  {
    id: "production-monitoring",
    title: "Production Follow-up",
    shortDesc: "Keeping your order on track.",
    description: "We act as your local project managers. We maintain constant communication with the factory during production, resolving any unexpected issues early. We track the production schedule closely to ensure your goods are finished on time and to your specifications.",
    icon: Users,
    features: ["Regular progress updates", "Issue resolution", "Schedule tracking", "Raw material verification"]
  },
  {
    id: "quality-inspection",
    title: "Quality Inspection (QC)",
    shortDesc: "Ensuring standards are met before shipping.",
    description: "We perform professional quality control using international AQL standards. Our inspectors can conduct Pre-Production Inspections (PPI), During Production Inspections (DPI), and Pre-Shipment Inspections (PSI). We provide detailed reports on defects, packaging, and functional tests.",
    icon: ShieldCheck,
    features: ["AQL standard inspections", "Pre-shipment inspection (PSI)", "Defect sorting", "Comprehensive QC reports"]
  },
  {
    id: "sample-consolidation",
    title: "Sample Consolidation",
    shortDesc: "Save money on international shipping.",
    description: "When sourcing from multiple suppliers, having each factory send samples internationally is expensive. We have suppliers send samples to our China office. We verify them against your requirements, consolidate them into one package, and forward them to you.",
    icon: BoxSelect,
    features: ["Sample collection from multiple vendors", "Basic conformity check", "Consolidated shipping", "Significant cost savings"]
  },
  {
    id: "logistics",
    title: "Shipping & Logistics",
    shortDesc: "From factory floor to your door.",
    description: "We coordinate the entire shipping process. Whether you need sea freight (FCL/LCL), air freight, or express delivery, we manage the bookings, customs clearance, and paperwork. We work with reliable forwarders to secure competitive rates.",
    icon: Ship,
    features: ["Sea, air, and express freight", "Customs clearance preparation", "Warehouse storage", "FBA prep and shipping"]
  }
];

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="bg-white">
      {/* Header */}
      <div className="bg-slate-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl" id="services-page-title">Our Services</h1>
          <p className="mt-6 text-lg leading-8 text-slate-300 max-w-2xl mx-auto" id="services-page-desc">
            End-to-end sourcing solutions tailored for global buyers. We manage the complexities of manufacturing in China so you don't have to.
          </p>
        </div>
      </div>

      {/* Services List */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="space-y-24">
          {servicesList.map((service, index) => (
            <div key={service.id} id={service.id} className={`flex flex-col lg:flex-row gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2 w-full">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100">
                  <img
                    data-strk-img-id={`service-img-${service.id}`}
                    data-strk-img={`[svc-title-${service.id}] [svc-short-${service.id}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="lg:w-1/2 w-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                    <service.icon className="h-6 w-6 text-blue-600" aria-hidden="true" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900" id={`svc-title-${service.id}`}>{service.title}</h2>
                </div>
                <p className="text-xl text-blue-600 mb-6" id={`svc-short-${service.id}`}>{service.shortDesc}</p>
                <p className="text-lg text-slate-600 mb-8" id={`svc-desc-${service.id}`}>{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-blue-600 shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;