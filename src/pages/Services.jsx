import { Link } from 'react-router-dom';
import { Search, Shield, ClipboardCheck, Factory, Truck, Package, CheckCircle, ArrowRight } from 'lucide-react';
import CTABanner from '@/components/home/CTABanner';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    tagline: 'Find the right manufacturer for your product',
    description: 'We identify qualified Chinese manufacturers that match your product specifications, quality standards, MOQ requirements, and budget. Our sourcing team searches across Alibaba, trade shows, and our private supplier network to present you with a shortlist of verified options.',
    includes: [
      'Product specification analysis',
      'Supplier identification and shortlisting',
      'Initial supplier communication and screening',
      'Comparative quote analysis',
      'Supplier recommendation report',
    ],
  },
  {
    icon: Shield,
    title: 'Factory Verification & Audit',
    tagline: 'Know exactly who you are buying from',
    description: 'Before you commit to a supplier, we conduct a thorough on-site factory audit. Our auditors visit the facility, verify business licenses, assess production capacity, review quality management systems, and check compliance with relevant standards.',
    includes: [
      'Business license and registration verification',
      'On-site factory visit and assessment',
      'Production capacity and equipment review',
      'Quality management system evaluation',
      'Certification verification (ISO, CE, BSCI, etc.)',
      'Detailed audit report with photos',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    tagline: 'Catch defects before they reach your warehouse',
    description: 'Our trained inspectors conduct product inspections at key stages of production and before shipment. We check against your specifications, AQL standards, and any custom requirements you define.',
    includes: [
      'Pre-production inspection (materials and components)',
      'During-production inspection (DUPRO)',
      'Pre-shipment inspection (PSI)',
      'Container loading supervision',
      'Detailed inspection report with photos and measurements',
    ],
  },
  {
    icon: Factory,
    title: 'Production Follow-up',
    tagline: 'Stay informed without being on the ground',
    description: 'Once production begins, we act as your eyes and ears in the factory. We communicate with the production team, track milestones, identify potential delays, and escalate issues before they affect your delivery schedule.',
    includes: [
      'Weekly production status updates',
      'Factory communication and coordination',
      'Issue identification and escalation',
      'Timeline monitoring and delay prevention',
      'Photo and video updates from the factory floor',
    ],
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    tagline: 'From factory gate to your destination',
    description: 'We coordinate with licensed freight forwarders to arrange sea, air, or express shipping. We handle export documentation, ensure goods are properly packed and labeled, and keep you informed of shipment status.',
    includes: [
      'Freight forwarder coordination',
      'Export documentation preparation',
      'Packing and labeling supervision',
      'Shipping schedule management',
      'Tracking and delivery updates',
    ],
  },
  {
    icon: Package,
    title: 'Sample Procurement',
    tagline: 'Evaluate quality before committing to production',
    description: 'We source, evaluate, and ship product samples from shortlisted suppliers so you can assess quality, materials, and workmanship before placing a production order. We can also arrange custom samples based on your specifications.',
    includes: [
      'Sample request and coordination with suppliers',
      'Sample quality assessment',
      'Comparison of samples from multiple suppliers',
      'Sample shipping to your location',
      'Sample evaluation report',
    ],
  },
];

export default function Services() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">Our Services</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">
            China Sourcing Services
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Comprehensive sourcing support from supplier identification to final delivery — managed by our experienced team in China.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              return (
                <div
                  key={service.title}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-start ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className={isEven ? '' : 'lg:order-2'}>
                    <div className="w-14 h-14 bg-lightblue rounded-2xl flex items-center justify-center mb-5">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-navy mb-2">{service.title}</h2>
                    <p className="text-accent font-medium text-sm mb-4">{service.tagline}</p>
                    <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 bg-accent hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
                    >
                      Request This Service
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                  <div className={`bg-gray-50 rounded-2xl p-7 border border-gray-100 ${isEven ? '' : 'lg:order-1'}`}>
                    <h4 className="font-semibold text-navy text-sm uppercase tracking-wide mb-4">What's Included</h4>
                    <ul className="space-y-3">
                      {service.includes.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
