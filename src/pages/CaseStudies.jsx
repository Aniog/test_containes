import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, CheckCircle, TrendingUp, Clock, Shield } from 'lucide-react';

const cases = [
  {
    id: 'us-furniture-retailer',
    category: 'Furniture',
    country: 'United States',
    title: 'US Retailer Reduces Sourcing Cost by 22%',
    challenge: 'A mid-size US furniture retailer was sourcing through a trading company and paying above-market prices. They needed to connect directly with manufacturers in Foshan to reduce costs and improve lead times.',
    solution: 'We identified three verified furniture factories in Foshan, conducted on-site audits, and negotiated directly on the client\'s behalf. We managed the first bulk order of 500 units including production monitoring and pre-shipment inspection.',
    result: '22% cost reduction on unit price, 15% faster lead time, 100% on-time delivery, zero defects on first order.',
    metrics: [
      { icon: TrendingUp, label: 'Cost Reduction', value: '22%' },
      { icon: Clock, label: 'Lead Time Improvement', value: '15%' },
      { icon: Shield, label: 'Defect Rate', value: '0%' },
    ],
    titleId: 'cs-us-furniture-title',
    descId: 'cs-us-furniture-desc',
    imgId: 'cs-us-furniture-img-aa11bb',
  },
  {
    id: 'eu-electronics-brand',
    category: 'Electronics',
    country: 'Germany',
    title: 'European Brand Launches CE-Certified Private Label Product',
    challenge: 'A German consumer electronics brand wanted to develop a private label wireless charger for the European market. They had no existing supplier relationships in China and needed full OEM support including CE certification.',
    solution: 'We managed the complete OEM process: product specification, factory selection, prototype development, tooling, branded packaging design, and CE certification testing. We coordinated with a certified testing lab and managed all factory communication.',
    result: 'Product launched in 4 months, CE certified, branded packaging approved, first order of 2,000 units delivered on schedule.',
    metrics: [
      { icon: Clock, label: 'Time to Market', value: '4 months' },
      { icon: Shield, label: 'Certification', value: 'CE Passed' },
      { icon: TrendingUp, label: 'First Order', value: '2,000 units' },
    ],
    titleId: 'cs-eu-electronics-title',
    descId: 'cs-eu-electronics-desc',
    imgId: 'cs-eu-electronics-img-cc22dd',
  },
  {
    id: 'au-apparel-brand',
    category: 'Apparel',
    country: 'Australia',
    title: 'Australian Fashion Brand Cuts Defect Rate from 8% to Under 1%',
    challenge: 'An Australian fashion brand had recurring quality issues with their existing Chinese supplier — wrong measurements, inconsistent stitching, and late deliveries. They needed a new supplier and a quality control process.',
    solution: 'We sourced two alternative garment factories, ran comparative samples, and implemented a structured pre-shipment inspection protocol using AQL 2.5 standards. We also introduced a production milestone reporting system.',
    result: 'Defect rate reduced from 8% to under 1%, on-time delivery improved from 70% to 96%, client switched to new supplier for all future orders.',
    metrics: [
      { icon: Shield, label: 'Defect Rate', value: '<1%' },
      { icon: Clock, label: 'On-Time Delivery', value: '96%' },
      { icon: TrendingUp, label: 'Improvement', value: '8x better QC' },
    ],
    titleId: 'cs-au-apparel-title',
    descId: 'cs-au-apparel-desc',
    imgId: 'cs-au-apparel-img-ee33ff',
  },
  {
    id: 'uk-toys-importer',
    category: 'Toys',
    country: 'United Kingdom',
    title: 'UK Toy Importer Achieves EN71 Compliance for New Product Line',
    challenge: 'A UK toy importer wanted to launch a new line of wooden educational toys but needed to ensure full EN71 compliance for the UK and EU markets. Their previous supplier had failed a compliance audit.',
    solution: 'We sourced three EN71-certified wooden toy factories, conducted factory audits, arranged samples, and coordinated compliance testing with an accredited UK lab. We managed all documentation for customs clearance.',
    result: 'EN71 certification achieved, product line launched on schedule, zero customs issues, client expanded order by 40% in the second season.',
    metrics: [
      { icon: Shield, label: 'Certification', value: 'EN71 Passed' },
      { icon: TrendingUp, label: 'Order Growth', value: '+40%' },
      { icon: Clock, label: 'Customs Issues', value: 'Zero' },
    ],
    titleId: 'cs-uk-toys-title',
    descId: 'cs-uk-toys-desc',
    imgId: 'cs-uk-toys-img-gg44hh',
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
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-gold uppercase tracking-widest">Client Results</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-5">
              Case Studies
            </h1>
            <p className="text-blue-100 text-lg leading-relaxed">
              Real projects, real outcomes. See how we've helped global buyers source successfully from China across different industries.
            </p>
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="py-16 md:py-24 bg-bgLight">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {cases.map((cs, i) => (
            <div key={cs.id} className="bg-white rounded-2xl border border-borderColor overflow-hidden shadow-sm">
              <div className="aspect-video overflow-hidden bg-gray-100">
                <img
                  alt={cs.title}
                  data-strk-img-id={cs.imgId}
                  data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:p-10">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-50 text-primary text-xs font-semibold px-3 py-1 rounded-full">{cs.category}</span>
                  <span className="bg-gray-100 text-textMuted text-xs font-medium px-3 py-1 rounded-full">{cs.country}</span>
                </div>
                <h2 id={cs.titleId} className="text-2xl md:text-3xl font-bold text-textDark mb-6">{cs.title}</h2>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {cs.metrics.map((m) => (
                    <div key={m.label} className="bg-bgLight rounded-xl p-4 text-center border border-borderColor">
                      <m.icon className="w-5 h-5 text-primary mx-auto mb-1" />
                      <div className="text-xl font-bold text-textDark">{m.value}</div>
                      <div className="text-xs text-textMuted mt-0.5">{m.label}</div>
                    </div>
                  ))}
                </div>

                <div className="space-y-5">
                  <div>
                    <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">The Challenge</h3>
                    <p className="text-textBody leading-relaxed">{cs.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Our Solution</h3>
                    <p id={cs.descId} className="text-textBody leading-relaxed">{cs.solution}</p>
                  </div>
                  <div className="bg-success/10 rounded-xl p-4 flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-sm font-semibold text-success">Result: </span>
                      <span className="text-sm text-textBody">{cs.result}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Similar Results?</h2>
          <p className="text-red-100 text-lg mb-8">
            Tell us about your sourcing project and we'll put together a plan.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-accent hover:bg-gray-50 font-bold px-10 py-4 rounded-lg transition-colors shadow-lg"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
