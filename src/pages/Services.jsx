import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, Factory, ClipboardCheck, Clock, Truck, Package,
  ArrowRight, CheckCircle, FileText, Users
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: 'Supplier Identification & Verification',
      description: 'We find and thoroughly vet suppliers that match your specific requirements. Our verification process includes business license verification, factory capacity assessment, quality management system evaluation, and customer reference checks.',
      features: [
        'Comprehensive supplier research',
        'Business license verification',
        'Production capacity assessment',
        'Quality management system audit',
        'Customer reference checks'
      ]
    },
    {
      icon: Factory,
      title: 'Factory Audits & Compliance Checks',
      description: 'Our on-site factory audits provide detailed insights into supplier capabilities, compliance status, and risk factors. We verify legal status, production facilities, worker conditions, and certifications.',
      features: [
        'On-site factory visits',
        'Legal compliance verification',
        'Production facility inspection',
        'Worker condition assessment',
        'Certification verification'
      ]
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Control Inspections',
      description: 'Professional QC inspections at critical production stages ensure your products meet specifications. We follow AQL standards and provide detailed inspection reports with photos and recommendations.',
      features: [
        'Pre-production inspection',
        'During production inspection',
        'Pre-shipment inspection',
        'AQL standard compliance',
        'Detailed inspection reports'
      ]
    },
    {
      icon: Clock,
      title: 'Production Follow-up & Monitoring',
      description: 'Regular production updates and on-site monitoring keep you informed throughout the manufacturing process. We ensure timeline adherence and quality standards are maintained.',
      features: [
        'Weekly production updates',
        'On-site production monitoring',
        'Timeline tracking',
        'Quality milestone verification',
        'Issue resolution support'
      ]
    },
    {
      icon: Truck,
      title: 'Logistics & Shipping Coordination',
      description: 'End-to-end logistics coordination from factory to your designated warehouse. We handle freight forwarding, customs documentation, and delivery logistics.',
      features: [
        'Freight forwarding services',
        'Customs documentation',
        'Multi-modal shipping options',
        'Cargo tracking',
        'Door-to-door delivery'
      ]
    },
    {
      icon: Package,
      title: 'Sample Management & Product Development',
      description: 'We facilitate sample procurement, testing, and feedback coordination to help you develop products and validate quality before mass production.',
      features: [
        'Sample procurement',
        'Quality testing coordination',
        'Feedback translation',
        'Prototype development',
        'Mass production preparation'
      ]
    }
  ];

  const benefits = [
    { title: 'Transparent Pricing', description: 'No hidden fees or success fees. We charge clear, upfront rates.' },
    { title: 'Verified Suppliers', description: 'Access our network of 500+ pre-verified suppliers across China.' },
    { title: 'Quality Guaranteed', description: 'Professional inspections ensure your products meet specifications.' },
    { title: 'Time Saved', description: 'We handle all communication, logistics, and coordination.' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Professional Sourcing Services in China
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Comprehensive sourcing solutions to help you find verified suppliers, ensure product quality, and streamline shipping from China.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-section bg-surface-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`bg-white rounded-card shadow-card p-8 lg:p-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} lg:flex items-start gap-12`}
              >
                <div className="lg:w-1/3">
                  <div className="w-20 h-20 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-10 h-10 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-text-primary mb-4">{service.title}</h2>
                  <p className="text-text-secondary leading-relaxed">{service.description}</p>
                </div>
                <div className="lg:w-2/3">
                  <h3 className="text-lg font-semibold text-text-primary mb-4">What's Included:</h3>
                  <ul className="space-y-3">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                        <span className="text-text-secondary">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-section bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Why Work With Us</h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Benefits of partnering with SSourcing China for your sourcing needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6">
                <h3 className="text-lg font-semibold text-text-primary mb-2">{benefit.title}</h3>
                <p className="text-text-secondary text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-section bg-surface-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Our Service Process</h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              A structured approach to ensure successful sourcing at every step
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-card shadow-card p-8">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">1</div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">Consultation</h3>
              <p className="text-text-secondary">We discuss your requirements, product specifications, target pricing, and timeline.</p>
            </div>
            <div className="bg-white rounded-card shadow-card p-8">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">2</div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">Execution</h3>
              <p className="text-text-secondary">We identify suppliers, conduct audits, oversee production, and coordinate shipping.</p>
            </div>
            <div className="bg-white rounded-card shadow-card p-8">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">3</div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">Delivery</h3>
              <p className="text-text-secondary">We ensure quality products arrive at your location on time and as specified.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-section bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Request a free consultation and quote for your sourcing needs
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-accent font-semibold rounded-button hover:bg-gray-100 transition-colors"
          >
            Request a Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;