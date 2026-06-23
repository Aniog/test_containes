import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, Factory, FileCheck, Clock, Truck, Shield, 
  CheckCircle, ArrowRight, Users, Award, Globe
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: 'Supplier Verification',
      description: 'We verify supplier legitimacy, business licenses, factory capacity, and certifications to ensure you work with genuine partners.',
      features: [
        'Business license verification',
        'Factory capacity assessment',
        'Certification verification (ISO, CE, FCC, etc.)',
        'Reference checks with existing clients',
        'Financial stability assessment',
        'Detailed verification reports with photos',
      ],
    },
    {
      icon: Factory,
      title: 'Factory Inspection',
      description: 'Our inspectors visit factories to assess production capabilities, equipment, worker conditions, and quality management systems.',
      features: [
        'Production facility audit',
        'Equipment and machinery assessment',
        'Worker conditions evaluation',
        'Quality management system review',
        'Production capacity verification',
        'Comprehensive inspection reports',
      ],
    },
    {
      icon: FileCheck,
      title: 'Quality Control',
      description: 'Pre-shipment inspections, during-production checks, and final random inspection to ensure your products meet specifications.',
      features: [
        'Pre-shipment inspection (PSI)',
        'During production inspection (DPI)',
        'Initial production sample check (IPS)',
        'Final random inspection (FRI)',
        'AQL-based sampling',
        'Detailed photo and video reports',
      ],
    },
    {
      icon: Clock,
      title: 'Production Follow-up',
      description: 'Regular updates on production progress, timeline adherence, and early warning of any issues that may affect delivery.',
      features: [
        'Weekly production progress updates',
        'Timeline monitoring and management',
        'Issue identification and escalation',
        'Production milestone verification',
        'Daily factory visits (optional)',
        'Real-time communication',
      ],
    },
    {
      icon: Truck,
      title: 'Shipping Coordination',
      description: 'We coordinate freight forwarding, customs clearance, and documentation to ensure smooth delivery to your destination.',
      features: [
        'Freight forwarding coordination',
        'Customs clearance assistance',
        'Documentation preparation',
        'Shipping method optimization',
        'Cargo tracking',
        'Delivery to warehouse/door',
      ],
    },
    {
      icon: Shield,
      title: 'Supplier Negotiation',
      description: 'We negotiate pricing, payment terms, and contracts on your behalf to secure the best deals with verified suppliers.',
      features: [
        'Price negotiation',
        'Payment terms optimization',
        'Contract review and drafting',
        'MOQ (Minimum Order Quantity) negotiation',
        'Lead time agreements',
        'Protection of your interests',
      ],
    },
  ];

  const whyChooseUs = [
    {
      icon: Users,
      title: 'Experienced Team',
      description: 'Our team has 10+ years of experience in China sourcing and supplier management.',
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'We follow international quality standards and provide detailed inspection reports.',
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'We have established relationships with verified suppliers across various industries.',
    },
    {
      icon: CheckCircle,
      title: 'Risk Mitigation',
      description: 'Our services help minimize risks associated with sourcing from overseas suppliers.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] text-white py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-white mb-4">Our Sourcing Services</h1>
            <p className="text-xl text-white/90">
              Comprehensive solutions to help you source from China with confidence. From supplier verification to shipping coordination, we handle every step.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-[var(--background)]">
        <div className="container">
          <div className="grid gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-[var(--border)] overflow-hidden">
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-1/3">
                      <div className="w-16 h-16 bg-[var(--primary)]/10 rounded-lg flex items-center justify-center mb-4">
                        <service.icon className="w-8 h-8 text-[var(--primary)]" />
                      </div>
                      <h2 className="text-2xl mb-3">{service.title}</h2>
                      <p className="text-[var(--text-secondary)]">{service.description}</p>
                    </div>
                    <div className="lg:w-2/3">
                      <h3 className="text-lg font-semibold mb-4">What's Included:</h3>
                      <div className="grid md:grid-cols-2 gap-3">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-[var(--success)] flex-shrink-0 mt-0.5" size={18} />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
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
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4">Why Choose SSourcing China</h2>
            <p className="max-w-2xl mx-auto">
              We bring expertise, reliability, and dedication to every sourcing project
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center p-6 bg-[var(--background)] rounded-lg">
                <div className="w-14 h-14 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-[var(--primary)]" />
                </div>
                <h3 className="text-lg mb-2">{item.title}</h3>
                <p className="text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-[var(--primary)] text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white mb-4">Need Help With Sourcing?</h2>
            <p className="text-white/90 mb-8 text-lg">
              Contact us today to discuss your sourcing needs. We'll help you find the right suppliers and ensure quality every step of the way.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[var(--accent)] text-white px-8 py-4 rounded font-semibold hover:bg-[var(--accent-hover)] transition-colors"
            >
              Get a Free Sourcing Quote
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;