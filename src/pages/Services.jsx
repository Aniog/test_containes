import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  ClipboardCheck, 
  Factory, 
  Truck, 
  Package, 
  Shield,
  CheckCircle,
  ArrowRight,
  FileText,
  Users,
  Globe,
  CreditCard
} from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      id: 'supplier-verification',
      icon: Search,
      title: 'Supplier Verification',
      description: 'We conduct comprehensive verification of potential suppliers to ensure they are legitimate, capable, and reliable. Our detailed audit reports help you make informed decisions.',
      features: [
        'Factory on-site audits with photos and videos',
        'Business license and registration verification',
        'Production capacity assessment',
        'Quality management system evaluation',
        'Certification verification (ISO, CE, FCC, etc.)',
        'Financial stability assessment',
        'Reference checks with existing clients',
        'Detailed audit reports within 5-7 business days'
      ],
      process: [
        'We receive your supplier shortlist or search criteria',
        'Our team schedules and conducts factory visits',
        'Comprehensive audit covering 50+ data points',
        'You receive detailed report with recommendations'
      ]
    },
    {
      id: 'quality-control',
      icon: ClipboardCheck,
      title: 'Quality Control Inspection',
      description: 'Our professional QC inspectors ensure your products meet specifications and quality standards at every stage of production. Prevent costly mistakes before they happen.',
      features: [
        'Pre-shipment inspection (PSI)',
        'During production inspection (DPI)',
        'Initial production inspection (IPI)',
        'Container loading supervision',
        'AQL-based sampling inspection',
        'Detailed photo and video reports',
        'Same-day inspection reports',
        'Compliance verification (safety, regulatory)'
      ],
      process: [
        'Define inspection criteria and acceptance levels',
        'Schedule inspection at your required production stage',
        'Our inspector visits factory and conducts thorough check',
        'Receive detailed report with pass/fail results'
      ]
    },
    {
      id: 'production-follow',
      icon: Factory,
      title: 'Production Follow-up',
      description: 'We monitor your production progress closely, ensuring timelines are met and quality is maintained throughout the manufacturing process.',
      features: [
        'Regular production progress updates',
        'Sample approval and pre-production validation',
        'Production scheduling and coordination',
        'Issue identification and resolution',
        'Material quality verification',
        'Packaging and labeling oversight',
        'Daily/weekly progress reports',
        'Expediting for delayed orders'
      ],
      process: [
        'Establish production timeline and milestones',
        'We assign dedicated production coordinator',
        'Regular factory visits and status updates',
        'Proactive issue resolution throughout'
      ]
    },
    {
      id: 'shipping-logistics',
      icon: Truck,
      title: 'Shipping & Logistics',
      description: 'End-to-end logistics support from factory to your doorstep. We handle freight forwarding, customs clearance, and all documentation.',
      features: [
        'Freight forwarding (sea, air, express)',
        'Customs clearance assistance',
        'Documentation handling (invoice, packing list, etc.)',
        'Door-to-door delivery options',
        'Insurance coordination',
        'Consolidation services',
        'Import customs clearance support',
        'Track and trace updates'
      ],
      process: [
        'Confirm shipping requirements and destination',
        'We compare and book optimal freight options',
        'Coordinate pickup from factory',
        'Handle all documentation and customs',
        'Track shipment to final delivery'
      ]
    },
    {
      id: 'custom-sourcing',
      icon: Package,
      title: 'Custom Sourcing',
      description: 'Full-service product sourcing - from finding the right suppliers to delivering finished products to your warehouse.',
      features: [
        'Supplier identification and vetting',
        'Price negotiation and comparison',
        'Sample sourcing and evaluation',
        'Product development support',
        'OEM/ODM manufacturing coordination',
        'Prototype development',
        'Product certification assistance',
        'Ongoing supplier relationship management'
      ],
      process: [
        'Share your product requirements',
        'We identify and vet qualified suppliers',
        'You evaluate and select supplier',
        'We coordinate sampling and testing',
        'Production, QC, and shipping handled'
      ]
    },
    {
      id: 'supplier-audit',
      icon: Shield,
      title: 'Supplier Audit Services',
      description: 'Independent, third-party factory audits to assess supplier capabilities, compliance, and suitability for your business.',
      features: [
        'Social compliance audits (SA8000)',
        'Environmental audits (ISO 14001)',
        'Security audits (C-TPAT)',
        'GMP audits for food/cosmetics',
        'Ethical sourcing audits',
        'Pre-qualification audits',
        'Ongoing supplier monitoring',
        'Corrective action plan follow-up'
      ],
      process: [
        'Define audit scope and criteria',
        'Schedule independent audit',
        'Conduct comprehensive assessment',
        'Receive detailed findings and recommendations'
      ]
    }
  ];

  const whyChooseUs = [
    {
      icon: Users,
      title: 'Experienced Team',
      description: 'Our team has 10+ years of experience in China sourcing across multiple industries.'
    },
    {
      icon: FileText,
      title: 'Detailed Reporting',
      description: 'Every service includes comprehensive reports with photos, data, and actionable insights.'
    },
    {
      icon: Globe,
      title: 'Local Presence',
      description: 'Based in Guangzhou, we have boots on the ground to visit factories and inspect goods.'
    },
    {
      icon: CreditCard,
      title: 'Transparent Pricing',
      description: 'No hidden fees. We provide clear quotes with detailed service breakdowns.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Sourcing Services
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Comprehensive China sourcing solutions to help you find reliable suppliers, 
              ensure quality, and streamline your supply chain.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div 
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-start ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">{service.title}</h2>
                  <p className="text-lg text-slate-600 mb-8">{service.description}</p>
                  
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">What's Included:</h3>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="bg-white rounded-2xl p-8 border border-slate-200">
                    <h3 className="text-lg font-semibold text-slate-900 mb-6">How It Works:</h3>
                    <ol className="space-y-4">
                      {service.process.map((step, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mr-4">
                            {idx + 1}
                          </div>
                          <span className="text-slate-600 pt-0.5">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose SSourcing China?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We're committed to making your China sourcing experience smooth, reliable, and cost-effective
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-slate-400 mb-8">
            Contact us today to discuss your sourcing needs. We'll provide a free consultation and quote.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get a Free Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;