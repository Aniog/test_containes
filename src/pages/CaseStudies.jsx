import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, MapPin, Package, TrendingUp } from 'lucide-react';

const caseStudies = [
  {
    id: 'us-furniture-retailer',
    industry: 'Furniture',
    country: 'United States',
    title: 'US Retailer Reduces Sourcing Cost by 22%',
    challenge: 'A mid-size US furniture importer was experiencing recurring quality issues with their existing Chinese factory and needed to diversify their supplier base without disrupting their supply chain.',
    solution: 'We identified three verified alternative manufacturers in Foshan, conducted on-site audits, and managed a phased transition. We also implemented a pre-shipment inspection protocol for all future orders.',
    result: '22% reduction in unit cost, zero quality rejections over 18 months, and a second verified backup supplier on standby.',
    metrics: [
      { label: 'Cost Reduction', value: '22%' },
      { label: 'Quality Rejections', value: '0' },
      { label: 'Months Monitored', value: '18' },
    ],
    titleId: 'cs-us-furniture-title',
    descId: 'cs-us-furniture-desc',
    imgId: 'cs-us-furniture-img-a1b2c3',
  },
  {
    id: 'eu-electronics-brand',
    industry: 'Electronics',
    country: 'Germany',
    title: 'European Brand Launches CE-Certified Product Line',
    challenge: 'A German consumer electronics brand needed a reliable PCB assembly partner with CE certification capability to launch a new smart home product line within a tight 6-week timeline.',
    solution: 'We sourced and audited three factories in Shenzhen, verified CE certification processes, and onboarded the selected factory. We managed sample development and coordinated the first production run.',
    result: 'Product launched on schedule, CE certified, zero compliance issues, and the factory relationship has continued for three subsequent product launches.',
    metrics: [
      { label: 'Time to Onboard', value: '6 wks' },
      { label: 'Compliance Issues', value: '0' },
      { label: 'Follow-on Projects', value: '3' },
    ],
    titleId: 'cs-eu-electronics-title',
    descId: 'cs-eu-electronics-desc',
    imgId: 'cs-eu-electronics-img-d4e5f6',
  },
  {
    id: 'au-apparel-brand',
    industry: 'Apparel',
    country: 'Australia',
    title: 'Australian Brand Scales Private Label Production',
    challenge: 'An Australian fashion brand needed a scalable garment factory for private label production. Their previous supplier could not handle growing order volumes and quality was inconsistent.',
    solution: 'We sourced a BSCI-certified garment factory in Guangzhou, managed sample development through four revision rounds, and implemented an in-line QC process for all production runs.',
    result: 'Scaled from 500 to 5,000 units per month within 12 months, with consistent quality and on-time delivery.',
    metrics: [
      { label: 'Volume Growth', value: '10x' },
      { label: 'Months to Scale', value: '12' },
      { label: 'On-time Delivery', value: '97%' },
    ],
    titleId: 'cs-au-apparel-title',
    descId: 'cs-au-apparel-desc',
    imgId: 'cs-au-apparel-img-g7h8i9',
  },
  {
    id: 'uk-hardware-distributor',
    industry: 'Hardware',
    country: 'United Kingdom',
    title: 'UK Distributor Finds Certified Tool Manufacturer',
    challenge: 'A UK hardware distributor needed a manufacturer for a private label power tool range with CE and GS certification. Previous attempts to source independently had resulted in non-compliant samples.',
    solution: 'We identified a factory in Zhejiang with existing CE and GS certification infrastructure, conducted a full audit, and managed the certification process for the new product range.',
    result: 'Full certification achieved within 14 weeks, first container shipped on schedule, and the product range is now in 200+ UK retail locations.',
    metrics: [
      { label: 'Certification Time', value: '14 wks' },
      { label: 'Retail Locations', value: '200+' },
      { label: 'Compliance Issues', value: '0' },
    ],
    titleId: 'cs-uk-hardware-title',
    descId: 'cs-uk-hardware-desc',
    imgId: 'cs-uk-hardware-img-j1k2l3',
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
      {/* Page Header */}
      <section className="bg-brand-navy text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Case Studies</h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Real results from global buyers who trusted SSourcing China with their sourcing challenges.
              Each case reflects our practical, results-focused approach.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
          {caseStudies.map((cs, i) => (
            <div
              key={cs.id}
              className="bg-white rounded-xl border border-neutral-200 overflow-hidden shadow-sm"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 ${i % 2 !== 0 ? '' : ''}`}>
                <div className="aspect-video lg:aspect-auto overflow-hidden bg-neutral-100">
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
                <div className="p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-brand-navy/10 text-brand-navy text-xs font-semibold px-2 py-1 rounded">
                        {cs.industry}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-neutral-500">
                        <MapPin className="w-3 h-3" /> {cs.country}
                      </span>
                    </div>
                    <h2 id={cs.titleId} className="text-xl md:text-2xl font-bold text-neutral-900 mb-4 leading-snug">
                      {cs.title}
                    </h2>

                    <div className="flex flex-col gap-4 mb-6">
                      <div>
                        <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">Challenge</p>
                        <p id={cs.descId} className="text-sm text-neutral-600 leading-relaxed">{cs.challenge}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">Our Approach</p>
                        <p className="text-sm text-neutral-600 leading-relaxed">{cs.solution}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">Result</p>
                        <p className="text-sm text-neutral-700 font-medium leading-relaxed">{cs.result}</p>
                      </div>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-3">
                    {cs.metrics.map((m) => (
                      <div key={m.label} className="bg-neutral-50 rounded-lg p-3 text-center border border-neutral-200">
                        <div className="text-xl font-bold text-brand-navy">{m.value}</div>
                        <div className="text-xs text-neutral-500 mt-0.5">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-navy py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Write Your Own Success Story?
          </h2>
          <p className="text-slate-300 mb-8 text-lg">
            Tell us about your sourcing challenge and we will show you how we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-red text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
