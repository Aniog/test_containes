import React from 'react';
import { Link } from 'react-router-dom';

const caseStudies = [
  {
    id: 'us-kitchenware',
    title: 'US Kitchenware Brand Cuts Defect Rate by 60%',
    desc: 'A US-based kitchenware company was struggling with inconsistent quality from their Chinese supplier. We verified a new factory, implemented during-production inspections, and reduced their defect rate from 12% to under 5%.',
    category: 'Quality Improvement',
    imgId: 'case-kitchenware-v1w2x3',
    titleId: 'case-kitchenware-title',
    descId: 'case-kitchenware-desc',
  },
  {
    id: 'eu-electronics',
    title: 'European Electronics Firm Saves 18% on Component Costs',
    desc: 'An EU electronics manufacturer needed alternative PCB suppliers. We identified three qualified factories, negotiated pricing, and managed the transition — saving 18% per unit without compromising quality.',
    category: 'Cost Reduction',
    imgId: 'case-electronics-y4z5a6',
    titleId: 'case-electronics-title',
    descId: 'case-electronics-desc',
  },
  {
    id: 'au-furniture',
    title: 'Australian Furniture Importer Avoids 3-Week Delay',
    desc: 'A furniture importer faced a production delay that would have missed the peak season. Our on-site team identified the bottleneck early, coordinated with the factory, and got the order shipped on time.',
    category: 'Production Management',
    imgId: 'case-furniture-b7c8d9',
    titleId: 'case-furniture-title',
    descId: 'case-furniture-desc',
  },
];

const CaseStudiesSection = () => {
  return (
    <section className="bg-neutral-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="cases-title" className="text-2xl md:text-3xl font-bold text-neutral-800 mb-4">
            Case Studies
          </h2>
          <p id="cases-subtitle" className="text-neutral-500 text-lg max-w-2xl mx-auto">
            Real results from real sourcing projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {caseStudies.map((cs) => (
            <div key={cs.id} className="bg-white border border-neutral-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <img
                alt={cs.title}
                data-strk-img-id={cs.imgId}
                data-strk-img={`[${cs.descId}] [${cs.titleId}] [cases-subtitle] [cases-title]`}
                data-strk-img-ratio="3x2"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-48 object-cover bg-neutral-200"
              />
              <div className="p-6">
                <span className="inline-block bg-primary-50 text-primary-500 text-xs font-medium px-2 py-1 rounded mb-3">
                  {cs.category}
                </span>
                <h3 id={cs.titleId} className="text-base font-semibold text-neutral-800 mb-2">{cs.title}</h3>
                <p id={cs.descId} className="text-neutral-500 text-sm leading-relaxed">{cs.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/case-studies"
            className="text-primary-500 hover:text-primary-600 font-medium text-sm inline-flex items-center gap-1 transition-colors"
          >
            Read all case studies →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
