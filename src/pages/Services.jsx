import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  ClipboardCheck, 
  Settings, 
  Truck, 
  Package, 
  Handshake,
  FileCheck,
  DollarSign,
  Users,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { services } from '@/lib/data';

const iconMap = {
  Search,
  ClipboardCheck,
  Settings,
  Truck,
  Package,
  Handshake
};

const additionalServices = [
  {
    icon: FileCheck,
    title: 'Factory Audit',
    description: 'Comprehensive audits including business license verification, production capacity assessment, and quality management systems review.'
  },
  {
    icon: DollarSign,
    title: 'Cost Analysis',
    description: 'Detailed breakdowns of product costs including material, labor, packaging, and logistics to ensure competitive pricing.'
  },
  {
    icon: Users,
    title: 'Translation Services',
    description: 'Professional document translation and interpretation for seamless communication with suppliers.'
  }
];

const serviceFeatures = {
  'supplier-search': [
    'Business license verification',
    'Factory实地考察',
    'Production capacity assessment',
    'Quality management review',
    'Reference checks',
    'Sample evaluation'
  ],
  'quality-inspection': [
    'Pre-production inspection',
    'During production inspection',
    'Pre-shipment inspection',
    'AQL sampling inspection',
    'Full inspection',
    'Detailed photo/video reports'
  ],
  'production-follow-up': [
    'Production schedule monitoring',
    'Weekly progress updates',
    'Issue escalation management',
    'Deadline coordination',
    'Supplier communication',
    'Timeline optimization'
  ],
  'shipping-coordination': [
    'Sea freight (FCL/LCL)',
    'Air freight',
    'Express courier',
    'Customs documentation',
    'Incoterms guidance',
    'Insurance coordination'
  ]
};

const Services = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1E3A5F] to-[#2D4F7C] text-white py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Sourcing Services</h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Comprehensive China sourcing solutions designed to help you find reliable suppliers, maintain quality, and deliver products successfully.
            </p>
            <Link to="/contact" className="inline-flex items-center px-6 py-3 bg-[#0891B2] text-white font-semibold rounded-lg hover:bg-[#0E7490] transition-colors">
              Get a Free Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="section bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon];
              const features = serviceFeatures[service.id] || [];
              const isEven = index % 2 === 1;
              
              return (
                <div key={service.id} className={`grid lg:grid-cols-2 gap-12 items-center ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={isEven ? 'lg:order-2' : ''}>
                    <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                      {IconComponent && <IconComponent className="w-7 h-7 text-[#1E3A5F]" />}
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold mb-4">{service.title}</h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    <ul className="grid grid-cols-2 gap-3">
                      {features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl h-64 lg:h-80 flex items-center justify-center ${isEven ? 'lg:order-1' : ''}`}>
                    <div className="text-6xl opacity-30">
                      {service.icon === 'Search' && '🔍'}
                      {service.icon === 'ClipboardCheck' && '📋'}
                      {service.icon === 'Settings' && '⚙️'}
                      {service.icon === 'Truck' && '🚚'}
                      {service.icon === 'Package' && '📦'}
                      {service.icon === 'Handshake' && '🤝'}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Additional Services</h2>
            <p className="section-subtitle">
              Beyond core sourcing, we offer supplementary services to support your China operations.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <IconComponent className="w-10 h-10 text-[#0891B2] mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-title">Why Work With Us</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">No Win, No Fee</h3>
                  <p className="text-sm text-gray-600">We only succeed when you succeed. Our incentives are aligned with yours.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Transparent Pricing</h3>
                  <p className="text-sm text-gray-600">Clear quotes with no hidden fees or surprise charges.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Local Expertise</h3>
                  <p className="text-sm text-gray-600">Our team is based in China with deep knowledge of local markets.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Communication</h3>
                  <p className="text-sm text-gray-600">Regular updates and responsive communication in English.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-[#1E3A5F] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Start Sourcing?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a free consultation and discover how we can help streamline your China sourcing.
          </p>
          <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-[#0891B2] text-white font-semibold rounded-lg hover:bg-[#0E7490] transition-colors">
            Get Your Free Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
