import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const cases = [
  {
    id: 'us-electronics',
    title: 'US Electronics Retailer',
    challenge: 'Needed 5,000 units of custom Bluetooth speakers with strict quality requirements and 6-week lead time.',
    result: 'Found verified supplier in 3 days, passed all QC inspections, delivered on time with zero defects.',
    imgId: 'case-us-electronics-v1w2x3',
    titleId: 'case-us-electronics-title',
    descId: 'case-us-electronics-desc',
  },
  {
    id: 'eu-furniture',
    title: 'European Furniture Distributor',
    challenge: 'Struggling with inconsistent quality from previous supplier and delayed shipments.',
    result: 'Switched to verified factory, reduced defect rate from 12% to under 1%, shipments on schedule.',
    imgId: 'case-eu-furniture-y4z5a6',
    titleId: 'case-eu-furniture-title',
    descId: 'case-eu-furniture-desc',
  },
  {
    id: 'au-textiles',
    title: 'Australian Textile Brand',
    challenge: 'Needed sustainable fabric sourcing with certification documentation for compliance.',
    result: 'Identified certified organic cotton supplier, managed all documentation, first order delivered in 8 weeks.',
    imgId: 'case-au-textiles-b7c8d9',
    titleId: 'case-au-textiles-title',
    descId: 'case-au-textiles-desc',
  },
];

const CaseStudiesPreview = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="cases-section-title" className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Client Success Stories
          </h2>
          <p id="cases-section-subtitle" className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Real results from real clients. See how we have helped businesses across the world source better from China.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {cases.map((caseItem) => (
            <div key={caseItem.id} className="bg-white rounded-lg border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="aspect-[3/2] overflow-hidden bg-slate-100">
                <img
                  alt={caseItem.title}
                  data-strk-img-id={caseItem.imgId}
                  data-strk-img={`[${caseItem.descId}] [${caseItem.titleId}] [cases-section-subtitle] [cases-section-title]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 id={caseItem.titleId} className="text-lg font-semibold text-slate-900 mb-3">{caseItem.title}</h3>
                <div className="mb-3">
                  <span className="text-xs font-semibold text-red-600 uppercase tracking-wide">Challenge</span>
                  <p id={caseItem.descId} className="text-slate-600 text-sm leading-relaxed mt-1">{caseItem.challenge}</p>
                </div>
                <div>
                  <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wide">Result</span>
                  <p className="text-slate-600 text-sm leading-relaxed mt-1">{caseItem.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-navy-700 font-semibold hover:text-navy-800 transition-colors"
          >
            Read More Case Studies
            <ArrowRight className="w-5 h-5 text-amber-500" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesPreview;
