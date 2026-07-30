import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Search, Factory, ClipboardCheck, TrendingUp, Truck, Package, CheckCircle, ArrowRight } from 'lucide-react';
import CTAButton from '@/components/CTAButton';
import SectionLabel from '@/components/SectionLabel';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We research and identify Chinese manufacturers that match your product specifications, quality standards, MOQ, and budget. You receive a curated shortlist with detailed profiles — not just a list of names.',
    features: ['Product-specific factory matching', 'MOQ and pricing negotiation', 'Multiple supplier options', 'Detailed supplier profiles'],
    titleId: 'sp-sourcing-title',
    descId: 'sp-sourcing-desc',
    imgId: 'sp-sourcing-img-a1b2c3',
  },
  {
    icon: Factory,
    title: 'Factory Verification & Audit',
    desc: 'Before you commit to a supplier, we visit the factory in person to verify their capabilities, certifications, workforce, and production environment. You receive a full audit report with photos.',
    features: ['On-site factory visits', 'Business license verification', 'Capacity and equipment assessment', 'Compliance and certification checks'],
    titleId: 'sp-factory-title',
    descId: 'sp-factory-desc',
    imgId: 'sp-factory-img-d4e5f6',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Our local QC inspectors check your goods during production and before shipment. We follow AQL sampling standards and provide detailed inspection reports so you know exactly what you\'re receiving.',
    features: ['Pre-shipment inspection (PSI)', 'During production inspection (DUPRO)', 'AQL sampling standards', 'Photo and video reports'],
    titleId: 'sp-qc-title',
    descId: 'sp-qc-desc',
    imgId: 'sp-qc-img-g7h8i9',
  },
  {
    icon: TrendingUp,
    title: 'Production Follow-up',
    desc: 'We act as your eyes and ears on the ground throughout the production cycle. Regular updates, milestone tracking, and proactive issue resolution keep your order on schedule.',
    features: ['Weekly production updates', 'Milestone tracking', 'Issue escalation and resolution', 'Timeline management'],
    titleId: 'sp-prod-title',
    descId: 'sp-prod-desc',
    imgId: 'sp-prod-img-j1k2l3',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'We work with trusted freight forwarders to arrange sea, air, or express shipping. We handle export documentation, coordinate pickup, and keep you updated on shipment status.',
    features: ['Sea, air, and express freight', 'Export documentation support', 'Freight forwarder coordination', 'Shipment tracking'],
    titleId: 'sp-ship-title',
    descId: 'sp-ship-desc',
    imgId: 'sp-ship-img-m4n5o6',
  },
  {
    icon: Package,
    title: 'Private Label & OEM',
    desc: 'From concept to finished product, we help you develop and manufacture your own branded product line. We manage design, sampling, tooling, packaging, and production.',
    features: ['Product development support', 'OEM and ODM manufacturing', 'Custom packaging design', 'Brand compliance management'],
    titleId: 'sp-oem-title',
    descId: 'sp-oem-desc',
    imgId: 'sp-oem-img-p7q8r9',
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
      {/* Hero */}
      <section className="bg-navy-900 text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <SectionLabel className="text-red-400">Our Services</SectionLabel>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Full-Service China Sourcing Support
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Whether you need help finding a supplier, verifying a factory, or managing quality and logistics, we provide the on-the-ground support you need to source from China with confidence.
            </p>
            <CTAButton to="/contact" className="text-base px-8 py-4">
              Get a Free Sourcing Quote
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-20">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              const isEven = i % 2 === 0;
              return (
                <div key={svc.title} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={isEven ? '' : 'lg:order-2'}>
                    <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-red-600" />
                    </div>
                    <h2 id={svc.titleId} className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">{svc.title}</h2>
                    <p id={svc.descId} className="text-slate-600 leading-relaxed mb-6">{svc.desc}</p>
                    <ul className="flex flex-col gap-2 mb-8">
                      {svc.features.map((f) => (
                        <li key={f} className="flex items-center gap-3 text-slate-700 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <CTAButton to="/contact" showArrow>
                      Enquire About This Service
                    </CTAButton>
                  </div>
                  <div className={`rounded-xl overflow-hidden bg-slate-100 aspect-video ${isEven ? '' : 'lg:order-1'}`}>
                    <img
                      alt={svc.title}
                      data-strk-img-id={svc.imgId}
                      data-strk-img={`[${svc.descId}] [${svc.titleId}]`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Not Sure Which Service You Need?</h2>
          <p className="text-slate-300 text-lg mb-8">
            Tell us about your sourcing project and we'll recommend the right combination of services for your situation.
          </p>
          <CTAButton to="/contact" className="text-base px-8 py-4">
            Get a Free Consultation
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
