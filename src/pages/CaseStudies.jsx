import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Quote, CheckCircle } from 'lucide-react';

const CaseStudies = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const cases = [
    {
      title: "22% Cost Reduction for EU Retailer",
      id: "case-retail",
      client: "Nordic Home Solutions",
      problem: "Buying through middlemen with hidden markups and inconsistent quality.",
      solution: "Direct factory sourcing, consolidated shipping, and 100% pre-shipment inspections.",
      results: ["22% unit cost reduction", "Reduced defect rate from 5% to 0.2%", "DDP shipping simplified logistics"]
    },
    {
      title: "New Product Launch in 60 Days",
      id: "case-launch",
      client: "TechFlow USA",
      problem: "Struggling to find a manufacturer for a custom electronic gadget with a tight window.",
      solution: "Identified a flexible ODM factory, managed rapid prototyping, and expedited production.",
      results: ["Prototype to production in 45 days", "10,000 units delivered on time", "Successfully hit Q4 launch window"]
    }
  ];

  return (
    <div ref={containerRef} className="pt-32 pb-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl font-extrabold text-primary mb-6">Success Stories</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            See how SSourcing China helps companies around the globe streamline their procurement and scale their margins.
          </p>
        </div>

        <div className="space-y-16">
          {cases.map((cs, idx) => (
            <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 flex flex-col lg:flex-row">
              <div className="lg:w-2/5 relative h-64 lg:h-auto">
                <img 
                  alt={cs.title}
                  data-strk-img-id={`case-img-${idx}`}
                  data-strk-img={`[${cs.id}] [case-client-${idx}] warehouse shipping product quality`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/20"></div>
                <div className="absolute bottom-8 left-8 bg-white p-4 rounded-xl shadow-lg">
                   <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Client</p>
                   <p id={`case-client-${idx}`} className="font-bold text-primary">{cs.client}</p>
                </div>
              </div>
              <div className="lg:w-3/5 p-12 lg:p-16">
                <div className="flex items-center space-x-2 text-accent mb-4">
                   <Quote size={32} className="fill-accent" />
                </div>
                <h2 id={cs.id} className="text-3xl font-bold text-slate-900 mb-8">{cs.title}</h2>
                
                <div className="grid md:grid-cols-2 gap-12">
                   <div>
                      <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">The Challenge</h4>
                      <p className="text-slate-600 leading-relaxed font-light">{cs.problem}</p>
                   </div>
                   <div>
                      <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">The Solution</h4>
                      <p className="text-slate-600 leading-relaxed font-light">{cs.solution}</p>
                   </div>
                </div>

                <div className="mt-12 pt-12 border-t border-slate-100">
                   <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 text-center lg:text-left">Key Accomplishments</h4>
                   <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                      {cs.results.map((r, ri) => (
                        <div key={ri} className="bg-slate-50 border border-slate-200 px-4 py-2 rounded-full flex items-center text-sm font-bold text-slate-700">
                           <CheckCircle size={16} className="text-green-500 mr-2" /> {r}
                        </div>
                      ))}
                   </div>
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
