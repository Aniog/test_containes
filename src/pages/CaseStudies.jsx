import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowUpRight } from 'lucide-react';

const CaseStudies = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const cases = [
    {
      title: 'Automotive Parts for European Distributor',
      challenge: 'Client struggled with 15% defect rate from their previous supplier.',
      solution: 'We re-sourced the components from a TS16949 certified factory and implemented multi-stage QC.',
      result: 'Defect rate dropped to 0.2%, saving the client $45,000 annually in returns.',
      img: 'automotive parts manufacturing china'
    },
    {
      title: 'Eco-Friendly Packaging for US Retailer',
      challenge: 'Need to source biodegradable materials at a price point feasible for mass retail.',
      solution: 'Identified 3 specialized sustainable material factories and negotiated bulk material pricing.',
      result: 'Successfully launched product line with 22% better margin than domestic sourcing.',
      img: 'sustainable packaging boxes manufacturing'
    },
    {
      title: 'Smart Home Gadgets for Amazon Seller',
      challenge: 'Fast-paced market requiring constant innovation and strict lead times.',
      solution: 'Assigned a dedicated production manager to the factory floor to oversee the entire run.',
      result: 'Consistent 45-day lead times established, allowing for effective stock forecasting.',
      img: 'smart home gadgets production line'
    }
  ];

  return (
    <div ref={containerRef}>
      <header className="bg-slate-900 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Client Success Stories</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Real-world examples of how we've helped international buyers optimize their China supply chain.
          </p>
        </div>
      </header>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {cases.map((cs, idx) => (
              <div key={idx} className="bg-slate-50 rounded-[2.5rem] overflow-hidden flex flex-col lg:flex-row items-center gap-10">
                <div className="lg:w-1/2 h-full min-h-[400px]">
                  <img 
                    data-strk-img-id={`case-img-${idx}`}
                    data-strk-img={`${cs.img}`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="1000"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                    alt={cs.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="lg:w-1/2 p-10 lg:p-16">
                  <h2 className="text-3xl font-bold text-slate-900 mb-8">{cs.title}</h2>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-2">The Challenge</h4>
                      <p className="text-slate-700">{cs.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-2">Our Solution</h4>
                      <p className="text-slate-700">{cs.solution}</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-blue-100 italic">
                      <h4 className="text-green-600 font-bold uppercase tracking-wider text-sm mb-2">The Result</h4>
                      <p className="text-slate-900 text-lg font-medium">{cs.result}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-blue-600">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Achieve Similar Success for Your Business</h2>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:gap-4 transition-all">
            Consult With Our Experts <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
