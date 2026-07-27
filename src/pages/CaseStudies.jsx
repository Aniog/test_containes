import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';

const CaseStudies = () => {
  const containerRef = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const cases = [
    { 
       client: 'UK Home Decor Brand', 
       challenge: 'High defect rates from current supplier and inconsistent communication.', 
       solution: 'Identified a new audited factory, implemented strict pre-shipment inspections.', 
       result: 'Reduced defect rate by 95% and saved 15% on procurement costs.',
       imgId: 'case-img-1'
    },
    { 
       client: 'US E-commerce Seller', 
       challenge: 'Complex private label product with multiple parts from different factories.', 
       solution: 'Consolidated materials in our warehouse, managed assembly and QC.', 
       result: 'Successfully launched product with 4.8 star rating on Amazon.',
       imgId: 'case-img-2'
    },
    { 
       client: 'Australian Tech Startup', 
       challenge: 'Sourcing custom electronic components with low MOQ.', 
       solution: 'Leveraged factory networks to find a supplier willing to grow with the client.', 
       result: 'Secured stable supply chain for prototype and first production run.',
       imgId: 'case-img-3'
    }
  ];

  return (
    <div ref={containerRef}>
      <section className="bg-primary text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Case Studies</h1>
        <p className="text-xl opacity-90">Real results for our global clients.</p>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="space-y-20">
          {cases.map((cs, i) => (
            <div key={i} className={`flex flex-col lg:flex-row items-center gap-12 ${i % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
              <div className="flex-1">
                <span className="text-accent font-bold uppercase tracking-widest text-sm">Success Story</span>
                <h2 className="text-3xl font-bold text-primary mt-2 mb-6">{cs.client}</h2>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-slate-900">The Challenge:</h4>
                    <p className="text-slate-600">{cs.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Our Solution:</h4>
                    <p className="text-slate-600">{cs.solution}</p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-accent">
                    <h4 className="font-bold text-slate-900">The Result:</h4>
                    <p className="text-slate-600 italic">"{cs.result}"</p>
                  </div>
                </div>
              </div>
              <div className="flex-1 w-full">
                <img 
                  data-strk-img-id={cs.imgId}
                  data-strk-img={`case study ${cs.client} china production qc`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="rounded-2xl shadow-2xl w-full"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
export default CaseStudies;
