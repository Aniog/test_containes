import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { CheckCircle, ArrowRight, TrendingUp, Star } from 'lucide-react';
import CTABanner from '@/components/layout/CTABanner';

const caseStudies = [
  {
    id: 'cs-furniture-retailer',
    industry: 'Furniture',
    country: 'United States',
    title: 'US Retailer Cuts Sourcing Costs by 28%',
    challenge: 'A mid-size US furniture retailer was over-reliant on a single supplier and facing rising prices. They needed to diversify their supply base without compromising quality.',
    solution: 'We identified 4 verified furniture factories in Guangdong and Zhejiang, conducted on-site audits, negotiated pricing, and managed quality inspections across 3 production runs over 8 months.',
    results: ['28% reduction in unit costs', '4 new verified suppliers onboarded', '0 quality rejections across 3 production runs', 'Lead time reduced by 2 weeks'],
    quote: 'SSourcing China gave us the confidence to diversify our supply chain. Their factory audits and QC reports were thorough and professional.',
    quoteName: 'Procurement Manager, US Furniture Retailer',
    titleId: 'cs-furniture-title',
    descId: 'cs-furniture-desc',
    imgId: 'cs-furniture-full-img-a1b2c3',
  },
  {
    id: 'cs-electronics-brand',
    industry: 'Electronics',
    country: 'Germany',
    title: 'EU Brand Launches Private Label Product Line',
    challenge: 'A German consumer electronics brand wanted to launch a private label product line but had no experience with Chinese OEM manufacturing or the certification process.',
    solution: 'We sourced an OEM factory with CE certification experience, managed tooling and mold development, coordinated sample rounds, and oversaw production and pre-shipment inspection.',
    results: ['Product launched on schedule', 'Full CE certification achieved', '3 sample rounds managed remotely', 'Factory audit confirmed ISO 9001 compliance'],
    quote: 'The team handled everything from factory selection to CE documentation. We launched our product on time without a single trip to China.',
    quoteName: 'Product Director, German Electronics Brand',
    titleId: 'cs-electronics-title',
    descId: 'cs-electronics-desc',
    imgId: 'cs-electronics-full-img-d4e5f6',
  },
  {
    id: 'cs-apparel-brand',
    industry: 'Apparel',
    country: 'Australia',
    title: 'Australian Fashion Brand Scales Production 3x',
    challenge: 'An Australian fashion brand needed to scale from 500 to 1,500 units per style across 12 SKUs. Their existing factory could not handle the volume increase.',
    solution: 'We identified a factory with the right capacity in Guangzhou, managed the transition from the old supplier, and provided production follow-up and in-line inspections across a 6-month production cycle.',
    results: ['3x volume increase achieved', 'Consistent quality maintained across all SKUs', 'Smooth supplier transition with no delays', 'On-time delivery for peak season'],
    quote: 'Scaling production is always risky. SSourcing China made the transition seamless and kept us informed every step of the way.',
    quoteName: 'Operations Director, Australian Fashion Brand',
    titleId: 'cs-apparel-title',
    descId: 'cs-apparel-desc',
    imgId: 'cs-apparel-full-img-g7h8i9',
  },
  {
    id: 'cs-industrial-tools',
    industry: 'Industrial',
    country: 'United Kingdom',
    title: 'UK Distributor Sources New Tool Range',
    challenge: 'A UK industrial tools distributor wanted to add a private label hand tool range to their catalogue but had no existing China supplier relationships.',
    solution: 'We sourced 2 verified tool manufacturers in Zhejiang, arranged sample sets, managed branding and packaging development, and coordinated sea freight to the UK.',
    results: ['New product range launched within 5 months', 'Private label branding applied to 24 SKUs', 'Sea freight coordinated door-to-door', '15% lower cost vs. previous European supplier'],
    quote: 'From zero to a full product range in 5 months. The sourcing and logistics coordination was handled professionally throughout.',
    quoteName: 'Category Manager, UK Industrial Distributor',
    titleId: 'cs-industrial-title',
    descId: 'cs-industrial-desc',
    imgId: 'cs-industrial-full-img-j1k2l3',
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
      <section className="bg-brand-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-brand-gold font-semibold text-sm uppercase tracking-wider">Client Results</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-5">
            Case Studies
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Real results from real clients. Here is how we have helped global buyers source successfully from China.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {caseStudies.map((cs, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={cs.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  <div className={!isEven ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-brand-blue text-white text-xs font-semibold px-3 py-1 rounded-full">{cs.industry}</span>
                      <span className="text-brand-gray text-sm">{cs.country}</span>
                    </div>
                    <h2 id={cs.titleId} className="text-3xl font-bold text-brand-navy mb-4">{cs.title}</h2>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="font-semibold text-brand-navy text-sm uppercase tracking-wide mb-1">Challenge</h4>
                        <p id={cs.descId} className="text-brand-gray text-sm leading-relaxed">{cs.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-brand-navy text-sm uppercase tracking-wide mb-1">Our Approach</h4>
                        <p className="text-brand-gray text-sm leading-relaxed">{cs.solution}</p>
                      </div>
                    </div>

                    <div className="bg-brand-light rounded-xl p-5 mb-6">
                      <h4 className="font-semibold text-brand-navy text-sm uppercase tracking-wide mb-3 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-brand-blue" />
                        Results
                      </h4>
                      <ul className="space-y-2">
                        {cs.results.map((r) => (
                          <li key={r} className="flex items-center gap-2 text-sm text-brand-gray">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <blockquote className="border-l-4 border-brand-gold pl-4">
                      <p className="text-brand-gray text-sm italic mb-2">"{cs.quote}"</p>
                      <cite className="text-brand-navy text-xs font-semibold not-italic">{cs.quoteName}</cite>
                    </blockquote>
                  </div>

                  <div className={`rounded-2xl overflow-hidden shadow-lg h-80 lg:h-96 bg-gray-100 ${!isEven ? 'lg:order-1' : ''}`}>
                    <img
                      alt={cs.title}
                      data-strk-img-id={cs.imgId}
                      data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
};

export default CaseStudies;
