import React, { useState, useEffect } from 'react';
import Hero from '@/components/home/Hero.jsx';
import ServicesSummary from '@/components/home/ServicesSummary.jsx';
import Process from '@/components/home/Process.jsx';
import ProductsSummary from '@/components/home/ProductsSummary.jsx';
import WhyUs from '@/components/home/WhyUs.jsx';
import FAQ from '@/components/home/FAQ.jsx';
import InquiryForm from '@/components/common/InquiryForm.jsx';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const Home = () => {
  const [caseStudies, setCaseStudies] = useState([
    { id: '1', data: { title: 'GPS Trackers for EU Client', category: 'Consumer Electronics', image_id: 'case-1-thumb', result: 'Loading...' } },
    { id: '2', data: { title: 'Kitchenware for Amazon Seller', category: 'Home & Decor', image_id: 'case-2-thumb', result: 'Loading...' } }
  ]);

  useEffect(() => {
    const fetchCaseStudies = async () => {
      try {
        const { data: response } = await client.from('CaseStudy').select('*').limit(2);
        const caseList = response?.data?.list || [];
        if (caseList.length > 0) {
          setCaseStudies(caseList);
        }
      } catch (error) {
        console.error('Error fetching case studies:', error);
      }
    };
    fetchCaseStudies();
  }, []);

  return (
    <div>
      <Hero />
      <ServicesSummary />
      <Process />
      <WhyUs />
      <ProductsSummary />
      
      {/* Case Studies Teaser */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary mb-12">Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            {caseStudies.length > 0 ? (
              caseStudies.map((study, idx) => {
                const data = study.data;
                return (
                  <div key={study.id} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 flex flex-col md:flex-row gap-6 items-center">
                    <div className="w-full md:w-1/3 aspect-square rounded-xl overflow-hidden bg-gray-200">
                      <img 
                        data-strk-img-id={data.image_id || `case-${study.id}`}
                        data-strk-img={`${data.title} ${data.category} factory production`}
                        data-strk-img-ratio="1x1"
                        data-strk-img-width="300"
                        src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                        alt={data.title}
                      />
                    </div>
                    <div className="w-full md:w-2/3">
                      <div className="text-secondary font-bold text-sm mb-2">{data.category}</div>
                      <h3 className="text-xl font-bold text-primary mb-3">{data.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{data.result}</p>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="col-span-2 text-center text-gray-400">Loading success stories...</div>
            )}
          </div>
        </div>
      </section>

      <FAQ />

      {/* Final Call to Action */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Source Better from China?</h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Join 500+ global businesses who rely on SSourcing China for their supply chain management. Professionalism, transparency, and results.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center mr-3">
                    <span className="text-primary text-xs font-bold">✓</span>
                  </div>
                  <span>No hidden commissions</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center mr-3">
                    <span className="text-primary text-xs font-bold">✓</span>
                  </div>
                  <span>Direct communication in English</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center mr-3">
                    <span className="text-primary text-xs font-bold">✓</span>
                  </div>
                  <span>Verified suppliers only</span>
                </div>
              </div>
            </div>
            
            <InquiryForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
