import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, ArrowRight, CheckCircle, DollarSign, BarChart3, Star, Ship, Users, Loader2 } from 'lucide-react';
import Button from '@/components/ui/button';
import { client, getRows, getSchemaData } from '@/api/postgrest-client.js';

export default function CaseStudies() {
  const [caseStudies, setCaseStudies] = useState([]);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    async function fetchCaseStudies() {
      setStatus('loading');
      try {
        const { data: response, error } = await client
          .from('Case Studies')
          .select('*')
          .eq('status', 'published')
          .order('created_at', { ascending: false });

        if (error) throw error;
        setCaseStudies(getRows(response));
        setStatus('ready');
      } catch (err) {
        console.error('Failed to load case studies:', err);
        setStatus('error');
      }
    }
    fetchCaseStudies();
  }, []);

  return (
    <div>
      {/* Page Header */}
      <section className="bg-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-accent/20 text-accent text-sm font-semibold px-4 py-1 rounded-full mb-4">Success Stories</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Case Studies</h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Real results from real partnerships. See how we have helped buyers around the world source from China with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {status === 'loading' && (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="w-8 h-8 text-primary animate-spin" />
            </div>
          )}
          {status === 'error' && (
            <div className="text-center py-20">
              <p className="text-gray-500">Unable to load case studies at this time.</p>
            </div>
          )}
          {status === 'ready' && (
            <div className="space-y-16">
              {caseStudies.map((cs, idx) => {
                const d = getSchemaData(cs);
                return (
                  <div key={cs.id} className="bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden">
                    <div className="flex flex-col lg:flex-row">
                      <div className="lg:w-2/5">
                        <div className="aspect-[4/3] lg:aspect-auto lg:h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                          <div className="text-center p-6">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                              <BarChart3 className="w-8 h-8 text-primary" />
                            </div>
                            <p className="text-sm font-semibold text-primary">{d.industry}</p>
                            <p className="text-xs text-gray-500 mt-1">{d.location}</p>
                          </div>
                        </div>
                      </div>
                      <div className="lg:w-3/5 p-6 md:p-10">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <span className="text-xs font-semibold text-accent uppercase tracking-wider bg-amber-50 px-3 py-1 rounded-full">{d.industry}</span>
                          <span className="text-xs text-gray-400 flex items-center gap-1">
                            <Users className="w-3.5 h-3.5" />
                            {d.location}
                          </span>
                        </div>
                        <h2 className="text-2xl font-bold text-primary mb-4">{d.company}</h2>

                        <div className="mb-4">
                          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Challenge</h3>
                          <p className="text-gray-600 leading-relaxed">{d.challenge}</p>
                        </div>
                        <div className="mb-4">
                          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Solution</h3>
                          <p className="text-gray-600 leading-relaxed">{d.solution}</p>
                        </div>
                        <div className="mb-6">
                          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Result</h3>
                          <p className="text-gray-600 leading-relaxed">{d.result}</p>
                        </div>

                        {d.metrics && d.metrics.length > 0 && (
                          <div className="grid grid-cols-3 gap-4">
                            {d.metrics.map((m, mi) => (
                              <div key={mi} className="text-center p-3 bg-gray-50 rounded-lg">
                                <div className="text-xl font-bold text-primary">{m.value}</div>
                                <div className="text-xs text-gray-500">{m.label}</div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">Let Us Write Your Success Story</h2>
          <p className="text-lg text-gray-300 mb-8">Contact us today for a free consultation and see how we can help you source from China with confidence.</p>
          <Link to="/contact">
            <Button variant="accent" size="lg">
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}