import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  CheckCircle, 
  Factory, 
  Truck, 
  FileText, 
  Package, 
  BarChart3, 
  Handshake,
  ArrowRight,
  Shield,
  Clock,
  Users
} from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: Search,
      title: 'Supplier Verification',
      description: 'We conduct comprehensive supplier verification to ensure you work with legitimate and capable manufacturers.',
      features: [
        'On-site factory visits',
        'Business license verification',
        'Production capacity assessment',
        'Quality management system audit',
        'Reference checks',
        'Financial stability assessment',
      ],
    },
    {
      icon: CheckCircle,
      title: 'Quality Inspection',
      description: 'Professional quality control services at every stage of production to ensure your products meet specifications.',
      features: [
        'Pre-production inspection',
        'During production inspection',
        'Pre-shipment inspection',
        'Container loading supervision',
        'Lab testing coordination',
        'Detailed inspection reports',
      ],
    },
    {
      icon: Factory,
      title: 'Production Follow-up',
      description: 'We monitor your orders throughout the manufacturing process to ensure timely delivery and quality standards.',
      features: [
        'Production progress tracking',
        'Regular factory visits',
        'Timeline management',
        'Issue identification and resolution',
        'Daily/weekly progress reports',
        'Production photos and videos',
      ],
    },
    {
      icon: Truck,
      title: 'Shipping & Logistics',
      description: 'End-to-end logistics coordination from factory to your designated destination.',
      features: [
        'Freight forwarding',
        'Customs clearance',
        'Documentation handling',
        'Multi-modal transport',
        'Shipment tracking',
        'Door-to-door delivery options',
      ],
    },
    {
      icon: FileText,
      title: 'Sourcing & Negotiation',
      description: 'We find the right suppliers and negotiate favorable terms on your behalf.',
      features: [
        'Supplier identification',
        'Price negotiation',
        'Contract review',
        'Payment term negotiation',
        'MOQ optimization',
        'Sample management',
      ],
    },
    {
      icon: Package,
      title: 'Product Development',
      description: 'We assist with product development, from design to mass production.',
      features: [
        'Design review and optimization',
        'Material sourcing',
        'Prototype development',
        'Manufacturing process planning',
        'Cost reduction suggestions',
        'Compliance consulting',
      ],
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Risk Mitigation',
      description: 'Reduce the risk of fraud, quality issues, and delivery delays through our comprehensive services.',
    },
    {
      icon: Clock,
      title: 'Time Savings',
      description: 'Save time on supplier research, communication, and travel with our on-ground presence in China.',
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Access our team of sourcing experts with deep knowledge of Chinese manufacturing and business culture.',
    },
    {
      icon: Handshake,
      title: 'Better Relationships',
      description: 'Build strong supplier relationships through professional communication and cultural understanding.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1E3A5F] via-[#2D5A8A] to-[#1E3A5F] text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Sourcing Services
            </h1>
            <p className="text-lg text-gray-200 leading-relaxed">
              Comprehensive China sourcing solutions designed to help you find reliable suppliers, 
              ensure product quality, and streamline the entire sourcing process.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">What We Offer</h2>
            <p className="section-subtitle mx-auto mt-4">
              End-to-end sourcing services to make importing from China seamless and risk-free
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-[#F8FAFC] rounded-xl flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-7 h-7 text-[#1E3A5F]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#1E3A5F]">{service.title}</h3>
                    <p className="text-[#64748B] mt-2">{service.description}</p>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-[#E2E8F0]">
                  <h4 className="text-sm font-semibold text-[#1E3A5F] mb-3">What's Included:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-[#64748B]">
                        <CheckCircle className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                        {feature}
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
      <section className="section-padding bg-[#F8FAFC]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Why Work With Us</h2>
            <p className="section-subtitle mx-auto mt-4">
              The benefits of partnering with SSourcing China for your sourcing needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-[#E2E8F0] text-center">
                <div className="w-14 h-14 bg-[#F8FAFC] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-[#1E3A5F]" />
                </div>
                <h3 className="text-lg font-semibold text-[#1E3A5F] mb-2">{benefit.title}</h3>
                <p className="text-sm text-[#64748B]">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">How Our Services Work</h2>
              <p className="text-lg text-[#64748B] mt-4 mb-6">
                Our service model is flexible and can be customized to your specific needs. 
                Whether you need help with a single step or the entire sourcing process, we've got you covered.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#F97316] text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1E3A5F]">Consultation</h4>
                    <p className="text-sm text-[#64748B]">We discuss your requirements and recommend the best service package.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#F97316] text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1E3A5F]">Execution</h4>
                    <p className="text-sm text-[#64748B]">Our team executes the agreed services, keeping you informed at every step.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#F97316] text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1E3A5F]">Reporting</h4>
                    <p className="text-sm text-[#64748B]">You receive detailed reports, photos, and documentation throughout the process.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#F97316] text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1E3A5F]">Delivery</h4>
                    <p className="text-sm text-[#64748B]">Your products are delivered to your specified location with full documentation.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-[#F8FAFC] rounded-xl p-8 border border-[#E2E8F0]">
              <h3 className="text-xl font-semibold text-[#1E3A5F] mb-6">Ready to Get Started?</h3>
              <p className="text-[#64748B] mb-6">
                Contact us today to discuss your sourcing needs and get a customized quote.
              </p>
              <Link to="/contact" className="btn-primary w-full justify-center">
                Request a Quote
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#1E3A5F] text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Help with Your China Sourcing?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Our team of experts is ready to help you find reliable suppliers and ensure quality products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Get a Free Quote
            </Link>
            <Link to="/how-it-works" className="btn-secondary border-white text-white hover:bg-white/10">
              Learn About Our Process
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;