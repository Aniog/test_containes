import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import CtaBanner from '../components/shared/CtaBanner';
import { MapPin, Package, CheckCircle } from 'lucide-react';

const caseStudies = [
  {
    id: 'furniture-uk',
    title: 'Office Furniture Sourcing for UK Retailer',
    client: 'Whitfield Retail Group',
    country: 'United Kingdom',
    category: 'Furniture',
    services: ['Supplier Sourcing', 'Factory Audit', 'Quality Inspection', 'Shipping Coordination'],
    challenge: 'A UK-based furniture retailer had previously worked with two Chinese suppliers who delivered inconsistent quality. They needed a reliable manufacturer for a new line of office chairs with specific ergonomic certifications.',
    approach: 'We identified 4 qualified manufacturers in Guangdong, conducted on-site audits at all four, and recommended the top two based on production capability and quality management. We coordinated sample production and managed two revision rounds before the client approved the final sample.',
    result: 'The client placed an initial order of 500 units. Pre-shipment inspection confirmed 100% compliance with specifications. Delivery was completed on schedule. The client has since placed three additional orders with the same supplier.',
    metrics: [
      { label: 'Order Value', value: '$48,000' },
      { label: 'Lead Time', value: '45 days' },
      { label: 'Defect Rate', value: '0.2%' },
      { label: 'Repeat Orders', value: '3' },
    ],
  },
  {
    id: 'electronics-us',
    title: 'LED Lighting Sourcing for US Distributor',
    client: 'TechDist Inc.',
    country: 'United States',
    category: 'Electronics',
    services: ['Supplier Sourcing', 'Factory Audit', 'Quality Inspection', 'Production Follow-up'],
    challenge: 'A US electronics distributor needed a reliable source for commercial LED lighting products with UL and CE certifications. Previous attempts to source independently had resulted in certification issues and delayed shipments.',
    approach: 'We shortlisted 5 LED manufacturers in Guangdong with existing UL/CE certifications. After factory audits, we recommended two suppliers and coordinated a competitive sample process. We monitored production weekly and conducted a pre-shipment inspection before each shipment.',
    result: 'The client established a long-term supply relationship with one manufacturer. Over 18 months, we managed 6 production runs with consistent quality and on-time delivery. The client expanded the product range to include 12 additional SKUs.',
    metrics: [
      { label: 'Annual Order Value', value: '$220,000' },
      { label: 'SKUs Managed', value: '18' },
      { label: 'On-Time Delivery', value: '100%' },
      { label: 'Production Runs', value: '6' },
    ],
  },
  {
    id: 'apparel-brazil',
    title: 'Sportswear Sourcing for Brazilian Brand',
    client: 'Lumina Active',
    country: 'Brazil',
    category: 'Apparel',
    services: ['Supplier Sourcing', 'Supplier Negotiation', 'Quality Inspection'],
    challenge: 'A Brazilian activewear brand wanted to expand their product line with Chinese-manufactured sportswear. They had no existing supplier relationships in China and needed help navigating MOQ requirements and fabric quality standards.',
    approach: 'We identified 6 sportswear manufacturers in Fujian and Guangdong, negotiated reduced MOQs for the initial trial order, and coordinated fabric and sample approvals. We conducted a pre-shipment inspection that identified a stitching issue on 8% of units, which was corrected before shipment.',
    result: 'The client successfully launched their new product line on schedule. The pre-shipment inspection prevented a costly return shipment. The client has since expanded to three product categories with the same supplier.',
    metrics: [
      { label: 'Initial Order', value: '$32,000' },
      { label: 'MOQ Reduction', value: '40%' },
      { label: 'Issues Caught', value: '1 (resolved)' },
      { label: 'Time Saved', value: '3 weeks' },
    ],
  },
];

export default function CaseStudies() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-primary-dark py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-gold mb-3">Case Studies</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Client Success Stories</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Real examples of how we've helped buyers source successfully from China — with measurable results.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((cs, index) => (
              <div key={cs.id} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                <div className="grid grid-cols-1 lg:grid-cols-5">
                  {/* Image */}
                  <div className="lg:col-span-2 relative min-h-64">
                    <img
                      data-strk-img-id={`case-study-img-${cs.id}`}
                      data-strk-img={`[case-study-${cs.id}-title] [case-study-${cs.id}-category]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="500"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={cs.title}
                      className="w-full h-full object-cover min-h-64"
                    />
                    <div className="absolute top-4 left-4">
                      <span id={`case-study-${cs.id}-category`} className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">{cs.category}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-3 p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-3">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-500 text-sm">{cs.client} — {cs.country}</span>
                    </div>
                    <h2 id={`case-study-${cs.id}-title`} className="text-xl md:text-2xl font-bold text-primary-dark mb-4">{cs.title}</h2>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {cs.services.map((s) => (
                        <span key={s} className="bg-light-bg text-primary text-xs font-medium px-2.5 py-1 rounded-full">{s}</span>
                      ))}
                    </div>

                    <div className="space-y-4 mb-6">
                      <div>
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Challenge</p>
                        <p className="text-gray-600 text-sm leading-relaxed">{cs.challenge}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Our Approach</p>
                        <p className="text-gray-600 text-sm leading-relaxed">{cs.approach}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Result</p>
                        <p className="text-gray-600 text-sm leading-relaxed">{cs.result}</p>
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {cs.metrics.map((m) => (
                        <div key={m.label} className="bg-light-bg rounded-lg p-3 text-center">
                          <p className="text-primary-dark font-bold text-base">{m.value}</p>
                          <p className="text-gray-500 text-xs mt-0.5">{m.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Want Results Like These?"
        subtitle="Tell us about your sourcing project and we'll show you how we can help."
        buttonText="Get a Free Sourcing Quote"
      />
    </div>
  );
}
