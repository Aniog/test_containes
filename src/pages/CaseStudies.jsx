import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, CheckCircle, TrendingUp, DollarSign, Clock } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import Layout from '@/Layout';

const CaseStudies = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  const cases = [
    {
      title: '30% Cost Reduction for EU Furniture Retailer',
      client: 'HomeStyle Global (Germany)',
      challenge: 'High production costs and rising logistics charges from previous agents.',
      solution: 'Direct factory negotiation and shipping consolidation through our Hangzhou warehouse.',
      results: ['30% lower unit price', 'Consolidated 4 suppliers into 1 container', 'Zero quality defects over 3 shipments'],
      imgId: 'case-furniture'
    },
    {
      title: 'Launching a New Electronics Brand',
      client: 'TechNova (USA)',
      challenge: 'Finding a manufacturer for a custom-designed laptop stand with strict tolerances.',
      solution: 'Identified specialized aluminum extrusion factory and managed prototype revisions.',
      results: ['Passed all retail compliance tests', 'Successful Kickstarter launch', 'Scaled to 5,000 units/month'],
      imgId: 'case-electronics'
    },
    {
      title: 'Rescue from a Failing Supplier Relationship',
      client: 'Prime Supply Co (Australia)',
      challenge: 'Supplier delivered 20% defective goods and stopped responding to emails.',
      solution: 'On-site factory visit, recovery of deposit, and transition to a reliable sister factory.',
      results: ['Recovered 80% of lost deposit', '24-hour communication cycle restored', 'Total defect rate dropped below 1%'],
      imgId: 'case-rescue'
    }
  ];

  return (
    <Layout>
      <div ref={containerRef}>
        <section className="bg-primary py-24 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Case Studies</h1>
            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
              Real stories of how we've helped international buyers navigate the complexities of sourcing from China.
            </p>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-24">
              {cases.map((cs, idx) => (
                <div key={idx} className={`flex flex-col lg:flex-row gap-16 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="lg:w-1/2">
                    <img 
                      data-strk-img-id={cs.imgId}
                      data-strk-img={`[case-title-${idx}] [case-client-${idx}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={cs.title}
                      className="rounded-3xl shadow-2xl border border-gray-100"
                    />
                  </div>
                  <div className="lg:w-1/2">
                    <span className="text-accent font-bold uppercase tracking-wider text-sm mb-4 block" id={`case-client-${idx}`}>{cs.client}</span>
                    <h2 className="text-3xl font-extrabold text-primary mb-6" id={`case-title-${idx}`}>{cs.title}</h2>
                    
                    <div className="space-y-6 mb-10">
                      <div>
                        <h4 className="font-bold text-primary mb-2 flex items-center gap-2">
                          <TrendingUp className="h-5 w-5 text-accent" /> The Challenge
                        </h4>
                        <p className="text-gray-600 leading-relaxed">{cs.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-primary mb-2 flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-accent" /> Our Solution
                        </h4>
                        <p className="text-gray-600 leading-relaxed">{cs.solution}</p>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                      <h4 className="font-bold text-primary mb-4">Key Results:</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {cs.results.map((res, rIdx) => (
                          <li key={rIdx} className="flex gap-2 text-primary font-medium">
                            <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                            <span>{res}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold text-primary mb-8">Achieve similar results for your business</h2>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <NavLink to="/contact" className="bg-accent text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-accent/20">
                Get a Free Quote <ArrowRight className="h-6 w-6" />
              </NavLink>
              <NavLink to="/services" className="bg-white border-2 border-primary text-primary px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-50 transition-all flex items-center justify-center">
                Explore Our Services
              </NavLink>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CaseStudies;
