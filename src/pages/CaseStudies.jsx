import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';


const CaseStudies = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const cases = [
    {
      title: 'E-commerce Brand Scaling',
      client: 'Furniture Retailer, UK',
      challenge: 'High defect rates from current supplier and frequent shipping delays.',
      solution: 'Identified a new high-end manufacturer, implemented pre-shipment inspections, and consolidated sea freight.',
      result: 'Defect rate dropped from 8% to <0.5%. Shipping costs reduced by 15%.',
      imgId: 'case-uk-furniture-img-1'
    },
    {
      title: 'Industrial Parts Sourcing',
      client: 'Engineering Firm, Germany',
      challenge: 'Difficulty finding specialized CNC parts according to strict DIN standards.',
      solution: 'Sourced 3 specialized factories, conducted on-site material testing, and managed technical communication.',
      result: 'Successfully delivered technical parts that passed all German certification tests.',
      imgId: 'case-germany-cnc-img-2'
    },
    {
      title: 'New Product Development',
      client: 'Tech Startup, USA',
      challenge: 'Turning a prototype into mass-market electronic consumer goods.',
      solution: 'Managed DFM (Design for Manufacturing) process, sourced component suppliers, and oversaw initial 5,000 unit run.',
      result: 'Launched product 2 months ahead of schedule with 100% functional testing passed.',
      imgId: 'case-usa-tech-img-3'
    }
  ];

  return (
    <div ref={containerRef}>
      {/* Header */}
      <section className="bg-slate-900 py-16 md:py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="cases-header-title" className="text-4xl md:text-5xl font-bold">Client Success Stories</h1>
          <p id="cases-header-subtitle" className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto">
            Practical examples of how we solve real sourcing challenges for our international partners.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {cases.map((cs, index) => (
            <div key={index} className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2">
                <span className="text-blue-600 font-bold tracking-wider text-sm uppercase mb-2 block">{cs.client}</span>
                <h2 id={`case-title-${index}`} className="text-3xl font-bold text-slate-900 mb-6">{cs.title}</h2>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-slate-800 flex items-center gap-2 mb-2">
                      <span className="w-1.5 h-6 bg-red-400 rounded-full"></span>
                      The Challenge
                    </h4>
                    <p id={`case-challenge-${index}`} className="text-slate-600 leading-relaxed">{cs.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 flex items-center gap-2 mb-2">
                      <span className="w-1.5 h-6 bg-blue-400 rounded-full"></span>
                      Our Solution
                    </h4>
                    <p id={`case-solution-${index}`} className="text-slate-600 leading-relaxed">{cs.solution}</p>
                  </div>
                  <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                    <h4 className="font-bold text-green-900 flex items-center gap-2 mb-2">
                      <CheckCircle className="h-5 w-5" />
                      The Result
                    </h4>
                    <p id={`case-result-${index}`} className="text-green-800 font-medium">{cs.result}</p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 w-full">
                <img
                  data-strk-img-id={cs.imgId}
                  data-strk-img={`[case-result-${index}] [case-title-${index}] sourcing success case study factory assembly line`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  className="rounded-2xl shadow-xl w-full h-auto object-cover"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                  alt={cs.title}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Achieve Similar Results for Your Business</h2>
          <Link to="/contact" className="bg-blue-600 text-white px-10 py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors inline-block group">
            Consult With Our Experts
            <ArrowRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
