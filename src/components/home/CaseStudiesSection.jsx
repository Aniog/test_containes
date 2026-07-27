import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const cases = [
  {
    client: 'EU Home Goods Retailer',
    industry: 'Home & Garden',
    challenge: 'Needed reliable kitchenware suppliers with consistent quality and competitive pricing for a 200-store retail chain.',
    result: 'Sourced 3 verified factories, reduced defect rate from 8% to under 1%, and saved 18% on unit costs.',
    imgId: 'case-home-goods-a1b2c3',
    titleId: 'case-home-title',
    resultId: 'case-home-result',
  },
  {
    client: 'US Electronics Brand',
    industry: 'Electronics',
    challenge: 'Launched a new line of wireless chargers and needed fast turnaround with custom branding and packaging.',
    result: 'Delivered first shipment in 6 weeks, passed all FCC certifications, and scaled to 50K units/month.',
    imgId: 'case-electronics-d4e5f6',
    titleId: 'case-electronics-title',
    resultId: 'case-electronics-result',
  },
  {
    client: 'Australian Fitness Startup',
    industry: 'Apparel & Sports',
    challenge: 'Required a flexible manufacturer for small-batch sportswear with custom fabrics and fast sampling.',
    result: 'Found a MOQ-friendly factory, achieved 3-day sample turnaround, and launched 12 SKUs in 3 months.',
    imgId: 'case-fitness-g7h8i9',
    titleId: 'case-fitness-title',
    resultId: 'case-fitness-result',
  },
];

const CaseStudiesSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider">Results</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-3 mb-4">
            Case Studies
          </h2>
          <p className="text-slate-600 text-lg">
            Real results from real clients. See how we have helped businesses like yours succeed with China sourcing.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-[16/10] bg-slate-100 overflow-hidden">
                <img
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.resultId}] [${item.titleId}] [case-studies-section-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={item.client}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-accent-500 uppercase tracking-wider bg-accent-50 px-2.5 py-1 rounded">
                    {item.industry}
                  </span>
                </div>
                <h3 id={item.titleId} className="text-lg font-semibold text-slate-800 mb-2">{item.client}</h3>
                <p className="text-slate-500 text-sm mb-4">
                  <span className="font-medium text-slate-700">Challenge:</span> {item.challenge}
                </p>
                <div className="bg-green-50 border border-green-100 rounded-lg p-4">
                  <p id={item.resultId} className="text-green-800 text-sm">
                    <span className="font-semibold">Result:</span> {item.result}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-primary-500 font-semibold hover:text-primary-600 transition-colors"
          >
            View All Case Studies
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;