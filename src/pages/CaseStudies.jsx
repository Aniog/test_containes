import React, { useState, useEffect, useRef } from 'react';
import { DataClient, ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';
import { Trophy, ArrowRight, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const CaseStudies = () => {
  const [studies, setStudies] = useState([]);
  const [loading, setLoading] = useState(true);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!loading) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [loading, studies]);

  useEffect(() => {
    const fetchCases = async () => {
      try {
        const { data, error } = await client.from('CaseStudy').select('*').order('featured', { ascending: false });
        if (error) throw error;
        setStudies(data?.list || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchCases();
  }, []);

  // Static content to ensure the page isn't empty if the DB is empty
  const staticStudies = [
    {
      id: 'static-1',
      data: {
        title: "Cutting Manufacturing Costs by 35% for UK Electronics Brand",
        client_industry: "Consumer Electronics",
        challenge: "Client was sourcing from a middleman with high markups and inconsistent quality control.",
        solution: "We identified direct manufacturers in Dongguan, performed on-site audits, and negotiated volume discounts.",
        result: "35% cost reduction and a 12% improvement in defect rates."
      }
    },
    {
      id: 'static-2',
      data: {
        title: "Scaling Furniture Production for Australian E-commerce",
        client_industry: "Furniture",
        challenge: "Fragmented supply chain across 4 different factories caused logistics delays and mismatched colors.",
        solution: "Consolidated all orders into our Ningbo warehouse for single-point inspection and coordinated container loading.",
        result: "Reduced shipping costs by 22% and achieved perfect color matching across product lines."
      }
    }
  ];

  const displayStudies = studies.length > 0 ? studies : staticStudies;

  return (
    <div ref={containerRef} className="bg-slate-50 min-h-screen">
      <section className="bg-primary py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6">Success Stories</h1>
          <p className="text-blue-100 text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            Real projects, real results. See how we've helped businesses around the world optimize their China supply chain.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {loading ? (
             <div className="text-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
                <p className="mt-4 text-slate-500 font-bold">Loading success stories...</p>
             </div>
          ) : (
            <div className="space-y-12">
              {displayStudies.map((study) => (
                <div key={study.id} className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-200 lg:flex">
                  <div className="lg:w-1/2 relative h-80 lg:h-auto">
                    <img
                      data-strk-img-id={`study-img-${study.id}`}
                      data-strk-img={`[study-title-${study.id}] [study-industy-${study.id}] China manufacturing success`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover"
                      alt={study.data.title}
                    />
                    <div className="absolute top-6 left-6 bg-accent text-white px-6 py-2 rounded-full font-black text-sm uppercase tracking-widest shadow-lg">
                       {study.data.client_industry}
                    </div>
                  </div>
                  <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                    <h2 id={`study-title-${study.id}`} className="text-3xl font-black text-secondary mb-8 leading-tight">
                       {study.data.title}
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8 mb-10">
                      <div>
                        <h4 className="flex items-center gap-2 text-primary font-black uppercase text-xs tracking-widest mb-3">
                           Challenge
                        </h4>
                        <p className="text-slate-600 font-bold leading-relaxed">{study.data.challenge}</p>
                      </div>
                      <div>
                        <h4 className="flex items-center gap-2 text-primary font-black uppercase text-xs tracking-widest mb-3">
                           Solution
                        </h4>
                        <p className="text-slate-600 font-bold leading-relaxed">{study.data.solution}</p>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 mb-8">
                       <h4 className="flex items-center gap-2 text-primary font-black uppercase text-xs tracking-widest mb-3">
                          <Trophy size={16} /> Result
                       </h4>
                       <p className="text-secondary font-black text-lg">{study.data.result}</p>
                    </div>

                    <Link to="/contact" className="inline-flex items-center gap-2 text-primary font-black hover:gap-4 transition-all">
                       Get Results Like This <ArrowRight size={20} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-secondary">
         <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
               <div className="relative">
                  <Quote size={80} className="text-slate-800 absolute -top-10 -left-10" />
                  <p className="text-2xl md:text-3xl font-bold text-white italic leading-relaxed relative z-10">
                     "Working with SSourcing China was the best decision for our import business. Their attention to detail during QC inspections saved us from a potentially disastrous shipment of defective consumer goods."
                  </p>
                  <div className="mt-8 flex items-center gap-4">
                     <div className="w-16 h-16 rounded-full bg-slate-700"></div>
                     <div>
                        <h5 className="text-white font-bold text-lg">Mark Thompson</h5>
                        <p className="text-slate-400">CEO, GlobalTech Imports</p>
                     </div>
                  </div>
               </div>
               <div className="grid grid-cols-2 gap-8">
                  <div className="bg-slate-800 p-8 rounded-2xl text-center">
                     <p className="text-4xl font-black text-accent mb-2">98%</p>
                     <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Client Retention</p>
                  </div>
                  <div className="bg-slate-800 p-8 rounded-2xl text-center">
                     <p className="text-4xl font-black text-accent mb-2">120M+</p>
                     <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Sourcing Value</p>
                  </div>
                  <div className="bg-slate-800 p-8 rounded-2xl text-center">
                     <p className="text-4xl font-black text-accent mb-2">24h</p>
                     <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Response Time</p>
                  </div>
                  <div className="bg-slate-800 p-8 rounded-2xl text-center">
                     <p className="text-4xl font-black text-accent mb-2">5/5</p>
                     <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Google Rating</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default CaseStudies;
