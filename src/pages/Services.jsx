import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Search, Factory, ClipboardCheck, Truck, BarChart2, MessageSquare, ArrowRight, CheckCircle } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import SectionHeader from '../components/shared/SectionHeader';
import CTABanner from '../components/shared/CTABanner';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing & Research',
    description: 'We identify qualified manufacturers that match your product specifications, MOQ, price target, and quality requirements. Our research covers our existing verified network, trade shows, and direct factory outreach.',
    features: [
      'Product specification analysis',
      'Supplier identification across 20+ industries',
      'Comparative supplier report (3–5 options)',
      'Price and lead time benchmarking',
      'MOQ and payment term negotiation',
    ],
    imgId: 'svc-pg-img-1a',
    imgQuery: '[svc-pg-title-1] supplier sourcing China factory research manufacturing',
    color: 'bg-blue-600',
  },
  {
    icon: Factory,
    title: 'Factory Verification & Audit',
    description: 'Before you commit to a supplier, we conduct a thorough on-site audit to verify their legitimacy, production capacity, and quality management systems.',
    features: [
      'Business license and export certificate verification',
      'On-site factory visit and photo documentation',
      'Production capacity and equipment assessment',
      'ISO, CE, and other certification checks',
      'Worker conditions and compliance review',
    ],
    imgId: 'svc-pg-img-2b',
    imgQuery: '[svc-pg-title-2] factory audit verification China manufacturing compliance',
    color: 'bg-amber-600',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Our inspectors check your goods at multiple stages of production to ensure they meet your specifications before shipment is approved.',
    features: [
      'Pre-production material inspection',
      'During-production (DUPRO) inspection',
      'Pre-shipment inspection (PSI)',
      'Container loading supervision',
      'Detailed inspection report with photos',
    ],
    imgId: 'svc-pg-img-3c',
    imgQuery: '[svc-pg-title-3] quality control inspection products China factory',
    color: 'bg-green-600',
  },
  {
    icon: BarChart2,
    title: 'Production Follow-up',
    description: 'We monitor your order from placement to completion, keeping you informed with regular updates and flagging any issues before they become problems.',
    features: [
      'Weekly production status reports',
      'Milestone photo and video updates',
      'Proactive issue identification and resolution',
      'Delivery schedule management',
      'Supplier communication in Chinese',
    ],
    imgId: 'svc-pg-img-4d',
    imgQuery: '[svc-pg-title-4] production monitoring factory China order management',
    color: 'bg-purple-600',
  },
  {
    icon: Truck,
    title: 'Shipping & Logistics',
    description: 'We coordinate the full logistics chain from factory to your warehouse, working with vetted freight forwarders and customs brokers.',
    features: [
      'Sea freight (FCL and LCL)',
      'Air freight and express courier',
      'Export documentation preparation',
      'Customs clearance coordination',
      'Door-to-door delivery tracking',
    ],
    imgId: 'svc-pg-img-5e',
    imgQuery: '[svc-pg-title-5] shipping logistics freight China export container',
    color: 'bg-teal-600',
  },
  {
    icon: MessageSquare,
    title: 'Supplier Communication',
    description: 'Language and cultural barriers are a major source of sourcing errors. Our bilingual team handles all supplier communication on your behalf.',
    features: [
      'Bilingual (English/Chinese) communication',
      'Technical specification translation',
      'Negotiation and contract review',
      'Dispute resolution support',
      'Cultural context and business etiquette',
    ],
    imgId: 'svc-pg-img-6f',
    imgQuery: '[svc-pg-title-6] business communication China supplier negotiation',
    color: 'bg-rose-600',
  },
];

export default function Services() {
  const containerRef = useRef(null);

  useEffect(() => {
    document.title = 'Sourcing Services | SSourcing China';
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-[#1A3C6E] py-16 md:py-20">
        <div className="container-xl text-center">
          <p className="section-label text-amber-400 mb-3">Our Services</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Full-Service China Sourcing
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
            From finding the right supplier to getting goods delivered to your door, we manage every step of the sourcing process.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="section-white">
        <div className="container-xl">
          <div className="flex flex-col gap-16">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              const isEven = i % 2 === 0;
              return (
                <div
                  key={svc.title}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className={!isEven ? 'lg:order-2' : ''}>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${svc.color}`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 id={`svc-pg-title-${i + 1}`} className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{svc.title}</h2>
                    <p className="text-slate-600 leading-relaxed mb-6">{svc.description}</p>
                    <ul className="flex flex-col gap-2">
                      {svc.features.map((f) => (
                        <li key={f} className="flex items-start gap-3 text-slate-700 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={!isEven ? 'lg:order-1' : ''}>
                    <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200">
                      <img
                        alt={svc.title}
                        className="w-full h-64 md:h-80 object-cover"
                        data-strk-img-id={svc.imgId}
                        data-strk-img={svc.imgQuery}
                        data-strk-img-ratio="4x3"
                        data-strk-img-width="600"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner
        title="Need a Custom Sourcing Solution?"
        subtitle="Tell us what you need and we'll put together a tailored service plan."
        ctaText="Get a Free Sourcing Quote"
      />
    </div>
  );
}
