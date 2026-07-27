import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search,
  ShieldCheck,
  ClipboardCheck,
  TrendingUp,
  Truck,
  ArrowRight,
  FileCheck,
  Package,
  BarChart3,
} from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and evaluate reliable manufacturers across China that match your product requirements, budget, and quality standards. Our team searches verified supplier databases, attends trade shows, and leverages our network to find the right fit.',
    features: [
      'Product-specific supplier matching',
      'Initial capability assessment',
      'Quotation comparison and negotiation',
      'Sample coordination',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    description: 'Before you place an order, we conduct on-site audits to confirm that the supplier is legitimate and capable of meeting your requirements. This reduces the risk of fraud and ensures you are working with a real manufacturer.',
    features: [
      'Business license verification',
      'Production capacity assessment',
      'Quality management system review',
      'Social compliance checks',
      'Photo and video documentation',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Our inspectors visit the factory at key stages of production to verify that goods meet your specifications. We provide detailed reports with photos so you can make informed decisions before shipment.',
    features: [
      'Pre-production inspection',
      'During-production inspection',
      'Pre-shipment inspection',
      'Container loading supervision',
      'Detailed inspection reports',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Production Follow-up',
    description: 'We monitor your order from the moment it is placed until goods are ready for shipment. Regular updates keep you informed of progress and allow us to address issues before they become problems.',
    features: [
      'Production schedule tracking',
      'Milestone reporting',
      'Issue escalation and resolution',
      'Timeline management',
    ],
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    description: 'We handle the logistics of getting your goods from the factory to your destination. This includes working with freight forwarders, preparing export documentation, and arranging delivery.',
    features: [
      'Freight forwarding coordination',
      'Export documentation preparation',
      'Customs clearance support',
      'Delivery tracking',
      'Port-to-door or port-to-port options',
    ],
  },
  {
    icon: FileCheck,
    title: 'Sample Evaluation',
    description: 'We receive and evaluate product samples on your behalf, checking quality, specifications, and workmanship before you commit to a full production run.',
    features: [
      'Sample receipt and inspection',
      'Specification verification',
      'Photo documentation',
      'Feedback to supplier',
    ],
  },
  {
    icon: Package,
    title: 'Warehousing & Consolidation',
    description: 'If you are sourcing from multiple suppliers, we can consolidate your orders into a single shipment, reducing shipping costs and simplifying logistics.',
    features: [
      'Short-term warehousing',
      'Multi-supplier consolidation',
      'Repackaging and labeling',
      'Inventory management',
    ],
  },
  {
    icon: BarChart3,
    title: 'Market Research',
    description: 'We provide market intelligence on pricing trends, supplier landscapes, and product availability in China to help you make informed sourcing decisions.',
    features: [
      'Price benchmarking',
      'Supplier landscape analysis',
      'Product availability reports',
      'Industry trend updates',
    ],
  },
];

export default function ServicesPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Sourcing Services</h1>
          <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">
            Comprehensive sourcing support from supplier identification to final delivery.
            Choose the services you need or let us manage the entire process.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((s, i) => (
              <div key={i} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <s.icon className="w-10 h-10 text-blue-700 mb-4" />
                <h2 className="text-xl font-semibold text-slate-800 mb-3">{s.title}</h2>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">{s.description}</p>
                <ul className="space-y-2">
                  {s.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-slate-700">
                      <ArrowRight className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Help Choosing the Right Services?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Tell us about your project and we will recommend the services that best fit your needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 bg-white text-blue-700 font-semibold rounded-md hover:bg-blue-50 transition-colors"
          >
            Get a Free Sourcing Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
