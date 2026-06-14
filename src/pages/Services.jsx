import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Search, FileCheck, Factory, Truck, CheckCircle, ArrowRight, Building2, ClipboardCheck, MapPin } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const services = [
    {
      id: 'supplier-verification',
      icon: <Search className="w-8 h-8" />,
      title: 'Supplier Verification',
      description: 'We conduct thorough verification of potential suppliers to protect your business from fraud and ensure you work with legitimate, capable manufacturers.',
      features: [
        'Business license verification',
        'Factory on-site inspection',
        'Production capacity assessment',
        'Financial stability check',
        'Past client references',
        'Quality management systems review'
      ],
      imageId: 'supplier-verification-img'
    },
    {
      id: 'quality-inspection',
      icon: <FileCheck className="w-8 h-8" />,
      title: 'Quality Inspection',
      description: 'Professional quality control inspections at every stage of production to ensure your products meet specifications and arrive in perfect condition.',
      features: [
        'Pre-shipment inspection (PSI)',
        'During production inspection (DPI)',
        'Loading supervision',
        'AQL sampling compliance',
        'Detailed photo documentation',
        'Custom inspection criteria'
      ],
      imageId: 'quality-inspection-img'
    },
    {
      id: 'production-followup',
      icon: <Factory className="w-8 h-8" />,
      title: 'Production Follow-up',
      description: 'We monitor your production orders closely, tracking progress and addressing any issues to ensure timely delivery and quality consistency.',
      features: [
        'Production schedule tracking',
        'Weekly progress reports',
        'Material quality monitoring',
        'Specification compliance check',
        'Timeline management',
        'Issue escalation handling'
      ],
      imageId: 'production-followup-img'
    },
    {
      id: 'shipping',
      icon: <Truck className="w-8 h-8" />,
      title: 'Shipping Coordination',
      description: 'End-to-end logistics management from factory to your destination, handling all documentation and coordination for smooth international shipping.',
      features: [
        'Freight forwarding services',
        'Customs clearance support',
        'Documentation preparation',
        'Multi-modal transport options',
        'Cargo tracking',
        'Delivery coordination'
      ],
      imageId: 'shipping-coordination-img'
    }
  ];

  const benefits = [
    { icon: <Building2 className="w-5 h-5" />, text: 'Access to verified supplier network' },
    { icon: <ClipboardCheck className="w-5 h-5" />, text: 'Reduced quality risks and defects' },
    { icon: <MapPin className="w-5 h-5" />, text: 'Local presence in major manufacturing hubs' },
    { icon: <CheckCircle className="w-5 h-5" />, text: 'Transparent pricing with no hidden fees' }
  ];

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-primary-900 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Professional Sourcing Services
            </h1>
            <p className="text-lg lg:text-xl text-neutral-300">
              From supplier verification to final delivery, we provide comprehensive services to help you source products from China with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 lg:space-y-28">
          {services.map((service, index) => (
            <div key={service.id} id={service.id} className="scroll-mt-20">
              <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 mb-6">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-neutral-900 mb-4">{service.title}</h2>
                  <p className="text-lg text-neutral-600 mb-8">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                        <span className="text-neutral-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`bg-neutral-100 rounded-2xl overflow-hidden aspect-video ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div 
                    className="w-full h-full"
                    data-strk-bg-id={service.imageId}
                    data-strk-bg={`[${service.title}]`}
                    data-strk-bg-ratio="16x9"
                    data-strk-bg-width="800"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-neutral-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">Why Choose Our Services</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              We combine local expertise with international standards to deliver reliable sourcing solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mx-auto mb-4">
                  {benefit.icon}
                </div>
                <p className="font-medium text-neutral-900">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
            Contact us for a free consultation and customized sourcing quote.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-primary-600 bg-white rounded-lg hover:bg-primary-50 transition-colors"
          >
            Get a Free Quote
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
