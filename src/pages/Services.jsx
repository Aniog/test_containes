import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { CheckCircle2, Factory, Search, FileSignature, Anchor } from 'lucide-react';

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  const serviceDetails = [
    {
      id: 'sourcing',
      title: 'Product Sourcing',
      desc: 'We match your product requirements with pre-vetted, capable manufacturers.',
      icon: <Search className="w-8 h-8 text-blue-600 mb-4" />,
      features: [
        'Manufacturer identification & shortlisting',
        'Sample arrangement and consolidation',
        'Price negotiation and MOQs',
        'OEM/ODM Private label consulting'
      ]
    },
    {
      id: 'verification',
      title: 'Factory Verification & Audits',
      desc: 'Ensure you are dealing with a real factory and not a trading company.',
      icon: <FileSignature className="w-8 h-8 text-blue-600 mb-4" />,
      features: [
        'Business license & background checks',
        'On-site factory capacity audits',
        'Social compliance & ISO verification',
        'Detailed audit reporting'
      ]
    },
    {
      id: 'quality',
      title: 'Quality Control',
      desc: 'Protect your brand with strict quality checks at every production stage.',
      icon: <CheckCircle2 className="w-8 h-8 text-blue-600 mb-4" />,
      features: [
        'Pre-Production Inspection (PPI)',
        'During Production Inspection (DPI)',
        'Pre-Shipment Inspection (PSI)',
        'Container Loading Check (CLC)'
      ]
    },
    {
      id: 'logistics',
      title: 'Shipping & Logistics',
      desc: 'Seamless door-to-door or port-to-port delivery solutions.',
      icon: <Anchor className="w-8 h-8 text-blue-600 mb-4" />,
      features: [
        'FCL / LCL Sea Freight',
        'Air Freight & Express Courier',
        'Amazon FBA Prep & Forwarding',
        'Customs clearance support'
      ]
    }
  ];

  return (
    <div ref={containerRef} className="flex flex-col min-h-screen">
      {/* Header */}
      <div className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 id="services-main-title" className="text-4xl md:text-5xl font-bold mb-6">Our Sourcing Services</h1>
          <p id="services-main-desc" className="text-xl text-slate-300">
            End-to-end supply chain management. From finding the right factory to putting the final product in your warehouse.
          </p>
        </div>
      </div>

      {/* Services List */}
      <div className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10">
            {serviceDetails.map((svc) => (
              <Card key={svc.id} className="border-0 shadow-sm overflow-hidden flex flex-col">
                <div className="h-64 overflow-hidden relative">
                  <img
                    alt={svc.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    data-strk-img-id={`svc-img-${svc.id}`}
                    data-strk-img={`[svc-title-${svc.id}] [svc-desc-${svc.id}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <CardHeader>
                  {svc.icon}
                  <CardTitle id={`svc-title-${svc.id}`} className="text-2xl">{svc.title}</CardTitle>
                  <CardDescription id={`svc-desc-${svc.id}`} className="text-base text-slate-600">
                    {svc.desc}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <ul className="space-y-2">
                    {svc.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-blue-500 mr-2 shrink-0" />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-blue-50 py-20 border-t border-blue-100 mt-auto">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 id="services-cta-title" className="text-3xl font-bold text-slate-900 mb-6">Need a Custom Sourcing Plan?</h2>
          <p className="text-lg text-slate-600 mb-8">
            Every business has unique requirements. Contact us to design a sourcing structure that fits your scale, budget, and quality standards.
          </p>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-6 text-lg">
            <Link to="/contact">Get a Free Consultation</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Services;