import React, { useEffect, useRef } from 'react';
import { Star, Quote, ChevronRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const CaseStudies = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const cases = [
    {
      client: 'EcoWare Solutions (Canada)',
      product: 'Biodegradable Tableware',
      challenge: 'The client was struggling with high defect rates (15%+) and inconsistent lead times from their previous supplier.',
      result: 'We identified a new FSC-certified factory, implemented a 3-stage QC process, and reduced the defect rate to under 1.5%.',
      img: 'biodegradable bamboo plates packaging',
      tags: ['Sourcing', 'QC', 'Logistics']
    },
    {
      client: 'Urban Tech Gear (USA)',
      product: 'Custom Smart Backpacks',
      challenge: 'Complex product design requiring integration of electronics (USB ports, LEDs) and specialized fabrics.',
      result: 'Successfully coordinated with three different sub-component suppliers and managed the final assembly at a top-tier factory in Dongguan.',
      img: 'tech backpack manufacturing production',
      tags: ['Product Development', 'Factory Audit']
    },
    {
      client: 'Wellness Hub (UK)',
      product: 'Home Fitness Equipment',
      challenge: 'Urgent need to scale production during peak demand while maintaining strict safety certifications (CE/RoHS).',
      result: 'Verified production capacity across two redundant factories to ensure supply stability and oversaw all certification testing.',
      img: 'home gym equipment production line',
      tags: ['Scale-up', 'Compliance']
    }
  ];

  return (
    <div className="bg-slate-50 py-20 lg:py-32" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Case Studies</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Real stories of how we've helped international buyers overcome sourcing challenges and build reliable supply chains in China.
          </p>
        </div>

        <div className="space-y-12">
          {cases.map((cs, index) => (
            <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200 flex flex-col lg:flex-row">
              <div className="lg:w-1/3">
                <img
                  data-strk-img-id={`case-study-img-${index}`}
                  data-strk-img={cs.img}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={cs.product}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="lg:w-2/3 p-8 lg:p-12">
                <div className="flex flex-wrap gap-2 mb-6">
                  {cs.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{cs.client}</h3>
                <div className="text-blue-600 font-semibold mb-6">Project: {cs.product}</div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-3">The Challenge</h4>
                    <p className="text-slate-600 leading-relaxed">{cs.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-3">Our Impact</h4>
                    <p className="text-slate-600 leading-relaxed">{cs.result}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-32">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-16">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm relative">
                <Quote className="w-10 h-10 text-blue-100 absolute top-4 left-4" />
                <div className="relative z-10">
                  <div className="flex text-yellow-500 mb-4">
                    {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-slate-600 mb-6 italic">
                    "SSourcing China has become an extension of our team on the ground. Their attention to detail during factory audits saved us from a potentially disastrous partnership."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-slate-200 rounded-full" />
                    <div>
                      <div className="font-bold text-slate-900 text-sm">Marketing Director</div>
                      <div className="text-slate-500 text-xs text-nowrap">Global Retailer, Germany</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
