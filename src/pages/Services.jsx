import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Building2, ClipboardCheck, Truck, Package, MessageSquare, FileCheck, DollarSign, CheckCircle, ArrowRight, Phone } from 'lucide-react';

const services = [
  {
    id: 'supplier-search',
    icon: Search,
    title: 'Supplier Search & Verification',
    tagline: 'Find the right manufacturing partner',
    description: 'Our comprehensive supplier search service identifies and verifies manufacturers that match your specific product requirements, quality standards, and budget parameters.',
    features: [
      'Background checks and company verification',
      'Production capacity assessment',
      'Certification and compliance review',
      'Capability and specialty analysis',
      'Pricing negotiation support',
      'Communication facilitation'
    ],
    process: [
      'We gather your detailed requirements',
      'We identify matching factories from our network',
      'We conduct initial verification calls',
      'We perform on-site factory audits',
      'We provide detailed supplier reports',
      'You select your preferred partner'
    ]
  },
  {
    id: 'factory-verification',
    icon: Building2,
    title: 'Factory Verification & Audits',
    tagline: 'Know who you are working with',
    description: 'We conduct thorough on-site factory audits to verify factory existence, assess production capabilities, and ensure compliance with your standards before you commit.',
    features: [
      'Business license verification',
      'Factory size and location confirmation',
      'Production line inspection',
      'Equipment and machinery assessment',
      'Worker conditions evaluation',
      'Certification authenticity check'
    ],
    process: [
      'Schedule the audit appointment',
      'Visit the factory location',
      'Photograph all facilities',
      'Verify claimed certifications',
      'Assess production capabilities',
      'Deliver comprehensive audit report'
    ]
  },
  {
    id: 'quality-control',
    icon: ClipboardCheck,
    title: 'Quality Control Inspections',
    tagline: 'Protect your product quality',
    description: 'Our quality control services provide multiple inspection touchpoints throughout production to ensure your products meet specifications and arrive in perfect condition.',
    features: [
      'Pre-production sample inspection',
      'During production (DPI) inspection',
      'Pre-shipment inspection (PSI)',
      'Loading supervision',
      'AQL sampling per international standards',
      'Detailed inspection reports with photos'
    ],
    process: [
      'Define quality standards and AQL levels',
      'Schedule inspection at required stage',
      'Our inspector visits the factory',
      'Random sampling per statistical methods',
      'Document findings with photos',
      'Provide detailed inspection report'
    ]
  },
  {
    id: 'shipping',
    icon: Truck,
    title: 'Shipping & Logistics Coordination',
    tagline: 'From factory to your doorstep',
    description: 'We handle all aspects of international shipping and logistics, coordinating freight, documentation, customs clearance, and delivery to ensure smooth transit.',
    features: [
      'Freight forwarding (sea, air, express)',
      'Customs documentation preparation',
      'Import/export clearance handling',
      'Cargo tracking and monitoring',
      'Insurance arrangement',
      'Last-mile delivery coordination'
    ],
    process: [
      'Assess shipping requirements and options',
      'Compare freight quotes from carriers',
      'Book shipping space and containers',
      'Coordinate with factory for loading',
      'Monitor transit and handle issues',
      'Ensure smooth customs clearance'
    ]
  },
  {
    id: 'samples',
    icon: Package,
    title: 'Sample Management',
    tagline: 'Evaluate before you commit',
    description: 'We facilitate sample requests, evaluate sample quality, manage modifications, and coordinate the approval process to help you make confident purchasing decisions.',
    features: [
      'Sample request coordination',
      'Quality assessment reports',
      'Modification request handling',
      'Shipping arrangement for samples',
      'Cost negotiation for production',
      'Sample to production comparison'
    ],
    process: [
      'Define sample specifications',
      'Request samples from factory',
      'Receive and assess samples',
      'Report findings to you',
      'Facilitate modifications if needed',
      'Obtain your final approval'
    ]
  },
  {
    id: 'production',
    icon: MessageSquare,
    title: 'Production Follow-up',
    tagline: 'Stay informed every step',
    description: 'Regular production monitoring with weekly updates, timeline tracking, and issue escalation ensures your order stays on track and problems are addressed promptly.',
    features: [
      'Weekly progress reports',
      'Timeline monitoring',
      'Issue identification and escalation',
      'Quality concern communication',
      'Deadline negotiation with factory',
      'Production photo updates'
    ],
    process: [
      'Establish production schedule',
      'Receive regular factory updates',
      'Monitor against timeline',
      'Address issues as they arise',
      'Keep you informed of progress',
      'Coordinate final delivery'
    ]
  }
];

const ServiceCard = ({ service }) => (
  <div className="bg-white rounded-xl p-8 shadow-sm border border-[#E2E8F0] hover:shadow-lg transition-shadow">
    <div className="w-14 h-14 bg-[#1E3A5F]/10 rounded-xl flex items-center justify-center mb-6">
      <service.icon className="w-7 h-7 text-[#1E3A5F]" />
    </div>
    <span className="text-[#C9A227] text-sm font-medium">{service.tagline}</span>
    <h3 className="text-xl font-semibold text-[#1E293B] mt-2 mb-3">{service.title}</h3>
    <p className="text-[#64748B] mb-6">{service.description}</p>
    <div className="border-t border-[#E2E8F0] pt-6">
      <h4 className="text-sm font-semibold text-[#1E293B] mb-3">What's Included:</h4>
      <ul className="space-y-2">
        {service.features.slice(0, 4).map((feature, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-[#64748B]">
            <CheckCircle className="w-4 h-4 text-[#059669] shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const Services = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#1E3A5F] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#C9A227] font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
            Comprehensive China Sourcing Solutions
          </h1>
          <p className="text-white/80 text-lg max-w-3xl mx-auto">
            From initial supplier research to final delivery, we provide end-to-end services to ensure your China sourcing is smooth, transparent, and risk-free.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      {services.map((service, index) => (
        <section 
          key={service.id}
          id={service.id}
          className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-[#F8FAFC]'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="w-16 h-16 bg-[#1E3A5F] rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <span className="text-[#C9A227] font-semibold text-sm uppercase tracking-wider">{service.tagline}</span>
                <h2 className="text-3xl font-bold text-[#1E293B] mt-2 mb-4">{service.title}</h2>
                <p className="text-[#64748B] text-lg mb-6">{service.description}</p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-[#C9A227] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#B8922A] transition-colors"
                >
                  Request This Service
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <div className={`space-y-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div>
                  <h3 className="text-lg font-semibold text-[#1E293B] mb-4 flex items-center gap-2">
                    <FileCheck className="w-5 h-5 text-[#C9A227]" />
                    Services Included
                  </h3>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                        <span className="text-[#64748B]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1E293B] mb-4 flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-[#C9A227]" />
                    How It Works
                  </h3>
                  <ul className="space-y-3">
                    {service.process.map((step, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-[#1E3A5F] rounded-full flex items-center justify-center shrink-0">
                          <span className="text-white text-xs font-bold">{i + 1}</span>
                        </div>
                        <span className="text-[#64748B]">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1E3A5F] to-[#2C5282]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need Custom Sourcing Solutions?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            We tailor our services to match your specific requirements. Contact us to discuss your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#C9A227] text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-[#B8922A] transition-colors"
            >
              Get a Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+862012345678"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <Phone className="w-5 h-5" />
              Schedule a Call
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
