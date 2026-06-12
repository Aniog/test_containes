import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { CheckCircle, ArrowRight, TrendingUp, Clock, ShieldCheck } from 'lucide-react';

const caseStudies = [
  {
    id: 'furniture-uk',
    category: 'Furniture & Home Decor',
    country: 'United Kingdom',
    title: 'UK Retailer Cuts Sourcing Costs by 28%',
    challenge: 'A UK-based furniture importer was sourcing through a trading company and paying inflated prices. They had experienced two quality failures in the previous year and needed a more reliable supply chain.',
    solution: 'We identified 3 verified furniture factories in Foshan, conducted on-site audits, and negotiated direct factory pricing. We implemented a pre-shipment inspection protocol for every order.',
    results: [
      '28% reduction in unit costs vs. previous trading company',
      'Zero defect shipments over 18 months',
      'Lead time reduced from 90 to 65 days',
      'Established direct relationships with 2 long-term suppliers',
    ],
    metric: '28% Cost Reduction',
    metricIcon: TrendingUp,
    titleId: 'cs-furniture-uk-title',
    descId: 'cs-furniture-uk-desc',
    imgId: 'cs-furniture-uk-img-a1b2c3',
  },
  {
    id: 'electronics-us',
    category: 'Electronics',
    country: 'United States',
    title: 'US Brand Launches Private Label Electronics Line',
    challenge: 'An American consumer electronics startup needed to develop and manufacture a line of smart home devices under their own brand. They had no prior experience sourcing from China.',
    solution: 'We managed the full OEM process — factory selection, product development, mold production, compliance testing (FCC, CE), and branded packaging. We provided weekly updates throughout.',
    results: [
      'Product launched on schedule, 4 months from inquiry to shipment',
      'Passed all FCC and CE certifications on first submission',
      'Achieved target unit cost within 5% of budget',
      'Established ongoing OEM partnership with factory',
    ],
    metric: 'On-Time Launch',
    metricIcon: Clock,
    titleId: 'cs-electronics-us-title',
    descId: 'cs-electronics-us-desc',
    imgId: 'cs-electronics-us-img-d4e5f6',
  },
  {
    id: 'clothing-au',
    category: 'Clothing & Textiles',
    country: 'Australia',
    title: 'Australian Fashion Brand Scales Apparel Production',
    challenge: 'A growing Australian activewear brand needed to scale from 500 to 5,000 units per style while maintaining consistent quality. Their previous factory had failed to meet quality standards.',
    solution: 'We sourced a BSCI-certified apparel factory in Guangzhou, conducted a full audit, and implemented in-line and final inspections for every production run.',
    results: [
      'Consistent quality across 12 SKUs over 3 seasons',
      'On-time delivery rate of 96%',
      'Zero customer complaints related to manufacturing defects',
      'Scaled to 8,000 units per style in second year',
    ],
    metric: '96% On-Time Delivery',
    metricIcon: Clock,
    titleId: 'cs-clothing-au-title',
    descId: 'cs-clothing-au-desc',
    imgId: 'cs-clothing-au-img-g7h8i9',
  },
  {
    id: 'toys-ca',
    category: 'Toys & Baby Products',
    country: 'Canada',
    title: 'Canadian Toy Importer Passes Safety Compliance',
    challenge: 'A Canadian toy importer needed to source educational toys that met strict ASTM F963 and EN71 safety standards. Previous suppliers had failed compliance testing.',
    solution: 'We identified factories with existing ASTM and EN71 certifications, arranged third-party lab testing through SGS, and implemented a pre-shipment inspection protocol.',
    results: [
      'All products passed ASTM F963 and EN71 on first test',
      'Reduced compliance testing costs by 35%',
      'Established a reliable supply chain for 6 product lines',
      'Zero product recalls or safety incidents',
    ],
    metric: '100% Compliance Pass Rate',
    metricIcon: ShieldCheck,
    titleId: 'cs-toys-ca-title',
    descId: 'cs-toys-ca-desc',
    imgId: 'cs-toys-ca-img-j1k2l3',
  },
  {
    id: 'machinery-de',
    category: 'Machinery & Industrial',
    country: 'Germany',
    title: 'German Distributor Sources Industrial Equipment',
    challenge: 'A German industrial equipment distributor needed to source CNC machines and tooling at competitive prices without compromising on precision and reliability.',
    solution: 'We identified 4 qualified machinery manufacturers, conducted technical audits with a mechanical engineer, and arranged factory acceptance testing before shipment.',
    results: [
      'Sourced 3 product lines at 40% below European manufacturing cost',
      'All machines passed factory acceptance testing',
      'Established a 2-year supply agreement with primary factory',
      'Ongoing technical support coordination',
    ],
    metric: '40% Cost Savings',
    metricIcon: TrendingUp,
    titleId: 'cs-machinery-de-title',
    descId: 'cs-machinery-de-desc',
    imgId: 'cs-machinery-de-img-m4n5o6',
  },
  {
    id: 'health-fr',
    category: 'Health & Beauty',
    country: 'France',
    title: 'French Beauty Brand Launches Private Label Skincare',
    challenge: 'A French beauty brand wanted to develop a private label skincare line manufactured in China with EU-compliant formulations and packaging.',
    solution: 'We sourced a GMP-certified cosmetics factory, managed formulation development, arranged EU compliance testing, and coordinated branded packaging production.',
    results: [
      'Full product line launched within 6 months',
      'All products passed EU cosmetics regulation requirements',
      'Achieved 45% gross margin on finished products',
      'Ongoing OEM partnership for seasonal product launches',
    ],
    metric: '6-Month Launch Timeline',
    metricIcon: Clock,
    titleId: 'cs-health-fr-title',
    descId: 'cs-health-fr-desc',
    imgId: 'cs-health-fr-img-p7q8r9',
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
      <section className="bg-gradient-to-br from-brand-navy to-brand-blue text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-gold bg-white/10 px-3 py-1 rounded-full">Case Studies</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-4">
              Real Results for Real Buyers
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              See how we've helped businesses across industries and countries source smarter, reduce risk, and build reliable supply chains from China.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="bg-brand-gray py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((cs) => {
              const MetricIcon = cs.metricIcon;
              return (
                <div key={cs.id} className="bg-white rounded-2xl border border-brand-border overflow-hidden hover:shadow-md transition-shadow">
                  <div className="aspect-video overflow-hidden bg-gray-100">
                    <img
                      data-strk-img-id={cs.imgId}
                      data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={cs.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs font-semibold text-brand-blue bg-blue-50 px-2 py-1 rounded-full">{cs.category}</span>
                      <span className="text-xs text-brand-muted">{cs.country}</span>
                    </div>
                    <h2 id={cs.titleId} className="text-xl font-bold text-brand-navy mb-4">{cs.title}</h2>

                    <div className="space-y-4 mb-5">
                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-muted mb-1">Challenge</h4>
                        <p id={cs.descId} className="text-brand-muted text-sm leading-relaxed">{cs.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-muted mb-1">Our Solution</h4>
                        <p className="text-brand-muted text-sm leading-relaxed">{cs.solution}</p>
                      </div>
                    </div>

                    <div className="bg-brand-gray rounded-xl p-4 mb-5">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-muted mb-3">Results</h4>
                      <ul className="space-y-1.5">
                        {cs.results.map((r) => (
                          <li key={r} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-brand-text text-sm">{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center gap-2 bg-brand-blue/5 border border-brand-blue/20 rounded-lg px-4 py-3">
                      <MetricIcon className="w-5 h-5 text-brand-blue flex-shrink-0" />
                      <span className="text-brand-blue font-semibold text-sm">{cs.metric}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-brand-navy mb-4">Ready to Write Your Own Success Story?</h2>
          <p className="text-brand-muted mb-8">
            Contact us today and let's discuss how we can help you source smarter from China.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-red hover:bg-red-700 text-white font-bold px-8 py-4 rounded-lg transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
