import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const caseStudies = [
  {
    id: 'us-kitchenware',
    title: 'US Kitchenware Importer Reduces Defect Rate',
    client: 'US-based kitchenware company',
    challenge: 'The client was sourcing kitchen utensils from a supplier found on Alibaba. Defect rates averaged 12%, and communication with the factory was inconsistent. They needed a reliable supplier who could deliver consistent quality.',
    solution: 'We identified 3 verified stainless steel utensil factories in Yangjiang, conducted in-person verification, and arranged sample reviews. After the client selected a supplier, we implemented a 3-stage QC process.',
    result: 'Defect rate reduced from 12% to under 2%. On-time delivery improved from 60% to 95%. The client has been ordering consistently for over 2 years.',
    imgId: 'case-kitchenware-page-u1v2w3',
    titleId: 'case-kitchenware-page-title',
    challengeId: 'case-kitchenware-page-challenge',
  },
  {
    id: 'eu-electronics',
    title: 'EU Electronics Distributor Achieves Zero Quality Complaints',
    client: 'European electronics distributor',
    challenge: 'The client needed to source PCBs and electronic connectors from Shenzhen for distribution across 5 EU countries. Previous suppliers had inconsistent quality and failed to meet EU compliance standards.',
    solution: 'We verified 4 PCB factories in Shenzhen, checked their compliance certifications, and conducted pre-production and pre-shipment inspections on every order. We also coordinated CE certification documentation.',
    result: 'Zero quality complaints across 6 months of shipments. All products passed EU compliance checks. The client expanded their product range with our sourcing support.',
    imgId: 'case-electronics-page-x4y5z6',
    titleId: 'case-electronics-page-title',
    challengeId: 'case-electronics-page-challenge',
  },
  {
    id: 'au-textiles',
    title: 'AU Fashion Brand Saves 30% on Material Costs',
    client: 'Australian fashion brand',
    challenge: 'The client was working with a trading company that added significant markup to fabric and garment production costs. They wanted direct factory access to reduce costs while maintaining quality.',
    solution: 'We identified direct fabric mills in Shaoxing and garment factories in Guangzhou. We verified each factory, coordinated sample production, and managed QC from fabric sourcing to finished garment inspection.',
    result: '30% cost savings on materials by sourcing directly from factories. Quality maintained at the same standard. Production lead times reduced by 1 week.',
    imgId: 'case-textiles-page-a7b8c9',
    titleId: 'case-textiles-page-title',
    challengeId: 'case-textiles-page-challenge',
  },
  {
    id: 'me-building',
    title: 'Middle East Builder Sources Custom Ceramic Tiles',
    client: 'Middle East construction company',
    challenge: 'The client needed custom-designed ceramic tiles for a large hotel project. Previous suppliers could not produce the custom designs at the required scale, and sample turnaround was too slow.',
    solution: 'We connected the client with a verified ceramic tile factory in Foshan that specializes in custom designs. We managed the sample development process, verified production capacity for the full order, and conducted pre-shipment inspection.',
    result: 'Custom tile samples delivered in 10 days instead of 30. Full order of 50,000 sqm delivered on time with zero defects. Client has sourced 3 more projects through us.',
    imgId: 'case-building-page-d1e2f3',
    titleId: 'case-building-page-title',
    challengeId: 'case-building-page-challenge',
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
      <section className="bg-primary-900 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 id="cases-page-title" className="text-3xl md:text-4xl font-bold text-white mb-4">
            Case Studies
          </h1>
          <p id="cases-page-subtitle" className="text-primary-200 text-lg max-w-2xl">
            Real results from real sourcing projects. See how we have helped buyers across different industries and regions.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 md:space-y-16">
          {caseStudies.map((cs, index) => (
            <div key={cs.id} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="aspect-[4x3] rounded-xl overflow-hidden">
                  <img
                    alt={cs.title}
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[${cs.challengeId}] [${cs.titleId}] [cases-page-subtitle] [cases-page-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <h2 id={cs.titleId} className="text-xl md:text-2xl font-bold text-neutral-900 mb-2">{cs.title}</h2>
                <p className="text-primary-500 text-sm font-medium mb-4">{cs.client}</p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-semibold text-neutral-800 mb-1">Challenge</h3>
                    <p id={cs.challengeId} className="text-neutral-600 text-sm leading-relaxed">{cs.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-neutral-800 mb-1">Solution</h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">{cs.solution}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-neutral-800 mb-1">Result</h3>
                    <div className="bg-primary-50 border border-primary-100 rounded-lg p-3">
                      <p className="text-primary-700 text-sm font-medium">{cs.result}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-neutral-50 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Want Similar Results for Your Business?</h2>
          <p className="text-neutral-600 text-sm mb-6">Tell us about your sourcing challenge and we will propose a solution.</p>
          <Link
            to="/contact"
            className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-3.5 rounded-lg font-semibold text-base no-underline transition-colors inline-flex items-center gap-2"
          >
            Get a Free Sourcing Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
