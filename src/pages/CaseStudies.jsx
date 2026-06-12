import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, CheckCircle, TrendingDown, Star } from 'lucide-react';

const cases = [
  {
    id: 'uk-furniture',
    titleId: 'cs-uk-furniture-title',
    descId: 'cs-uk-furniture-desc',
    imgId: 'cs-uk-furniture-img-a1b2c3',
    category: 'Furniture',
    country: 'United Kingdom',
    title: 'UK Home Goods Retailer Cuts Sourcing Costs by 22%',
    challenge: 'A UK-based home goods retailer was sourcing furniture through a trading company and paying high margins. They needed direct factory access in Foshan but had no contacts in China.',
    solution: 'We identified 4 verified furniture manufacturers in Foshan, arranged factory visits, and negotiated directly on the client\'s behalf. We also coordinated sample shipments for product evaluation.',
    result: '22% reduction in unit cost, 3 new supplier relationships established, first container shipped within 8 weeks.',
    metrics: ['22% cost reduction', '3 verified suppliers', '8-week turnaround'],
  },
  {
    id: 'us-electronics',
    titleId: 'cs-us-electronics-title',
    descId: 'cs-us-electronics-desc',
    imgId: 'cs-us-electronics-img-d4e5f6',
    category: 'Electronics',
    country: 'United States',
    title: 'US Amazon Seller Achieves Zero Returns in First Quarter',
    challenge: 'An Amazon FBA seller was experiencing high return rates due to quality inconsistencies from their existing supplier. They needed a reliable manufacturer and independent QC.',
    solution: 'We sourced 3 alternative manufacturers, conducted factory audits, and implemented a pre-shipment inspection protocol. Our QC team checked every batch before dispatch.',
    result: 'Zero quality-related returns in the first 3 months after switching suppliers. Amazon seller rating improved from 3.8 to 4.7 stars.',
    metrics: ['0 quality returns', '4.7 star rating', '3 factories audited'],
  },
  {
    id: 'au-apparel',
    titleId: 'cs-au-apparel-title',
    descId: 'cs-au-apparel-desc',
    imgId: 'cs-au-apparel-img-g7h8i9',
    category: 'Apparel',
    country: 'Australia',
    title: 'Australian Fashion Brand Launches Private Label Line',
    challenge: 'A Sydney-based fashion startup wanted to launch a private label clothing line but had no experience sourcing from China. They needed a manufacturer who could handle small MOQs and custom labeling.',
    solution: 'We sourced a certified apparel factory in Guangzhou, managed 3 rounds of sampling, and coordinated the first production run of 500 units across 3 SKUs.',
    result: 'On-time delivery of first order, all 3 SKUs launched successfully, brand now placing quarterly repeat orders.',
    metrics: ['3 SKUs launched', 'On-time delivery', 'Quarterly repeat orders'],
  },
  {
    id: 'de-machinery',
    titleId: 'cs-de-machinery-title',
    descId: 'cs-de-machinery-desc',
    imgId: 'cs-de-machinery-img-j1k2l3',
    category: 'Machinery',
    country: 'Germany',
    title: 'German Distributor Sources CE-Certified Power Tools',
    challenge: 'A German industrial distributor needed CE-certified power tools at competitive prices. Previous attempts to source directly had resulted in non-compliant products.',
    solution: 'We identified manufacturers with existing CE certification, verified their test reports, and conducted factory audits. We also arranged third-party lab testing for additional assurance.',
    result: 'All products passed CE compliance checks. First order of 2,000 units delivered on schedule with full documentation.',
    metrics: ['CE certified', '2,000 units delivered', 'Full compliance docs'],
  },
  {
    id: 'ca-toys',
    titleId: 'cs-ca-toys-title',
    descId: 'cs-ca-toys-desc',
    imgId: 'cs-ca-toys-img-m4n5o6',
    category: 'Toys',
    country: 'Canada',
    title: 'Canadian Toy Brand Passes ASTM Safety Standards',
    challenge: 'A Canadian toy company needed to source educational toys that met ASTM F963 safety standards for the North American market. They had concerns about factory compliance.',
    solution: 'We sourced factories with ASTM-compliant production processes, arranged third-party safety testing, and monitored production to ensure no unauthorized material substitutions.',
    result: 'All products passed ASTM testing. Brand successfully launched in 3 Canadian retail chains.',
    metrics: ['ASTM compliant', '3 retail chains', 'No safety issues'],
  },
  {
    id: 'sg-packaging',
    titleId: 'cs-sg-packaging-title',
    descId: 'cs-sg-packaging-desc',
    imgId: 'cs-sg-packaging-img-p7q8r9',
    category: 'Packaging',
    country: 'Singapore',
    title: 'Singapore E-Commerce Brand Reduces Packaging Costs by 35%',
    challenge: 'A Singapore e-commerce brand was spending heavily on local packaging. They wanted to source custom printed boxes and mailers from China but were concerned about minimum order quantities.',
    solution: 'We found a packaging manufacturer in Shenzhen that accepted lower MOQs for new customers, negotiated pricing, and managed quality checks on print accuracy and material thickness.',
    result: '35% reduction in packaging costs, consistent print quality across 5 SKUs, 4-week lead time from order to delivery.',
    metrics: ['35% cost saving', '5 SKUs', '4-week lead time'],
  },
];

export default function CaseStudies() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Header */}
      <section className="bg-brand-dark py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-primary/20 border border-primary/30 text-blue-300 text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full mb-4">
            Case Studies
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Real Results for Real Buyers
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            See how we've helped businesses across different industries and countries source successfully from China.
          </p>
        </div>
      </section>

      {/* Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {cases.map((cs, i) => (
            <div key={cs.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start`}>
              <div className={`rounded-2xl overflow-hidden aspect-[4/3] bg-gray-100 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
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
              <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider bg-primary-light px-2.5 py-1 rounded-full">{cs.category}</span>
                  <span className="text-xs text-gray-500">{cs.country}</span>
                </div>
                <h2 id={cs.titleId} className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{cs.title}</h2>

                <div className="space-y-4 mb-6">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-1">Challenge</h3>
                    <p id={cs.descId} className="text-gray-600 text-sm leading-relaxed">{cs.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-1">Our Approach</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{cs.solution}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-1">Result</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{cs.result}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  {cs.metrics.map((m) => (
                    <div key={m} className="flex items-center gap-1.5 bg-green-50 text-green-700 text-sm font-medium px-3 py-1.5 rounded-full">
                      <CheckCircle className="w-3.5 h-3.5" />
                      {m}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Want Results Like These?</h2>
          <p className="text-blue-200 text-lg mb-8">
            Tell us about your sourcing needs and we'll put together a plan to help you achieve similar outcomes.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-primary font-bold px-10 py-4 rounded-lg text-lg transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
