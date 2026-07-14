import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { CheckCircle, ArrowRight, Globe } from 'lucide-react';

const cases = [
  {
    id: 'cs-furniture-us',
    industry: 'Furniture',
    country: 'United States',
    title: 'US Retailer Cuts Sourcing Costs by 22%',
    challenge: 'A mid-size US furniture retailer was over-reliant on a single supplier and experiencing quality inconsistencies. They needed to diversify their supply base without disrupting operations.',
    solution: 'We identified three verified furniture factories in Foshan, conducted on-site audits, and negotiated pricing. We managed QC inspections across two production runs and coordinated sea freight to Los Angeles.',
    results: ['22% reduction in unit cost', 'Zero defect shipments across both runs', 'Two new verified backup suppliers', 'Delivery on schedule for both orders'],
    titleId: 'cs-furniture-us-title',
    descId: 'cs-furniture-us-desc',
    imgId: 'cs-furniture-us-img-a1b2c3',
  },
  {
    id: 'cs-electronics-eu',
    industry: 'Electronics',
    country: 'Germany',
    title: 'EU Brand Launches Private Label Product Line',
    challenge: 'A German consumer electronics brand wanted to launch a private label smart home product. They had no existing China supplier relationships and needed a compliant OEM partner.',
    solution: 'We sourced and audited five OEM candidates, arranged sample evaluation, and managed the entire development process from prototype to production. We also coordinated CE certification testing.',
    results: ['Product launched on schedule (14 weeks)', 'CE certification secured', 'OEM partner with ISO 9001 certification', 'First shipment delivered defect-free'],
    titleId: 'cs-electronics-eu-title',
    descId: 'cs-electronics-eu-desc',
    imgId: 'cs-electronics-eu-img-d4e5f6',
  },
  {
    id: 'cs-apparel-au',
    industry: 'Apparel',
    country: 'Australia',
    title: 'Australian Fashion Brand Scales Production 10x',
    challenge: 'An Australian fashion brand needed to scale from 500 to 5,000 units per SKU to meet growing retail demand. Their existing supplier could not handle the volume.',
    solution: 'We found a compliant Guangzhou factory with capacity for the required volume, ran inline inspections during production, and coordinated sea freight to Melbourne with full documentation.',
    results: ['Production scaled from 500 to 5,000 units', 'On-spec delivery across all SKUs', 'BSCI-compliant factory', 'Sea freight cost 40% lower than previous air freight'],
    titleId: 'cs-apparel-au-title',
    descId: 'cs-apparel-au-desc',
    imgId: 'cs-apparel-au-img-g7h8i9',
  },
  {
    id: 'cs-hardware-uk',
    industry: 'Hardware',
    country: 'United Kingdom',
    title: 'UK Distributor Verifies New Tool Supplier',
    challenge: 'A UK hardware distributor found a promising supplier on Alibaba but had no way to verify their legitimacy or production quality before placing a large order.',
    solution: 'We conducted a full factory audit, reviewed certifications, and ran a pre-shipment inspection on the first order. We also negotiated payment terms and reviewed the purchase contract.',
    results: ['Factory verified as legitimate and compliant', 'Pre-shipment inspection passed', 'Favorable payment terms negotiated', 'Ongoing supplier relationship established'],
    titleId: 'cs-hardware-uk-title',
    descId: 'cs-hardware-uk-desc',
    imgId: 'cs-hardware-uk-img-j1k2l3',
  },
  {
    id: 'cs-packaging-ca',
    industry: 'Packaging',
    country: 'Canada',
    title: 'Canadian Brand Sources Custom Eco Packaging',
    challenge: 'A Canadian e-commerce brand needed custom eco-friendly packaging at scale. They had struggled to find suppliers who could meet both their design requirements and sustainability standards.',
    solution: 'We sourced three packaging manufacturers specializing in FSC-certified materials, arranged sample production, and managed the approval process. We coordinated air freight for the first urgent order.',
    results: ['FSC-certified packaging supplier secured', 'Custom design approved in 3 weeks', 'First order delivered on time', 'Cost 30% below previous local supplier'],
    titleId: 'cs-packaging-ca-title',
    descId: 'cs-packaging-ca-desc',
    imgId: 'cs-packaging-ca-img-m4n5o6',
  },
  {
    id: 'cs-toys-nl',
    industry: 'Toys',
    country: 'Netherlands',
    title: 'Dutch Toy Brand Passes EN71 Certification',
    challenge: 'A Dutch toy brand needed to source a new product line that met strict EU EN71 safety standards. Previous attempts with other agents had resulted in failed certification tests.',
    solution: 'We identified factories with proven EN71 experience, arranged pre-production material testing, and managed the certification process with an accredited lab. We also ran pre-shipment inspections.',
    results: ['EN71 certification passed first attempt', 'Compliant factory with prior EU export history', 'Pre-shipment inspection passed', 'Product launched on schedule'],
    titleId: 'cs-toys-nl-title',
    descId: 'cs-toys-nl-desc',
    imgId: 'cs-toys-nl-img-p7q8r9',
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
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-red-300 uppercase tracking-wider mb-3">Client Results</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">Case Studies</h1>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto">
            Real projects from real clients. See how we've helped businesses across industries source from China successfully.
          </p>
        </div>
      </section>

      {/* Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {cases.map((cs, i) => (
              <div key={cs.id} className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
                <div className={`lg:col-span-2 rounded-xl overflow-hidden shadow-md bg-gray-100 h-64 ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <img
                    alt={cs.title}
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className={`lg:col-span-3 ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="bg-navy text-white text-xs font-semibold px-2.5 py-1 rounded-full">{cs.industry}</span>
                    <span className="flex items-center gap-1 bg-gray-100 text-text-muted text-xs font-medium px-2.5 py-1 rounded-full">
                      <Globe className="w-3 h-3" /> {cs.country}
                    </span>
                  </div>
                  <h2 id={cs.titleId} className="text-xl md:text-2xl font-bold text-navy mb-4">{cs.title}</h2>
                  <div className="space-y-4 mb-5">
                    <div>
                      <p className="text-xs font-semibold text-brand-red uppercase tracking-wider mb-1">Challenge</p>
                      <p id={cs.descId} className="text-sm text-text-muted leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-brand-red uppercase tracking-wider mb-1">Our Solution</p>
                      <p className="text-sm text-text-muted leading-relaxed">{cs.solution}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-navy uppercase tracking-wider mb-2">Results</p>
                    <ul className="space-y-1.5">
                      {cs.results.map((r) => (
                        <li key={r} className="flex items-start gap-2 text-sm text-text-dark">
                          <CheckCircle className="w-4 h-4 text-brand-red mt-0.5 shrink-0" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">Want Results Like These?</h2>
          <p className="text-text-muted mb-8">Tell us about your sourcing project and we'll put together a plan.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
