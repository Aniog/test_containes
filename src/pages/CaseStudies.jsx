import React from 'react';
import { Link } from 'react-router-dom';
import CaseStudyCard from '../components/CaseStudyCard';

const CaseStudies = () => {
  const caseStudies = [
    {
      client: 'European Home Goods Retailer',
      industry: 'Home & Garden',
      productType: 'Stainless Steel Cookware Sets',
      challenge: 'The buyer had been working with a supplier that delivered inconsistent wall thickness, poor handle attachment, and variable surface finish. Return rates were above 8% and customer complaints were damaging the brand.',
      solution: 'We conducted a full factory audit of the existing supplier and identified gaps in process control and finishing. We then identified and audited two alternative factories with stronger quality systems. We implemented a three-stage inspection protocol (initial production, during production, and pre-shipment) and required pre-production sample approval for each new production run.',
      results: [
        'Defect rate reduced from 8% to under 1% within two production cycles',
        'On-time delivery improved from ~70% to 96%',
        'Annual order volume increased by approximately 40% as confidence grew',
        'Buyer was able to expand the product line with the same supplier base',
      ],
    },
    {
      client: 'North American Consumer Electronics Brand',
      industry: 'Consumer Electronics',
      productType: 'Bluetooth Speakers and Charging Accessories',
      challenge: 'The company needed to qualify new suppliers for a product line expansion. They had a hard launch deadline 10 weeks away and limited internal resources to manage the process from overseas.',
      solution: 'We identified four candidate factories with relevant experience, conducted audits within two weeks, and coordinated sample production with clear specification checklists. We managed sample iterations and performed inline production inspections once orders were placed. We also coordinated third-party lab testing for safety and EMC compliance.',
      results: [
        'Four qualified suppliers delivered approved samples within 8 weeks',
        'First production batch passed AQL 2.5 inspection with no major defects',
        'Product launched on the original schedule',
        'Client retained two of the four suppliers for ongoing production',
      ],
    },
    {
      client: 'Australian Industrial Equipment Distributor',
      industry: 'Industrial Equipment',
      productType: 'Hand Tools and Workshop Accessories',
      challenge: 'The distributor had received multiple shipments with incorrect packaging, missing items, and labeling that did not meet Australian import requirements. They needed a more reliable process for ongoing replenishment orders.',
      solution: 'We implemented a standardized order checklist, required pre-shipment photos of packed pallets, and conducted container loading supervision for the first several shipments. We also worked with the factory to create compliant labeling templates and documentation packages.',
      results: [
        'Zero labeling or documentation issues on the next six shipments',
        'Packing accuracy improved to 99.5%+',
        'Buyer reduced internal receiving inspection time by approximately 60%',
        'Process improvements were documented and applied to other product lines',
      ],
    },
    {
      client: 'UK Promotional Products Company',
      industry: 'Promotional Products',
      productType: 'Custom-Branded Drinkware and Apparel',
      challenge: 'The company placed many small-to-medium orders with short lead times. Communication delays and inconsistent quality from multiple suppliers were causing missed deadlines and unhappy clients.',
      solution: 'We helped consolidate orders with two reliable factories that could handle a range of products. We set up a simple order tracking system and conducted spot inspections on higher-value or time-sensitive orders. We also established standard artwork approval and pre-production sample procedures.',
      results: [
        'On-time delivery improved from ~65% to over 90%',
        'Client complaints about quality dropped significantly',
        'Internal team spent less time chasing updates and more time on sales',
        'The company was able to accept larger seasonal orders with confidence',
      ],
    },
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-slate-50 py-12 md:py-16">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Case Studies</h1>
            <p className="text-lg text-slate-600">
              These examples illustrate the types of challenges we help buyers address. Client names have been generalized for confidentiality.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section container">
        <div className="space-y-8">
          {caseStudies.map((study, idx) => (
            <div key={idx} className="card">
              <div className="mb-5">
                <div className="text-xs uppercase tracking-wider text-slate-500 mb-1">{study.industry}</div>
                <h2 className="text-xl font-semibold text-slate-900">{study.client}</h2>
                <p className="text-sm text-slate-500 mt-0.5">{study.productType}</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div>
                  <div className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1.5">The Challenge</div>
                  <p className="text-sm text-slate-700">{study.challenge}</p>
                </div>
                <div>
                  <div className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1.5">Our Approach</div>
                  <p className="text-sm text-slate-700">{study.solution}</p>
                </div>
                <div>
                  <div className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1.5">Results</div>
                  <ul className="text-sm text-slate-700 space-y-1.5">
                    {study.results.map((result, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2">
                        <span className="text-teal-600 mt-0.5">✓</span>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Note */}
      <section className="section bg-slate-50">
        <div className="container">
          <div className="max-w-3xl text-sm text-slate-600">
            <p className="mb-3"><strong>Important note:</strong> These outcomes reflect specific situations and are not guarantees of future results. Every sourcing project involves variables that we cannot fully control, including factory performance, material availability, and logistics conditions.</p>
            <p>We focus on reducing risk through verification, inspection, and clear communication — not on promising perfect outcomes.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section container text-center">
        <h2 className="text-2xl font-semibold text-slate-900 mb-3">Have a Similar Challenge?</h2>
        <p className="text-slate-600 mb-6 max-w-md mx-auto">We can discuss how the approach used in these cases might apply to your situation.</p>
        <Link to="/contact" className="btn-primary px-8">Get in Touch</Link>
      </section>
    </div>
  );
};

export default CaseStudies;