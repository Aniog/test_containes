import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, Star, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudies = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const studies = [
    {
      id: "electronics-startup",
      title: "Electronics Startup: From Prototype to Mass Production",
      client: "Hardware Tech Co. (USA)",
      challenge: "The client had a working prototype but struggled to find a factory capable of precision component assembly at a competitive price.",
      solution: "We vetted 15 factories, selected 2 for trial production, and managed the tooling process. Our engineers were on-site during first-batch production.",
      result: "40% cost reduction compared to domestic quotes and 0.5% defect rate in the first 10,000 units.",
      category: "Electronics"
    },
    {
      id: "furniture-retailer",
      title: "Home Decor Retailer: Supply Chain Optimization",
      client: "EuroDesign Ltd. (UK)",
      challenge: "Fragmented supplier base led to high shipping costs and inconsistent quality across product lines.",
      solution: "We consolidated 8 suppliers into 2 strategic partners and established a central consolidation warehouse in Ningbo.",
      result: "Shipping costs reduced by 25% and quality claims dropped by 80%.",
      category: "Home & Furniture"
    }
  ];

  return (
    <div ref={containerRef} className="pt-24 pb-16">
      <section className="bg-navy-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 id="case-studies-hero-title" className="text-4xl md:text-5xl font-bold mb-6">Case Studies</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Real success stories from our global clients sourcing from China.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-20">
            {studies.map((study, index) => (
              <div key={study.id} className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col lg:flex-row">
                <div className="lg:w-2/5 relative h-64 lg:h-auto">
                    <img 
                      data-strk-img-id={`study-img-${study.id}`}
                      data-strk-img={`[study-title-${study.id}] [study-category-${study.id}] manufacturing production`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                      className="absolute inset-0 w-full h-full object-cover"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                      alt={study.title}
                    />
                    <div id={`study-category-${study.id}`} className="absolute top-6 left-6 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg uppercase tracking-wider">
                        {study.category}
                    </div>
                </div>
                <div className="lg:w-3/5 p-8 lg:p-12">
                  <h2 id={`study-title-${study.id}`} className="text-2xl md:text-3xl font-bold text-navy-900 mb-6 leading-tight">{study.title}</h2>
                  <div className="space-y-6 mb-8">
                    <div>
                      <h4 className="font-bold text-blue-600 flex items-center gap-2 mb-2 uppercase text-xs tracking-widest">The Challenge</h4>
                      <p className="text-gray-600 leading-relaxed font-medium">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-600 flex items-center gap-2 mb-2 uppercase text-xs tracking-widest">Our Solution</h4>
                      <p className="text-gray-600 leading-relaxed font-medium">{study.solution}</p>
                    </div>
                    <div className="bg-navy-50 p-6 rounded-xl border-l-4 border-blue-600">
                      <h4 className="font-bold text-navy-900 flex items-center gap-2 mb-2 uppercase text-xs tracking-widest">The Result</h4>
                      <p className="text-navy-900 leading-relaxed font-bold italic">{study.result}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 py-6 border-t border-gray-100">
                    <div className="flex text-yellow-500">
                      {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={16} fill="currentColor" />)}
                    </div>
                    <p className="text-sm text-gray-400 font-bold">{study.client}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-navy-50">
        <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white p-12 rounded-3xl shadow-xl relative overflow-hidden">
                <Quote className="absolute top-0 right-0 w-32 h-32 text-blue-50 opacity-10 -mr-8 -mt-8" />
                <div className="relative z-10">
                    <p id="testimonial-text" className="text-2xl italic text-navy-900 leading-relaxed mb-8">
                        "SSourcing China has been our trusted partner for over 5 years. Their attention to detail during QC and their ability to handle complex logistics has allowed us to focus on growing our brand while they handle the sourcing headache."
                    </p>
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl uppercase">JD</div>
                        <div>
                            <h4 className="font-bold text-navy-900">James D.</h4>
                            <p className="text-gray-500">CEO, TechBrands Global</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
