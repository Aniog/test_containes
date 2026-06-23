import React from 'react';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { TrendingUp, Clock, AlertTriangle } from 'lucide-react';

export default function CaseStudies() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const cases = [
    {
      id: "smart-home",
      title: "Scaling Production for a European Smart Home Brand",
      industry: "Electronics",
      challenge: "The client was facing 15% defect rates and 2-month delays from their trading company supplier on Alibaba, severely damaging their Amazon seller rating.",
      solution: "We audited 5 new factories in Shenzhen, selected a mid-sized manufacturer with ISO9001 certification, and implemented strict DUPRO quality control points on the PCB assembly line.",
      results: "Defect rate dropped to 0.8%. Lead time reduced from 60 days to 28 days. Cost improved by 12% by cutting out the middleman.",
      metrics: [
        { label: "Defect Rate Reduction", value: "95%", icon: <TrendingUp className="w-5 h-5 text-green-500" /> },
        { label: "Lead Time Improvement", value: "53%", icon: <Clock className="w-5 h-5 text-green-500" /> }
      ]
    },
    {
      id: "kitchen-startup",
      title: "New Product Development for a Kitchenware Startup",
      industry: "Home & Kitchen",
      challenge: "A US startup needed to develop a custom silicone and stainless steel kitchen gadget with zero prior manufacturing experience.",
      solution: "We coordinated the creation of 3D models, opened the tooling molds locally to save costs, and managed the iteration of 4 sample versions until perfection. We also sourced custom eco-friendly packaging.",
      results: "Successfully launched on Kickstarter raising $150k+. The product is now a best-seller with a 4.8-star average rating.",
      metrics: [
        { label: "Tooling Cost Saved", value: "$4,500", icon: <TrendingUp className="w-5 h-5 text-green-500" /> },
        { label: "Time to Market", value: "4 Mo", icon: <Clock className="w-5 h-5 text-green-500" /> }
      ]
    }
  ];

  return (
    <div className="bg-white py-16" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Case Studies</h1>
          <p className="text-xl text-slate-600">
            Real examples of how we've helped businesses overcome supply chain challenges, 
            reduce costs, and scale their operations globally.
          </p>
        </div>

        <div className="space-y-16 max-w-5xl mx-auto">
          {cases.map((study) => (
            <div key={study.id} className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden flex flex-col lg:flex-row shadow-sm">
              <div className="lg:w-2/5 relative min-h-[300px] bg-slate-200">
                <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={study.title}
                  data-strk-img-id={`case-study-${study.id}`}
                  data-strk-img={`${study.industry} business success meeting factory`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded uppercase tracking-wide">
                  {study.industry}
                </div>
              </div>
              <div className="lg:w-3/5 p-8 md:p-10 flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">{study.title}</h2>
                
                <div className="mb-6">
                  <h4 className="flex items-center text-sm font-bold text-red-600 uppercase tracking-wider mb-2">
                    <AlertTriangle className="w-4 h-4 mr-2" /> The Challenge
                  </h4>
                  <p className="text-slate-600">{study.challenge}</p>
                </div>
                
                <div className="mb-8">
                  <h4 className="flex items-center text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">
                    Our Solution
                  </h4>
                  <p className="text-slate-600">{study.solution}</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm mt-auto">
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">The Results</h4>
                  <p className="text-slate-700 font-medium mb-4">{study.results}</p>
                  <div className="flex gap-6 pt-4 border-t border-slate-100">
                    {study.metrics.map((metric, i) => (
                      <div key={i} className="flex flex-col">
                        <div className="flex items-center gap-2 mb-1">
                          {metric.icon}
                          <span className="text-2xl font-bold text-slate-900">{metric.value}</span>
                        </div>
                        <span className="text-xs text-slate-500 uppercase tracking-wide">{metric.label}</span>
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
}