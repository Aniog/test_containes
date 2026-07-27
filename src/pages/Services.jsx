import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, Shield, ClipboardCheck, Truck, Package, FileCheck,
  CheckCircle, ArrowRight, Clock, Users, FileText, BarChart3
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const mainServices = [
    {
      id: 'supplier-verification',
      icon: Shield,
      title: 'Factory & Supplier Verification',
      description: 'Protect your business from fraud with comprehensive on-site factory audits. We verify that suppliers actually exist, have the claimed production capacity, and maintain proper business registrations.',
      features: [
        'Business registration verification',
        'Factory existence confirmation',
        'Production capacity assessment',
        'Equipment and facility inspection',
        'Workforce evaluation',
        'Certification authenticity check',
      ],
      deliverables: ['Detailed audit report', 'Factory photos and videos', 'Capacity assessment', 'Risk rating'],
    },
    {
      id: 'quality-inspection',
      icon: ClipboardCheck,
      title: 'Quality Control & Inspection',
      description: 'Ensure your products meet specifications with professional QC inspections at every production stage. Our inspectors are trained to identify defects, measure compliance, and document findings.',
      features: [
        'Pre-production inspection (materials)',
        'During production inspection (DPI)',
        'Pre-shipment inspection (PSI)',
        'Loading supervision',
        'AQL-based sampling',
        'Defect classification and reporting',
      ],
      deliverables: ['Inspection report within 24hrs', 'Photos of defects', 'Statistical data', 'Pass/fail recommendation'],
    },
    {
      id: 'production-followup',
      icon: Clock,
      title: 'Production Follow-up & Monitoring',
      description: 'Stay informed about your order status with regular production updates. We conduct factory visits, monitor progress, and address issues before they become problems.',
      features: [
        'Weekly progress reports',
        'Production milestone tracking',
        'Photo and video updates',
        'Issue identification and resolution',
        'Timeline management',
        'Client communication',
      ],
      deliverables: ['Progress reports', 'Production photos', 'Issue logs', 'Timeline updates'],
    },
    {
      id: 'shipping',
      icon: Truck,
      title: 'Shipping & Logistics Coordination',
      description: 'Navigate international shipping with our logistics expertise. We coordinate freight, handle documentation, and ensure smooth customs clearance for hassle-free delivery.',
      features: [
        'Freight forwarding coordination',
        'Customs documentation preparation',
        'Customs clearance assistance',
        'Multi-modal transport (sea, air, rail)',
        'Tracking and tracing',
        'Delivery coordination',
      ],
      deliverables: ['Shipping quotes', 'Documentation package', 'Tracking updates', 'Delivery confirmation'],
    },
    {
      id: 'product-sourcing',
      icon: Search,
      title: 'Product Sourcing & Supplier Matching',
      description: 'Find the right suppliers for your products with our extensive network and expertise. We match your requirements with verified manufacturers.',
      features: [
        'Supplier identification',
        'Capability assessment',
        'Price negotiation',
        'MOQ optimization',
        'Sample coordination',
        'Supplier comparison reports',
      ],
      deliverables: ['Supplier shortlist', 'Capability comparison', 'Pricing analysis', 'Sample coordination'],
    },
    {
      id: 'sample-management',
      icon: Package,
      title: 'Sample Management',
      description: 'Evaluate product quality before mass production with our comprehensive sample handling service. From requesting samples to analyzing results.',
      features: [
        'Sample request management',
        'Sample shipping coordination',
        'Quality evaluation',
        'Modification requests',
        'Approval documentation',
        'Mass production guidance',
      ],
      deliverables: ['Samples delivered', 'Quality assessment', 'Approval confirmation', 'Production specs'],
    },
  ];

  const inspectionTypes = [
    { name: 'Pre-Shipment Inspection (PSI)', desc: 'Final inspection before shipping to verify quality and quantity.' },
    { name: 'During Production Inspection (DPI)', desc: 'Mid-production checks to identify issues early.' },
    { name: 'Container Loading Inspection', desc: 'Verify proper loading and packaging at departure.' },
    { name: 'Factory Audit', desc: 'Comprehensive supplier verification and assessment.' },
    { name: 'Social Compliance Audit', desc: 'Verify ethical practices and labor conditions.' },
  ];

  const whyChooseUs = [
    { icon: Users, text: 'Experienced QC inspectors with industry expertise' },
    { icon: FileText, text: 'Detailed, actionable inspection reports within 24 hours' },
    { icon: BarChart3, text: 'Data-driven approach with photos, videos, and statistics' },
    { icon: CheckCircle, text: '99.2% client satisfaction rate' },
  ];

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Comprehensive China sourcing solutions to protect your business and ensure product quality. From supplier verification to final delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-24">
            {mainServices.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h2 className="heading-2 mb-4">{service.title}</h2>
                  <p className="text-body mb-8">{service.description}</p>
                  
                  <h3 className="font-semibold text-lg mb-4">What's Included</h3>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <h3 className="font-semibold text-lg mb-4">What You Get</h3>
                  <div className="flex flex-wrap gap-2">
                    {service.deliverables.map((item) => (
                      <span key={item} className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="bg-slate-50 rounded-2xl p-8">
                    <img
                      alt={service.title}
                      data-strk-img-id={`service-${service.id}-001`}
                      data-strk-img={`${service.title} [section-desc-${service.id}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full rounded-xl"
                    />
                    <p id={`section-desc-${service.id}`} className="sr-only">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inspection Types */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-2 mb-4">Types of Inspections We Offer</h2>
            <p className="text-body">
              Flexible inspection options to match your quality control needs at every stage of production.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {inspectionTypes.map((type) => (
              <div key={type.name} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <ClipboardCheck className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{type.name}</h3>
                <p className="text-slate-600 text-sm">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="heading-2 mb-6">Why Clients Choose Our Services</h2>
              <p className="text-body mb-8">
                Our combination of local expertise, professional standards, and dedicated support sets us apart as your trusted China sourcing partner.
              </p>
              <div className="space-y-4">
                {whyChooseUs.map((item) => (
                  <div key={item.text} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-accent-600" />
                    </div>
                    <span className="text-slate-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8">
              <img
                alt="Quality inspection"
                data-strk-img-id="services-qc-001"
                data-strk-img="[services-qc-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full rounded-xl mb-6"
              />
              <h3 id="services-qc-title" className="font-semibold text-lg mb-2">Professional QC Services</h3>
              <p className="text-slate-600 text-sm">
                Our inspectors follow strict protocols and international standards to ensure consistent, reliable quality assessments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-primary-100 mb-8">
              Contact us for a free consultation and custom quote for your sourcing needs.
            </p>
            <Link to="/contact" className="btn-primary bg-white text-primary-600 hover:bg-primary-50">
              Request a Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
