import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search, Factory, ClipboardCheck, ShieldCheck, Truck, Package,
  CheckCircle, ArrowRight
} from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import CTASection from '@/components/CTASection';

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    subtitle: 'Find the right factory for your product',
    desc: 'We research and shortlist verified Chinese manufacturers that match your product specifications, minimum order quantity, quality standards, and budget. Our team has direct relationships with factories across major manufacturing hubs including Guangdong, Zhejiang, Jiangsu, and Shandong.',
    features: [
      'Product specification analysis',
      'Factory database research and outreach',
      'Supplier shortlist with profiles and quotes',
      'Initial supplier communication in Chinese',
      'Price benchmarking and comparison',
    ],
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
    imgId: 'svc-sourcing-full-img-a1b2c3',
  },
  {
    id: 'factory-audit',
    icon: Factory,
    title: 'Factory Audit',
    subtitle: 'Verify before you commit',
    desc: 'Before you place an order, we visit the factory in person to verify their legitimacy, production capacity, equipment, workforce, and quality management systems. Our audit reports give you the information you need to make a confident decision.',
    features: [
      'Business license and registration verification',
      'Production capacity and equipment assessment',
      'Quality management system review',
      'Worker welfare and compliance check',
      'Detailed written audit report with photos',
    ],
    titleId: 'svc-audit-title',
    descId: 'svc-audit-desc',
    imgId: 'svc-audit-full-img-d4e5f6',
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    subtitle: 'Catch defects before they ship',
    desc: 'Our inspectors visit the factory during and after production to check goods against your specifications. We use internationally recognized inspection standards (AQL) and provide detailed reports with photos and pass/fail results.',
    features: [
      'Pre-shipment inspection (PSI)',
      'During-production inspection (DUPRO)',
      'Container loading supervision',
      'AQL sampling methodology',
      'Same-day inspection reports',
    ],
    titleId: 'svc-qc-title',
    descId: 'svc-qc-desc',
    imgId: 'svc-qc-full-img-g7h8i9',
  },
  {
    id: 'production-followup',
    icon: ShieldCheck,
    title: 'Production Follow-up',
    subtitle: 'Stay informed throughout production',
    desc: 'Once your order is confirmed, we act as your eyes and ears on the ground. We communicate with the factory in Chinese, track production milestones, and alert you to any delays or issues before they become problems.',
    features: [
      'Regular production status updates',
      'Milestone tracking and reporting',
      'Issue escalation and resolution',
      'Material and component verification',
      'Delivery timeline management',
    ],
    titleId: 'svc-prod-title',
    descId: 'svc-prod-desc',
    imgId: 'svc-prod-full-img-j1k2l3',
  },
  {
    id: 'shipping-coordination',
    icon: Truck,
    title: 'Shipping Coordination',
    subtitle: 'From factory to your door',
    desc: 'We coordinate with freight forwarders, customs brokers, and logistics providers to ensure your goods are shipped correctly and on time. We handle the paperwork, track shipments, and keep you informed at every stage.',
    features: [
      'Freight forwarder selection and booking',
      'Export customs documentation',
      'Bill of lading and shipping document review',
      'Shipment tracking and updates',
      'Consolidation for multiple suppliers',
    ],
    titleId: 'svc-ship-title',
    descId: 'svc-ship-desc',
    imgId: 'svc-ship-full-img-m4n5o6',
  },
  {
    id: 'sample-procurement',
    icon: Package,
    title: 'Sample Procurement',
    subtitle: 'Evaluate quality before committing',
    desc: 'We arrange product samples from shortlisted factories and ship them to you for evaluation. We manage the sample request process, negotiate sample fees, and ensure samples accurately represent production quality.',
    features: [
      'Sample request and negotiation',
      'Sample quality pre-check before shipping',
      'International sample shipping',
      'Multiple supplier sample comparison',
      'Feedback relay to factory for revisions',
    ],
    titleId: 'svc-sample-title',
    descId: 'svc-sample-desc',
    imgId: 'svc-sample-full-img-p7q8r9',
  },
];

export default function ServicesPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-gold font-semibold text-sm uppercase tracking-widest mb-3">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              China Sourcing Services for Global Buyers
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              We offer a complete range of sourcing, verification, quality control, and logistics services — so you can import from China with confidence and without the guesswork.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {services.map(({ id, icon: Icon, title, subtitle, desc, features, titleId, descId, imgId }, index) => (
            <div
              key={id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">{subtitle}</span>
                <h2 id={titleId} className="text-2xl md:text-3xl font-bold text-darktext mt-1 mb-4">{title}</h2>
                <p id={descId} className="text-bodytext leading-relaxed mb-6">{desc}</p>
                <ul className="space-y-2 mb-6">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-bodytext">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-accent text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-[#a93226] transition-colors text-sm"
                >
                  Enquire About This Service <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className={`rounded-2xl overflow-hidden aspect-[4/3] ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <img
                  data-strk-img-id={imgId}
                  data-strk-img={`[${descId}] [${titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
