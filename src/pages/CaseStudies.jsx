import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, CheckCircle, TrendingUp, Clock, DollarSign } from 'lucide-react';

const caseStudies = [
  {
    id: 'cs-1',
    industry: 'Consumer Electronics',
    title: 'LED Panel Lights for US Distributor',
    challenge: 'A US-based lighting distributor needed a reliable manufacturer for commercial LED panels with UL certification, but previous suppliers had quality inconsistencies.',
    solution: 'We identified 5 factories in Zhongshan, conducted on-site audits, negotiated pricing, and managed quality inspections for the first 3 production runs.',
    results: ['22% cost reduction vs. previous supplier', 'UL certification maintained', '0 defective units in 10,000-piece order', 'Ongoing quarterly orders established'],
    client: 'US lighting distributor',
    metric: '22%',
    metricLabel: 'Cost Savings',
    imgId: 'cs-led-panel-img-a1b2c3',
    titleId: 'cs-1-title',
    descId: 'cs-1-desc',
  },
  {
    id: 'cs-2',
    industry: 'Textiles & Apparel',
    title: 'Custom Sportswear for European Brand',
    challenge: 'A European sportswear brand needed to scale production from 5,000 to 50,000 units while maintaining fabric quality and delivery timelines.',
    solution: 'We sourced 3 qualified garment factories in Guangzhou, managed fabric testing, conducted in-line inspections, and coordinated sea freight to Rotterdam.',
    results: ['50,000 units delivered on schedule', '99.2% QC pass rate', 'Fabric quality matched European standards', '3 reliable suppliers established'],
    client: 'European sportswear brand',
    metric: '99.2%',
    metricLabel: 'QC Pass Rate',
    imgId: 'cs-sportswear-img-d4e5f6',
    titleId: 'cs-2-title',
    descId: 'cs-2-desc',
  },
  {
    id: 'cs-3',
    industry: 'Home & Garden',
    title: 'Outdoor Furniture for Australian Retailer',
    challenge: 'An Australian outdoor furniture retailer needed to find a new supplier after their existing one raised prices by 30% and missed delivery deadlines.',
    solution: 'We identified alternative manufacturers in Foshan, verified production capabilities, managed sample approval, and coordinated full container shipments.',
    results: ['3 verified suppliers shortlisted', 'Quarterly FCL shipments managed', '15% savings vs. previous supplier', 'Zero shipping delays in 12 months'],
    client: 'Australian outdoor retailer',
    metric: '15%',
    metricLabel: 'Cost Savings',
    imgId: 'cs-furniture-img-g7h8i9',
    titleId: 'cs-3-title',
    descId: 'cs-3-desc',
  },
  {
    id: 'cs-4',
    industry: 'Beauty & Personal Care',
    title: 'Private Label Skincare for UK Brand',
    challenge: 'A UK beauty brand wanted to launch a private label skincare line but had no experience sourcing cosmetics from China or navigating regulatory requirements.',
    solution: 'We found GMP-certified cosmetics manufacturers, managed formulation development, coordinated packaging design, and ensured EU compliance documentation.',
    results: ['12 SKUs launched successfully', 'GMP and EU compliance achieved', 'Full private label packaging', 'Reorder within 4 months of launch'],
    client: 'UK beauty brand',
    metric: '12',
    metricLabel: 'SKUs Launched',
    imgId: 'cs-skincare-img-j1k2l3',
    titleId: 'cs-4-title',
    descId: 'cs-4-desc',
  },
];

const CaseStudies = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, pageRef.current);
  }, []);

  return (
    <div ref={pageRef}>
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="cs-page-title" className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Case Studies
          </h1>
          <p id="cs-page-subtitle" className="text-neutral-300 text-lg max-w-2xl mx-auto">
            Real projects, real results. See how we've helped businesses source successfully from China.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 md:space-y-20">
            {caseStudies.map((study, index) => {
              const isReversed = index % 2 !== 0;
              return (
                <div key={study.id} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                  <div className={isReversed ? 'lg:order-2' : ''}>
                    <span className="inline-block text-xs font-semibold text-brand-blue bg-blue-50 px-3 py-1 rounded-full mb-4">
                      {study.industry}
                    </span>
                    <h2 id={study.titleId} className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">{study.title}</h2>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider mb-2">Challenge</h4>
                      <p id={study.descId} className="text-neutral-600 text-sm leading-relaxed">{study.challenge}</p>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider mb-2">Our Solution</h4>
                      <p className="text-neutral-600 text-sm leading-relaxed">{study.solution}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider mb-2">Results</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-brand-green shrink-0" />
                            <span className="text-neutral-700 text-sm">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 inline-flex items-center gap-3 bg-neutral-50 rounded-lg px-5 py-3 border border-neutral-200">
                      <TrendingUp className="w-5 h-5 text-brand-blue" />
                      <div>
                        <span className="text-2xl font-bold text-neutral-900">{study.metric}</span>
                        <span className="text-neutral-600 text-sm ml-2">{study.metricLabel}</span>
                      </div>
                    </div>
                  </div>

                  <div className={`aspect-[4/3] rounded-xl overflow-hidden bg-neutral-100 ${isReversed ? 'lg:order-1' : ''}`}>
                    <img
                      data-strk-img-id={study.imgId}
                      data-strk-img={`[${study.descId}] [${study.titleId}] [cs-page-title]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={study.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-brand-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Want Similar Results?</h2>
          <p className="text-blue-100 text-lg mb-8">Tell us about your sourcing needs and let's discuss how we can help.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-brand-blue px-8 py-3.5 rounded-lg font-semibold hover:bg-neutral-100 transition text-base"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
