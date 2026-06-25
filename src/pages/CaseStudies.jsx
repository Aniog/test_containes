import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, CheckCircle, TrendingUp, Clock, Shield } from 'lucide-react';

const caseStudies = [
  {
    id: 'furniture-us',
    industry: 'Furniture',
    country: 'United States',
    title: 'US Retailer Cuts Sourcing Costs by 22%',
    challenge: 'A mid-size US furniture retailer was over-reliant on a single supplier in Foshan. When that supplier raised prices by 18%, they needed to diversify quickly without sacrificing quality.',
    solution: 'We identified 4 alternative verified furniture manufacturers in Guangdong and Zhejiang, conducted factory audits on all four, and managed a parallel sampling process. We negotiated pricing and helped the client transition 60% of their volume to two new suppliers.',
    results: ['22% reduction in unit costs', '0 defective shipments in 18 months', 'Lead time reduced from 65 to 45 days', 'Two backup suppliers now on retainer'],
    metric: '22% cost reduction',
    titleId: 'cs-furniture-title',
    descId: 'cs-furniture-desc',
    imgId: 'cs-furniture-full-img-a1b2c3',
  },
  {
    id: 'electronics-eu',
    industry: 'Consumer Electronics',
    country: 'Germany',
    title: 'German Brand Launches Private Label Accessory Line',
    challenge: 'A German consumer electronics brand wanted to launch a private label line of phone accessories. They had no existing China contacts and needed OEM manufacturers who could meet CE certification requirements.',
    solution: 'We sourced 6 OEM candidates in Shenzhen, managed the sampling process, coordinated CE testing through a certified lab, and oversaw production of the first 15,000-unit order. We also arranged custom packaging design and printing.',
    results: ['Product launched on schedule', '15,000 units shipped in first order', 'CE certification obtained', 'Packaging cost 30% below initial estimate'],
    metric: '15,000 units, on time',
    titleId: 'cs-electronics-title',
    descId: 'cs-electronics-desc',
    imgId: 'cs-electronics-full-img-d4e5f6',
  },
  {
    id: 'apparel-au',
    industry: 'Apparel',
    country: 'Australia',
    title: 'Australian Brand Resolves Persistent Quality Issues',
    challenge: 'An Australian clothing brand was receiving inconsistent quality from their existing supplier in Guangzhou. Defect rates were running at 8%, causing returns and customer complaints.',
    solution: 'We conducted a factory audit and identified root causes: inadequate QC processes and inconsistent raw material sourcing. We implemented an in-line inspection protocol, introduced a raw material approval process, and trained the factory QC team.',
    results: ['Defect rate dropped from 8% to under 1%', 'No customer returns in last 6 months', 'Factory QC process now documented', 'Client retained existing supplier relationship'],
    metric: 'Defect rate: 8% → <1%',
    titleId: 'cs-apparel-title',
    descId: 'cs-apparel-desc',
    imgId: 'cs-apparel-full-img-g7h8i9',
  },
  {
    id: 'hardware-uk',
    industry: 'Hardware',
    country: 'United Kingdom',
    title: 'UK Distributor Expands Product Range with New Suppliers',
    challenge: 'A UK hardware distributor wanted to add 12 new SKUs to their catalogue but lacked the resources to source and vet suppliers for each product independently.',
    solution: 'We ran a parallel sourcing project across all 12 products, identifying and auditing suppliers for each category. We consolidated shipments from 5 factories into a single container to reduce freight costs.',
    results: ['12 new SKUs sourced and launched', 'Freight costs reduced by 35% through consolidation', 'All suppliers audited and approved', 'Full project completed in 8 weeks'],
    metric: '12 SKUs in 8 weeks',
    titleId: 'cs-hardware-title',
    descId: 'cs-hardware-desc',
    imgId: 'cs-hardware-full-img-j1k2l3',
  },
  {
    id: 'toys-ca',
    industry: 'Toys',
    country: 'Canada',
    title: 'Canadian Toy Brand Achieves EN71 Certification',
    challenge: 'A Canadian toy startup needed to source educational toys that met EN71 European safety standards. They had been rejected by two suppliers who could not meet certification requirements.',
    solution: 'We identified 3 toy manufacturers in Guangdong with existing EN71 experience, managed the certification testing process, and oversaw production of the initial 5,000-unit run.',
    results: ['EN71 certification achieved', '5,000 units produced and shipped', 'Product launched in EU and Canadian markets', 'Two certified backup suppliers identified'],
    metric: 'EN71 certified, on budget',
    titleId: 'cs-toys-title',
    descId: 'cs-toys-desc',
    imgId: 'cs-toys-full-img-m4n5o6',
  },
  {
    id: 'packaging-sg',
    industry: 'Packaging',
    country: 'Singapore',
    title: 'Singapore FMCG Brand Sources Custom Packaging',
    challenge: 'A Singapore FMCG brand needed custom-printed packaging for a product relaunch. They required food-grade materials, specific Pantone colors, and a 6-week turnaround.',
    solution: 'We sourced 4 packaging manufacturers in Guangdong, managed color matching and print proofing, and coordinated express sea freight to meet the launch deadline.',
    results: ['Packaging delivered in 5.5 weeks', 'Pantone color accuracy within tolerance', 'Food-grade certification confirmed', 'Cost 28% below previous supplier'],
    metric: 'Delivered in 5.5 weeks',
    titleId: 'cs-packaging-title',
    descId: 'cs-packaging-desc',
    imgId: 'cs-packaging-full-img-p7q8r9',
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
      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20" style={{ backgroundColor: '#0d2b4e' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4" style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#93c5fd' }}>
            Case Studies
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Real Results for Real Clients
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            See how we have helped businesses across industries and countries source smarter, reduce costs, and solve quality challenges.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((cs, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={cs.id} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start border border-slate-200 rounded-2xl overflow-hidden">
                  <div className={`aspect-[4/3] overflow-hidden ${!isEven ? 'lg:order-2' : ''}`}>
                    <img
                      data-strk-img-id={cs.imgId}
                      data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={cs.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className={`p-8 ${!isEven ? 'lg:order-1' : ''}`}>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: '#e8f0fb', color: '#1a4f8a' }}>{cs.industry}</span>
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-600">{cs.country}</span>
                    </div>
                    <h2 id={cs.titleId} className="text-xl md:text-2xl font-bold mb-4" style={{ color: '#0d2b4e' }}>{cs.title}</h2>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Challenge</h4>
                        <p id={cs.descId} className="text-slate-600 text-sm leading-relaxed">{cs.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Our Solution</h4>
                        <p className="text-slate-600 text-sm leading-relaxed">{cs.solution}</p>
                      </div>
                    </div>

                    <div className="space-y-2 mb-6">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Results</h4>
                      {cs.results.map((r) => (
                        <div key={r} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#16a34a' }} />
                          <span className="text-sm text-slate-700">{r}</span>
                        </div>
                      ))}
                    </div>

                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg" style={{ backgroundColor: '#e8f0fb' }}>
                      <TrendingUp className="w-4 h-4" style={{ color: '#1a4f8a' }} />
                      <span className="text-sm font-bold" style={{ color: '#1a4f8a' }}>{cs.metric}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: '#0d2b4e' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Want Results Like These?</h2>
          <p className="text-slate-300 text-lg mb-8">
            Tell us about your sourcing challenge and we will put together a plan to solve it.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-white transition-colors"
            style={{ backgroundColor: '#c0392b' }}
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
