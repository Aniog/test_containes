import React from 'react';
import { Link } from 'react-router-dom';

const caseStudies = [
  {
    id: 'us-kitchenware',
    title: 'US Kitchenware Importer',
    desc: 'Helped a US-based kitchenware company find 3 verified suppliers, reducing defect rate from 12% to under 2%.',
    result: 'Defect rate reduced to <2%',
    imgId: 'case-kitchenware-v1w2x3',
    titleId: 'case-kitchenware-title',
    descId: 'case-kitchenware-desc',
  },
  {
    id: 'eu-electronics',
    title: 'EU Electronics Distributor',
    desc: 'Verified factory and managed QC for a European electronics distributor sourcing PCBs and connectors from Shenzhen.',
    result: 'Zero quality complaints in 6 months',
    imgId: 'case-electronics-y4z5a6',
    titleId: 'case-electronics-title',
    descId: 'case-electronics-desc',
  },
  {
    id: 'au-textiles',
    title: 'AU Textile Brand',
    desc: 'Coordinated full sourcing process for an Australian fashion brand, from fabric sourcing to finished garment QC.',
    result: '30% cost savings on materials',
    imgId: 'case-textiles-b7c8d9',
    titleId: 'case-textiles-title',
    descId: 'case-textiles-desc',
  },
];

const CaseStudiesSection = () => {
  return (
    <section className="bg-neutral-50 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="cases-title" className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
            Case Studies
          </h2>
          <p id="cases-subtitle" className="text-neutral-600 text-lg max-w-2xl mx-auto">
            Real results from real sourcing projects. See how we have helped buyers across different industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {caseStudies.map((cs) => (
            <div key={cs.id} className="bg-white border border-neutral-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
              <div className="aspect-[16x9] overflow-hidden">
                <img
                  alt={cs.title}
                  data-strk-img-id={cs.imgId}
                  data-strk-img={`[${cs.descId}] [${cs.titleId}] [cases-subtitle] [cases-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 id={cs.titleId} className="text-base font-semibold text-neutral-900 mb-1">{cs.title}</h3>
                <p id={cs.descId} className="text-neutral-600 text-sm leading-relaxed mb-3">{cs.desc}</p>
                <div className="bg-primary-50 text-primary-700 px-3 py-1.5 rounded-md text-sm font-medium">
                  {cs.result}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/case-studies"
            className="text-primary-500 hover:text-primary-600 font-semibold text-sm no-underline inline-flex items-center gap-1"
          >
            Read more case studies →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
