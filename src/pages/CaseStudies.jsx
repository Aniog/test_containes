import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, TrendingUp, BarChart, ArrowRight } from 'lucide-react';
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const CaseStudies = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  const cases = [
    {
      id: "electronics",
      title: "30% Cost Reduction for European Tech Brand",
      client: "Techgear EU",
      challenge: "Finding a reliable supplier for custom smart watch components with high precision requirements.",
      solution: "We audited 15 factories, selected the top 2, and managed the entire prototype-to-shipping process.",
      results: "30% reduction in unit cost and 99.8% quality pass rate.",
      imgId: "case-electronics-img"
    },
    {
      id: "furniture",
      title: "Efficient Supply Chain for US Home Decor Retailer",
      client: "DecorHome US",
      challenge: "Managing consolidation of products from 8 different suppliers in 3 provinces.",
      solution: "We established a central consolidation warehouse in Ningbo and handled all QC and documentation.",
      results: "40% reduction in shipping costs and eliminated late delivery penalties.",
      imgId: "case-furniture-img"
    },
    {
      id: "industrial",
      title: "Zero-Defect Quality Control for Australian Tools Importer",
      client: "BuildPro AU",
      challenge: "Recurrent quality issues with power tool motors from previous sourcing agent.",
      solution: "Implemented rigorous pre-shipment inspections and assigned a dedicated QC engineer to the production line.",
      results: "Zero customer complaints for 12 consecutive months.",
      imgId: "case-industrial-img"
    }
  ];

  return (
    <div ref={containerRef} className="bg-white">
      {/* Header */}
      <section className="bg-accent py-20 text-white">
        <div className="container-custom">
          <h1 id="case-title" className="text-4xl md:text-5xl font-display font-bold mb-6">Client Success Stories</h1>
          <p id="case-subtitle" className="text-xl text-white/80 max-w-2xl font-medium">
            Discover how we've helped businesses worldwide optimize their China supply chain and achieve measurable results.
          </p>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="py-20">
        <div className="container-custom">
          <div className="space-y-16">
            {cases.map((cs, index) => (
              <div key={cs.id} className="group bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 transition-all hover:shadow-2xl">
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/2 relative h-[300px] lg:h-auto overflow-hidden">
                    <img 
                      data-strk-img-id={cs.imgId}
                      data-strk-img={`[case-title-${cs.id}] [case-subtitle] industrial factory warehouse products`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                      alt={cs.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-6 left-6 bg-accent text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
                      Case Study
                    </div>
                  </div>
                  <div className="lg:w-1/2 p-8 md:p-12 space-y-6">
                    <div className="flex items-center space-x-2 text-accent">
                       <TrendingUp size={20} />
                       <span className="font-bold uppercase tracking-widest text-xs">Client: {cs.client}</span>
                    </div>
                    <h2 id={`case-title-${cs.id}`} className="text-3xl font-display font-bold text-slate-900 leading-tight">
                      {cs.title}
                    </h2>
                    
                    <div className="space-y-4 pt-4 border-t border-slate-100">
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 uppercase">Challenge:</h4>
                        <p className="text-slate-600 mt-1">{cs.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 uppercase">Solution:</h4>
                        <p className="text-slate-600 mt-1">{cs.solution}</p>
                      </div>
                    </div>

                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 flex items-start space-x-4">
                      <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0">
                         <CheckCircle2 size={24} />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 uppercase tracking-tighter">Impact:</h4>
                        <p className="text-slate-900 font-medium italic">{cs.results}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
         <div className="container-custom text-center max-w-3xl">
           <h2 className="text-3xl font-display font-bold text-slate-900 mb-6 font-medium">Want Results Like These?</h2>
           <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">
             Every business has unique challenges. Let us analyze your current sourcing and show you where you can optimize cost and quality.
           </p>
           <Link to="/contact" className="btn-accent px-10 py-4 text-lg font-bold">Request a Free Audit</Link>
         </div>
      </section>
    </div>
  );
};

export default CaseStudies;
