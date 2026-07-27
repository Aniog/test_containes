import React, { useEffect, useRef } from 'react';
import { Search, ShieldCheck, ClipboardCheck, Package, Check, ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link, useLocation } from 'react-router-dom';

export default function Services() {
  const containerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
    
    // Handle hash scrolling
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
           element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
        window.scrollTo(0,0);
    }
  }, [location]);

  const services = [
    {
      id: 'sourcing',
      title: 'Supplier Sourcing & Verification',
      subtitle: 'Find the right manufacturer, not just a middleman.',
      desc: 'We leverage our extensive network and local presence to find factories that match your specific requirements. We don\'t just search online; we verify credentials, assess production capabilities, and negotiate on your behalf to secure the best pricing directly from the source.',
      features: [
        'Extensive market research & supplier shortlisting',
        'Verification of business licenses & export rights',
        'Price negotiation & MOQs (Minimum Order Quantities)',
        'Sample ordering & consolidation'
      ],
      icon: Search,
      imgId: 'service-page-sourcing-1a2b',
      imgContext: 'business negotiation handshake factory manager'
    },
    {
      id: 'audit',
      title: 'Factory Audits',
      subtitle: 'Know exactly who you are working with before sending money.',
      desc: 'Protect your investment by having our team physically visit the factory before you place a deposit. We assess their production lines, machinery, quality management systems, and working conditions to ensure they are a legitimate and capable partner.',
      features: [
        'Comprehensive on-site facility inspection',
        'Verification of production capacity & lead times',
        'Assessment of Quality Management Systems (ISO, etc.)',
        'Detailed audit report with photos & video'
      ],
      icon: ShieldCheck,
      imgId: 'service-page-audit-3c4d',
      imgContext: 'factory audit inspector machinery production line'
    },
    {
      id: 'qc',
      title: 'Quality Inspection',
      subtitle: 'Catch defects before they leave the factory.',
      desc: 'Quality fade is a real risk. Our inspectors visit the factory during or after production to check your goods against your approved samples and specifications. We use standard AQL (Acceptable Quality Limit) metrics to ensure your products meet your standards.',
      features: [
        'Pre-Production Inspection (PPI)',
        'During Production Inspection (DUPRO)',
        'Pre-Shipment Inspection (PSI)',
        'Container Loading Check (CLC)'
      ],
      icon: ClipboardCheck,
      imgId: 'service-page-qc-5e6f',
      imgContext: 'quality control inspector magnifying glass product checking'
    },
    {
      id: 'shipping',
      title: 'Shipping & Logistics Management',
      subtitle: 'Seamless delivery from China to your warehouse.',
      desc: 'Navigating international freight can be complex. We coordinate with reliable forwarders to arrange sea, air, or rail freight. We handle the export customs clearance in China and provide you with all necessary documentation for import.',
      features: [
        'Freight forwarding arrangement (Air, Sea - FCL/LCL)',
        'Cargo consolidation from multiple suppliers',
        'Export customs clearance & documentation',
        'Amazon FBA prep & direct shipping'
      ],
      icon: Package,
      imgId: 'service-page-shipping-7g8h',
      imgContext: 'cargo ship port shipping containers logistics'
    }
  ];

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <div className="bg-slate-900 py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="page-title" className="text-4xl font-extrabold text-white tracking-tight sm:text-5xl">
            Our Sourcing Services
          </h1>
          <p className="mt-4 text-xl text-slate-300 max-w-3xl mx-auto">
            Comprehensive solutions to manage your entire supply chain in China, tailored to B2B buyers and eCommerce brands.
          </p>
        </div>
      </div>

      {/* Services List */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 !== 0;
            
            return (
              <div key={service.id} id={service.id} className={`lg:grid lg:grid-cols-2 lg:gap-16 items-center ${isEven ? 'lg:rtl' : ''} scroll-mt-24`}>
                <div className={isEven ? 'lg:order-2' : ''}>
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h2 id={`svh-${service.id}`} className="text-3xl font-bold text-slate-900">{service.title}</h2>
                  <p id={`svs-${service.id}`} className="mt-2 text-xl font-medium text-slate-700">{service.subtitle}</p>
                  <p id={`svd-${service.id}`} className="mt-4 text-lg text-slate-600">{service.desc}</p>
                  
                  <ul className="mt-8 space-y-4">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start">
                        <div className="flex-shrink-0">
                          <Check className="h-6 w-6 text-green-500" />
                        </div>
                        <p className="ml-3 text-base text-slate-600">{feature}</p>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-10">
                     <Link to="/contact" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                        Discuss Your Project <ArrowRight className="ml-2 w-5 h-5" />
                     </Link>
                  </div>
                </div>

                <div className={`mt-12 lg:mt-0 ${isEven ? 'lg:order-1' : ''}`}>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                    <img
                      alt={service.title}
                      className="w-full h-full object-cover"
                      data-strk-img-id={service.imgId}
                      data-strk-img={`[svh-${service.id}] [svs-${service.id}] ${service.imgContext} professional industrial`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* CTA */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white">Need a customized service package?</h2>
            <p className="mt-4 text-xl text-blue-100 mb-8">We can tailor our services to fit your exact business model and product category.</p>
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-slate-50 transition-colors shadow-md">
                Contact Our Experts
            </Link>
        </div>
      </div>
    </div>
  );
}
