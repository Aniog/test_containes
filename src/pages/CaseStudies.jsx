import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, TrendingDown, Clock, ShieldCheck } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import CtaBanner from '../components/shared/CtaBanner';
import SectionHeader from '../components/shared/SectionHeader';

const cases = [
  {
    id: 'furniture-uk',
    client: 'UK Furniture Retailer',
    category: 'Furniture & Home Goods',
    country: '🇬🇧 United Kingdom',
    challenge:
      'A mid-sized UK furniture retailer was sourcing from a single supplier in Foshan with no on-site verification. They experienced inconsistent quality, missed deadlines, and had no visibility into production.',
    solution:
      'We conducted factory audits on 4 alternative suppliers, identified 2 that met their quality and capacity requirements, and set up a production monitoring schedule with monthly on-site visits.',
    results: [
      'Unit cost reduced by 22% through competitive supplier selection',
      'Lead time cut from 16 to 10 weeks',
      'Zero quality rejections in the first 3 orders',
      'Ongoing monthly production reports provided',
    ],
    metric: '22% cost reduction',
    icon: TrendingDown,
    titleId: 'case-furniture-uk-title',
    descId: 'case-furniture-uk-desc',
    imgId: 'case-img-furniture-uk-e5f6g7',
  },
  {
    id: 'electronics-us',
    client: 'US Consumer Electronics Brand',
    category: 'Electronics',
    country: '🇺🇸 United States',
    challenge:
      'A US startup launching a smart home product needed to find a manufacturer capable of CE and FCC certification. Previous attempts with two factories had failed certification testing, costing significant time and money.',
    solution:
      'We identified 3 factories with proven certification track records, conducted technical capability audits, and coordinated directly with the certification lab to ensure the factory understood the requirements before production began.',
    results: [
      'Passed CE and FCC certification on first attempt',
      'Saved an estimated $40,000 in re-testing costs',
      'Production started 6 weeks ahead of original schedule',
      'Ongoing supplier relationship established',
    ],
    metric: 'First-pass certification',
    icon: ShieldCheck,
    titleId: 'case-electronics-us-title',
    descId: 'case-electronics-us-desc',
    imgId: 'case-img-electronics-us-h8i9j0',
  },
  {
    id: 'apparel-au',
    client: 'Australian Apparel Brand',
    category: 'Apparel & Textiles',
    country: '🇦🇺 Australia',
    challenge:
      'An Australian fashion brand had placed a $120,000 order with a Guangzhou factory. During a routine during-production inspection, our team discovered that the factory had substituted a lower-grade fabric without notifying the buyer.',
    solution:
      'We immediately flagged the issue, documented the substitution with photos and fabric test results, and negotiated with the factory to replace all affected materials at no additional cost to the buyer.',
    results: [
      'Full fabric replacement secured at factory\'s expense',
      '$120,000 order saved from potential rejection',
      'Delivery delayed by only 5 days',
      'Factory placed on enhanced monitoring for future orders',
    ],
    metric: '$120K order protected',
    icon: ShieldCheck,
    titleId: 'case-apparel-au-title',
    descId: 'case-apparel-au-desc',
    imgId: 'case-img-apparel-au-k1l2m3',
  },
  {
    id: 'auto-de',
    client: 'German Auto Parts Distributor',
    category: 'Auto Parts',
    country: '🇩🇪 Germany',
    challenge:
      'A German distributor needed to source 15 different auto part SKUs from China but lacked the internal resources to manage multiple supplier relationships and ensure consistent quality across all product lines.',
    solution:
      'We consolidated sourcing across 3 verified factories, set up a unified quality inspection protocol, and provided a single point of contact for all supplier communication and logistics coordination.',
    results: [
      'All 15 SKUs sourced from 3 verified suppliers',
      'Inspection pass rate of 97% across all product lines',
      'Shipping consolidated, reducing freight costs by 18%',
      'Monthly supplier performance reports delivered',
    ],
    metric: '18% freight savings',
    icon: TrendingDown,
    titleId: 'case-auto-de-title',
    descId: 'case-auto-de-desc',
    imgId: 'case-img-auto-de-n4o5p6',
  },
  {
    id: 'toys-ca',
    client: 'Canadian Toy Importer',
    category: 'Toys & Baby Products',
    country: '🇨🇦 Canada',
    challenge:
      'A Canadian toy importer needed to verify that their existing supplier met EN71 and ASTM safety standards following a regulatory inquiry. They had no documentation from the factory.',
    solution:
      'We conducted a compliance audit, coordinated third-party lab testing for all product lines, and worked with the factory to obtain and organize all required safety documentation.',
    results: [
      'Full EN71 and ASTM compliance documentation obtained',
      'Regulatory inquiry resolved without product recall',
      'Factory compliance management system established',
      'Annual audit schedule put in place',
    ],
    metric: 'Full compliance achieved',
    icon: ShieldCheck,
    titleId: 'case-toys-ca-title',
    descId: 'case-toys-ca-desc',
    imgId: 'case-img-toys-ca-q7r8s9',
  },
  {
    id: 'packaging-sg',
    client: 'Singapore FMCG Brand',
    category: 'Packaging & Printing',
    country: '🇸🇬 Singapore',
    challenge:
      'A Singapore-based FMCG brand needed custom packaging produced in China with tight color accuracy requirements. Previous suppliers had delivered inconsistent Pantone color matching across production runs.',
    solution:
      'We sourced 2 specialist packaging factories with color management systems, conducted press checks during production, and implemented a color approval workflow with the buyer before each run.',
    results: [
      'Color consistency achieved across 6 production runs',
      'Rejection rate reduced from 12% to under 1%',
      'Lead time reduced by 3 weeks through process improvements',
      'Cost per unit reduced by 14%',
    ],
    metric: '99%+ color consistency',
    icon: TrendingDown,
    titleId: 'case-packaging-sg-title',
    descId: 'case-packaging-sg-desc',
    imgId: 'case-img-packaging-sg-t0u1v2',
  },
];

