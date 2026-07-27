import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, Building2, ClipboardCheck, Package, Truck, Shield,
  FileText, Users, CheckCircle, ArrowRight, FileCheck
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  const services = [
    {
      id: 'supplier-verification',
      icon: <Search className="w-8 h-8" />,
      title: 'Supplier Verification',
      description: 'We conduct comprehensive background checks on potential suppliers to ensure they are legitimate, financially stable, and capable of meeting your requirements.',
      features: [
        'Business license verification',
        'Company registration status check',
        'Financial stability assessment',
        'Production capacity evaluation',
        'Reference checks from past clients',
        'Export capability verification'
      ],
      image: 'supplier verification documentation check'
    },
    {
      id: 'factory-audit',
      icon: <Building2 className="w-8 h-8" />,
      title: 'Factory Audit',
      description: 'Our team visits factories in person to assess their actual conditions, capabilities, and compliance with international standards and your specific requirements.',
      features: [
        'On-site factory inspection',
        'Production line assessment',
        'Equipment and machinery review',
        'Worker conditions evaluation',
        'Quality management system review',
        'Health and safety compliance'
      ],
      image: 'factory audit inspection manufacturing floor'
    },
    {
      id: 'quality-control',
      icon: <ClipboardCheck className="w-8 h-8" />,
      title: 'Quality Control',
      description: 'We implement rigorous inspection protocols at various stages of production to ensure your products meet specifications and quality standards before shipment.',
      features: [
        'Pre-shipment inspection (PSI)',
        'During-production inspection (DPI)',
        'Initial production inspection (IPI)',
        'AQL-based sampling',
        'Defect classification and reporting',
        'Corrective action recommendations'
      ],
      image: 'quality control inspection product check'
    },
    {
      id: 'production',
      icon: <Package className="w-8 h-8" />,
      title: 'Production Follow-up',
      description: 'We monitor your orders throughout the production cycle, providing regular updates and ensuring timelines are met with consistent quality.',
      features: [
        'Production schedule monitoring',
        'Weekly progress reports',
        'Sample approval management',
        'Raw material verification',
        'Packaging inspection',
        'Timeline management'
      ],
      image: 'production monitoring factory workers'
    },
    {
      id: 'shipping',
      icon: <Truck className="w-8 h-8" />,
      title: 'Shipping & Logistics',
      description: 'We coordinate all aspects of shipping from China to your destination, handling documentation, customs, and ensuring timely delivery.',
      features: [
        'Freight forwarding coordination',
        'Sea freight and air freight options',
        'Customs documentation preparation',
        'Customs clearance support',
        'Shipment consolidation',
        'Delivery tracking'
      ],
      image: 'container shipping logistics freight'
    },
    {
      id: 'contracts',
      icon: <FileText className="w-8 h-8" />,
      title: 'Contract Support',
      description: 'We assist with contract negotiation, review terms and conditions, and provide support in resolving any disputes that may arise during the sourcing process.',
      features: [
        'Contract drafting assistance',
        'Terms and conditions review',
        'Price negotiation support',
        'Payment term optimization',
        'Dispute resolution assistance',
        'Intellectual property protection'
      ],
      image: 'business contract negotiation meeting'
    }
  ];

  const inspectionTypes = [
    {
      name: 'Pre-Shipment Inspection (PSI)',
      description: 'Final inspection before shipment to verify products meet all specifications and quality standards.',
      timing: 'Before cargo leaves factory'
    },
    {
      name: 'During Production Inspection (DPI)',
      description: 'Mid-production inspection to identify issues early and allow for corrections before completion.',
      timing: 'When 20-80% complete'
    },
    {
      name: 'Initial Production Inspection (IPI)',
      description: 'Early stage inspection of raw materials and initial production setup.',
      timing: 'Start of production'
    },
    {
      name: 'Loading Supervision',
      description: 'Verification of proper loading and packaging during containerization.',
      timing: 'During container loading'
    },
    {
      name: 'AQL Sampling',
      description: 'Statistical sampling based on Acceptable Quality Level standards.',
      timing: 'As part of any inspection'
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Risk Reduction',
      description: 'Minimize the risk of working with unreliable suppliers or receiving substandard products.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Local Expertise',
      description: 'Benefit from our team of experienced professionals based in China who understand local business practices.'
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: 'Quality Assurance',
      description: 'Ensure every shipment meets your specifications through rigorous inspection protocols.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Intellectual Property Protection',
      description: 'Protect your designs and proprietary information through careful supplier selection and contracts.'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Time Savings',
      description: 'Save time navigating language barriers, cultural differences, and complex logistics.'
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: 'End-to-End Service',
      description: 'From supplier discovery to final delivery, we handle all aspects of your China sourcing.'
    }
  ];

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1E3A5F] to-[#2D5A7B] text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="badge badge-accent mb-4">Our Services</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive China Sourcing Services
            </h1>
            <p className="text-xl text-white/80 mb-8">
              From initial supplier search to final delivery, we provide end-to-end support 
              to ensure your China sourcing is successful, reliable, and risk-free.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center">
              Get a Free Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-16 lg:py-24 ${index % 2 === 0 ? 'bg-white' : 'bg-[#F8FAFC]'}`}
        >
          <div className="container-custom">
            <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="w-16 h-16 bg-[#EFF3F8] rounded-xl flex items-center justify-center text-[#1E3A5F] mb-6">
                  {service.icon}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {service.title}
                </h2>
                <p className="text-lg text-[#6B7280] mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#059669] flex-shrink-0 mt-0.5" />
                      <span className="text-[#1F2937]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="aspect-video rounded-xl overflow-hidden bg-[#EFF3F8]">
                  <img
                    alt={service.title}
                    className="w-full h-full object-cover"
                    data-strk-img-id={`service-${service.id}`}
                    data-strk-img={`[service-${service.id}-title]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                  <h3 id={`service-${service.id}-title`} className="sr-only">{service.title}</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Inspection Types */}
      <section className="py-16 lg:py-24 bg-[#EFF3F8]">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="badge badge-primary mb-4">Quality Standards</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Types of Inspections We Offer
            </h2>
            <p className="text-lg text-[#6B7280]">
              Flexible inspection options to match your quality control needs at every stage of production.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {inspectionTypes.map((type, index) => (
              <div key={index} className="card">
                <h3 className="text-lg font-bold mb-2">{type.name}</h3>
                <p className="text-[#6B7280] text-sm mb-4">{type.description}</p>
                <div className="flex items-center text-[#E67E22] text-sm font-medium">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  {type.timing}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="badge badge-accent mb-4">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Benefits of Working With Us
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#EFF3F8] rounded-xl flex items-center justify-center text-[#1E3A5F] flex-shrink-0">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-[#6B7280]">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-[#1E3A5F] text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and custom quote for your sourcing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary inline-flex items-center justify-center">
              Get a Free Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link to="/how-it-works" className="btn-outline border-white text-white hover:bg-white hover:text-[#1E3A5F] inline-flex items-center justify-center">
              Learn Our Process
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
