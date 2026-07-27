import { Link } from 'react-router-dom';
import { 
  Search, Factory, ClipboardCheck, Truck, Package, ShieldCheck,
  FileCheck, BarChart3, Handshake, ArrowRight, CheckCircle
} from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Supplier Research & Identification',
    description: 'We identify and vet qualified manufacturers that match your product specifications, quality requirements, and budget parameters.',
    features: [
      'Comprehensive supplier database across China',
      'Custom supplier matching based on criteria',
      'Initial supplier outreach and communication',
      'Capability and capacity assessment',
      'Preliminary pricing negotiations',
    ],
  },
  {
    icon: Factory,
    title: 'Factory Verification & Audit',
    description: 'On-site audits to verify factory legitimacy, production capacity, certifications, and overall business practices.',
    features: [
      'Business license verification',
      'Factory facility inspection',
      'Production capacity assessment',
      'Quality management system review',
      'Worker conditions evaluation',
      'Certification authentication',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection Services',
    description: 'Rigorous quality control inspections at multiple stages to ensure products meet your specifications.',
    features: [
      'Pre-production inspection',
      'During production inspection (DPI)',
      'Pre-shipment inspection (PSI)',
      'Container loading supervision',
      'Detailed inspection reports with photos',
      'AQL-based sampling procedures',
    ],
  },
  {
    icon: Package,
    title: 'Production Follow-up & Monitoring',
    description: 'Regular updates and monitoring to keep your order on track, on time, and within specifications.',
    features: [
      'Production progress tracking',
      'Weekly status updates',
      'Timeline management',
      'Issue identification and resolution',
      'Sample approval coordination',
      'Bulk production monitoring',
    ],
  },
  {
    icon: Truck,
    title: 'Shipping & Logistics Coordination',
    description: 'End-to-end logistics management from factory to your destination.',
    features: [
      'Freight forwarding services',
      'Customs documentation handling',
      'Export/import clearance',
      'Multi-modal transport (sea, air, rail)',
      'Track and trace services',
      'Delivery coordination',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Risk Mitigation & Compliance',
    description: 'Protecting your investment through comprehensive verification and quality control processes.',
    features: [
      'Supplier reliability assessment',
      'Payment security measures',
      'Intellectual property protection',
      'Regulatory compliance guidance',
      'Dispute resolution support',
      'Contract review assistance',
    ],
  },
];

const additionalServices = [
  {
    icon: FileCheck,
    title: 'Product Development Support',
    description: 'From concept to production, we help develop your products for manufacturing in China.',
  },
  {
    icon: BarChart3,
    title: 'Cost Analysis & Negotiation',
    description: 'Detailed cost breakdowns and expert negotiation to secure competitive pricing.',
  },
  {
    icon: Handshake,
    title: 'Sample Management',
    description: 'Coordinating samples, managing revisions, and ensuring approval processes.',
  },
];

const ServiceCard = ({ service, large = false }) => (
  <div className={`card-base ${large ? 'h-full' : ''}`}>
    <div className="w-16 h-16 bg-primary-50 rounded-xl flex items-center justify-center mb-6">
      <service.icon className="w-8 h-8 text-primary" />
    </div>
    <h3 className="text-xl font-bold text-text-primary mb-4">{service.title}</h3>
    <p className="text-text-secondary mb-6 leading-relaxed">{service.description}</p>
    <ul className="space-y-3">
      {service.features.map((feature) => (
        <li key={feature} className="flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
          <span className="text-sm text-text-secondary">{feature}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Services = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-600 to-secondary py-20 lg:py-28">
        <div className="container-main">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6 leading-tight">
              Comprehensive China Sourcing Services
            </h1>
            <p className="text-lg text-gray-200 mb-8 leading-relaxed">
              From supplier identification to final delivery, we provide end-to-end sourcing 
              solutions tailored to your specific needs. Our on-the-ground team in China 
              ensures quality, transparency, and reliability at every step.
            </p>
            <Link to="/contact" className="btn-accent text-lg px-8 py-4">
              Get a Free Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="section-padding bg-background-light">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} large />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">More Services</span>
            <h2 className="heading-2 mt-3 mb-4">Additional Support</h2>
            <p className="text-body">
              Beyond our core services, we offer additional support to ensure your sourcing 
              experience is smooth and successful.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {additionalServices.map((service) => (
              <div key={service.title} className="card-base text-center">
                <div className="w-14 h-14 bg-accent-50 rounded-xl flex items-center justify-center mx-auto mb-5">
                  <service.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="heading-3 mb-3">{service.title}</h3>
                <p className="text-text-secondary">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="section-padding bg-background-dark">
        <div className="container-main">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">How We Work</span>
            <h2 className="heading-2 mt-3 mb-4 text-white">Our Service Process</h2>
            <p className="text-body text-gray-400">
              A structured approach that ensures transparency, accountability, and results 
              at every stage of your sourcing project.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Consultation', desc: 'Understand your requirements and goals' },
              { step: '2', title: 'Research', desc: 'Identify and verify potential suppliers' },
              { step: '3', title: 'Execution', desc: 'Manage production and quality control' },
              { step: '4', title: 'Delivery', desc: 'Coordinate shipping and logistics' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{item.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container-main text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Tell us about your sourcing needs and receive a customized service plan and quote.
          </p>
          <Link to="/contact" className="btn-accent text-lg px-10 py-4">
            Request a Quote
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
