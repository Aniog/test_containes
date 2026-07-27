import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Globe, Package, TrendingUp } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const caseStudies = [
  {
    id: 'cs-electronics',
    titleId: 'cs-title-electronics',
    descId: 'cs-desc-electronics',
    imgId: 'cs-img-electronics-a1b2c3',
    category: 'Electronics',
    country: 'United States',
    flag: '🇺🇸',
    title: 'US Retailer Reduces Sourcing Costs by 22%',
    challenge: 'A US-based electronics retailer was sourcing PCB assemblies through a trading company and paying above-market prices with no visibility into the actual manufacturer.',
    solution: 'We identified 4 verified PCB manufacturers, conducted factory audits, and negotiated directly with the best-fit supplier. We also implemented a pre-shipment inspection protocol.',
    results: [
      '22% reduction in unit cost',
      'Direct factory relationship established',
      'Zero defects on first 3 shipments',
      '40-container order delivered on schedule',
    ],
    metric: '22% cost reduction',
    metricIcon: TrendingUp,
  },
  {
    id: 'cs-furniture',
    titleId: 'cs-title-furniture',
    descId: 'cs-desc-furniture',
    imgId: 'cs-img-furniture-d4e5f6',
    category: 'Furniture',
    country: 'Germany',
    flag: '🇩🇪',
    title: 'German Brand Launches Private Label Furniture Line',
    challenge: 'A German furniture brand wanted to launch a private label collection but had no existing China supplier relationships and needed to meet strict EU safety standards.',
    solution: 'We sourced 3 furniture manufacturers with EU export experience, managed sample development across 12 SKUs, and coordinated CE certification testing.',
    results: [
      '12 SKUs developed and approved',
      'CE certification achieved for all products',
      'First collection delivered on time',
      'Ongoing supplier relationship established',
    ],
    metric: '12 SKUs launched',
    metricIcon: Package,
  },
  {
    id: 'cs-apparel',
    titleId: 'cs-title-apparel',
    descId: 'cs-desc-apparel',
    imgId: 'cs-img-apparel-g7h8i9',
    category: 'Apparel',
    country: 'Australia',
    flag: '🇦🇺',
    title: 'Australian Fashion Brand Scales Production 3x',
    challenge: 'An Australian fashion brand needed to scale from 500 to 1,500 units per SKU while maintaining quality standards and meeting a tight seasonal deadline.',
    solution: 'We found a compliant factory with sufficient capacity, managed the production ramp-up, and conducted in-line inspections at 30% and 70% production completion.',
    results: [
      '3x production volume achieved',
      'Quality standards maintained across all SKUs',
      'Seasonal deadline met',
      'No rework required on delivery',
    ],
    metric: '3x volume increase',
    metricIcon: TrendingUp,
  },
  {
    id: 'cs-hardware',
    titleId: 'cs-title-hardware',
    descId: 'cs-desc-hardware',
    imgId: 'cs-img-hardware-j1k2l3',
    category: 'Hardware',
    country: 'Canada',
    flag: '🇨🇦',
    title: 'Canadian Distributor Avoids Fraudulent Supplier',
    challenge: 'A Canadian hardware distributor had placed a deposit with a supplier found on Alibaba. After payment, communication became erratic and delivery dates were missed.',
    solution: 'We conducted an emergency factory visit and discovered the supplier had subcontracted to an unqualified factory. We helped the buyer recover the deposit and sourced a verified alternative.',
    results: [
      'Deposit recovered through negotiation',
      'Verified replacement supplier found in 8 days',
      'Order completed 3 weeks behind original schedule',
      'Ongoing factory audit program established',
    ],
    metric: 'Deposit recovered',
    metricIcon: CheckCircle,
  },
  {
    id: 'cs-homegoods',
    titleId: 'cs-title-homegoods',
    descId: 'cs-desc-homegoods',
    imgId: 'cs-img-homegoods-m4n5o6',
    category: 'Home Goods',
    country: 'United Kingdom',
    flag: '🇬🇧',
    title: 'UK Brand Consolidates 6 Suppliers into 2',
    challenge: 'A UK home goods brand was managing 6 different Chinese suppliers, leading to inconsistent quality, complex logistics, and high administrative overhead.',
    solution: 'We audited all 6 suppliers, identified the 2 best-performing ones, and helped the brand consolidate its product range. We also set up a consolidated shipping program.',
    results: [
      'Supplier base reduced from 6 to 2',
      'Logistics costs reduced by 18%',
      'Quality consistency improved significantly',
      'Administrative time reduced by 40%',
    ],
    metric: '18% logistics savings',
    metricIcon: TrendingUp,
  },
  {
    id: 'cs-packaging',
    titleId: 'cs-title-packaging',
    descId: 'cs-desc-packaging',
    imgId: 'cs-img-packaging-p7q8r9',
    category: 'Packaging',
    country: 'France',
    flag: '🇫🇷',
    title: 'French Cosmetics Brand Sources Custom Packaging',
    challenge: 'A French cosmetics brand needed custom glass bottles and printed packaging boxes with specific Pantone colors and embossing, with a tight 10-week lead time.',
    solution: 'We sourced specialist packaging manufacturers in Guangdong, managed the color matching and embossing approval process, and coordinated air freight for the first order.',
    results: [
      'Custom packaging approved in 3 rounds',
      'Pantone color accuracy achieved',
      'Delivered within 10-week deadline',
      'Repeat orders placed for 3 subsequent seasons',
    ],
    metric: 'On-time delivery',
    metricIcon: CheckCircle,
  },
];

