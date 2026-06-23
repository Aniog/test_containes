import React, { useEffect, useRef } from 'react';
import { Factory, ShieldCheck, Search, ClipboardCheck, Ship } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const services = [
  {
    id: 'sourcing',
    title: 'Supplier Sourcing',
    description: 'We find the best-matched factories for your products, comparing prices and capabilities.',
    icon: Search,
    imgId: 'service-img-sourcing'
  },
  {
    id: 'verification',
    title: 'Supplier Verification',
    description: 'In-depth background checks and factory audits to ensure legal compliance and capacity.',
    icon: Factory,
    imgId: 'service-img-factory'
  },
  {
    id: 'inspection',
    title: 'Quality Control',
    description: 'Pre-shipment inspections following AQL standards to ensure specifications are met.',
    icon: ShieldCheck,
    imgId: 'service-img-qc'
  },
  {
    id: 'production',
    title: 'Production Support',
    description: 'On-site production monitoring and troubleshooting to prevent delays and defects.',
    icon: ClipboardCheck,
    imgId: 'service-img-production'
  },
  {
    id: 'shipping',
    title: 'Logistics & Shipping',
    description: 'Coordinating sea, air, or rail freight, including customs clearance and door delivery.',
    icon: Ship,
    imgId: 'service-img-shipping'
  }
];

export default function HomeServices() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section ref={containerRef} className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 id="services-title" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Complete Sourcing Solutions</h2>
          <p id="services-subtitle" className="text-lg text-slate-600 max-w-2xl mx-auto">
            From initial search to final delivery, we handle every detail of your China procurement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc) => (
            <Card key={svc.id} className="border-none shadow-md hover:shadow-xl transition-shadow overflow-hidden group">
              <div className="h-48 overflow-hidden relative">
                <img 
                  data-strk-img-id={svc.imgId}
                  data-strk-img={`[service-title-${svc.id}] China factory ${svc.title} process`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={svc.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-primary text-white p-3 rounded-full">
                  <svc.icon className="h-6 w-6" />
                </div>
              </div>
              <CardHeader>
                <CardTitle id={`service-title-${svc.id}`}>{svc.title}</CardTitle>
                <CardDescription className="text-base mt-2">
                  {svc.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
