import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, TrendingUp, CheckCircle } from 'lucide-react';

const caseStudies = [
  {
    id: 'uk-furniture',
    industry: 'Furniture',
    country: 'United Kingdom',
    title: 'UK Retailer Reduces Sourcing Costs by 22%',
    challenge: 'A UK-based furniture importer was over-reliant on a single supplier and experiencing quality inconsistencies. They needed to diversify their supply base without disrupting ongoing orders.',
    solution: 'We identified 4 qualified furniture factories in Foshan, conducted on-site audits, and managed a phased transition over 3 months. We ran parallel quality inspections to ensure consistency during the switch.',
    result: '22% reduction in unit costs, 2 new verified suppliers, zero disruption to existing orders.',
    metrics: ['22% cost reduction', '2 new verified suppliers', '3-month transition', 'Zero order disruption'],
    titleId: 'cs-uk-furniture-title',
    descId: 'cs-uk-furniture-desc',
    imgId: 'cs-uk-furniture-img-a1b2c3',
  },
  {
    id: 'us-electronics',
    industry: 'Electronics',
    country: 'United States',
    title: 'US Amazon Seller Passes Compliance Audit First Time',
    challenge: 'An Amazon FBA seller needed CE and FCC-certified electronics for the EU and US markets. Previous suppliers had failed compliance testing, resulting in listing removals.',
    solution: 'We sourced 3 factories with existing CE/FCC certifications, verified their test reports, and managed the entire sampling and testing process. We also coordinated FBA-ready packaging and labeling.',
    result: 'Zero compliance rejections, 3 successful product launches, 40% reduction in time-to-market.',
    metrics: ['0 compliance rejections', '3 product launches', '40% faster time-to-market', 'FBA-ready delivery'],
    titleId: 'cs-us-electronics-title',
    descId: 'cs-us-electronics-desc',
    imgId: 'cs-us-electronics-img-d4e5f6',
  },
  {
    id: 'au-apparel',
    industry: 'Apparel',
    country: 'Australia',
    title: 'Australian Brand Launches Private Label Apparel Line',
    challenge: 'A startup needed a reliable apparel factory for a private label launch across 3 product categories. They had no prior experience sourcing from China and needed end-to-end support.',
    solution: 'We managed the entire process from factory selection to delivery — including sampling, bulk production monitoring, quality inspection, and sea freight coordination to Australia.',
    result: 'On-time delivery, 98% pass rate on QC inspection, successful launch across all 3 categories.',
    metrics: ['On-time delivery', '98% QC pass rate', '3 product categories', 'End-to-end management'],
    titleId: 'cs-au-apparel-title',
    descId: 'cs-au-apparel-desc',
    imgId: 'cs-au-apparel-img-g7h8i9',
  },
  {
    id: 'de-industrial',
    industry: 'Industrial',
    country: 'Germany',
    title: 'German Distributor Sources Certified Industrial Tools',
    challenge: 'A German industrial distributor needed CE-certified power tools at competitive prices. They had concerns about product safety and documentation accuracy from Chinese suppliers.',
    solution: 'We audited 5 factories, verified CE documentation authenticity, and arranged third-party lab testing. We also negotiated pricing and managed a trial order before full commitment.',
    result: 'Verified CE documentation, 18% cost saving vs. existing European suppliers, successful trial order.',
    metrics: ['Verified CE documentation', '18% cost saving', 'Third-party lab tested', 'Successful trial order'],
    titleId: 'cs-de-industrial-title',
    descId: 'cs-de-industrial-desc',
    imgId: 'cs-de-industrial-img-j1k2l3',
  },
  {
    id: 'ca-toys',
    industry: 'Toys',
    country: 'Canada',
    title: 'Canadian Toy Brand Meets ASTM Safety Standards',
    challenge: 'A Canadian toy brand needed ASTM F963-certified toys for the North American market. They had previously received a shipment with safety failures and needed a more rigorous sourcing process.',
    solution: 'We sourced ASTM-certified factories, conducted factory audits focusing on safety processes, and arranged independent lab testing for all products before shipment.',
    result: 'Full ASTM compliance, zero safety failures, 15% cost reduction from previous supplier.',
    metrics: ['Full ASTM compliance', '0 safety failures', '15% cost reduction', 'Independent lab tested'],
    titleId: 'cs-ca-toys-title',
    descId: 'cs-ca-toys-desc',
    imgId: 'cs-ca-toys-img-m4n5o6',
  },
  {
    id: 'sg-packaging',
    industry: 'Packaging',
    country: 'Singapore',
    title: 'Singapore E-Commerce Brand Scales Custom Packaging',
    challenge: 'A fast-growing Singapore e-commerce brand needed custom packaging at scale. Their existing supplier could not meet growing demand and quality was inconsistent.',
    solution: 'We identified 2 packaging factories with higher capacity, managed the design handover, and implemented a quality inspection process for each production run.',
    result: 'Production capacity doubled, consistent quality across all runs, 12% cost reduction.',
    metrics: ['2x production capacity', 'Consistent quality', '12% cost reduction', 'Scalable supply chain'],
    titleId: 'cs-sg-packaging-title',
    descId: 'cs-sg-packaging-desc',
    imgId: 'cs-sg-packaging-img-p7q8r9',
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
      <section className="bg-[#1B2B4B] py-16 md:py-20">
        <div className="section-container">
          <div className="max-w-3xl">
            <p className="text-red-400 text-sm font-semibold uppercase tracking-widest mb-3">Client Results</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">Case Studies</h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Real projects, real outcomes. Here's how we've helped buyers across different industries and countries source from China successfully.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-white">
        <div className="section-container">
          <div className="space-y-12">
            {caseStudies.map((cs, i) => (
              <div key={cs.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className={`grid grid-cols-1 lg:grid-cols-2 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="aspect-video lg:aspect-auto overflow-hidden bg-gray-100">
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
                  <div className="p-7 md:p-8 flex flex-col justify-center">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">{cs.industry}</span>
                      <span className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">{cs.country}</span>
                    </div>
                    <h2 id={cs.titleId} className="text-xl md:text-2xl font-bold text-[#1B2B4B] mb-4">{cs.title}</h2>

                    <div className="space-y-4 mb-5">
                      <div>
                        <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Challenge</h4>
                        <p id={cs.descId} className="text-gray-700 text-sm leading-relaxed">{cs.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Our Approach</h4>
                        <p className="text-gray-700 text-sm leading-relaxed">{cs.solution}</p>
                      </div>
                    </div>

                    <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="w-4 h-4 text-green-700" />
                        <span className="text-green-800 font-semibold text-sm">Results</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {cs.metrics.map((m) => (
                          <span key={m} className="flex items-center gap-1 bg-white text-green-800 text-xs font-medium px-2.5 py-1 rounded border border-green-200">
                            <CheckCircle className="w-3 h-3" /> {m}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-gray-50 border-t border-gray-200">
        <div className="section-container text-center">
          <h2 className="text-2xl font-bold text-[#1B2B4B] mb-3">Ready to Start Your Sourcing Project?</h2>
          <p className="text-gray-600 mb-6 max-w-lg mx-auto">
            Tell us what you need and we'll put together a free sourcing plan for your business.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
