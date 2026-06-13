import React from 'react';
import { Link } from 'react-router-dom';

const CaseStudies = () => {
  const cases = [
    {
      client: 'European Retail Chain',
      industry: 'Consumer Goods',
      challenge: 'High defect rates (8%) in private-label products were causing returns and damaging brand reputation.',
      approach: 'Implemented a three-stage inspection protocol: pre-production sample approval, mid-production audit, and pre-shipment inspection with AQL 2.5 standards.',
      result: 'Defect rate reduced to under 1%. Return rate dropped 85%. Supplier relationship improved through structured feedback loops.',
      timeline: '6 months',
    },
    {
      client: 'US Industrial Equipment Importer',
      industry: 'Industrial',
      challenge: 'Existing suppliers could not meet growing demand. Needed to identify and qualify new manufacturers for specialized components.',
      approach: 'Conducted targeted supplier search across three provinces. Performed detailed capability audits on 12 shortlisted factories. Coordinated sample production and evaluation.',
      result: 'Qualified 3 new suppliers. Achieved 22% cost reduction through competitive bidding. Production capacity increased by 40%.',
      timeline: '4 months',
    },
    {
      client: 'Australian Consumer Goods Brand',
      industry: 'Consumer Goods',
      challenge: 'Inconsistent delivery timelines were affecting inventory planning and customer fulfillment.',
      approach: 'Established weekly production reporting, milestone tracking, and early warning system for delays. Coordinated with logistics partners for optimized shipping schedules.',
      result: 'On-time delivery improved from 72% to 96%. Inventory planning accuracy increased. Reduced expedited shipping costs by 60%.',
      timeline: '8 months',
    },
    {
      client: 'Canadian Hardware Distributor',
      industry: 'Industrial',
      challenge: 'Quality inconsistencies across multiple product lines. Needed standardized inspection criteria and supplier accountability.',
      approach: 'Developed product-specific inspection checklists. Trained supplier quality teams. Implemented corrective action procedures with documented follow-up.',
      result: 'Quality acceptance rate improved from 88% to 99.2%. Supplier quality documentation standardized. Reduced inspection time by 30%.',
      timeline: '5 months',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-semibold text-slate-900 mb-4">Case Studies</h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Real results from sourcing projects with international clients.
        </p>
      </div>

      <div className="space-y-12">
        {cases.map((study, idx) => (
          <div key={idx} className="border border-slate-200 rounded-lg p-10">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
              <div>
                <h2 className="text-2xl font-semibold text-slate-900">{study.client}</h2>
                <p className="text-blue-800 mt-1">{study.industry}</p>
              </div>
              <p className="text-sm text-slate-500 mt-2 md:mt-0">Timeline: {study.timeline}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Challenge</h4>
                <p className="text-slate-600">{study.challenge}</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Approach</h4>
                <p className="text-slate-600">{study.approach}</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Result</h4>
                <p className="text-slate-600">{study.result}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-slate-600 mb-6">Looking for similar results for your business?</p>
        <Link to="/contact" className="inline-flex items-center justify-center h-12 px-8 bg-blue-800 text-white font-medium rounded hover:bg-blue-900 transition-colors">
          Start a Conversation
        </Link>
      </div>
    </div>
  );
};

export default CaseStudies;
