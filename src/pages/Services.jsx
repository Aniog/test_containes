import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Shield, Factory, Truck, Search, Eye, ClipboardCheck, Package, FileCheck, Clock, Globe } from 'lucide-react';

const services = [
  {
    id: 'supplier-verification',
    icon: Search,
    title: 'Supplier Verification',
    description: 'Our comprehensive supplier verification service ensures you work only with legitimate, capable manufacturers. We conduct thorough background checks before you commit any resources.',
    features: [
      'Business license verification',
      'Factory existence confirmation',
      'Production capacity assessment',
      'Financial stability check',
      'Export license verification',
      'Previous client references',
    ],
    process: [
      'Initial supplier list review',
      'Background research and documentation',
      'On-site factory visit',
      'Capacity and capability assessment',
      'Quality management system evaluation',
      'Detailed verification report',
    ],
  },
  {
    id: 'factory-inspection',
    icon: Eye,
    title: 'Factory Inspection',
    description: 'Our inspectors personally visit factories to verify they exist, assess their true capabilities, and ensure they meet your standards. Get real insights before placing orders.',
    features: [
      'Factory existence verification',
      'Production line inspection',
      'Worker conditions assessment',
      'Equipment and machinery check',
      'Warehouse and storage facilities',
      'Photo and video documentation',
    ],
    process: [
      'Schedule inspection appointment',
      'On-site factory visit',
      'Detailed photo/video documentation',
      'Capacity assessment',
      'Quality systems review',
      'Comprehensive inspection report',
    ],
  },
  {
    id: 'quality-control',
    icon: ClipboardCheck,
    title: 'Quality Control Inspection',
    description: 'Protect your investment with our rigorous quality control inspections. We catch defects before shipment, saving you from costly returns and damaged reputation.',
    features: [
      'Pre-shipment inspection (PSI)',
      'During production inspection (DPI)',
      'Initial production sample check',
      'Random sampling and testing',
      'AQL-based inspection standards',
      'Detailed photo/video reports',
    ],
    process: [
      'Define inspection criteria',
      'Schedule inspection timing',
      'On-site inspection execution',
      'Random sampling and testing',
      'Defect classification and reporting',
      'Final inspection report delivery',
    ],
  },
  {
    id: 'production-follow',
    icon: Factory,
    title: 'Production Follow-up',
    description: 'Stay informed about your production progress with regular updates. We monitor timelines, quality, and flag any issues before they become problems.',
    features: [
      'Weekly production progress updates',
      'Timeline monitoring and management',
      'Issue identification and escalation',
      'Production milestone verification',
      'Raw material quality tracking',
      'Real-time communication',
    ],
    process: [
      'Establish production milestones',
      'Regular factory visits',
      'Progress reporting',
      'Quality spot-checks',
      'Timeline management',
      'Issue resolution',
    ],
  },
  {
    id: 'sample-management',
    icon: Package,
    title: 'Sample Management',
    description: 'We handle the entire sample process - from requesting samples to evaluating and shipping them to you. Fast turnaround with detailed quality assessments.',
    features: [
      'Sample request management',
      'Sample quality evaluation',
      'Detailed photo/video reports',
      'Comparative analysis',
      'Sample shipping coordination',
      'Feedback transmission to factory',
    ],
    process: [
      'Define sample requirements',
      'Request samples from factory',
      'Receive and evaluate samples',
      'Detailed quality assessment',
      'Report and recommendations',
      'Coordinate shipping to you',
    ],
  },
  {
    id: 'shipping-logistics',
    icon: Truck,
    title: 'Shipping & Logistics',
    description: 'We coordinate end-to-end logistics from factory to your door. Handle freight forwarding, customs clearance, and all documentation professionally.',
    features: [
      'Freight forwarding coordination',
      'Customs clearance handling',
      'Documentation management',
      'Door-to-door delivery',
      'Express shipping options',
      'Insurance coordination',
    ],
    process: [
      'Discuss shipping requirements',
      'Compare shipping options',
      'Book freight space',
      'Prepare customs documentation',
      'Track shipment in transit',
      'Coordinate final delivery',
    ],
  },
];

const benefits = [
  {
    icon: Shield,
    title: 'Risk Mitigation',
    description: 'Reduce the risk of fraud, quality issues, and delivery problems with professional oversight at every stage.',
  },
  {
    icon: Clock,
    title: 'Time Savings',
    description: 'Save weeks of travel time and negotiation effort. Our local team handles everything efficiently.',
  },
  {
    icon: Globe,
    title: 'Local Expertise',
    description: 'Based in Shenzhen, we understand local business practices, language, and cultural nuances.',
  },
  {
    icon: FileCheck,
    title: 'Professional Reports',
    description: 'Receive detailed, actionable reports with photos and videos to make informed decisions.',
  },
];

const ServicesPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0F172A] via-[#1E3A5F] to-[#2D5A8A] text-white py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Professional Sourcing Services from China
            </h1>
            <p className="text-lg text-[#CBD5E1] mb-8">
              Comprehensive solutions to help you source from China with confidence. From supplier verification to final delivery, we handle every step.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#F97316] text-white font-semibold rounded-lg hover:bg-[#EA580C] transition-colors"
            >
              Get a Free Quote
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1E293B] mb-4">
              Our Comprehensive Services
            </h2>
            <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
              End-to-end sourcing solutions designed to minimize risk and maximize results for overseas buyers
            </p>
          </div>

          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-start ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-16 h-16 bg-[#1E3A5F] rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-[#1E293B] mb-4">
                    {service.title}
                  </h3>
                  <p className="text-lg text-[#64748B] mb-8">
                    {service.description}
                  </p>

                  <h4 className="font-semibold text-[#1E293B] mb-4">What's Included:</h4>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#10B981] mt-0.5 flex-shrink-0" />
                        <span className="text-[#64748B]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="bg-[#F8FAFC] rounded-xl p-8 border border-slate-200">
                    <h4 className="font-semibold text-[#1E293B] mb-6">Our Process:</h4>
                    <div className="space-y-4">
                      {service.process.map((step, idx) => (
                        <div key={idx} className="flex items-start gap-4">
                          <div className="w-8 h-8 bg-[#1E3A5F] text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                            {idx + 1}
                          </div>
                          <span className="text-[#64748B] pt-0.5">{step}</span>
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

      {/* Benefits Section */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1E293B] mb-4">
              Why Work With Us
            </h2>
            <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
              The advantages of partnering with a professional China sourcing agent
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl border border-slate-200"
              >
                <div className="w-14 h-14 bg-[#1E3A5F]/10 rounded-xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-7 h-7 text-[#1E3A5F]" />
                </div>
                <h3 className="text-lg font-semibold text-[#1E293B] mb-3">
                  {benefit.title}
                </h3>
                <p className="text-[#64748B]">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1E3A5F]">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Source from China?
          </h2>
          <p className="text-lg text-[#94A3B8] mb-8">
            Get professional help with your China sourcing. Contact us today for a free consultation and quote.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#F97316] text-white font-semibold rounded-lg hover:bg-[#EA580C] transition-colors"
          >
            Get Your Free Quote
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;