import React, { useEffect, useState, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { client, getRows, getSchemaData } from '@/api/db';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, ArrowRight } from 'lucide-react';

export default function CaseStudies() {
  const containerRef = useRef(null);
  const [studies, setStudies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data: response } = await client
          .from('CaseStudy')
          .select('*')
          .order('id', { ascending: false });
        
        setStudies(getRows(response));
      } catch (err) {
        console.error('Failed to fetch case studies:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [studies, loading]);

  return (
    <div ref={containerRef} className="bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div 
          className="rounded-2xl bg-blue-600 px-6 py-16 text-center sm:px-16 sm:py-24 mb-16 relative overflow-hidden"
          data-strk-bg-id="cases-hero-bg-1"
          data-strk-bg="[cases-subtitle] [cases-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1200"
        >
          <div className="relative z-10 mx-auto max-w-2xl">
            <h1 id="cases-title" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Client Success Stories</h1>
            <p id="cases-subtitle" className="mt-4 text-lg text-blue-100">
              Real-world examples of how we've helped international companies optimize their China sourcing operations.
            </p>
          </div>
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-blue-900/40 z-0" />
        </div>

        {loading ? (
          <div className="flex justify-center py-24">
            <Loader2 className="h-10 w-10 animate-spin text-blue-600" />
          </div>
        ) : (
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-12 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {studies.length > 0 ? (
              studies.map((study) => {
                const data = getSchemaData(study);
                return (
                  <Card key={study.id} className="overflow-hidden border-none shadow-lg flex flex-col md:flex-row h-full">
                    <div 
                      className="md:w-1/3 relative bg-slate-200 min-h-[200px]"
                      data-strk-bg-id={`case-bg-${study.id}`}
                      data-strk-bg={`[case-title-${study.id}] [case-client-${study.id}] factory production`}
                      data-strk-bg-ratio="4x3"
                      data-strk-bg-width="600"
                    />
                    <div className="md:w-2/3">
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="secondary">{data.category}</Badge>
                          <span id={`case-client-${study.id}`} className="text-xs font-medium text-slate-500 uppercase tracking-widest">{data.client_name}</span>
                        </div>
                        <CardTitle id={`case-title-${study.id}`} className="text-xl text-slate-900">{data.project_title}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <h4 className="text-sm font-bold text-blue-600 uppercase tracking-tight">Challenge</h4>
                          <p className="text-sm text-slate-600 mt-1">{data.challenge}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-blue-600 uppercase tracking-tight">Solution</h4>
                          <p className="text-sm text-slate-600 mt-1">{data.solution}</p>
                        </div>
                        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                           <p className="text-sm font-semibold text-slate-900 italic">"{data.result}"</p>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                );
              })
            ) : (
              <div className="col-span-full text-center py-20 bg-white rounded-xl shadow-sm">
                <p className="text-slate-500">More success stories coming soon!</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
