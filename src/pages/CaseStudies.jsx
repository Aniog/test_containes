import React from 'react';
import { ArrowRight, Tag } from 'lucide-react';

const CaseStudies = () => {
  const cases = [
    {
      title: "Electronic Component Sourcing for EU Tech Startup",
      category: "Consumer Electronics",
      challenge: "Finding a factory capable of meeting low MOQ with high precision soldering requirements for a new IoT device.",
      result: "Reduced manufacturing costs by 22% while maintaining a 99.8% quality pass rate over 10,000 units.",
      img: "iot electronic hardware production line testing"
    },
    {
      title: "Cost Optimization for US Furniture Retailer",
      category: "Home & Garden",
      challenge: "Existing supplier increased prices by 15% without notice. Needed a secondary backup supplier with identical quality.",
      result: "Sourced 3 alternative factories; finalized one with 10% lower cost than original supplier pre-price hike.",
      img: "modern sofa manufacturing warehouse quality check"
    },
    {
      title: "Full Logistics & QC for African Mining Equipment",
      category: "Heavy Industry",
      challenge: "Complex custom machinery parts requiring 100% video inspection of dimensions before crates are sealed.",
      result: "Zero dimensional errors in over 45 shipments. Consolidated cargo to save 18% in annual freight costs.",
      img: "heavy industrial machinery parts shipping containers"
    }
  ];

  return (
    <div className="bg-white">
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 underline decoration-yellow-500 decoration-4 underline-offset-8">
            Case <span className="text-yellow-600">Studies</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto italic">
            Real stories of how we've helped international brands stabilize their supply chains and grow their margins.
          </p>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-32">
          {cases.map((cs, i) => (
            <div key={i} className={`flex flex-col lg:row ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''} gap-12 items-center`}>
              <div className="lg:w-1/2">
                <div className="relative group overflow-hidden rounded-3xl shadow-xl">
                  <img 
                    data-strk-img-id={`case-img-${i}`}
                    data-strk-img={cs.img}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                    alt={cs.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-6 left-6 bg-yellow-500 text-slate-900 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    {cs.category}
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-slate-900 mb-6 leading-tight">{cs.title}</h2>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">The Challenge</h4>
                    <p className="text-slate-600 italic leading-relaxed">{cs.challenge}</p>
                  </div>
                  <div className="p-6 bg-slate-900 rounded-2xl border-l-4 border-yellow-500">
                    <h4 className="text-sm font-bold text-yellow-500 uppercase tracking-widest mb-2">The Result</h4>
                    <p className="text-white font-medium leading-relaxed">{cs.result}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;