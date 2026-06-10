import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Search,
  ShieldCheck,
  ClipboardCheck,
  Truck,
  Factory,
  FileText,
  Users,
  ArrowRight,
  CheckCircle2,
  Phone,
  Mail,
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: 'Supplier Sourcing',
      description: 'We identify and match you with reliable Chinese manufacturers that meet your product specifications, quality requirements, and budget.',
      features: [
        'Product requirement analysis',
        'Supplier database of 1000+ verified factories',
        'Capability and capacity assessment',
        'Price negotiation on your behalf',
        'Sample arrangement and evaluation',
      ],
    },
    {
      icon: ShieldCheck,
      title: 'Factory Verification',
      description: 'Comprehensive on-site factory audits to ensure your potential suppliers are legitimate, capable, and compliant.',
      features: [
        'Business license verification',
        'Production capacity assessment',
        'Quality management system review',
        'Social compliance audit (BSCI, Sedex)',
        'Reference checks with existing clients',
      ],
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Inspection',
      description: 'Professional third-party inspection services at every stage of production to ensure products meet your standards.',
      features: [
        'Pre-production inspection (PPI)',
        'During-production inspection (DPI)',
        'Pre-shipment inspection (PSI)',
        'Container loading supervision',
        'Detailed inspection reports with photos',
      ],
    },
    {
      icon: Truck,
      title: 'Shipping Coordination',
      description: 'End-to-end logistics support to get your products from the factory to your warehouse safely and on time.',
      features: [
        'Freight forwarding (sea, air, express)',
        'Customs documentation preparation',
        'Insurance arrangement',
        'Shipment tracking and updates',
        'Last-mile delivery coordination',
      ],
    },
    {
      icon: Factory,
      title: 'Production Monitoring',
      description: 'Ongoing oversight of your production orders to ensure timelines, quality, and communication stay on track.',
      features: [
        'Production schedule monitoring',
        'Regular progress updates',
        'Issue escalation and resolution',
        'Quality milestone checks',
        'Client communication bridge',
      ],
    },
    {
      icon: FileText,
      title: 'Product Sourcing Research',
      description: 'Market research and product development support to help you find profitable products and competitive suppliers.',
      features: [
        'Market trend analysis',
        'Competitor product research',
        'Supplier price benchmarking',
        'New product identification',
        'Industry insights and reports',
      ],
    },
  ];

  const whyChooseUs = [
    {
      icon: Users,
      title: 'Dedicated Project Manager',
      description: 'A single point of contact who understands your business and speaks fluent English.',
    },
    {
      icon: ShieldCheck,
      title: '100% Transparency',
      description: 'All costs, timelines, and issues are communicated clearly with no hidden fees.',
    },
    {
      icon: CheckCircle2,
      title: 'Quality Guaranteed',
      description: 'We stand behind our inspections. If issues are found, we work to resolve them before shipment.',
    },
    {
      icon: Phone,
      title: 'Responsive Support',
      description: 'Quick response times via email, phone, and WeChat for real-time communication.',
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Comprehensive China Sourcing Services
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              From finding the right supplier to delivering products to your door, we provide end-to-end sourcing solutions tailored to your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">Get a Free Quote</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="mailto:info@ssourcingchina.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Core Services</h2>
            <p className="section-subtitle mx-auto">
              Each service is designed to address specific challenges in the China sourcing process.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-50 text-blue-600 mb-4">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-slate-600">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Why Choose SSourcing China</h2>
            <p className="section-subtitle mx-auto">
              We're more than just a sourcing agent. We're your partner in building a reliable supply chain.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-50 text-blue-600 mb-4">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600">
        <div className="container-custom py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Streamline Your Sourcing?
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Contact us today for a free consultation. We'll analyze your needs and provide a customized sourcing plan.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Start Your Sourcing Project</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
