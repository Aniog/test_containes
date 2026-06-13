import React from 'react';
import { Link } from 'react-router-dom';

const CaseStudies = () => {
  const cases = [
    {
      client: 'European Home Goods Retailer',
      category: 'Home & Garden',
      challenge: 'Needed to identify 3-5 reliable furniture manufacturers capable of producing 2,000 units per month with consistent quality.',
      solution: 'Conducted supplier search across 3 provinces, verified 8 factories, coordinated samples from 4 suppliers.',
      result: 'Selected 2 suppliers. First production run completed with 99.2% pass rate. Ongoing orders for 18 months.',
      timeline: '6 weeks to first order',
    },
    {
      client: 'North American Electronics Distributor',
      category: 'Electronics',
      challenge: 'Required PCB assembly supplier with ISO certification and capacity for 10,000 units monthly. Previous supplier had quality issues.',
      solution: 'Audited 6 certified facilities, coordinated sample production, implemented pre-shipment inspection protocol.',
      result: 'Established relationship with qualified supplier. Defect rate reduced from 4.2% to 0.8%.',
      timeline: '8 weeks to supplier approval',
    },
    {
      client: 'Australian Industrial Equipment Importer',
      category: 'Industrial Equipment',
      challenge: 'Sourcing specialized safety equipment with specific certification requirements for Australian market.',
      solution: 'Identified manufacturers with relevant certifications, coordinated compliance documentation, arranged third-party testing.',
      result: 'Successfully sourced 3 product lines meeting all regulatory requirements. First container delivered on schedule.',
      timeline: '10 weeks to delivery',
    },
  ];

  return (
    <div className="pt-20">
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-semibold mb-4">Case Studies</h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            Examples of sourcing projects we have completed for clients across different industries.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="space-y-12">
          {cases.map((caseStudy, index) => (
            <div key={index} className="border border-slate-200 rounded-xl p-8 md:p-10">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
                <div>
                  <div className="text-sm text-blue-800 font-medium mb-1">{caseStudy.category}</div>
                  <h3 className="text-2xl font-semibold text-slate-900">{caseStudy.client}</h3>
                </div>
                <div className="text-sm text-slate-500 md:text-right">{caseStudy.timeline}</div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="text-sm font-medium text-slate-500 mb-2">CHALLENGE</div>
                  <p className="text-slate-700">{caseStudy.challenge}</p>
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-500 mb-2">SOLUTION</div>
                  <p className="text-slate-700">{caseStudy.solution}</p>
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-500 mb-2">RESULT</div>
                  <p className="text-slate-700">{caseStudy.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">Have a Sourcing Project?</h2>
          <p className="text-slate-600 mb-8">We can help you find reliable suppliers and manage the sourcing process.</p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 bg-blue-800 text-white font-medium rounded-lg hover:bg-blue-900 transition-colors"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
