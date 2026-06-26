import React, { useEffect, useRef, useState } from 'react';
import { fetchCaseStudies } from '@/api/caseStudy';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Quote, Briefcase, ChevronRight } from 'lucide-react';

const CaseStudies = () => {
  const containerRef = useRef(null);
  const [studies, setStudies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchCaseStudies();
        setStudies(data);
      } catch (error) {
        console.error('Failed to fetch case studies:', error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  useEffect(() => {
    if (!loading) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [loading]);

  const fallbackStudies = [
    {
      id: 'static-1',
      title: 'Reducing Manufacturing Costs by 30% for a US Retailer',
      client_name: 'Urban Goods Co.',
      product_category: 'Home Decor',
      challenge: 'High production costs and inconsistent quality from current suppliers.',
      solution: 'We identified 3 direct factories, performed on-site audits, and negotiated multi-year pricing contracts.',
      result: '30% cost reduction and 0% defect rate for the first 3 shipments.'
    },
    {
      id: 'static-2',
      title: 'Scaling Consumer Electronics Production for a European Startup',
      client_name: 'TechFlow Systems',
      product_category: 'Wireless Accessories',
      challenge: 'Manufacturer struggling to scale production during the holiday season.',
      solution: 'We implemented daily production follow-ups and quality checkpoints to ensure on-time delivery.',
      result: '100k units delivered on time, with full compliance to European safety standards.'
    }
  ];

  const displayedStudies = studies.length > 0 ? studies : fallbackStudies;

  return (
    <div ref={containerRef}>
      {/* Header */}
      <section className="bg-white py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="case-studies-title" className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 italic">Case Studies</h1>
          <p id="case-studies-desc" className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real stories of how we've helped our clients overcome challenges and succeed in the Chinese market.
          </p>
        </div>
      </section>

      {/* Studies List */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16">
            {displayedStudies.map((study, idx) => (
              <div key={study.id || idx} className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row border border-gray-100">
                <div className="lg:w-2/5 relative min-h-[300px]">
                  <img 
                    data-strk-img-id={`study-img-${study.id || idx}`}
                    data-strk-img={`[study-title-${idx}] product manufacturing factory warehouse`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={study.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute top-6 left-6 bg-amber-500 text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2">
                    <Briefcase className="w-4 h-4" /> {study.product_category}
                  </div>
                </div>
                <div className="lg:w-3/5 p-10 lg:p-16">
                  <h6 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">{study.client_name}</h6>
                  <h2 id={`study-title-${idx}`} className="text-3xl font-extrabold text-gray-900 mb-8 leading-tight">
                    {study.title}
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-red-500" /> Challenge
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{study.challenge}</p>
                    </div>
                    <div>
                       <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-500" /> Solution
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{study.solution}</p>
                    </div>
                  </div>
                  
                  <div className="mt-10 pt-10 border-t border-gray-100 italic bg-gray-50 -mx-10 -mb-10 lg:-mx-16 lg:-mb-16 p-10 lg:p-16">
                    <div className="flex gap-4">
                      <Quote className="w-10 h-10 text-primary shrink-0 opacity-20" />
                      <div>
                        <h4 className="font-extrabold text-xl text-primary mb-2">The Result</h4>
                        <p className="text-gray-800 font-semibold">{study.result}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-24 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 italic">Your Success Story Starts Here</h2>
          <p className="text-blue-100 mb-12 max-w-2xl mx-auto">
            Contact us for a preliminary discussion on how we can address your sourcing challenges.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent text-white px-10 py-5 rounded-md text-lg font-bold hover:bg-amber-700 transition-all shadow-xl"
          >
            Get Expert Advice <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
