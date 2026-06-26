import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';

const caseStudies = [
  {
    id: 'cs-1',
    industry: 'Consumer Electronics',
    title: 'Sourcing Bluetooth Speakers for a UK Retailer',
    summary: 'A UK-based electronics retailer needed to source 5,000 units of branded Bluetooth speakers. We identified 3 qualified factories, coordinated samples, and managed pre-shipment inspection.',
    result: '22% cost reduction vs. previous supplier',
    country: 'United Kingdom',
  },
  {
    id: 'cs-2',
    industry: 'Home Furniture',
    title: 'Furniture Sourcing for an Australian E-Commerce Brand',
    summary: 'An Australian online furniture brand needed a reliable supplier for solid wood dining sets. We audited 5 factories and secured a long-term supplier relationship with consistent quality.',
    result: 'Zero defect rate across 3 shipments',
    country: 'Australia',
  },
  {
    id: 'cs-3',
    industry: 'Apparel',
    title: 'Private Label Clothing for a US Fashion Brand',
    summary: 'A US fashion startup needed a factory for private label activewear. We managed supplier selection, sample development, and quality inspection for their first production run.',
    result: 'On-time delivery, 98% quality pass rate',
    country: 'United States',
  },
];

export default function CaseStudiesSection() {
  return (
    <section className="py-16 md:py-24 bg-[#f4f6f9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#e8621a] mb-3">Client Results</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d2340] mb-4">
            Case Studies
          </h2>
          <p className="text-[#5a6a7e] max-w-2xl mx-auto text-base leading-relaxed">
            Real sourcing projects, real outcomes. Here's how we've helped buyers across different industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((cs) => (
            <div key={cs.id} className="bg-white rounded-xl border border-[#dde3ec] shadow-sm overflow-hidden flex flex-col">
              <div className="p-6 flex-1">
                <span className="inline-block bg-[#f4f6f9] text-[#1a4f8a] text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  {cs.industry}
                </span>
                <h3 className="text-base font-semibold text-[#0d2340] mb-3 leading-snug">{cs.title}</h3>
                <p className="text-[#5a6a7e] text-sm leading-relaxed mb-4">{cs.summary}</p>
                <div className="flex items-center gap-2 bg-green-50 rounded-lg px-3 py-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full shrink-0" />
                  <span className="text-green-700 text-xs font-semibold">{cs.result}</span>
                </div>
              </div>
              <div className="px-6 py-4 border-t border-[#dde3ec] flex items-center justify-between">
                <span className="text-xs text-[#5a6a7e]">Client from {cs.country}</span>
                <Link
                  to="/case-studies"
                  className="text-xs text-[#1a4f8a] font-semibold hover:text-[#0d2340] flex items-center gap-1"
                >
                  Read more <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-[#1a4f8a] font-semibold hover:text-[#0d2340] transition-colors"
          >
            View All Case Studies
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
