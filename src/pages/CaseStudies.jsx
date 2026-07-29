import { useEffect, useRef } from 'react';
import { ArrowRight, TrendingDown, Clock, ShieldCheck, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Button, SectionHeader, Card, Badge, PageHero } from '@/components/ui/index.jsx';

const caseStudies = [
  {
    id: 'cs-uk-furniture',
    titleId: 'cs-uk-furniture-title',
    descId: 'cs-uk-furniture-desc',
    imgId: 'cs-uk-furniture-img-3a7b1c',
    client: 'UK Furniture Importer',
    country: '🇬🇧 United Kingdom',
    category: 'Furniture',
    headline: 'Reduced Sourcing Costs by 22% and Eliminated Quality Defects',
    challenge: 'The client had been working with a trading company that was marking up prices significantly and providing inconsistent quality. They had received two shipments with defects that required costly returns.',
    solution: 'We identified 4 direct manufacturers in Foshan, conducted factory audits, and negotiated directly with the best-fit supplier. We implemented pre-shipment inspections on every order.',
    results: [
      '22% reduction in unit cost by eliminating the trading company middleman',
      'Zero defect rate across 6 subsequent shipments',
      'Lead time reduced from 90 to 65 days',
      'Ongoing relationship with 2 verified backup suppliers',
    ],
    metrics: [
      { label: 'Cost Reduction', value: '22%', icon: TrendingDown },
      { label: 'Defect Rate', value: '0%', icon: ShieldCheck },
      { label: 'Lead Time', value: '−25 days', icon: Clock },
    ],
  },
  {
    id: 'cs-us-electronics',
    titleId: 'cs-us-electronics-title',
    descId: 'cs-us-electronics-desc',
    imgId: 'cs-us-electronics-img-9c4d2e',
    client: 'US Electronics Brand',
    country: '🇺🇸 United States',
    category: 'Electronics',
    headline: 'Launched a New Product Line in 90 Days with Full Compliance Documentation',
    challenge: 'A startup electronics brand needed to launch a new Bluetooth speaker line on Amazon within 90 days. They had no existing supplier relationships and needed FCC/CE compliance documentation.',
    solution: 'We sourced 3 qualified manufacturers in Shenzhen, coordinated sample production, managed compliance testing, and arranged Amazon FBA-ready packaging and labeling.',
    results: [
      'Product launched on Amazon within 87 days of initial inquiry',
      'Full FCC and CE compliance documentation obtained',
      'Amazon FBA-ready packaging with FNSKU labels',
      'First order of 2,000 units delivered with 0 returns',
    ],
    metrics: [
      { label: 'Time to Launch', value: '87 days', icon: Clock },
      { label: 'Return Rate', value: '0%', icon: ShieldCheck },
      { label: 'Units Delivered', value: '2,000', icon: Star },
    ],
  },
  {
    id: 'cs-fr-textiles',
    titleId: 'cs-fr-textiles-title',
    descId: 'cs-fr-textiles-desc',
    imgId: 'cs-fr-textiles-img-5e8f3a',
    client: 'French Fashion Retailer',
    country: '🇫🇷 France',
    category: 'Textiles',
    headline: 'Sourced 3 EU-Certified Textile Factories, Cutting Lead Times by 30%',
    challenge: 'The retailer needed to diversify their supplier base and find factories that could meet EU REACH and OEKO-TEX standards. Their existing supplier had long lead times and poor communication.',
    solution: 'We audited 8 textile factories in Guangzhou and Hangzhou, verified OEKO-TEX and REACH compliance, and established relationships with 3 certified suppliers with staggered production capacity.',
    results: [
      '3 certified factories meeting EU REACH and OEKO-TEX standards',
      '30% reduction in average lead time',
      'Improved communication through dedicated bilingual account manager',
      'Backup supplier capacity secured for peak season orders',
    ],
    metrics: [
      { label: 'Lead Time Reduction', value: '30%', icon: Clock },
      { label: 'Certified Factories', value: '3', icon: ShieldCheck },
      { label: 'Standards Met', value: 'EU REACH', icon: Star },
    ],
  },
  {
    id: 'cs-au-hardware',
    titleId: 'cs-au-hardware-title',
    descId: 'cs-au-hardware-desc',
    imgId: 'cs-au-hardware-img-2b6c4d',
    client: 'Australian Hardware Distributor',
    country: '🇦🇺 Australia',
    category: 'Hardware',
    headline: 'Consolidated 5 Suppliers into 2 Shipments, Saving $18,000 in Freight',
    challenge: 'The distributor was placing orders with 5 different suppliers and shipping each separately, resulting in high freight costs and complex logistics management.',
    solution: 'We consolidated all orders through our Guangzhou warehouse, coordinated production timelines to align shipment dates, and arranged two consolidated sea freight shipments.',
    results: [
      '$18,000 saved in freight costs through consolidation',
      'Logistics management simplified from 5 shipments to 2',
      'All suppliers coordinated to meet aligned delivery windows',
      'Full documentation and customs clearance support provided',
    ],
    metrics: [
      { label: 'Freight Savings', value: '$18K', icon: TrendingDown },
      { label: 'Shipments', value: '5 → 2', icon: Clock },
      { label: 'Suppliers Managed', value: '5', icon: ShieldCheck },
    ],
  },
];

export default function CaseStudies() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      <PageHero
        eyebrow="Case Studies"
        title="Real Results for Real Buyers"
        subtitle="See how we've helped importers across industries reduce costs, improve quality, and scale their sourcing operations."
      />

      {/* Case Studies */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {caseStudies.map((cs, i) => (
            <div key={cs.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className={`grid grid-cols-1 lg:grid-cols-2 ${i % 2 === 1 ? '' : ''}`}>
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <img
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cs.client}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="navy">{cs.category}</Badge>
                  </div>
                </div>
                <div className="p-8 lg:p-10">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm text-gray-500">{cs.country}</span>
                    <span className="text-gray-300">·</span>
                    <span className="text-sm font-medium text-steel">{cs.client}</span>
                  </div>
                  <h2 id={cs.titleId} className="text-xl md:text-2xl font-bold text-navy mb-4">
                    {cs.headline}
                  </h2>

                  {/* Metrics */}
                  <div className="flex flex-wrap gap-4 mb-6">
                    {cs.metrics.map((m) => (
                      <div key={m.label} className="bg-surface-alt rounded-xl px-4 py-3 text-center">
                        <div className="text-xl font-bold text-brand-red">{m.value}</div>
                        <div className="text-xs text-gray-500">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">Challenge</h4>
                      <p id={cs.descId} className="text-gray-600 text-sm leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">Our Solution</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{cs.solution}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Results</h4>
                      <ul className="space-y-1">
                        {cs.results.map((r) => (
                          <li key={r} className="flex items-start gap-2 text-sm text-gray-700">
                            <span className="text-green-600 font-bold mt-0.5">✓</span>
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Want Results Like These?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Tell us about your sourcing challenge and we'll show you how we can help.
          </p>
          <Button to="/contact" variant="primary" size="lg">
            Start Your Sourcing Project <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}
