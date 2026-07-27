import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Search, ShieldCheck, Ship, Box, Target, FileText } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

export default function Services() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const services = [
    {
      id: 'sourcing',
      icon: <Search className="w-10 h-10" />,
      title: 'Supplier Sourcing & Verification',
      shortDesc: 'Find the right manufacturer in China.',
      desc: 'We bypass middlemen and go directly to honest, capable factories. Our team verifies business licenses, audits factory capabilities, and evaluates their track record to ensure they are a reliable partner for your business.'
    },
    {
      id: 'sampling',
      icon: <Box className="w-10 h-10" />,
      title: 'Sample Consolidation & Approval',
      shortDesc: 'Save shipping costs and time.',
      desc: 'Instead of receiving multiple international shipments from different factories, we gather all samples in our China office. We do a preliminary check, consolidate them into one package, and send them to you for final approval.'
    },
    {
      id: 'negotiation',
      icon: <Target className="w-10 h-10" />,
      title: 'Price Negotiation & Contracting',
      shortDesc: 'Get the best terms safely.',
      desc: 'Leverage our local presence to negotiate better prices, lower MOQs, and favorable payment terms. We draft legally binding Bilingual NNN (Non-Disclosure, Non-Use, Non-Circumvention) agreements and manufacturing contracts.'
    },
    {
      id: 'production',
      icon: <FileText className="w-10 h-10" />,
      title: 'Production Monitoring',
      shortDesc: 'Stay updated at every step.',
      desc: 'We keep a close eye on your production schedule. By routinely following up with the factory, we prevent unexpected delays, handle ongoing communication, and resolve minor issues before they become major problems.'
    },
    {
      id: 'qc',
      icon: <ShieldCheck className="w-10 h-10" />,
      title: 'Quality Control Inspections',
      shortDesc: 'Ensure your specifications are met.',
      desc: 'Our inspectors perform Pre-Production, During Production, and Pre-Shipment Inspections following international AQL standards. You receive a detailed report with photos and videos before authorizing the final payment.'
    },
    {
      id: 'shipping',
      icon: <Ship className="w-10 h-10" />,
      title: 'Logistics & Shipping',
      shortDesc: 'Seamless global delivery.',
      desc: 'Whether it is EXW, FOB, or DDP, by sea, air, or express, we optimize your shipping routes. We handle cargo consolidation, warehouse storage, customs export clearance, and documentation for a smooth delivery.'
    }
  ];

  return (
    <div ref={containerRef} className="bg-white">
      {/* Page Header */}
      <section className="bg-blue-900 text-white py-20 relative">
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          data-strk-bg-id="services-header-bg"
          data-strk-bg="[services-header-title] manufacturing logistics"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="container relative mx-auto px-4 text-center z-10">
          <h1 id="services-header-title" className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl max-w-2xl mx-auto text-blue-100">
            End-to-End Supply Chain Management from China to Your Doorstep
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div key={service.id} className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="w-full md:w-1/2">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 shadow-lg">
                    <img 
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={service.title}
                      data-strk-img-id={`service-${service.id}-img`}
                      data-strk-img={`[service-${service.id}-desc] [service-${service.id}-title] b2b`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="w-full md:w-1/2 space-y-6">
                  <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
                    {service.icon}
                  </div>
                  <h2 id={`service-${service.id}-title`} className="text-3xl font-bold text-gray-900">{service.title}</h2>
                  <h3 className="text-xl text-blue-600 font-medium">{service.shortDesc}</h3>
                  <p id={`service-${service.id}-desc`} className="text-lg text-gray-600 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing/Value Proposition */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Transparent, Value-Driven Pricing</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            We don't believe in hidden fees. Our pricing model is strictly designed to align our success with yours. You will always know exactly what you are paying for the product and what you are paying for our service.
          </p>
          <div className="flex justify-center">
            <Button size="lg" className="bg-blue-600 text-white" asChild>
              <Link to="/contact">Get a Custom Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
