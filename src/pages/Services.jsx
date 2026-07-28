import React, { useEffect, useRef } from 'react';
import { ShieldCheck, Search, Settings, Truck, Package, HeartHandshake, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button.tsx';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const services = [
    {
      id: 'supplier-sourcing',
      icon: Search,
      title: 'Supplier Sourcing & Verification',
      shortDesc: 'Find reliable manufacturers capable of meeting your exact requirements.',
      desc: 'We don\'t just find suppliers on Alibaba. We leverage our local network to find genuine manufacturers, not middlemen. We verify their business licenses, export history, and production capabilities. We can also conduct on-site factory audits to ensure they meet your quality and ethical standards.',
      imgQuery: 'factory verify business manufacturing check'
    },
    {
      id: 'sample-development',
      icon: Package,
      title: 'Sample Development',
      shortDesc: 'Ensure your product matches your vision before bulk production.',
      desc: 'We manage the entire sampling process. We translate your requirements to the factory, receive the initial samples in our China office, inspect them against your specifications, and consolidate multiple samples from different suppliers into one package to send to you, saving you significantly on international shipping costs.',
      imgQuery: 'product sample prototype testing comparison'
    },
    {
      id: 'production-followup',
      icon: HeartHandshake,
      title: 'Production Follow-up',
      shortDesc: 'Keep your orders on schedule with constant local communication.',
      desc: 'Language barriers and time zones cause delays. We act as your project manager on the ground. We establish clear production timelines with suppliers, conduct regular check-ins, resolve mid-production issues immediately, and provide you with transparent, weekly progress reports.',
      imgQuery: 'production line manufacturing schedule management'
    },
    {
      id: 'quality-control',
      icon: Settings,
      title: 'Quality Control (QC)',
      shortDesc: 'Prevent defective products from ever leaving China.',
      desc: 'We perform strict Quality Control based on AQL (Acceptable Quality Limit) standards. We can conduct Pre-Production Inspections (PPI), During Production Inspections (DUPRO), and Pre-Shipment Inspections (PSI). We provide detailed PDF reports with high-resolution photos of your goods before you make the final payment.',
      imgQuery: 'quality control inspection measurement testing'
    },
    {
      id: 'shipping-customs',
      icon: Truck,
      title: 'Shipping & Logistics',
      shortDesc: 'Optimized freight forwarding straight to your warehouse or FBA.',
      desc: 'Navigate the complexities of international shipping with ease. We help you choose the most cost-effective shipping method (sea, express, or air freight), handle customs clearance in China, and coordinate delivery directly to your door, including specialized requirements like Amazon FBA prep.',
      imgQuery: 'cargo shipping freight containers logistics'
    }
  ];

  return (
    <div ref={containerRef} className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="bg-slate-100 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h1 id="page-title" className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Sourcing Services</h1>
          <p id="page-subtitle" className="text-lg md:text-xl text-slate-600">
            Comprehensive, end-to-end sourcing solutions tailored to global buyers importing from China.
          </p>
        </div>
      </section>

      {/* Services Detailed List */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl space-y-24">
          {services.map((service, index) => (
            <div key={service.id} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 lg:gap-16 items-center`}>
              {/* Image Side */}
              <div className="w-full md:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
                  <img
                    data-strk-img-id={`service-img-${service.id}`}
                    data-strk-img={`[service-title-${service.id}] [service-desc-${service.id}] ${service.imgQuery}`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Content Side */}
              <div className="w-full md:w-1/2 space-y-6">
                <div className="inline-flex h-12 w-12 rounded-lg bg-primary/10 items-center justify-center">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h2 id={`service-title-${service.id}`} className="text-3xl font-bold text-slate-900">{service.title}</h2>
                <h3 className="text-xl font-medium text-slate-700">{service.shortDesc}</h3>
                <p id={`service-desc-${service.id}`} className="text-lg text-slate-600 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-slate-50 border-t">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-2xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Need a Custom Sourcing Plan?</h2>
          <p className="text-lg text-slate-600 mb-8">
            Every business and product is unique. Contact us today to discuss your specific requirements and see how we can streamline your supply chain.
          </p>
          <Link to="/contact">
            <Button size="lg" className="text-lg h-14 px-8">
              Discuss Your Project <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};