import { useEffect, useRef } from 'react';
import { TrendingUp, Clock, Globe } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import PageHero from '@/components/shared/PageHero';
import CtaBanner from '@/components/shared/CtaBanner';

const cases = [
  {
    id: 'case-furniture-uk',
    titleId: 'case-title-furniture-uk',
    descId: 'case-desc-furniture-uk',
    imgId: 'case-img-furniture-uk-a1b2c3',
    category: 'Furniture',
    country: 'United Kingdom',
    title: 'UK Retailer Cuts Sourcing Costs by 22%',
    challenge: 'A UK home goods retailer was sourcing furniture through a trading company and paying inflated prices. They needed direct factory access in Foshan but had no local contacts and no way to verify suppliers.',
    solution: 'We identified 4 qualified furniture factories in Foshan, conducted on-site audits, and arranged sample shipments. After the client approved samples, we managed the first container order including production monitoring and pre-shipment inspection.',
    result: '22% cost reduction vs. previous supplier. On-time delivery. Ongoing relationship with 2 verified factories.',
    metrics: [
      { label: 'Cost Reduction', value: '22%' },
      { label: 'Factories Audited', value: '4' },
      { label: 'Time to First Order', value: '8 weeks' },
    ],
  },
  {
    id: 'case-electronics-us',
    titleId: 'case-title-electronics-us',
    descId: 'case-desc-electronics-us',
    imgId: 'case-img-electronics-us-d4e5f6',
    category: 'Electronics',
    country: 'United States',
    title: 'US Brand Launches Private Label Bluetooth Speakers',
    challenge: 'An American e-commerce startup wanted to launch a private label Bluetooth speaker on Amazon. They had a product concept but no manufacturing contacts and needed a supplier who could handle custom branding and packaging.',
    solution: 'We sourced 5 Shenzhen manufacturers, shortlisted 2 based on capability and price, and arranged custom sample rounds. We managed 3 rounds of revisions, coordinated CE and FCC certification testing, and handled pre-shipment inspection.',
    result: 'Product launched on Amazon within 4 months of initial inquiry. Achieved 4.4-star average rating in first 3 months.',
    metrics: [
      { label: 'Time to Launch', value: '4 months' },
      { label: 'Sample Rounds', value: '3' },
      { label: 'Amazon Rating', value: '4.4★' },
    ],
  },
  {
    id: 'case-apparel-fr',
    titleId: 'case-title-apparel-fr',
    descId: 'case-desc-apparel-fr',
    imgId: 'case-img-apparel-fr-g7h8i9',
    category: 'Apparel',
    country: 'France',
    title: 'French Brand Establishes Certified Textile Supply Chain',
    challenge: 'A French sustainable fashion brand needed OEKO-TEX certified fabric suppliers in China. Previous attempts to source independently resulted in uncertified materials and wasted time.',
    solution: 'We identified 6 mills with valid OEKO-TEX certifications, verified the certificates directly with the certification body, and arranged fabric samples. We also coordinated with a Guangzhou garment factory for production.',
    result: 'Certified supply chain established in 6 weeks. Brand launched its China-sourced collection on schedule.',
    metrics: [
      { label: 'Time to Certified Supply Chain', value: '6 weeks' },
      { label: 'Certified Mills Identified', value: '6' },
      { label: 'Collections Launched', value: '2' },
    ],
  },
  {
    id: 'case-toys-au',
    titleId: 'case-title-toys-au',
    descId: 'case-desc-toys-au',
    imgId: 'case-img-toys-au-j1k2l3',
    category: 'Toys',
    country: 'Australia',
    title: 'Australian Toy Importer Passes EN71 Compliance',
    challenge: 'An Australian toy importer had previously received a shipment that failed EN71 safety testing, resulting in a costly recall. They needed a new supplier with proven compliance capabilities.',
    solution: 'We audited 3 toy factories in Guangdong, focusing specifically on their quality management systems and testing procedures. We arranged pre-production material testing and a full pre-shipment inspection before the next order.',
    result: 'Zero compliance failures on subsequent orders. Importer now uses our inspection service for every shipment.',
    metrics: [
      { label: 'Compliance Failures', value: '0' },
      { label: 'Factories Audited', value: '3' },
      { label: 'Ongoing Inspections', value: 'Every order' },
    ],
  },
  {
    id: 'case-machinery-de',
    titleId: 'case-title-machinery-de',
    descId: 'case-desc-machinery-de',
    imgId: 'case-img-machinery-de-m4n5o6',
    category: 'Machinery',
    country: 'Germany',
    title: 'German Distributor Sources Industrial Pumps at Scale',
    challenge: 'A German industrial distributor needed a reliable Chinese manufacturer for centrifugal pumps to supplement their European supply chain. Quality consistency and CE certification were non-negotiable.',
    solution: 'We identified manufacturers in Zhejiang with CE-certified pump lines, conducted factory audits, and arranged technical sample testing. We also coordinated with a third-party lab for independent performance testing.',
    result: 'Qualified supplier identified and approved within 10 weeks. Annual order volume of €400K established.',
    metrics: [
      { label: 'Time to Qualified Supplier', value: '10 weeks' },
      { label: 'Annual Order Volume', value: '€400K' },
      { label: 'CE Certified', value: 'Yes' },
    ],
  },
  {
    id: 'case-packaging-ca',
    titleId: 'case-title-packaging-ca',
    descId: 'case-desc-packaging-ca',
    imgId: 'case-img-packaging-ca-p7q8r9',
    category: 'Packaging',
    country: 'Canada',
    title: 'Canadian Brand Reduces Packaging Costs by 35%',
    challenge: 'A Canadian cosmetics brand was spending heavily on domestic packaging. They wanted to explore Chinese packaging suppliers but were concerned about quality consistency and minimum order quantities.',
    solution: 'We sourced 4 packaging manufacturers in Guangdong, negotiated MOQs suitable for a growing brand, and managed 2 rounds of sample revisions to match the brand\'s design specifications.',
    result: '35% reduction in packaging costs. Consistent quality across 6 consecutive orders.',
    metrics: [
      { label: 'Cost Reduction', value: '35%' },
      { label: 'Consecutive Orders', value: '6' },
      { label: 'Sample Rounds', value: '2' },
    ],
  },
];

