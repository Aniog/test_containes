import { Link } from 'react-router-dom';
import { Search, Building2, ClipboardCheck, Factory, Ship, FileText, Shield, DollarSign } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and evaluate reliable manufacturers across China based on your specific product requirements, budget constraints, and quality standards. Our extensive network covers all major manufacturing regions.',
    features: [
      'Market research and supplier identification',
      'Initial screening and capability assessment',
      'Detailed quotation comparison',
      'Supplier shortlisting with recommendations',
    ],
  },
  {
    icon: Building2,
    title: 'Factory Verification',
    description: 'Before you commit to any supplier, we conduct thorough on-site audits to verify their legitimacy, production capacity, and quality management systems.',
    features: [
      'Business license and registration verification',
      'On-site factory audit with photo documentation',
      'Production capacity and equipment assessment',
      'Quality management system review',
      'Working conditions and compliance check',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Our quality inspection services ensure that every product meets your specifications before it leaves the factory. We catch issues early to avoid costly returns.',
    features: [
      'Pre-production inspection of raw materials',
      'During-production inspection (DUPRO)',
      'Pre-shipment inspection (PSI)',
      'Container loading supervision',
      'Detailed inspection reports with photos',
    ],
  },
  {
    icon: Factory,
    title: 'Production Monitoring',
    description: 'We keep a close eye on your production progress with regular factory visits and detailed progress reports, so you always know where your order stands.',
    features: [
      'Regular production status updates',
      'On-site progress monitoring',
      'Early issue identification and resolution',
      'Timeline management and delay prevention',
    ],
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    description: 'From factory pickup to final delivery, we handle all logistics coordination to ensure your goods arrive safely and on time.',
    features: [
      'Freight forwarding arrangement',
      'Customs documentation preparation',
      'Sea freight and air freight options',
      'Express shipping coordination',
      'Warehouse consolidation services',
    ],
  },
  {
    icon: FileText,
    title: 'Sample Management',
    description: 'We coordinate sample requests, evaluate quality against your standards, and manage revisions until you are satisfied with the product.',
    features: [
      'Sample request coordination with factories',
      'Sample evaluation and quality assessment',
      'Feedback communication and revision management',
      'Sample approval before mass production',
    ],
  },
  {
    icon: Shield,
    title: 'Contract Negotiation',
    description: 'We help you negotiate favorable terms with suppliers, including pricing, payment terms, quality standards, and delivery schedules.',
    features: [
      'Price negotiation on your behalf',
      'Payment term structuring',
      'Quality specification documentation',
      'Delivery schedule agreement',
    ],
  },
  {
    icon: DollarSign,
    title: 'Cost Optimization',
    description: 'We help you find the right balance between quality and cost, identifying opportunities to reduce expenses without compromising on product standards.',
    features: [
      'Competitive quotation analysis',
      'Material and process optimization suggestions',
      'Packaging cost reduction',
      'Shipping cost optimization',
    ],
  },
];

export default function ServicesPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Sourcing Services</h1>
            <p className="text-lg text-blue-100">
              Comprehensive sourcing solutions designed to reduce risk, save time, and help you source from China with confidence.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="p-6 md:p-8 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h2>
                    <p className="text-slate-600 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-2 text-sm text-slate-700">
                          <span className="text-green-500 mt-0.5">&check;</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Need a Custom Sourcing Solution?</h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Every business has unique requirements. Contact us to discuss your specific needs and we will create a tailored sourcing plan.
          </p>
          <Link to="/contact" className="btn-primary">
            Get a Free Sourcing Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
