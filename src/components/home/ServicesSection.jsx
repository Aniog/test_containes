import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Search, Factory, ClipboardCheck, Truck, ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import SectionHeader from '../shared/SectionHeader';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and shortlist qualified Chinese manufacturers that match your product specs, MOQ, and budget requirements.',
    color: 'bg-blue-50 text-blue-600',
    imgId: 'svc-img-1a2b3c',
    imgQuery: '[svc-title-1] supplier factory China manufacturing',
  },
  {
    icon: Factory,
    title: 'Factory Verification',
    description: 'On-site audits to verify business licenses, production capacity, certifications, and working conditions before you commit.',
    color: 'bg-amber-50 text-amber-600',
    imgId: 'svc-img-2b3c4d',
    imgQuery: '[svc-title-2] factory audit verification China',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Pre-shipment, during-production, and container loading inspections to ensure your goods meet agreed specifications.',
    color: 'bg-green-50 text-green-600',
    imgId: 'svc-img-3c4d5e',
    imgQuery: '[svc-title-3] quality control inspection products',
  },
  {
    icon: Truck,
    title: 'Shipping & Logistics',
    description: 'We coordinate freight forwarding, customs documentation, and door-to-door delivery to your warehouse or fulfillment center.',
    color: 'bg-purple-50 text-purple-600',
    imgId: 'svc-img-4d5e6f',
    imgQuery: '[svc-title-4] shipping logistics freight China export',
  },
];

export default function ServicesSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section className="section-white" ref={containerRef}>
      <div className="container-xl">
        <SectionHeader
          label="Our Services"
          title="Everything You Need to Source from China"
          subtitle="From finding the right supplier to getting goods delivered, we handle every step of the sourcing process."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <div key={svc.title} className="card hover:shadow-md transition-shadow duration-200 flex flex-col">
                <div className="rounded-lg overflow-hidden mb-5 h-40">
                  <img
                    alt={svc.title}
                    className="w-full h-full object-cover"
                    data-strk-img-id={svc.imgId}
                    data-strk-img={svc.imgQuery}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${svc.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 id={`svc-title-${i + 1}`} className="text-lg font-bold text-slate-900 mb-2">{svc.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed flex-1">{svc.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link to="/services" className="btn-primary">
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