export default function CaseStudies() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Header */}
      <section className="bg-brand-navy py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-red-400 text-sm font-semibold uppercase tracking-widest">Case Studies</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">Real Results for Real Buyers</h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              Practical examples of how we've helped businesses across different industries source smarter from China.
            </p>
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {cases.map((c, idx) => {
            const Icon = c.icon;
            const isEven = idx % 2 === 0;
            return (
              <div key={c.id} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                <div className={`grid grid-cols-1 lg:grid-cols-2`}>
                  <div className={`h-64 lg:h-auto bg-gray-100 overflow-hidden ${!isEven ? 'lg:order-2' : ''}`}>
                    <img
                      data-strk-img-id={c.imgId}
                      data-strk-img={`[${c.descId}] [${c.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={c.client}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className={`p-8 lg:p-10 ${!isEven ? 'lg:order-1' : ''}`}>
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className="text-xs font-semibold bg-brand-light text-brand-red px-2 py-1 rounded">
                        {c.category}
                      </span>
                      <span className="text-xs text-brand-slate">{c.country}</span>
                    </div>
                    <h2 id={c.titleId} className="text-2xl font-bold text-brand-navy mb-1">{c.client}</h2>
                    <div className="flex items-center gap-2 mb-5">
                      <Icon className="w-4 h-4 text-brand-red" />
                      <span className="text-brand-red font-semibold text-sm">{c.metric}</span>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-brand-navy font-semibold text-sm uppercase tracking-wide mb-1">Challenge</h4>
                        <p id={c.descId} className="text-brand-slate text-sm leading-relaxed">{c.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-brand-navy font-semibold text-sm uppercase tracking-wide mb-1">Our Approach</h4>
                        <p className="text-brand-slate text-sm leading-relaxed">{c.solution}</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-brand-navy font-semibold text-sm uppercase tracking-wide mb-2">Results</h4>
                      <ul className="space-y-1">
                        {c.results.map((r) => (
                          <li key={r} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-brand-red flex-shrink-0 mt-0.5" />
                            <span className="text-brand-slate text-sm">{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CtaBanner
        title="Want Results Like These?"
        subtitle="Tell us about your sourcing challenge and we'll put together a plan."
        buttonText="Get a Free Sourcing Quote"
      />
    </div>
  );
}
