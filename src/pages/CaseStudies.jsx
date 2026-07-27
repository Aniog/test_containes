import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, CheckCircle2, TrendingUp, Clock, DollarSign } from 'lucide-react';

const caseStudies = [
  {
    id: 'cs-furniture',
    imgId: 'cs-furniture-full-a1b2c3',
    titleId: 'cs-furniture-title',
    descId: 'cs-furniture-desc',
    category: 'Furniture',
    title: 'Custom Oak Furniture for German Retailer',
    client: 'European home goods brand',
    challenge: 'The client needed a reliable manufacturer for custom solid oak dining tables and chairs. Previous suppliers had inconsistent quality and missed delivery deadlines.',
    solution: 'We audited 8 furniture factories in Foshan, shortlisted 3, arranged samples from each, and helped the client select the best match. We managed production of a 40ft container order with weekly progress reports.',
    results: ['35% cost savings vs. previous supplier', 'Zero quality defects on first shipment', 'On-time delivery within agreed timeline', 'Ongoing monthly orders established'],
    stats: { savings: '35%', timeline: '10 weeks', orders: '12+' },
  },
  {
    id: 'cs-electronics',
    imgId: 'cs-electronics-full-d4e5f6',
    titleId: 'cs-electronics-title',
    descId: 'cs-electronics-desc',
    category: 'Electronics',
    title: 'LED Lighting for US Distributor',
    client: 'US-based lighting distributor',
    challenge: 'The client needed a UL-certified LED panel manufacturer with competitive pricing and the ability to handle custom specifications for the North American market.',
    solution: 'We identified 5 certified LED manufacturers in Shenzhen and Zhongshan, conducted factory audits, and managed the sampling process. We negotiated volume pricing and set up monthly shipment schedules.',
    results: ['Zero defects across 12 consecutive shipments', 'UL and DLC certification maintained', '22% cost reduction from initial quotes', 'Reliable monthly supply chain established'],
    stats: { savings: '22%', timeline: '8 weeks', orders: '24+' },
  },
  {
    id: 'cs-textiles',
    imgId: 'cs-textiles-full-g7h8i9',
    titleId: 'cs-textiles-title',
    descId: 'cs-textiles-desc',
    category: 'Textiles',
    title: 'Private Label Sportswear for Australian Brand',
    client: 'Australian activewear startup',
    challenge: 'A new brand needed to develop a complete activewear line from scratch — from fabric selection to finished garments with custom branding, packaging, and labeling.',
    solution: 'We sourced fabric suppliers, connected the client with experienced garment factories in Guangzhou, managed pattern development, and oversaw production of the initial collection.',
    results: ['From concept to delivery in 8 weeks', 'Full private label setup including packaging', '500-piece MOQ negotiated (vs. standard 1000)', 'Repeat orders every quarter since launch'],
    stats: { savings: '28%', timeline: '8 weeks', orders: '8+' },
  },
  {
    id: 'cs-packaging',
    imgId: 'cs-packaging-full-j1k2l3',
    titleId: 'cs-packaging-title',
    descId: 'cs-packaging-desc',
    category: 'Packaging',
    title: 'Custom Cosmetic Packaging for UK Brand',
    client: 'UK skincare company',
    challenge: 'The client needed premium glass bottles, pumps, and custom printed boxes for a new product line. Quality and aesthetics were critical for their luxury positioning.',
    solution: 'We sourced packaging components from specialized suppliers in Guangzhou and Yiwu, managed color matching and print proofing, and coordinated assembly of complete packaging sets.',
    results: ['Premium quality matching European standards', '40% cost savings vs. UK-based suppliers', 'Custom tooling completed in 3 weeks', 'Scalable supply for seasonal launches'],
    stats: { savings: '40%', timeline: '6 weeks', orders: '6+' },
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
      {/* Page Header */}
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 id="cs-page-title" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Case Studies
          </h1>
          <p id="cs-page-subtitle" className="mt-4 text-gray-300 text-lg max-w-2xl">
            Real sourcing projects we've managed for clients around the world. See how we deliver results.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 md:space-y-24">
            {caseStudies.map((cs) => (
              <div key={cs.id} className="bg-brand-light rounded-2xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <img
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[${cs.descId}] [${cs.titleId}] [cs-page-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cs.title}
                    className="w-full h-full object-cover min-h-[300px]"
                  />
                  <div className="p-8 md:p-10">
                    <span className="text-xs font-semibold text-brand-orange uppercase tracking-wide">{cs.category}</span>
                    <h2 id={cs.titleId} className="text-2xl md:text-3xl font-bold text-brand-dark mt-2 mb-2">{cs.title}</h2>
                    <p className="text-sm text-brand-gray mb-4">Client: {cs.client}</p>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-sm font-semibold text-brand-dark mb-1">Challenge</h4>
                        <p id={cs.descId} className="text-sm text-brand-gray">{cs.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-brand-dark mb-1">Our Solution</h4>
                        <p className="text-sm text-brand-gray">{cs.solution}</p>
                      </div>
                    </div>

                    <h4 className="text-sm font-semibold text-brand-dark mb-2">Results</h4>
                    <ul className="space-y-2 mb-6">
                      {cs.results.map((result, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-brand-dark">
                          <CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>

                    <div className="flex gap-6 pt-4 border-t border-gray-200">
                      <div className="text-center">
                        <DollarSign className="w-4 h-4 text-brand-orange mx-auto mb-1" />
                        <div className="text-lg font-bold text-brand-dark">{cs.stats.savings}</div>
                        <div className="text-xs text-brand-gray">Cost Savings</div>
                      </div>
                      <div className="text-center">
                        <Clock className="w-4 h-4 text-brand-orange mx-auto mb-1" />
                        <div className="text-lg font-bold text-brand-dark">{cs.stats.timeline}</div>
                        <div className="text-xs text-brand-gray">Timeline</div>
                      </div>
                      <div className="text-center">
                        <TrendingUp className="w-4 h-4 text-brand-orange mx-auto mb-1" />
                        <div className="text-lg font-bold text-brand-dark">{cs.stats.orders}</div>
                        <div className="text-xs text-brand-gray">Orders</div>
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
      <section className="py-16 md:py-20 bg-brand-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="mt-4 text-gray-300 text-lg">
            Tell us about your sourcing needs and let's discuss how we can help.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-brand-orange text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-colors"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
