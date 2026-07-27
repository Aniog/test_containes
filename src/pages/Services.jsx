import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
// Temporarily disabled SDK import to debug blank page issue
// import { ImageHelper } from '@strikingly/sdk';
// import strkImgConfig from '@/strk-img-config.json';
import {
  Search,
  ShieldCheck,
  ClipboardCheck,
  Factory,
  Ship,
  ArrowRight,
  CheckCircle2,
  FileText,
  Phone,
  Mail,
} from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Product Sourcing',
    description: 'We identify and evaluate manufacturers across China to find the best match for your product requirements.',
    details: [
      'Search across verified supplier databases and industry networks',
      'Request and compare quotations from multiple manufacturers',
      'Evaluate production capabilities and quality certifications',
      'Negotiate pricing and payment terms on your behalf',
      'Arrange sample production and evaluation',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Supplier Verification',
    description: 'On-site factory audits to ensure your potential supplier is legitimate and capable of meeting your requirements.',
    details: [
      'Verify business licenses and legal registration',
      'Inspect production facilities and equipment',
      'Review quality management systems and certifications',
      'Assess production capacity and lead times',
      'Check references from existing clients',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Comprehensive quality checks at every stage of production to ensure your products meet specifications.',
    details: [
      'Pre-production inspection of raw materials',
      'During-production checks at key manufacturing stages',
      'Pre-shipment inspection of finished goods',
      'Container loading supervision',
      'Detailed inspection reports with photos and measurements',
    ],
  },
  {
    icon: Factory,
    title: 'Production Monitoring',
    description: 'Regular oversight of your production run to keep things on schedule and address issues early.',
    details: [
      'Weekly production progress updates',
      'On-site visits during critical production phases',
      'Early identification of potential delays or issues',
      'Coordination with factory management on your behalf',
      'Timeline management and milestone tracking',
    ],
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    description: 'End-to-end logistics management from the factory floor to your warehouse door.',
    details: [
      'Freight forwarding by sea or air',
      'Customs documentation and clearance support',
      'Consolidation of multiple supplier shipments',
      'Real-time shipment tracking',
      'Delivery coordination to your destination',
    ],
  },
  {
    icon: FileText,
    title: 'Documentation Support',
    description: 'We handle the paperwork so you can focus on your business.',
    details: [
      'Commercial invoices and packing lists',
      'Certificate of origin preparation',
      'Quality certificates and test reports',
      'Import/export documentation',
      'Translation of technical documents',
    ],
  },
];

export default function ServicesPage() {
  const containerRef = useRef(null);

  // Temporarily disabled SDK image loading to debug blank page issue
  // useEffect(() => {
  //   return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  // }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Our Services</h1>
            <p className="mt-4 text-lg text-slate-300 leading-relaxed">
              Comprehensive sourcing support from initial supplier search to final delivery. Every service is designed to reduce risk and save you time.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div
                    className="w-full aspect-video rounded-xl overflow-hidden"
                    data-strk-bg-id={`service-bg-${index}-j1k2l3`}
                    data-strk-bg={`[service-title-${index}] [service-desc-${index}]`}
                    data-strk-bg-ratio="16x9"
                    data-strk-bg-width="800"
                  />
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-blue-800" />
                  </div>
                  <h2 id={`service-title-${index}`} className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                    {service.title}
                  </h2>
                  <p id={`service-desc-${index}`} className="text-slate-600 text-lg mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Need Help Sourcing from China?</h2>
          <p className="mt-4 text-lg text-slate-600">
            Tell us what you need and we will recommend the right services for your situation.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-blue-800 hover:bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a
              href="mailto:info@ssourcingchina.com"
              className="inline-flex items-center justify-center bg-white border border-slate-300 text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-50 transition"
            >
              <Mail className="mr-2 w-5 h-5" />
              Email Us Directly
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
