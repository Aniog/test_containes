import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, TrendingDown, Clock, ShieldCheck, Globe } from 'lucide-react';
import CTABanner from '../components/layout/CTABanner';

const caseStudies = [
  {
    id: 'uk-furniture',
    category: 'Furniture',
    country: 'United Kingdom',
    flag: '🇬🇧',
    title: 'UK Retailer Reduces Sourcing Costs by 22%',
    challenge: 'A mid-sized UK furniture retailer was sourcing through a trading company and paying above-market prices. They had no visibility into the actual factory and had experienced two quality failures in the previous year.',
    solution: 'We identified three verified furniture manufacturers in Guangdong, conducted factory audits, and negotiated directly with the best-fit supplier. We implemented a pre-shipment inspection protocol for all orders.',
    results: ['22% reduction in unit cost', 'Zero quality rejections in 12 months', 'Direct factory relationship established', '4-week lead time reduction'],
    metric: '22% Cost Reduction',
    metricIcon: TrendingDown,
    titleId: 'cs-uk-furniture-title',
    descId: 'cs-uk-furniture-desc',
    imgId: 'cs-uk-furniture-img-a1b2c3',
  },
  {
    id: 'us-electronics',
    category: 'Electronics',
    country: 'United States',
    flag: '🇺🇸',
    title: 'US Hardware Startup Launches First Product in 14 Weeks',
    challenge: 'A US-based hardware startup needed to move from a validated prototype to production-ready units. They had no China sourcing experience and a tight launch deadline.',
    solution: 'We sourced a qualified electronics manufacturer in Shenzhen, managed the sample and tooling process, coordinated FCC certification testing, and arranged air freight for the initial launch batch.',
    results: ['14-week prototype to production timeline', 'FCC certification obtained', 'Air freight delivery on schedule', 'Ongoing production relationship established'],
    metric: '14-Week Launch',
    metricIcon: Clock,
    titleId: 'cs-us-electronics-title',
    descId: 'cs-us-electronics-desc',
    imgId: 'cs-us-electronics-img-d4e5f6',
  },
  {
    id: 'au-apparel',
    category: 'Apparel',
    country: 'Australia',
    flag: '🇦🇺',
    title: 'Australian Brand Passes EU Compliance Audit',
    challenge: 'An Australian activewear brand wanted to expand into the EU market but needed to ensure their China-manufactured products met EU textile and chemical regulations.',
    solution: 'We audited the existing supplier for compliance readiness, arranged third-party lab testing for REACH and OEKO-TEX standards, and worked with the factory to update labeling and documentation.',
    results: ['Full EU REACH compliance achieved', 'OEKO-TEX certification obtained', 'Successful EU market entry', 'Ongoing compliance monitoring in place'],
    metric: 'EU Compliance Achieved',
    metricIcon: ShieldCheck,
    titleId: 'cs-au-apparel-title',
    descId: 'cs-au-apparel-desc',
    imgId: 'cs-au-apparel-img-g7h8i9',
  },
  {
    id: 'de-industrial',
    category: 'Industrial Equipment',
    country: 'Germany',
    flag: '🇩🇪',
    title: 'German Distributor Diversifies Supply Chain',
    challenge: 'A German industrial equipment distributor was over-reliant on a single Chinese supplier. After a production disruption, they needed to qualify alternative manufacturers quickly.',
    solution: 'We identified and audited four alternative manufacturers across Jiangsu and Zhejiang, ran parallel sample evaluations, and helped the client establish a dual-sourcing strategy.',
    results: ['3 qualified alternative suppliers identified', 'Dual-sourcing strategy implemented', 'Supply chain risk significantly reduced', 'Competitive pricing maintained'],
    metric: 'Supply Chain Secured',
    metricIcon: Globe,
    titleId: 'cs-de-industrial-title',
    descId: 'cs-de-industrial-desc',
    imgId: 'cs-de-industrial-img-j1k2l3',
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
      <section className="bg-primary py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-blue-300 font-semibold text-sm uppercase tracking-wider">Client Results</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-5">Case Studies</h1>
          <p className="text-blue-100 text-xl max-w-2xl mx-auto">
            Real sourcing projects, real outcomes. Here is how we have helped buyers across industries and markets.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 md:py-28 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-12">
            {caseStudies.map((cs, i) => {
              const MetricIcon = cs.metricIcon;
              return (
                <div key={cs.id} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                  <div className="grid grid-cols-1 lg:grid-cols-5">
                    <div className="lg:col-span-2 h-64 lg:h-auto bg-gray-100 overflow-hidden">
                      <img
                        data-strk-img-id={cs.imgId}
                        data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="600"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={cs.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="lg:col-span-3 p-8 md:p-10">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-xs font-semibold text-primary bg-blue-50 px-3 py-1 rounded-full">{cs.category}</span>
                        <span className="text-sm text-gray-400">{cs.flag} {cs.country}</span>
                      </div>
                      <h2 id={cs.titleId} className="text-2xl font-bold text-text-dark mb-6">{cs.title}</h2>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        {[
                          { label: 'Challenge', text: cs.challenge },
                          { label: 'Our Solution', text: cs.solution },
                        ].map(({ label, text }) => (
                          <div key={label} className="md:col-span-1">
                            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">{label}</h3>
                            <p id={label === 'Challenge' ? undefined : cs.descId} className="text-gray-600 text-sm leading-relaxed">{text}</p>
                          </div>
                        ))}
                        <div>
                          <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Results</h3>
                          <ul className="flex flex-col gap-1.5">
                            {cs.results.map((r) => (
                              <li key={r} className="flex items-start gap-2 text-sm text-gray-600">
                                <span className="text-success mt-0.5">✓</span>
                                {r}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                        <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                          <MetricIcon className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-bold text-primary">{cs.metric}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to See Results Like These?"
        subtitle="Tell us about your sourcing project and we will put together a plan."
      />
    </div>
  );
}
