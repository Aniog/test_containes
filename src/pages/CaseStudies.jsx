import React, { useEffect, useState } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';
import Layout from '@/Layout';
import { ShieldCheck, BarChart, ChevronRight, Settings } from 'lucide-react';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const CaseStudies = () => {
  const [studies, setStudies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCases = async () => {
      try {
        const { data: response } = await client
          .from('CaseStudy')
          .select('*');
        setStudies(response?.data?.list || []);
      } catch (error) {
        console.error('Failed to fetch case studies', error);
      } finally {
        setLoading(false);
      }
    };
    fetchCases();
  }, []);

  return (
    <Layout>
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Case Studies & Success Stories</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Real examples of how we've helped international buyers overcome sourcing challenges and grow their businesses.</p>
          </div>

          {loading ? (
            <div className="flex justify-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0F4C81]" />
            </div>
          ) : (
            <div className="space-y-16">
              {studies.map((study) => (
                <div key={study.id} className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex flex-col lg:flex-row">
                  <div className="lg:w-2/5 relative min-h-[300px] bg-gray-200">
                    <img 
                      data-strk-img-id={`case-img-${study.id}`}
                      data-strk-img={`[case-title-${study.id}] [case-industry-${study.id}] product`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                      className="absolute inset-0 w-full h-full object-cover"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={study.data.title}
                    />
                    <div className="absolute top-6 left-6 bg-[#D97706] text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                      {study.data.product_category}
                    </div>
                  </div>
                  <div className="lg:w-3/5 p-10 lg:p-16">
                    <div id={`case-industry-${study.id}`} className="text-[#0F4C81] font-bold text-sm tracking-widest uppercase mb-2">
                       {study.data.client_industry}
                    </div>
                    <h2 id={`case-title-${study.id}`} className="text-3xl font-bold text-gray-900 mb-8">{study.data.title}</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div>
                        <h3 className="flex items-center text-lg font-bold text-gray-900 mb-3">
                          <ShieldCheck className="w-5 h-5 text-red-500 mr-2" /> The Challenge
                        </h3>
                        <p className="text-gray-600 leading-relaxed">{study.data.challenge}</p>
                      </div>
                      <div>
                        <h3 className="flex items-center text-lg font-bold text-gray-900 mb-3">
                          <Settings className="w-5 h-5 text-blue-500 mr-2" /> Our Solution
                        </h3>
                        <p className="text-gray-600 leading-relaxed">{study.data.solution}</p>
                      </div>
                    </div>

                    <div className="mt-10 p-6 bg-gray-50 rounded-2xl border border-blue-100">
                      <h3 className="flex items-center text-lg font-bold text-gray-900 mb-3">
                        <BarChart className="w-5 h-5 text-green-600 mr-2" /> Key Results
                      </h3>
                      <p className="text-[#0F4C81] font-semibold leading-relaxed">{study.data.result}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudies;
