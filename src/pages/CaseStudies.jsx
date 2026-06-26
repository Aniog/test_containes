import React, { useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';

export default function CaseStudies() {
  const containerRef = useRef(null);

  useEffect(() => {
    try {
      if (ImageHelper && ImageHelper.loadImages && strkImgConfig) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    } catch (e) {
      console.log('ImageHelper not available');
    }
  }, []);

  const cases = [
    {
      id: "cs1",
      client: "UK E-commerce Brand",
      product: "Smart Pet Feeders",
      challenge: "The client was experiencing a 15% defect rate from their previous Alibaba supplier, causing negative Amazon reviews.",
      solution: "We audited 3 new factories, selected an ISO-certified manufacturer, and implemented strict AQL 1.5 pre-shipment inspections.",
      result: "Defect rate dropped to 0.5%, cost reduced by 8%, and Amazon rating improved from 3.8 to 4.6 stars.",
      imgQuery: "smart pet feeder product quality inspection factory",
    },
    {
      id: "cs2",
      client: "US Retail Chain",
      product: "Outdoor Patio Furniture",
      challenge: "The client needed to consolidate orders from 4 different factories into mixed containers to save on massive LCL shipping costs.",
      solution: "We coordinated production schedules across all 4 factories, collected the goods at our Ningbo warehouse, and optimized container loading.",
      result: "Saved $12,000 in shipping logistics costs per quarter and eliminated port demurrage fees.",
      imgQuery: "outdoor patio furniture warehouse cargo consolidation",
    },
    {
      id: "cs3",
      client: "Australian Startup",
      product: "Custom Yoga Apparel",
      challenge: "The startup needed a reliable manufacturer willing to accept a low MOQ for their first custom fabric production run.",
      solution: "We leveraged our relationship with a medium-sized garment factory to negotiate a test run of 500 pcs (down from their 2000 pc standard MOQ).",
      result: "Successfully launched the brand. Within 12 months, the client scaled to ordering 10,000 units per month.",
      imgQuery: "yoga apparel fabric samples manufacturing garments",
    }
  ];

  return (
    <div ref={containerRef} className="pt-24 pb-20 bg-white">
      {/* Header */}
      <section className="container mx-auto px-4 md:px-8 max-w-7xl mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6" id="cs-page-title">
          Client Success Stories
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto" id="cs-page-desc">
          Real examples of how we've helped global buyers overcome sourcing challenges, reduce costs, and scale their businesses.
        </p>
      </section>

      {/* Case Studies */}
      <section className="container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="space-y-16">
          {cases.map((study, index) => (
            <div key={study.id} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 flex flex-col md:flex-row">
              <div className="md:w-2/5 aspect-square md:aspect-auto bg-slate-100 relative">
                 <img 
                    data-strk-img-id={`cs-img-${study.id}`}
                    data-strk-img={`[cs-prod-${study.id}] ${study.imgQuery}`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={study.product}
                    className="w-full h-full object-cover"
                  />
              </div>
              <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-center">
                <div className="text-sm font-bold text-primary mb-2 uppercase tracking-wide">
                  {study.client}
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6" id={`cs-prod-${study.id}`}>
                  {study.product}
                </h2>
                
                <div className="space-y-4 mb-8">
                  <div>
                    <strong className="text-slate-900 block mb-1">The Challenge:</strong>
                    <p className="text-slate-600 leading-relaxed">{study.challenge}</p>
                  </div>
                  <div>
                    <strong className="text-slate-900 block mb-1">Our Solution:</strong>
                    <p className="text-slate-600 leading-relaxed">{study.solution}</p>
                  </div>
                </div>

                <div className="bg-emerald-50 rounded-lg p-5 border border-emerald-100">
                  <div className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-emerald-900 block mb-1">The Result:</strong>
                      <p className="text-emerald-800">{study.result}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-24 text-center px-4">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Become our next success story.</h2>
        <Link 
          to="/contact" 
          className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-md font-bold text-lg inline-flex items-center transition-colors"
        >
          Discuss Your Project With Us
          <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </section>

    </div>
  );
}