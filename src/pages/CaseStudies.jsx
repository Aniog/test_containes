import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, TrendingUp } from 'lucide-react';

const CaseStudies = () => {
  const cases = [
    {
      client: 'Nordic Home Retail',
      location: 'Sweden',
      category: 'Home Goods',
      challenge: 'Needed to source 12 seasonal product lines within 8 weeks for Q4 launch, with strict quality and compliance requirements.',
      approach: 'Identified 4 suppliers across 3 provinces. Conducted factory audits for all candidates. Coordinated sample production and approval within 3 weeks.',
      results: [
        'All 12 product lines approved and in production within timeline',
        'Zero quality issues in first shipment of 45,000 units',
        'Established 2 long-term supplier relationships',
      ],
      timeline: '10 weeks from inquiry to delivery',
      date: 'Q3 2025',
    },
    {
      client: 'TechGear Solutions',
      location: 'United States',
      category: 'Electronics Accessories',
      challenge: 'Previous supplier quality issues led to 18% return rate. Needed reliable partners with documented QC processes.',
      approach: 'Audited 6 potential suppliers. Implemented multi-stage inspection protocol. Established weekly production reporting.',
      results: [
        'Return rate reduced to under 2%',
        '3 verified suppliers now in active production',
        'Consistent on-time delivery over 12 months',
      ],
      timeline: '14 weeks initial setup, ongoing relationship',
      date: 'Q1-Q4 2025',
    },
    {
      client: 'Aussie Industrial Supply',
      location: 'Australia',
      category: 'Industrial Components',
      challenge: 'High logistics costs eroding margins. Needed to optimize freight and documentation processes.',
      approach: 'Consolidated shipments across multiple suppliers. Negotiated freight contracts. Streamlined export documentation workflow.',
      results: [
        '15% reduction in landed cost per unit',
        'Documentation errors reduced by 90%',
        'Average transit time improved by 4 days',
      ],
      timeline: '6 weeks process optimization',
      date: 'Q2 2025',
    },
    {
      client: 'UK Safety Equipment Ltd',
      location: 'United Kingdom',
      category: 'PPE & Safety',
      challenge: 'Required EN and UKCA certified suppliers for PPE products with consistent quality across batches.',
      approach: 'Focused search on certified manufacturers. Verified certification validity. Implemented batch testing protocol.',
      results: [
        '5 certified suppliers qualified and approved',
        '100% compliance on certification documentation',
        'Repeat order rate of 94% from client',
      ],
      timeline: '8 weeks to first approved shipment',
      date: 'Q4 2024',
    },
  ];

  return (
    <div>
      <section className="bg-[#F8FAFC] py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-semibold text-[#0F172A] mb-4">Case Studies</h1>
          <p className="text-xl text-[#475569]">Real results from client sourcing projects.</p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="space-y-16">
          {cases.map((study, idx) => (
            <div key={idx} className="border border-[#E2E8F0] rounded-2xl p-8 md:p-12">
              <div className="flex flex-wrap gap-4 items-start justify-between mb-8">
                <div>
                  <div className="text-sm uppercase tracking-widest text-[#64748B] mb-2">{study.category}</div>
                  <h2 className="text-2xl font-semibold text-[#0F172A]">{study.client}</h2>
                  <div className="text-[#475569] mt-1">{study.location}</div>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#64748B]">
                  <Calendar className="w-4 h-4" />
                  {study.date}
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="uppercase text-xs tracking-widest text-[#64748B] mb-3">Challenge</div>
                  <p className="text-[#475569]">{study.challenge}</p>
                </div>
                <div>
                  <div className="uppercase text-xs tracking-widest text-[#64748B] mb-3">Approach</div>
                  <p className="text-[#475569]">{study.approach}</p>
                </div>
                <div>
                  <div className="uppercase text-xs tracking-widest text-[#64748B] mb-3">Results</div>
                  <ul className="space-y-2">
                    {study.results.map((result, rIdx) => (
                      <li key={rIdx} className="flex gap-2 text-sm text-[#475569]">
                        <TrendingUp className="w-4 h-4 text-[#059669] flex-shrink-0 mt-0.5" />
                        {result}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 pt-4 border-t border-[#E2E8F0] text-sm text-[#64748B]">
                    {study.timeline}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#0F172A] py-16 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">Your Project Could Be Next</h2>
          <p className="text-[#94A3B8] mb-8">Tell us about your sourcing requirements.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#0F172A] px-8 py-3 rounded-lg font-medium hover:bg-[#F8FAFC] transition-colors"
          >
            Start a Conversation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
