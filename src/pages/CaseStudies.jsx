import React, { useState, useEffect } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';
import { ArrowRight, Building2, Package, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const CaseStudies = () => {
  const [studies, setStudies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudies = async () => {
      try {
        const { data: response } = await client.from('CaseStudy').select('*').eq('status', 'published');
        setStudies(response?.data?.list || []);
      } catch (err) {
        console.error('Failed to fetch case studies:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchStudies();
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-slate-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Case Studies</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Explore how we've helped businesses around the world optimize their China supply chains and reduce sourcing risks.
          </p>
        </div>
      </section>

      {/* Studies Listing */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#ff6b00]"></div>
            </div>
          ) : studies.length > 0 ? (
            <div className="space-y-24">
              {studies.map((site, index) => {
                const data = site.data;
                const isEven = index % 2 === 0;
                return (
                  <div key={site.id} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}>
                    <div className="lg:w-1/2 w-full">
                      <div className="relative group overflow-hidden rounded-2xl shadow-xl">
                        <img 
                          data-strk-img-id={`cs-img-${site.id}`}
                          data-strk-img={`[cs-title-${site.id}] [cs-industry-${site.id}] [cs-products-${site.id}]`}
                          data-strk-img-ratio="16x9"
                          data-strk-img-width="1000"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
                          alt={data.title}
                          className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4 bg-[#ff6b00] text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                          {data.industry}
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:w-1/2 w-full">
                      <h2 id={`cs-title-${site.id}`} className="text-3xl font-extrabold text-[#1a3d66] mb-6 leading-tight">
                        {data.title}
                      </h2>
                      
                      <div className="space-y-8">
                        <div>
                          <h4 className="flex items-center gap-2 text-[#ff6b00] font-bold uppercase text-xs tracking-widest mb-2">
                            <Building2 className="w-4 h-4" /> The Challenge
                          </h4>
                          <p className="text-slate-600 leading-relaxed">{data.challenge}</p>
                        </div>
                        
                        <div>
                          <h4 className="flex items-center gap-2 text-[#ff6b00] font-bold uppercase text-xs tracking-widest mb-2">
                            <Package className="w-4 h-4" /> Products & Industry
                          </h4>
                          <p id={`cs-industry-${site.id}`} className="text-slate-700 font-semibold mb-1">{data.industry}</p>
                          <p id={`cs-products-${site.id}`} className="text-slate-500 text-sm italic">{data.products}</p>
                        </div>
                        
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                          <h4 className="flex items-center gap-2 text-[#1a3d66] font-extrabold mb-3">
                            <CheckCircle2 className="w-5 h-5 text-green-500" /> Key Solution & Result
                          </h4>
                          <p className="text-slate-700 text-sm leading-relaxed mb-4">{data.solution}</p>
                          <div className="pt-4 border-t border-slate-200">
                            <p className="text-[#1a3d66] font-bold italic">" {data.result} "</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-20 text-slate-500">
              <Package className="w-16 h-16 mx-auto mb-4 opacity-20" />
              No case studies available at the moment.
            </div>
          )}
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold text-[#1a3d66] mb-6">Need Similar Results for Your Business?</h2>
          <p className="text-lg text-slate-600 mb-10">
            Tell us about your sourcing needs and let our experts design a customized solution for you.
          </p>
          <Link to="/contact" className="inline-block px-10 py-5 bg-[#ff6b00] text-white rounded-md font-bold hover:bg-[#e65a00] transition-all transform hover:scale-105 shadow-xl">
            Request a Custom Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
