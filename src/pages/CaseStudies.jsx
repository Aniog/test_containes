import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Package, Star, CheckCircle } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import CtaBanner from '@/components/shared/CtaBanner';

const caseStudies = [
  {
    id: 'furniture-uk',
    client: 'HomeGoods Direct',
    country: 'United Kingdom',
    flag: '🇬🇧',
    category: 'Furniture',
    challenge: 'A UK-based home goods retailer needed to source a range of flat-pack office furniture for a major retail chain. They had no existing supplier relationships in China and needed a manufacturer that could meet strict EU safety standards.',
    solution: 'We identified 4 qualified furniture manufacturers in Guangdong province, conducted on-site audits at all four, and recommended the top two for sample production. After sample approval, we managed production monitoring and pre-shipment inspection.',
    result: 'First order of 2,000 units delivered on time with zero defects. The client has since placed three repeat orders and expanded the product range to 12 SKUs.',
    services: ['Supplier Sourcing', 'Factory Audit', 'Quality Inspection', 'Shipping Coordination'],
    metric1: { value: '2,000', label: 'Units, First Order' },
    metric2: { value: '0', label: 'Defects Found' },
    metric3: { value: '3', label: 'Repeat Orders' },
    imgId: 'cs-furniture-img-a1b2c3',
    titleId: 'cs-furniture-title',
    descId: 'cs-furniture-desc',
  },
  {
    id: 'electronics-brazil',
    client: 'TechRetail Brasil',
    country: 'Brazil',
    flag: '🇧🇷',
    category: 'Electronics',
    challenge: 'A Brazilian electronics distributor had previously received a shipment of non-compliant LED lighting products that were rejected at customs. They needed a sourcing partner who could verify compliance before shipment.',
    solution: 'We sourced three CE and RoHS-certified LED manufacturers, conducted factory audits focusing on quality management systems, and arranged third-party lab testing before production. Pre-shipment inspection confirmed all units met specifications.',
    result: 'The client successfully cleared customs with full documentation. They now use our compliance verification service for all new product lines.',
    services: ['Supplier Sourcing', 'Compliance Verification', 'Lab Testing Coordination', 'Quality Inspection'],
    metric1: { value: '100%', label: 'Customs Clearance Rate' },
    metric2: { value: 'CE + RoHS', label: 'Certifications Verified' },
    metric3: { value: '5', label: 'Product Lines Managed' },
    imgId: 'cs-electronics-img-d4e5f6',
    titleId: 'cs-electronics-title',
    descId: 'cs-electronics-desc',
  },
  {
    id: 'outdoor-sweden',
    client: 'Nordic Outdoor Gear',
    country: 'Sweden',
    flag: '🇸🇪',
    category: 'Sports & Outdoor',
    challenge: 'A Swedish outdoor gear startup needed to source custom camping equipment for their first product launch. With no China sourcing experience, they needed end-to-end support from supplier identification to delivery.',
    solution: 'We managed the full sourcing cycle: supplier research, factory audit, sample coordination, production follow-up with weekly photo reports, and sea freight coordination to Sweden.',
    result: 'Products launched on schedule. The client received weekly production updates and had full visibility throughout. They have since expanded to 8 product SKUs sourced through us.',
    services: ['Full Sourcing Management', 'Factory Audit', 'Production Follow-up', 'Shipping Coordination'],
    metric1: { value: '8', label: 'SKUs Sourced' },
    metric2: { value: 'On Time', label: 'Launch Delivery' },
    metric3: { value: 'Weekly', label: 'Progress Reports' },
    imgId: 'cs-outdoor-img-g7h8i9',
    titleId: 'cs-outdoor-title',
    descId: 'cs-outdoor-desc',
  },
  {
    id: 'apparel-usa',
    client: 'Urban Basics Co.',
    country: 'United States',
    flag: '🇺🇸',
    category: 'Apparel',
    challenge: 'A US fashion brand needed to transition their apparel production from a single supplier to a diversified factory base after experiencing quality inconsistencies and delivery delays.',
    solution: 'We audited their existing supplier and identified two additional qualified manufacturers. We implemented a dual-sourcing strategy with standardized quality inspection protocols across all factories.',
    result: 'Quality consistency improved significantly. On-time delivery rate increased from 72% to 96%. The brand now has a resilient supply chain with three verified factories.',
    services: ['Factory Audit', 'Supplier Diversification', 'Quality Inspection', 'Production Follow-up'],
    metric1: { value: '96%', label: 'On-Time Delivery' },
    metric2: { value: '3', label: 'Verified Factories' },
    metric3: { value: '+24%', label: 'Delivery Improvement' },
    imgId: 'cs-apparel-img-j1k2l3',
    titleId: 'cs-apparel-title',
    descId: 'cs-apparel-desc',
  },
];

export default function CaseStudies() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-navy py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/15 text-white text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full mb-5">
              Client Results
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
              Case Studies
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              Real sourcing projects, real results. See how we've helped buyers across different industries and countries source successfully from China.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {caseStudies.map((cs, i) => (
            <div key={cs.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-[4/3] lg:aspect-auto overflow-hidden">
                  <img
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[${cs.descId}] [${cs.titleId}] China sourcing ${cs.category}`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cs.client}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{cs.flag}</span>
                    <div>
                      <p id={cs.titleId} className="font-bold text-dark-text">{cs.client}</p>
                      <p className="text-muted-text text-sm">{cs.country} · {cs.category}</p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-[#C0392B] mb-1">Challenge</h3>
                      <p id={cs.descId} className="text-body-text text-sm leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-navy mb-1">Our Solution</h3>
                      <p className="text-body-text text-sm leading-relaxed">{cs.solution}</p>
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-success-green mb-1">Result</h3>
                      <p className="text-body-text text-sm leading-relaxed">{cs.result}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 mb-5">
                    {[cs.metric1, cs.metric2, cs.metric3].map((m) => (
                      <div key={m.label} className="bg-light-blue rounded-lg p-3 text-center">
                        <p className="text-lg font-bold text-navy">{m.value}</p>
                        <p className="text-xs text-muted-text">{m.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cs.services.map((s) => (
                      <span key={s} className="bg-navy/10 text-navy text-xs font-medium px-2.5 py-1 rounded-full">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner
        title="Ready to Be Our Next Success Story?"
        subtitle="Tell us about your sourcing project and we'll show you how we can help."
      />
    </div>
  );
}
