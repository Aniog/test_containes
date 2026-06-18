import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Factory, 
  ClipboardCheck, 
  Truck, 
  Package, 
  FileCheck, 
  ArrowRight,
  CheckCircle,
  Shield,
  Clock,
  Users,
  Globe,
  MessageCircle,
  ArrowLeft
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const services = [
    {
      icon: Search,
      title: 'Supplier Verification',
      description: 'We conduct comprehensive verification of potential suppliers to ensure they are legitimate, reliable, and capable of meeting your requirements.',
      features: [
        'Business license verification',
        'Factory visit and capability assessment',
        'Financial stability check',
        'Reference checks from existing clients',
        'Certification verification (ISO, CE, FCC, etc.)',
        'Detailed photo and video reports',
      ],
    },
    {
      icon: Factory,
      title: 'Factory Audit',
      description: 'Our in-depth factory audits help you understand production capabilities, quality management systems, and compliance status.',
      features: [
        'Production capacity assessment',
        'Quality management system evaluation',
        'Social compliance audit (SA8000, BSCI)',
        'Health and safety inspection',
        'Environmental compliance check',
        'Worker conditions assessment',
      ],
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Inspection',
      description: 'Professional quality control inspections at various stages of production to ensure your products meet specifications.',
      features: [
        'Pre-production inspection (material verification)',
        'During-production inspection',
        'Pre-shipment inspection',
        'Container loading supervision',
        'AQL-based sampling',
        'Detailed inspection reports with photos',
      ],
    },
    {
      icon: Package,
      title: 'Production Follow-up',
      description: 'Regular monitoring and updates throughout the production process to keep your order on track.',
      features: [
        'Weekly production progress updates',
        'Milestone tracking and reporting',
        'Sample approval coordination',
        'Production issue resolution',
        'Timeline management',
        'Daily factory visits available',
      ],
    },
    {
      icon: Truck,
      title: 'Shipping & Logistics',
      description: 'End-to-end logistics support from factory to your doorstep, handling all documentation and customs.',
      features: [
        'Freight forwarding (air, sea, express)',
        'Customs clearance support',
        'Documentation preparation',
        'Consolidation services',
        'Insurance coordination',
        'Real-time shipment tracking',
      ],
    },
    {
      icon: FileCheck,
      title: 'Sample Management',
      description: 'We coordinate sample requests, evaluations, and approvals to ensure products meet your standards before production.',
      features: [
        'Sample sourcing and procurement',
        'Quality evaluation and feedback',
        'Modification requests handling',
        'Shipping coordination',
        'Approval documentation',
        'Mass production verification',
      ],
    },
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: 'Verified Expertise',
      description: '12+ years of experience in China sourcing with deep industry knowledge.',
    },
    {
      icon: Clock,
      title: 'Time Savings',
      description: 'We handle all the legwork, saving you weeks of research and travel time.',
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      description: 'Personal account manager fluent in English and Mandarin.',
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Established relationships with 3,000+ verified suppliers across China.',
    },
  ];

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1E3A5F] to-[#2D5A87] py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Sourcing Services
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Comprehensive solutions to ensure your China procurement is smooth, reliable, and cost-effective. From supplier verification to final delivery.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/3">
                    <div className="w-20 h-20 bg-[#1E3A5F] rounded-2xl flex items-center justify-center mb-6">
                      <service.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#1E3A5F] mb-4">{service.title}</h3>
                    <p className="text-[#64748B] leading-relaxed">{service.description}</p>
                  </div>
                  <div className="lg:w-2/3">
                    <h4 className="text-lg font-semibold text-[#1E3A5F] mb-4">What's Included:</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {service.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-[#27AE60] mt-1 mr-3 flex-shrink-0" />
                          <span className="text-[#64748B]">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-4">
              Why Choose SSourcing China
            </h2>
            <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
              We bring expertise, reliability, and dedication to every sourcing project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div 
                key={index} 
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-[#E67E22]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-[#E67E22]" />
                </div>
                <h3 className="text-lg font-bold text-[#1E3A5F] mb-2">{item.title}</h3>
                <p className="text-[#64748B] text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-[#1E3A5F] to-[#2D5A87]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need Help with Your Sourcing?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Contact us today for a free consultation and quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary text-lg px-10 py-4 inline-flex items-center justify-center">
              Get a Free Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/how-it-works" 
              className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all inline-flex items-center justify-center"
            >
              Learn About Process
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;