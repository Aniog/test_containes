import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Search, Building2, ClipboardCheck, PackageCheck, Ship, FileText, Headphones, ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const services = [
  {
    icon: Search,
    title: 'Supplier Identification & Sourcing',
    desc: 'We analyze your product requirements and identify qualified manufacturers from our extensive network. You receive a shortlist of 3-5 pre-vetted suppliers with detailed profiles, so you can make an informed decision without spending weeks on research.',
    features: ['Supplier database search', 'Capability matching', 'Initial screening & RFQ', 'Supplier profile reports', 'Price comparison analysis'],
    imgId: 'svc-detail-sourcing-b1c2d3',
  },
  {
    icon: Building2,
    title: 'Factory Audits & Verification',
    desc: 'Our team conducts comprehensive on-site factory audits across China. We verify business licenses, assess production capacity, inspect quality management systems, review certifications, and check export history — providing you with a complete risk assessment.',
    features: ['Business license verification', 'Production line assessment', 'Equipment & technology audit', 'Quality system review (ISO, BSCI)', 'Financial & export history check'],
    imgId: 'svc-detail-factory-e4f5g6',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Control & Inspection',
    desc: 'We protect your brand with multi-stage quality control. From initial sample evaluation through in-process inspection to final pre-shipment checks, we ensure every product meets your specifications before it leaves the factory.',
    features: ['Pre-production sample review', 'In-process quality inspection', 'Pre-shipment inspection (AQL)', 'Lab testing coordination', 'Detailed QC reports with photos'],
    imgId: 'svc-detail-qc-h7i8j9',
  },
  {
    icon: PackageCheck,
    title: 'Production Monitoring',
    desc: 'Stay informed at every production milestone. Our project managers track manufacturing progress, provide weekly updates, identify potential delays early, and coordinate solutions with suppliers so your orders stay on schedule.',
    features: ['Production timeline management', 'Weekly progress reports', 'Milestone tracking', 'Issue resolution & mediation', 'Production photos & videos'],
    imgId: 'svc-detail-prod-k0l1m2',
  },
  {
    icon: Ship,
    title: 'Shipping & Logistics Coordination',
    desc: 'We handle the complexity of international logistics so your products move seamlessly from factory to your destination. From freight booking and consolidation to customs documentation and delivery tracking.',
    features: ['Freight booking (FCL/LCL/Air)', 'Customs documentation', 'Container loading supervision', 'Insurance coordination', 'Door-to-door tracking'],
    imgId: 'svc-detail-ship-n3o4p5',
  },
  {
    icon: FileText,
    title: 'Product Development Support',
    desc: 'Need custom products or OEM manufacturing? We connect you with factories that offer design, prototyping, and tooling services. We manage IP protection, NDA agreements, and the entire development-to-production transition.',
    features: ['OEM/ODM factory matching', 'Prototyping coordination', 'Tooling & mold management', 'NDA & IP protection', 'Design-to-production handover'],
    imgId: 'svc-detail-dev-q6r7s8',
  },
];

const ServicesPage = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-navy py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Our Sourcing Services
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Complete end-to-end sourcing solutions backed by 15+ years of on-the-ground experience in China.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((svc, i) => (
              <div key={svc.title} className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                <div className={i % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="w-12 h-12 bg-navy rounded-lg flex items-center justify-center mb-5">
                    <svc.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h2 id={`svc-detail-title-${i}`} className="text-2xl md:text-3xl font-bold text-navy mb-4">
                    {svc.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {svc.desc}
                  </p>
                  <ul className="space-y-2.5">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={i % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <img
                    alt={svc.title}
                    className="rounded-xl shadow-lg border border-gray-100 w-full"
                    data-strk-img-id={svc.imgId}
                    data-strk-img={`[svc-detail-title-${i}] china sourcing service`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">Ready to Start Sourcing?</h2>
          <p className="text-gray-600 mb-8">Tell us about your project and we'll create a tailored sourcing plan for you.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-gold text-navy font-bold px-8 py-3.5 rounded-lg hover:bg-gold-light transition-colors"
          >
            Get a Free Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
