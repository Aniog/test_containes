import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CaseStudies = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  const cases = [
    {
      id: 'case-1',
      client: 'US E-commerce Brand',
      industry: 'Consumer Electronics',
      title: 'Reducing Defect Rates by 80% for Smart Home Devices',
      challenge: 'The client was facing a 12% defect rate with their previous supplier, leading to negative Amazon reviews and significant revenue loss.',
      solution: 'We conducted a comprehensive audit of 5 competing factories, negotiated with a certified Tier-1 manufacturer, and implemented strict AQL 2.5 pre-shipment inspections.',
      results: [
        'Defect rate dropped from 12% to under 2%.',
        'Unit cost reduced by 8% due to direct factory negotiation.',
        'Production time shortened by 10 days.'
      ]
    },
    {
      id: 'case-2',
      client: 'European Retail Chain',
      industry: 'Home Furniture',
      title: 'Scaling from 2 to 15 Containers/Month Seamlessly',
      challenge: 'The client wanted to rapidly expand their product line but lacked the personnel to coordinate with multiple suppliers, manage quality, and consolidate shipments.',
      solution: 'SSourcing China acted as their native sourcing office. We organized sample consolidation, standardized packaging requirements across 4 different suppliers, and managed LCL to FCL container combinations.',
      results: [
        'Shipping costs reduced by 15% through smart consolidation.',
        'Zero container delays during the peak holiday season.',
        'Successfully launched 20 new SKUs in 3 months.'
      ]
    },
    {
      id: 'case-3',
      client: 'Australian Startup',
      industry: 'Custom Apparel',
      title: 'Launching a Private Label Brand from Scratch',
      challenge: 'A fashion startup needed to develop custom athletic wear using specific recycled fabrics, but factories on Alibaba were ignoring their low initial MOQ requests.',
      solution: 'We leveraged our local network to find medium-sized, high-quality garment manufacturers willing to grow with the brand. We also facilitated the translation of complex design tech-packs.',
      results: [
        'Initial MOQ negotiated down from 1000 units to 300 units per color.',
        'Exact fabric match achieved after 2 sampling rounds.',
        'Brand achieved a successful 6-figure launch.'
      ]
    }
  ];

  return (
    <div ref={containerRef} className="flex flex-col min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 id="cases-main-title" className="text-4xl md:text-5xl font-bold mb-6">Client Success Stories</h1>
          <p id="cases-main-desc" className="text-xl text-slate-300">
            See how we have helped global businesses overcome sourcing challenges, reduce costs, and scale efficiently.
          </p>
        </div>
      </div>

      {/* Case Studies */}
      <div className="py-20">
        <div className="container mx-auto px-4 max-w-5xl space-y-16">
          {cases.map((study) => (
            <div key={study.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col md:flex-row">
              <div className="md:w-2/5 h-64 md:h-auto relative">
                <img
                  alt={`${study.industry} Case Study`}
                  className="absolute inset-0 w-full h-full object-cover"
                  data-strk-img-id={`case-study-img-${study.id}`}
                  data-strk-img={`[case-title-${study.id}] [case-industry-${study.id}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  <span id={`case-industry-${study.id}`}>{study.industry}</span>
                </div>
              </div>
              <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-center">
                <div className="text-sm font-semibold text-slate-500 mb-2">{study.client}</div>
                <h3 id={`case-title-${study.id}`} className="text-2xl font-bold text-slate-900 mb-6">{study.title}</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1 flex items-center">
                      The Challenge
                    </h4>
                    <p className="text-slate-600 leading-relaxed">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1 flex items-center">
                      Our Solution
                    </h4>
                    <p className="text-slate-600 leading-relaxed">{study.solution}</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mt-6">
                    <h4 className="font-semibold text-blue-900 mb-2">Key Results:</h4>
                    <ul className="list-disc list-inside space-y-1 text-slate-700 ml-4">
                      {study.results.map((res, i) => (
                        <li key={i}>{res}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="mt-20 text-center container mx-auto px-4">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Want to be our next success story?</h3>
          <p className="text-slate-600 mb-6 max-w-xl mx-auto">
            Let's discuss your current sourcing challenges and see how our local expertise can immediately impact your bottom line.
          </p>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;