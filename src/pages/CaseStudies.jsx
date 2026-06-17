import React from 'react';
import { ExternalLink, Tag } from 'lucide-react';

const CaseStudies = () => {
  const cases = [
    {
      title: "Cost Reduction for EU Electronics Retailer",
      industry: "Electronics",
      result: "35% Cost Saving",
      desc: "An EU-based retailer was sourcing from a middleman. We identified the original manufacturer, optimized packaging to fit 20% more items per container, and negotiated direct factory pricing.",
      imgId: "case-study-electronics"
    },
    {
      title: "Quality Crisis Recovery for US Furniture Brand",
      industry: "Furniture",
      result: "0% Defect Rate",
      desc: "A US brand was facing high return rates. We implemented a 100% inspection protocol during production and solved the structural issues at the factory level within 30 days.",
      imgId: "case-study-furniture"
    },
    {
      title: "Fast-Track Sourcing for Cosmetic Startup",
      industry: "Cosmetics",
      result: "45 Days Lead Time",
      desc: "A new cosmetic brand needed custom-molded packaging. We sourced a factory capable of rapid prototyping and navigated the strict certification requirements for international markets.",
      imgId: "case-study-cosmetics"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="bg-white py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Case Studies</h1>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">Real stories of how we've helped international businesses optimize their supply chains, reduce costs, and ensure product quality.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {cases.map((c, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 flex flex-col group">
                <div className="aspect-[16/9] overflow-hidden">
                   <img
                    data-strk-img-id={c.imgId}
                    data-strk-img={`${c.industry} factory production product`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={c.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded uppercase tracking-wider">{c.industry}</span>
                    <span className="px-2 py-1 bg-green-50 text-green-700 text-xs font-bold rounded uppercase tracking-wider">{c.result}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{c.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8">{c.desc}</p>
                  <div className="mt-auto pt-6 border-t border-slate-50">
                    <button className="text-blue-700 text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all">
                      Read Full Story <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const ArrowRight = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

export default CaseStudies;
