import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import { TrendingUp, Clock, Target } from 'lucide-react';
import strkImgConfig from '@/strk-img-config.json';

const studies = [
  {
    id: "smart-home",
    client: "European Smart Home Retailer",
    challenge: "Client was experiencing a 15% defect rate from their previous supplier on WiFi smart plugs, damaging their Amazon rating.",
    solution: "We audited 4 new factories, selecting one with strict ISO9001 compliance. We implemented a 3-stage QC process (PPI, DPI, PSI) before any shipment left China.",
    result: "Defect rate dropped to 0.8%. Client regained their Amazon Best Seller status within 3 months.",
    metrics: [
      { label: "Defect Rate Reduction", value: "94%", icon: TrendingUp },
      { label: "Time to find factory", value: "14 Days", icon: Clock },
    ]
  },
  {
    id: "furniture-brand",
    client: "US Direct-to-Consumer Furniture Brand",
    challenge: "High logistics costs due to shipping multiple components from different factories. Final assembly was costly in the US.",
    solution: "We sourced a primary manufacturer willing to receive components from other suppliers, perform final assembly in China, and pack into custom retail boxes.",
    result: "Saved 22% on overall production and shipping costs. Products arrived ready for direct fulfillment to end consumers.",
    metrics: [
      { label: "Cost Savings", value: "22%", icon: TrendingUp },
      { label: "Assembly Error Rate", value: "0%", icon: Target },
    ]
  }
];

const CaseStudies = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="bg-white">
      {/* Header */}
      <div className="bg-slate-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl" id="cases-title">Client Success Stories</h1>
          <p className="mt-6 text-lg leading-8 text-slate-300 max-w-2xl mx-auto" id="cases-desc">
            See how we've helped businesses around the world optimize their supply chain, improve product quality, and increase profit margins.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 space-y-32">
        {studies.map((study, index) => (
          <div key={study.id} className={`flex flex-col lg:flex-row gap-12 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
             <div className="lg:w-1/2 w-full">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 shadow-lg">
                  <img
                    data-strk-img-id={`case-study-${study.id}`}
                    data-strk-img={`[study-client-${study.id}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${study.client} Case Study`}
                    className="w-full h-full object-cover"
                  />
                </div>
             </div>
             <div className="lg:w-1/2 w-full">
                <h2 className="text-3xl font-bold text-slate-900 mb-6" id={`study-client-${study.id}`}>{study.client}</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">The Challenge:</h3>
                    <p className="text-slate-600 mt-2">{study.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">Our Solution:</h3>
                    <p className="text-slate-600 mt-2">{study.solution}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-600">The Result:</h3>
                    <p className="text-slate-600 mt-2 font-medium">{study.result}</p>
                  </div>
                </div>
                
                <div className="mt-8 grid grid-cols-2 gap-4 border-t border-slate-200 pt-8">
                  {study.metrics.map((metric, idx) => (
                    <div key={idx} className="flex flex-col">
                      <div className="flex items-center gap-2 text-slate-500 mb-1">
                        <metric.icon className="h-4 w-4" />
                        <span className="text-sm">{metric.label}</span>
                      </div>
                      <span className="text-2xl font-bold text-slate-900">{metric.value}</span>
                    </div>
                  ))}
                </div>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;