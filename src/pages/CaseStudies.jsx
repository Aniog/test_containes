import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

const CaseStudies = () => {
  const cases = [
    {
      company: "UK Electronics Retailer",
      challenge: "High defect rate (14%) from Alibaba supplier and inconsistent lead times.",
      solution: "Found a specialized manufacturer, implemented strict QC process, and established a buffer stock system.",
      results: ["Defect rate reduced to <1%", "Unit cost lowered by 12%", "Lead time stabilized at 30 days"],
      img: "electronics consumer gadgets factory quality control"
    },
    {
      company: "US Furniture Brand",
      challenge: "Difficulty communicating custom designs and poor packaging causing transit damage.",
      solution: "Managed technical sample development, verified factory craftsmanship on-site, and redesigned export packaging.",
      results: ["0% transit damage in 12 months", "Successful launch of 5 new collections", "Expanded to 40ft HQ monthly shipments"],
      img: "fine furniture manufacturing workshop professional"
    }
  ];

  return (
    <div className="bg-white">
      <section className="bg-blue-800 text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">Case Studies</h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">Real-world examples of how we've helped our clients optimize their China supply chain and protect their brand reputation.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {cases.map((cs, idx) => (
              <div key={idx} className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all">
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/2 p-8 lg:p-12">
                     <span className="inline-block px-4 py-1.2 rounded-full bg-blue-50 text-blue-700 text-xs font-bold mb-6 uppercase tracking-wider">SUCCESS STORY</span>
                     <h2 className="text-3xl font-bold text-slate-900 mb-8">{cs.company}</h2>
                     
                     <div className="space-y-8 mb-10">
                       <div>
                         <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">The Challenge</h4>
                         <p className="text-slate-600 leading-relaxed font-medium">{cs.challenge}</p>
                       </div>
                       <div>
                         <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Our Solution</h4>
                         <p className="text-slate-600 leading-relaxed">{cs.solution}</p>
                       </div>
                     </div>

                     <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                        <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-4">Key Results</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {cs.results.map((res, rIdx) => (
                            <li key={rIdx} className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                              <span className="text-slate-700 text-sm font-semibold">{res}</span>
                            </li>
                          ))}
                        </ul>
                     </div>
                  </div>
                  <div className="lg:w-1/2 bg-slate-100 min-h-[400px]">
                    <img 
                      data-strk-img-id={`case-img-${idx}`}
                      data-strk-img={`${cs.img} china sourcing success story`}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={cs.company}
                      className="w-full h-full object-cover"
                    />
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

export default CaseStudies;
EOF > /workspace/my-app/src/pages/CaseStudies.jsx
import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

const CaseStudies = () => {
  const cases = [
    {
      company: "UK Electronics Retailer",
      challenge: "High defect rate (14%) from Alibaba supplier and inconsistent lead times.",
      solution: "Found a specialized manufacturer, implemented strict QC process, and established a buffer stock system.",
      results: ["Defect rate reduced to <1%", "Unit cost lowered by 12%", "Lead time stabilized at 30 days"],
      img: "electronics consumer gadgets factory quality control"
    },
    {
      company: "US Furniture Brand",
      challenge: "Difficulty communicating custom designs and poor packaging causing transit damage.",
      solution: "Managed technical sample development, verified factory craftsmanship on-site, and redesigned export packaging.",
      results: ["0% transit damage in 12 months", "Successful launch of 5 new collections", "Expanded to 40ft HQ monthly shipments"],
      img: "fine furniture manufacturing workshop professional"
    }
  ];

  return (
    <div className="bg-white">
      <section className="bg-blue-800 text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">Case Studies</h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">Real-world examples of how we've helped our clients optimize their China supply chain and protect their brand reputation.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {cases.map((cs, idx) => (
              <div key={idx} className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all">
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/2 p-8 lg:p-12">
                     <span className="inline-block px-4 py-1.2 rounded-full bg-blue-50 text-blue-700 text-xs font-bold mb-6 uppercase tracking-wider">SUCCESS STORY</span>
                     <h2 className="text-3xl font-bold text-slate-900 mb-8">{cs.company}</h2>
                     
                     <div className="space-y-8 mb-10">
                       <div>
                         <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">The Challenge</h4>
                         <p className="text-slate-600 leading-relaxed font-medium">{cs.challenge}</p>
                       </div>
                       <div>
                         <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Our Solution</h4>
                         <p className="text-slate-600 leading-relaxed">{cs.solution}</p>
                       </div>
                     </div>

                     <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                        <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-4">Key Results</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {cs.results.map((res, rIdx) => (
                            <li key={rIdx} className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                              <span className="text-slate-700 text-sm font-semibold">{res}</span>
                            </li>
                          ))}
                        </ul>
                     </div>
                  </div>
                  <div className="lg:w-1/2 bg-slate-100 min-h-[400px]">
                    <img 
                      data-strk-img-id={`case-img-${idx}`}
                      data-strk-img={`${cs.img} china sourcing success story`}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={cs.company}
                      className="w-full h-full object-cover"
                    />
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

export default CaseStudies;
