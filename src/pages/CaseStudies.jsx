import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { SectionHeader, CtaButton } from '@/components/shared';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const cases = [
  {
    id: 'furniture-uk',
    client: 'HomeStyle UK',
    country: '🇬🇧 United Kingdom',
    industry: 'Furniture & Home Goods',
    product: 'Ergonomic Office Chairs',
    challenge: 'A UK furniture retailer needed to source EN 1335-certified ergonomic office chairs at a competitive price point. Previous attempts to source independently had resulted in non-compliant products and wasted samples.',
    solution: 'We identified three certified manufacturers in Guangdong, conducted factory audits, and coordinated a sample round. We negotiated pricing and managed the full production cycle including pre-shipment inspection.',
    results: [
      '22% reduction in unit cost vs. previous supplier',
      'EN 1335 certification maintained across all SKUs',
      'First order of 800 units delivered on schedule',
      'Ongoing supplier relationship established',
    ],
    imgId: 'cs-furniture-uk-a1b2',
    titleId: 'cs-furniture-uk-title',
    descId: 'cs-furniture-uk-desc',
  },
  {
    id: 'electronics-us',
    client: 'TechBright USA',
    country: '🇺🇸 United States',
    industry: 'Electronics & Lighting',
    product: 'UL-Certified LED Fixtures',
    challenge: 'A US electronics brand needed to scale their LED lighting product line from 500 to 10,000 units while maintaining UL certification and consistent quality across batches.',
    solution: 'We sourced a UL-certified LED manufacturer in Zhongshan, conducted capacity audits, and implemented a multi-stage QC process. We also coordinated sea freight logistics to reduce shipping costs.',
    results: [
      'Scaled from 500 to 10,000 units in 6 months',
      'UL certification maintained across all batches',
      '18% reduction in per-unit logistics cost',
      'Zero defect rate on final two shipments',
    ],
    imgId: 'cs-electronics-us-c3d4',
    titleId: 'cs-electronics-us-title',
    descId: 'cs-electronics-us-desc',
  },
  {
    id: 'apparel-au',
    client: 'Sportivo Australia',
    country: '🇦🇺 Australia',
    industry: 'Apparel & Textiles',
    product: 'Private Label Activewear',
    challenge: 'An Australian sportswear startup wanted to launch a private label activewear line but had no experience with Chinese manufacturers or product development processes.',
    solution: 'We guided the client through fabric selection, connected them with an OEM manufacturer in Fujian, managed the full sample development process, and coordinated branded packaging and labeling.',
    results: [
      'Full private label line developed from scratch',
      'First collection of 12 SKUs delivered on schedule',
      'Custom branding and packaging completed',
      'Repeat order placed within 3 months of launch',
    ],
    imgId: 'cs-apparel-au-e5f6',
    titleId: 'cs-apparel-au-title',
    descId: 'cs-apparel-au-desc',
  },
  {
    id: 'tools-de',
    client: 'Werkzeug GmbH',
    country: '🇩🇪 Germany',
    industry: 'Machinery & Tools',
    product: 'Power Tool Accessories',
    challenge: 'A German hardware distributor needed to source CE-marked power tool accessories at scale. They had concerns about quality consistency and supplier reliability after a previous bad experience.',
    solution: 'We audited five potential suppliers, selected two that met CE requirements, and implemented a rigorous incoming quality control process. We also set up a dual-sourcing arrangement to reduce supply risk.',
    results: [
      'CE certification verified for all product lines',
      'Dual-supplier setup reduces supply chain risk',
      'Quality defect rate reduced from 4.2% to 0.8%',
      'Annual order volume of €450,000 managed',
    ],
    imgId: 'cs-tools-de-g7h8',
    titleId: 'cs-tools-de-title',
    descId: 'cs-tools-de-desc',
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
      <section className="bg-blue-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold-accent text-sm font-semibold uppercase tracking-widest mb-3">Client Results</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Case Studies</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Real sourcing projects, real outcomes. See how we've helped businesses across industries source from China successfully.
          </p>
          <CtaButton variant="white" label="Start Your Sourcing Project" />
        </div>
      </section>

      {/* Cases */}
      <section className="py-16 md:py-24 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {cases.map((c, i) => {
            const isEven = i % 2 === 0;
            return (
              <div key={c.id} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                <div className={`grid grid-cols-1 lg:grid-cols-2`}>
                  <div className={`relative h-64 lg:h-auto min-h-[280px] ${isEven ? '' : 'lg:order-2'}`}>
                    <img
                      alt={c.product}
                      data-strk-img-id={c.imgId}
                      data-strk-img={`[${c.descId}] [${c.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className={`p-6 md:p-8 ${isEven ? '' : 'lg:order-1'}`}>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs bg-blue-50 text-blue-navy font-medium px-2.5 py-1 rounded-full">{c.industry}</span>
                      <span className="text-xs text-gray-500">{c.country}</span>
                    </div>
                    <h2 id={c.titleId} className="text-xl md:text-2xl font-bold text-blue-navy mb-1">{c.client}</h2>
                    <p className="text-red-china font-medium text-sm mb-4">{c.product}</p>

                    <div className="space-y-3 mb-5">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">Challenge</p>
                        <p id={c.descId} className="text-gray-700 text-sm leading-relaxed">{c.challenge}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">Our Approach</p>
                        <p className="text-gray-700 text-sm leading-relaxed">{c.solution}</p>
                      </div>
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">Results</p>
                      <ul className="space-y-1.5">
                        {c.results.map((r) => (
                          <li key={r} className="flex items-start gap-2 text-sm text-gray-700">
                            <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
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
      </section>

      {/* CTA */}
      <section className="py-14 bg-white border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-blue-navy mb-3">Ready to Write Your Own Success Story?</h2>
          <p className="text-gray-600 mb-6">
            Contact us today and let's discuss how we can help you source from China with confidence.
          </p>
          <CtaButton label="Get a Free Sourcing Quote" />
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
