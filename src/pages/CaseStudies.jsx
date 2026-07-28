import React from 'react';

const CaseStudies = () => {
  const cases = [
    {
      title: 'Electronics Components Sourcing',
      client: 'European Electronics Distributor',
      challenge: 'Needed reliable PCB suppliers with consistent quality and competitive pricing.',
      approach: 'Identified 12 potential suppliers, conducted audits on 5, and verified 3 for production.',
      result: 'Reduced sourcing time by 40% and established a stable supply chain with zero quality issues over 12 months.',
    },
    {
      title: 'Home Textiles Supplier Development',
      client: 'US Home Goods Retailer',
      challenge: 'Required multiple verified suppliers for bedding and kitchen textiles with strict quality standards.',
      approach: 'Shortlisted suppliers across 3 regions, performed factory verifications, and coordinated sample evaluations.',
      result: 'Successfully onboarded 3 verified suppliers, enabling diversified sourcing and improved lead times.',
    },
    {
      title: 'Industrial Equipment Quality Program',
      client: 'Australian Equipment Importer',
      challenge: 'Previous shipments had recurring quality defects causing costly returns.',
      approach: 'Implemented structured inspection protocols and production monitoring for all orders.',
      result: 'Zero quality issues reported in 18 months. Client expanded sourcing volume by 60%.',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold text-[#1F2937] mb-4">Case Studies</h1>
        <p className="text-lg text-[#4B5563]">Real results from our sourcing partnerships.</p>
      </div>

      <div className="space-y-8">
        {cases.map((study, index) => (
          <div key={index} className="p-8 border border-slate-200 rounded-lg">
            <h3 className="text-2xl font-semibold mb-2 text-[#1F2937]">{study.title}</h3>
            <p className="text-sm text-[#1E3A5F] font-medium mb-4">{study.client}</p>
            
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <h4 className="font-semibold mb-2 text-[#1F2937]">Challenge</h4>
                <p className="text-[#4B5563]">{study.challenge}</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-[#1F2937]">Approach</h4>
                <p className="text-[#4B5563]">{study.approach}</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-[#1F2937]">Result</h4>
                <p className="text-[#4B5563]">{study.result}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;
