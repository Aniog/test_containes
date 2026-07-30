import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, Star, TrendingUp, Clock, ShieldCheck } from 'lucide-react';

const cases = [
  {
    id: 'uk-furniture',
    category: 'Furniture',
    country: 'United Kingdom',
    title: 'UK Home Goods Retailer Cuts Sourcing Cost by 22%',
    challenge: 'A UK-based home goods retailer was sourcing sofas through a trading company and experiencing inconsistent quality and high margins. They needed a direct factory relationship.',
    solution: 'We audited 6 sofa factories in Foshan, shortlisted 2, and negotiated direct pricing. We set up a pre-shipment inspection process and managed 3 production runs over 12 months.',
    result: '22% reduction in unit cost, zero defect rate on final inspection, on-time delivery for all 3 orders.',
    metrics: [
      { icon: TrendingUp, label: 'Cost Reduction', value: '22%' },
      { icon: ShieldCheck, label: 'Defect Rate', value: '0%' },
      { icon: Clock, label: 'Lead Time', value: 'On Schedule' },
    ],
    imgId: 'cs-uk-furniture-img-a1b2',
    titleId: 'cs-uk-furniture-title',
    descId: 'cs-uk-furniture-desc',
  },
  {
    id: 'us-electronics',
    category: 'Electronics',
    country: 'United States',
    title: 'US Brand Launches Private Label Wireless Earbuds',
    challenge: 'An American consumer electronics startup needed an OEM partner to manufacture wireless earbuds under their brand. They had no prior China sourcing experience.',
    solution: 'We identified a qualified electronics factory in Shenzhen, managed tooling and sampling, coordinated FCC and CE certification testing, and oversaw the first production run of 5,000 units.',
    result: 'Product launched in 14 weeks. Passed FCC and CE certification on first submission. Reorder placed within 3 months.',
    metrics: [
      { icon: Clock, label: 'Time to Launch', value: '14 Weeks' },
      { icon: ShieldCheck, label: 'Certifications', value: 'FCC + CE' },
      { icon: TrendingUp, label: 'Reorder Rate', value: '100%' },
    ],
    imgId: 'cs-us-electronics-img-c3d4',
    titleId: 'cs-us-electronics-title',
    descId: 'cs-us-electronics-desc',
  },
  {
    id: 'au-apparel',
    category: 'Apparel',
    country: 'Australia',
    title: 'Australian Fashion Brand Reduces Defect Rate from 8% to Under 1%',
    challenge: 'An Australian fashion brand was experiencing high defect rates and inconsistent sizing across seasonal orders. Their existing supplier had no formal QC process.',
    solution: 'We introduced an in-line inspection process, created a detailed quality checklist, and trained the factory\'s QC team. We also sourced a backup supplier for risk management.',
    result: 'Defect rate dropped from 8% to under 1% within two seasons. Customer return rate fell by 60%.',
    metrics: [
      { icon: ShieldCheck, label: 'Defect Rate', value: 'Under 1%' },
      { icon: TrendingUp, label: 'Return Rate Drop', value: '60%' },
      { icon: Star, label: 'Seasons Managed', value: '4+' },
    ],
    imgId: 'cs-au-apparel-img-e5f6',
    titleId: 'cs-au-apparel-title',
    descId: 'cs-au-apparel-desc',
  },
  {
    id: 'de-machinery',
    category: 'Machinery',
    country: 'Germany',
    title: 'German Distributor Sources Industrial Pumps at Competitive Pricing',
    challenge: 'A German industrial distributor needed to source hydraulic pumps from China to compete on price in the European market. They required CE certification and specific technical standards.',
    solution: 'We identified 4 pump manufacturers in Zhejiang, conducted factory audits, verified CE documentation, and negotiated a supply agreement with a 12-month price lock.',
    result: '31% lower unit cost vs. previous European supplier. CE-certified products. Consistent delivery within agreed lead times.',
    metrics: [
      { icon: TrendingUp, label: 'Cost Saving', value: '31%' },
      { icon: ShieldCheck, label: 'Certification', value: 'CE Verified' },
      { icon: Clock, label: 'Price Lock', value: '12 Months' },
    ],
    imgId: 'cs-de-machinery-img-g7h8',
    titleId: 'cs-de-machinery-title',
    descId: 'cs-de-machinery-desc',
  },
  {
    id: 'ca-toys',
    category: 'Toys',
    country: 'Canada',
    title: 'Canadian Toy Brand Passes ASTM Safety Testing First Time',
    challenge: 'A Canadian toy company needed to source educational wooden toys that met ASTM F963 safety standards. Previous attempts with other agents had resulted in failed testing.',
    solution: 'We sourced a factory with prior ASTM experience, reviewed their material suppliers, and coordinated pre-production testing with a certified lab before the full production run.',
    result: 'Passed ASTM F963 on first submission. Production completed on schedule. Product listed in major Canadian retail chains.',
    metrics: [
      { icon: ShieldCheck, label: 'ASTM Result', value: 'Pass (1st Try)' },
      { icon: Clock, label: 'Delivery', value: 'On Schedule' },
      { icon: Star, label: 'Retail Listings', value: 'Major Chains' },
    ],
    imgId: 'cs-ca-toys-img-i9j0',
    titleId: 'cs-ca-toys-title',
    descId: 'cs-ca-toys-desc',
  },
  {
    id: 'sg-health',
    category: 'Health & Beauty',
    country: 'Singapore',
    title: 'Singapore Brand Launches Private Label Skincare Line',
    challenge: 'A Singapore-based beauty brand wanted to launch a private label skincare range manufactured in China. They needed a factory with GMP certification and experience in export markets.',
    solution: 'We sourced a GMP-certified cosmetics factory in Guangzhou, managed formulation sampling, coordinated SGS testing, and oversaw packaging development and production.',
    result: 'Full product line of 8 SKUs launched within 18 weeks. All products passed SGS safety testing. Brand now reorders quarterly.',
    metrics: [
      { icon: Clock, label: 'Time to Launch', value: '18 Weeks' },
      { icon: ShieldCheck, label: 'SKUs Launched', value: '8 Products' },
      { icon: TrendingUp, label: 'Reorder Cycle', value: 'Quarterly' },
    ],
    imgId: 'cs-sg-health-img-k1l2',
    titleId: 'cs-sg-health-title',
    descId: 'cs-sg-health-desc',
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
      <section className="bg-brand-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-brand-accent font-semibold text-sm uppercase tracking-wider mb-3">Client Results</p>
            <h1 className="text-4xl lg:text-5xl font-extrabold mb-4 text-white">Case Studies</h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              Real projects, real results. Here's how we've helped buyers across different industries source successfully from China.
            </p>
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {cases.map((cs, i) => (
            <div key={cs.id} className="rounded-xl border border-brand-border overflow-hidden">
              <div className="grid lg:grid-cols-5">
                <div className="lg:col-span-2 aspect-[4/3] lg:aspect-auto overflow-hidden bg-brand-light">
                  <img
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cs.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="lg:col-span-3 p-6 lg:p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-brand-light text-brand-blue text-xs font-semibold px-2.5 py-1 rounded-full">{cs.category}</span>
                    <span className="text-brand-muted text-xs">{cs.country}</span>
                  </div>
                  <h2 id={cs.titleId} className="text-xl lg:text-2xl font-extrabold text-brand-navy mb-4">{cs.title}</h2>

                  <div className="space-y-3 mb-5">
                    <div>
                      <p className="text-xs font-semibold text-brand-muted uppercase tracking-wider mb-1">Challenge</p>
                      <p id={cs.descId} className="text-brand-navy text-sm leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-brand-muted uppercase tracking-wider mb-1">Our Approach</p>
                      <p className="text-brand-navy text-sm leading-relaxed">{cs.solution}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-brand-muted uppercase tracking-wider mb-1">Result</p>
                      <p className="text-brand-navy text-sm leading-relaxed font-medium">{cs.result}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    {cs.metrics.map(({ icon: Icon, label, value }) => (
                      <div key={label} className="bg-brand-light rounded-lg p-3 text-center">
                        <Icon className="w-4 h-4 text-brand-blue mx-auto mb-1" />
                        <div className="text-brand-navy font-bold text-sm">{value}</div>
                        <div className="text-brand-muted text-xs">{label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-blue py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Ready to Get Similar Results?</h2>
          <p className="text-blue-100 text-lg mb-8">
            Tell us about your sourcing project and we'll show you how we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-accent text-white px-8 py-4 rounded font-bold hover:bg-amber-600 transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