export default function CaseStudies() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Header */}
      <section className="bg-navy py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-gold-accent uppercase tracking-widest mb-3">Client Results</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Case Studies
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Real projects from real clients. Each case study shows the challenge,
              our approach, and the measurable outcome.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {caseStudies.map((cs, index) => {
              const MetricIcon = cs.metricIcon;
              const isEven = index % 2 === 0;
              return (
                <div
                  key={cs.id}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className={`h-64 lg:h-auto bg-gray-100 ${!isEven ? 'lg:order-2' : ''}`}>
                      <img
                        alt={cs.title}
                        data-strk-img-id={cs.imgId}
                        data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                        data-strk-img-ratio="4x3"
                        data-strk-img-width="700"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className={`p-8 md:p-10 ${!isEven ? 'lg:order-1' : ''}`}>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="bg-navy text-white text-xs font-semibold px-3 py-1 rounded-full">
                          {cs.category}
                        </span>
                        <span className="text-sm text-gray-500 flex items-center gap-1">
                          <span>{cs.flag}</span> {cs.country}
                        </span>
                      </div>
                      <h2 id={cs.titleId} className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                        {cs.title}
                      </h2>

                      <div className="space-y-4 mb-6">
                        <div>
                          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Challenge</p>
                          <p id={cs.descId} className="text-gray-600 text-sm leading-relaxed">{cs.challenge}</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Our Approach</p>
                          <p className="text-gray-600 text-sm leading-relaxed">{cs.solution}</p>
                        </div>
                      </div>

                      <div className="border-t border-gray-100 pt-4">
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Results</p>
                        <ul className="space-y-1.5">
                          {cs.results.map((r) => (
                            <li key={r} className="flex items-start gap-2 text-sm text-gray-700">
                              <CheckCircle className="w-4 h-4 text-navy flex-shrink-0 mt-0.5" />
                              <span>{r}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-5 flex items-center gap-2 text-china-red font-semibold text-sm">
                        <MetricIcon className="w-4 h-4" />
                        <span>{cs.metric}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Want Results Like These?
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Tell us about your sourcing challenge and we will put together a plan.
          </p>
          <Link
            to="/contact"
            className="bg-china-red hover:bg-china-red-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors inline-flex items-center gap-2"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
