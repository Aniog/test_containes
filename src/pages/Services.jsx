import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Search, ShieldCheck, CheckCircle, Clock, Truck } from 'lucide-react';

const services = [
  {
    id: 'sourcing',
    title: 'Supplier Sourcing',
    description: 'We don\t just search Alibaba. We use our ground-level network in China to find factories that don\t advertise online, ensuring better prices and more reliable capacity.',
    icon: Search,
    points: ['Access to non-public factory networks', 'Initial price negotiations', 'Sample consolidation', 'Detailed comparison reports']
  },
  {
    id: 'audits',
    title: 'Factory Audits',
    description: 'Don\t risk your capital on "ghost" factories. Our auditors visit factories in person to verify their legal documents, machinery, workers, and social compliance.',
    icon: ShieldCheck,
    points: ['Legality & certification verification', 'Production capacity assessment', 'ISO/BSCI/Sedex compliance checks', 'On-site video & photo documentation']
  },
  {
    id: 'qc',
    title: 'Quality Inspection',
    description: 'Quality is non-negotiable. We perform inspections at multiple stages: during production (DUPRO) and Pre-Shipment (FRI) using AQL standards.',
    icon: CheckCircle,
    points: ['Raw material inspection', 'In-line production monitoring', 'Final random inspection (FRI)', 'Loading supervision']
  },
  {
    id: 'following',
    title: 'Production Following',
    description: 'Chinese factories often prioritize larger orders or delay smaller ones. We act as your project manager, ensuring your production stays on track and deadlines are met.',
    icon: Clock,
    points: ['Weekly progress reports', 'Timeline bottleneck resolution', 'Packaging & labeling oversight', 'Component quality tracking']
  },
  {
    id: 'logistics',
    title: 'Shipping & Logistics',
    description: 'We handle the final mile to your door. From export documentation in China to ocean freight and customs clearance in your country.',
    icon: Truck,
    points: ['FCL & LCL shipping options', 'Air freight for urgent stock', 'Import/Export documentation', 'Door-to-door delivery coordination']
  }
];

export default function Services() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="bg-white">
      {/* Header */}
      <section className="bg-slate-900 py-24 sm:py-32 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          data-strk-bg-id="services-header-bg"
          data-strk-bg="[services-main-subtitle] [services-main-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <div className="mx-auto max-w-2xl text-center">
            <h1 id="services-main-title" className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Comprehensive Sourcing Solutions</h1>
            <p id="services-main-subtitle" className="mt-6 text-lg leading-8 text-slate-300">
              Everything you need to source, verify, and ship products from China with total peace of mind.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div key={service.id} className={`flex flex-col gap-16 lg:flex-row items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 text-white">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <h2 id={`service-title-${service.id}`} className="text-3xl font-bold tracking-tight text-slate-900">{service.title}</h2>
                  </div>
                  <p id={`service-desc-${service.id}`} className="text-lg leading-8 text-slate-600 mb-8">
                    {service.description}
                  </p>
                  <ul className="space-y-4">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-slate-700">
                        <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-10">
                    <Button asChild className="bg-blue-600 hover:bg-blue-700">
                      <Link to="/contact">Discuss Your Project</Link>
                    </Button>
                  </div>
                </div>
                <div className="flex-1 relative">
                  <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-xl bg-slate-100">
                     <img
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={service.title}
                      className="h-full w-full object-cover"
                      data-strk-img-id={`service-img-${service.id}`}
                      data-strk-img={`[service-title-${service.id}] [service-desc-${service.id}] China factory quality`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-slate-50 py-24 sm:py-32 border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Not sure which service you need?</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Speak with a sourcing consultant today. We'll help you build a custom package that fits your business goals.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link to="/contact">Start Free Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
