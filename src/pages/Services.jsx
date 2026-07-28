import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Shield, FileCheck, Package, Ship, Users, Clock, Award } from 'lucide-react';
import CTAButton from '../components/ui/CTAButton';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: 'Supplier Sourcing',
      description: 'We identify and qualify suppliers that match your product requirements, quality standards, and commercial terms.',
      details: [
        'Product specification review and clarification',
        'Supplier database search and outreach',
        'Initial capability screening',
        'Shortlist presentation with comparison',
        'Introduction and preliminary discussions',
      ],
    },
    {
      icon: Shield,
      title: 'Factory Verification',
      description: 'On-site audits to confirm supplier legitimacy, production capacity, quality systems, and compliance status.',
      details: [
        'Business license and registration verification',
        'Production facility inspection',
        'Equipment and capacity assessment',
        'Quality management system review',
        'Written audit report with findings',
      ],
    },
    {
      icon: FileCheck,
      title: 'Quality Inspection',
      description: 'Independent inspection services to verify product quality before shipment and during production.',
      details: [
        'Pre-shipment inspection (PSI)',
        'During production inspection (DUPRO)',
        'Initial production check (IPC)',
        'Container loading supervision',
        'Detailed inspection reports with photos',
      ],
    },
    {
      icon: Package,
      title: 'Production Monitoring',
      description: 'Ongoing oversight and regular updates throughout the manufacturing process to identify issues early.',
      details: [
        'Production schedule tracking',
        'Material and component verification',
        'Weekly progress reports',
        'Issue identification and escalation',
        'Sample collection and review',
      ],
    },
    {
      icon: Ship,
      title: 'Logistics Coordination',
      description: 'Support for shipping arrangements, export documentation, and coordination with freight forwarders.',
      details: [
        'Freight forwarder recommendations',
        'Shipping schedule coordination',
        'Export documentation review',
        'Customs clearance guidance',
        'Delivery timeline tracking',
      ],
    },
  ];

  const additionalServices = [
    {
      icon: Users,
      title: 'Supplier Management',
      description: 'Ongoing relationship management and performance monitoring for regular sourcing programs.',
    },
    {
      icon: Clock,
      title: 'Urgent Sourcing',
      description: 'Expedited supplier search for time-sensitive requirements with compressed timelines.',
    },
    {
      icon: Award,
      title: 'Compliance Support',
      description: 'Guidance on product standards, certifications, and regulatory requirements for target markets.',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-[#F9FAFB] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-semibold text-[#0A2540] mb-4">Sourcing Services</h1>
            <p className="text-lg text-[#4B5563] mb-6">
              Comprehensive support for buyers sourcing from China. Select individual services or engage us for end-to-end project management.
            </p>
            <CTAButton />
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className="grid md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-5">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-[#EFF6FF] flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-6 h-6 text-[#1E40AF]" />
                    </div>
                    <h2 className="text-2xl font-semibold text-[#0A2540]">{service.title}</h2>
                  </div>
                  <p className="text-[#4B5563]">{service.description}</p>
                </div>
                <div className="md:col-span-7">
                  <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[#1F2937] py-1">
                        <span className="text-[#059669] mt-1">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 md:py-20 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-[#0A2540] mb-8 text-center">Additional Support</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="w-11 h-11 rounded-lg bg-[#EFF6FF] flex items-center justify-center mb-4">
                  <service.icon className="w-5 h-5 text-[#1E40AF]" />
                </div>
                <h3 className="font-semibold text-[#0A2540] mb-2">{service.title}</h3>
                <p className="text-sm text-[#4B5563]">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-[#0A2540] mb-8 text-center">Engagement Options</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-[#0A2540] mb-3">Project-Based</h3>
              <p className="text-sm text-[#4B5563] mb-4">
                Defined scope for a specific sourcing requirement. Includes supplier search, verification, and production support through delivery.
              </p>
              <p className="text-xs text-[#6B7280]">Best for: One-time orders, new product launches</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-[#0A2540] mb-3">Retainer</h3>
              <p className="text-sm text-[#4B5563] mb-4">
                Ongoing support for regular sourcing programs. Includes supplier management, quality oversight, and priority response.
              </p>
              <p className="text-xs text-[#6B7280]">Best for: Recurring orders, multiple product lines</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-[#0A2540] mb-3">Service Packages</h3>
              <p className="text-sm text-[#4B5563] mb-4">
                Individual services such as factory audits or inspections. Flexible engagement for specific needs.
              </p>
              <p className="text-xs text-[#6B7280]">Best for: Existing supplier verification, quality checks</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0A2540] text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to discuss your sourcing needs?</h2>
          <p className="text-gray-300 mb-6">Contact us for a preliminary assessment and proposal.</p>
          <CTAButton />
        </div>
      </section>
    </div>
  );
};

export default Services;
