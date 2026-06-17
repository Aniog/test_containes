import React from 'react';

const CaseStudies = () => {
  const cases = [
    {
      title: "Cost Reduction for EU Electronics Brand",
      industry: "Consumer Electronics",
      result: "25% Unit Cost Saving",
      desc: "An Italian brand was paying high prices to a trading company. We found the direct source, improved the product casing quality, and reduced their landed cost by 25% while maintaining all CE certifications.",
      query: "professional electronics lab testing"
    },
    {
      title: "Quality Stabilization for US Furniture Retailer",
      industry: "Furniture",
      result: "99.8% Acceptable Rate",
      desc: "A US retailer was facing a 15% defect rate on solid wood tables. We implemented strict moisture content checks and pre-production color matching audits, bringing the defect rate down to near zero.",
      query: "modern luxury furniture warehouse display"
    },
    {
      title: "Supply Chain Expansion for Australian Startup",
      industry: "Kitchenware",
      result: "3x SKU Growth",
      desc: "We helped a high-growth startup rapidly expand their eco-friendly kitchenware line. From 5 SKUs to 15 SKUs in 6 months by finding and managing 3 specialized factories in different provinces.",
      query: "eco friendly kitchenware display"
    }
  ];

  return (
    <div className="pt-24 pb-24 bg-slate-50">
      <section className="bg-white py-24 mb-16 text-center border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 italic tracking-tight">Real Results, Real Trust.</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">Explore how we helped international brands solve sourcing bottlenecks and scale their operations in China.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {cases.map((cs, idx) => (
            <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-xl flex flex-col lg:flex-row border border-slate-100">
              <div className="lg:w-1/3 h-64 lg:h-auto">
                 <img
                   data-strk-img-id={`case-study-${idx}`}
                   data-strk-img={cs.query}
                   data-strk-img-ratio="4x3"
                   data-strk-img-width="800"
                   src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                   alt={cs.title}
                   className="w-full h-full object-cover"
                 />
              </div>
              <div className="lg:w-2/3 p-8 lg:p-12">
                <div className="flex flex-wrap gap-4 mb-6">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">{cs.industry}</span>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">{cs.result}</span>
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">{cs.title}</h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">{cs.desc}</p>
                <div className="pt-8 border-t border-slate-100">
                   <p className="font-bold text-slate-900 mb-2">Key Services Involved:</p>
                   <p className="text-slate-500 text-sm">Direct Factory Sourcing • Price Negotiation • Quality Control • Logistics Management</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
