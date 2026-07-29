import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, TrendingDown, ShieldCheck, Clock } from 'lucide-react';

const cases = [
  {
    id: 'electronics-us',
    category: 'Electronics',
    country: 'United States',
    title: 'US Electronics Retailer Cuts Sourcing Costs by 22%',
    challenge: 'A US-based electronics retailer was sourcing Bluetooth accessories through a trading company and paying above-market prices. They had no visibility into the actual manufacturer and had experienced two quality incidents in the past year.',
    solution: 'We identified 4 qualified Bluetooth accessory manufacturers in Shenzhen, conducted factory audits, and arranged sample reviews. After negotiating directly with the manufacturer, we secured a 22% cost reduction and established a direct supply relationship.',
    result: 'The client now sources directly from a verified factory, saving 22% on unit costs and reducing quality incidents to zero over 18 months.',
    metrics: [
      { label: 'Cost Reduction', value: '22%', icon: TrendingDown },
      { label: 'Quality Incidents', value: '0', icon: ShieldCheck },
      { label: 'Lead Time', value: '-2 weeks', icon: Clock },
    ],
    titleId: 'cs-electronics-us-title',
    descId: 'cs-electronics-us-desc',
    imgId: 'cs-electronics-us-img-a1b2c3',
  },
  {
    id: 'furniture-de',
    category: 'Furniture',
    country: 'Germany',
    title: 'German Furniture Importer Achieves Near-Zero Defect Rate',
    challenge: 'A German furniture importer was receiving shipments with inconsistent quality — wrong dimensions, surface defects, and packaging damage. Their existing supplier in Foshan was unresponsive to quality complaints.',
    solution: 'We audited their existing supplier and identified process gaps. We then sourced two alternative manufacturers with stronger QC systems. We implemented in-line and pre-shipment inspections for every order.',
    result: 'Defect rates dropped from 8% to under 0.5% within three shipments. The client now has full visibility into production quality before goods leave China.',
    metrics: [
      { label: 'Defect Rate', value: '0.5%', icon: ShieldCheck },
      { label: 'Shipments Inspected', value: '24+', icon: Clock },
      { label: 'Supplier Audits', value: '3', icon: TrendingDown },
    ],
    titleId: 'cs-furniture-de-title',
    descId: 'cs-furniture-de-desc',
    imgId: 'cs-furniture-de-img-d4e5f6',
  },
  {
    id: 'apparel-au',
    category: 'Apparel',
    country: 'Australia',
    title: 'Australian Fashion Brand Launches Private Label Line On Time',
    challenge: 'An Australian fashion startup wanted to launch a private label activewear line but had no experience sourcing from China. They needed a manufacturer that could handle custom designs, small MOQs, and deliver within a tight launch window.',
    solution: 'We identified 3 OEM apparel manufacturers in Guangzhou with experience in activewear. We managed sample development, negotiated MOQs suitable for a startup, and coordinated production to meet the launch deadline.',
    result: 'The brand launched their first collection on schedule with 500 units per SKU. They have since placed three repeat orders and expanded to 8 SKUs.',
    metrics: [
      { label: 'On-Time Delivery', value: '100%', icon: Clock },
      { label: 'SKUs Launched', value: '8', icon: TrendingDown },
      { label: 'Repeat Orders', value: '3', icon: ShieldCheck },
    ],
    titleId: 'cs-apparel-au-title',
    descId: 'cs-apparel-au-desc',
    imgId: 'cs-apparel-au-img-g7h8i9',
  },
  {
    id: 'toys-uk',
    category: 'Toys',
    country: 'United Kingdom',
    title: 'UK Toy Distributor Passes EN71 Certification on First Attempt',
    challenge: 'A UK toy distributor needed to source educational toys that met EN71 safety standards. Previous attempts with other agents had resulted in failed certifications and costly delays.',
    solution: 'We sourced factories with existing EN71 experience and in-house testing capabilities. We reviewed product designs for compliance risks before production and coordinated third-party lab testing.',
    result: 'All products passed EN71 certification on the first attempt. The client avoided the 6-week delay and €15,000 in re-testing costs they had experienced previously.',
    metrics: [
      { label: 'Certification Pass Rate', value: '100%', icon: ShieldCheck },
      { label: 'Delays Avoided', value: '6 weeks', icon: Clock },
      { label: 'Cost Savings', value: '€15K', icon: TrendingDown },
    ],
    titleId: 'cs-toys-uk-title',
    descId: 'cs-toys-uk-desc',
    imgId: 'cs-toys-uk-img-j1k2l3',
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
      {/* Page Header */}
      <section className="bg-[#1A2332] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#C0392B] mb-3">Client Results</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Case Studies
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Real results from real clients. See how we've helped global buyers source smarter, reduce costs, and improve quality.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {cases.map((cs, i) => (
              <div key={cs.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                <div className={`grid lg:grid-cols-2 ${i % 2 === 1 ? '' : ''}`}>
                  <div className="h-64 lg:h-auto overflow-hidden bg-slate-100">
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
                  <div className="p-8 md:p-10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-[#1A3C6E] text-white text-xs font-semibold px-2.5 py-1 rounded-full">{cs.category}</span>
                      <span className="text-slate-500 text-sm">{cs.country}</span>
                    </div>
                    <h2 id={cs.titleId} className="text-xl md:text-2xl font-bold text-slate-900 mb-5 leading-snug">{cs.title}</h2>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C0392B] mb-1.5">The Challenge</h4>
                        <p className="text-slate-600 text-sm leading-relaxed">{cs.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-[#1A3C6E] mb-1.5">Our Solution</h4>
                        <p id={cs.descId} className="text-slate-600 text-sm leading-relaxed">{cs.solution}</p>
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-green-700 mb-1.5">The Result</h4>
                        <p className="text-slate-600 text-sm leading-relaxed">{cs.result}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      {cs.metrics.map((m) => (
                        <div key={m.label} className="bg-slate-50 rounded-xl p-3 text-center border border-slate-200">
                          <m.icon className="w-4 h-4 text-[#1A3C6E] mx-auto mb-1" />
                          <div className="text-lg font-bold text-[#1A3C6E]">{m.value}</div>
                          <div className="text-xs text-slate-500">{m.label}</div>
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
      <section className="py-16 bg-[#1A3C6E]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Want Results Like These?</h2>
          <p className="text-slate-300 text-lg mb-8">
            Tell us about your sourcing project and we'll show you how we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#C0392B] hover:bg-[#a93226] text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
