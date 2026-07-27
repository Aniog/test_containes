import React from 'react';

const CaseStudies = () => {
  const cases = [
    {
      client: 'European Home Goods Retailer',
      industry: 'Home & Garden',
      challenge: 'Needed to identify cost-effective suppliers for a new kitchenware product line while maintaining quality standards required for European markets.',
      approach: 'Conducted supplier search across 3 provinces, performed factory audits on 6 candidates, coordinated sample development with 3 finalists.',
      results: ['22% reduction in landed cost vs. previous supplier', 'Zero quality issues in first 3 shipments', 'Established 2 backup suppliers for supply security'],
      timeline: '14 weeks from inquiry to first shipment',
    },
    {
      client: 'US E-commerce Electronics Brand',
      industry: 'Consumer Electronics',
      challenge: 'Rapid expansion required onboarding multiple new suppliers for accessories while ensuring consistent quality and reliable delivery timelines.',
      approach: 'Developed supplier qualification criteria, conducted remote and on-site verifications, implemented standardized QC protocols across suppliers.',
      results: ['8 new suppliers qualified in 4 months', '98% on-time delivery rate achieved', 'Quality acceptance rate improved to 99.2%'],
      timeline: '4 months for full supplier onboarding',
    },
    {
      client: 'Australian Industrial Distributor',
      industry: 'Industrial Equipment',
      challenge: 'Long lead times and inconsistent quality from existing suppliers affecting customer satisfaction and inventory planning.',
      approach: 'Analyzed current supply chain bottlenecks, identified alternative suppliers with better production capabilities, implemented production monitoring.',
      results: ['Lead time reduced from 90 to 65 days', 'Quality complaints reduced by 75%', 'Improved inventory turnover by 18%'],
      timeline: '6 months to full transition',
    },
    {
      client: 'Canadian Promotional Products Company',
      industry: 'Apparel & Textiles',
      challenge: 'Needed reliable suppliers for custom-branded merchandise with tight seasonal deadlines and strict brand compliance requirements.',
      approach: 'Identified factories with custom printing capabilities, established sample approval workflows, coordinated production schedules across multiple SKUs.',
      results: ['Delivered 15 SKUs on schedule for peak season', 'Zero brand compliance issues', 'Repeat order rate of 85% from end customers'],
      timeline: '10 weeks from concept to delivery',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="text-center mb-14">
        <h1 className="text-5xl font-semibold text-[#0F172A] mb-4">Case Studies</h1>
        <p className="text-xl text-[#64748B]">Real sourcing projects and measurable outcomes for our clients</p>
      </div>

      <div className="space-y-12">
        {cases.map((study, idx) => (
          <div key={idx} className="border border-[#E2E8F0] rounded-xl p-10">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
              <div>
                <div className="text-sm text-[#1E40AF] mb-1">{study.industry}</div>
                <h2 className="text-2xl font-semibold text-[#0F172A]">{study.client}</h2>
              </div>
              <div className="text-sm text-[#64748B] mt-2 md:mt-0 md:text-right">{study.timeline}</div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold text-[#0F172A] mb-2">Challenge</h3>
                <p className="text-[#64748B] text-sm">{study.challenge}</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#0F172A] mb-2">Approach</h3>
                <p className="text-[#64748B] text-sm">{study.approach}</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#0F172A] mb-2">Results</h3>
                <ul className="text-sm text-[#64748B] space-y-1">
                  {study.results.map((result, i) => (
                    <li key={i}>• {result}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center bg-[#F8FAFC] rounded-xl p-10">
        <h2 className="text-2xl font-semibold mb-3">Your project could be next</h2>
        <p className="text-[#64748B] mb-6">Contact us to discuss how we can support your sourcing objectives.</p>
        <a href="/contact" className="inline-flex px-8 py-3 bg-[#0F172A] text-white rounded-lg font-medium hover:bg-[#1E293B]">Start a Conversation</a>
      </div>
    </div>
  );
};

export default CaseStudies;
