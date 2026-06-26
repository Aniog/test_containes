import React from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  Building2,
  ClipboardCheck,
  Factory,
  Truck,
  CheckCircle,
  ArrowRight,
  FileCheck,
  Users,
  BarChart3,
  Package,
  Globe,
  Shield,
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 'supplier-search',
      icon: Search,
      title: 'Supplier Search & Identification',
      description: 'Finding the right supplier is the foundation of successful China sourcing. Our team uses deep market knowledge and proven methodology to identify manufacturers that match your specific requirements.',
      features: [
        'Product specification matching',
        'Price benchmarking analysis',
        'Production capacity verification',
        'Export experience assessment',
        'Certification verification',
        'Multi-supplier comparison reports',
      ],
      process: [
        'We analyze your product requirements and target specifications',
        'Our team researches potential manufacturers across China',
        'Initial screening based on capabilities and experience',
        'Detailed supplier profiles with pros and cons',
        'You select the suppliers you want to pursue',
      ],
    },
    {
      id: 'factory-verification',
      icon: Building2,
      title: 'Factory Verification & Audits',
      description: 'Don\'t take suppliers at their word. We conduct thorough on-site factory audits to verify legitimacy, capabilities, and compliance before you commit to any order.',
      features: [
        'Business license verification',
        'Production facility inspection',
        'Machinery and equipment assessment',
        'Employee count and skills verification',
        'Quality management system review',
        'Social compliance audit (optional)',
        'Photo and video documentation',
        'Detailed audit reports',
      ],
      process: [
        'Schedule unannounced or announced factory visits',
        'Verify physical existence and business registration',
        'Inspect production lines and quality control areas',
        'Review certifications, licenses, and documentation',
        'Interview management and workers',
        'Compile comprehensive audit report',
      ],
    },
    {
      id: 'quality-inspection',
      icon: ClipboardCheck,
      title: 'Quality Inspection & Control',
      description: 'Protect your investment with professional quality inspections at every stage of production. Our QC team ensures your products meet specifications before they leave China.',
      features: [
        'Pre-production inspection (materials check)',
        'During production inspection (DPI)',
        'Pre-shipment inspection (PSI)',
        'Container loading supervision',
        'AQL-based sampling',
        'Detailed inspection reports with photos',
        'Defect classification and analysis',
        'Corrective action recommendations',
      ],
      process: [
        'Define inspection criteria and acceptance levels',
        'Schedule inspections at appropriate production stages',
        'Our inspector visits factory and conducts assessment',
        'Receive real-time updates and photos',
        'Detailed report with findings and recommendations',
        'Follow up on any issues identified',
      ],
    },
    {
      id: 'production-followup',
      icon: Factory,
      title: 'Production Follow-up & Monitoring',
      description: 'Stay informed throughout the manufacturing process. Regular updates and on-site visits ensure your order stays on track and any issues are caught early.',
      features: [
        'Weekly production progress updates',
        'On-site production monitoring',
        'Sample approval coordination',
        'Raw material verification',
        'Schedule tracking and alerts',
        'Issue escalation and resolution',
        'Communication bridge with factory',
        'Documentation management',
      ],
      process: [
        'Establish production timeline and milestones',
        'Regular check-ins with factory management',
        'Site visits at key production stages',
        'Sample approval before mass production',
        'Real-time issue identification and resolution',
        'Final production status confirmation',
      ],
    },
    {
      id: 'shipping',
      icon: Truck,
      title: 'Shipping & Logistics Coordination',
      description: 'Navigate the complexities of international shipping with our comprehensive logistics support. From documentation to delivery, we ensure your goods arrive safely and on time.',
      features: [
        'Freight forwarding services',
        'Customs clearance support',
        'Documentation preparation',
        'Shipping method optimization',
        'Cargo insurance coordination',
        'Tracking and monitoring',
        'Port handling coordination',
        'Last-mile delivery options',
      ],
      process: [
        'Assess shipping requirements and destinations',
        'Compare shipping options (sea, air, express)',
        'Prepare all export/import documentation',
        'Coordinate with shipping lines and agents',
        'Monitor cargo movement in real-time',
        'Handle customs clearance procedures',
        'Confirm delivery and provide documentation',
      ],
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Risk Mitigation',
      description: 'Reduce the risk of fraud, quality issues, and delivery delays with professional oversight at every stage.',
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Work with experienced professionals who understand both Chinese manufacturing and international business.',
    },
    {
      icon: BarChart3,
      title: 'Cost Efficiency',
      description: 'Leverage our relationships with verified factories and optimize your supply chain for better margins.',
    },
    {
      icon: Globe,
      title: 'Time Savings',
      description: 'Focus on your core business while we handle the complexities of China sourcing.',
    },
    {
      icon: Package,
      title: 'Quality Assurance',
      description: 'Ensure every shipment meets your specifications through rigorous inspection and quality control.',
    },
    {
      icon: FileCheck,
      title: 'Complete Documentation',
      description: 'Get all necessary paperwork handled correctly, from contracts to shipping documents.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1e3a5f] via-[#2d5a8e] to-[#1e3a5f] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[#e67e22] font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h1 className="text-4xl lg:text-5xl font-bold mt-3 mb-6">
              Comprehensive China Sourcing Services
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              From supplier discovery to final delivery, we provide end-to-end support for all your China sourcing needs. Our professional services help you find reliable suppliers, ensure quality, and manage logistics seamlessly.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`scroll-mt-24 grid lg:grid-cols-2 gap-12 items-start ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-16 h-16 bg-[#fef7f0] rounded-xl flex items-center justify-center mb-6">
                    <service.icon size={32} className="text-[#e67e22]" />
                  </div>
                  <h2 className="text-3xl font-bold text-[#1e3a5f] mb-4">
                    {service.title}
                  </h2>
                  <p className="text-[#4a5568] text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <h3 className="font-semibold text-[#1e3a5f] mb-4">What's Included:</h3>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle size={20} className="text-[#27ae60] flex-shrink-0 mt-0.5" />
                        <span className="text-[#4a5568]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="bg-[#f7fafc] rounded-2xl p-8">
                    <h3 className="font-semibold text-[#1e3a5f] mb-6">How It Works:</h3>
                    <div className="space-y-6">
                      {service.process.map((step, i) => (
                        <div key={i} className="flex gap-4">
                          <div className="w-8 h-8 bg-[#e67e22] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                            {i + 1}
                          </div>
                          <p className="text-[#4a5568] pt-1">{step}</p>
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
      <section className="py-20 bg-[#f7fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#e67e22] font-semibold text-sm uppercase tracking-wider">Why Work With Us</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a5f] mt-3 mb-4">
              The Benefits of Our Services
            </h2>
            <p className="text-[#4a5568] text-lg">
              Our comprehensive services are designed to address the common challenges of China sourcing while maximizing value for your business.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-[#fef7f0] rounded-xl flex items-center justify-center mb-6">
                  <benefit.icon size={28} className="text-[#e67e22]" />
                </div>
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-3">
                  {benefit.title}
                </h3>
                <p className="text-[#4a5568] leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1e3a5f] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Tell us about your sourcing needs and we'll create a customized plan for your project.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#e67e22] hover:bg-[#d35400] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all"
          >
            Get a Free Quote
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;