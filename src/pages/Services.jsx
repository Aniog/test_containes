import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, Shield, ClipboardCheck, Factory, Ship, 
  CheckCircle, ArrowRight, FileCheck, Truck, Package,
  Users, Building2, Clock
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';



const Services = () => {
  const containerRef = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  


  const services = [
    {
      id: 'supplier-sourcing',
      icon: Search,
      title: 'Supplier Sourcing',
      description: 'We identify, vet, and recommend reliable manufacturers that match your specific product requirements, quality standards, and budget.',
      features: [
        'Custom supplier matching based on your product specs',
        'Multi-factory comparison reports',
        'Background and reputation checks',
        'Price negotiation support',
        'MOQ flexibility negotiation'
      ],
      image: 'supplier-sourcing-service'
    },
    {
      id: 'factory-verification',
      icon: Shield,
      title: 'Factory Verification',
      description: 'On-site inspections to verify legal business status, production capacity, certifications, and facility conditions before you commit.',
      features: [
        'Business license verification',
        'On-site facility audits',
        'Production capacity assessment',
        'Quality certifications review',
        'Reference checks with existing clients'
      ],
      image: 'factory-verification-service'
    },
    {
      id: 'quality-control',
      icon: ClipboardCheck,
      title: 'Quality Control',
      description: 'Professional inspection services at key production stages to ensure products meet your specifications and quality standards.',
      features: [
        'Pre-production inspections',
        'During-production inspections',
        'Pre-shipment inspections',
        'AQL-based sampling',
        'Detailed photo and video reports'
      ],
      image: 'quality-control-service'
    },
    {
      id: 'production-followup',
      icon: Factory,
      title: 'Production Follow-up',
      description: 'Regular monitoring of production progress with proactive communication to address issues and keep orders on schedule.',
      features: [
        'Weekly production updates',
        'Progress photography',
        'Issue identification and resolution',
        'Timeline management',
        'Client communication in your timezone'
      ],
      image: 'production-followup-service'
    },
    {
      id: 'shipping',
      icon: Ship,
      title: 'Shipping & Logistics',
      description: 'End-to-end logistics coordination from factory to your door, handling documentation and customs clearance.',
      features: [
        'Freight forwarding (sea, air, express)',
        'Customs documentation',
        'Consolidation services',
        'Door-to-door delivery options',
        'Shipment tracking'
      ],
      image: 'shipping-logistics-service'
    }
  ];

  const whyChooseUs = [
    {
      icon: Users,
      title: 'Dedicated Team',
      description: 'Your personal sourcing manager handles everything from start to finish.'
    },
    {
      icon: Clock,
      title: 'Time Savings',
      description: 'Skip the research, travel, and miscommunication. We handle the complexity.'
    },
    {
      icon: Building2,
      title: 'Local Expertise',
      description: 'Based in Shenzhen, we have on-the-ground relationships with factories.'
    },
    {
      icon: FileCheck,
      title: 'Risk Mitigation',
      description: 'Professional verification reduces the risk of working with unreliable suppliers.'
    }
  ];

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              China Sourcing Services
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              From supplier identification to final delivery, we provide comprehensive sourcing services that protect your investment and ensure quality.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2 text-lg">
              Get a Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'section-alt'}`}
        >
          <div className="container-custom">
            <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="bg-gray-200 border-2 border-dashed rounded-2xl h-80 flex items-center justify-center">
                  <img
                   
                   
                   
                   
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 450'%3E%3Crect fill='%23e5e7eb' width='800' height='450'/%3E%3Ctext x='400' y='200' font-family='system-ui' font-size='20' fill='%239ca3af' text-anchor='middle'%3E{service.title} Service%3C/text%3E%3C/svg%3E"
                    alt={service.title}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Why Work With Us
            </h2>
            <p className="text-lg text-gray-400">
              Practical benefits that make a real difference to your sourcing experience.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact us for a free consultation. Tell us what you need, and we'll provide practical advice and a customized quote.
            </p>
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
