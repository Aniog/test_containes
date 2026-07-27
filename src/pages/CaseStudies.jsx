import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';
import CTABanner from '@/components/home/CTABanner';

const cases = [
  {
    id: 'furniture-uk',
    client: 'UK Furniture Retailer',
    country: 'United Kingdom',
    category: 'Furniture & Home Decor',
    industry: 'Retail',
    challenge: 'A UK-based furniture retailer needed to source 500 units of custom wooden shelving with specific dimensions, finish, and packaging requirements. They had a tight 8-week timeline and had previously been let down by a supplier found on Alibaba.',
    solution: 'We identified 4 qualified factories in Foshan, conducted on-site audits at 2 shortlisted facilities, and negotiated pricing and terms. We managed sample rounds, coordinated production, and conducted a pre-shipment inspection.',
    result: 'Goods were delivered on time with zero defects. The client saved 18% compared to their previous supplier\'s pricing and has since placed 3 repeat orders.',
    metrics: [
      { label: 'Cost Reduction', value: '18%' },
      { label: 'Delivery', value: 'On Time' },
      { label: 'Defect Rate', value: '0%' },
      { label: 'Repeat Orders', value: '3' },
    ],
    imgId: 'cs-furniture-uk-1a2b3c',
    titleId: 'cs-furniture-uk-title',
    descId: 'cs-furniture-uk-desc',
  },
  {
    id: 'electronics-us',
    client: 'US Electronics Brand',
    country: 'United States',
    category: 'Electronics & Components',
    industry: 'Consumer Electronics',
    challenge: 'A US electronics brand had been receiving substandard LED lighting products from their existing Chinese supplier. Products were failing CE and FCC certification tests, resulting in returns and reputational damage.',
    solution: 'We audited 6 alternative factories in Shenzhen, verified certifications, and selected a replacement supplier with a strong compliance track record. We implemented a rigorous inspection protocol covering electrical safety, labeling, and packaging.',
    result: 'The new supplier achieved a 99.2% pass rate on pre-shipment inspections. The client successfully relaunched their product line with full compliance documentation.',
    metrics: [
      { label: 'QC Pass Rate', value: '99.2%' },
      { label: 'Factories Audited', value: '6' },
      { label: 'Certifications', value: 'CE + FCC' },
      { label: 'Timeline', value: '6 Weeks' },
    ],
    imgId: 'cs-electronics-us-2b3c4d',
    titleId: 'cs-electronics-us-title',
    descId: 'cs-electronics-us-desc',
  },
  {
    id: 'apparel-au',
    client: 'Australian Activewear Brand',
    country: 'Australia',
    category: 'Clothing & Textiles',
    industry: 'Fashion & Apparel',
    challenge: 'An Australian startup was launching a new activewear line and needed a reliable OEM manufacturer with experience in performance fabrics and sustainable materials. They had no prior experience sourcing from China.',
    solution: 'We guided the client through the entire sourcing process — from spec development to supplier selection. We sourced 2 certified OEM factories in Guangzhou, managed 3 rounds of samples, and coordinated the first production run.',
    result: 'First production run of 2,000 units was completed and delivered within 10 weeks. The client successfully launched their brand and has since scaled to 5,000 units per run.',
    metrics: [
      { label: 'First Order', value: '2,000 units' },
      { label: 'Timeline', value: '10 Weeks' },
      { label: 'Sample Rounds', value: '3' },
      { label: 'Scale-up', value: '5,000 units' },
    ],
    imgId: 'cs-apparel-au-3c4d5e',
    titleId: 'cs-apparel-au-title',
    descId: 'cs-apparel-au-desc',
  },
  {
    id: 'toys-de',
    client: 'German Toy Distributor',
    country: 'Germany',
    category: 'Toys & Baby Products',
    industry: 'Toys & Games',
    challenge: 'A German toy distributor needed to source a range of educational toys compliant with EN71 European safety standards. They required detailed material testing documentation and factory social compliance audits.',
    solution: 'We identified 3 factories in Shantou with EN71 experience, conducted BSCI social compliance audits, and coordinated third-party lab testing for all product lines. We managed production across 8 SKUs simultaneously.',
    result: 'All 8 product lines passed EN71 testing. Goods were delivered ahead of the Christmas season deadline. The client expanded their China sourcing program the following year.',
    metrics: [
      { label: 'SKUs Managed', value: '8' },
      { label: 'Compliance', value: 'EN71 + BSCI' },
      { label: 'Delivery', value: 'Ahead of Schedule' },
      { label: 'Test Pass Rate', value: '100%' },
    ],
    imgId: 'cs-toys-de-4d5e6f',
    titleId: 'cs-toys-de-title',
    descId: 'cs-toys-de-desc',
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
    <div>
      {/* Page Header */}
      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">Client Results</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">
            Case Studies
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Real sourcing projects, real outcomes. Here's how we've helped buyers across different industries and countries.
          </p>
        </div>
      </section>

      {/* Cases */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={containerRef} className="space-y-14">
            {cases.map((c, index) => (
              <div key={c.id} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                <div className="grid grid-cols-1 lg:grid-cols-5">
                  {/* Image */}
                  <div className="lg:col-span-2 h-56 lg:h-auto bg-gray-100 overflow-hidden">
                    <img
                      alt={c.client}
                      data-strk-img-id={c.imgId}
                      data-strk-img={`[${c.descId}] [${c.titleId}]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="500"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-3 p-7 md:p-8">
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className="text-xs font-medium text-primary bg-lightblue px-2.5 py-1 rounded-full">{c.category}</span>
                      <span className="text-xs text-gray-400">{c.country}</span>
                      <span className="text-xs text-gray-400">·</span>
                      <span className="text-xs text-gray-400">{c.industry}</span>
                    </div>

                    <h2 id={c.titleId} className="text-xl font-bold text-navy mb-4">{c.client}</h2>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1.5">Challenge</h4>
                        <p id={c.descId} className="text-gray-600 text-sm leading-relaxed">{c.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1.5">Our Approach</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{c.solution}</p>
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1.5">Result</h4>
                        <p className="text-gray-700 text-sm leading-relaxed font-medium">{c.result}</p>
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {c.metrics.map((m) => (
                        <div key={m.label} className="bg-gray-50 rounded-lg p-3 text-center">
                          <p className="text-lg font-bold text-primary">{m.value}</p>
                          <p className="text-xs text-gray-500 mt-0.5">{m.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <p className="text-gray-600 mb-6">Ready to achieve similar results for your business?</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-base"
            >
              Get a Free Sourcing Quote
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
