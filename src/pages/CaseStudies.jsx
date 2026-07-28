import React, { useState, useEffect } from 'react';
import PageHeader from '@/components/common/PageHeader.jsx';
import InquiryForm from '@/components/common/InquiryForm.jsx';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const CaseStudies = () => {
  const [cases, setCases] = useState([
    { id: '1', data: { title: 'Electronics Production', client: 'London Startup', image_id: 'case-electronics-01', result: 'Loading...' } },
    { id: '2', data: { title: 'Home Goods Label', client: 'USA Retailer', image_id: 'case-home-02', result: 'Loading...' } },
    { id: '3', data: { title: 'Industrial Parts QC', client: 'German Firm', image_id: 'case-industrial-03', result: 'Loading...' } }
  ]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCases = async () => {
      try {
        const { data: response } = await client.from('CaseStudy').select('*').order('created_at', { ascending: false });
        const caseList = response?.data?.list || [];
        if (caseList.length > 0) {
          setCases(caseList);
        }
      } catch (error) {
        console.error('Error fetching case studies:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCases();
  }, []);

  return (
    <div>
      <PageHeader 
        title="Success Stories" 
        subtitle="Real-world examples of how we solve sourcing challenges in China."
        imageId="cases-header"
        searchTerms="China business meeting factory quality control result"
      />
      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="text-center py-20 text-gray-400">Loading cases...</div>
          ) : (
            <div className="grid gap-12">
              {cases.map((cs, idx) => {
                const data = cs.data;
                const stableImageId = data.image_id || (idx === 0 ? 'case-electronics-01' : idx === 1 ? 'case-home-02' : 'case-industrial-03');

                return (
                  <div key={cs.id} className="bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 shadow-sm flex flex-col md:flex-row">
                    <div className="md:w-1/3 bg-gray-200 min-h-[300px]">
                      <img 
                        data-strk-img-id={data.image_id || `case-study-${cs.id}`}
                        data-strk-img={`${data.title} ${data.category} result manufacturing`}
                        data-strk-img-ratio="4x3"
                        data-strk-img-width="600"
                        src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                        alt={data.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-10 flex flex-col justify-center">
                      <div className="text-secondary font-bold text-sm mb-2 uppercase tracking-widest">{data.client}</div>
                      <h3 className="text-2xl font-bold text-primary mb-4">{data.title}</h3>
                      <div className="space-y-4 mb-6">
                        <div>
                          <h4 className="font-bold text-primary/80 text-sm">Challenge:</h4>
                          <p className="text-gray-600 text-sm">{data.challenge}</p>
                        </div>
                        <div>
                          <h4 className="font-bold text-primary/80 text-sm">Solution:</h4>
                          <p className="text-gray-600 text-sm">{data.solution}</p>
                        </div>
                      </div>
                      <div className="p-4 bg-primary/5 border-l-4 border-secondary text-primary font-medium">
                        "Result: {data.result}"
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Want Your Story to Be Next?</h2>
          <p className="text-xl text-gray-400 mb-12">We help businesses of all sizes overcome the hurdles of importing from China. Let's build your success together.</p>
          <div className="text-left max-w-2xl mx-auto">
            <InquiryForm title="Start Your Success Story" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
