import React, { useEffect, useRef } from 'react';
import { Search, ShieldCheck, CheckCircle2, Truck, ClipboardList, PenTool } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const servicesList = [
    {
      id: 'product-sourcing',
      title: 'Product Sourcing',
      shortDesc: 'Find reliable manufacturers that meet your specs and budget.',
      desc: 'We leverage our extensive network to find the best manufacturers for your specific product requirements. We request quotes from multiple factories, negotiate prices, and present you with the best options. Our goal is to find the perfect balance between competitive pricing and high-quality production.',
      icon: <Search className="w-10 h-10 text-blue-600" />,
      features: ['Supplier screening & shortlisting', 'Price negotiation', 'Sample consolidation', 'OEM/ODM manufacturing sourcing'],
      imgId: 'service-sourcing-1',
      imgQuery: '[service-title-product-sourcing]'
    },
    {
      id: 'supplier-verification',
      title: 'Factory Verification',
      shortDesc: 'Avoid scams by verifying factory capabilities before paying.',
      desc: 'Don’t trust a supplier based solely on their Alibaba profile. Our team conducts on-site factory audits in China to verify their legitimacy, production capacity, quality control systems, and working conditions. We provide you with a detailed report so you can make an informed decision.',
      icon: <ShieldCheck className="w-10 h-10 text-blue-600" />,
      features: ['Business license & certification check', 'On-site facility inspection', 'Production capacity assessment', 'Detailed audit reports with photos'],
      imgId: 'service-verify-1',
      imgQuery: '[service-title-supplier-verification]'
    },
    {
      id: 'quality-control',
      title: 'Quality Control',
      shortDesc: 'Ensure your products meet your standards before shipping.',
      desc: 'Fixing quality issues after goods leave China is costly and time-consuming. We offer comprehensive inspections at various stages of production (Pre-Production, In-Line, and Pre-Shipment). Our inspectors verify dimensions, functionality, packaging, and identify defects based on AQL standards.',
      icon: <CheckCircle2 className="w-10 h-10 text-blue-600" />,
      features: ['Pre-Shipment Inspection (PSI)', 'During Production Inspection (DUPRO)', 'Container Loading Check (CLC)', 'Custom testing protocols'],
      imgId: 'service-qc-1',
      imgQuery: '[service-title-quality-control] inspector'
    },
    {
      id: 'production-monitoring',
      title: 'Production Monitoring',
      shortDesc: 'Keep your orders on schedule with strict timeline management.',
      desc: 'Delays cost money. We act as your project managers, maintaining constant communication with the factory during production. We monitor progress, resolve issues quickly, and ensure your order stays on schedule without sacrificing quality.',
      icon: <ClipboardList className="w-10 h-10 text-blue-600" />,
      features: ['Timeline management', 'Material preparation checks', 'Daily/weekly progress reports', 'Issue resolution & mediation'],
      imgId: 'service-monitor-1',
      imgQuery: '[service-title-production-monitoring] factory line'
    },
    {
      id: 'product-development',
      title: 'Product Development & Prototyping',
      shortDesc: 'Turn your idea into a physical product ready for mass production.',
      desc: 'Need custom products? We help you navigate the complex process of product development in China. We coordinate with engineers, manage the creation of prototypes, handle tooling/molding, and refine samples until your product is exactly right.',
      icon: <PenTool className="w-10 h-10 text-blue-600" />,
      features: ['Engineering & CAD design support', 'Prototyping & 3D printing coordination', 'Tooling/Mold management', 'Material sourcing & testing'],
      imgId: 'service-dev-1',
      imgQuery: '[service-title-product-development] prototype sketch'
    },
    {
      id: 'shipping-logistics',
      title: 'Shipping & Logistics',
      shortDesc: 'Seamless delivery from the factory floor to your destination.',
      desc: 'Navigating international freight can be a headache. We optimize your shipping strategy by consolidating shipments, choosing the right freight method (Air, Sea, Express), handling export customs clearance in China, and coordinating final delivery.',
      icon: <Truck className="w-10 h-10 text-blue-600" />,
      features: ['Sea freight (FCL & LCL) & Air freight', 'Shipment consolidation', 'Export customs clearance', 'Amazon FBA preparation & prep'],
      imgId: 'service-ship-1',
      imgQuery: '[service-title-shipping-logistics] cargo ship container'
    }
  ];

  return (
    <div ref={containerRef} className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-slate-900 text-white py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Our Sourcing Services</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              We provide comprehensive, end-to-end solutions for importing from China. Let us handle the complexity so you can focus on growing your business.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-24">
            {servicesList.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id} 
                className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 lg:gap-16 items-center scroll-mt-24`}
              >
                <div className="w-full md:w-1/2">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-slate-100">
                    <img
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      data-strk-img-id={service.imgId}
                      data-strk-img={service.imgQuery}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                  </div>
                </div>
                
                <div className="w-full md:w-1/2 space-y-6">
                  <div className="bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center border border-blue-100 mb-6">
                    {service.icon}
                  </div>
                  <h2 id={`service-title-${service.id}`} className="text-3xl font-bold text-slate-900 tracking-tight">{service.title}</h2>
                  <p className="text-xl font-medium text-slate-700">{service.shortDesc}</p>
                  <p className="text-slate-600 leading-relaxed">{service.desc}</p>
                  
                  <div className="pt-4 border-t border-slate-100">
                    <h4 className="font-semibold text-slate-900 mb-4">Key Features:</h4>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-blue-600 mr-2 shrink-0" />
                          <span className="text-sm text-slate-600">{feature}</span>
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

      {/* Call to Action */}
      <section className="bg-slate-100 py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Not sure which service you need?</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            Contact us for a free consultation. We'll analyze your specific requirements and recommend the best approach for your importing project.
          </p>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
            <Link to="/contact">Get Free Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;