import { Link } from 'react-router-dom';
import { 
  Search, 
  Shield, 
  ClipboardCheck, 
  Factory, 
  Truck, 
  ArrowRight, 
  CheckCircle,
  MapPin,
  FileText,
  Users,
  Award,
  Clock,
  DollarSign
} from 'lucide-react';

const services = [
  {
    id: 'supplier-research',
    icon: Search,
    title: 'Supplier Research',
    subtitle: 'Find the Right Manufacturers',
    description: 'Our comprehensive supplier research service helps you identify verified, reliable manufacturers that match your specific requirements. We leverage our extensive network and local market knowledge to find suppliers who can deliver quality products at competitive prices.',
    features: [
      'Extensive database of verified manufacturers',
      'Product-specific supplier matching',
      'Background checks and reputation verification',
      'Capability and capacity assessment',
      'Price comparison and negotiation',
      'MOQ requirements review',
    ],
    image: 'Supplier research team meeting with manufacturers',
  },
  {
    id: 'factory-verification',
    icon: Shield,
    title: 'Factory Verification',
    subtitle: 'Verify Before You Trust',
    description: 'Before committing to any supplier, we conduct thorough on-site factory audits to verify their legitimacy, capabilities, and compliance. Our verification process ensures you\'re working with genuine manufacturers who can deliver on their promises.',
    features: [
      'Business license verification',
      'Factory location confirmation',
      'Production capacity assessment',
      'Equipment and technology review',
      'Certification validation (ISO, CE, etc.)',
      'Social compliance audits (BSCI, Sedex)',
    ],
    image: 'Factory verification inspection team',
  },
  {
    id: 'quality-control',
    icon: ClipboardCheck,
    title: 'Quality Control',
    subtitle: 'Ensure Consistent Quality',
    description: 'Our professional QC services catch potential issues before they become costly problems. We offer inspection services at every stage of production to ensure your products meet your exact specifications and quality standards.',
    features: [
      'Pre-production inspection (materials)',
      'During-production inspection (DPI)',
      'Pre-shipment inspection (PSI)',
      'Full inspection (FI) and sample inspection',
      'AQL-based sampling methods',
      'Third-party inspection coordination (SGS, BV)',
    ],
    image: 'Quality control inspection product check',
  },
  {
    id: 'production',
    icon: Factory,
    title: 'Production Follow-up',
    subtitle: 'Monitor Every Step',
    description: 'We stay on top of your production to ensure timelines are met and quality is maintained. Our team provides regular updates and addresses any issues that arise during the manufacturing process.',
    features: [
      'Production schedule monitoring',
      'Weekly progress reports',
      'Issue identification and resolution',
      'Sample approval coordination',
      'Delivery timeline management',
      'Communication between parties',
    ],
    image: 'Production follow-up factory monitoring',
  },
  {
    id: 'shipping',
    icon: Truck,
    title: 'Shipping Coordination',
    subtitle: 'Seamless Logistics',
    description: 'From factory to your doorstep, we handle all logistics aspects of your order. We work with reliable freight forwarders to ensure your products are shipped safely, on time, and at competitive rates.',
    features: [
      'Freight forwarder coordination',
      'Customs documentation preparation',
      'Container loading supervision',
      'Shipping method optimization',
      'Tracking and status updates',
      'DDP and FOB terms management',
    ],
    image: 'Shipping coordination container logistics',
  },
];

const benefits = [
  {
    icon: DollarSign,
    title: 'Cost Savings',
    description: 'Negotiate better prices and reduce hidden costs',
  },
  {
    icon: Clock,
    title: 'Time Savings',
    description: 'Skip the research and verification phase',
  },
  {
    icon: Award,
    title: 'Quality Assurance',
    description: 'Professional inspections at every stage',
  },
  {
    icon: Users,
    title: 'Expert Support',
    description: 'Bilingual team with local market knowledge',
  },
];

const ServiceSection = ({ service, isEven }) => {
  return (
    <section id={service.id} className="section-spacing bg-white">
      <div className="container-custom">
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${isEven ? 'lg:flex-row-reverse' : ''}`}>
          <div className={isEven ? 'lg:order-2' : ''}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center">
                <service.icon className="w-7 h-7 text-blue-600" />
              </div>
              <div>
                <span className="text-sm text-blue-600 font-medium">{service.subtitle}</span>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">{service.title}</h2>
              </div>
            </div>
            <p className="text-slate-600 text-lg mb-8">
              {service.description}
            </p>
            <ul className="space-y-4 mb-8">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{feature}</span>
                </li>
              ))}
            </ul>
            <Link to="/contact" className="btn-primary">
              Request This Service <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className={`${isEven ? 'lg:order-1' : ''}`}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-100 to-teal-100 rounded-2xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img 
                  data-strk-img-id={`service-${service.id}-img-xyz789`}
                  data-strk-img={`[service-${service.id}-title] [service-${service.id}-subtitle]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={service.title}
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional China Sourcing Services
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              End-to-end solutions for finding suppliers, verifying factories, ensuring quality, and coordinating shipping from China.
            </p>
            <Link to="/contact" className="btn-primary text-lg px-8 py-4">
              Get a Free Quote <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-slate-50">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-slate-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Sections */}
      {services.map((service, index) => (
        <ServiceSection key={service.id} service={service} isEven={index % 2 === 1} />
      ))}

      {/* CTA Section */}
      <section className="section-spacing bg-blue-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Sourcing Project?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote. We'll help you find the right suppliers and ensure your success.
          </p>
          <Link to="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center gap-2">
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
