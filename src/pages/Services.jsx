import { Link } from 'react-router-dom';
import { Search, ClipboardCheck, Box, Truck, MessageSquare, FileCheck, Shield, Users, BarChart, CheckCircle, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 'verification',
    icon: Search,
    title: 'Supplier Verification',
    description: 'We conduct thorough background checks on factories to ensure you work with legitimate, capable manufacturers.',
    features: [
      'Business license verification',
      'Factory实地考察',
      'Production capacity assessment',
      'Financial stability check',
      'Quality management systems review',
      'Previous client references',
    ],
    imageId: 'service-verification-img-abc123',
  },
  {
    id: 'inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Our QC team performs comprehensive inspections at every production stage to catch issues before products ship.',
    features: [
      'Pre-production inspection',
      'During production (DPI) inspection',
      'Pre-shipment inspection (PSI)',
      'AQL sampling according to ISO 2859',
      'Detailed inspection reports with photos',
      'Lab testing coordination',
    ],
    imageId: 'service-inspection-img-def456',
  },
  {
    id: 'production',
    icon: Box,
    title: 'Production Follow-up',
    description: 'We monitor your orders throughout production to ensure timelines are met and quality standards are maintained.',
    features: [
      'Order tracking and monitoring',
      'Production progress updates',
      'Sample approval management',
      'Specification compliance checks',
      'Timeline management',
      'Issue resolution support',
    ],
    imageId: 'service-production-img-ghi789',
  },
  {
    id: 'shipping',
    icon: Truck,
    title: 'Shipping & Logistics',
    description: 'From factory to your doorstep, we handle all shipping and logistics complexities.',
    features: [
      'Freight forwarding services',
      'Customs clearance support',
      'Documentation preparation',
      'Multi-modal transport (sea, air, rail)',
      'Cargo insurance coordination',
      'Last-mile delivery tracking',
    ],
    imageId: 'service-shipping-img-jkl012',
  },
  {
    id: 'communication',
    icon: MessageSquare,
    title: 'Communication Support',
    description: 'We bridge language and cultural gaps between you and your Chinese suppliers.',
    features: [
      'Professional translation services',
      'Business communication mediation',
      'Technical specification clarification',
      'Negotiation support',
      'Cultural bridging',
      'Meeting interpretation',
    ],
    imageId: 'service-communication-img-mno345',
  },
  {
    id: 'documentation',
    icon: FileCheck,
    title: 'Documentation & Compliance',
    description: 'We handle all export/import documentation to ensure smooth customs processing.',
    features: [
      'Commercial invoice preparation',
      'Packing list creation',
      'Certificate of origin',
      'Bill of lading management',
      'CE/FCC/FDA documentation',
      'Customs declaration support',
    ],
    imageId: 'service-documentation-img-pqr678',
  },
];

const additionalServices = [
  {
    icon: Shield,
    title: 'IP Protection',
    description: 'We help protect your intellectual property when working with Chinese manufacturers.',
  },
  {
    icon: Users,
    title: 'Sample Management',
    description: 'We coordinate sample production, review, and approval to ensure product quality before mass production.',
  },
  {
    icon: BarChart,
    title: 'Price Negotiation',
    description: 'Our team leverages industry knowledge to negotiate competitive pricing with suppliers.',
  },
];

const Services = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-6">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive China Sourcing Services
            </h1>
            <p className="text-xl text-primary-100 mb-8 leading-relaxed">
              From supplier verification to final delivery, we provide end-to-end support for your China sourcing operations.
            </p>
            <Link to="/contact" className="btn-accent text-lg px-8 py-4">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="space-y-20">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="scroll-mt-24 grid lg:grid-cols-2 gap-12 items-center"
                >
                  <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                    <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-primary-700" />
                    </div>
                    <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" />
                          <span className="text-neutral-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-2xl aspect-video flex items-center justify-center">
                      <Icon className="w-24 h-24 text-neutral-400" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-spacing bg-neutral-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="badge-primary mb-4">More Services</span>
            <h2 className="section-heading mb-4">
              Additional Support Services
            </h2>
            <p className="section-subheading mx-auto">
              Beyond our core services, we offer additional support to address your specific needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-accent-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-neutral-500">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing bg-primary-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your sourcing needs. We'll create a customized plan for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-accent text-lg px-8 py-4">
              Get a Free Quote
            </Link>
            <Link to="/how-it-works" className="px-8 py-4 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-primary-800 transition-colors">
              Learn How It Works
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
