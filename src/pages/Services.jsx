import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, Shield, ClipboardCheck, Ship, Factory, Truck, Package, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: 'Supplier Sourcing',
      description: 'Find the right manufacturers and suppliers in China based on your exact product specifications, quality requirements, and budget.',
      features: [
        'Product specification analysis',
        'Supplier database of 5,000+ verified factories',
        'Competitive price negotiation',
        'Multiple supplier options for comparison',
      ],
    },
    {
      icon: Shield,
      title: 'Factory Verification',
      description: 'Comprehensive on-site factory audits to ensure your suppliers are legitimate, capable, and compliant.',
      features: [
        'Business license verification',
        'Factory capacity assessment',
        'Quality management system audit',
        'Financial stability check',
      ],
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Control',
      description: 'Professional inspection services at every stage of production to maintain quality standards.',
      features: [
        'Pre-production inspections',
        'During-production monitoring',
        'Pre-shipment inspections',
        'Container loading supervision',
      ],
    },
    {
      icon: Ship,
      title: 'Shipping Coordination',
      description: 'End-to-end logistics management from Chinese factories to your warehouse anywhere in the world.',
      features: [
        'Freight forwarding',
        'Customs clearance',
        'Insurance coordination',
        'Shipment tracking',
      ],
    },
    {
      icon: Factory,
      title: 'Product Development',
      description: 'Help you develop custom products from concept to production with experienced engineering support.',
      features: [
        'Design consultation',
        'Prototype development',
        'Material sourcing',
        'Production scaling',
      ],
    },
    {
      icon: Truck,
      title: 'Consolidation Services',
      description: 'Combine shipments from multiple suppliers into a single container to reduce shipping costs.',
      features: [
        'Multi-supplier coordination',
        'Warehousing facilities',
        'Consolidated shipping',
        'Cost optimization',
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Sourcing Services
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Comprehensive China sourcing solutions designed to help you find reliable suppliers, maintain quality, and reduce costs.
            </p>
            <Link to="/contact">
              <Button size="lg">
                Get a Free Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-slate-700">
                      <span className="text-green-600 mr-2">✓</span>
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
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose SSourcing China?
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We combine local expertise with international standards to deliver exceptional sourcing services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Local Presence',
                description: 'Based in Guangzhou with offices in major manufacturing hubs across China.',
              },
              {
                title: 'Experienced Team',
                description: 'Our team has 10+ years of experience in sourcing, QC, and logistics.',
              },
              {
                title: 'Transparent Pricing',
                description: 'Clear, upfront pricing with no hidden fees or surprise charges.',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-xl text-center">
                <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Streamline Your Sourcing?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Contact us today for a free consultation and discover how we can help your business.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
