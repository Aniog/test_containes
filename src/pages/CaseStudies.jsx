import React, { useState, useEffect } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';
import { ChevronRight, ArrowRight } from 'lucide-react';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const CaseStudies = () => {
  const [studies, setStudies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudies = async () => {
      try {
        const { data: response } = await client.from('CaseStudy').select('*');
        setStudies(response?.data?.list || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchStudies();
  }, []);

  return (
    <div className="flex flex-col">
      <section className="bg-slate-900 py-20 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Success Stories</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Real-world examples of how we've helped international brands optimize their supply chains and solve sourcing challenges.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          {loading ? (
            <div className="text-center py-20 text-slate-500">Loading case studies...</div>
          ) : studies.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {studies.map((study) => (
                <div key={study.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col">
                  {/* Image Placeholder or Actual */}
                  <div className="h-56 bg-slate-200 animate-pulse" />
                  <div className="p-8 flex-grow flex flex-col">
                    <span className="text-blue-600 text-xs font-bold uppercase tracking-wider mb-2">{study.data.category}</span>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{study.data.title}</h3>
                    <div className="space-y-4 mb-8 flex-grow">
                      <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">The Challenge</p>
                        <p className="text-slate-600 text-sm line-clamp-2">{study.data.challenge}</p>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">The Result</p>
                        <p className="text-slate-600 text-sm line-clamp-2">{study.data.results}</p>
                      </div>
                    </div>
                    <button className="flex items-center gap-1 text-blue-600 font-semibold hover:underline border-t border-slate-100 pt-4">
                      View Full Details <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Case Studies Coming Soon</h3>
              <p className="text-slate-500 mb-8 max-w-md mx-auto">We are currently documenting some of our most impactful projects. Check back soon for more success stories.</p>
              {/* Fallback to static studies if DB is empty for demo */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                  <span className="text-blue-600 text-xs font-bold uppercase mb-2 block">Electronics</span>
                  <h4 className="text-xl font-bold mb-4">Scaling Smart Home Tech for UK Retailer</h4>
                  <p className="text-slate-600 text-sm mb-4">Reduced defect rates from 12% to 0.5% through intensive factory training and on-site QC protocols.</p>
                  <p className="text-green-600 font-bold text-sm">+25% Profit Margin Improvement</p>
                </div>
                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                  <span className="text-blue-600 text-xs font-bold uppercase mb-2 block">Furniture</span>
                  <h4 className="text-xl font-bold mb-4">Consolidation for USA Boutique Hotel</h4>
                  <p className="text-slate-600 text-sm mb-4">Sourced and consolidated 50+ unique furniture items from 12 different suppliers into 5 seamless shipments.</p>
                  <p className="text-green-600 font-bold text-sm">$200k+ Cost Savings</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
