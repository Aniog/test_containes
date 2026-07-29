import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, Building2, ClipboardCheck, Package, FileText, Ship, 
  Users, DollarSign, Clock, CheckCircle, ArrowRight, Globe,
  MessageSquare, Calculator, Truck, Warehouse, FileCheck, BarChart3
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 'supplier-discovery',
      icon: Search,
      title: 'Supplier Discovery',
      subtitle: 'Find the Right Manufacturers',
      description: 'Our comprehensive supplier identification process matches you with verified manufacturers that meet your specific requirements.',
      features: [
        'Industry-specific supplier database access',
        'Detailed capability and capacity assessment',
        'Background checks and reference verification',
        'Multiple supplier options for comparison',
        'Price benchmarking analysis',
      ],
      process: [
        { step: '1', text: 'Requirements analysis' },
        { step: '2', text: 'Supplier search & pre-vetting' },
        { step: '3', text: 'Capability assessment' },
        { step: '4', text: 'Report delivery' },
      ],
      color: 'blue',
    },
    {
      id: 'factory-verification',
      icon: Building2,
      title: 'Factory Verification',
      subtitle: 'Know Who You\'re Working With',
      description: 'We conduct thorough on-site inspections to verify factory existence, legitimacy, and production capabilities.',
      features: [
        'Physical factory verification with photos/videos',
        'Business license and registration checks',
        'Production capacity analysis',
        'Equipment and machinery verification',
        'Workforce assessment',
        'Quality management system review',
      ],
      process: [
        { step: '1', text: 'Inspection scheduling' },
        { step: '2', text: 'On-site visit' },
        { step: '3', text: 'Documentation review' },
        { step: '4', text: 'Detailed report' },
      ],
      color: 'green',
    },
    {
      id: 'quality-inspection',
      icon: ClipboardCheck,
      title: 'Quality Inspection',
      subtitle: 'Ensure Consistent Quality',
      description: 'Our quality control services catch issues early and ensure your products meet specifications before shipment.',
      features: [
        'Pre-production inspection (DUPRO)',
        'During production inspection (DPI)',
        'Pre-shipment inspection (PSI)',
        'Loading supervision (LS)',
        'AQL sampling according to ISO 2859',
        'Detailed inspection reports with photos',
      ],
      process: [
        { step: '1', text: 'Inspection plan creation' },
        { step: '2', text: 'Sample selection' },
        { step: '3', text: 'On-site inspection' },
        { step: '4', text: 'Report & certification' },
      ],
      color: 'orange',
    },
    {
      id: 'production-follow-up',
      icon: Package,
      title: 'Production Follow-up',
      subtitle: 'Stay Informed Every Step',
      description: 'Regular monitoring and updates throughout production to ensure timeline adherence and quality consistency.',
      features: [
        'Weekly production progress updates',
        'Issue identification and resolution',
        'Timeline management',
        'Sample approval coordination',
        'Production photo/video documentation',
        '24/7 communication channel',
      ],
      process: [
        { step: '1', text: 'Production plan review' },
        { step: '2', text: 'Regular check-ins' },
        { step: '3', text: 'Issue escalation' },
        { step: '4', text: 'Delivery confirmation' },
      ],
      color: 'purple',
    },
    {
      id: 'sample-management',
      icon: FileText,
      title: 'Sample Management',
      subtitle: 'Get It Right Before Mass Production',
      description: 'We coordinate the entire sample process to ensure product specifications are perfect before you commit to production.',
      features: [
        'Sample request coordination',
        'Multiple sample iterations management',
        'Modification and revision tracking',
        'Quality assessment of samples',
        'Shipping arrangements',
        'Documentation and approval workflow',
      ],
      process: [
        { step: '1', text: 'Sample requirements' },
        { step: '2', text: 'Factory coordination' },
        { step: '3', text: 'Sample evaluation' },
        { step: '4', text: 'Approval & sign-off' },
      ],
      color: 'indigo',
    },
    {
      id: 'shipping-logistics',
      icon: Ship,
      title: 'Shipping & Logistics',
      subtitle: 'From Factory to Your Door',
      description: 'Complete logistics solutions from China to anywhere in the world, handling all documentation and customs.',
      features: [
        'Sea freight (FCL/LCL)',
        'Air freight',
        'Express courier services',
        'Customs clearance documentation',
        'Door-to-door delivery options',
        'Cargo insurance coordination',
      ],
      process: [
        { step: '1', text: 'Shipping plan' },
        { step: '2', text: 'Booking & pickup' },
        { step: '3', text: 'Customs clearance' },
        { step: '4', text: 'Final delivery' },
      ],
      color: 'teal',
    },
  ];

  const additionalServices = [
    {
      icon: Calculator,
      title: 'Price Negotiation',
      description: 'Leverage our local presence and industry knowledge to negotiate competitive prices on your behalf.',
    },
    {
      icon: MessageSquare,
      title: 'Translation & Communication',
      description: 'Professional interpretation and translation services to bridge language barriers with suppliers.',
    },
    {
      icon: FileCheck,
      title: 'Contract Review',
      description: 'Assistance with contract drafting and review to protect your interests.',
    },
    {
      icon: Warehouse,
      title: 'Warehousing & Consolidation',
      description: 'Storage and consolidation services for multi-supplier orders in China.',
    },
    {
      icon: BarChart3,
      title: 'Market Research',
      description: 'Product cost analysis, market trends, and supplier benchmarking reports.',
    },
    {
      icon: Globe,
      title: 'Trade Show Support',
      description: 'Assistance with visiting Canton Fair and other trade shows in China.',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-medium rounded-full mb-4">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Complete China Sourcing Solutions
            </h1>
            <p className="text-xl text-gray-600">
              From supplier discovery to final delivery, we provide end-to-end services 
              to help you source products from China with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`scroll-mt-24 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${
                      service.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                      service.color === 'green' ? 'bg-green-100 text-green-600' :
                      service.color === 'orange' ? 'bg-orange-100 text-orange-600' :
                      service.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                      service.color === 'indigo' ? 'bg-indigo-100 text-indigo-600' :
                      'bg-teal-100 text-teal-600'
                    }`}>
                      <service.icon className="w-8 h-8" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">{service.title}</h2>
                    <p className="text-lg text-gray-500 mb-4">{service.subtitle}</p>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                      Request This Service
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </div>

                  {/* Process Card */}
                  <div className={`bg-gray-50 rounded-2xl p-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-6">Our Process</h3>
                    <div className="space-y-6">
                      {service.process.map((step, idx) => (
                        <div key={idx} className="flex items-start gap-4">
                          <div className="relative flex flex-col items-center">
                            <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                              {step.step}
                            </div>
                            {idx < service.process.length - 1 && (
                              <div className="w-0.5 h-8 bg-gray-300 mt-2"></div>
                            )}
                          </div>
                          <div className="pt-1.5">
                            <p className="font-medium text-gray-900">{step.text}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 pt-8 border-t border-gray-200">
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-blue-600">100%</div>
                          <div className="text-sm text-gray-500">Verified</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-blue-600">48h</div>
                          <div className="text-sm text-gray-500">Turnaround</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-blue-600">24/7</div>
                          <div className="text-sm text-gray-500">Support</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-medium rounded-full mb-4">
              More Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Support Services
            </h2>
            <p className="text-lg text-gray-600">
              Beyond our core services, we offer various supporting services to make your China sourcing experience seamless.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-200 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Info */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-medium rounded-full mb-4">
                Transparent Pricing
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Flexible Service Packages
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We offer various pricing models to suit different business needs. 
                Whether you're a startup or an established enterprise, we have a solution for you.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <DollarSign className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Success Fee Model</h4>
                    <p className="text-sm text-gray-600">Pay a percentage of the order value only when your order is successfully delivered.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <Users className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Retainer Model</h4>
                    <p className="text-sm text-gray-600">Monthly retainer for ongoing sourcing support with dedicated account management.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <BarChart3 className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Project-Based</h4>
                    <p className="text-sm text-gray-600">Fixed fee per project for specific services like factory verification or QC inspection.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Get a Custom Quote</h3>
              <p className="text-blue-100 mb-6">
                Every project is unique. Contact us for a personalized pricing proposal 
                based on your specific requirements.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Free initial consultation</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>No upfront commitment required</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Response within 24 hours</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Transparent pricing breakdown</span>
                </li>
              </ul>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center w-full py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-200"
              >
                Request a Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Sourcing?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let us handle the complexity of China sourcing so you can focus on growing your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white/10 transition-colors duration-200"
            >
              Learn How It Works
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
