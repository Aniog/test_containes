import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import SectionHeader from '../shared/SectionHeader';

const caseStudies = [
  {
    id: 'cs-1',
    industry: 'Consumer Electronics',
    client: 'European Retailer',
    title: 'Sourcing 50,000 LED Desk Lamps with Custom Branding',
    challenge: 'The client needed a reliable supplier for private-label LED lamps meeting EU safety standards, with a 90-day lead time.',
    result: 'Identified 4 qualified suppliers, negotiated 18% below initial quotes, passed CE certification, delivered on time.',
    savings: '18% cost reduction',
    timeline: '87 days',
  },
  {
    id: 'cs-2',
    industry: 'Furniture',
    client: 'US E-commerce Brand',
    title: 'Developing a New Line of Bamboo Office Furniture',
    challenge: 'New product category with no existing supplier relationships. Required custom designs and CARB compliance.',
    result: 'Sourced 2 factories, managed sample development over 3 rounds, achieved CARB P2 compliance, launched on schedule.',
    savings: '22% vs. initial quotes',
    timeline: '4 months',
  },
  {
    id: 'cs-3',
    industry: 'Apparel',
    client: 'Australian Fashion Brand',
    title: 'Quality Control for 10,000-Unit Sportswear Order',
    challenge: 'Previous supplier had delivered goods with inconsistent sizing and stitching defects. Client needed a reliable QC process.',
    result: 'Implemented 3-stage inspection protocol. Defect rate dropped from 8.2% to under 0.5%. Client reordered within 60 days.',
    savings: 'Defect rate: 0.5%',
    timeline: '60-day turnaround',
  },
];

export default function CaseStudiesSection() {
  return (
    <section className="py-20 md:py-28 bg-white" id="case-studies">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Case Studies"
          title="Real Results for Real Clients"
          subtitle="See how we've helped businesses across industries source smarter from China."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {caseStudies.map((cs) => (
            <div key={cs.id} className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition-shadow flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-[#1a4f8a]/10 text-[#1a4f8a] text-xs font-semibold px-3 py-1 rounded-full">{cs.industry}</span>
                <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">{cs.client}</span>
              </div>
              <h3 className="font-bold text-[#0d2340] text-base mb-3 leading-snug">{cs.title}</h3>
              <div className="mb-3">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Challenge</p>
                <p className="text-gray-600 text-sm leading-relaxed">{cs.challenge}</p>
              </div>
              <div className="mb-4">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Result</p>
                <p className="text-gray-600 text-sm leading-relaxed">{cs.result}</p>
              </div>
              <div className="mt-auto pt-4 border-t border-slate-100 grid grid-cols-2 gap-3">
                <div className="bg-green-50 rounded-lg p-3 text-center">
                  <div className="text-green-700 font-bold text-sm">{cs.savings}</div>
                  <div className="text-green-600 text-xs">Savings</div>
                </div>
                <div className="bg-blue-50 rounded-lg p-3 text-center">
                  <div className="text-[#1a4f8a] font-bold text-sm">{cs.timeline}</div>
                  <div className="text-[#1a4f8a]/70 text-xs">Timeline</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-[#1a4f8a] font-semibold hover:gap-3 transition-all"
          >
            View All Case Studies <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
