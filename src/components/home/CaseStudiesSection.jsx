import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Quote } from 'lucide-react';

const caseStudies = [
  {
    id: 'case-1',
    industry: 'Consumer Electronics',
    title: 'LED Lighting Manufacturer for US Distributor',
    result: 'Reduced unit cost by 22% while maintaining UL certification compliance',
    client: 'US-based lighting distributor',
    imgId: 'case-led-img-2a3b4c',
    titleId: 'case-1-title',
    descId: 'case-1-desc',
  },
  {
    id: 'case-2',
    industry: 'Textiles',
    title: 'Custom Sportswear Production for EU Brand',
    result: 'Delivered 50,000 units on time with 99.2% pass rate on QC inspection',
    client: 'European sportswear brand',
    imgId: 'case-sportswear-img-5d6e7f',
    titleId: 'case-2-title',
    descId: 'case-2-desc',
  },
  {
    id: 'case-3',
    industry: 'Home & Garden',
    title: 'Outdoor Furniture Sourcing for Australian Retailer',
    result: 'Found 3 verified suppliers and managed full container shipments quarterly',
    client: 'Australian outdoor retailer',
    imgId: 'case-furniture-img-8g9h0i',
    titleId: 'case-3-title',
    descId: 'case-3-desc',
  },
];

const CaseStudiesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-brand-blue text-sm font-semibold uppercase tracking-wider mb-3">Case Studies</span>
          <h2 id="case-studies-section-title" className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-4">
            Real Results for Real Businesses
          </h2>
          <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
            See how we've helped buyers around the world source successfully from China.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {caseStudies.map((study) => (
            <div key={study.id} className="bg-white rounded-xl border border-neutral-200 overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="aspect-[16/9] relative overflow-hidden bg-neutral-100">
                <img
                  data-strk-img-id={study.imgId}
                  data-strk-img={`[${study.descId}] [${study.titleId}] [case-studies-section-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={study.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="inline-block text-xs font-semibold text-brand-blue bg-blue-50 px-2.5 py-1 rounded-full mb-3">
                  {study.industry}
                </span>
                <h3 id={study.titleId} className="text-lg font-semibold text-neutral-900 mb-2">{study.title}</h3>
                <p id={study.descId} className="text-neutral-600 text-sm mb-3">{study.result}</p>
                <p className="text-neutral-500 text-xs italic">Client: {study.client}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:underline"
          >
            View All Case Studies
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
