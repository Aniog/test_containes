import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, CheckCircle2, TrendingUp, ShieldCheck, Clock } from 'lucide-react';

const caseStudies = [
  {
    id: 'cs-electronics-de',
    title: 'Electronics Sourcing for EU Distributor',
    client: 'German Electronics Distributor',
    industry: 'Electronics',
    challenge: 'A German electronics distributor needed reliable PCB suppliers but struggled with inconsistent quality and unverified factory claims from online platforms.',
    solution: 'We identified and audited 8 potential suppliers, shortlisted 5 that met quality and capacity requirements, and implemented a multi-stage inspection program.',
    results: [
      'Defect rate reduced from 8% to under 1%',
      '5 verified suppliers added to client roster',
      '40% cost reduction through competitive quoting',
      'Zero shipment rejections over 12 months',
    ],
    imgId: 'cs-elec-detail-a1b2c3',
    titleId: 'cs-elec-detail-title',
    descId: 'cs-elec-detail-desc',
  },
  {
    id: 'cs-furniture-us',
    title: 'Furniture Quality Control Program',
    client: 'US Furniture Brand',
    industry: 'Home & Garden',
    challenge: 'A US-based furniture brand experienced recurring quality issues with their Chinese suppliers, including material defects and assembly problems.',
    solution: 'We set up a comprehensive QC program covering raw material inspection, during-production checks, and pre-shipment final inspection with AQL 2.5 standards.',
    results: [
      '23 critical defects caught before shipment in 6 months',
      'Customer complaint rate dropped by 65%',
      'Supplier accountability improved with documented standards',
      'Re-order rate increased from 60% to 85%',
    ],
    imgId: 'cs-furn-detail-d4e5f6',
    titleId: 'cs-furn-detail-title',
    descId: 'cs-furn-detail-desc',
  },
  {
    id: 'cs-apparel-uk',
    title: 'Apparel Production Management',
    client: 'UK Fashion Retailer',
    industry: 'Apparel & Textiles',
    challenge: 'A UK fashion retailer needed to coordinate production across multiple factories for seasonal collections, with tight deadlines and strict quality requirements.',
    solution: 'We managed end-to-end production across 4 factories, providing weekly progress updates, coordinating sample approvals, and conducting pre-shipment inspections.',
    results: [
      '100% on-time delivery across 4 factories',
      'Zero quality rejections on final inspection',
      'Production lead time reduced by 15%',
      'Successful launch of 2 seasonal collections',
    ],
    imgId: 'cs-appr-detail-g7h8i9',
    titleId: 'cs-appr-detail-title',
    descId: 'cs-appr-detail-desc',
  },
  {
    id: 'cs-auto-au',
    title: 'Auto Parts Supplier Consolidation',
    client: 'Australian Auto Parts Importer',
    industry: 'Auto Parts',
    challenge: 'An Australian auto parts importer was working with 12 separate suppliers, leading to inconsistent quality, fragmented logistics, and high management overhead.',
    solution: 'We consolidated the supplier base to 6 verified factories, implemented standardized QC protocols, and set up consolidated shipping to reduce logistics costs.',
    results: [
      'Supplier base reduced from 12 to 6 verified factories',
      'Logistics costs reduced by 30% through consolidation',
      'Quality consistency improved across all product lines',
      'Management time per order reduced by 50%',
    ],
    imgId: 'cs-auto-detail-j1k2l3',
    titleId: 'cs-auto-detail-title',
    descId: 'cs-auto-detail-desc',
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
      <section className="bg-neutral-800 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Case Studies</h1>
            <p className="text-lg text-neutral-300 leading-relaxed">
              Real examples of how we have helped businesses overcome sourcing challenges and achieve better results from their China supply chain.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 md:space-y-24">
            {caseStudies.map((cs, idx) => (
              <div key={cs.id} className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                  <span className="text-sm font-semibold text-brand-500 bg-brand-50 px-3 py-1 rounded-full">{cs.industry}</span>
                  <h2 id={cs.titleId} className="text-2xl md:text-3xl font-bold text-neutral-800 mt-3 mb-2">{cs.title}</h2>
                  <p id={cs.descId} className="text-neutral-500 text-sm mb-4">Client: {cs.client}</p>

                  <div className="mb-6">
                    <h3 className="font-semibold text-neutral-800 mb-2 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-red-500" /> Challenge
                    </h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">{cs.challenge}</p>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-semibold text-neutral-800 mb-2 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-brand-500" /> Solution
                    </h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">{cs.solution}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-neutral-800 mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" /> Results
                    </h3>
                    <ul className="space-y-2">
                      {cs.results.map((r) => (
                        <li key={r} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-neutral-700 text-sm">{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                  <img
                    alt={cs.title}
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full rounded-xl bg-neutral-100"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-brand-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Want Similar Results for Your Business?
          </h2>
          <p className="text-lg text-brand-100 mb-8 max-w-2xl mx-auto">
            Tell us about your sourcing challenges and we will propose a solution tailored to your needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-accent-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-accent-600 transition-colors"
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
