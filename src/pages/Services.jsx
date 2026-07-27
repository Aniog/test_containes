import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search, Shield, CheckCircle, Truck, Eye, FileCheck,
  ArrowRight, Users, Globe, Award, BarChart3, ClipboardCheck,
  Package, Ship, Building2, Phone
} from 'lucide-react';

const services = [
  {
    id: 'sourcing',
    icon: Search,
    title: 'Supplier Sourcing & Evaluation',
    subtitle: 'Find the Right Manufacturing Partner',
    description: 'We locate and evaluate suppliers across China\'s major manufacturing regions. Our team matches your product requirements with qualified manufacturers who have proven track records.',
    features: [
      'Database of 2,000+ verified suppliers across 20+ industries',
      'Supplier shortlisting based on your specifications',
      'Price negotiation and cost analysis',
      'Sample coordination and evaluation',
      'Supplier comparison reports',
    ],
    imageQuery: 'China supplier sourcing meeting business factory',
  },
  {
    id: 'verification',
    icon: Shield,
    title: 'Factory Verification & Audits',
    subtitle: 'Know Who You\'re Working With',
    description: 'Our on-site verification process confirms supplier legitimacy, production capabilities, and compliance. We conduct thorough audits so you can make informed decisions.',
    features: [
      'Business license and registration verification',
      'On-site factory visits and capacity assessment',
      'Equipment and technology evaluation',
      'Worker conditions and facility inspection',
      'Certification verification (ISO, BSCI, etc.)',
      'Detailed audit reports with photos',
    ],
    imageQuery: 'factory audit inspection quality control manufacturing',
  },
  {
    id: 'inspection',
    icon: CheckCircle,
    title: 'Quality Inspection Services',
    subtitle: 'Ensure Products Meet Your Standards',
    description: 'Our QC team inspects products at multiple production stages using internationally recognized AQL standards. We catch issues before they become costly problems.',
    features: [
      'Pre-production material inspection',
      'During production (DUPRO) checks',
      'Pre-shipment final inspection',
      'AQL sampling and testing',
      'Function and safety testing',
      'Detailed inspection reports with defect photos',
    ],
    imageQuery: 'quality inspection product checking factory worker',
  },
  {
    id: 'production',
    icon: Eye,
    title: 'Production Monitoring & Follow-up',
    subtitle: 'Stay Informed at Every Stage',
    description: 'We actively monitor your production timeline, track milestones, and keep you updated with regular progress reports. Potential delays are identified and addressed proactively.',
    features: [
      'Production schedule planning and tracking',
      'Regular progress photo and video updates',
      'Milestone-based reporting',
      'Delay identification and resolution',
      'Direct factory communication on your behalf',
      'Production timeline optimization',
    ],
    imageQuery: 'production line factory manufacturing monitoring',
  },
  {
    id: 'shipping',
    icon: Truck,
    title: 'Shipping & Logistics Coordination',
    subtitle: 'From Factory Floor to Your Door',
    description: 'We handle the entire logistics chain from factory pickup to final delivery. Our network of freight partners ensures competitive rates and reliable transit times.',
    features: [
      'Sea freight, air freight, and rail options',
      'Customs documentation and clearance',
      'Container loading supervision',
      'Consolidation and warehousing',
      'Door-to-door delivery coordination',
      'Real-time shipment tracking',
    ],
    imageQuery: 'shipping container cargo logistics port',
  },
];

const additionalServices = [
  {
    icon: ClipboardCheck,
    title: 'Product Development',
    description: 'From concept to production-ready samples, we help develop and refine your product designs for manufacturing.',
  },
  {
    icon: Package,
    title: 'Packaging & Labeling',
    description: 'Custom packaging design, private labeling, and compliance with destination market labeling requirements.',
  },
  {
    icon: FileCheck,
    title: 'Certification Assistance',
    description: 'Help obtaining required certifications like CE, FCC, FDA, UL, and other market-specific compliance marks.',
  },
  {
    icon: BarChart3,
    title: 'Cost Optimization',
    description: 'Value engineering and material alternatives to reduce costs without compromising product quality.',
  },
];

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-800 to-navy text-white py-16 lg:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <span className="badge bg-white/10 text-white mb-4">Our Services</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Complete Sourcing Solutions for Global Buyers
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              From initial supplier discovery to final delivery, we provide end-to-end sourcing services that eliminate risk and save you time.
            </p>
            <Link to="/contact" className="btn-primary text-lg px-8 py-4 group">
              Discuss Your Project
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="space-y-20 lg:space-y-32">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:direction-rtl' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-primary-600" />
                    </div>
                    <span className="badge bg-primary-100 text-primary-700">{service.subtitle}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">{service.title}</h2>
                  <p className="text-slate-600 text-lg mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img
                      data-strk-img-id={`service-${service.id}-img`}
                      data-strk-img={`[${service.id}-service-title] ${service.imageQuery}`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={service.title}
                      className="w-full h-auto object-cover"
                    />
                    <span id={`${service.id}-service-title`} className="hidden">{service.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-heading mb-4">Additional Services</h2>
            <p className="section-subheading">
              Beyond core sourcing, we offer specialized services to support your China supply chain.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service) => (
              <div key={service.title} className="card text-center">
                <div className="w-12 h-12 bg-accent-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-6 h-6 text-accent-600" />
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary-800 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Help with Sourcing?</h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Tell us about your project and we will recommend the right services for your needs.
          </p>
          <Link to="/contact" className="btn-primary text-lg px-8 py-4 group">
            Get a Free Consultation
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
