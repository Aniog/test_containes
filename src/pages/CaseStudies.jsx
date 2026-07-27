import React from 'react';
import { ArrowRight, Trophy, TrendingUp, DollarSign } from 'lucide-react';

const CaseStudies = () => {
  const cases = [
    {
      title: "Retail Brand: 30% Cost Reduction in Electronics",
      client: "UK Consumer Electronics Retailer",
      challenge: "High defect rates and rising manufacturer prices for power bank series.",
      solution: "Found a specialized OEM in Dongguan, restructured the circuit board design for efficiency, and implemented 100% functional testing protocol.",
      results: ["28.5% reduction in unit cost", "Defect rate dropped from 4% to 0.15%", "Successful launch of 12 new SKUs"],
      imgId: "case-img-1"
    },
    {
      title: "Startup: From CAD to Production in 45 Days",
      client: "US Fitness Brand",
      challenge: "Technical difficulty in manufacturing a custom adjustable dumbbell system.",
      solution: "Engineered prototype refinements with the factory and managed the entire molding process.",
      results: ["Shortened Lead time by 20 days", "Secured mold ownership for client", "Seamless shipping during peak season"],
      imgId: "case-img-2"
    },
    {
      title: "Scaling: Multi-factory Supply Chain Consolidation",
      client: "German Furniture Distributor",
      challenge: "Managing 15 different suppliers across Zhejiang and Guangdong.",
      solution: "Established a central consolidation warehouse in Ningbo and a unified QC reporting system across all sites.",
      results: ["40% savings on LCL shipping costs", "Unified quality standard across all SKUs", "Real-time inventory visibility"],
      imgId: "case-img-3"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="bg-slate-900 py-24 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Success Stories</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">Real results for businesses worldwide. We take the complexity out of China sourcing so you can focus on growth.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 space-y-12">
          {cases.map((cs, idx) => (
            <div key={idx} className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden flex flex-col lg:flex-row max-w-6xl mx-auto">
              <div className="lg:w-1/3 h-64 lg:h-auto overflow-hidden">
                <img 
                  data-strk-img-id={cs.imgId}
                  data-strk-img={`[case-title-${idx}] [case-client-${idx}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={cs.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="lg:w-2/3 p-10 lg:p-16 flex flex-col justify-center">
                <span id={`case-client-${idx}`} className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-4">{cs.client}</span>
                <h2 id={`case-title-${idx}`} className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">{cs.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                  <div>
                    <h3 className="text-sm font-bold text-slate-400 uppercase mb-2">The Challenge</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{cs.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-400 uppercase mb-2">The Solution</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{cs.solution}</p>
                  </div>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 grid grid-cols-1 md:grid-cols-3 gap-6">
                  {cs.results.map((res, rIdx) => (
                    <div key={rIdx} className="flex items-center text-slate-900 font-bold text-sm">
                      <TrendingUp className="text-amber-500 w-5 h-5 mr-3 flex-shrink-0" />
                      {res}
                    </div>
                  ))}
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
