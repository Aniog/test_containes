import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader.jsx';
import CaseStudyCard from '../components/CaseStudyCard.jsx';
import InquiryForm from '../components/InquiryForm.jsx';

const caseStudies = [
  {
    client: 'Industrial Pump Buyer in Germany',
    industry: 'Industrial Equipment',
    description: 'A German distributor needed a reliable foundry for cast-iron pump housings. We identified a Zhejiang supplier, verified their foundry and machining capabilities, and managed pre-shipment inspections across three orders.',
    outcome: 'Defect rate dropped from 8% to under 1.5%.',
    challenge: 'Inconsistent casting quality and delayed samples from previous suppliers.',
    solution: 'On-site verification, AQL-based inspection, and clear rework terms in the contract.',
    imgId: 'case-pump-germany-page',
    titleId: 'case-pump-page-title',
    descId: 'case-pump-page-desc',
  },
  {
    client: 'US Retailer: Kitchen Accessories',
    industry: 'Home Goods',
    description: 'A US Amazon retailer wanted to launch a private-label line of kitchen accessories. We sourced a food-grade silicone factory, verified FDA-compliant material certificates, and designed FBA-compliant packaging.',
    outcome: 'Three SKUs delivered on time for Q4 replenishment.',
    challenge: 'Certification gaps and packaging that did not meet FBA requirements.',
    solution: 'Supplier re-audit, certification review, and packaging redesign with a local print partner.',
    imgId: 'case-kitchen-us-page',
    titleId: 'case-kitchen-page-title',
    descId: 'case-kitchen-page-desc',
  },
  {
    client: 'Australian Fitness Brand',
    industry: 'Sports & Fitness',
    description: 'A fitness brand needed resistance bands and yoga mats from two separate factories. We consolidated production schedules and combined the shipment into one container.',
    outcome: 'Freight cost per unit reduced by 22%.',
    challenge: 'Higher logistics costs and complex customs paperwork from split suppliers.',
    solution: 'Consolidation planning, unified documentation, and container loading supervision.',
    imgId: 'case-fitness-australia-page',
    titleId: 'case-fitness-page-title',
    descId: 'case-fitness-page-desc',
  },
  {
    client: 'UK Electronics Startup',
    industry: 'Electronics',
    description: 'A startup needed custom USB-C cable assemblies with branded packaging. We sourced a cable factory, managed sample approvals, and coordinated a small first order.',
    outcome: 'First 2,000-unit batch delivered with zero functional defects.',
    challenge: 'Limited order volume made many factories unwilling to quote.',
    solution: 'Targeted outreach to smaller, flexible manufacturers and clear sample validation.',
    imgId: 'case-electronics-uk-page',
    titleId: 'case-electronics-page-title',
    descId: 'case-electronics-page-desc',
  },
  {
    client: 'Canadian Promotional Products Distributor',
    industry: 'Promotional Products',
    description: 'A distributor needed custom-branded notebooks and pens for a corporate campaign. We coordinated logo printing, material checks, and on-time packing.',
    outcome: '15,000 units delivered two days ahead of schedule.',
    challenge: 'Tight deadline and inconsistent print quality from previous vendor.',
    solution: 'Pre-production sample sign-off and daily production check-ins.',
    imgId: 'case-promo-canada-page',
    titleId: 'case-promo-page-title',
    descId: 'case-promo-page-desc',
  },
  {
    client: 'Dutch Apparel Brand',
    industry: 'Apparel & Textiles',
    description: 'A sustainable fashion brand needed organic cotton t-shirts with GOTS certification. We verified the supplier\'s certificates and conducted inline inspections.',
    outcome: 'First collection passed third-party audit with no major findings.',
    challenge: 'Certificate authenticity and dye consistency across batches.',
    solution: 'Certificate cross-checks with certifying body and lab dip approvals.',
    imgId: 'case-apparel-netherlands-page',
    titleId: 'case-apparel-page-title',
    descId: 'case-apparel-page-desc',
  },
];

const CaseStudies = () => {
  return (
    <>
      <section className="bg-navy text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-semibold tracking-wide uppercase text-amber mb-3">
              Case Studies
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Real sourcing results for global buyers
            </h1>
            <p className="text-lg text-slate-200 leading-relaxed">
              See how we have helped companies across industries improve quality, reduce costs, and deliver on time.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            id="case-studies-title"
            eyebrow="Client Projects"
            title="Selected case studies"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.titleId} {...study} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-cloud">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <InquiryForm />
        </div>
      </section>
    </>
  );
};

export default CaseStudies;
