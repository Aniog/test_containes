import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, TrendingDown, Clock, ShieldCheck, Star } from 'lucide-react';

const cases = [
  {
    id: 'furniture-usa',
    industry: 'Furniture',
    country: 'United States',
    flag: '🇺🇸',
    challenge: 'A US-based furniture retailer needed to source solid wood dining sets at competitive prices while meeting CARB Phase 2 formaldehyde emission standards.',
    solution: 'We identified 4 qualified factories in Guangdong, conducted on-site audits, and arranged sample production. We verified CARB certification and managed pre-shipment inspection for the first container.',
    result: '22% reduction in unit cost vs. previous supplier. Zero compliance issues on first shipment. Ongoing relationship with quarterly orders.',
    metrics: [
      { label: 'Cost Reduction', value: '22%', icon: TrendingDown },
      { label: 'Lead Time', value: '35 days', icon: Clock },
      { label: 'Defect Rate', value: '0.3%', icon: ShieldCheck },
    ],
    imgId: 'cs-furniture-usa-img-a1b2c3',
    titleId: 'cs-furniture-usa-title',
    descId: 'cs-furniture-usa-desc',
  },
  {
    id: 'electronics-germany',
    industry: 'Consumer Electronics',
    country: 'Germany',
    flag: '🇩🇪',
    challenge: 'A German electronics distributor needed CE-certified Bluetooth speakers with custom branding for a retail chain launch. Timeline was tight — 8 weeks to first delivery.',
    solution: 'We sourced a factory with existing CE certification and OEM experience. We managed sample approval, packaging design coordination, and pre-shipment inspection within the required timeline.',
    result: 'CE-certified supplier confirmed within 3 weeks. First shipment of 5,000 units delivered on schedule with zero defects reported.',
    metrics: [
      { label: 'Supplier Found', value: '3 weeks', icon: Clock },
      { label: 'Defects', value: '0', icon: ShieldCheck },
      { label: 'On-Time Delivery', value: '100%', icon: Star },
    ],
    imgId: 'cs-electronics-de-img-d4e5f6',
    titleId: 'cs-electronics-de-title',
    descId: 'cs-electronics-de-desc',
  },
  {
    id: 'apparel-australia',
    industry: 'Apparel & Textiles',
    country: 'Australia',
    flag: '🇦🇺',
    challenge: 'An Australian activewear brand needed a reliable factory for custom-printed sportswear with consistent quality across multiple production runs.',
    solution: 'We audited 6 factories in Fujian and Guangdong, selected one with strong export history, and established a QC checklist for each production run. We conduct DUPRO and PSI for every order.',
    result: '4 production runs completed with consistent quality. Average defect rate below 1%. Brand has since expanded SKU range with the same factory.',
    metrics: [
      { label: 'Production Runs', value: '4', icon: ShieldCheck },
      { label: 'Defect Rate', value: '<1%', icon: Star },
      { label: 'SKU Growth', value: '+60%', icon: TrendingDown },
    ],
    imgId: 'cs-apparel-au-img-g7h8i9',
    titleId: 'cs-apparel-au-title',
    descId: 'cs-apparel-au-desc',
  },
  {
    id: 'hardware-uk',
    industry: 'Hardware & Tools',
    country: 'United Kingdom',
    flag: '🇬🇧',
    challenge: 'A UK tool distributor was receiving inconsistent quality from their existing Chinese supplier and needed to either fix the relationship or find an alternative.',
    solution: 'We conducted a factory audit of the existing supplier and identified root causes of quality issues. We also sourced two alternative factories as backup options. The buyer chose to switch suppliers.',
    result: 'New supplier onboarded within 6 weeks. Quality defect rate dropped from 4.2% to 0.8%. Buyer saved on returns and customer complaints.',
    metrics: [
      { label: 'Defect Rate Drop', value: '4.2%→0.8%', icon: TrendingDown },
      { label: 'Onboarding Time', value: '6 weeks', icon: Clock },
      { label: 'Returns Reduced', value: '80%', icon: ShieldCheck },
    ],
    imgId: 'cs-hardware-uk-img-j1k2l3',
    titleId: 'cs-hardware-uk-title',
    descId: 'cs-hardware-uk-desc',
  },
  {
    id: 'toys-canada',
    industry: 'Toys',
    country: 'Canada',
    flag: '🇨🇦',
    challenge: 'A Canadian toy importer needed EN 71 and ASTM F963-certified plush toys for a major retail chain. The retailer required factory audit documentation.',
    solution: 'We sourced a BSCI-audited factory with existing EN 71 and ASTM certifications. We provided full factory audit documentation and conducted pre-shipment inspection with chemical testing coordination.',
    result: 'Retail chain accepted factory documentation. First order of 10,000 units passed all compliance checks. Buyer now places seasonal orders twice per year.',
    metrics: [
      { label: 'Compliance', value: '100%', icon: ShieldCheck },
      { label: 'Units Shipped', value: '10,000', icon: Star },
      { label: 'Repeat Orders', value: '2x/year', icon: Clock },
    ],
    imgId: 'cs-toys-ca-img-m4n5o6',
    titleId: 'cs-toys-ca-title',
    descId: 'cs-toys-ca-desc',
  },
  {
    id: 'packaging-france',
    industry: 'Packaging',
    country: 'France',
    flag: '🇫🇷',
    challenge: 'A French cosmetics brand needed custom eco-friendly packaging — kraft paper boxes with soy-based ink printing — at a price point that worked for their retail margin.',
    solution: 'We identified 3 packaging factories with FSC certification and eco-printing capabilities. We managed sample development through 3 revision rounds and coordinated sea freight to Le Havre.',
    result: 'Final unit cost 18% below the brand\'s initial budget. Packaging passed EU food-contact material testing. First order delivered in 28 days.',
    metrics: [
      { label: 'Cost vs Budget', value: '-18%', icon: TrendingDown },
      { label: 'Delivery Time', value: '28 days', icon: Clock },
      { label: 'Compliance', value: 'EU passed', icon: ShieldCheck },
    ],
    imgId: 'cs-packaging-fr-img-p7q8r9',
    titleId: 'cs-packaging-fr-title',
    descId: 'cs-packaging-fr-desc',
  },
];

