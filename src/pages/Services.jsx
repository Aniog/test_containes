import React, { useRef, useEffect } from 'react';
import { Search, Shield, CheckCircle, Ship, PackageSearch, Users, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Optional: implement smooth scrolling or other initialization
  }, []);

  const services = [
    {
      id: 'supplier-sourcing',
      title: 'Supplier Sourcing & Verification',
      icon: <Search className="w-8 h-8 text-blue-600" />,
      description: 'We find the right manufacturers for your specific product requirements, filtering out trading companies and unqualified factories.',
      features: [
        'Extensive network of pre-verified factories',
        'Direct manufacturer identification',
        'Price negotiation and sample arrangement',
        'Background checks and business license verification'
      ]
    },
    {
      id: 'factory-audits',
      title: 'Factory Audits',
      icon: <Shield className="w-8 h-8 text-indigo-600" />,
      description: 'Before you place a large order, we send our inspectors to the factory to ensure they have the capabilities and ethical standards you require.',
      features: [
        'Production capacity assessment',
        'Quality management system evaluation',
        'Equipment and facilities check',
        'Detailed audit reports with photos and videos'
      ]
    },
    {
      id: 'quality-control',
      title: 'Quality Control & Inspections',
      icon: <CheckCircle className="w-8 h-8 text-sky-600" />,
      description: 'We act as your eyes on the ground, inspecting your goods before they leave China to prevent costly returns and reputational damage.',
      features: [
        'Pre-Production Inspection (PPI)',
        'During Production Inspection (DPI)',
        'Pre-Shipment Inspection (PSI)',
        'Container Loading Check (CLC)'
      ]
    },
    {
      id: 'shipping-logistics',
      title: 'Shipping & Logistics',
      icon: <Ship className="w-8 h-8 text-cyan-600" />,
      description: 'We handle the complex logistics of getting your products from the Chinese factory floor to your warehouse or Amazon FBA center.',
      features: [
        'Sea freight (FCL and LCL) and air freight',
        'Customs clearance in China',
        'Warehousing and consolidation of multiple orders',
        'Door-to-door delivery coordination'
      ]
    },
    {
      id: 'product-development',
      title: 'Product Development & OEM/ODM',
      icon: <PackageSearch className="w-8 h-8 text-blue-600" />,
      description: 'Turn your design concepts into reality. We manage the prototyping and tooling processes with suitable manufacturers.',
      features: [
        'CAD design and prototyping assistance',
        'Mold tooling management',
        'Custom packaging design and production',
        'IP protection agreements (NNN)'
      ]
    },
    {
      id: 'order-management',
      title: 'Order Tracking & Management',
      icon: <FileText className="w-8 h-8 text-indigo-600" />,
      description: 'We monitor your production schedule closely to ensure your orders are completed on time and according to specifications.',
      features: [
        'Weekly production status updates',
        'Raw material preparation monitoring',
        'Production schedule adherence checks',
        'Crisis management and delay mitigation'
      ]
    }
  ];

  return (
    <div className="flex flex-col" ref={containerRef}>
      {/* Page Header */}
      <section className="bg-slate-50 py-16 md:py-24 border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Sourcing Services</h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            From finding the right factory to delivering the goods to your door, we provide a complete end-to-end China sourcing solution for global businesses.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
                <div className="mb-6 flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-8 flex-grow">
                  {service.description}
                </p>
                <div className="mt-auto">
                  <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">What's Included:</h4>
                  <ul className="space-y-3">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-slate-600 text-sm">
                        <CheckCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold sm:text-4xl mb-6">Why Choose SSourcing China?</h2>
            <p className="text-lg text-slate-300">
              We are your dedicated team on the ground, protecting your interests and ensuring your sourcing operations run smoothly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="mx-auto w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Local Expertise</h3>
              <p className="text-slate-400">Native Chinese professionals with years of experience navigating the complex supplier landscape.</p>
            </div>
            <div>
              <div className="mx-auto w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Zero Kickbacks</h3>
              <p className="text-slate-400">We work strictly for you, the buyer. We never accept hidden commissions or kickbacks from factories.</p>
            </div>
            <div>
               <div className="mx-auto w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mb-6">
                <CheckCircle className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Strict Quality Control</h3>
              <p className="text-slate-400">Rigorous inspection processes to ensure you get exactly what you paid for, every single time.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-white border-t border-slate-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Need a custom sourcing solution?</h2>
              <p className="text-lg text-slate-600 mb-8">Contact us to discuss your specific requirements. We offer flexible service packages tailored to your business needs.</p>
              <Link to="/contact" className="inline-flex justify-center items-center rounded-md bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors">
                  Contact Our Sourcing Experts
              </Link>
          </div>
      </section>

    </div>
  );
};

export default Services;