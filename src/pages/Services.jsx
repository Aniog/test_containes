import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { Search, ShieldCheck, ClipboardCheck, Ship, TrendingUp, Headphones, Globe, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';


const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const detailedServices = [
    {
      title: 'Global Product Sourcing',
      description: 'We match your specific product requirements with the right manufacturers in China. Our extensive database and local network allow us to find suppliers that offer the best balance of quality and price.',
      features: ['Supplier identification', 'Price negotiation', 'Sample consolidation', 'Market research'],
      icon: Search,
      imgId: 'service-sourcing-img-991'
    },
    {
      title: 'Supplier Verification & Audits',
      description: 'Don\'t take risks with unverified factories. We conduct on-site audits to verify their business licenses, manufacturing capabilities, and quality management systems.',
      features: ['On-site factory visits', 'Document verification', 'Production capacity check', 'Reputation management'],
      icon: ShieldCheck,
      imgId: 'service-audit-img-992'
    },
    {
      title: 'Strict Quality Control',
      description: 'Our experienced inspectors catch defects early. We provide detailed reports with photos and videos for every inspection to ensure your standards are met.',
      features: ['Pre-production inspection', 'In-process monitoring', 'Pre-shipment inspection', 'Loading supervision'],
      icon: ClipboardCheck,
      imgId: 'service-qc-img-993'
    },
    {
      title: 'Logistics & Shipping',
      description: 'We simplify the complex world of international shipping. We coordinate with reliable freight forwarders to ensure cost-effective and timely delivery of your goods.',
      features: ['Freight negotiation', 'Container loading', 'Customs documentation', 'Delivery tracking'],
      icon: Ship,
      imgId: 'service-shipping-img-994'
    }
  ];

  return (
    <div ref={containerRef}>
      {/* Header */}
      <section className="bg-slate-900 py-16 md:py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="services-header-title" className="text-4xl md:text-5xl font-bold">Comprehensive Sourcing Services</h1>
          <p id="services-header-subtitle" className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto">
            From initial product discovery to final doorstep delivery, we manage the entire supply chain so you can focus on growing your business.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {detailedServices.map((service, index) => (
            <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2">
                <div className="bg-blue-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h2 id={`service-title-${index}`} className="text-3xl font-bold text-slate-900 mb-4">{service.title}</h2>
                <p id={`service-desc-${index}`} className="text-slate-600 text-lg leading-relaxed mb-8">
                  {service.description}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2 text-slate-700">
                      <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:w-1/2">
                <img
                  data-strk-img-id={service.imgId}
                  data-strk-img={`[service-desc-${index}] [service-title-${index}] sourcing agent in China factory`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  className="rounded-2xl shadow-xl w-full h-auto object-cover"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                  alt={service.title}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Need a Custom Sourcing Plan?</h2>
          <p className="text-slate-600 text-lg mb-10">
            Talk to our experts about your specific requirements and learn how we can optimize your China sourcing strategy.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors">
              Schedule Free Consultation
            </Link>
            <Link to="/how-it-works" className="bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-lg font-bold hover:bg-slate-50 transition-colors">
              How Our Process Works
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