const CaseStudies = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-primary text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Client Results</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Case Studies</h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              Real sourcing projects, real outcomes. See how we've helped buyers across industries and countries source from China with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="py-16 md:py-24 bg-lightbg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {cases.map(({ id, industry, country, flag, challenge, solution, result, metrics, imgId, titleId, descId }) => (
              <div key={id} className="bg-white rounded-xl border border-border overflow-hidden shadow-sm">
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  <div className="h-56 lg:h-auto bg-gray-100 overflow-hidden">
                    <img
                      data-strk-img-id={imgId}
                      data-strk-img={`[${descId}] [${titleId}]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="400"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={industry}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="lg:col-span-2 p-6 md:p-8">
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className="bg-primary/10 text-primary text-xs font-semibold px-2.5 py-1 rounded-full">{industry}</span>
                      <span className="bg-gray-100 text-muted text-xs px-2.5 py-1 rounded-full">{flag} {country}</span>
                    </div>
                    <h2 id={titleId} className="text-xl font-bold text-primary mb-4">{industry} Sourcing — {country}</h2>
                    <div className="space-y-3 mb-5">
                      <div>
                        <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-1">Challenge</p>
                        <p className="text-muted text-sm leading-relaxed">{challenge}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-1">Our Approach</p>
                        <p className="text-muted text-sm leading-relaxed">{solution}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-success uppercase tracking-widest mb-1">Result</p>
                        <p id={descId} className="text-darktext text-sm font-medium leading-relaxed">{result}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-3 pt-4 border-t border-border">
                      {metrics.map(({ label, value, icon: Icon }) => (
                        <div key={label} className="text-center">
                          <Icon className="w-4 h-4 text-accent mx-auto mb-1" />
                          <div className="text-lg font-bold text-primary">{value}</div>
                          <div className="text-xs text-muted">{label}</div>
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

      {/* CTA */}
      <section className="py-16 bg-accent text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Start Your Sourcing Project</h2>
          <p className="text-red-100 mb-8">Join hundreds of buyers who source from China with confidence through SSourcing China.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-accent hover:bg-gray-100 font-bold px-8 py-4 rounded-lg transition-colors">
            Get a Free Sourcing Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
