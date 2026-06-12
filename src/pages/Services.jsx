import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search, Factory, ClipboardCheck, ShieldCheck, Truck, Package,
  CheckCircle, ArrowRight
} from 'lucide-react';

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    subtitle: 'Find the right manufacturer for your product',
    desc: 'We research and identify manufacturers that match your product specifications, target price, MOQ, and compliance requirements. Our network spans Guangdong, Zhejiang, Jiangsu, and other major manufacturing hubs.',
    features: [
      'Product specification analysis',
      'Manufacturer database research',
      'Shortlist of 3–5 qualified suppliers',
      'Supplier profile reports',
      'Price and MOQ comparison',
    ],
    imgId: 'svc-page-sourcing-img-aa1bb2',
    titleId: 'svc-page-sourcing-title',
    descId: 'svc-page-sourcing-desc',
  },
  {
    id: 'factory-verification',
    icon: Factory,
    title: 'Factory Verification',
    subtitle: 'Know who you are buying from',
    desc: 'Before you commit to a supplier, we conduct on-site factory audits to verify business registration, production capacity, equipment, workforce, and export history. We check certifications and compliance with international standards.',
    features: [
      'Business license verification',
      'On-site factory audit',
      'Production capacity assessment',
      'Certification and compliance check',
      'Detailed audit report with photos',
    ],
    imgId: 'svc-page-factory-img-cc3dd4',
    titleId: 'svc-page-factory-title',
    descId: 'svc-page-factory-desc',
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    subtitle: 'Catch defects before they reach your warehouse',
    desc: 'Our trained QC inspectors conduct pre-shipment, during-production, and container loading inspections. We check against your product specifications and international quality standards, providing detailed reports with photos.',
    features: [
      'Pre-shipment inspection (PSI)',
      'During-production inspection (DUPRO)',
      'Container loading supervision',
      'AQL sampling standards',
      'Photo and video inspection reports',
    ],
    imgId: 'svc-page-qc-img-ee5ff6',
    titleId: 'svc-page-qc-title',
    descId: 'svc-page-qc-desc',
  },
  {
    id: 'production-followup',
    icon: ShieldCheck,
    title: 'Production Follow-up',
    subtitle: 'Stay informed throughout production',
    desc: 'We act as your eyes and ears on the factory floor. Our team monitors production schedules, checks material quality, and provides regular progress updates so you can identify and resolve issues before they escalate.',
    features: [
      'Production schedule monitoring',
      'Raw material inspection',
      'Weekly progress reports',
      'Issue escalation and resolution',
      'On-site visits at critical stages',
    ],
    imgId: 'svc-page-prod-img-gg7hh8',
    titleId: 'svc-page-prod-title',
    descId: 'svc-page-prod-desc',
  },
  {
    id: 'shipping-coordination',
    icon: Truck,
    title: 'Shipping Coordination',
    subtitle: 'From factory gate to your destination',
    desc: 'We coordinate with licensed freight forwarders for sea, air, and express shipping. We handle export documentation, customs declarations, and track your shipment from China to your destination port or warehouse.',
    features: [
      'Freight forwarder coordination',
      'Sea, air, and express options',
      'Export documentation support',
      'Customs clearance assistance',
      'Shipment tracking and updates',
    ],
    imgId: 'svc-page-ship-img-ii9jj0',
    titleId: 'svc-page-ship-title',
    descId: 'svc-page-ship-desc',
  },
  {
    id: 'private-label',
    icon: Package,
    title: 'Private Label & OEM',
    subtitle: 'Build your brand with Chinese manufacturing',
    desc: 'We support buyers who want to develop custom products or private label goods. From packaging design coordination to OEM production management, we help you bring your branded product to market efficiently.',
    features: [
      'OEM factory identification',
      'Packaging design coordination',
      'Sample development management',
      'Brand compliance checks',
      'First-order production support',
    ],
    imgId: 'svc-page-oem-img-kk1ll2',
    titleId: 'svc-page-oem-title',
    descId: 'svc-page-oem-desc',
  },
];

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-primary text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Our Services</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">China Sourcing Services for Global Buyers</h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              We provide end-to-end sourcing support — from finding the right supplier to delivering goods to your door. Every service is designed to reduce risk and give you full visibility over your supply chain.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 md:py-24 bg-lightbg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map(({ id, icon: Icon, title, subtitle, desc, features, imgId, titleId, descId }, idx) => (
              <div
                key={id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-1">{subtitle}</p>
                  <h2 id={titleId} className="text-2xl md:text-3xl font-bold text-primary mb-4">{title}</h2>
                  <p id={descId} className="text-muted leading-relaxed mb-6">{desc}</p>
                  <ul className="space-y-2 mb-6">
                    {features.map(f => (
                      <li key={f} className="flex items-center gap-2 text-sm text-darktext">
                        <CheckCircle className="w-4 h-4 text-success shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="inline-flex items-center gap-2 bg-accent hover:bg-red-700 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors">
                    Get a Quote <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className={`rounded-xl overflow-hidden shadow-sm ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img
                    data-strk-img-id={imgId}
                    data-strk-img={`[${descId}] [${titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={title}
                    className="w-full h-72 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-accent text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Not Sure Which Service You Need?</h2>
          <p className="text-red-100 mb-8">Contact us and we'll recommend the right combination of services for your sourcing project.</p>
          <Link to="/contact" className="inline-block bg-white text-accent hover:bg-gray-100 font-bold px-8 py-4 rounded-lg transition-colors">
            Get a Free Sourcing Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
