import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search, Shield, ClipboardCheck, Truck, Factory, FileText,
  ArrowRight, CheckCircle, Globe, Phone, Mail, Users, Award
} from 'lucide-react';

function ServicesHero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative bg-gradient-to-br from-[#0A1628] via-[#0F4C81] to-[#0A3659] text-white py-20 md:py-28">
      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6">
            <Globe className="w-4 h-4" />
            <span>End-to-End Sourcing Solutions</span>
          </div>
          <h1 id="services-title" className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Our Sourcing Services
          </h1>
          <p id="services-subtitle" className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl">
            From finding the right supplier to delivering products to your door, we handle every step of the sourcing process.
          </p>
        </div>
      </div>
    </section>
  );
}

function ServiceDetail({ icon: Icon, title, description, features, imgId, reverse }) {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="section-padding bg-background">
      <div className="container-custom">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
          <div className={reverse ? 'lg:order-2' : ''}>
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <Icon className="w-7 h-7 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">{title}</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">{description}</p>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={reverse ? 'lg:order-1' : ''}>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                alt={title}
                data-strk-img-id={imgId}
                data-strk-img={`[${title}-desc] [${title}-title] [services-subtitle] [services-title]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesOverview() {
  const services = [
    {
      icon: Search,
      title: 'Product Sourcing',
      description: 'We identify the best suppliers for your specific product needs. Our team searches through our verified network, evaluates capabilities, and presents you with the most suitable options.',
      features: [
        'Search across 500+ verified factories',
        'Compare pricing from multiple suppliers',
        'Negotiate best terms on your behalf',
        'Handle all communication in Chinese',
        'Provide detailed supplier profiles'
      ],
      imgId: 'service-sourcing-1a2b'
    },
    {
      icon: Shield,
      title: 'Supplier Verification',
      description: 'Before you commit to any supplier, we conduct thorough on-site verification to ensure they are legitimate, capable, and reliable.',
      features: [
        'Verify business licenses and certifications',
        'Assess production capacity and equipment',
        'Check quality management systems',
        'Evaluate working conditions',
        'Provide photo and video reports'
      ],
      imgId: 'service-verification-2c3d',
      reverse: true
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Inspection',
      description: 'Our quality inspectors visit factories to check your products before shipment, ensuring they meet your specifications and standards.',
      features: [
        'Pre-production sample inspection',
        'During-production quality checks',
        'Pre-shipment final inspection',
        'Detailed inspection reports with photos',
        'AQL standard sampling methods'
      ],
      imgId: 'service-inspection-3e4f'
    },
    {
      icon: Factory,
      title: 'Production Follow-up',
      description: 'We monitor your order throughout the production process, keeping you informed and catching issues before they become problems.',
      features: [
        'Regular production status updates',
        'On-site production monitoring',
        'Early issue detection and resolution',
        'Timeline management and reporting',
        'Direct factory communication'
      ],
      imgId: 'service-production-4g5h',
      reverse: true
    },
    {
      icon: Truck,
      title: 'Shipping Coordination',
      description: 'We handle all logistics from the factory to your door, including freight forwarding, customs documentation, and delivery coordination.',
      features: [
        'Sea, air, and express shipping options',
        'Customs documentation preparation',
        'Cargo consolidation services',
        'Real-time shipment tracking',
        'Door-to-door delivery coordination'
      ],
      imgId: 'service-shipping-5i6j'
    },
    {
      icon: FileText,
      title: 'Sample Management',
      description: 'We collect samples from multiple suppliers, consolidate them, and ship them to you for evaluation before you place bulk orders.',
      features: [
        'Request samples from multiple suppliers',
        'Consolidate samples into one shipment',
        'Quality check samples before sending',
        'Provide sample comparison reports',
        'Fast international sample shipping'
      ],
      imgId: 'service-samples-6k7l',
      reverse: true
    }
  ];

  return (
    <>
      {services.map((service, index) => (
        <ServiceDetail key={index} {...service} />
      ))}
    </>
  );
}

function ServicesCTA() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="card bg-primary text-primary-foreground text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need Help Sourcing from China?</h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Tell us what you need, and we will create a custom sourcing plan for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary text-lg px-8 py-4">
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a href="mailto:sourcing@ssourcingchina.com" className="btn-outline border-white/30 text-white hover:bg-white/10 hover:text-white hover:border-white/50 text-lg px-8 py-4">
              <Mail className="w-5 h-5 mr-2" />
              Email Us Directly
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesOverview />
      <ServicesCTA />
    </>
  );
}
