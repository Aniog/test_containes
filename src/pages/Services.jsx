import { Link } from 'react-router-dom';
import { 
  Search, 
  Factory, 
  ClipboardCheck, 
  Package, 
  Truck, 
  Shield, 
  FileCheck, 
  Users,
  ArrowRight,
  CheckCircle,
  Clock,
  TrendingUp,
  Award
} from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: Search,
      title: 'Supplier Verification',
      description: 'We verify factory credentials, business licenses, production capacity, and financial stability to ensure you work with legitimate suppliers.',
      features: [
        'Business license verification',
        'Factory facility inspection',
        'Production capacity assessment',
        'Financial stability check',
        'Export/import license verification',
        'Third-party certification validation'
      ]
    },
    {
      icon: Factory,
      title: 'Factory Audit',
      description: 'Comprehensive on-site audits including facility inspection, production line assessment, quality management systems, and worker conditions.',
      features: [
        'ISO compliance verification',
        'Quality management system review',
        'Production line inspection',
        'Worker conditions assessment',
        'Capacity and capability analysis',
        'Detailed audit report with photos'
      ]
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Inspection',
      description: 'Pre-shipment inspections at key production stages. We check product specifications, packaging, labeling, and run functional tests.',
      features: [
        'AQL-based inspection standards',
        'Product specification verification',
        'Packaging and labeling check',
        'Functional testing',
        'Photo and video documentation',
        'Detailed inspection reports'
      ]
    },
    {
      icon: Package,
      title: 'Production Follow-up',
      description: 'Regular production updates with photos and videos. We monitor progress, address issues early, and ensure on-time delivery.',
      features: [
        'Weekly progress updates',
        'Photo and video reports',
        'Production milestone tracking',
        'Issue identification and resolution',
        'Timeline management',
        'Supplier coordination'
      ]
    },
    {
      icon: Truck,
      title: 'Shipping & Logistics',
      description: 'We coordinate freight forwarding, customs clearance, and documentation. Full container (FCL) and less than container (LCL) options.',
      features: [
        'Freight forwarding',
        'Customs clearance',
        'Documentation handling',
        'FCL and LCL options',
        'Insurance coordination',
        'Door-to-door delivery'
      ]
    },
    {
      icon: Shield,
      title: 'Sample Management',
      description: 'We request, evaluate, and ship product samples. We can also arrange lab testing for compliance and certification requirements.',
      features: [
        'Sample request and tracking',
        'Sample evaluation report',
        'Lab testing coordination',
        'Certification assistance',
        'Sample shipping logistics',
        'Quality comparison analysis'
      ]
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Save Time',
      description: 'Skip the research and verification. We handle supplier discovery and vetting so you can focus on sales and marketing.'
    },
    {
      icon: TrendingUp,
      title: 'Reduce Risk',
      description: 'Avoid supplier scams, quality issues, and shipping problems. Our verification and inspection services protect your investment.'
    },
    {
      icon: Award,
      title: 'Better Quality',
      description: 'Our QC inspections ensure products meet your specifications. Catch issues before shipment, not after.'
    },
    {
      icon: FileCheck,
      title: 'Simplified Process',
      description: 'One point of contact for the entire sourcing process. From supplier finding to final delivery.'
    },
    {
      icon: Users,
      title: 'Local Expertise',
      description: 'Based in Shenzhen, we have boots on the ground. We speak the language and understand the business culture.'
    },
    {
      icon: Shield,
      title: 'No Upfront Fees',
      description: 'We work on commission or fixed fees. No hidden costs. You only pay for results.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] text-white py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Our Sourcing Services
            </h1>
            <p className="text-xl text-gray-200">
              Comprehensive China sourcing solutions. We handle supplier verification, factory audits, quality inspections, and logistics so you can source with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={index} className="card">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-[var(--primary)] rounded-lg flex items-center justify-center flex-shrink-0">
                    <service.icon className="text-white" size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-3">{service.title}</h3>
                    <p className="text-[var(--text-secondary)] mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle size={16} className="text-[var(--accent)] flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-4">Why Work With Us</h2>
            <p className="max-w-2xl mx-auto text-lg">
              We bring expertise, local knowledge, and proven processes to make your China sourcing successful.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="card text-center">
                <div className="w-14 h-14 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="text-[var(--primary)]" size={28} />
                </div>
                <h3 className="mb-2">{benefit.title}</h3>
                <p className="text-[var(--text-secondary)]">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Service Process</h2>
            <p className="max-w-2xl mx-auto text-lg">
              A structured approach to ensure quality and reliability at every step of your sourcing journey.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', desc: 'We learn about your requirements, specifications, and goals.' },
              { step: '02', title: 'Matching', desc: 'We identify and verify suitable suppliers from our network.' },
              { step: '03', title: 'Execution', desc: 'We manage production, quality control, and logistics.' },
              { step: '04', title: 'Delivery', desc: 'We ensure on-time delivery and handle any issues.' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-[var(--secondary)] opacity-30 mb-4">{item.step}</div>
                <h3 className="mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--text-secondary)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="bg-[var(--primary)] rounded-2xl p-12 text-center">
            <h2 className="text-white mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Tell us about your sourcing needs and we'll create a tailored solution for you.
            </p>
            <Link to="/contact" className="btn bg-[var(--secondary)] text-white hover:bg-[var(--secondary-hover)] inline-flex items-center gap-2">
              Get a Free Quote <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;