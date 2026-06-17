import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, TrendingUp } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const caseStudies = [
  {
    id: 'uk-furniture',
    industry: 'Furniture',
    country: 'United Kingdom',
    title: 'UK Retailer Cuts Sourcing Costs by 22% After Supplier Switch',
    challenge: 'A UK-based furniture importer had been working with a single supplier for 3 years and was experiencing inconsistent quality and rising prices. They needed to diversify their supplier base without disrupting their supply chain.',
    solution: 'We identified 4 alternative factories in Guangdong and Zhejiang, conducted on-site audits at each, and arranged sample production. After reviewing audit reports and samples, the client selected 2 new suppliers. We managed the transition and oversaw the first 3 production runs.',
    result: '22% reduction in unit cost, zero defect shipments across all 3 production runs, and a more resilient dual-supplier strategy.',
    metrics: ['22% cost reduction', 'Zero defect shipments', '3 successful production runs', '2 verified new suppliers'],
    imgId: 'cs-uk-furniture-img-a1b2c3',
    titleId: 'cs-uk-furniture-title',
    descId: 'cs-uk-furniture-desc',
  },
  {
    id: 'us-electronics',
    industry: 'Electronics',
    country: 'United States',
    title: 'US Brand Launches Private Label Electronics Line on Schedule',
    challenge: 'An American consumer electronics brand wanted to launch a private label product line but had no experience sourcing from China. They needed a reliable OEM partner and full project management from design to delivery.',
    solution: 'We sourced and audited 6 OEM manufacturers, shortlisted 2 for sample production, and managed the entire development process including tooling, compliance testing (CE/FCC), and production. We conducted pre-shipment inspection on the full 10,000-unit order.',
    result: 'On-time delivery for the product launch, full CE and FCC compliance achieved, and a long-term OEM relationship established.',
    metrics: ['10,000 units delivered on time', 'CE & FCC certified', 'Full project management', 'Ongoing OEM partnership'],
    imgId: 'cs-us-electronics-img-d4e5f6',
    titleId: 'cs-us-electronics-title',
    descId: 'cs-us-electronics-desc',
  },
  {
    id: 'au-apparel',
    industry: 'Apparel',
    country: 'Australia',
    title: 'Australian Fashion Brand Scales Production 3x Without Quality Drop',
    challenge: 'A growing Australian fashion brand needed to scale from 500 to 1,500 units per style across 12 SKUs. Their existing factory could not handle the volume, and they were concerned about maintaining quality at scale.',
    solution: 'We identified a factory in Guangzhou with the right capacity and experience in their product category. We managed the onboarding process, negotiated pricing for the higher volume, and conducted inline QC inspections throughout production.',
    result: '3x volume increase achieved without any quality issues. The brand has since placed 4 additional orders with the same factory.',
    metrics: ['3x production volume', 'Consistent quality maintained', '12 SKUs managed', '4 repeat orders placed'],
    imgId: 'cs-au-apparel-img-g7h8i9',
    titleId: 'cs-au-apparel-title',
    descId: 'cs-au-apparel-desc',
  },
  {
    id: 'de-industrial',
    industry: 'Industrial',
    country: 'Germany',
    title: 'German Distributor Finds Certified Supplier for Safety Equipment',
    challenge: 'A German industrial distributor needed to source personal protective equipment (PPE) that met EU safety standards. Finding a Chinese supplier with the right certifications and documentation was proving difficult.',
    solution: 'We searched our network for PPE manufacturers with CE certification and relevant ISO standards. We verified 3 candidates, reviewed their certification documentation, and arranged factory audits. We also coordinated third-party lab testing for the selected supplier.',
    result: 'Fully certified supplier identified and onboarded within 6 weeks. First order of 5,000 units passed all compliance checks.',
    metrics: ['CE certified supplier', '6-week onboarding', '5,000 units first order', 'Full compliance documentation'],
    imgId: 'cs-de-industrial-img-j1k2l3',
    titleId: 'cs-de-industrial-title',
    descId: 'cs-de-industrial-desc',
  },
  {
    id: 'ca-consumer',
    industry: 'Consumer Goods',
    country: 'Canada',
    title: 'Canadian E-Commerce Seller Reduces Defect Rate from 8% to Under 1%',
    challenge: 'A Canadian Amazon seller was experiencing an 8% defect rate on their product line, leading to negative reviews and high return costs. They needed to fix quality issues without changing suppliers.',
    solution: 'We conducted a factory audit to identify the root causes of defects, worked with the supplier to implement corrective actions, and introduced a pre-shipment inspection protocol for all future orders.',
    result: 'Defect rate dropped from 8% to under 1% within 2 production cycles. The seller\'s product rating improved from 3.8 to 4.5 stars.',
    metrics: ['Defect rate: 8% → <1%', 'Product rating: 3.8 → 4.5★', 'Root cause identified', 'QC protocol implemented'],
    imgId: 'cs-ca-consumer-img-m4n5o6',
    titleId: 'cs-ca-consumer-title',
    descId: 'cs-ca-consumer-desc',
  },
  {
    id: 'sg-packaging',
    industry: 'Packaging',
    country: 'Singapore',
    title: 'Singapore Retailer Sources Custom Packaging at 35% Below Market Rate',
    challenge: 'A Singapore-based retail brand needed custom printed packaging for a product launch but found local quotes too expensive. They wanted to explore China sourcing but were unsure about minimum order quantities and lead times.',
    solution: 'We identified 3 packaging manufacturers in Guangdong, negotiated pricing and MOQs, and managed the artwork approval and sample process. We also coordinated consolidation with their product shipment to reduce freight costs.',
    result: '35% cost saving versus local quotes, MOQ negotiated down to 2,000 units, and packaging arrived consolidated with the product order.',
    metrics: ['35% cost saving', 'MOQ: 2,000 units', 'Consolidated shipment', 'On-time for product launch'],
    imgId: 'cs-sg-packaging-img-p7q8r9',
    titleId: 'cs-sg-packaging-title',
    descId: 'cs-sg-packaging-desc',
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
      <section className="bg-[#1a2e4a] py-16 md:py-24">
        <div className="section-container text-center">
          <span className="inline-block bg-[#e85d26]/20 text-[#e85d26] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide mb-4">
            Case Studies
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Real Results for Real Buyers
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            See how we've helped businesses across industries and countries source smarter from China.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-white py-16 md:py-24">
        <div className="section-container">
          <div className="space-y-16">
            {caseStudies.map((cs, i) => (
              <div key={cs.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start`}>
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-[#e85d26] text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {cs.industry}
                    </span>
                    <span className="text-[#6b7280] text-sm">{cs.country}</span>
                  </div>
                  <h2 id={cs.titleId} className="text-2xl md:text-3xl font-bold text-[#1a2e4a] mb-6">{cs.title}</h2>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h3 className="font-semibold text-[#1a2e4a] text-sm uppercase tracking-wide mb-2">The Challenge</h3>
                      <p className="text-[#6b7280] text-sm leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1a2e4a] text-sm uppercase tracking-wide mb-2">Our Solution</h3>
                      <p id={cs.descId} className="text-[#6b7280] text-sm leading-relaxed">{cs.solution}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1a2e4a] text-sm uppercase tracking-wide mb-2">The Result</h3>
                      <p className="text-[#1f2937] text-sm leading-relaxed font-medium">{cs.result}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {cs.metrics.map((m) => (
                      <div key={m} className="flex items-center gap-2 bg-[#f3f4f6] rounded-lg px-3 py-2">
                        <CheckCircle className="w-4 h-4 text-[#e85d26] flex-shrink-0" />
                        <span className="text-[#1f2937] text-xs font-medium">{m}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <img
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cs.title}
                    className="w-full rounded-2xl shadow-lg object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f3f4f6] py-16">
        <div className="section-container text-center">
          <h2 className="text-3xl font-bold text-[#1a2e4a] mb-4">Want Results Like These?</h2>
          <p className="text-[#6b7280] text-lg mb-8 max-w-xl mx-auto">
            Tell us about your sourcing challenge and we'll put together a plan to help you achieve similar outcomes.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#e85d26] hover:bg-[#c94d1e] text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
