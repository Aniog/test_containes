import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Search, Factory, ShieldCheck, ClipboardCheck, Truck, FileText, ArrowRight, CheckCircle } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import InquiryForm from '@/components/home/InquiryForm';

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing & Shortlisting',
    subtitle: 'Find the right manufacturer for your product',
    desc: 'We search our verified supplier database and conduct targeted outreach to identify manufacturers that match your product specifications, quality standards, MOQ, and budget. You receive a shortlist of pre-screened suppliers with detailed profiles.',
    features: [
      'Product specification analysis',
      'Supplier database search & outreach',
      'Background checks & business verification',
      'Comparative supplier profiles',
      'Price benchmarking',
    ],
    imgId: 'service-sourcing-img-3b7c1a',
    titleId: 'service-sourcing-title',
    descId: 'service-sourcing-desc',
  },
  {
    id: 'factory-audit',
    icon: Factory,
    title: 'Factory Audit & Verification',
    subtitle: 'Know exactly who you are buying from',
    desc: 'Our team visits factories in person to verify their legitimacy, production capabilities, workforce, equipment, and compliance with international standards. You receive a comprehensive audit report with photos and a risk assessment.',
    features: [
      'Business license & registration check',
      'On-site factory visit & inspection',
      'Production capacity assessment',
      'Certifications & compliance review',
      'Detailed audit report with photos',
    ],
    imgId: 'service-audit-img-9d2e5f',
    titleId: 'service-audit-title',
    descId: 'service-audit-desc',
  },
  {
    id: 'quality-inspection',
    icon: ShieldCheck,
    title: 'Quality Control & Inspection',
    subtitle: 'Catch defects before they reach your warehouse',
    desc: 'Our trained QC inspectors conduct inspections at key production stages — pre-production, during production, and pre-shipment. We check against your specifications and international standards, providing detailed reports with photos and pass/fail results.',
    features: [
      'Pre-production inspection',
      'During-production inspection',
      'Pre-shipment inspection (PSI)',
      'AQL sampling standards',
      'Detailed QC report with photos',
    ],
    imgId: 'service-qc-img-4f8a2c',
    titleId: 'service-qc-title',
    descId: 'service-qc-desc',
  },
  {
    id: 'production-followup',
    icon: ClipboardCheck,
    title: 'Production Follow-up',
    subtitle: 'Stay informed throughout manufacturing',
    desc: 'We act as your eyes and ears on the ground. Our team monitors production milestones, communicates with the factory on your behalf, and sends regular progress updates so you always know the status of your order.',
    features: [
      'Production milestone tracking',
      'Regular progress reports',
      'Factory communication in Chinese',
      'Issue escalation & resolution',
      'Timeline management',
    ],
    imgId: 'service-production-img-7e3b6d',
    titleId: 'service-production-title',
    descId: 'service-production-desc',
  },
  {
    id: 'shipping',
    icon: Truck,
    title: 'Shipping Coordination',
    subtitle: 'From factory gate to your destination',
    desc: 'We coordinate with trusted freight forwarders to arrange sea freight (FCL/LCL) or air freight, prepare all export documentation, and ensure your goods are shipped on time and in compliance with import regulations.',
    features: [
      'Sea freight (FCL & LCL)',
      'Air freight coordination',
      'Export documentation preparation',
      'Customs clearance support',
      'Cargo insurance arrangement',
    ],
    imgId: 'service-shipping-img-1c9f4e',
    titleId: 'service-shipping-title',
    descId: 'service-shipping-desc',
  },
  {
    id: 'consulting',
    icon: FileText,
    title: 'Sourcing Consulting',
    subtitle: 'Expert guidance for your China strategy',
    desc: 'Not sure where to start? Our sourcing consultants help you develop a China sourcing strategy, understand market pricing, identify risks, and build a reliable supply chain from scratch.',
    features: [
      'Market research & pricing analysis',
      'Supply chain strategy development',
      'Risk assessment & mitigation',
      'Supplier relationship management',
      'Ongoing sourcing support',
    ],
    imgId: 'service-consulting-img-6a2d8b',
    titleId: 'service-consulting-title',
    descId: 'service-consulting-desc',
  },
];

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-brand-dark py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold text-brand-orange uppercase tracking-widest">Our Services</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            China Sourcing Services
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Comprehensive sourcing support from supplier identification to final delivery — all managed by our experienced team in China.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-16">
            {services.map((service, idx) => {
              const Icon = service.icon;
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={service.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className={!isEven ? 'lg:order-2' : ''}>
                    <div className="w-12 h-12 bg-brand-blue-light rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-brand-blue" />
                    </div>
                    <h2 id={service.titleId} className="text-2xl md:text-3xl font-bold text-brand-dark mb-2">
                      {service.title}
                    </h2>
                    <p className="text-brand-blue font-medium text-sm mb-4">{service.subtitle}</p>
                    <p id={service.descId} className="text-gray-600 leading-relaxed mb-6">{service.desc}</p>
                    <ul className="flex flex-col gap-2.5 mb-6">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center gap-2.5 text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 bg-brand-orange hover:bg-orange-700 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm"
                    >
                      Get a Quote <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                  <div className={`rounded-2xl overflow-hidden shadow-sm ${!isEven ? 'lg:order-1' : ''}`}>
                    <img
                      alt={service.title}
                      data-strk-img-id={service.imgId}
                      data-strk-img={`[${service.descId}] [${service.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-72 object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <InquiryForm />
    </div>
  );
};

export default Services;
