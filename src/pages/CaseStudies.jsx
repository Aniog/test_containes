import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowUpRight, ShieldCheck, TrendingUp, DollarSign } from 'lucide-react';

const CaseStudies = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const cases = [
    {
      title: 'Kitchenware Brand Expansion',
      client: 'Retailer (USA)',
      challenge: 'High defect rates from previous supplier and scaling difficulties.',
      solution: 'We sourced a new audited factory, implemented mandatory pre-shipment inspections, and negotiated a 15% price reduction via bulk material pre-buying.',
      result: 'Defect rate dropped from 4.2% to 0.1%. Savings: $45,000/year.',
      category: 'Home & Kitchen',
      img: 'Premium stainless steel kitchen utensils on a clean marble counter'
    },
    {
      title: 'Electronics Private Label Startup',
      client: 'E-commerce Brand (Germany)',
      challenge: 'Complex OEM requirements for custom PCB design and specialized casing.',
      solution: 'Coordinated between PCB design house and assembly factory in Shenzhen. Managed rigorous testing of battery components.',
      result: 'Successfully launched 3 SKUs on schedule. 100% compliance with EU safety regulations.',
      category: 'Electronics',
      img: 'Inside of a high tech electronics assembly facility in Shenzhen'
    },
    {
      title: 'Construction Hardware Supply',
      client: 'Construction Group (UAE)',
      challenge: 'Inconsistent material quality led to job site failures.',
      solution: 'Established a strict AQL inspection protocol. Physically verified raw material batches before production started.',
      result: 'Maintained 0% failure rate over 2 years of ongoing supply. Consistent material strength verified by lab tests.',
      category: 'Industrial',
      img: 'Galvanized steel construction hardware organized in industrial boxes'
    }
  ];

  return (
    <div ref={containerRef} className="bg-white min-h-screen">
      <section className="bg-slate-50 py-20 lg:py-32 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="cases-page-title" className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6">Case Studies</h1>
          <p id="cases-page-subtitle" className="text-xl text-slate-500 max-w-2xl mx-auto">
            Practical examples of how we solve complex sourcing challenges and protect our clients' interests.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {cases.map((cs, idx) => (
            <div key={idx} className={`lg:grid lg:grid-cols-2 lg:gap-16 items-center`}>
              <div className={idx % 2 !== 0 ? 'lg:order-2' : ''}>
                <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-bold tracking-wide uppercase mb-6">
                  {cs.category}
                </div>
                <h2 id={`case-title-${idx}`} className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-6">{cs.title}</h2>
                <div className="space-y-8">
                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <h4 className="font-bold text-slate-900 flex items-center mb-2">
                       <ShieldCheck className="h-5 w-5 text-red-500 mr-2" /> The Challenge
                    </h4>
                    <p className="text-slate-600 leading-relaxed">{cs.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 flex items-center mb-2">
                       <TrendingUp className="h-5 w-5 text-blue-500 mr-2" /> Our Solution
                    </h4>
                    <p className="text-slate-600 leading-relaxed">{cs.solution}</p>
                  </div>
                  <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
                    <h4 className="font-bold text-blue-900 flex items-center mb-2">
                       <DollarSign className="h-5 w-5 text-blue-600 mr-2" /> The Result
                    </h4>
                    <p className="text-blue-900 font-semibold leading-relaxed">{cs.result}</p>
                  </div>
                </div>
              </div>
              <div className={`mt-12 lg:mt-0 ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}>
                 <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                    <img
                      data-strk-img-id={`case-img-${idx}`}
                      data-strk-img={`[case-title-${idx}] ${cs.img}`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={cs.title}
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900 p-8 pt-20">
                       <div className="flex items-center text-white font-medium">
                          <span className="opacity-60 mr-2">Client:</span>
                          <span>{cs.client}</span>
                       </div>
                    </div>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Want more references?</h3>
          <p className="text-lg text-slate-600 mb-8">
            Due to NDAs, we can only display a limited selection of public cases. Contact us for category-specific references relevant to your industry.
          </p>
          <a href="/contact" className="inline-flex items-center text-blue-600 font-bold hover:underline underline-offset-4">
             Request Industry References <ArrowUpRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
