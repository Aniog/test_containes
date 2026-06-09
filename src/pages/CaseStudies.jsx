import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, Star } from 'lucide-react';
import CTAButton from '@/components/shared/CTAButton';
import CTABannerSection from '@/components/home/CTABannerSection';

const caseStudies = [
  {
    id: 'cs-electronics-us',
    tag: 'Electronics',
    client: 'US Electronics Retailer',
    country: '🇺🇸 United States',
    product: 'Bluetooth Speakers',
    titleId: 'cs-title-electronics-us',
    descId: 'cs-desc-electronics-us',
    imgId: 'cs-img-electronics-us-1a2b3c',
    challenge: 'The client had been defrauded by a supplier on a previous order and needed a verified manufacturer for 5,000 Bluetooth speakers with CE and FCC certification.',
    solution: 'We identified 4 verified factories, conducted on-site audits, arranged samples, and negotiated a competitive unit price. A pre-shipment inspection confirmed 100% compliance.',
    result: 'Delivered 5,000 units on time with zero defects. The client saved 22% compared to their previous supplier and has since placed two additional orders.',
    metrics: ['22% cost reduction', '5,000 units delivered', 'Zero defects', '2 repeat orders'],
    desc: 'Bluetooth speaker sourcing and factory verification for US electronics retailer',
  },
  {
    id: 'cs-bamboo-uk',
    tag: 'Home Goods',
    client: 'UK Home Goods Brand',
    country: '🇬🇧 United Kingdom',
    product: 'Bamboo Kitchenware',
    titleId: 'cs-title-bamboo-uk',
    descId: 'cs-desc-bamboo-uk',
    imgId: 'cs-img-bamboo-uk-2b3c4d',
    challenge: 'The buyer needed FSC-certified bamboo kitchenware but struggled to find compliant suppliers willing to work with their MOQ of 2,000 units per SKU.',
    solution: 'We sourced 3 FSC-certified bamboo factories in Zhejiang, arranged samples for 8 SKUs, and managed a 3-container consolidated shipment.',
    result: 'All 8 SKUs delivered 2 weeks ahead of schedule. The brand launched their eco-friendly range on time for the holiday season.',
    metrics: ['8 SKUs sourced', '3 containers shipped', 'Delivered 2 weeks early', 'FSC certified'],
    desc: 'FSC-certified bamboo kitchenware sourcing for UK home goods brand',
  },
  {
    id: 'cs-activewear-au',
    tag: 'Apparel',
    client: 'Australian Activewear Brand',
    country: '🇦🇺 Australia',
    product: 'Private Label Activewear',
    titleId: 'cs-title-activewear-au',
    descId: 'cs-desc-activewear-au',
    imgId: 'cs-img-activewear-au-3c4d5e',
    challenge: 'The brand needed a reliable OEM partner for custom activewear with consistent quality across reorders, after experiencing quality inconsistencies with their previous factory.',
    solution: 'We audited 5 factories, selected the best match, and established a QC protocol with quarterly inspections. We manage all communication and reorder coordination.',
    result: 'Three successful reorders over 18 months with consistent quality. The brand has grown from 500 to 3,000 units per order.',
    metrics: ['3 successful reorders', '18-month partnership', '500 → 3,000 units/order', 'Consistent quality'],
    desc: 'Private label activewear OEM sourcing for Australian apparel brand',
  },
  {
    id: 'cs-tools-de',
    tag: 'Industrial',
    client: 'German Industrial Distributor',
    country: '🇩🇪 Germany',
    product: 'Power Tools',
    titleId: 'cs-title-tools-de',
    descId: 'cs-desc-tools-de',
    imgId: 'cs-img-tools-de-4d5e6f',
    challenge: 'The distributor needed CE-certified power tools at competitive prices to compete with established brands, with strict delivery deadlines for a trade show launch.',
    solution: 'We sourced 2 CE-certified factories, negotiated OEM branding rights, and coordinated air freight to meet the trade show deadline.',
    result: 'Products launched on time at the trade show. The distributor secured 3 new retail accounts based on the product range.',
    metrics: ['CE certified products', 'Trade show deadline met', '3 new retail accounts', 'OEM branding secured'],
    desc: 'CE-certified power tools sourcing for German industrial distributor',
  },
  {
    id: 'cs-toys-ca',
    tag: 'Toys',
    client: 'Canadian Toy Importer',
    country: '🇨🇦 Canada',
    product: 'Educational Toys',
    titleId: 'cs-title-toys-ca',
    descId: 'cs-desc-toys-ca',
    imgId: 'cs-img-toys-ca-5e6f7a',
    challenge: 'The importer needed ASTM and EN71-certified educational toys for the North American and European markets, with custom packaging and bilingual instructions.',
    solution: 'We found 2 certified toy factories, managed the certification process, and coordinated custom packaging design and production.',
    result: 'Successfully launched in both markets. The importer expanded their product range from 5 to 12 SKUs within the first year.',
    metrics: ['ASTM & EN71 certified', 'Dual market launch', '5 → 12 SKUs', 'Custom packaging'],
    desc: 'ASTM and EN71 certified educational toys sourcing for Canadian importer',
  },
  {
    id: 'cs-packaging-sg',
    tag: 'Packaging',
    client: 'Singapore E-commerce Brand',
    country: '🇸🇬 Singapore',
    product: 'Custom Packaging',
    titleId: 'cs-title-packaging-sg',
    descId: 'cs-desc-packaging-sg',
    imgId: 'cs-img-packaging-sg-6f7a8b',
    challenge: 'The brand needed premium custom packaging for their skincare line — custom boxes, tissue paper, and branded bags — with tight color matching requirements.',
    solution: 'We sourced a specialist packaging factory, managed color proofing, and coordinated a consolidated shipment of 5 packaging components.',
    result: 'Packaging matched brand standards exactly. The brand reported a significant improvement in unboxing experience and customer reviews.',
    metrics: ['5 packaging components', 'Exact color matching', 'Improved brand perception', 'On-time delivery'],
    desc: 'Custom premium packaging sourcing for Singapore e-commerce skincare brand',
  },
];

export default function CaseStudies() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <div className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-300 mb-3 bg-white/10 px-3 py-1 rounded-full">
            Case Studies
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Real Sourcing Projects, Real Results
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            A selection of completed sourcing projects for international buyers across different industries and countries.
          </p>
        </div>
      </div>

      {/* Case Studies */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((cs) => (
              <div key={cs.id} className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative h-52 bg-slate-100 overflow-hidden">
                  <img
                    alt={cs.product}
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-brand-blue text-white text-xs font-semibold px-3 py-1 rounded-full">{cs.tag}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 id={cs.titleId} className="text-lg font-semibold text-brand-navy">{cs.product}</h3>
                      <p className="text-sm text-gray-400">{cs.country} · {cs.client}</p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-5">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1">Challenge</p>
                      <p id={cs.descId} className="text-gray-600 text-sm leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1">Our Solution</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{cs.solution}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1">Result</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{cs.result}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
                    {cs.metrics.map((m) => (
                      <span key={m} className="inline-flex items-center gap-1 text-xs font-medium text-brand-blue bg-blue-50 px-2.5 py-1 rounded-full">
                        <Star className="w-3 h-3 text-brand-gold fill-brand-gold" />
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-500 mb-6">Have a similar sourcing challenge? Let's discuss how we can help.</p>
            <CTAButton to="/contact" variant="primary" className="text-base px-8 py-4">
              Start Your Sourcing Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </CTAButton>
          </div>
        </div>
      </section>

      <CTABannerSection />
    </div>
  );
}
