import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, CheckCircle2, Factory, Search, FileText, Truck, PenTool } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button.jsx';

export default function Services() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const services = [
    {
      id: 'supplier-sourcing',
      title: 'Supplier Sourcing & Verification',
      subtitle: 'Find the needle in the haystack',
      desc: 'We go beyond Alibaba to find true manufacturers, not just trading companies. We verify licenses, production capabilities, and export history to ensure you are dealing with a legitimate partner.',
      icon: <Search className="w-10 h-10 text-white" />,
      features: ['Manufacturer identification', 'Background & license checks', 'Price negotiation', 'Sample consolidation']
    },
    {
      id: 'factory-audits',
      title: 'Factory Audits',
      subtitle: 'Know who you are dealing with',
      desc: 'Before placing a large order, our team visits the factory to conduct a comprehensive audit. We assess their quality management systems, social compliance, and overall manufacturing capacity.',
      icon: <Factory className="w-10 h-10 text-white" />,
      features: ['ISO 9001 compliance check', 'Social accountability (BSCI)', 'Production capability assessment', 'Detailed audit reports with photos']
    },
    {
      id: 'product-development',
      title: 'OEM / ODM Development',
      subtitle: 'Bring your ideas to life',
      desc: 'We assist with translating your designs into manufacturable products. From finding the right tooling factory to overseeing the prototyping phase and ensuring intellectual property protection.',
      icon: <PenTool className="w-10 h-10 text-white" />,
      features: ['Tooling & mold making coordination', 'Prototype iteration management', 'NDA & NNN agreement signing', 'Packaging design sourcing']
    },
    {
      id: 'quality-inspections',
      title: 'Quality Control Inspections',
      subtitle: 'Ensure quality before shipping',
      desc: 'Our inspectors check your goods at various stages of production using AQL standards. We catch defects before they leave China, saving you from costly returns and disappointed customers.',
      icon: <CheckCircle2 className="w-10 h-10 text-white" />,
      features: ['Pre-Production Inspection (PPI)', 'During Production Inspection (DPI)', 'Pre-Shipment Inspection (PSI)', 'Container Loading Check (CLC)']
    },
    {
       id: 'order-management',
       title: 'Order Management',
       subtitle: 'Your boots on the ground',
       desc: 'We manage the day-to-day communication with the factory, tracking production timelines, solving issues as they arise, and keeping you updated with regular progress reports.',
       icon: <FileText className="w-10 h-10 text-white" />,
       features: ['Production timeline tracking', 'Payment milestone management', 'Issue resolution', 'Weekly progress updates']
     },
    {
      id: 'shipping-logistics',
      title: 'Shipping & Logistics',
      subtitle: 'From factory to your door',
      desc: 'We coordinate the complex logistics of international shipping. From booking containers to managing customs clearance and final delivery, we find the most cost-effective routes.',
      icon: <Truck className="w-10 h-10 text-white" />,
      features: ['FCL & LCL sea freight', 'Air freight & express courier', 'Customs documentation', 'Amazon FBA prep & delivery']
    }
  ];

  return (
    <div ref={containerRef} className="pt-8 pb-24 top-padding">
      {/* Header */}
      <div className="bg-slate-900 text-white py-20 mb-16">
         <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-sans tracking-tight mb-6">
               Our Sourcing Services
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
               Comprehensive supply chain solutions tailored to your business needs. Choose end-to-end management or specific services to plug gaps in your current process.
            </p>
         </div>
      </div>

      <div className="container mx-auto px-4">
         {/* Services List */}
        <div className="space-y-24">
          {services.map((service, index) => (
            <div key={service.id} id={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
               <div className={index % 2 !== 0 ? 'lg:order-2' : ''}>
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-600/20">
                     {service.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-lg text-blue-600 font-medium mb-6">{service.subtitle}</p>
                  <p className="text-slate-600 text-lg leading-relaxed mb-8">
                     {service.desc}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                     {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-slate-700">
                           <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                           <span>{feature}</span>
                        </li>
                     ))}
                  </ul>

                  <Link to={`/contact?service=${service.id}`}>
                     <Button variant="outline" className="border-slate-300 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200">
                        Inquire about this service
                     </Button>
                  </Link>
               </div>
               
               <div className={`relative ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  {/* Decorative background element */}
                  <div className="absolute inset-0 bg-blue-50 rounded-3xl transform translate-x-4 translate-y-4 -z-10"></div>
                  <img 
                     data-strk-img-id={`service-img-${service.id}`}
                     data-strk-img={`${service.title} ${service.subtitle} professional B2B service china`}
                     data-strk-img-ratio="4x3"
                     data-strk-img-width="800"
                     src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                     alt={service.title}
                     className="rounded-3xl shadow-xl w-full object-cover"
                  />
               </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24 text-center bg-slate-50 border border-slate-200 rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Not sure what you need?</h3>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
               Schedule a free consultation call with our sourcing experts. We'll analyze your current supply chain and recommend the best approach.
            </p>
            <Link to="/contact">
               <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">
                  Book a Free Consultation
               </Button>
            </Link>
        </div>
      </div>
    </div>
  );
}
