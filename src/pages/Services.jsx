import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShieldCheck, ClipboardCheck, Truck, BarChart2, Package, ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing & Matching',
    description: 'We identify qualified manufacturers from our verified network and major Chinese trade platforms. Each supplier is pre-screened against your product specifications, target price, and compliance requirements before we present them to you.',
    features: ['Product spec analysis', 'Supplier database search', 'Initial supplier screening', '3–5 qualified shortlist'],
    imgId: 'svc-page-sourcing-img-a1b2',
    titleId: 'svc-page-sourcing-title',
    descId: 'svc-page-sourcing-desc',
  },
  {
    id: 'factory-verification',
    icon: ShieldCheck,
    title: 'Factory Audit & Verification',
    description: 'Before you commit to any supplier, our team visits the factory in person. We verify business licenses, production capacity, workforce size, equipment, certifications, and compliance with your standards.',
    features: ['On-site factory visit', 'Business license check', 'Capacity & equipment audit', 'Certification verification'],
    imgId: 'svc-page-factory-img-c3d4',
    titleId: 'svc-page-factory-title',
    descId: 'svc-page-factory-desc',
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Control & Inspection',
    description: 'We conduct inspections at key stages of production — during manufacturing and before shipment. Our inspectors follow your checklist and international standards, providing detailed reports with photos.',
    features: ['During-production inspection', 'Pre-shipment inspection', 'Container loading supervision', 'Detailed photo reports'],
    imgId: 'svc-page-qc-img-e5f6',
    titleId: 'svc-page-qc-title',
    descId: 'svc-page-qc-desc',
  },
  {
    id: 'production-followup',
    icon: BarChart2,
    title: 'Production Follow-Up',
    description: 'We monitor your order from placement to completion. A dedicated project manager tracks production milestones, communicates with the factory, and alerts you to any delays or issues before they escalate.',
    features: ['Order placement support', 'Production milestone tracking', 'Factory communication', 'Delay escalation management'],
    imgId: 'svc-page-prod-img-g7h8',
    titleId: 'svc-page-prod-title',
    descId: 'svc-page-prod-desc',
  },
  {
    id: 'shipping-logistics',
    icon: Truck,
    title: 'Shipping & Logistics Coordination',
    description: 'We coordinate freight forwarding, prepare export documentation, and track your shipment from the factory to your warehouse. We work with sea freight, air freight, and express couriers.',
    features: ['Freight forwarder coordination', 'Export documentation', 'Sea, air & express options', 'Shipment tracking'],
    imgId: 'svc-page-ship-img-i9j0',
    titleId: 'svc-page-ship-title',
    descId: 'svc-page-ship-desc',
  },
  {
    id: 'product-development',
    icon: Package,
    title: 'OEM & Product Development',
    description: 'Need a custom product or private label? We help you develop product specifications, manage sample rounds, coordinate packaging design, and find the right OEM manufacturer for your brand.',
    features: ['Product spec development', 'Sample management', 'Packaging coordination', 'OEM factory matching'],
    imgId: 'svc-page-oem-img-k1l2',
    titleId: 'svc-page-oem-title',
    descId: 'svc-page-oem-desc',
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
      {/* Page Header */}
      <section className="bg-brand-navy py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-sky text-sm font-semibold uppercase tracking-widest mb-2">Our Services</p>
          <h1 id="services-page-title" className="text-white text-4xl md:text-5xl font-bold mb-4">
            China Sourcing Services
          </h1>
          <p id="services-page-subtitle" className="text-blue-200 text-lg max-w-2xl mx-auto">
            From finding the right factory to delivering goods to your door — we manage every step of the sourcing process.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {services.map((svc, index) => {
            const Icon = svc.icon;
            const isEven = index % 2 === 0;
            return (
              <div key={svc.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                <div className={isEven ? '' : 'lg:order-2'}>
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-brand-blue" />
                  </div>
                  <h2 id={svc.titleId} className="text-neutral-900 text-2xl font-bold mb-3">{svc.title}</h2>
                  <p id={svc.descId} className="text-neutral-500 text-base leading-relaxed mb-5">{svc.description}</p>
                  <ul className="space-y-2 mb-6">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-neutral-700 text-sm">
                        <div className="w-1.5 h-1.5 bg-brand-blue rounded-full flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-brand-red text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-red-700 transition-colors"
                  >
                    Get a Quote <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className={`rounded-2xl overflow-hidden shadow-md ${isEven ? '' : 'lg:order-1'}`}>
                  <img
                    alt={svc.title}
                    data-strk-img-id={svc.imgId}
                    data-strk-img={`[${svc.descId}] [${svc.titleId}] [services-page-subtitle] [services-page-title]`}
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
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-navy text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-white text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-blue-200 text-lg mb-8">Submit your sourcing inquiry and we'll respond within 24 hours with a tailored plan.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-red text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-red-700 transition-colors text-base"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
