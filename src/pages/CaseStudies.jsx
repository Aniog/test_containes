import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Quote } from 'lucide-react';

const CaseStudies = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (ImageHelper && ImageHelper.loadImages) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  const cases = [
    {
      title: 'Cost Reduction for E-commerce Giant',
      client: 'HomeDecor Co. (USA)',
      category: 'Kitchenware',
      result: '40% cost reduction on unit price while maintaining premium quality.',
      story: 'The client was buying from a domestic wholesaler. We found the original manufacturer in Guangdong, negotiated better terms, and implemented a custom QC process.',
      imgId: 'case-study-kitchen'
    },
    {
      title: 'Successful Product Development for Startup',
      client: 'TechPulse (Germany)',
      category: 'Consumer Electronics',
      result: 'Launched a custom branded smartwatch from blueprint to delivery in 6 months.',
      story: 'Managed the entire ODM process, including mold development, PCBA testing, and customized APP integration with the factory engineering team.',
      imgId: 'case-study-elec'
    },
    {
      title: 'Supply Chain Stabilization during Crisis',
      client: 'BuildStrong (Australia)',
      category: 'Industrial Hardware',
      result: 'Switched 5 unreliable suppliers to 2 top-tier partners with consistent lead times.',
      story: 'Client suffered from delayed shipments. We audited new factories, established physical warehouses for consolidation, and managed daily production schedules.',
      imgId: 'case-study-ind'
    }
  ];

  return (
    <div ref={containerRef}>
      {/* Header */}
      <section className="bg-slate-900 py-16 md:py-24 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-15"
          data-strk-bg-id="case-studies-bg"
          data-strk-bg="Busy shipping port at sunset cargo ships"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Success Stories</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Real results for real businesses. See how we help our clients thrive in the competitive global market.
          </p>
        </div>
      </section>

      {/* Case List */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {cases.map((item, index) => (
              <div 
                key={index} 
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center`}
              >
                <div className="flex-1 space-y-8">
                  <div className="space-y-2">
                    <span className="text-yellow-600 font-bold uppercase tracking-widest text-sm">{item.category}</span>
                    <h2 id={`case-title-${index}`} className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">{item.title}</h2>
                    <p className="text-slate-500 font-medium">Client: {item.client}</p>
                  </div>
                  
                  <div className="bg-slate-50 border-l-4 border-yellow-500 p-8 rounded-r-2xl">
                    <h4 className="text-lg font-bold text-slate-900 mb-2">Key Result:</h4>
                    <p className="text-xl text-slate-700 font-medium leading-relaxed italic">
                      "{item.result}"
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-bold text-slate-900">The Story:</h4>
                    <p className="text-lg text-slate-600 leading-relaxed">
                      {item.story}
                    </p>
                  </div>

                  <div className="pt-4 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center text-white">
                      <Quote className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">Highly Recommended Sourcing Partner</p>
                      <div className="flex text-yellow-500">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <span key={s}>★</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 w-full relative">
                  <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl">
                    <img
                      data-strk-img-id={item.imgId}
                      data-strk-img={`[case-title-${index}] products and factory`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-yellow-500/10 rounded-full blur-3xl -z-10" />
                  <div className="absolute -top-10 -left-10 w-48 h-48 bg-slate-900/10 rounded-full blur-3xl -z-10" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Counter (Statics) */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            <div>
              <div className="text-5xl font-extrabold text-slate-900 mb-2">500+</div>
              <div className="text-slate-500 font-medium">Global Clients</div>
            </div>
            <div>
              <div className="text-5xl font-extrabold text-slate-900 mb-2">$50M+</div>
              <div className="text-slate-500 font-medium">Sourced Value</div>
            </div>
            <div>
              <div className="text-5xl font-extrabold text-slate-900 mb-2">15+</div>
              <div className="text-slate-500 font-medium">Years Experience</div>
            </div>
            <div>
              <div className="text-5xl font-extrabold text-slate-900 mb-2">1200+</div>
              <div className="text-slate-500 font-medium">Verified Factories</div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Content Placeholder */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-10">See Us in Action</h2>
          <div className="aspect-video bg-slate-100 rounded-3xl overflow-hidden shadow-inner relative group border-8 border-slate-50">
             <div 
              className="absolute inset-0 opacity-80"
              data-strk-bg-id="case-video-thumb"
              data-strk-bg="QC inspector checking products in a China factory"
              data-strk-bg-ratio="16x9"
              data-strk-bg-width="1200"
            />
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform cursor-pointer">
                <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-slate-900 border-b-[12px] border-b-transparent ml-2" />
              </div>
            </div>
            <p className="absolute bottom-8 left-0 right-0 text-white font-bold text-lg drop-shadow-md z-10">
              Go Inside the Factories with SSourcing China
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;

