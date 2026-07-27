import React, { useEffect, useRef } from 'react';
import { ArrowRight, TrendingUp, Clock, DollarSign } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';

export default function CaseStudies() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const cases = [
    {
      id: 'case-1',
      client: 'US-based Tech Accessories Brand',
      title: 'Scaling from $50k to $500k monthly revenue with reliable OEM partners',
      challenge: 'The client was experiencing severe quality control issues with their previous supplier, leading to high Amazon return rates and negative reviews.',
      solution: 'We conducted a comprehensive audit of 5 new factories, selected a specialized OEM manufacturer, and implemented our DUPRO (During Production) and PSI (Pre-Shipment) inspection protocol.',
      results: [
        { label: 'Defect Rate Reduction', value: '85%' },
        { label: 'Cost Savings on Unit Price', value: '12%' },
        { label: 'Increase in 5-star Reviews', value: '40%' }
      ],
      imgId: 'cs-tech-1a2b',
      imgContext: 'consumer electronics headphones quality control'
    },
    {
      id: 'case-2',
      client: 'European Home Goods Retailer',
      title: 'Streamlining a fragmented supply chain of 15+ different vendors',
      challenge: 'Managing communications, sample approvals, and logistics across 15 different small manufacturers in China was becoming a full-time job for the client\'s purchasing team.',
      solution: 'SSourcing China stepped in as their central hub. We consolidated communications, negotiated standardized payment terms, and consolidated LCL (Less than Container Load) shipments into FCL (Full Container Load).',
      results: [
        { label: 'Consolidation Savings/Month', value: '$4,500' },
        { label: 'Saved Management Time/Week', value: '25 hrs' },
        { label: 'Improved On-Time Delivery', value: '98%' }
      ],
      imgId: 'cs-home-3c4d',
      imgContext: 'home goods furniture warehouse shipping consolidation'
    },
    {
      id: 'case-3',
      client: 'Australian Fitness Equipment Startup',
      title: 'Developing a custom high-end product from scratch in under 4 months',
      challenge: 'The client had a unique patent-pending design but struggled to find a factory capable of producing the complex molds within their required timeline and budget.',
      solution: 'We utilized our network to find an engineering-focused factory willing to co-invest in the mold tooling. Our local engineers oversaw the prototyping process on-site.',
      results: [
        { label: 'Time to First Prototype', value: '28 Days' },
        { label: 'Tooling Cost Reduction', value: '30%' },
        { label: 'Successful Kickstarter Launch', value: '$1.2M' }
      ],
      imgId: 'cs-fitness-5e6f',
      imgContext: 'fitness equipment design prototype engineering'
    }
  ];

  return (
    <div ref={containerRef}>
      <div className="bg-slate-900 py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="page-title" className="text-4xl font-extrabold text-white tracking-tight sm:text-5xl">
            Case Studies
          </h1>
          <p className="mt-4 text-xl text-slate-300 max-w-3xl mx-auto">
            Real examples of how we've helped international buyers overcome sourcing challenges and grow their businesses.
          </p>
        </div>
      </div>

      <div className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          
          {cases.map((cs, index) => {
             const titleId = `cs-title-${cs.id}`;
             const descId = `cs-challenge-${cs.id}`;
             const isEven = index % 2 !== 0;

             return (
              <div key={cs.id} className={`lg:grid lg:grid-cols-2 lg:gap-16 items-center ${isEven ? 'lg:rtl' : ''}`}>
                 <div className={`mt-12 lg:mt-0 ${isEven ? 'lg:order-2' : ''}`}>
                    <div className="text-sm font-semibold text-blue-600 tracking-wide uppercase mb-2">
                        {cs.client}
                    </div>
                    <h2 id={titleId} className="text-3xl font-bold text-slate-900 mb-6">{cs.title}</h2>
                    
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold text-slate-900">The Challenge</h3>
                            <p id={descId} className="mt-2 text-slate-600 leading-relaxed">{cs.challenge}</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-slate-900">The Solution</h3>
                            <p className="mt-2 text-slate-600 leading-relaxed">{cs.solution}</p>
                        </div>
                    </div>

                    <div className="mt-10 grid grid-cols-3 gap-6 border-t border-slate-200 pt-8">
                        {cs.results.map((res, i) => (
                            <div key={i}>
                                <div className="text-2xl font-bold text-green-600">{res.value}</div>
                                <div className="text-sm font-medium text-slate-500 mt-1 leading-tight">{res.label}</div>
                            </div>
                        ))}
                    </div>
                 </div>

                 <div className={isEven ? 'lg:order-1 lg:pl-16' : 'lg:pr-16'}>
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-slate-200 lg:scale-105">
                        <img 
                            alt={cs.client}
                            className="w-full h-full object-cover"
                            data-strk-img-id={cs.imgId}
                            data-strk-img={`[${descId}] [${titleId}] ${cs.imgContext} business success`}
                            data-strk-img-ratio="4x3"
                            data-strk-img-width="800"
                            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        />
                    </div>
                 </div>
              </div>
             )
          })}

        </div>
      </div>
      
      {/* CTA */}
      <div className="bg-white py-16 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-blue-50 rounded-3xl p-12">
            <h2 className="text-3xl font-bold text-slate-900">Ready to write your own success story?</h2>
            <p className="mt-4 text-xl text-slate-600 mb-8 max-w-2xl mx-auto">Let's discuss how our local expertise can solve your specifically supply chain bottlenecks.</p>
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-md">
                Book a Free Consultation
            </Link>
        </div>
      </div>
    </div>
  );
}
