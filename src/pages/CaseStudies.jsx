import React from 'react';

const CaseStudies = () => {
  const cases = [
    {
      client: 'European Retail Chain',
      industry: 'Home Goods',
      challenge: 'Needed to expand supplier base for seasonal products while maintaining consistent quality across 12 SKUs.',
      approach: 'Conducted supplier audits across three provinces, implemented standardized QC checklist, and established weekly production reporting.',
      results: [
        '22% reduction in landed cost',
        'Defect rate reduced from 6% to 1.2%',
        'On-time delivery improved to 97%',
      ],
      timeline: '4 months from initial inquiry to first shipment',
    },
    {
      client: 'US Industrial Distributor',
      industry: 'Equipment & Tools',
      challenge: 'Experiencing quality inconsistencies and communication delays with existing suppliers for specialized components.',
      approach: 'Replaced two underperforming suppliers after verification process, introduced during-production inspections, and set up direct factory communication protocols.',
      results: [
        'Defect rate dropped below 1%',
        'Lead time reduced by 18 days',
        'Improved responsiveness to specification changes',
      ],
      timeline: '6 weeks for supplier transition, ongoing monitoring',
    },
    {
      client: 'Australian E-commerce Brand',
      industry: 'Consumer Products',
      challenge: 'Scaling order volumes required better visibility into production status to meet seasonal demand windows.',
      approach: 'Implemented production milestone tracking with photo documentation, established escalation procedures for delays, and coordinated expedited shipping options.',
      results: [
        '35% improvement in order cycle time',
        'Zero missed seasonal deadlines',
        'Clear visibility for inventory planning',
      ],
      timeline: '3 months to establish process, now standard for all orders',
    },
    {
      client: 'Canadian Hardware Importer',
      industry: 'Tools & Hardware',
      challenge: 'Needed to verify new supplier claims about production capacity before committing to larger orders.',
      approach: 'Performed detailed capacity audit including equipment review, workforce assessment, and sample production run observation.',
      results: [
        'Confirmed capacity claims before scaling',
        'Identified bottleneck and improvement opportunity',
        'Negotiated better payment terms based on verified capability',
      ],
      timeline: '3 weeks for verification, ongoing relationship',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-semibold text-[#1E3A5F] mb-4">Case Studies</h1>
        <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
          Examples of how we have supported clients with their sourcing objectives.
        </p>
      </div>

      <div className="space-y-12">
        {cases.map((study, i) => (
          <div key={i} className="border border-gray-200 rounded-xl p-8 md:p-10">
            <div className="flex flex-wrap gap-4 items-start justify-between mb-6">
              <div>
                <div className="text-sm uppercase tracking-wider text-[#6B7280] mb-1">{study.industry}</div>
                <h2 className="text-2xl font-semibold text-[#1E3A5F]">{study.client}</h2>
              </div>
              <div className="text-sm text-[#6B7280] text-right">{study.timeline}</div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold text-sm uppercase tracking-wider text-[#6B7280] mb-3">Challenge</h3>
                <p className="text-[#1F2937] text-sm leading-relaxed">{study.challenge}</p>
              </div>
              <div>
                <h3 className="font-semibold text-sm uppercase tracking-wider text-[#6B7280] mb-3">Approach</h3>
                <p className="text-[#1F2937] text-sm leading-relaxed">{study.approach}</p>
              </div>
              <div>
                <h3 className="font-semibold text-sm uppercase tracking-wider text-[#6B7280] mb-3">Results</h3>
                <ul className="space-y-2">
                  {study.results.map((result, j) => (
                    <li key={j} className="text-sm text-[#1F2937] flex items-start gap-2">
                      <span className="text-[#059669] mt-1">•</span>
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center text-[#6B7280] text-sm">
        Results vary based on product type, order volume, and supplier conditions. These examples are illustrative.
      </div>
    </div>
  );
};

export default CaseStudies;
