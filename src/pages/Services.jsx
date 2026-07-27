import React, { useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, ShieldCheck, CheckCircle, Package, Truck, Box } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const fullServices = [
    {
      id: 'sourcing',
      title: 'Product Sourcing',
      icon: Search,
      desc: 'Finding the right supplier is the most critical step. We tap into our extensive network of verified Chinese manufacturers to find the best match for your specific requirements.',
      features: ['Supplier identification and screening', 'Price negotiation', 'Background checks', 'Sample arrangement and evaluation']
    },
    {
      id: 'verification',
      title: 'Supplier Verification (Factory Audit)',
      icon: ShieldCheck,
      desc: 'Never risk your capital with unknown entities. We conduct rigorous on-site factory audits to ensure the supplier is legitimate, capable, and ethically compliant.',
      features: ['Business license verification', 'Production capacity assessment', 'Quality management system review', 'Working condition inspection']
    },
    {
      id: 'qc',
      title: 'Quality Control & Inspection',
      icon: CheckCircle,
      desc: 'Quality issues can destroy your brand. Our specialized QC team inspects your products at various stages of production to catch defects before they leave the factory.',
      features: ['Pre-Production Inspection (PPI)', 'During Production Inspection (DPI)', 'Pre-Shipment Inspection (PSI)', 'Container Loading Check (CLC)']
    },
    {
      id: 'amazon',
      title: 'Amazon FBA Prep Services',
      icon: Box,
      desc: 'Selling on Amazon? We handle all the prep work required by Amazon FBA, right here in China, saving you time and money compared to using prep centers in your destination country.',
      features: ['FNSKU labeling', 'Polybagging and warning labels', 'Bundling and kitting', 'Carton dimension and weight checks']
    },
    {
      id: 'consolidation',
      title: 'Warehousing & Consolidation',
      icon: Package,
      desc: 'Sourcing from multiple suppliers? We can collect all your goods in our China warehouse and consolidate them into a single shipment to drastically reduce your freight costs.',
      features: ['Secure storage facilities', 'Inventory management', 'Repackaging services', 'Consolidated container loading']
    },
    {
      id: 'logistics',
      title: 'Global Shipping & Custom Clearance',
      icon: Truck,
      desc: 'From the factory floor to your final destination, we manage the entire logistics chain. We negotiate competitive rates with top freight forwarders for all shipping methods.',
      features: ['Sea freight (FCL & LCL)', 'Air freight and express couriers', 'Customs documentation preparation', 'Door-to-door delivery (DDP/DDU)']
    }
  ];

  return (
    <div ref={containerRef} className="py-12 lg:py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 id="services-page-title" className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Sourcing Services</h1>
          <p id="services-page-desc" className="text-xl text-slate-600">
            End-to-end supply chain management tailored for small to medium-sized businesses and enterprise buyers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {fullServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={service.id} className="border-slate-200 shadow-sm overflow-hidden flex flex-col">
                <div className="h-64 relative">
                  <img
                     data-strk-img-id={`svc-img-${service.id}`}
                     data-strk-img={`[svc-desc-${service.id}] [svc-title-${service.id}] b2b`}
                     data-strk-img-ratio="16x9"
                     data-strk-img-width="800"
                     src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                     alt={service.title}
                     className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-md">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle id={`svc-title-${service.id}`} className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p id={`svc-desc-${service.id}`} className="text-slate-600 mb-6 leading-relaxed">
                    {service.desc}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 shrink-0 mt-0.5" />
                        <span className="text-slate-700 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-20 text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Need a complete sourcing package?</h2>
            <Link to="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold h-14 px-10 text-lg">
                Discuss Your Project With Us
              </Button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
