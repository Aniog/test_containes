import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const CaseStudies = () => {
  const [studies, setStudies] = useState([]);

  useEffect(() => {
    const fetchStudies = async () => {
      try {
        const { data: response, error } = await client
          .from('CaseStudy')
          .select('*');
        if (error) throw error;
        setStudies(response?.data?.list || []);
      } catch (err) {
        console.error('Error fetching case studies:', err);
      }
    };
    fetchStudies();
  }, []);

  const displayStudies = studies.length > 0 ? studies.map(s => ({
    title: s.data.title,
    client: s.data.client,
    challenge: s.data.challenge,
    solution: s.data.solution,
    results: s.data.result,
    imageQuery: s.data.title
  })) : [
    {
      title: 'Scaling an Amazon FBA Brand',
      client: 'Home Essentials Retailer (USA)',
      challenge: 'High defect rates from previous supplier and inconsistent lead times.',
      solution: 'Found a superior tier-1 factory, implemented a 100% inspection protocol, and optimized sea-freight schedules.',
      results: 'Defect rate dropped from 8% to <0.5%. Annual sourcing costs reduced by 15%.',
      imageQuery: 'amazon shipping boxes warehouse fulfillment'
    },
    {
      title: 'Custom Electronic Enclosure Development',
      client: 'IoT Startup (Germany)',
      challenge: 'Complex plastic injection molding requirement with tight tolerances.',
      solution: 'Paired client with a specialist molding factory. Oversaw the entire mold development and sampling phase.',
      results: 'First production run delivered with 100% compliance to CAD specs within 3 months.',
      imageQuery: 'high precision plastic injection molding industrial'
    },
    {
      title: 'Sustainable Packaging Sourcing',
      client: 'Eco-Cosmetics Brand (UK)',
      challenge: 'Needed 100% biodegradable packaging at a price point comparable to plastic.',
      solution: 'Identified a specialized PLA/Eco-paper factory. Negotiated a lower MOQ for the initial market launch.',
      results: 'Successful product launch. Brand maintained "Eco-Friendly" value while keeping high margins.',
      imageQuery: 'eco friendly sustainable packaging cosmetic bottles'
    }
  ];
  return (
    <div className="case-studies-page">
      <section className="bg-slate-50 py-20 border-b">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Success Stories</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            See how we help businesses worldwide navigate the complexities of China manufacturing to achieve better quality and higher margins.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {displayStudies.map((study, i) => (
              <div key={i} className={`flex flex-col lg:flex-row gap-16 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2">
                  <div className="aspect-[3/2] rounded-3xl overflow-hidden shadow-2xl bg-slate-100">
                    <img 
                      data-strk-img-id={`case-study-img-${i}`}
                      data-strk-img={`[case-title-${i}] ${study.imageQuery}`}
                      data-strk-img-ratio="3x2"
                      data-strk-img-width="700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={study.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <h2 id={`case-title-${i}`} className="text-3xl font-bold text-slate-900 mb-4">{study.title}</h2>
                  <div className="text-blue-600 font-bold mb-6">{study.client}</div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-slate-900 uppercase text-xs tracking-widest mb-2">Challenge</h4>
                      <p className="text-slate-600 text-lg leading-relaxed">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 uppercase text-xs tracking-widest mb-2">Solution</h4>
                      <p className="text-slate-600 text-lg leading-relaxed">{study.solution}</p>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-blue-600">
                      <h4 className="font-bold text-slate-900 uppercase text-xs tracking-widest mb-2">Results</h4>
                      <p className="text-slate-900 font-bold text-xl">{study.results}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Ready to Write Your Success Story?</h2>
          <button className="bg-blue-600 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors shadow-xl">
             Start Your Free Sourcing Project
          </button>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
