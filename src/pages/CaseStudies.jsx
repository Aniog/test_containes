import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const caseStudies = [
  {
    id: 'us-kitchenware',
    title: 'US Kitchenware Brand Cuts Defect Rate by 60%',
    category: 'Quality Improvement',
    client: 'US-based kitchenware importer',
    challenge: 'A US kitchenware company was receiving inconsistent quality from their Chinese supplier. Defect rates averaged 12%, causing customer complaints and returns. They needed a more reliable supplier and better quality control.',
    solution: 'We verified a new factory with stronger QC processes, implemented during-production inspections at three key stages, and established clear quality standards with the supplier. We also created a defect classification system for faster corrective action.',
    result: 'Defect rate dropped from 12% to under 5%. Customer complaints decreased significantly, and the client was able to expand their product line with confidence.',
    imgId: 'case-kitchenware-page-a1b2c3',
    titleId: 'case-kitchenware-page-title',
    descId: 'case-kitchenware-page-desc',
  },
  {
    id: 'eu-electronics',
    title: 'European Electronics Firm Saves 18% on Component Costs',
    category: 'Cost Reduction',
    client: 'EU electronics manufacturer',
    challenge: 'An EU electronics manufacturer was sourcing PCBs from a single supplier at premium pricing. They needed alternative suppliers that could match quality while reducing costs, without disrupting their production schedule.',
    solution: 'We identified three qualified PCB factories through our network, conducted factory verification visits, arranged sample testing, and negotiated pricing on behalf of the client. We managed the transition from the old supplier to the new one over two production cycles.',
    result: 'The client achieved 18% cost savings per unit while maintaining the same quality level. They also gained backup suppliers for supply chain resilience.',
    imgId: 'case-electronics-page-d4e5f6',
    titleId: 'case-electronics-page-title',
    descId: 'case-electronics-page-desc',
  },
  {
    id: 'au-furniture',
    title: 'Australian Furniture Importer Avoids 3-Week Delay',
    category: 'Production Management',
    client: 'Australian furniture importer',
    challenge: 'A furniture importer received notice that their peak-season order would be delayed by 3 weeks — which would miss their sales window. They needed someone on the ground to identify the problem and find a solution.',
    solution: 'Our team visited the factory immediately, identified a raw material shortage as the bottleneck, and helped the factory source the missing materials from a local supplier. We also reorganized the production schedule to prioritize the client\'s order.',
    result: 'The order was shipped on the original timeline. The client avoided lost sales during their peak season and established a monitoring system for future orders.',
    imgId: 'case-furniture-page-g7h8i9',
    titleId: 'case-furniture-page-title',
    descId: 'case-furniture-page-desc',
  },
  {
    id: 'uk-packaging',
    title: 'UK Packaging Company Finds Compliant Food-Grade Supplier',
    category: 'Supplier Search & Compliance',
    client: 'UK food packaging distributor',
    challenge: 'A UK packaging distributor needed food-grade packaging that met EU and UK food safety regulations. Previous suppliers could not provide the required compliance documentation, putting the client at regulatory risk.',
    solution: 'We searched for suppliers with existing food safety certifications (FDA, EU standards), verified their compliance documentation on-site, arranged sample testing with the client\'s lab, and ensured all production batches came with proper certification paperwork.',
    result: 'The client found a fully compliant supplier, received all necessary documentation for each shipment, and eliminated regulatory risk from their supply chain.',
    imgId: 'case-packaging-page-j1k2l3',
    titleId: 'case-packaging-page-title',
    descId: 'case-packaging-page-desc',
  },
];

const CaseStudies = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 id="cases-page-title" className="text-3xl md:text-4xl font-bold text-white mb-4">Case Studies</h1>
          <p id="cases-page-subtitle" className="text-primary-200 text-lg max-w-2xl">
            Real results from real sourcing projects. See how we've helped global buyers solve quality, cost, and delivery challenges.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 md:space-y-16">
          {caseStudies.map((cs) => (
            <div key={cs.id} className="bg-neutral-50 border border-neutral-200 rounded-lg overflow-hidden">
              <div className="flex flex-col lg:flex-row gap-0">
                <div className="lg:w-2/5">
                  <img
                    alt={cs.title}
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[${cs.descId}] [${cs.titleId}] [cases-page-subtitle] [cases-page-title]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-64 lg:h-full object-cover bg-neutral-200"
                  />
                </div>
                <div className="lg:w-3/5 p-6 md:p-8">
                  <span className="inline-block bg-primary-50 text-primary-500 text-xs font-medium px-2 py-1 rounded mb-3">
                    {cs.category}
                  </span>
                  <h2 id={cs.titleId} className="text-xl md:text-2xl font-bold text-neutral-800 mb-2">{cs.title}</h2>
                  <p id={cs.descId} className="text-neutral-400 text-sm mb-4">Client: {cs.client}</p>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-semibold text-neutral-700 mb-1">Challenge</h3>
                      <p className="text-neutral-500 text-sm leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-neutral-700 mb-1">Solution</h3>
                      <p className="text-neutral-500 text-sm leading-relaxed">{cs.solution}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-neutral-700 mb-1">Result</h3>
                      <p className="text-neutral-600 text-sm leading-relaxed font-medium">{cs.result}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-neutral-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-4">Want Similar Results?</h2>
          <p className="text-neutral-500 text-lg max-w-2xl mx-auto mb-8">
            Tell us about your sourcing challenge. We'll assess whether we can help — no commitment required.
          </p>
          <Link
            to="/contact"
            className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-3 rounded-md text-base font-semibold transition-colors inline-flex items-center gap-2"
          >
            Get a Free Sourcing Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
