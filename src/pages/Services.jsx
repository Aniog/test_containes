import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, Shield, Factory, ClipboardCheck, Truck, Package, 
  FileCheck, MessageSquare, DollarSign, ArrowRight, CheckCircle,
  Users, Clock, Building2, Settings
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 'supplier-verification',
      icon: Search,
      title: 'Supplier Verification',
      subtitle: 'Know who you are working with',
      description: 'Our comprehensive supplier verification service ensures you partner with legitimate, capable manufacturers. We conduct thorough due diligence that goes beyond basic checks.',
      features: [
        'Factory visits with photo and video documentation',
        'Business license and registration verification',
        'Production capacity and equipment assessment',
        'Quality control system evaluation',
        'Financial stability check',
        'Reference verification from existing clients',
      ],
      deliverables: [
        'Detailed verification report',
        'Factory photos and videos',
        'Capability assessment',
        'Risk analysis',
        'Recommendation summary',
      ],
    },
    {
      id: 'quality-inspection',
      icon: ClipboardCheck,
      title: 'Quality Inspection',
      subtitle: 'Protecting your product quality',
      description: 'Our professional QC team performs rigorous inspections at every stage of production, ensuring your products meet your specifications and quality standards.',
      features: [
        'Pre-shipment inspection (PSI)',
        'During production inspection (DPI)',
        'First article inspection (FAI)',
        'Container loading supervision',
        'AQL-based sampling',
        'Full photo and video documentation',
      ],
      deliverables: [
        'Detailed inspection report',
        'Visual documentation',
        'Defect analysis',
        'Compliance verification',
        'Pass/fail recommendation',
      ],
    },
    {
      id: 'production-followup',
      icon: Factory,
      title: 'Production Follow-up',
      subtitle: 'Ensuring on-time, on-spec delivery',
      description: 'We monitor your orders throughout the production process, providing regular updates and addressing any issues before they become problems.',
      features: [
        'Regular factory visits',
        'Production progress tracking',
        'Material quality monitoring',
        'Schedule adherence check',
        'Issue early warning system',
        'Direct supplier communication',
      ],
      deliverables: [
        'Weekly progress reports',
        'Production photos',
        'Timeline updates',
        'Issue alerts',
        'Final completion report',
      ],
    },
    {
      id: 'shipping',
      icon: Truck,
      title: 'Shipping Coordination',
      subtitle: 'Seamless logistics from factory to door',
      description: 'Our logistics team handles all aspects of shipping, from freight booking to customs clearance, ensuring your products reach you safely and efficiently.',
      features: [
        'Freight forwarding (sea, air, rail)',
        'Customs documentation',
        'Customs clearance support',
        'Warehousing options',
        'Last-mile delivery coordination',
        'Shipment tracking',
      ],
      deliverables: [
        'Shipping quotation',
        'Tracking updates',
        'Customs documentation',
        'Delivery confirmation',
        'Cost breakdown',
      ],
    },
  ];

  const additionalServices = [
    {
      icon: Package,
      title: 'Sample Management',
      description: 'We handle sample requests, forwarding, and quality verification to help you make informed decisions before bulk orders.',
    },
    {
      icon: DollarSign,
      title: 'Price Negotiation',
      description: 'Our team negotiates competitive prices on your behalf, leveraging our local knowledge and relationships with suppliers.',
    },
    {
      icon: MessageSquare,
      title: 'Translation & Communication',
      description: 'We bridge language barriers, providing professional translation and facilitating clear communication with suppliers.',
    },
    {
      icon: FileCheck,
      title: 'Contract Review',
      description: 'We review supplier contracts to ensure favorable terms and protect your interests before signing.',
    },
  ];

  const process = [
    {
      step: '1',
      title: 'Initial Consultation',
      description: 'We discuss your requirements, product specifications, and sourcing goals.',
    },
    {
      step: '2',
      title: 'Supplier Matching',
      description: 'We identify suitable factories from our verified network.',
    },
    {
      step: '3',
      title: 'Verification',
      description: 'We conduct thorough verification of selected suppliers.',
    },
    {
      step: '4',
      title: 'Contract & Samples',
      description: 'We facilitate contract finalization and sample approval.',
    },
    {
      step: '5',
      title: 'Production & QC',
      description: 'We monitor production and conduct quality inspections.',
    },
    {
      step: '6',
      title: 'Shipping & Delivery',
      description: 'We coordinate shipping and ensure smooth delivery.',
    },
  ];

  const pricingFactors = [
    'Order value and quantity',
    'Product complexity',
    'Services required',
    'Inspection levels',
    'Shipping destination',
    'Timeline requirements',
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Professional China Sourcing Services
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              From supplier verification to shipping coordination, we provide comprehensive 
              solutions to simplify your China sourcing operations and protect your business interests.
            </p>
            <Link to="/contact" className="btn-primary">
              Get a Free Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      {services.map((service, index) => (
        <section 
          key={service.id} 
          id={service.id}
          className={`section-padding ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="container-custom">
            <div className={`grid lg:grid-cols-2 gap-12 items-start ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}>
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
                  <service.icon className="w-4 h-4 mr-2" />
                  {service.subtitle}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  {service.description}
                </p>
                <div className="bg-blue-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-gray-900 mb-4">What's Included:</h3>
                  <div className="space-y-3">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-green-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Deliverables:</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {service.deliverables.map((deliverable, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                          <span className="text-green-600 text-sm font-medium">{i + 1}</span>
                        </div>
                        <span className="text-gray-700 text-sm">{deliverable}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className={`bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-8 h-80 flex items-center justify-center ${
                index % 2 === 1 ? 'lg:order-1' : ''
              }`}>
                <service.icon className="w-32 h-32 text-blue-600/30" />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Additional Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="section-header">
            <h2>Additional Services</h2>
            <p>Complementary services to support your complete sourcing journey</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="card text-center">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="section-header">
            <h2>Our Service Process</h2>
            <p>A structured approach to ensure quality and efficiency at every step</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {step.step}
                </div>
                <div className="bg-white rounded-xl p-6 pl-12 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Transparent Pricing</h2>
              <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                Our service fees are competitive and transparent. We provide detailed quotes 
                upfront with no hidden costs or surprise fees.
              </p>
              <div className="grid md:grid-cols-2 gap-8 text-left mb-8">
                <div className="bg-white/10 rounded-xl p-6">
                  <h3 className="font-semibold text-lg mb-4">What Affects Pricing:</h3>
                  <ul className="space-y-3">
                    {pricingFactors.map((factor, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span>{factor}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white/10 rounded-xl p-6">
                  <h3 className="font-semibold text-lg mb-4">Typical Service Fees:</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>Supplier Verification</span>
                      <span className="font-semibold">$200 - $500</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Quality Inspection</span>
                      <span className="font-semibold">$150 - $300/day</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Production Follow-up</span>
                      <span className="font-semibold">3-8% of order</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Shipping Coordination</span>
                      <span className="font-semibold">Quote provided</span>
                    </div>
                  </div>
                </div>
              </div>
              <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
                Request a Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gray-900">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and customized quote for your sourcing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
              Get a Free Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link to="/how-it-works" className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-gray-900 transition-colors">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
