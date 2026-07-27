import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Factory, 
  ClipboardCheck, 
  Truck, 
  FileText, 
  Package,
  Building2,
  Users,
  DollarSign,
  ArrowRight,
  CheckCircle2,
  Phone,
  Mail
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const services = [
  {
    id: 'verification',
    icon: Search,
    title: 'Supplier Verification',
    subtitle: 'Know who you are dealing with',
    description: 'Before you commit to any supplier, we verify their legitimacy, capabilities, and reliability through comprehensive on-site assessments.',
    features: [
      'Business license verification',
      'Factory existence confirmation',
      'Production capacity assessment',
      'Financial stability check',
      'Historical background review',
      'Reference verification from other buyers',
    ],
    imageId: 'supplier-verification',
  },
  {
    id: 'audits',
    icon: Factory,
    title: 'Factory Audits',
    subtitle: 'Detailed facility assessments',
    description: 'Our auditors conduct thorough inspections of manufacturing facilities to ensure they meet your standards and regulatory requirements.',
    features: [
      'On-site facility inspection',
      'Production line capability review',
      'Quality management system assessment',
      'Health and safety compliance check',
      'Worker conditions evaluation',
      'Environmental compliance review',
    ],
    imageId: 'factory-audit',
  },
  {
    id: 'inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    subtitle: 'Ensure product quality at every stage',
    description: 'We conduct rigorous inspections during and after production to catch issues early and ensure your products meet specifications.',
    features: [
      'Pre-production sample approval',
      'During production (DPI) inspections',
      'Pre-shipment inspection (PSI)',
      'Full inspection (100% checking)',
      'AQL-based sampling inspection',
      'Lab testing coordination',
    ],
    imageId: 'quality-inspection',
  },
  {
    id: 'production',
    icon: Package,
    title: 'Production Follow-up',
    subtitle: 'Keep your order on track',
    description: 'Regular monitoring and updates throughout the production process so you stay informed and can address issues proactively.',
    features: [
      'Weekly production progress reports',
      'Photo and video documentation',
      'Quality issue identification',
      'Timeline tracking',
      'Client communication bridge',
      'Issue escalation management',
    ],
    imageId: 'production-followup',
  },
  {
    id: 'shipping',
    icon: Truck,
    title: 'Shipping Coordination',
    subtitle: 'Seamless logistics from factory to door',
    description: 'We handle the complexity of international shipping, ensuring your products arrive safely and on time.',
    features: [
      'Freight forwarding services',
      'Customs clearance coordination',
      'Documentation preparation',
      'Multi-modal transport (sea, air, rail)',
      'Cargo insurance arrangement',
      'Last-mile delivery coordination',
    ],
    imageId: 'shipping-coordination',
  },
  {
    id: 'documentation',
    icon: FileText,
    title: 'Documentation Services',
    subtitle: 'Complete paperwork handling',
    description: 'We manage all required documentation for smooth import/export processes and regulatory compliance.',
    features: [
      'Commercial invoice preparation',
      'Packing list coordination',
      'Certificate of origin handling',
      'Bill of lading tracking',
      'Customs declaration support',
      'Product compliance documentation',
    ],
    imageId: 'documentation',
  },
];

const additionalServices = [
  {
    icon: DollarSign,
    title: 'Price Negotiation',
    description: 'We leverage our market knowledge to negotiate competitive pricing on your behalf.',
  },
  {
    icon: Users,
    title: 'Translation Services',
    description: 'Bilingual support for all communications, documents, and technical specifications.',
  },
  {
    icon: Building2,
    title: 'Trade Show Support',
    description: 'Guided factory visits and trade show assistance in China.',
  },
];

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Our Sourcing Services
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Comprehensive solutions for every step of your China sourcing journey — 
              from finding suppliers to delivering products at your door.
            </p>
            <Button variant="accent" size="lg" asChild>
              <Link to="/contact">Get a Free Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <span className="text-sm text-blue-600 font-medium uppercase tracking-wide">
                      {service.subtitle}
                    </span>
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-slate-600 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" asChild>
                    <Link to="/contact">Request This Service</Link>
                  </Button>
                </div>
                <div className={`bg-slate-100 rounded-2xl p-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img
                    alt={service.title}
                    data-strk-img-id={`service-${service.imageId}`}
                    data-strk-img={`[service-${service.id}-title] [service-${service.id}-subtitle]`}
                    data-strk-img-ratio="16x10"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full rounded-lg shadow-lg"
                  />
                  <h3 id={`service-${service.id}-title`} className="sr-only">{service.title}</h3>
                  <p id={`service-${service.id}-subtitle`} className="sr-only">{service.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Additional Services
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Beyond our core offerings, we provide supplementary services to support your sourcing needs.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service) => (
              <div
                key={service.title}
                className="p-6 bg-white rounded-xl border border-slate-200"
              >
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Contact us today for a free consultation. We'll discuss your requirements 
            and create a customized sourcing plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" asChild>
              <Link to="/contact">Get a Free Quote</Link>
            </Button>
            <a 
              href="mailto:info@ssourcingchina.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-800 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              <Mail className="w-5 h-5" />
              info@ssourcingchina.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
