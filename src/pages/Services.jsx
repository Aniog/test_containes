import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Factory, 
  ClipboardCheck, 
  Package, 
  Truck, 
  Shield,
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  TrendingUp
} from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: Search,
      title: 'Supplier Verification',
      description: 'We conduct comprehensive verification of potential suppliers to ensure they are legitimate, reliable, and capable of meeting your requirements.',
      features: [
        'Business license verification',
        'Factory facility inspection',
        'Production capacity assessment',
        'Financial stability check',
        'Reference verification',
        'Third-party database cross-check',
      ],
      color: 'bg-blue-500',
    },
    {
      icon: Factory,
      title: 'Factory Audits',
      description: 'Our on-site factory audits provide detailed insights into manufacturing capabilities, quality management systems, and compliance standards.',
      features: [
        'Production line inspection',
        'Quality management system audit',
        'Social compliance verification',
        'Capacity verification',
        'Equipment assessment',
        'Worker conditions evaluation',
      ],
      color: 'bg-green-500',
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Control',
      description: 'Our quality control services ensure your products meet specifications and standards at every stage of production.',
      features: [
        'Pre-production inspection',
        'During production inspection',
        'Pre-shipment inspection',
        'Container loading supervision',
        'Lab testing coordination',
        'Defect classification',
      ],
      color: 'bg-purple-500',
    },
    {
      icon: Package,
      title: 'Production Follow-up',
      description: 'We monitor your production progress closely to ensure on-time delivery and address any issues promptly.',
      features: [
        'Weekly progress updates',
        'Milestone tracking',
        'Sample approval management',
        'Production issue resolution',
        'Timeline management',
        'Daily factory communication',
      ],
      color: 'bg-orange-500',
    },
    {
      icon: Truck,
      title: 'Shipping & Logistics',
      description: 'End-to-end logistics solutions to get your products from China to your destination smoothly.',
      features: [
        'Freight forwarding',
        'Customs clearance',
        'Documentation handling',
        'Door-to-door delivery',
        'Insurance coordination',
        'Multi-modal transport',
      ],
      color: 'bg-teal-500',
    },
    {
      icon: Shield,
      title: 'Sample Management',
      description: 'We manage the entire sample process from request to approval, ensuring products meet your specifications.',
      features: [
        'Sample sourcing',
        'Sample shipping coordination',
        'Quality evaluation',
        'Testing coordination',
        'Revision management',
        'Approval documentation',
      ],
      color: 'bg-red-500',
    },
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Cost Savings',
      description: 'Save up to 30% on sourcing costs through our direct factory relationships and expert negotiation.',
    },
    {
      icon: Clock,
      title: 'Time Savings',
      description: 'Focus on your core business while we handle supplier research, verification, and management.',
    },
    {
      icon: Shield,
      title: 'Risk Reduction',
      description: 'Minimize risks of fraud, quality issues, and delivery delays through our comprehensive services.',
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Work with experienced professionals who understand Chinese business culture and practices.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-light text-white py-24">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Sourcing Services
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Comprehensive solutions to help you source products from China with confidence. From supplier verification to final delivery, we handle every step.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto">
          <div className="grid gap-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="grid lg:grid-cols-3">
                  {/* Icon & Title */}
                  <div className="lg:border-r border-border p-8 bg-primary/5">
                    <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-text-dark mb-4">{service.title}</h3>
                    <p className="text-text-muted leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="lg:col-span-2 p-8">
                    <h4 className="font-semibold text-text-dark mb-6">What's Included:</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                          <span className="text-text-dark text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
              Why Work With Us
            </h2>
            <p className="text-text-muted text-lg">
              Partner with SSourcing China for a seamless sourcing experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-8 rounded-2xl bg-background hover:bg-primary/5 transition-colors">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-text-dark mb-3">{benefit.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Sourcing?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Get a free consultation and quote for your sourcing needs. Our team will help you find the right suppliers in China.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            Get a Free Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;