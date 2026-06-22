import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';
import { TrendingDown, Users, ShieldAlert, Award } from 'lucide-react';

const cases = [
  {
    id: 'case-1',
    client: 'UK E-commerce Retailer',
    industry: 'Consumer Electronics',
    challenge: 'The client was experiencing a 15% defect rate with their previous supplier, leading to negative reviews and high return costs.',
    solution: 'We audited 5 new factories, selected one with strict ISO9001 compliance, and implemented a rigorous pre-shipment inspection plan (AQL 1.0).',
    result: 'Defect rate dropped to <1%. Overall product cost decreased by 8% due to direct factory negotiation.',
    metrics: [
      { icon: TrendingDown, label: 'Defect Rate', value: '< 1%' },
      { icon: Award, label: 'Quality Score', value: '99%' }
    ],
    imgQuery: 'consumer electronics smart devices inspection sorting',
    imgId: 'cs-img-elec-123'
  },
  {
    id: 'case-2',
    client: 'US Hardware Startup',
    industry: 'Custom Machinery Parts',
    challenge: 'Needed a prototype manufactured with highly specific tolerances, but struggled with communication and IP theft concerns.',
    solution: 'Signed a strict local NNN agreement. Managed the tooling process closely with our in-house engineers translating technical requirements.',
    result: 'Prototype delivered on time. Mass production initiated with zero IP leakage and 100% adherence to technical drawings.',
    metrics: [
      { icon: ShieldAlert, label: 'IP Breaches', value: '0' },
      { icon: Users, label: 'Tolerance', value: '±0.01mm' }
    ],
    imgQuery: 'engineers working on prototype blueprint CNC machine',
    imgId: 'cs-img-mach-456'
  },
  {
    id: 'case-3',
    client: 'Australian Furniture Brand',
    industry: 'Home & Outdoor Furniture',
    challenge: 'Shipping heavy items was destroying their margins. Factory communication regarding packaging dimensions was poor.',
    solution: 'We re-negotiated packaging methods to flat-pack designs, saving space. Consolidated shipments with other LCL cargo.',
    result: 'Reduced shipping volume by 35%, significantly dropping the landed cost per unit and boosting their profit margin.',
    metrics: [
      { icon: TrendingDown, label: 'Shipping Vol.', value: '-35%' },
      { icon: TrendingDown, label: 'Landed Cost', value: '-22%' }
    ],
    imgQuery: 'flat pack furniture warehouse shipping container',
    imgId: 'cs-img-furn-789'
  }
];

export default function CaseStudies() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
        if(containerRef.current) {
            ImageHelper.loadImages(strkImgConfig, containerRef.current);
        }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef} className="w-full">
      {/* Header Section */}
      <section className="bg-blue-900 py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 id="cases-page-title" className="text-4xl md:text-5xl font-bold text-white mb-6">Case Studies</h1>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            See how we have helped businesses worldwide overcome sourcing challenges, reduce costs, and improve quality.
          </p>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {cases.map((study) => (
            <div key={study.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col lg:flex-row hover:shadow-md transition-shadow">
              
              {/* Image Side */}
              <div className="lg:w-2/5 relative min-h-[300px] lg:min-h-full bg-slate-200">
                <img
                  alt={study.industry}
                  className="absolute inset-0 w-full h-full object-cover"
                  data-strk-img-id={study.imgId}
                  data-strk-img={`[cs-title-${study.id}] ${study.imgQuery}`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  {study.industry}
                </div>
              </div>
              
              {/* Content Side */}
              <div className="lg:w-3/5 p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <h2 id={`cs-title-${study.id}`} className="text-2xl lg:text-3xl font-bold text-slate-900 mb-2">
                    {study.client}
                  </h2>
                  <div className="w-16 h-1 bg-blue-800 mb-8"></div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">The Challenge</h4>
                      <p className="text-slate-700 leading-relaxed">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Our Solution</h4>
                      <p className="text-slate-700 leading-relaxed">{study.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">The Result</h4>
                      <p className="text-slate-900 font-medium leading-relaxed">{study.result}</p>
                    </div>
                  </div>
                </div>
                
                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mt-10 pt-6 border-t border-slate-100">
                  {study.metrics.map((metric, idx) => {
                    const Icon = metric.icon;
                    return (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="bg-blue-50 p-2 rounded-lg text-blue-800">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="text-xl font-bold text-slate-900">{metric.value}</div>
                          <div className="text-xs text-slate-500 uppercase tracking-wider font-medium">{metric.label}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-800 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Write Your Success Story</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Whether you are struggling with quality issues or looking to reduce costs, our team is ready to analyze your situation.
          </p>
          <Link to="/contact" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-md text-lg transition-colors shadow-lg">
            Discuss Your Project
          </Link>
        </div>
      </section>
    </div>
  );
}