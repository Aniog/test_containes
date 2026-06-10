import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search, ShieldCheck, ClipboardCheck, Truck, Clock, DollarSign,
  FileText, Users, ArrowRight, CheckCircle2
} from 'lucide-react';

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify, evaluate, and shortlist qualified manufacturers that match your product specifications, target price, MOQ requirements, and quality standards.',
    features: ['Product matching', 'Multiple supplier options', 'Sample coordination', 'Price comparison'],
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
    imgId: 'svc-sourcing-img-a1b2',
  },
  {
    id: 'factory-verification',
    icon: ShieldCheck,
    title: 'Factory Verification',
    desc: 'Our team conducts on-site factory audits to verify business legitimacy, production capacity, quality management systems, and compliance with international standards.',
    features: ['Business license check', 'Capacity assessment', 'Quality system audit', 'Compliance verification'],
    titleId: 'svc-verify-title',
    descId: 'svc-verify-desc',
    imgId: 'svc-verify-img-c3d4',
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Comprehensive quality control at every production stage — from raw materials to finished goods. We follow AQL standards and provide detailed photo reports.',
    features: ['Pre-production inspection', 'During-production check', 'Pre-shipment inspection', 'Container loading supervision'],
    titleId: 'svc-qc-title',
    descId: 'svc-qc-desc',
    imgId: 'svc-qc-img-e5f6',
  },
  {
    id: 'production-followup',
    icon: Clock,
    title: 'Production Follow-up',
    desc: 'We monitor your order from confirmation to completion. Regular updates, timeline tracking, and proactive communication with the factory keep your project on schedule.',
    features: ['Timeline monitoring', 'Weekly progress reports', 'Issue resolution', 'Factory communication'],
    titleId: 'svc-prod-title',
    descId: 'svc-prod-desc',
    imgId: 'svc-prod-img-g7h8',
  },
  {
    id: 'shipping-coordination',
    icon: Truck,
    title: 'Shipping & Logistics',
    desc: 'End-to-end logistics management including freight forwarding, customs documentation, insurance, and delivery tracking to your warehouse or port.',
    features: ['Freight booking', 'Customs documentation', 'Insurance arrangement', 'Delivery tracking'],
    titleId: 'svc-ship-title',
    descId: 'svc-ship-desc',
    imgId: 'svc-ship-img-i9j0',
  },
  {
    id: 'negotiation',
    icon: DollarSign,
    title: 'Price Negotiation',
    desc: 'Leverage our local market knowledge and supplier relationships to secure better pricing, favorable payment terms, and improved trade conditions.',
    features: ['Market price benchmarking', 'Payment term negotiation', 'Volume discount leverage', 'Contract review'],
    titleId: 'svc-nego-title',
    descId: 'svc-nego-desc',
    imgId: 'svc-nego-img-k1l2',
  },
];

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="bg-gradient-to-br from-primary to-primary-dark py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">Our Services</p>
            <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
              Complete China Sourcing Services
            </h1>
            <p className="text-neutral-300 text-lg leading-relaxed">
              From finding the right supplier to delivering goods at your door — we provide end-to-end 
              sourcing support so you can focus on growing your business.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 md:space-y-24">
            {services.map((service, i) => (
              <div key={service.id} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center`}>
                <div className="w-full lg:w-1/2">
                  <div className="rounded-xl overflow-hidden h-64 md:h-80">
                    <img
                      data-strk-img-id={service.imgId}
                      data-strk-img={`[${service.descId}] [${service.titleId}]`}
                      data-strk-img-ratio="3x2"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h2 id={service.titleId} className="text-2xl md:text-3xl font-bold text-neutral-900 mb-3">{service.title}</h2>
                  <p id={service.descId} className="text-neutral-600 leading-relaxed mb-6">{service.desc}</p>
                  <ul className="space-y-2">
                    {service.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-neutral-700">
                        <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            Need Help Sourcing from China?
          </h2>
          <p className="text-neutral-300 text-lg mb-8">
            Tell us about your project and we'll create a custom sourcing plan for you — free of charge.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
