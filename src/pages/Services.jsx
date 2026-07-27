import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Factory, 
  ClipboardCheck, 
  Truck, 
  Shield, 
  DollarSign,
  CheckCircle,
  ArrowRight,
  Clock,
  Users,
  FileText,
  TrendingUp
} from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      id: 'verification',
      icon: Search,
      title: 'Supplier Verification',
      description: 'Verify supplier credentials, business licenses, and factory capabilities to ensure you work with legitimate and capable manufacturers.',
      features: [
        'Business license verification',
        'Factory capability assessment',
        'Reference checks with existing clients',
        'Financial stability evaluation',
        'Export/import license verification',
      ],
      process: [
        'Initial supplier background check',
        'Document verification',
        'On-site factory visit',
        'Capability assessment report',
        'Recommendation with risk analysis',
      ],
    },
    {
      id: 'audit',
      icon: Factory,
      title: 'Factory Audit',
      description: 'Comprehensive on-site audits to assess production capacity, quality management systems, working conditions, and regulatory compliance.',
      features: [
        'Production capacity assessment',
        'Quality management system evaluation',
        'Social compliance audit (BSCI, SEDEX)',
        'Health & safety inspection',
        'Environmental compliance check',
      ],
      process: [
        'Audit scope definition',
        'Pre-audit questionnaire',
        'On-site inspection',
        'Findings documentation',
        'Detailed audit report',
      ],
    },
    {
      id: 'qc',
      icon: ClipboardCheck,
      title: 'Quality Control',
      description: 'Pre-shipment inspections and during-production checks to ensure your products meet specifications and quality standards.',
      features: [
        'Pre-shipment inspection (PSI)',
        'During production inspection (DPI)',
        'AQL-based sampling',
        'Lab testing coordination',
        'Detailed inspection reports',
      ],
      process: [
        'Quality criteria definition',
        'Inspection scheduling',
        'On-site inspection',
        'Sample testing if required',
        'Final inspection report',
      ],
    },
    {
      id: 'production',
      icon: Shield,
      title: 'Production Follow-up',
      description: 'Regular updates and on-site monitoring throughout the production process to keep projects on track and address issues promptly.',
      features: [
        'Weekly progress updates',
        'Production milestone tracking',
        'On-site monitoring visits',
        'Issue identification & resolution',
        'Timeline management',
      ],
      process: [
        'Production schedule review',
        'Regular factory visits',
        'Progress reporting',
        'Issue escalation & resolution',
        'Final production verification',
      ],
    },
    {
      id: 'shipping',
      icon: Truck,
      title: 'Shipping & Logistics',
      description: 'End-to-end logistics coordination including freight forwarding, customs clearance, and delivery to your specified location.',
      features: [
        'Freight forwarding',
        'Customs clearance',
        'Documentation handling',
        'Multi-modal transport',
        'Door-to-door delivery',
      ],
      process: [
        'Logistics requirements assessment',
        'Carrier selection',
        'Booking & coordination',
        'Customs clearance',
        'Delivery confirmation',
      ],
    },
    {
      id: 'sourcing',
      icon: DollarSign,
      title: 'Sourcing & Negotiation',
      description: 'Product sourcing, price negotiation, and contract management to secure the best terms and pricing from suppliers.',
      features: [
        'Supplier identification',
        'Price negotiation',
        'Contract drafting & review',
        'Payment term optimization',
        'Sample management',
      ],
      process: [
        'Requirements analysis',
        'Supplier shortlisting',
        'RFQ process',
        'Negotiation & terms',
        'Contract finalization',
      ],
    },
  ];

  const whyChooseUs = [
    {
      icon: Clock,
      title: '10+ Years Experience',
      description: 'Extensive knowledge of Chinese manufacturing landscape and supplier networks.',
    },
    {
      icon: Users,
      title: 'Bilingual Team',
      description: 'Native English and Mandarin speakers for seamless communication.',
    },
    {
      icon: FileText,
      title: 'Transparent Reporting',
      description: 'Detailed reports at every stage with photos and actionable insights.',
    },
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: '98% client satisfaction rate and thousands of successful orders.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#1E3A5F] text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Sourcing Services
            </h1>
            <p className="text-lg text-gray-200">
              Comprehensive solutions to help you find, verify, and work with reliable Chinese suppliers. From initial supplier search to final delivery, we handle every step.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 bg-[#F8FAFC] border-b border-[#E5E7EB]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-[#F5A623]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-[#F5A623]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#1E3A5F]">{item.title}</h3>
                  <p className="text-sm text-[#6B7280]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Detail */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`section-padding ${index % 2 === 0 ? 'bg-white' : 'bg-[#F8FAFC]'}`}
        >
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="w-14 h-14 bg-[#1E3A5F]/10 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-[#1E3A5F]" />
                </div>
                <h2 className="text-3xl font-bold text-[#1E3A5F] mb-4">
                  {service.title}
                </h2>
                <p className="text-[#6B7280] text-lg mb-6">
                  {service.description}
                </p>
                <h3 className="font-semibold text-[#1E3A5F] mb-3">What's Included:</h3>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#4CAF50] mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-[#6B7280]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 border border-[#E5E7EB]">
                <h3 className="font-semibold text-[#1E3A5F] mb-4">Our Process:</h3>
                <ol className="space-y-4">
                  {service.process.map((step, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="w-6 h-6 bg-[#F5A623] text-white rounded-full flex items-center justify-center text-sm font-medium mr-3 flex-shrink-0">
                        {idx + 1}
                      </span>
                      <span className="text-[#6B7280]">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="section-padding bg-[#1E3A5F] text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Help with Sourcing?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Contact us today to discuss your sourcing needs. We'll help you find the right suppliers and ensure quality every step of the way.
          </p>
          <Link to="/contact" className="btn-primary inline-block text-lg px-8 py-4">
            Get a Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;