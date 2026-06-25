import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CaseStudies = () => {
  const cases = [
    {
      client: 'European Home Goods Retailer',
      industry: 'Retail',
      challenge: 'Needed to diversify sourcing beyond existing suppliers for seasonal kitchenware collection. Previous attempts with direct sourcing resulted in quality inconsistencies.',
      approach: 'Conducted category-specific supplier screening across three manufacturing regions. Shortlisted five suppliers with verified production capacity. Coordinated sample development and evaluation.',
      results: [
        'Three suppliers approved after factory verification',
        'First production order delivered on schedule',
        'Quality acceptance rate above 98% across three shipments',
      ],
      metric: '40% reduction in sourcing timeline',
    },
    {
      client: 'US Industrial Equipment Distributor',
      industry: 'Industrial',
      challenge: 'Required alternative supplier for machined components after primary supplier capacity constraints. Needed to maintain ISO-compliant quality standards.',
      approach: 'Identified ISO 9001 certified manufacturers with CNC capabilities. Conducted detailed capability audits and trial order coordination.',
      results: [
        'Two qualified backup suppliers established',
        '18% unit cost improvement vs. previous source',
        'Consistent quality across 12-month supply period',
      ],
      metric: '18% cost reduction',
    },
    {
      client: 'Australian Promotional Products Company',
      industry: 'Promotional',
      challenge: 'Expanding product line required new textile and hard goods suppliers. Limited internal resources for overseas supplier management.',
      approach: 'Full-service sourcing engagement covering supplier identification, verification, production monitoring, and logistics coordination for multiple product categories.',
      results: [
        'Six new suppliers onboarded across product categories',
        'First-year order value exceeded $400,000',
        'Zero quality claims on inspected shipments',
      ],
      metric: '6 suppliers established',
    },
  ];

  return (
    <div>
      <section className="bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-[1280px] mx-auto px-6 py-16">
          <h1 className="text-4xl font-semibold tracking-tight mb-4">Case Studies</h1>
          <p className="text-lg text-[#475569] max-w-2xl">Examples of sourcing projects completed for clients across different industries and regions.</p>
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto px-6 py-16 space-y-16">
        {cases.map((study, idx) => (
          <div key={idx} className="border border-[#E2E8F0] rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
              <div>
                <div className="text-sm text-[#1E40AF] font-medium mb-1">{study.industry}</div>
                <h2 className="text-2xl font-semibold tracking-tight">{study.client}</h2>
              </div>
              <div className="text-right">
                <div className="text-sm text-[#64748B]">Outcome</div>
                <div className="text-lg font-semibold text-[#1E40AF]">{study.metric}</div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-semibold text-sm mb-3 text-[#475569]">CHALLENGE</h4>
                <p className="text-sm text-[#475569] leading-relaxed">{study.challenge}</p>
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-3 text-[#475569]">APPROACH</h4>
                <p className="text-sm text-[#475569] leading-relaxed">{study.approach}</p>
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-3 text-[#475569]">RESULTS</h4>
                <ul className="space-y-2 text-sm text-[#475569]">
                  {study.results.map((result, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2">
                      <span className="text-[#059669] mt-1">•</span> {result}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="bg-[#0F172A] text-white">
        <div className="max-w-[1280px] mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">Have a sourcing project in mind?</h2>
          <p className="text-[#94A3B8] mb-8 max-w-md mx-auto">We can provide a preliminary assessment based on your specific requirements.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-[#0F172A] px-8 py-3 rounded-lg text-sm font-medium hover:bg-[#F1F5F9] transition-colors">
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
