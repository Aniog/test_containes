import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, CheckCircle } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const caseStudies = [
  {
    id: 'eu-furniture',
    industry: 'Furniture',
    country: 'Germany',
    title: 'EU Retailer Reduces Sourcing Costs by 22%',
    titleId: 'cs-eu-furniture-title',
    descId: 'cs-eu-furniture-desc',
    imgId: 'cs-eu-furniture-img-a1b2c3',
    challenge: 'A German furniture retailer was sourcing through a trading company and paying above-market prices with limited visibility into production.',
    solution: 'We identified 4 verified direct manufacturers, conducted factory audits, and negotiated pricing. We managed 3 shipments over 6 months with full production monitoring.',
    results: ['22% reduction in unit cost', '3 successful shipments on schedule', 'Direct factory relationships established', 'Full audit documentation provided'],
    description: 'German furniture retailer sourcing cost reduction through direct factory relationships and production monitoring in China.',
  },
  {
    id: 'us-electronics',
    industry: 'Electronics',
    country: 'United States',
    title: 'US Brand Passes Amazon Compliance Audit',
    titleId: 'cs-us-electronics-title',
    descId: 'cs-us-electronics-desc',
    imgId: 'cs-us-electronics-img-d4e5f6',
    challenge: 'A US consumer electronics brand needed FCC and CE certification compliance for their smart home product line before listing on Amazon.',
    solution: 'We conducted a full factory audit, coordinated with a third-party testing lab, and managed pre-shipment inspections to ensure all units met certification requirements.',
    results: ['FCC and CE certification achieved', 'Zero compliance failures on Amazon', 'Pre-shipment inspection passed first time', 'Ongoing QC partnership established'],
    description: 'US electronics brand achieving FCC and CE certification compliance for Amazon through factory audit and quality inspection in China.',
  },
  {
    id: 'au-apparel',
    industry: 'Apparel',
    country: 'Australia',
    title: 'Australian Brand Scales to 10,000 Units',
    titleId: 'cs-au-apparel-title',
    descId: 'cs-au-apparel-desc',
    imgId: 'cs-au-apparel-img-g7h8i9',
    challenge: 'An Australian activewear brand needed to scale from 1,000 to 10,000 units across two factories while maintaining consistent quality.',
    solution: 'We managed production follow-up across both factories simultaneously, conducted in-line and pre-shipment inspections, and coordinated consolidated shipping.',
    results: ['10,000 units delivered on time', 'Consistent quality across both factories', 'Consolidated shipping saved 15% on freight', 'Defect rate below 0.5%'],
    description: 'Australian activewear brand scaling production to 10,000 units across multiple Chinese factories with quality control and shipping coordination.',
  },
  {
    id: 'uk-packaging',
    industry: 'Packaging',
    country: 'United Kingdom',
    title: 'UK Brand Launches Custom Packaging Line',
    titleId: 'cs-uk-packaging-title',
    descId: 'cs-uk-packaging-desc',
    imgId: 'cs-uk-packaging-img-j1k2l3',
    challenge: 'A UK e-commerce brand needed custom printed packaging that met their brand standards and EU sustainability requirements.',
    solution: 'We sourced 3 packaging manufacturers, managed sample rounds, and verified FSC certification and eco-friendly material compliance before production.',
    results: ['Custom packaging launched in 8 weeks', 'FSC-certified materials confirmed', 'Brand colour accuracy verified', 'Ongoing supplier relationship maintained'],
    description: 'UK e-commerce brand launching custom eco-friendly packaging from China with FSC certification and brand colour accuracy.',
  },
  {
    id: 'ca-hardware',
    industry: 'Hardware',
    country: 'Canada',
    title: 'Canadian Distributor Passes Safety Certification',
    titleId: 'cs-ca-hardware-title',
    descId: 'cs-ca-hardware-desc',
    imgId: 'cs-ca-hardware-img-m4n5o6',
    challenge: 'A Canadian hardware distributor needed power tools that met CSA and UL safety standards for the North American market.',
    solution: 'We identified certified manufacturers, coordinated third-party safety testing, and managed production monitoring to ensure compliance throughout.',
    results: ['CSA and UL certification achieved', 'First batch passed safety testing', 'Production timeline met', 'Supplier audit report delivered'],
    description: 'Canadian hardware distributor sourcing CSA and UL certified power tools from China with safety testing coordination.',
  },
  {
    id: 'nl-beauty',
    industry: 'Beauty',
    country: 'Netherlands',
    title: 'Dutch Brand Launches OEM Skincare Line',
    titleId: 'cs-nl-beauty-title',
    descId: 'cs-nl-beauty-desc',
    imgId: 'cs-nl-beauty-img-p7q8r9',
    challenge: 'A Dutch beauty brand wanted to launch a private label skincare range with EU cosmetics regulation compliance.',
    solution: 'We sourced OEM manufacturers with EU export experience, coordinated formulation testing, and managed documentation for EU cosmetics notification.',
    results: ['EU cosmetics compliance achieved', 'Private label range launched on schedule', 'INCI ingredient documentation provided', 'Ongoing OEM partnership established'],
    description: 'Dutch beauty brand launching OEM private label skincare from China with EU cosmetics regulation compliance.',
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
      <section className="bg-navy py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-red-400 uppercase tracking-widest mb-3">Case Studies</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Real Results for Real Buyers
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              See how we have helped businesses across industries and countries source
              successfully from China — with measurable outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-12">
            {caseStudies.map((cs, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={cs.id} className="bg-white rounded-xl border border-slate-100 overflow-hidden">
                  <div className={`grid grid-cols-1 lg:grid-cols-2`}>
                    <div className={`h-64 lg:h-auto bg-slate-100 ${!isEven ? 'lg:order-2' : ''}`}>
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
                    <div className={`p-8 lg:p-10 ${!isEven ? 'lg:order-1' : ''}`}>
                      <div className="flex items-center gap-2 mb-4">
                        <span className="bg-navy text-white text-xs font-semibold px-3 py-1 rounded-full">{cs.industry}</span>
                        <span className="text-slate-400 text-xs">{cs.country}</span>
                      </div>
                      <h2 id={cs.titleId} className="text-xl md:text-2xl font-bold text-navy mb-3">{cs.title}</h2>
                      <p id={cs.descId} className="text-slate-500 text-sm mb-5 hidden">{cs.description}</p>

                      <div className="mb-4">
                        <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">Challenge</h4>
                        <p className="text-slate-600 text-sm leading-relaxed">{cs.challenge}</p>
                      </div>
                      <div className="mb-5">
                        <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">Our Approach</h4>
                        <p className="text-slate-600 text-sm leading-relaxed">{cs.solution}</p>
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">Results</h4>
                        <ul className="flex flex-col gap-1.5">
                          {cs.results.map((r) => (
                            <li key={r} className="flex items-start gap-2 text-sm text-slate-700">
                              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                              {r}
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
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Add Your Success Story?
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            Tell us about your sourcing project and we will show you how we can help.
          </p>
          <Link
            to="/contact"
            className="bg-china-red hover:bg-red-700 text-white font-semibold px-10 py-4 rounded-lg transition-colors inline-flex items-center gap-2"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