const CaseStudies = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      <PageHero
        title="Case Studies"
        subtitle="Real sourcing projects, real results. Here's how we've helped businesses across industries and countries source successfully from China."
        breadcrumb="Case Studies"
        cta="Start Your Sourcing Project"
      />

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {cases.map((cs, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={cs.id} className="bg-[#f4f6f9] rounded-2xl overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className={`aspect-[4/3] lg:aspect-auto bg-[#e8f0fb] overflow-hidden ${isEven ? '' : 'lg:order-2'}`}>
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
                    <div className={`p-8 md:p-10 ${isEven ? '' : 'lg:order-1'}`}>
                      <div className="flex items-center gap-2 mb-4">
                        <span className="bg-[#e8f0fb] text-[#1a4f8a] text-xs font-semibold px-3 py-1 rounded-full">{cs.category}</span>
                        <div className="flex items-center gap-1 text-[#64748b] text-xs">
                          <Globe className="w-3 h-3" />
                          <span>{cs.country}</span>
                        </div>
                      </div>
                      <h2 id={cs.titleId} className="text-xl md:text-2xl font-bold text-[#1a202c] mb-4">{cs.title}</h2>

                      <div className="space-y-4 mb-6">
                        <div>
                          <h4 className="text-xs font-semibold text-[#64748b] uppercase tracking-wide mb-1">Challenge</h4>
                          <p id={cs.descId} className="text-[#1a202c] text-sm leading-relaxed">{cs.challenge}</p>
                        </div>
                        <div>
                          <h4 className="text-xs font-semibold text-[#64748b] uppercase tracking-wide mb-1">Our Approach</h4>
                          <p className="text-[#1a202c] text-sm leading-relaxed">{cs.solution}</p>
                        </div>
                        <div>
                          <h4 className="text-xs font-semibold text-[#64748b] uppercase tracking-wide mb-1">Result</h4>
                          <p className="text-[#1a202c] text-sm leading-relaxed font-medium">{cs.result}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#e2e8f0]">
                        {cs.metrics.map((m) => (
                          <div key={m.label} className="text-center">
                            <div className="text-xl font-bold text-[#1a4f8a]">{m.value}</div>
                            <div className="text-[#64748b] text-xs mt-0.5">{m.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Want Results Like These?"
        subtitle="Tell us about your sourcing project and we'll put together a plan tailored to your needs."
        buttonText="Get a Free Sourcing Quote"
      />
    </div>
  );
};

export default CaseStudies;
