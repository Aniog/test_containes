import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Search, Factory, ClipboardCheck, Clock, Truck, Package, CheckCircle, ArrowRight } from 'lucide-react';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import SectionHeader from '@/components/shared/SectionHeader';
import CTABanner from '@/components/shared/CTABanner';

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    badge: 'Service 01',
    title: 'Supplier Sourcing',
    subtitle: 'Find the right manufacturer for your product',
    desc: 'We tap into our established network of 500+ verified manufacturers across China\'s major production hubs — Shenzhen, Guangzhou, Yiwu, Dongguan, and more. We match your product specifications, MOQ requirements, and budget to the most suitable factories.',
    features: [
      'Detailed supplier comparison reports',
      'Background checks and trade history review',
      'Direct factory communication in Chinese',
      'Shortlist of 3–5 qualified suppliers within 5–7 days',
    ],
    imgId: 'svc-sourcing-img-4a2b9f',
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
  },
  {
    id: 'factory-verification',
    icon: Factory,
    badge: 'Service 02',
    title: 'Factory Verification & Audit',
    subtitle: 'Know exactly who you are buying from',
    desc: 'Before you place an order, we conduct on-site factory audits to verify production capacity, quality management systems, workforce size, certifications, and compliance with your requirements. We provide a detailed audit report with photos.',
    features: [
      'On-site factory visits by our local team',
      'Verification of business licenses and certifications',
      'Production capacity and equipment assessment',
      'Detailed audit report with photos and findings',
    ],
    imgId: 'svc-audit-img-7c3d1e',
    titleId: 'svc-audit-title',
    descId: 'svc-audit-desc',
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    badge: 'Service 03',
    title: 'Quality Inspection',
    subtitle: 'Catch defects before they reach your warehouse',
    desc: 'Our inspectors follow AQL (Acceptable Quality Level) standards to check products at key stages: during production, pre-shipment, and at container loading. We check dimensions, functionality, appearance, labeling, and packaging.',
    features: [
      'Pre-shipment inspection (PSI)',
      'During-production inspection (DUPRO)',
      'Container loading supervision (CLS)',
      'Detailed inspection report within 24 hours',
    ],
    imgId: 'svc-qc-img-2f8a4b',
    titleId: 'svc-qc-title',
    descId: 'svc-qc-desc',
  },
  {
    id: 'production-followup',
    icon: Clock,
    badge: 'Service 04',
    title: 'Production Follow-up',
    subtitle: 'Stay informed throughout manufacturing',
    desc: 'We act as your eyes and ears on the factory floor. Our team makes regular visits, communicates with production managers, and sends you weekly progress updates. If issues arise, we escalate immediately and work with the factory to resolve them.',
    features: [
      'Weekly production status reports',
      'Regular factory visits during production',
      'Early identification and resolution of delays',
      'Direct communication with factory management',
    ],
    imgId: 'svc-prod-img-9e1c7d',
    titleId: 'svc-prod-title',
    descId: 'svc-prod-desc',
  },
  {
    id: 'shipping-coordination',
    icon: Truck,
    badge: 'Service 05',
    title: 'Shipping Coordination',
    subtitle: 'From factory gate to your door',
    desc: 'We coordinate with trusted freight forwarders to arrange the most cost-effective and reliable shipping solution for your cargo — whether sea freight (FCL/LCL), air freight, or express courier. We handle booking, documentation, and tracking.',
    features: [
      'Sea freight (FCL & LCL), air freight, express',
      'Freight forwarder coordination and booking',
      'Export documentation assistance',
      'Shipment tracking and status updates',
    ],
    imgId: 'svc-ship-img-3b6f2a',
    titleId: 'svc-ship-title',
    descId: 'svc-ship-desc',
  },
  {
    id: 'sample-procurement',
    icon: Package,
    badge: 'Service 06',
    title: 'Sample Procurement',
    subtitle: 'Evaluate products before committing to bulk orders',
    desc: 'We source, evaluate, and ship product samples to you before you place a bulk order. We can request samples from multiple suppliers simultaneously, compare quality, and provide our assessment — helping you make an informed decision.',
    features: [
      'Multi-supplier sample requests',
      'Sample quality evaluation and comparison',
      'Express shipping of samples to your location',
      'Detailed sample assessment report',
    ],
    imgId: 'svc-sample-img-6d4e8c',
    titleId: 'svc-sample-title',
    descId: 'svc-sample-desc',
  },
];

export default function Services() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-navy-900 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-brand-red/20 text-red-300 mb-6">
            What We Do
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Sourcing Services</h1>
          <p className="text-lg text-navy-200 max-w-2xl mx-auto mb-8">
            End-to-end sourcing support for global buyers — from finding the right supplier to delivering goods to your door.
          </p>
          <Link to="/contact">
            <Button variant="primary" size="lg">Get a Free Sourcing Quote</Button>
          </Link>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-20">
            {services.map((svc, i) => (
              <div key={svc.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <Badge variant="blue" className="mb-4">{svc.badge}</Badge>
                  <h2 id={svc.titleId} className="text-2xl md:text-3xl font-bold text-navy-900 mb-2">{svc.title}</h2>
                  <p className="text-brand-blue font-medium mb-4">{svc.subtitle}</p>
                  <p id={svc.descId} className="text-gray-600 leading-relaxed mb-6">{svc.desc}</p>
                  <ul className="flex flex-col gap-3">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-gray-700">
                        <CheckCircle size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`rounded-2xl overflow-hidden bg-gray-100 aspect-video ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img
                    data-strk-img-id={svc.imgId}
                    data-strk-img={`[${svc.descId}] [${svc.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={svc.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Not Sure Which Service You Need?"
        subtitle="Tell us about your project and we will recommend the right combination of services for your situation."
        buttonText="Get a Free Consultation"
      />
    </div>
  );
}
